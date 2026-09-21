import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-brand-navy overflow-hidden border-b border-brand-charcoal/5 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Overlay to ensure text readability while preserving natural image colors */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Copy Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:col-span-7"
        >
          <span className="inline-block mb-6 text-xs font-mono font-bold tracking-[0.2em] text-brand-yellow uppercase">
            DAREDEVIL DIGITAL · SINGAPORE
          </span>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-purewhite leading-[1.05] mb-8 uppercase">
            BOLD DIGITAL STRATEGY.<br />
            BUILT FOR REAL GROWTH.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-brand-offwhite/90 mb-6">
            From social strategy and creative execution to performance marketing and lead-generation systems, Daredevil Digital helps businesses turn digital attention into measurable opportunity.
          </p>

          <p className="text-base leading-relaxed text-brand-offwhite/80 mb-10 border-l-2 border-brand-yellow pl-4 italic">
            Built around a simple principle: your campaigns should learn from the customers you actually want — not just the people who submit forms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              START A CONVERSATION
            </Button>
            <Button href="/signal-audit" variant="outline-light" size="lg">
              SEE HOW THE SIGNAL LOOP WORKS
            </Button>
          </div>
          
          {/* Active Verticals Pill Strip */}
          <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
            <span className="font-mono text-xs font-bold text-white/60 uppercase tracking-widest shrink-0">
              Active Verticals
            </span>
            <div className="flex flex-wrap gap-3">
              {['Renovation', 'Electrical', 'Aesthetics', 'Tuition', 'Finance', 'Legal', 'Real Estate'].map((v) => (
                <span key={v} className="font-mono text-xs sm:text-sm text-white border border-white/20 px-4 py-2 rounded bg-white/10 shadow-sm backdrop-blur-sm">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Right Graphical Column */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[380px] lg:h-[550px] w-full flex justify-center items-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[110%] h-[110%] bg-brand-yellow/10 rounded-full blur-3xl -z-10"
          />
          <div className="relative w-full h-full max-w-sm lg:max-w-md mx-auto">
            {/* Visual stacked card aesthetics */}
            <div className="absolute inset-0 bg-brand-purewhite/10 backdrop-blur-sm rounded-3xl shadow-2xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-brand-yellow/80 rounded-3xl shadow-xl transform -rotate-2" />
            <div className="absolute inset-0 bg-brand-purewhite/95 rounded-3xl shadow-lg border border-brand-charcoal/10 overflow-hidden z-10 flex flex-col">
              
              {/* Fake dashboard UI header */}
              <div className="bg-brand-navy p-4 flex justify-between items-center border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-burgundy" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-[9px] text-white/50 tracking-widest">D3_INTELLIGENCE_LOOP</span>
              </div>
              
              <div className="flex-1 relative bg-brand-charcoal overflow-hidden p-6 flex flex-col justify-between">
                {/* Header Info */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[9px] text-brand-yellow uppercase tracking-widest block">
                        CAPI FEEDBACK ENGINE
                      </span>
                      <span className="text-xl font-display font-bold text-brand-purewhite mt-1 block">
                        D3_INTELLIGENCE_LOOP
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4">
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block uppercase tracking-wider">OFFLINE MATCHES</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-mono text-2xl font-bold text-brand-purewhite">1,842</span>
                        <span className="font-mono text-[9px] text-[#22C55E] font-bold">+18.4%</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-white/40 block uppercase tracking-wider">MATCH QUALITY</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-mono text-2xl font-bold text-[#22C55E]">9.4<span className="text-xs text-white/40">/10</span></span>
                        <span className="font-mono text-[9px] text-brand-yellow font-bold uppercase">EXCELLENT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SVG Line / Area Chart */}
                <div className="relative my-4 h-28 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden p-2 flex flex-col justify-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 pointer-events-none opacity-20">
                    <div className="border-r border-b border-white/10" />
                    <div className="border-r border-b border-white/10" />
                    <div className="border-r border-b border-white/10" />
                    <div className="border-b border-white/10" />
                    <div className="border-r border-b border-white/10" />
                    <div className="border-r border-b border-white/10" />
                    <div className="border-r border-b border-white/10" />
                    <div className="border-b border-white/10" />
                    <div className="border-r border-white/10" />
                    <div className="border-r border-white/10" />
                    <div className="border-r border-white/10" />
                    <div className="border-white/10" />
                  </div>

                  {/* SVG Chart Line */}
                  <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F5C400" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#F5C400" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Fill Area */}
                    <path
                      d="M0,50 L0,35 Q15,20 30,30 T60,15 T90,5 L100,5 L100,50 Z"
                      fill="url(#chartGrad)"
                    />
                    {/* Line Path */}
                    <motion.path
                      d="M0,35 Q15,20 30,30 T60,15 T90,5 L100,5"
                      fill="none"
                      className="stroke-brand-yellow"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  
                  {/* Tooltip Overlay */}
                  <div className="absolute top-2 right-4 bg-brand-navy/90 border border-white/10 rounded px-2 py-0.5 pointer-events-none shadow">
                    <span className="font-mono text-[7px] text-brand-yellow font-bold uppercase tracking-wider">CAPI Match: Booked Sale</span>
                  </div>
                </div>

                {/* Event Logs stream */}
                <div className="space-y-1.5 font-mono text-[8px] text-white/50 border-t border-white/5 pt-4">
                  <div className="flex justify-between items-center text-white/40">
                    <span>REAL-TIME SIGNAL ROUTING</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
                  </div>
                  <div className="flex items-center justify-between bg-white/[0.02] px-2 py-1 rounded">
                    <span className="text-brand-purewhite">10:44 AM - Lead Qualified (CRM)</span>
                    <span className="text-[#22C55E] font-bold">Matched &rarr; Meta Ads</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/[0.02] px-2 py-1 rounded">
                    <span className="text-brand-purewhite">10:42 AM - Booked Appointment (Calendly)</span>
                    <span className="text-[#22C55E] font-bold">Matched &rarr; Meta Ads</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
