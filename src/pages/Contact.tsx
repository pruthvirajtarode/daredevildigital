import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/sections/ContactForm';
import { contact } from '../data/contact';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);


export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-brand-offwhite">
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="CONTACT US"
            title="LET'S BUILD SOMETHING BOLD."
            description="Tell us about your business, your challenge and where you want to go. We'll build the strategy to get you there."
            theme="dark"
            alignment="center"
            as="h1"
          />
        </div>
      </section>

      <section className="py-24 lg:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-navy -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details Side */}
            <div className="lg:col-span-4 space-y-12 bg-brand-purewhite p-10 rounded-2xl shadow-sm border border-brand-charcoal/5 h-fit lg:-mt-12">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-brand-navy font-semibold">
                    <MapPin className="w-6 h-6 text-brand-yellow shrink-0" />
                    <span>{contact.location}</span>
                  </li>
                  <li className="flex items-center gap-4 text-brand-navy font-semibold hover:text-brand-yellow transition-colors">
                    <Phone className="w-6 h-6 text-brand-yellow shrink-0" />
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                  </li>
                  <li className="flex items-center gap-4 text-brand-navy font-semibold hover:text-brand-yellow transition-colors">
                    <Mail className="w-6 h-6 text-brand-yellow shrink-0" />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-6">Direct Chat</h3>
                <a 
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#20b858]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WHATSAPP US
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href={contact.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand-offwhite flex items-center justify-center text-brand-navy hover:bg-brand-yellow hover:text-brand-navy transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a href={contact.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand-offwhite flex items-center justify-center text-brand-navy hover:bg-brand-yellow hover:text-brand-navy transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-8 relative z-10 lg:-mt-12">
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
