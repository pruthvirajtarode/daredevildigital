import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RefreshCw, Layers, Users } from 'lucide-react';

export default function SignalLoop() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Ad is served",
      desc: "Meta targets users based on the conversion signals it has learned. At this stage, it targets based on pixel volume feedback."
    },
    {
      num: "02",
      title: "Lead submits form",
      desc: "A browser based pixel fires. Meta logs a conversion. Your account dashboard records a lead. Ad spend is optimized toward form fills."
    },
    {
      num: "03",
      title: "Lead qualifies or doesn't",
      desc: "Your sales team calls. Most aren't a fit. In standard setups, this qualification feedback never reaches Meta. The algorithm keeps chasing low quality forms."
    },
    {
      num: "04",
      title: "D3 closes the loop",
      desc: "We feed actual CRM outcomes (qualified lead, booked appointment, closed sale) back to Meta via Conversion API (CAPI) and offline events. The algorithm now optimizes for buyers."
    }
  ];

  return (
    <section id="signal" className="py-16 lg:py-24 bg-brand-purewhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="THE OPERATIONAL PHILOSOPHY"
            title="The Signal Loop"
            description="Most Singapore agencies set up the browser Pixel and stop. We push qualified leads, booked appointments, and closed sales back to Meta so the algorithm targets buyers, not just browsers."
          />
          <div className="-mt-8 mb-16">
            <Button href="/contact" variant="secondary" size="lg">
              Book a Lead Engine Audit
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16 items-center">
          {/* Steps List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-brand-navy border-brand-navy text-brand-purewhite shadow-lg scale-[1.02]'
                      : 'bg-brand-offwhite border-brand-charcoal/5 hover:border-brand-yellow/50 text-brand-charcoal'
                  }`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="flex gap-4 items-start">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-1 rounded shrink-0 ${
                        isActive ? 'bg-brand-yellow text-brand-navy' : 'bg-brand-navy/10 text-brand-navy'
                      }`}
                    >
                      STEP {step.num}
                    </span>
                    <div>
                      <h3 className={`font-display text-lg font-bold mb-2 ${isActive ? 'text-brand-yellow' : 'text-brand-navy'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isActive ? 'text-brand-offwhite/80' : 'text-brand-charcoal/70'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Interactive Loop Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center items-center bg-brand-navy rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-white/5 shadow-2xl h-[520px]"
          >
            {/* Ambient decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-burgundy/10 via-brand-yellow/5 to-transparent pointer-events-none" />

            {/* Central Circle Loop visualization */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-yellow/20"
              />

              {/* CRM Outcomes Center */}
              <div className="relative z-10 w-32 h-32 rounded-full bg-brand-charcoal border-2 border-brand-yellow flex flex-col items-center justify-center text-center p-3 shadow-2xl">
                <RefreshCw className="w-5 h-5 text-brand-yellow animate-spin-slow mb-2" />
                <span className="font-mono text-[10px] text-brand-yellow uppercase tracking-widest leading-none">CRM</span>
                <span className="font-display text-xs font-bold text-brand-purewhite mt-1">OUTCOMES</span>
              </div>

              {/* Loop Nodes */}
              {[
                { label: 'META AD', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-4' },
                { label: 'FORM FILL', pos: 'right-0 top-1/2 translate-x-4 -translate-y-1/2' },
                { label: 'SALES CALL', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-4' },
                { label: 'CAPI RETURN', pos: 'left-0 top-1/2 -translate-x-4 -translate-y-1/2' }
              ].map((node, i) => {
                const isCurrent = activeStep === i;
                return (
                  <div
                    key={node.label}
                    className={`absolute ${node.pos} px-3 py-1.5 rounded-full border transition-all duration-300 flex items-center gap-1.5 z-20 ${
                      isCurrent
                        ? 'bg-brand-yellow border-brand-yellow text-brand-navy shadow-lg scale-105 font-bold'
                        : 'bg-brand-charcoal/90 border-white/10 text-brand-offwhite/80'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-burgundy animate-pulse" />
                    <span className="font-mono text-[9px] tracking-wider uppercase">{node.label}</span>
                  </div>
                );
              })}

              {/* Connecting animated data line SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" fill="none" className="stroke-white/5" strokeWidth="1" />
                {/* Active connecting segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  className="stroke-brand-yellow"
                  strokeWidth="2"
                  strokeDasharray="219.9"
                  strokeDashoffset={219.9 - (219.9 / 4) * (activeStep + 1)}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              </svg>
            </div>

            {/* Loop Wording & Singapore Market Saturation Info */}
            <div className="mt-10 border-t border-white/10 pt-6 w-full grid grid-cols-2 gap-6 relative z-10 text-brand-offwhite">
              <div className="flex gap-3">
                <Layers className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
                <div>
                  <span className="block font-mono text-xs text-brand-yellow font-bold uppercase">6 LAYERS</span>
                  <p className="text-[11px] text-brand-offwhite/60 leading-normal mt-1">Diagnostic layers checked in the Lead Engine Audit.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-5 h-5 text-brand-yellow shrink-0 mt-1" />
                <div>
                  <span className="block font-mono text-xs text-brand-yellow font-bold uppercase">4M AUDIENCE</span>
                  <p className="text-[11px] text-brand-offwhite/60 leading-normal mt-1">SG ad space saturates rapidly. Playbooks must adapt.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
