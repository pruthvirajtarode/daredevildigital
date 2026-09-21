import SectionHeading from '../ui/SectionHeading';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "Daredevil Digital rebuilt our entire lead generation system. Cost per acquisition dropped by 45% in the first month.",
    author: "James T.",
    company: "Renovation Firm",
    metric: "-45% CPA",
    image: "/images/avatar_james.png",
    rating: 5
  },
  {
    text: "The CAPI integration alone recovered 30% of our lost signal. Our campaigns are finally exiting the learning phase consistently.",
    author: "Sarah L.",
    company: "Aesthetics Clinic",
    metric: "+30% Signal",
    image: "/images/avatar_sarah.png",
    rating: 5
  },
  {
    text: "They don't just run ads; they build data pipelines. We scaled our spend by 3x without breaking our target margins.",
    author: "David M.",
    company: "Finance Consultancy",
    metric: "3x Scale",
    image: "/images/avatar_david.png",
    rating: 4
  },
  {
    text: "Our lead quality went from terrible to highly qualified just by implementing their form qualification mechanics.",
    author: "Elena R.",
    company: "Real Estate",
    metric: "Qualified Leads",
    image: "/images/avatar_elena.png",
    rating: 5
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-brand-purewhite border-b border-brand-charcoal/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT OUTCOMES"
          title="The Signal Loop in Practice."
          description="We let real world numbers and database performance do the talking. Testimonials and outcomes are independently verified."
        />

        <div className="mt-16 lg:mt-24 relative">
          {/* Gradient Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-purewhite to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-purewhite to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div 
                key={i} 
                className="w-[320px] md:w-[400px] shrink-0 bg-white border border-brand-charcoal/5 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <img 
                      src={review.image} 
                      alt={review.author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-charcoal/5 shadow-sm"
                    />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star 
                          key={j} 
                          className={`w-4 h-4 ${j < review.rating ? 'fill-brand-yellow text-brand-yellow' : 'fill-brand-charcoal/10 text-brand-charcoal/10'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-brand-navy font-display text-lg md:text-xl font-medium leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex justify-between items-end border-t border-brand-charcoal/5 pt-6">
                  <div>
                    <p className="font-bold text-brand-navy">{review.author}</p>
                    <p className="text-sm text-brand-charcoal/60">{review.company}</p>
                  </div>
                  <span className="font-mono text-[10px] md:text-xs font-bold text-brand-burgundy bg-brand-burgundy/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {review.metric}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
