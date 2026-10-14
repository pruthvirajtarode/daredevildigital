/**
 * Lead attribution for the Daredevil Digital SPA.
 *
 * The site is hosted on Vercel, NOT on Wix, so Wix Analytics never sees
 * these visits. To know where an enquiry came from, we record the traffic
 * source on the visitor's first page load and attach it to the contact
 * form submission.
 *
 * - First touch: stored in localStorage (kept 90 days) – the very first way
 *   this visitor found us.
 * - Last touch: stored in sessionStorage – how they arrived this session.
 * - Skipped under automated browsers (Puppeteer prerender).
 */

export interface TouchPoint {
  source: string;        // Human-readable summary, e.g. "Google (Organic)"
  landingPage: string;   // First URL seen in this touch (path + query)
  referrer: string;      // External referrer, '' when direct
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  timestamp: string;     // ISO time of the touch
}

export interface Attribution {
  firstTouch?: TouchPoint;
  lastTouch?: TouchPoint;
  formPage: string;
  pagesViewed: number;
}

const FIRST_KEY = 'dd_attr_first';
const LAST_KEY = 'dd_attr_last';
const PAGES_KEY = 'dd_attr_pages';
const FIRST_TOUCH_TTL_MS = 90 * 24 * 60 * 60 * 1000;

const SEARCH_ENGINES: Record<string, string> = {
  google: 'Google',
  bing: 'Bing',
  yahoo: 'Yahoo',
  duckduckgo: 'DuckDuckGo',
  baidu: 'Baidu',
  yandex: 'Yandex',
  ecosia: 'Ecosia'
};

const SOCIAL_SITES: Record<string, string> = {
  'facebook.com': 'Facebook',
  'fb.com': 'Facebook',
  'instagram.com': 'Instagram',
  'linkedin.com': 'LinkedIn',
  'lnkd.in': 'LinkedIn',
  't.co': 'X / Twitter',
  'twitter.com': 'X / Twitter',
  'x.com': 'X / Twitter',
  'youtube.com': 'YouTube',
  'tiktok.com': 'TikTok',
  'reddit.com': 'Reddit',
  'pinterest.com': 'Pinterest',
  'wa.me': 'WhatsApp',
  'whatsapp.com': 'WhatsApp'
};

function isEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  if (navigator.webdriver) return false;
  return true;
}

function safeGet(storage: Storage, key: string): string | null {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(storage: Storage, key: string, value: string): void {
  try {
    storage.setItem(key, value);
  } catch {
    /* storage blocked (private mode etc.) – attribution is best-effort */
  }
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return '';
  }
}

function matchDomain(host: string, map: Record<string, string>): string | undefined {
  for (const domain of Object.keys(map)) {
    if (host === domain || host.endsWith('.' + domain)) return map[domain];
  }
  return undefined;
}

function classify(t: Omit<TouchPoint, 'source'>): string {
  const medium = (t.utmMedium || '').toLowerCase();
  const isPaid = /cpc|ppc|paid|ads?$|display|cpm/.test(medium);

  if (t.gclid) return 'Google Ads (Paid)';
  if (t.utmSource) {
    const label = t.utmSource;
    if (isPaid) return `${label} (Paid)`;
    if (medium) return `${label} (${t.utmMedium})`;
    return label;
  }
  if (t.fbclid) return 'Facebook / Instagram (Social)';

  if (!t.referrer) return 'Direct';

  const host = hostOf(t.referrer);
  const engineKey = Object.keys(SEARCH_ENGINES).find(k => host.split('.').includes(k));
  if (engineKey) return `${SEARCH_ENGINES[engineKey]} (Organic)`;

  const social = matchDomain(host, SOCIAL_SITES);
  if (social) return `${social} (Social)`;

  return `${host || t.referrer} (Referral)`;
}

function buildTouch(): TouchPoint {
  const url = new URL(window.location.href);
  const p = url.searchParams;

  // Ignore internal referrers (navigating between our own pages)
  const rawRef = document.referrer || '';
  const referrer = rawRef && hostOf(rawRef) !== hostOf(window.location.href) ? rawRef : '';

  const base = {
    landingPage: url.pathname + url.search,
    referrer,
    utmSource: p.get('utm_source') || undefined,
    utmMedium: p.get('utm_medium') || undefined,
    utmCampaign: p.get('utm_campaign') || undefined,
    utmTerm: p.get('utm_term') || undefined,
    utmContent: p.get('utm_content') || undefined,
    gclid: p.get('gclid') || undefined,
    fbclid: p.get('fbclid') || undefined,
    timestamp: new Date().toISOString()
  };

  return { ...base, source: classify(base) };
}

/** Call once on app start, before the router changes the URL. */
export function captureAttribution(): void {
  if (!isEnabled()) return;

  const touch = buildTouch();
  const hasCampaignData = Boolean(touch.utmSource || touch.gclid || touch.fbclid || touch.referrer);

  // First touch – keep unless missing or expired
  const existingFirst = safeGet(localStorage, FIRST_KEY);
  let keepFirst = false;
  if (existingFirst) {
    try {
      const parsed = JSON.parse(existingFirst) as TouchPoint;
      keepFirst = Date.now() - new Date(parsed.timestamp).getTime() < FIRST_TOUCH_TTL_MS;
    } catch {
      keepFirst = false;
    }
  }
  if (!keepFirst) safeSet(localStorage, FIRST_KEY, JSON.stringify(touch));

  // Last touch – once per session; a new campaign/referrer mid-session overrides it
  if (!safeGet(sessionStorage, LAST_KEY) || hasCampaignData) {
    safeSet(sessionStorage, LAST_KEY, JSON.stringify(touch));
  }
}

/** Call on every SPA route change. */
export function countPageView(): void {
  if (!isEnabled()) return;
  const n = Number(safeGet(sessionStorage, PAGES_KEY) || '0') + 1;
  safeSet(sessionStorage, PAGES_KEY, String(n));
}

function parse(raw: string | null): TouchPoint | undefined {
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as TouchPoint;
  } catch {
    return undefined;
  }
}

/** Snapshot sent along with the contact form. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return { formPage: '', pagesViewed: 0 };
  return {
    firstTouch: parse(safeGet(localStorage, FIRST_KEY)),
    lastTouch: parse(safeGet(sessionStorage, LAST_KEY)),
    formPage: window.location.pathname + window.location.search,
    pagesViewed: Number(safeGet(sessionStorage, PAGES_KEY) || '0')
  };
}
