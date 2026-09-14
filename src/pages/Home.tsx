import Hero from '../components/sections/Hero';
import ConfigurationHealthScore from '../components/sections/ConfigurationHealthScore';
import TrustStrip from '../components/sections/TrustStrip';
import PerformanceTracks from '../components/sections/PerformanceTracks';
import WhyD3 from '../components/sections/WhyD3';
import ExclusivityTracker from '../components/sections/ExclusivityTracker';
import Results from '../components/sections/Results';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import ContactForm from '../components/sections/ContactForm';
import SectionHeading from '../components/ui/SectionHeading';
import { services } from '../data/services';
import { company } from '../data/company';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. CONFIGURATION HEALTH SCORE */}
      <ConfigurationHealthScore />

      {/* 3. TRUST STRIP */}
      <TrustStrip />

      {/* 5. GENERAL & AGENCY SERVICES OVERVIEW */}
      <section id="services-overview" className="py-24 lg:py-32 bg-brand-offwhite border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Capabilities"
            title="Core Digital Services Built to Advance Your Brand."
            description="From content strategies to custom web engineering, we build cohesive digital systems designed to capture attention and direct it properly."
          />
          <div className="mt-16 flex flex-col gap-6">
            {services.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center p-8 lg:p-12 bg-brand-purewhite rounded-3xl hover:shadow-xl transition-all duration-300 border border-brand-charcoal/5 hover:border-brand-yellow"
              >
                <span className="font-display text-5xl font-bold text-brand-charcoal/10 group-hover:text-brand-yellow transition-colors shrink-0">
                  {service.id}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-brand-charcoal/70 max-w-3xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="hidden lg:flex w-14 h-14 rounded-full bg-brand-offwhite items-center justify-center group-hover:bg-brand-yellow transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5 text-brand-navy -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE TRACKS COMPARISON */}
      <PerformanceTracks />

      {/* 9. WHY D3 STATS */}
      <WhyD3 />

      {/* 10. EXCLUSIVITY TRACKER */}
      <ExclusivityTracker />

      {/* 11. COMBINED ABOUT SECTION */}
      <section id="about-overview" className="py-24 lg:py-32 bg-brand-purewhite border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading 
                eyebrow="ABOUT OPERATOR"
                title="The Agency is the Operator. That's the Point."
              />
              <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed mb-10">
                <p>
                  Daredevil Digital was founded to bridge the gap between creative storytelling and hard platform engineering. We believe that digital marketing should generate real business outcomes, not just campaign metrics.
                </p>
                <p>
                  Every engagement is handled directly by the operator. No handoffs to account coordinators, no junior managers running your budgets, and no opaque monthly presentations. You see exactly what is working and why.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-yellow pl-6">
                <p className="font-display text-4xl font-bold text-brand-navy">100+</p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal/50 mt-2">
                  APAC Advertisers Analyzed
                </p>
              </div>
            </div>

            {/* Layout Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Strategy First', desc: 'Campaign setups mapped to real CRM outcomes.' }, 
                { name: 'Creative Focus', desc: 'Platform-optimized hooks that capture attention.' }, 
                { name: 'Technical Execution', desc: 'Offline conversion events and CAPI loops.' }, 
                { name: 'Direct Ownership', desc: 'Operator handles optimization directly.' }
              ].map((card, i) => (
                <div 
                  key={card.name} 
                  className={`bg-brand-offwhite rounded-3xl p-8 border border-brand-charcoal/5 shadow-sm hover:border-brand-yellow transition-all duration-300 ${
                    i % 2 === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{card.name}</h3>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. OUR PROMISE, VISION, MISSION */}
      <section className="py-24 bg-brand-yellow text-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            title="Our Promise & Vision"
            theme="light"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {company.promises.map((promise) => (
              <div key={promise.id} className="bg-brand-purewhite rounded-3xl p-8 shadow-sm border border-brand-navy/5">
                <span className="block font-mono text-4xl font-bold text-brand-navy/30 mb-6">{promise.id}</span>
                <h3 className="font-bold text-xl mb-3 text-brand-navy">{promise.title}</h3>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-brand-navy/10 pt-16">
            <div>
              <span className="block mb-4 text-xs font-mono font-bold tracking-widest text-brand-burgundy uppercase">
                BRAND VISION
              </span>
              <p className="font-display text-2xl font-bold leading-snug">
                "{company.vision}"
              </p>
            </div>
            <div>
              <span className="block mb-4 text-xs font-mono font-bold tracking-widest text-brand-navy uppercase">
                OPERATIONAL MISSION
              </span>
              <p className="font-display text-2xl font-bold leading-snug text-brand-charcoal">
                "{company.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. RESULTS / PROOF */}
      <Results />

      {/* 14. FAQ ACCORDION */}
      <FAQ />

      {/* 15. FINAL CTA */}
      <CTASection />

      {/* 16. CONTACT SECTION */}
      <section id="contact-home" className="py-24 bg-brand-offwhite border-t border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="GET IN TOUCH"
            title="Start a Conversation."
            description="Provide details regarding your current ad spend, website setup, and lead mechanics, and we will prepare a plan."
            alignment="center"
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
