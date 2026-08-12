import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-brand-offwhite overflow-hidden border-b border-brand-charcoal/5">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Copy Column */}
        <div className="max-w-2xl lg:col-span-7">
          <span className="inline-block mb-6 text-xs font-mono font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            DAREDEVIL DIGITAL · SINGAPORE
          </span>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy leading-[1.05] mb-8 uppercase">
            BOLD DIGITAL STRATEGY.<br />
            BUILT FOR REAL GROWTH.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-brand-charcoal/80 mb-6">
            From social strategy and creative execution to performance marketing and lead-generation systems, Daredevil Digital helps businesses turn digital attention into measurable opportunity.
          </p>

          <p className="text-base leading-relaxed text-brand-charcoal/80 mb-10 border-l-2 border-brand-yellow pl-4 italic">
            Built around a simple principle: your campaigns should learn from the customers you actually want — not just the people who submit forms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              START A CONVERSATION
            </Button>
            <Button href="#signal" variant="outline" size="lg">
              SEE HOW THE SIGNAL LOOP WORKS
            </Button>
          </div>
          
          {/* Active Verticals Pill Strip */}
          <div className="mt-16 pt-8 border-t border-brand-charcoal/10 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-mono text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest shrink-0">
              Active Verticals
            </span>
            <div className="flex flex-wrap gap-2">
              {['Renovation', 'Electrical', 'Aesthetics', 'Tuition', 'Finance', 'Legal', 'Real Estate'].map((v) => (
                <span key={v} className="font-mono text-[10px] text-brand-navy border border-brand-navy/15 px-2.5 py-1 rounded bg-brand-navy/5">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Graphical Column */}
        <div className="lg:col-span-5 relative h-[380px] lg:h-[550px] w-full flex justify-center items-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[110%] h-[110%] bg-brand-yellow/5 rounded-full blur-3xl -z-10"
          />
          <div className="relative w-full h-full max-w-sm lg:max-w-md mx-auto">
            {/* Visual stacked card aesthetics */}
            <div className="absolute inset-0 bg-brand-navy rounded-3xl shadow-2xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-brand-yellow rounded-3xl shadow-xl transform -rotate-2" />
            <div className="absolute inset-0 bg-brand-purewhite rounded-3xl shadow-lg border border-brand-charcoal/10 overflow-hidden z-10 flex flex-col">
              
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
                <div>
                  <span className="font-mono text-[10px] text-brand-yellow uppercase tracking-widest">LIVE DATA CAMPAIGN FEEDBACK</span>
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <span className="font-mono text-[10px] text-white/40 block uppercase">AD CONVERSIONS</span>
                      <span className="font-mono text-3xl font-bold text-brand-purewhite">1,842</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-white/40 block uppercase">CRM MATCH RATE</span>
                      <span className="font-mono text-lg font-bold text-[#22C55E]">98.2%</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Chart Wave */}
                <div className="my-6 flex items-end gap-1 h-32">
                  {[40, 55, 30, 45, 60, 75, 50, 65, 80, 95, 70, 85, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                      className={`flex-1 rounded-t-sm ${i === 12 ? 'bg-brand-yellow' : 'bg-brand-purewhite/20'}`}
                    />
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                    <span className="font-mono text-[9px] text-white/60 uppercase">CAPI loop synched</span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-yellow">© D3 Engine</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
