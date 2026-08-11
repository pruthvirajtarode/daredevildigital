import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { company } from '../data/company';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="ABOUT US"
            title="THE PEOPLE BEHIND THE STRATEGY."
            description="We are a Singapore-based digital marketing agency driven by creative problem-solving and measurable growth."
            theme="dark"
            alignment="center"
          />
        </div>
      </section>

      {/* Who We Are & Our Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                eyebrow="Who We Are"
                title="A partnership that drives growth."
              />
              <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
                <p>
                  Daredevil Digital is a team of marketing professionals focused on helping businesses succeed through creative problem-solving, strategic planning, creative execution and results-driven marketing.
                </p>
                <p>
                  With a combined experience of over 10 years in the industry, we understand the nuances of the digital landscape. We know what works, what doesn't, and how to position your brand for long-term success.
                </p>
              </div>
            </div>
            <div className="bg-brand-purewhite rounded-3xl p-12 shadow-sm border border-brand-charcoal/5 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-6">Our Core Focus</h3>
              <ul className="space-y-4">
                {[
                  'Creative Problem-Solving',
                  'Strategic Planning',
                  'Creative Execution',
                  'Results-Driven Marketing'
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-lg text-brand-charcoal/80">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-brand-purewhite border-y border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="block mb-6 text-sm font-bold tracking-widest text-brand-burgundy uppercase">
                VISION
              </span>
              <p className="font-display text-3xl md:text-4xl font-bold leading-tight text-brand-navy">
                "{company.vision}"
              </p>
            </div>
            <div>
              <span className="block mb-6 text-sm font-bold tracking-widest text-brand-navy uppercase">
                MISSION
              </span>
              <p className="font-display text-3xl md:text-4xl font-bold leading-tight text-brand-charcoal">
                "{company.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach (Pillars) */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="The Daredevil Approach"
            title="Fearless ideas. Focused execution."
            alignment="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {company.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-brand-purewhite p-12 rounded-3xl border border-brand-charcoal/5 hover:border-brand-yellow transition-colors">
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{pillar.title}</h3>
                <p className="text-brand-charcoal/80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
