interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'left',
  theme = 'light'
}: SectionHeadingProps) {
  const aligns = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl mb-16 ${aligns[alignment]}`}>
      {eyebrow && (
        <span className={`block mb-4 text-xs font-bold tracking-widest uppercase ${isDark ? 'text-brand-yellow' : 'text-brand-burgundy'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 ${isDark ? 'text-brand-purewhite' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-brand-offwhite/80' : 'text-brand-charcoal/80'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
