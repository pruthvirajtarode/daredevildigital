import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { contact } from '../../data/contact';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-offwhite border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo / Brand statement */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <Logo light />
            </Link>
            <p className="text-sm leading-relaxed text-brand-offwhite/85 max-w-xs">
              Bold strategy. Creative execution. Performance digital growth partner for lead generation businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex-none rounded-full bg-white/5 border border-white/10 hover:border-brand-yellow flex items-center justify-center text-brand-offwhite hover:text-brand-yellow transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex-none rounded-full bg-white/5 border border-white/10 hover:border-brand-yellow flex items-center justify-center text-brand-offwhite hover:text-brand-yellow transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex-none rounded-full bg-white/5 border border-white/10 hover:border-brand-yellow flex items-center justify-center text-brand-offwhite hover:text-brand-yellow transition-all"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Explore Links */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">Explore</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.explore.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/#signal" className="text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                      Signal Loop
                    </Link>
                  </li>
                  <li>
                    <Link to="/#exclusivity" className="text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                      Exclusivity Tracker
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Links */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">Services</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Address & Direct contact details */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">Contact Operator</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-6 text-brand-offwhite/70">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-brand-yellow mt-0.5" />
                    <span>Singapore · Boutique Agency Model</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                    <Phone className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-brand-offwhite/70 hover:text-brand-yellow transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-brand-offwhite/50">
            &copy; 2026 Daredevil Digital. Singapore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
