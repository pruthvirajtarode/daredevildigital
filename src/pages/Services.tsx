import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/ui/SEO';
import PerformanceTracks from '../components/sections/PerformanceTracks';
import { company } from '../data/company';

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-purewhite">
      <SEO 
        title="Services"
        description="Performance Marketing, Social Strategy, and Creative Execution for Singapore businesses."
      />
      {/* Hero */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-navy text-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="OUR CAPABILITIES"
            title="DIGITAL CAPABILITIES & PERFORMANCE MARKETING SYSTEMS."
            description="We deliver full scale social and creative execution alongside technical campaign structures optimized for business revenue."
            theme="dark"
            alignment="center"
            as="h1"
          />
        </div>
      </section>

      {/* 1. Performance Marketing Tracks Section */}
      <section className="bg-brand-purewhite border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 text-sm font-mono font-bold uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/10 border border-brand-burgundy/20 rounded-full mb-4">
              PERFORMANCE MARKETING
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Meta Lead Generation & CAPI Signal Loop
            </h2>
            <p className="text-brand-charcoal/70 text-sm leading-relaxed">
              We connect offline conversion outcomes directly to campaign target parameters. Read below about our specialized pricing tracks for early stage and active advertisers.
            </p>
          </div>
        </div>
        <PerformanceTracks />
      </section>

      {/* 3. General Campaign Process */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-navy text-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="OUR WORKFLOW"
            title="A Structured Process for Reliable Growth."
            theme="dark"
            alignment="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.process.map((step) => (
              <div key={step.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <span className="block font-mono text-3xl font-bold text-brand-yellow mb-6">{step.id}</span>
                <h3 className="text-xl font-bold text-brand-purewhite mb-4">{step.title}</h3>
                <p className="text-xs text-brand-offwhite/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
