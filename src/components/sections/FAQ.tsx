import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-32 lg:py-40 bg-brand-offwhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="COMMON QUESTIONS"
              title="Questions We Get Before the Audit Call."
              description="Everything you need to know about the Lead Engine Audit access rules, Option B graduation thresholds, and how exclusivity contracts operate."
            />
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 border border-brand-charcoal/10 rounded-3xl overflow-hidden divide-y divide-brand-charcoal/10 bg-brand-purewhite shadow-lg">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="transition-colors hover:bg-brand-offwhite/30">
                  <h3>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start justify-between px-6 py-6 text-left focus:outline-none focus:bg-brand-offwhite/50 focus:ring-2 focus:ring-brand-burgundy/25 transition-colors group"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-button-${index}`}
                    >
                      <span className="font-display font-bold text-brand-navy text-base lg:text-lg group-hover:text-brand-burgundy transition-colors pr-4">
                        {faq.question}
                      </span>
                      <span className="shrink-0 mt-1 focus:outline-none">
                        <Plus
                          className={`w-5 h-5 text-brand-burgundy transition-transform duration-200 ${
                            isOpen ? 'transform rotate-45' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm lg:text-base leading-relaxed text-brand-charcoal/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
