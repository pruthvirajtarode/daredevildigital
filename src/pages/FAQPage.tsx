import FAQ from '../components/sections/FAQ';
import SEO from '../components/ui/SEO';

export default function FAQPage() {
  return (
    <div className="bg-brand-purewhite flex-1 flex flex-col min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-88px)]">
      <SEO 
        title="FAQ"
        description="Frequently asked questions about Daredevil Digital's services, management structure, and performance marketing strategies."
      />
      <FAQ />
    </div>
  );
}
