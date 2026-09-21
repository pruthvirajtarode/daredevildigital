import { motion } from 'framer-motion';

export default function WhyD3() {
  const points = [
    {
      stat: "5yr",
      title: "APAC Account Management at Meta",
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
    <section id="why-d3" className="bg-brand-offwhite border-b border-brand-charcoal/5 flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left side Image */}
      <div className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/office-bg.png')" }} />
      
      {/* Right side Content */}
      <div className="w-full lg:w-1/2 py-24 lg:py-32 px-8 lg:px-16 xl:px-24 flex items-center bg-brand-purewhite">
        <div className="max-w-2xl">
          <span className="block mb-4 text-xs font-mono font-bold tracking-[0.2em] text-brand-burgundy uppercase">
            WHY WORK WITH US
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6">
            What a Boutique Looks Like When It's Built Around One Goal.
          </h2>
          <p className="text-brand-charcoal/70 text-lg leading-relaxed mb-12">
            We do not delegate campaigns to junior executives. We do not recycle playbooks designed for large overseas markets. We optimize around outcomes.
          </p>

          <div className="space-y-10">
            {points.map((point, index) => (
              <motion.div 
                key={point.stat}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <span className="block font-mono text-3xl font-bold text-brand-burgundy/80 shrink-0 w-16">
                  {point.stat}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
