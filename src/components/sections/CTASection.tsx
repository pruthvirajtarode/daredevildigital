import { MessageCircle, Mail } from 'lucide-react';
import { contact } from '../../data/contact';
import { pricing } from '../../data/pricing';
import { motion } from 'framer-motion';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function CTASection() {
  return (
    <section id="cta" className="bg-brand-navy py-24 sm:py-32 relative overflow-hidden border-t border-white/10">
      {/* Background visual shapes */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="block mb-6 text-xs font-mono font-bold tracking-[0.2em] text-brand-yellow uppercase">
            TAKE ACTION
          </span>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-purewhite mb-6 uppercase leading-none">
            Know Your Configuration Health Score.
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-offwhite/80 mb-10">
            A 30-second look at Event Match Quality usually tells the story. The audit tells the rest. {pricing.audit.current}, credited against month one if you move forward with management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://wa.me/6588240612"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-yellow text-brand-navy hover:bg-brand-purewhite hover:text-brand-navy transition-all px-8 py-4 font-bold text-center text-base shadow-md uppercase tracking-wider w-full sm:w-auto"
            >
              Book a Lead Engine Audit
            </a>
          </div>

          <p className="text-sm text-brand-offwhite/60 mb-12">
            Not ready for the audit?{" "}
            <a href="#blueprint" className="text-brand-yellow hover:underline transition-all">
              Start with the Blueprint →
            </a>
          </p>

          {/* Social and Direct Channels */}
          <div className="flex flex-wrap justify-center gap-4 border-t border-white/10 pt-10">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-brand-offwhite/75 hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/30 px-5 py-3 rounded-full transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 font-mono text-xs text-brand-offwhite/75 hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/30 px-5 py-3 rounded-full transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-brand-offwhite/75 hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/30 px-5 py-3 rounded-full transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-brand-offwhite/75 hover:text-brand-yellow border border-white/10 hover:border-brand-yellow/30 px-5 py-3 rounded-full transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
