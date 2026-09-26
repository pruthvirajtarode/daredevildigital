import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/ui/SEO';
import PerformanceTracks from '../components/sections/PerformanceTracks';
import { services } from '../data/services';
import { company } from '../data/company';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
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

      {/* 2. Core Agency Services list */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-burgundy uppercase">
              GENERAL AGENCY SERVICES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-tight mb-4">
              Core Digital Capabilities
            </h2>
            <p className="text-brand-charcoal/80 text-lg">
              We help ambitious brands construct cohesive digital presences through active social channels, analytics structures, content pipelines, and custom web builds.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-brand-purewhite p-8 lg:p-12 rounded-3xl border border-brand-charcoal/5 shadow-sm`}
              >
                {/* Service Details info */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-display text-3xl font-bold text-brand-navy mt-4 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-base text-brand-charcoal/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-brand-navy mb-4 border-b border-brand-charcoal/10 pb-2">Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-brand-charcoal/70">
                          <Check className="w-4 h-4 text-brand-yellow shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center font-bold text-brand-navy hover:text-brand-burgundy transition-colors uppercase tracking-widest text-xs"
                  >
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                {/* Service Image placeholder */}
                <motion.div 
                  className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] rounded-3xl bg-brand-navy flex items-center justify-center relative overflow-hidden shadow-lg cursor-pointer outline-none"
                  whileHover="active"
                  whileTap="active"
                >
                  <motion.img 
                    src={[
                      '/images/service_social_media_1786441004737.png',
                      '/images/service_coaching_1786441123552.png',
                      '/images/service_analytics_1786441229735.png',
                      '/images/service_content_1786441264836.png',
                      '/images/service_webdev_1786441294976.png'
                    ][index] || '/images/hero_dashboard_1786440656238.png'}
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={{
                      active: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
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
