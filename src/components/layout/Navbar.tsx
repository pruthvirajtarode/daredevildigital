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
  }, [location.pathname]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-offwhite/80 py-4 backdrop-blur-md shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <Logo />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-navy"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <nav className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors hover:text-brand-yellow ${
                location.pathname === item.href ? 'text-brand-navy' : 'text-brand-charcoal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-brand-purewhite shadow-sm transition-all hover:bg-brand-yellow hover:text-brand-navy"
          >
            Start a Conversation <span aria-hidden="true">&rarr;</span>
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
            className="fixed inset-0 z-50 bg-brand-navy px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Logo light />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-brand-purewhite"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-16 flow-root">
              <div className="-my-6 divide-y divide-brand-charcoal/10">
                <div className="space-y-2 py-6 flex flex-col items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-4 font-display text-3xl font-semibold leading-7 text-brand-purewhite hover:text-brand-yellow"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 flex justify-center">
                  <Link
                    to="/contact"
                    className="rounded-full bg-brand-yellow px-8 py-4 text-base font-semibold text-brand-navy shadow-sm transition-all"
                  >
                    Start a Conversation <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
