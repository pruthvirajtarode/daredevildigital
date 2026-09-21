import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/ui/SEO';

// Import performance marketing modules
import SignalLoop from '../components/sections/SignalLoop';
import PerformanceTracks from '../components/sections/PerformanceTracks';
import LeadEngineAudit from '../components/sections/LeadEngineAudit';
import Blueprint from '../components/sections/Blueprint';
import ExclusivityTracker from '../components/sections/ExclusivityTracker';
import FAQ from '../components/sections/FAQ';

export default function ServiceDetail() {
  const { slug } = useParams();

  // Special layout wrapper for Performance Marketing
  if (slug === 'performance-marketing') {
    return (
      <div className="pt-20 min-h-screen bg-brand-offwhite">
        <SEO 
          title="Performance Marketing & Lead Gen"
          description="A Singapore-based marketing engineering service feeding CRM outcome data directly back to ad platform machine learning algorithms."
        />
        {/* Subpage Header */}
        <section className="py-24 lg:py-32 bg-brand-navy text-brand-offwhite">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <SectionHeading 
              eyebrow="SPECIALIZED SYSTEM"
              title="PERFORMANCE SOCIAL & LEAD GENERATION SYSTEMS"
              description="A Singapore-based marketing engineering service feeding CRM outcome data directly back to ad platform machine learning algorithms."
              theme="dark"
              alignment="center"
              as="h1"
            />
          </div>
        </section>

        {/* CAPI Loop Flowchart */}
        <SignalLoop />

        {/* Audit, Blueprint & pricing options */}
        <PerformanceTracks />

        {/* Lead Engine Audit Diagnostic */}
        <LeadEngineAudit />

        {/* Digital Marketing Blueprint Layout */}
        <Blueprint />

        {/* Live Exclusivity vertical finder */}
        <ExclusivityTracker />

        {/* FAQ list */}
        <FAQ />

        {/* CTA */}
        <CTASection />
      </div>
    );
  }

  // Fallback to original agency services details
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-purewhite">
      <SEO 
        title={service.title}
        description={service.description}
      />
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-navy border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow={`SERVICE 0${service.id}`}
            title={service.title}
            description={service.description}
            theme="dark"
            alignment="center"
            as="h1"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 lg:py-32 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-brand-burgundy uppercase tracking-widest mb-4">The Challenge</h3>
              <p className="text-lg leading-relaxed text-brand-charcoal/80">
                Most businesses struggle to maintain a consistent, high-quality digital presence. Without a clear strategy, marketing efforts become fragmented, inconsistent, and fail to generate a meaningful return on investment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy uppercase tracking-widest mb-4">The Solution</h3>
              <p className="text-lg leading-relaxed text-brand-charcoal/80">
                We build integrated digital systems. By combining strategy, creative execution, and data analytics, we ensure every touchpoint works together to build trust and drive conversions for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Capabilities details */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Capabilities"
            title="What We Deliver"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-4 p-8 rounded-2xl bg-brand-offwhite border border-brand-charcoal/5">
                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">{cap}</h4>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                    Comprehensive execution of {cap.toLowerCase()} tailored to your specific business objectives and target audience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
