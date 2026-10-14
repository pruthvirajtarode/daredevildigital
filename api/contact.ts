import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash } from 'crypto';

const sha256 = (value?: string) =>
  value ? createHash('sha256').update(value.trim().toLowerCase()).digest('hex') : undefined;

/** Trim + cap untrusted client strings before forwarding them anywhere. */
const clean = (value: unknown, max = 300): string =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const header = (req: VercelRequest, name: string): string => {
  const v = req.headers[name];
  const s = Array.isArray(v) ? v[0] : v || '';
  try {
    return decodeURIComponent(s); // Vercel URL-encodes city names
  } catch {
    return s;
  }
};

/**
 * Build flat, email-friendly lead-source fields from the client attribution
 * snapshot plus Vercel's geo-IP headers. Flat keys are used because Wix
 * Automations webhook variables don't handle nested objects well.
 */
function buildLeadSource(req: VercelRequest, data: any) {
  const a = data.attribution || {};
  const first = a.firstTouch || {};
  const last = a.lastTouch || {};
  const forwardedFor = header(req, 'x-forwarded-for').split(',')[0]?.trim();
  const country = header(req, 'x-vercel-ip-country');
  const region = header(req, 'x-vercel-ip-country-region');
  const city = header(req, 'x-vercel-ip-city');

  const utm = (t: any) =>
    [t.utmSource, t.utmMedium, t.utmCampaign].map((v: unknown) => clean(v, 100)).filter(Boolean).join(' / ');

  return {
    trafficSource: clean(last.source) || clean(first.source) || 'Unknown (no attribution data)',
    firstTouchSource: clean(first.source),
    landingPage: clean(last.landingPage || first.landingPage, 500),
    referrer: clean(last.referrer || first.referrer, 500),
    utm: utm(last) || utm(first),
    adClickId: clean(last.gclid || first.gclid) ? 'gclid' : clean(last.fbclid || first.fbclid) ? 'fbclid' : '',
    firstVisitAt: clean(first.timestamp, 40),
    formPage: clean(a.formPage, 500) || clean(data.meta?.eventSourceUrl, 500),
    pagesViewed: Number.isFinite(Number(a.pagesViewed)) ? String(Number(a.pagesViewed)) : '',
    visitorLocation: [city, region, country].filter(Boolean).join(', ') || 'Unknown',
    visitorIp: forwardedFor || '',
    userAgent: clean(header(req, 'user-agent'), 300)
  };
}

/**
 * Send a server-side "Lead" event to Meta via the Conversions API.
 * Uses the same event_id as the browser Pixel so Meta deduplicates them.
 * Never throws: tracking must not break the contact form.
 */
async function sendMetaLeadEvent(req: VercelRequest, data: any) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return; // CAPI not configured yet

  const apiVersion = process.env.META_GRAPH_API_VERSION || 'v25.0';
  const meta = data.meta || {};
  const forwardedFor = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim();
  let phoneDigits = typeof data.phone === 'string' ? data.phone.replace(/\D/g, '') : undefined;
  // Meta needs the country code; local Singapore numbers are 8 digits
  if (phoneDigits && phoneDigits.length === 8) phoneDigits = '65' + phoneDigits;

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: meta.eventId,
        action_source: 'website',
        event_source_url: meta.eventSourceUrl || req.headers.referer,
        user_data: {
          em: sha256(data.email),
          ph: sha256(phoneDigits),
          fn: sha256(data.firstName),
          ln: sha256(data.lastName),
          country: sha256('sg'),
          client_ip_address: forwardedFor || req.socket?.remoteAddress,
          client_user_agent: req.headers['user-agent'],
          fbp: meta.fbp,
          fbc: meta.fbc
        },
        custom_data: {
          content_name: 'Website Contact Form',
          content_category: Array.isArray(data.services) ? data.services.join(', ') : undefined
        }
      }
    ]
  };

  // Optional: set META_TEST_EVENT_CODE to see events under Events Manager → Test events
  if (process.env.META_TEST_EVENT_CODE) body.test_event_code = process.env.META_TEST_EVENT_CODE;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const resp = await fetch(
      `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller.signal
      }
    );
    clearTimeout(timeout);
    if (!resp.ok) console.error('Meta CAPI error:', resp.status, await resp.text());
  } catch (err) {
    console.error('Meta CAPI request failed:', err);
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const data = req.body;

    // Basic Honeypot check
    // If the hidden '_honey' field is filled, it's likely a bot. Silently accept but do nothing.
    if (data._honey) {
      console.log('Spam bot detected via honeypot.');
      return res.status(200).json({ success: true, message: 'Received' });
    }

    // Required field validation (Basic)
    if (!data.firstName || !data.lastName || !data.email || !data.enquiry) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    const webhookUrl = process.env.WIX_CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('WIX_CONTACT_WEBHOOK_URL environment variable is missing.');
      // Return a 500 to the client
      return res.status(500).json({ success: false, message: 'Internal Configuration Error' });
    }

    const leadSource = buildLeadSource(req, data);

    // Structure the payload for Wix Automations
    const payload = {
      source: data.source || 'Daredevil Digital Website',
      formType: 'Website Inquiry',
      submittedAt: new Date().toISOString(),
      firstName: data.firstName,
      lastName: data.lastName,
      businessName: data.businessName,
      website: data.website,
      services: data.services?.join(', ') || '',
      monthlyRevenue: data.monthlyRevenue,
      paidAdsBudget: data.paidAdsBudget,
      marketingChallenge: data.challenge,
      email: data.email,
      phone: data.phone,
      anythingElse: data.enquiry,
      // Lead source / session info (Wix Analytics can't see this Vercel-hosted site)
      ...leadSource
    };

    // Audit trail in Vercel → Logs (no message body, just source + contact)
    console.log('New enquiry:', JSON.stringify({
      email: data.email,
      businessName: data.businessName,
      ...leadSource
    }));

    // Forward to Wix Webhook
    const wixResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!wixResponse.ok) {
      // Log the error securely on the server
      const errorText = await wixResponse.text();
      console.error('Wix Webhook failed:', wixResponse.status, errorText);
      return res.status(502).json({ success: false, message: 'Failed to forward request to CRM.' });
    }

    // Server-side conversion (Conversions API). Errors are swallowed and capped at 4s.
    await sendMetaLeadEvent(req, data);

    // Success
    return res.status(200).json({ success: true, message: 'Your request has been received successfully.' });

  } catch (error) {
    console.error('Server error processing contact form:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
