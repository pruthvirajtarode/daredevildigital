import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'left',
  theme = 'light',
  as = 'h2'
}: SectionHeadingProps) {
  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const isDark = theme === 'dark';
  const HeadingTag = as;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 lg:mb-16 ${aligns[alignment]}`}
    >
      {eyebrow && (
        <span className={`block mb-4 text-xs font-bold tracking-widest uppercase ${isDark ? 'text-brand-yellow' : 'text-brand-burgundy'}`}>
          {eyebrow}
        </span>
      )}
      <HeadingTag className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 ${isDark ? 'text-brand-purewhite' : 'text-brand-navy'}`}>
        {title}
      </HeadingTag>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-brand-offwhite/80' : 'text-brand-charcoal/80'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
