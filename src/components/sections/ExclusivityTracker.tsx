import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { verticals } from '../../data/exclusivity';
import type { Vertical } from '../../data/exclusivity';

export default function ExclusivityTracker() {
  const [filter, setFilter] = useState<'all' | 'available' | 'taken'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openVerticals, setOpenVerticals] = useState<Record<string, boolean>>({
    'home-services': true, // Keep the first vertical open by default
  });

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

    return { total, available, taken };
  }, []);

  const toggleVertical = (id: string) => {
    setOpenVerticals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter and Search logic
  const filteredVerticals = useMemo(() => {
    return verticals
      .map((v) => {
        const matchingNiches = v.niches.filter((n) => {
          // Search query check
          const matchesSearch = n.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                v.name.toLowerCase().includes(searchQuery.toLowerCase());
          
          if (!matchesSearch) return false;

          // Status filter check
          if (filter === 'available') return !n.taken && !n.na;
          if (filter === 'taken') return n.taken;
          return true; // 'all'
        });

        return {
          ...v,
          niches: matchingNiches,
        };
      })
      .filter((v) => v.niches.length > 0);
  }, [filter, searchQuery]);

  // Compute status details for vertical badge
  const getVerticalStatus = (v: Vertical) => {
    const active = v.niches.filter((n) => !n.na);
    const takenCount = active.filter((n) => n.taken).length;
    
    if (takenCount === 0) {
      return { badgeClass: 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20', label: 'All open' };
    }
    if (takenCount === active.length) {
      return { badgeClass: 'bg-brand-burgundy/10 text-brand-yellow border-brand-burgundy/20', label: 'Full' };
    }
    return { badgeClass: 'bg-amber-500/10 text-amber-500 border-amber-500/20', label: `${takenCount}/${active.length} taken` };
  };

  return (
    <section id="exclusivity" className="relative py-24 lg:py-32 bg-brand-navy text-brand-offwhite border-b border-white/10 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/handshake-bg.png')" }}>
      {/* Decorative overlay for readability while keeping image natural */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
      
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
              One Client Per Niche. Check If Yours Is Open.
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

        {/* Search & Filter Toggles */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All verticals' },
              { id: 'available', label: 'Available only' },
              { id: 'taken', label: 'Taken' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`font-mono text-xs tracking-wider px-4 py-2 border rounded transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-brand-yellow border-brand-yellow text-brand-navy font-bold shadow'
                    : 'border-white/10 hover:border-white/30 text-brand-offwhite/80'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-offwhite/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your industry niche..."
              className="w-full bg-brand-navy/60 backdrop-blur-md border border-white/10 focus:border-brand-yellow rounded-lg pl-10 pr-4 py-2 text-sm text-brand-offwhite placeholder-brand-offwhite/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Verticals List */}
        <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/10 bg-brand-navy/70 backdrop-blur-xl shadow-2xl">
          {filteredVerticals.length > 0 ? (
            filteredVerticals.map((vert) => {
              const isOpen = !!openVerticals[vert.id];
              const status = getVerticalStatus(vert);
              return (
                <div key={vert.id} className="bg-white/[0.01] transition-colors">
                  {/* Accordion header */}
                  <button
                    onClick={() => toggleVertical(vert.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <ChevronDown
                        className={`w-4 h-4 text-brand-offwhite/40 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                      <span className="font-display text-base font-bold text-brand-purewhite">
                        {vert.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-brand-offwhite/40 hidden sm:inline">
                        {vert.niches.filter((n) => n.taken).length}/{vert.niches.filter((n) => !n.na).length} taken
                      </span>
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border rounded ${status.badgeClass}`}>
                        {status.label}
                      </span>
                    </div>
                  </button>

                  {/* Accordion details */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-t border-white/10 divide-white/10">
                          {vert.niches.map((niche) => {
                            const isNicheTaken = niche.taken;
                            const isNa = niche.na;
                            return (
                              <div
                                key={niche.name}
                                className={`px-6 py-4 flex items-center justify-between gap-4 border-b border-white/10 md:border-r border-white/10 hover:bg-white/[0.02] last:border-r-0 ${
                                  isNicheTaken ? 'bg-white/[0.01]' : ''
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`w-2 h-2 rounded-full shrink-0 ${
                                      isNa
                                        ? 'bg-white/20'
                                        : isNicheTaken
                                        ? 'bg-brand-yellow'
                                        : 'bg-[#22C55E] shadow-[0_0_6px_#22C55E]'
                                    }`}
                                  />
                                  <span
                                    className={`font-display text-sm font-medium ${
                                      isNa
                                        ? 'text-brand-offwhite/30'
                                        : isNicheTaken
                                        ? 'text-brand-offwhite/40 line-through decoration-brand-burgundy/40'
                                        : 'text-brand-offwhite'
                                    }`}
                                  >
                                    {niche.name}
                                  </span>
                                </div>
                                <span
                                  className={`font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 border rounded ${
                                    isNa
                                      ? 'border-white/10 text-brand-offwhite/30 bg-transparent'
                                      : isNicheTaken
                                      ? 'border-brand-yellow/20 text-brand-yellow bg-brand-yellow/5'
                                      : 'border-[#22C55E]/20 text-[#22C55E] bg-[#22C55E]/5'
                                  }`}
                                >
                                  {isNa ? 'N/A' : isNicheTaken ? 'Taken' : 'Available'}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-brand-offwhite/50 text-sm">
              No matching business niches found for your filter/search criteria.
            </div>
          )}
        </div>

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
          <a
            href="https://wa.me/6588240612"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-yellow text-brand-navy hover:bg-brand-purewhite hover:text-brand-navy transition-colors px-6 py-3 font-bold text-sm uppercase shrink-0"
          >
            Book your Audit
          </a>
        </div>

      </div>
    </section>
  );
}
