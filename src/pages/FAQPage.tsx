import FAQ from '../components/sections/FAQ';
import SEO from '../components/ui/SEO';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-brand-purewhite overflow-hidden">
      <SEO 
        title="FAQ"
        description="Frequently asked questions about Daredevil Digital's services, management structure, and performance marketing strategies."
      />
      <FAQ />
    </div>
  );
}
