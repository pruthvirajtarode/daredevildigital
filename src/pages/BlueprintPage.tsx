import Blueprint from '../components/sections/Blueprint';
import SEO from '../components/ui/SEO';

export default function BlueprintPage() {
  return (
    <div className="min-h-screen bg-brand-purewhite overflow-hidden">
      <SEO 
        title="The Blueprint"
        description="The exact digital architecture we use to scale Singapore businesses. 3-stage full funnel approach."
      />
      <Blueprint />
    </div>
  );
}
