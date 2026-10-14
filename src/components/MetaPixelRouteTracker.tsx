import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initMetaPixel, trackPageView } from '../lib/metaPixel';
import { countPageView } from '../lib/attribution';

/**
 * Fires a Meta Pixel PageView on first load and on every client-side
 * route change (a SPA never reloads the page, so the default base-code
 * PageView would only fire once).
 */
export default function MetaPixelRouteTracker() {
  const location = useLocation();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    const path = location.pathname + location.search;
    // Guard against React StrictMode double-invoking effects in dev
    if (lastTracked.current === path) return;
    lastTracked.current = path;
    trackPageView();
    countPageView();
  }, [location.pathname, location.search]);

  return null;
}
