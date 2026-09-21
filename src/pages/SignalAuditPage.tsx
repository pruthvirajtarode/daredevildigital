import SignalLoop from '../components/sections/SignalLoop';
import SEO from '../components/ui/SEO';
import PerformanceTracks from '../components/sections/PerformanceTracks';

export default function SignalAuditPage() {
  return (
    <div className="min-h-screen bg-brand-navy overflow-hidden">
      <SEO 
        title="The Signal Audit"
        description="We evaluate your Meta Ads pixel data, CAPI tracking, and CRM offline event syncing to find out exactly where the platform algorithm is breaking."
      />
      <SignalLoop />
      <PerformanceTracks />
    </div>
  );
}
