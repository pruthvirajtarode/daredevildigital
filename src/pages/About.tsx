import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';
import SEO from '../components/ui/SEO';
import { company } from '../data/company';
import { contact } from '../data/contact';
import { MapPin, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const credentials = [
    {
      label: "5yr",
      title: "Meta APAC Account Manager",
      desc: "Overseeing substantial ad spend across 100+ regional advertisers. Gained direct insight into the internal platform logic, delivery mechanics, and signal rules from the source."
    },
    {
      label: "100+",
      title: "Regional Advertisers Audited",
      desc: "Analyzing lead generation setups across Singapore, Australia, and Southeast Asia. Identified the exact points where ad delivery algorithms fail in small, high density markets."
    },
    {
      label: "SG",
      title: "Singapore Target Specialty",
      desc: "Built specifically to navigate this market's unique constraints. We focus on connecting CAPI offline outcomes directly to CRM data databases rather than generic tracking."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite">
      <SEO 
        title="About"
        description="Learn about Daredevil Digital, a Singapore based digital marketing agency founded by a former Meta APAC account manager."
      />
      {/* Hero */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-navy text-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="ABOUT OPERATOR"
            title="THE AGENCY IS THE OPERATOR. THAT'S THE POINT."
            description="We are a boutique Singapore paid social agency built to solve lead generation quality issues by aligning Meta campaign learning with CRM data feedback."
            theme="dark"
            alignment="center"
            as="h1"
          />
        </div>
      </section>

      {/* Operator Story */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-purewhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading 
                eyebrow="Direct Ownership"
                title="No Handoffs. Direct Accountability."
              />
              <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
                <p>
                  Daredevil Digital was established because we saw Singapore advertisers burning budgets on pixel only setups. Most agencies launch campaigns, watch for form conversions, and report lead volume. But a form fill is not a client.
                </p>
                <p>
                  We change the economics of lead generation by implementing the Signal Loop: routing offline events (qualified leads, appointment bookings, closed deals) directly back to ad algorithms.
                </p>
                <p>
                  Every account is optimized directly by the founder. There are no junior assistants, account managers, or coordinators. You get transparent reports and direct communications on database outcome trends.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex gap-6 p-8 bg-brand-offwhite rounded-3xl border border-brand-charcoal/5 hover:border-brand-yellow transition-all duration-300">
                  <span className="font-mono text-3xl font-bold text-brand-burgundy shrink-0 mt-1">
                    {cred.label}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                      {cred.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-navy text-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="block mb-6 text-xs font-mono font-bold tracking-widest text-brand-yellow uppercase">
                BRAND VISION
              </span>
              <p className="font-display text-3xl font-bold leading-tight">
                "{company.vision}"
              </p>
            </div>
            <div>
              <span className="block mb-6 text-xs font-mono font-bold tracking-widest text-brand-yellow uppercase">
                OPERATIONAL MISSION
              </span>
              <p className="font-display text-3xl font-bold leading-tight text-brand-offwhite/90">
                "{company.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading 
            eyebrow="The Daredevil Philosophy"
            title="Fearless Strategy. Structured Performance."
            alignment="center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {company.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-brand-purewhite p-12 rounded-3xl border border-brand-charcoal/5 hover:border-brand-yellow transition-all duration-300 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{pillar.title}</h3>
                <p className="text-brand-charcoal/80 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 bg-brand-purewhite border-t border-brand-charcoal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-brand-charcoal hover:text-brand-burgundy transition-colors">
              <MessageCircle className="w-5 h-5 text-brand-yellow" />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 font-mono text-sm text-brand-charcoal hover:text-brand-burgundy transition-colors">
              <Mail className="w-5 h-5 text-brand-yellow" />
              <span>{contact.email}</span>
            </a>
            <span className="flex items-center gap-2 font-mono text-sm text-brand-charcoal/60">
              <MapPin className="w-5 h-5 text-brand-yellow" />
              <span>{contact.location}</span>
            </span>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-burgundy uppercase tracking-wider">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
