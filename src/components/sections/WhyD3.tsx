import { motion } from 'framer-motion';

export default function WhyD3() {
  const points = [
    {
      stat: "5yr",
      title: "APAC Account Management for META",
      desc: "Managed substantial ad spend across 100+ advertisers inside Meta. Pattern recognition on how Singapore accounts saturate comes from seeing it occur at scale."
    },
    {
      stat: "SG",
      title: "Singapore Specific Architecture",
      desc: "The Signal Loop is engineered for Singapore's constraints, not adapted from larger markets. Four million reachable adults requires a different playbook."
    },
    {
      stat: "1:1",
      title: "Boutique Operator Model",
      desc: "Zero account managers. You interact directly with the specialist handling your campaigns. The work is the product."
    }
  ];

  return (
    <section id="why-d3" className="bg-brand-purewhite border-b border-brand-charcoal/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            WHY WORK WITH US
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6">
            What a Boutique Looks Like When It's Built Around One Goal.
          </h2>
          <p className="text-brand-charcoal/70 text-lg leading-relaxed">
            We do not delegate campaigns to junior executives. We do not recycle playbooks designed for large overseas markets. We optimize around outcomes.
          </p>
        </div>

        {/* 3-Column Grid for Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {points.map((point, index) => (
            <motion.div 
              key={point.stat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col text-center items-center"
            >
              <span className="block font-mono text-5xl font-bold text-brand-burgundy mb-4 tracking-tighter">
                {point.stat}
              </span>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-brand-charcoal/70 text-sm leading-relaxed max-w-sm">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
