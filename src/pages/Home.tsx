import Hero from '../components/sections/Hero';
import ConfigurationHealthScore from '../components/sections/ConfigurationHealthScore';
import TrustStrip from '../components/sections/TrustStrip';
import WhyD3 from '../components/sections/WhyD3';
import ExclusivityTracker from '../components/sections/ExclusivityTracker';
import Results from '../components/sections/Results';
import CTASection from '../components/sections/CTASection';
import ContactForm from '../components/sections/ContactForm';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. CONFIGURATION HEALTH SCORE */}
      <ConfigurationHealthScore />

      {/* 3. TRUST STRIP */}
      <TrustStrip />

      {/* 4. WHY D3 STATS */}
      <WhyD3 />

      {/* 5. EXCLUSIVITY TRACKER */}
      <ExclusivityTracker />

      {/* 6. RESULTS / PROOF */}
      <Results />

      {/* 7. FINAL CTA */}
      <CTASection />

      {/* 8. CONTACT SECTION */}
      <section id="contact-home" className="py-24 bg-brand-offwhite border-t border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="GET IN TOUCH"
            title="Start a Conversation."
            description="Provide details regarding your current ad spend, website setup, and lead mechanics, and we will prepare a plan."
            alignment="center"
          />
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
