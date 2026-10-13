/**
 * Meta (Facebook) Pixel helper for the Daredevil Digital SPA.
 *
 * - Pixel ID comes from the build-time env var `VITE_META_PIXEL_ID`
 *   (set it in Vercel → Settings → Environment Variables, then redeploy).
 * - Skipped entirely when there's no Pixel ID or when running under an
 *   automated browser (the Puppeteer prerender step), so the build never
 *   sends fake PageViews to Meta and the prerendered HTML stays clean.
 * - PageView is NOT fired on init; the route tracker fires it on every
 *   React Router navigation (including the first load).
 */

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export const META_PIXEL_ID = (import.meta.env.VITE_META_PIXEL_ID ?? '').trim();

let initialized = false;

function isEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  if (!META_PIXEL_ID) return false;
  // Puppeteer / headless prerender sets navigator.webdriver = true
  if (navigator.webdriver) return false;
  return true;
}

export function initMetaPixel(): void {
  if (initialized || !isEnabled()) return;
  initialized = true;

  // Official Meta base code, adapted to TypeScript.
  if (!window.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args);
      else n.queue.push(args);
    } as Fbq;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    window.fbq = n;
    if (!window._fbq) window._fbq = n;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  window.fbq!('init', META_PIXEL_ID);
}

export function trackPageView(): void {
  if (!isEnabled() || !window.fbq) return;
  window.fbq('track', 'PageView');
}

/**
 * Fire a standard event. Pass `eventId` when the same event is also sent
 * server-side via the Conversions API so Meta can deduplicate them.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {},
  eventId?: string
): void {
  if (!isEnabled() || !window.fbq) return;
  if (eventId) window.fbq('track', eventName, params, { eventID: eventId });
  else window.fbq('track', eventName, params);
}

/** Read a cookie set by the Pixel (_fbp / _fbc) to pass to the Conversions API. */
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function generateEventId(prefix = 'evt'): string {
  const rand =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
  return `${prefix}_${rand}`;
}
