import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/ui/SEO';

const categories = ['ALL', 'SOCIAL', 'CONTENT', 'WEB', 'ANALYTICS', 'BRANDING'];

const projects = [
  { id: 1, title: 'Digital Growth System', category: 'WEB', type: 'CONCEPT PROJECT', img: '/images/case_study_1_1786440689248.png' },
  { id: 2, title: 'Social Media Playbook', category: 'SOCIAL', type: 'CONCEPT PROJECT', img: '/images/service_social_media_1786441004737.png' },
  { id: 3, title: 'Content Engine Architecture', category: 'CONTENT', type: 'CONCEPT PROJECT', img: '/images/service_content_1786441264836.png' },
  { id: 4, title: 'Brand Identity Redefined', category: 'BRANDING', type: 'CONCEPT PROJECT', img: '/images/pillar_creative_1786441173912.png' },
  { id: 5, title: 'Performance Dashboard UI', category: 'ANALYTICS', type: 'CONCEPT PROJECT', img: '/images/case_study_2_1786440961686.png' },
  { id: 6, title: 'Ecommerce Conversion Flow', category: 'WEB', type: 'CONCEPT PROJECT', img: '/images/service_webdev_1786441294976.png' },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-purewhite">
      <SEO 
        title="Work"
        description="A showcase of our digital marketing capabilities, strategic thinking, and digital execution for Singapore businesses."
      />
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 border-b border-brand-charcoal/5 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="PORTFOLIO"
            title="SELECTED WORK"
            description="A showcase of our capabilities, strategic thinking, and digital execution."
            alignment="center"
            as="h1"
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
                  className="group cursor-pointer outline-none"
                  tabIndex={0}
                  whileHover="active"
                  whileTap="active"
                >
                  <div className="aspect-[4/3] rounded-3xl bg-brand-offwhite mb-6 overflow-hidden relative border border-brand-charcoal/5 shadow-sm">
                    <motion.img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                      variants={{ active: { scale: 1.05 } }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-brand-navy/0" 
                      variants={{ active: { backgroundColor: 'rgba(10, 25, 47, 0.1)' } }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="flex gap-4 items-center text-sm font-bold tracking-widest text-brand-charcoal/60 uppercase mb-3">
                    <span className="text-brand-burgundy">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
                    <span>{project.type}</span>
                  </div>
                  <motion.h3 
                    className="font-display text-2xl font-bold text-brand-navy"
                    variants={{ active: { color: '#EAB308' } }} // brand-yellow
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
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
