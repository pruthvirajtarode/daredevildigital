import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { contact } from '../../data/contact';
import { Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);


export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-offwhite" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="font-display text-2xl font-bold tracking-tight text-brand-purewhite">
              DAREDEVIL DIGITAL
            </Link>
            <p className="text-sm leading-6 text-brand-offwhite/80 max-w-xs">
              Bold strategy. Creative execution. Digital growth.
            </p>
            <div className="flex space-x-6">
              <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-brand-offwhite/80 hover:text-brand-yellow">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer" className="text-brand-offwhite/80 hover:text-brand-yellow">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-purewhite">Explore</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.explore.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-brand-offwhite/80 hover:text-brand-yellow">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-brand-purewhite">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-brand-offwhite/80 hover:text-brand-yellow">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-brand-purewhite">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-6 text-brand-offwhite/80">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <span>{contact.location}</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-brand-offwhite/80">
                    <Phone className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand-yellow">{contact.phone}</a>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-brand-offwhite/80">
                    <Mail className="w-5 h-5 flex-shrink-0 text-brand-yellow" />
                    <a href={`mailto:${contact.email}`} className="hover:text-brand-yellow">{contact.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-brand-offwhite/60">
            &copy; {new Date().getFullYear()} Daredevil Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
