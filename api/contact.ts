import type { VercelRequest, VercelResponse } from '@vercel/node';

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
      challenge: data.challenge,
      phone: data.phone,
      email: data.email,
      message: data.enquiry
    };

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

    // Success
    return res.status(200).json({ success: true, message: 'Your request has been received successfully.' });

  } catch (error) {
    console.error('Server error processing contact form:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
