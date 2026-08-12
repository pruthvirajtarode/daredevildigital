import SectionHeading from '../ui/SectionHeading';

export default function WhyD3() {
  const points = [
    {
      stat: "5yr",
      title: "APAC Account Management at Meta",
      desc: "Managed substantial ad spend across 100+ advertisers inside Meta. Pattern recognition on how Singapore accounts saturate — and when they do — comes from seeing it occur at scale across the region."
    },
    {
      stat: "SG",
      title: "Singapore-Specific Campaign Architecture",
      desc: "US and Australian playbooks break down in this geography. Four million reachable adults is not a US market scale. WhatsApp is not SMS. The Signal Loop is engineered for Singapore's constraints, not adapted from larger markets."
    },
    {
      stat: "1:1",
      title: "Boutique Operator Model",
      desc: "Zero account managers or coordinators. You interact directly with the specialist handling your campaigns. Only one client per vertical is accepted at our Exclusive Management tier. The work is the product."
    }
  ];

  return (
    <section id="why-d3" className="py-24 lg:py-32 bg-brand-offwhite border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY WORK WITH US"
          title="What a Boutique Looks Like When It's Built Around One Goal."
          description="We do not delegate campaigns to junior executives. We do not recycle playbooks designed for large overseas markets. We optimize around outcomes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-charcoal/10 rounded-3xl overflow-hidden mt-16 shadow-lg bg-brand-purewhite">
          {points.map((point, index) => (
            <div
              key={point.stat}
              className={`p-8 lg:p-12 flex flex-col justify-between ${
                index !== points.length - 1 ? 'border-b md:border-b-0 md:border-r border-brand-charcoal/10' : ''
              }`}
            >
              <div>
                <span className="block font-mono text-5xl lg:text-6xl font-bold text-brand-burgundy mb-6 leading-none">
                  {point.stat}
                </span>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4 leading-snug">
                  {point.title}
                </h3>
              </div>
              <p className="text-brand-charcoal/70 text-sm leading-relaxed mt-4">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
