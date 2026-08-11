import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import TrustStrip from '../components/sections/TrustStrip';
import CTASection from '../components/sections/CTASection';
import SectionHeading from '../components/ui/SectionHeading';
import { company } from '../data/company';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <span className="block mb-6 text-sm font-bold tracking-[0.2em] text-brand-burgundy uppercase">
              Daredevil Digital — Singapore
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy leading-[1.05] mb-8">
              BOLD DIGITAL<br />
              STRATEGY.<br />
              BUILT FOR<br />
              GROWTH.
            </h1>
            <p className="text-xl leading-relaxed text-brand-charcoal/80 mb-10 max-w-xl">
              We help ambitious businesses build stronger brands, sharper digital experiences, and marketing systems that turn attention into opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
          
          {/* Abstract Hero Visual */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex justify-center items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] bg-brand-yellow/10 rounded-full blur-3xl -z-10"
            />
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-brand-navy rounded-2xl shadow-2xl transform rotate-3 scale-105" />
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl shadow-xl transform -rotate-2" />
              <div className="absolute inset-0 bg-brand-purewhite rounded-2xl shadow-lg border border-brand-charcoal/10 overflow-hidden flex flex-col p-8">
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-brand-charcoal/20" />
                  <div className="w-3 h-3 rounded-full bg-brand-charcoal/20" />
                  <div className="w-3 h-3 rounded-full bg-brand-charcoal/20" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-brand-charcoal/5 rounded w-3/4" />
                  <div className="h-4 bg-brand-charcoal/5 rounded w-1/2" />
                  <div className="h-32 bg-brand-yellow/20 rounded-xl mt-8" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-24 bg-brand-navy/5 rounded-xl" />
                    <div className="h-24 bg-brand-burgundy/5 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex">
          <span className="text-xs font-bold tracking-widest text-brand-charcoal/40">SCROLL TO EXPLORE</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-brand-charcoal/20"
          />
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. ABOUT / POSITIONING */}
      <section className="py-24 lg:py-32 bg-brand-purewhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                eyebrow="Who We Are"
                title="We don't just market brands. We build momentum."
              />
              <p className="text-lg leading-relaxed text-brand-charcoal/80 mb-8">
                Daredevil Digital brings strategy, creativity and digital execution together to help ambitious businesses strengthen their online presence, understand their audience and create marketing that moves people to act.
              </p>
              <div className="border-l-2 border-brand-yellow pl-6 mt-12">
                <p className="font-display text-4xl font-bold text-brand-navy">10+</p>
                <p className="text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mt-2">
                  Years Combined Industry Experience
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Strategy', 'Creative', 'Analytics', 'Digital'].map((pillar, i) => (
                <div key={pillar} className={`p-8 bg-brand-offwhite rounded-2xl ${i === 1 || i === 3 ? 'translate-y-8' : ''}`}>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{pillar}</h3>
                  <div className="w-8 h-1 bg-brand-yellow rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY DAREDEVIL DIGITAL */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            title="Why businesses choose Daredevil Digital."
            theme="dark"
            alignment="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {company.reasons.map((reason) => (
              <div key={reason.id} className="group p-8 rounded-2xl border border-brand-purewhite/10 bg-brand-purewhite/5 hover:bg-brand-purewhite/10 transition-all duration-300">
                <span className="block text-4xl font-display font-bold text-brand-yellow/30 mb-6 group-hover:text-brand-yellow transition-colors">{reason.id}</span>
                <h3 className="text-xl font-bold text-brand-purewhite mb-4">{reason.title}</h3>
                <p className="text-brand-offwhite/70 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="py-24 lg:py-32 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Capabilities"
            title="Digital services that move your business forward."
          />
          <div className="mt-16 flex flex-col gap-6">
            {services.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center p-8 lg:p-12 bg-brand-purewhite rounded-3xl hover:shadow-xl transition-all duration-300 border border-brand-charcoal/5 hover:border-brand-yellow"
              >
                <span className="font-display text-5xl font-bold text-brand-charcoal/10 group-hover:text-brand-yellow transition-colors">
                  {service.id}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-brand-charcoal/70 max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-brand-offwhite items-center justify-center group-hover:bg-brand-yellow transition-colors shrink-0">
                  <ArrowRight className="w-6 h-6 text-brand-navy -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (PROCESS) */}
      <section className="py-24 lg:py-32 bg-brand-purewhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Our Process"
            title="How We Work"
            alignment="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-brand-charcoal/10" />
            {company.process.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-brand-offwhite border-4 border-brand-purewhite shadow-lg flex items-center justify-center mx-auto lg:mx-0 mb-8 text-brand-navy font-display font-bold text-2xl">
                  {step.id}
                </div>
                <h3 className="font-bold text-xl text-brand-navy mb-4 text-center lg:text-left">{step.title}</h3>
                <p className="text-brand-charcoal/70 text-center lg:text-left">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROMISE */}
      <section className="py-24 lg:py-32 bg-brand-yellow text-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            title="OUR PROMISE"
            theme="light"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {company.promises.map((promise) => (
              <div key={promise.id} className="bg-brand-purewhite p-12 rounded-3xl shadow-sm">
                <span className="block font-display text-7xl font-bold text-brand-yellow mb-8">{promise.id}</span>
                <h3 className="font-bold text-2xl mb-4 leading-tight">{promise.title}</h3>
                <p className="text-brand-charcoal/70">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VISION + MISSION */}
      <section className="py-24 lg:py-32 bg-brand-offwhite border-t border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="block mb-6 text-sm font-bold tracking-widest text-brand-burgundy uppercase">
                VISION
              </span>
              <p className="font-display text-3xl md:text-4xl font-bold leading-tight text-brand-navy">
                "{company.vision}"
              </p>
            </div>
            <div>
              <span className="block mb-6 text-sm font-bold tracking-widest text-brand-navy uppercase">
                MISSION
              </span>
              <p className="font-display text-3xl md:text-4xl font-bold leading-tight text-brand-charcoal">
                "{company.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SELECTED WORK */}
      <section className="py-24 lg:py-32 bg-brand-purewhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              eyebrow="Portfolio"
              title="Selected Work"
            />
            <Button href="/work" variant="outline" className="mb-16">
              View All Cases
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder Project Cards */}
            {[1, 2].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-3xl bg-brand-offwhite mb-6 overflow-hidden flex items-center justify-center relative border border-brand-charcoal/5">
                  <span className="text-brand-charcoal/40 font-bold tracking-widest uppercase">Case Study Coming Soon</span>
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 transition-colors duration-300" />
                </div>
                <div className="flex gap-4 items-center text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-3">
                  <span>CONCEPT PROJECT</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy">Digital Growth System</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <CTASection />
    </div>
  );
}
