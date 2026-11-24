import { Info, HelpCircle, Check, ArrowRight, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { pricing } from '../../data/pricing';
import { motion } from 'framer-motion';

export default function Blueprint() {
  const layers = [
    {
      num: "01",
      name: "Business Snapshot",
      desc: "Ideal client profiles, offer structuring options, and lead qualification criteria definitions."
    },
    {
      num: "02",
      name: "Audience Architecture",
      desc: "Target demographics, psychographics, and Singapore Specific triggers. Mapping who Meta searches for."
    },
    {
      num: "03",
      name: "Offer & Lead Mechanism",
      desc: "Instant Form vs Landing Page trade offs, qualifying question setups, friction sizing, and form copy."
    },
    {
      num: "04",
      name: "Campaign Blueprint",
      desc: "Recommended structural build, objective variables, budget sizing, and ad set logic mappings."
    },
    {
      num: "05",
      name: "Creative Direction",
      desc: "Visual format suggestions, hook angles, and first-three-second video scripting frameworks."
    },
    {
      num: "06",
      name: "90 day Execution Roadmap",
      desc: "Weeks 1–4 (Launch), 5–8 (Optimize), 9–12 (Scale) milestones, metrics, and threshold decision targets."
    }
  ];

  return (
    <section id="blueprint" className="pt-6 lg:pt-8 pb-8 lg:pb-12 bg-brand-purewhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Layers */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="STRATEGIC MAPPING"
              title="Six Layers. Your Entire Marketing Execution, Mapped Before You Spend a Dollar."
              description="The audit diagnoses what is broken in active accounts. The Blueprint builds what does not exist yet. We outline a clear, launch ready specification for early stage brands."
            />

            <div className="mt-12 space-y-6">
              {layers.map((layer, idx) => (
                <motion.div 
                  key={layer.num} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-brand-offwhite border border-brand-charcoal/5 rounded-2xl"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-xs font-semibold text-brand-burgundy bg-brand-burgundy/10 px-3 py-1 rounded-full shrink-0">
                      LAYER {layer.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                        {layer.name}
                      </h3>
                      <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scope disclaimer */}
            <div className="mt-8 bg-brand-navy/5 border border-brand-navy/10 rounded-2xl p-6 flex gap-4">
              <Info className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-brand-navy uppercase tracking-wider">
                  WHAT IS EXCLUDED
                </span>
                <p className="text-xs text-brand-charcoal/75 leading-relaxed mt-1">
                  Pricing strategy advice, corporate brand identity systems, product cost analyses (COGS), and generic business models. The Blueprint is built purely as a marketing execution roadmap; its scope is fixed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Conversion Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="bg-brand-navy text-brand-offwhite rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/5">
              {/* Header Pricing Breakdown */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-3">
                  For Early Stage
                </span>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm font-semibold text-brand-offwhite/50 line-through">
                    {pricing.blueprint.previous}
                  </span>
                  <span className="font-display text-5xl font-bold text-brand-yellow leading-none tracking-tight">
                    {pricing.blueprint.current}
                  </span>
                </div>
                <p className="text-sm font-semibold text-brand-yellow mt-2">
                  {pricing.blueprint.note}
                </p>
              </div>

              {/* Starter Management & Graduation Clause Block */}
              <div className="space-y-3 mb-6 bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-display text-sm font-semibold text-brand-purewhite flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-brand-yellow" /> Starter Management
                  </span>
                  <span className="font-display text-sm font-bold text-brand-purewhite">
                    {pricing.starter.price}
                  </span>
                </div>
                <p className="text-xs text-brand-offwhite/60">
                  {pricing.starter.note}
                </p>

                <div className="pt-2 flex gap-2.5 border-t border-white/10">
                  <TrendingUp className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-semibold text-brand-yellow uppercase tracking-wider block mb-0.5">
                      Graduation Clause
                    </span>
                    <p className="text-[11px] text-brand-offwhite/70 leading-normal">
                      {pricing.graduationClause}
                    </p>
                  </div>
                </div>
              </div>

              {/* Target segment */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
                <div className="flex items-center gap-2 mb-2 text-brand-yellow font-bold font-display text-sm">
                  <HelpCircle className="w-4 h-4 text-brand-yellow" />
                  WHO IS THIS FOR?
                </div>
                <p className="text-xs text-brand-offwhite/75 leading-relaxed">
                  Home-based operators and early stage companies ready to advertise correctly. Not yet at S$2,000/month in Meta ad budgets, seeking a clear build roadmap before retainers start.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Ideal lead profiling and qualification thresholds",
                  "Singapore focused ad targeting blueprints",
                  "Optimum form layout design & questioning mapping",
                  "Execution ad account build structure blueprint",
                  "Visual format layout & script writing direction",
                  "90 day execution roadmap timelines",
                  "30 minute debrief strategy session"
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-brand-offwhite/80 items-start">
                    <Check className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6588240612"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-all px-8 py-4 font-bold text-center text-base shadow-md uppercase tracking-wider"
              >
                Get the Blueprint for {pricing.blueprint.current}
              </a>
              <span className="block text-center text-xs text-brand-offwhite/60 mt-3">
                * Strategic blueprints delivered within 7 business days from briefing.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
