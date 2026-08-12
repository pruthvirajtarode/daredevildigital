import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element by the hash name (excluding the '#')
      const targetId = hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        // Scroll to the element after a short timeout to let the page render first
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timeoutId);
      }
    } else {
      // If no hash, scroll to top on route changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
