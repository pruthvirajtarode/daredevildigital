import SectionHeading from '../ui/SectionHeading';
import { BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-brand-purewhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT OUTCOMES"
          title="The Signal Loop in Practice."
          description="We let real-world numbers and database performance do the talking. Testimonials and outcomes are independently verified."
        />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-2 border-dashed border-brand-charcoal/10 rounded-3xl p-12 text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center mb-6">
            <BarChart2 className="w-6 h-6 text-brand-navy" />
          </div>
          <span className="font-mono text-xs font-bold text-brand-burgundy uppercase tracking-widest block mb-4">
            First Client Results Coming Soon
          </span>
          <p className="text-xl font-display font-semibold text-brand-navy mb-4 max-w-md leading-relaxed">
            "This is where your first client outcome goes. One sharp sentence detailing the before and after CRM volume shifts."
          </p>
          <p className="text-sm text-brand-charcoal/60">
            Verified client outcomes and CPL improvement ratios will be published here upon audit debrief releases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
