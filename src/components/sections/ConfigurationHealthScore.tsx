import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';

export default function ConfigurationHealthScore() {
  const [score, setScore] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate circular path
      controls.start({
        pathLength: 0.43,
        transition: { duration: 2, ease: "easeOut" }
      });

      // Animate count-up
      const end = 43;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setScore(Math.round(eased * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setScore(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, controls]);

  return (
    <section id="health-score" ref={ref} className="py-24 bg-brand-navy text-brand-offwhite relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-yellow uppercase">
              ACCOUNT CONFIGURATION HEALTH
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Most Singapore lead gen accounts are optimizing toward the wrong signal.
            </h2>
            <p className="text-brand-offwhite/80 text-lg leading-relaxed mb-8">
              Based on our analysis of active campaigns in Singapore, the average setup fails to feed post-click conversion events back to ad platforms. Meta's algorithm is forced to optimize for volume (form clicks) rather than value (closed sales).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
              <Button href="#audit" variant="secondary" size="md">
                Check Your Score
              </Button>
              <div className="text-xs font-mono text-brand-offwhite/50 mt-3 sm:mt-0 sm:self-center">
                * Real score is derived from our 6 layer Lead Engine Audit.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
          >
            {/* Animated Gauge */}
            <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-white/10 fill-none"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="stroke-brand-yellow fill-none"
                  strokeWidth="8"
                  strokeDasharray="314.16"
                  initial={{ pathLength: 0 }}
                  animate={controls}
                />
              </svg>
              {/* Score text inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-5xl font-bold text-brand-yellow leading-none">
                  {score}
                </span>
                <span className="font-mono text-xs text-brand-offwhite/50 mt-1 uppercase tracking-wider">
                  / 100
                </span>
              </div>
            </div>

            {/* Labels */}
            <div className="space-y-4 text-center sm:text-left">
              <div>
                <span className="block text-sm font-bold tracking-widest text-brand-yellow/80 uppercase">
                  TYPICAL SG SCORE
                </span>
                <span className="text-2xl font-display font-bold text-brand-purewhite">
                  Active Meta Spenders
                </span>
              </div>
              <div className="text-sm text-brand-offwhite/70 leading-relaxed max-w-xs">
                Illustrative average score before Signal Loop implementation. Book an audit to pinpoint your configuration errors.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
