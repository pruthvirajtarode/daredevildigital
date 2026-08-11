import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['ALL', 'SOCIAL', 'CONTENT', 'WEB', 'ANALYTICS', 'BRANDING'];

const projects = [
  { id: 1, title: 'Digital Growth System', category: 'WEB', type: 'CONCEPT PROJECT' },
  { id: 2, title: 'Social Media Playbook', category: 'SOCIAL', type: 'CONCEPT PROJECT' },
  { id: 3, title: 'Content Engine Architecture', category: 'CONTENT', type: 'CONCEPT PROJECT' },
  { id: 4, title: 'Brand Identity Redefined', category: 'BRANDING', type: 'CONCEPT PROJECT' },
  { id: 5, title: 'Performance Dashboard UI', category: 'ANALYTICS', type: 'CONCEPT PROJECT' },
  { id: 6, title: 'E-commerce Conversion Flow', category: 'WEB', type: 'CONCEPT PROJECT' },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-brand-purewhite">
      <section className="py-24 lg:py-32 border-b border-brand-charcoal/5 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="PORTFOLIO"
            title="SELECTED WORK"
            description="A showcase of our capabilities, strategic thinking, and digital execution."
            alignment="center"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-brand-navy text-brand-purewhite' 
                    : 'bg-brand-offwhite text-brand-charcoal/60 hover:text-brand-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-3xl bg-brand-offwhite mb-6 overflow-hidden flex items-center justify-center relative border border-brand-charcoal/5">
                    <span className="text-brand-charcoal/40 font-bold tracking-widest uppercase">Case Study Coming Soon</span>
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/5 transition-colors duration-300" />
                  </div>
                  <div className="flex gap-4 items-center text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-3">
                    <span className="text-brand-burgundy">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
                    <span>{project.type}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
