import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="bg-brand-navy py-24 sm:py-32 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-burgundy/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-brand-purewhite sm:text-5xl lg:text-6xl uppercase">
            Ready to make your next move?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-offwhite/80">
            Tell us where your business is today and where you want to take it. Let's build the digital strategy to get you there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="secondary" size="lg">
              START A CONVERSATION <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
