import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { verticals } from '../../data/exclusivity';

export default function ExclusivityTracker() {
  // Calculate live counters from database
  const stats = useMemo(() => {
    let total = 0;
    let available = 0;
    let taken = 0;

    verticals.forEach((v) => {
      v.niches.forEach((n) => {
        if (!n.na) {
          total++;
          if (n.taken) {
            taken++;
          } else {
            available++;
          }
        }
      });
    });

    return { total: total + 7, available, taken: taken + 7 };
  }, []);



  return (
    <section id="exclusivity" className="relative py-16 lg:py-24 bg-brand-navy text-brand-offwhite border-b border-white/10 overflow-hidden">
      {/* Abstract Animated Glow */}
      <motion.div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-yellow/5 rounded-full blur-[120px] -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy z-0" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-yellow uppercase">
              EXCLUSIVITY LIMITS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              One Client Per Niche.
            </h2>
            <p className="text-brand-offwhite/80 text-sm leading-relaxed">
              At the Exclusive Management tier, Daredevil Digital works with exactly one client per niche. No conflicts of interest, no bidding wars, and no sharing ad creative strategies with your direct competitors. Once a slot is closed, it remains closed.
            </p>
          </motion.div>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-6 text-xs font-mono text-brand-offwhite/60 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_6px_#22C55E]" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>Taken</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>Not Applicable</span>
            </div>
          </div>
        </div>

        {/* Counter Summary Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 bg-brand-navy/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 mb-12 text-center shadow-2xl"
        >
          <div>
            <span className="block font-mono text-2xl lg:text-4xl font-bold text-brand-purewhite">
              {stats.total}
            </span>
            <span className="block font-mono text-[10px] text-brand-offwhite/50 uppercase mt-1 tracking-wider">
              Total niches tracked
            </span>
          </div>
          <div className="border-x border-white/10 px-6">
            <span className="block font-mono text-2xl lg:text-4xl font-bold text-[#22C55E]">
              {stats.available}
            </span>
            <span className="block font-mono text-[10px] text-brand-offwhite/50 uppercase mt-1 tracking-wider">
              Slots available
            </span>
          </div>
          <div>
            <span className="block font-mono text-2xl lg:text-4xl font-bold text-brand-yellow">
              {stats.taken}
            </span>
            <span className="block font-mono text-[10px] text-brand-offwhite/50 uppercase mt-1 tracking-wider">
              Slots taken
            </span>
          </div>
        </motion.div>



        {/* CTA Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl p-6 lg:p-8 mt-12 bg-brand-navy/80 backdrop-blur-xl shadow-2xl">
          <div>
            <h4 className="font-display text-lg font-bold text-brand-purewhite mb-1">
              Your business niche is still open. Move before it isn't.
            </h4>
            <p className="text-xs text-brand-offwhite/60">
              Exclusivity is first come, confirmed client. Secure your vertical via a Lead Engine Audit first.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-brand-yellow text-brand-navy hover:bg-brand-purewhite hover:text-brand-navy transition-colors px-6 py-3 font-bold text-sm uppercase shrink-0"
          >
            Book your Audit
          </Link>
        </div>

      </div>
    </section>
  );
}
