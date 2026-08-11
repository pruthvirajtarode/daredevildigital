import { useParams, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-purewhite">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-navy border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow={`SERVICE 0${service.id}`}
            title={service.title}
            description={service.description}
            theme="dark"
            alignment="center"
          />
        </div>
      </section>

      {/* Problem & Solution (Placeholder Content) */}
      <section className="py-24 lg:py-32 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-brand-burgundy uppercase tracking-widest mb-4">The Challenge</h3>
              <p className="text-xl leading-relaxed text-brand-charcoal/80">
                Most businesses struggle to maintain a consistent, high-quality digital presence. Without a clear strategy, marketing efforts become fragmented, inconsistent, and fail to generate meaningful return on investment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-navy uppercase tracking-widest mb-4">The Solution</h3>
              <p className="text-xl leading-relaxed text-brand-charcoal/80">
                We build integrated digital systems. By combining strategy, creative execution, and data analytics, we ensure every touchpoint works together to build trust and drive conversions for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Capabilities */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Capabilities"
            title="What We Deliver"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-4 p-8 rounded-2xl bg-brand-offwhite">
                <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">{cap}</h4>
                  <p className="text-brand-charcoal/70">
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
