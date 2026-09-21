import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { pricing } from '../../data/pricing';
import Button from '../ui/Button';

export default function PerformanceTracks() {
  return (
    <section id="performance-tracks" className="py-24 lg:py-32 bg-brand-offwhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            COMMERCIAL TRACKS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-6">
            Two Tracks. One Standard.
          </h2>
          <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed">
            Active Meta spenders who need performance fixed vs early-stage businesses who need it built right from day one. Both tracks run the same core Signal Loop feedback logic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-stretch">
          {/* Option A — Active Spenders */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -6 }}
            transition={{ 
              y: { duration: 0.3 },
              default: { duration: 0.6, ease: "easeOut" } 
            }}
            className="flex flex-col bg-brand-navy text-brand-offwhite rounded-3xl p-8 lg:p-12 shadow-xl border border-white/5 relative overflow-hidden"
          >
            {/* Ambient accent background glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 rounded mb-4">
                  Option A — Active Spenders
                </span>
                <h3 className="font-display text-3xl font-bold text-brand-purewhite">
                  Lead Engine Management
                </h3>
              </div>
            </div>
            
            <p className="text-brand-offwhite/70 text-sm leading-relaxed mb-8">
              For businesses already spending S$3,000/month or more on Meta ads. You have live data and budget; the problem lies in event configuration, target signals, saturating creative, or lead handling logic. We audit, repair, then optimize.
            </p>

            <div className="flex-1 space-y-6 mb-12">
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-purewhite flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-yellow" /> Lead Engine Audit
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-white/40 line-through mr-2">{pricing.audit.previous}</span>
                    <span className="font-mono text-sm font-bold text-brand-yellow">{pricing.audit.current}</span>
                  </div>
                </div>
                <p className="text-xs text-brand-offwhite/50 pl-6">
                  {pricing.audit.note} Diagnostic checks on event signals and structural breaks.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-purewhite flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-yellow" /> Launch Management
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-purewhite">{pricing.launch.price}</span>
                </div>
                <p className="text-xs text-brand-offwhite/50 pl-6">
                  {pricing.launch.note} Fix execution roadmap built into campaign resets.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-purewhite flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-yellow" /> Engine Management
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-purewhite">{pricing.engine.price}</span>
                </div>
                <p className="text-xs text-brand-offwhite/50 pl-6">
                  {pricing.engine.note} CAPI integration, offline mapping, and creative iteration.
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-purewhite flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-yellow" /> Exclusive Management
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-yellow">{pricing.exclusive.price}</span>
                </div>
                <p className="text-xs text-brand-offwhite/50 pl-6">
                  {pricing.exclusive.note} category exclusivity limit: one operator per vertical.
                </p>
              </div>
            </div>

            <Button href="#audit" variant="secondary" fullWidth size="lg">
              Book a Lead Engine Audit
            </Button>
          </motion.div>

          {/* Option B — Early Stage */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -6 }}
            transition={{ 
              y: { duration: 0.3 },
              default: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
            }}
            className="flex flex-col bg-brand-purewhite text-brand-charcoal rounded-3xl p-8 lg:p-12 shadow-lg border border-brand-charcoal/5 relative overflow-hidden"
          >
            {/* Ambient accent background glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-burgundy/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-burgundy bg-brand-burgundy/10 border border-brand-burgundy/20 rounded mb-4">
                  Option B — Early Stage
                </span>
              </div>
            </div>

            <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-8">
              For home-based, start-up, or early-stage businesses ready to deploy ad spend on Meta systematically. We map target audiences, creative vectors, and lead flows prior to launching campaign structures.
            </p>

            <div className="flex-1 space-y-6 mb-12">
              <div className="border-t border-brand-charcoal/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-navy flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-burgundy" /> Strategic Blueprint
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-brand-charcoal/40 line-through mr-2">{pricing.blueprint.previous}</span>
                    <span className="font-mono text-sm font-bold text-brand-burgundy">{pricing.blueprint.current}</span>
                  </div>
                </div>
                <p className="text-xs text-brand-charcoal/60 pl-6">
                  {pricing.blueprint.note} Comprehensive 90-day launch roadmap.
                </p>
              </div>

              <div className="border-t border-brand-charcoal/10 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-display text-base font-semibold text-brand-navy flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-burgundy" /> Starter Management
                  </span>
                  <span className="font-mono text-sm font-bold text-brand-navy">{pricing.starter.price}</span>
                </div>
                <p className="text-xs text-brand-charcoal/60 pl-6">
                  {pricing.starter.note} Optimized management scale for low ad-spend parameters.
                </p>
              </div>

              <div className="border-t border-brand-charcoal/10 pt-4 flex gap-3 bg-brand-offwhite p-4 rounded-xl border border-brand-charcoal/5">
                <TrendingUp className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[10px] font-bold text-brand-burgundy uppercase">
                    Graduation Clause
                  </span>
                  <p className="text-[11px] text-brand-charcoal/70 leading-normal mt-1">
                    {pricing.graduationClause}
                  </p>
                </div>
              </div>
            </div>

            <Button href="#blueprint" variant="outline" fullWidth size="lg">
              Get the Blueprint
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
