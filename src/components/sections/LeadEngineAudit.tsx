import { motion } from 'framer-motion';
import { Check, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { pricing } from '../../data/pricing';

export default function LeadEngineAudit() {
  const layers = [
    {
      num: "01",
      name: "Signal Integrity",
      weight: "25%",
      desc: "Event Match Quality, CAPI, deduplication, optimization events, and CRM offline conversion tracking."
    },
    {
      num: "02",
      name: "Account Structure",
      weight: "20%",
      desc: "Learning limited ad sets, conversions per ad set, learning resets, and audience overlap constraints."
    },
    {
      num: "03",
      name: "Saturation Check",
      weight: "15%",
      desc: "Audience size thresholds, frequency trends, CPM trajectories, and first-impression ratios (the Singapore killer)."
    },
    {
      num: "04",
      name: "Creative Breakdown",
      weight: "15%",
      desc: "Hook rates, hold rates, creative concept diversity, winner concentration index, and format combinations."
    },
    {
      num: "05",
      name: "Lead Handling Layer",
      weight: "15%",
      desc: "Form friction mechanics, qualifying filtering questions, speed to lead times, follow up automations, and outcome tracking."
    },
    {
      num: "06",
      name: "Business Layer ROI",
      weight: "10%",
      desc: "Cost Per Lead (CPL), Cost Per Qualified Lead (CPQL), close rate mapping by ad set, customer acquisition cost (CAC) vs Lifetime Value (LTV)."
    }
  ];

  return (
    <section id="audit" className="py-24 lg:py-32 bg-brand-navy text-brand-offwhite border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Diagnostics */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="DEEP DIAGNOSTIC"
              title="Six Layers. Every Place Your Meta Campaign Can Break."
              description="We score your account on platform configuration, not arbitrary industry benchmarks. Every finding maps to Meta's own documentation, and every Critical issue includes a fix."
              theme="dark"
            />

            <div className="mt-12 space-y-6">
              {layers.map((layer) => (
                <div key={layer.num} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-display text-lg font-bold text-brand-purewhite flex items-center gap-3">
                      <span className="text-brand-yellow font-mono text-sm">{layer.num}</span>
                      {layer.name}
                    </h3>
                    <span className="font-mono text-sm text-brand-yellow font-bold bg-brand-yellow/10 px-2 py-0.5 rounded">
                      {layer.weight} weight
                    </span>
                  </div>
                  
                  <p className="text-sm text-brand-offwhite/70 leading-relaxed mb-4">
                    {layer.desc}
                  </p>

                  {/* Weighted bar */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: layer.weight }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-yellow rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Sticky Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-brand-purewhite text-brand-charcoal rounded-3xl p-8 lg:p-12 shadow-2xl border border-brand-charcoal/10">
              <div className="mb-6">
                <span className="text-xs font-mono text-brand-charcoal/50 line-through block">
                  {pricing.audit.previous}
                </span>
                <span className="font-mono text-5xl font-bold text-brand-burgundy leading-none">
                  {pricing.audit.current}
                </span>
                <p className="text-sm font-semibold text-brand-burgundy mt-2">
                  {pricing.audit.note}
                </p>
              </div>

              {/* Qualification gate */}
              <div className="bg-brand-offwhite rounded-2xl p-6 border border-brand-charcoal/5 mb-8">
                <div className="flex items-center gap-2 mb-3 text-brand-navy font-bold font-display text-sm">
                  <ShieldAlert className="w-4 h-4 text-brand-burgundy" />
                  QUALIFICATION CRITERIA
                </div>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                  Singapore targeted lead generation businesses spending **S$5,000/month or more** on Meta, running campaigns continuously for **60+ days**.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Configuration Health score across six layers",
                  "Fix blueprints for all Critical setup errors",
                  "CAPI & event matching gap analysis",
                  "Frequency, CPM, and CPL saturation read",
                  "30 minute debrief call with the operator"
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-brand-charcoal/80 items-start">
                    <Check className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-all px-8 py-4 font-bold text-center text-base shadow-md uppercase tracking-wider"
              >
                Book your Lead Engine Audit
              </Link>
              <span className="block text-center font-mono text-[10px] text-brand-charcoal/50 mt-3">
                * Intake via appointment. View access to Business Manager required.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
