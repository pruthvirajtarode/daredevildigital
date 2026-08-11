import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/services';
import { company } from '../data/company';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-purewhite border-b border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="OUR CAPABILITIES"
            title="DIGITAL SERVICES THAT MOVE YOUR BUSINESS FORWARD."
            description="We provide end-to-end digital marketing solutions designed to build your brand and drive measurable growth."
            alignment="center"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:gap-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                {/* Visual Placeholder */}
                <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] rounded-3xl bg-brand-navy flex items-center justify-center p-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-yellow/10 transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  <span className="font-display text-9xl font-bold text-brand-purewhite/10 z-10">{service.id}</span>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-bold tracking-widest uppercase text-brand-burgundy mb-4">Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-3 text-brand-charcoal/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center font-bold text-brand-navy hover:text-brand-burgundy transition-colors uppercase tracking-widest text-sm"
                  >
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="HOW WE WORK"
            title="A structured process for reliable growth."
            theme="dark"
            alignment="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.process.map((step) => (
              <div key={step.id} className="bg-brand-purewhite/5 border border-brand-purewhite/10 p-8 rounded-3xl">
                <span className="block font-display text-4xl font-bold text-brand-yellow mb-6">{step.id}</span>
                <h3 className="text-xl font-bold text-brand-purewhite mb-4">{step.title}</h3>
                <p className="text-brand-offwhite/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
