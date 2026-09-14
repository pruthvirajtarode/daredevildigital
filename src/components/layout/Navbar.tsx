import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const cleanPath = path || '/';
      return location.pathname === cleanPath && location.hash === `#${hash}`;
    }
    return location.pathname === href && !location.hash;
  };

  const isDarkPage = location.pathname === '/audit';
  const isDarkTop = isDarkPage && !isScrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-offwhite/90 py-4 backdrop-blur-md shadow-sm border-b border-brand-charcoal/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
              <Logo light={isDarkTop} />
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 focus:outline-none ${
                isDarkTop ? 'text-brand-purewhite' : 'text-brand-navy'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              
              let linkColor = 'text-brand-charcoal';
              if (active) {
                linkColor = isDarkTop 
                  ? 'text-brand-yellow font-bold border-b-2 border-brand-yellow/30 pb-0.5'
                  : 'text-brand-burgundy font-bold border-b-2 border-brand-burgundy/30 pb-0.5';
              } else if (isDarkTop) {
                linkColor = 'text-brand-purewhite hover:text-brand-yellow';
              } else {
                linkColor = 'text-brand-charcoal hover:text-brand-burgundy';
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors ${linkColor}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/audit"
              className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-all ${
                isDarkTop
                  ? 'bg-brand-yellow text-brand-navy hover:bg-brand-purewhite'
                  : 'bg-brand-navy text-brand-purewhite hover:bg-brand-yellow hover:text-brand-navy'
              }`}
            >
              Book an Audit <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-brand-navy px-6 py-6 lg:hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Logo light />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-brand-purewhite focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-12 flow-root">
                <div className="-my-6 divide-y divide-brand-offwhite/10">
                  <div className="space-y-2 py-6 flex flex-col items-center gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`-mx-3 block rounded-lg px-3 py-3 font-display text-2xl font-semibold leading-7 transition-colors hover:text-brand-yellow ${
                          isActive(item.href) ? 'text-brand-yellow' : 'text-brand-purewhite'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="py-6 flex justify-center border-t border-white/10">
              <Link
                to="/audit"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-brand-yellow px-8 py-4 text-base font-semibold text-brand-navy shadow-sm transition-all hover:bg-brand-purewhite hover:text-brand-navy w-full text-center"
              >
                Book an Audit <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
