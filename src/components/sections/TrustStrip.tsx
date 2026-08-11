import { motion } from 'framer-motion';

const words = ["STRATEGY", "CREATIVE", "ANALYTICS", "DIGITAL EXPERIENCE"];

export default function TrustStrip() {
  return (
    <div className="bg-brand-yellow py-6 overflow-hidden border-y-2 border-brand-charcoal/5 flex whitespace-nowrap">
      <motion.div
        className="flex gap-16 font-display font-bold text-xl md:text-2xl tracking-widest text-brand-navy items-center px-8"
        animate={{
          x: [0, -1035],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Repeat enough times to fill screen and scroll smoothly */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {words.map((word, index) => (
              <span key={`${i}-${index}`} className="flex items-center gap-16">
                {word}
                <span className="text-brand-burgundy">+</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
