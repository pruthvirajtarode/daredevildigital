import SignalLoop from '../components/sections/SignalLoop';
import PerformanceTracks from '../components/sections/PerformanceTracks';

export default function SignalAuditPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-purewhite overflow-hidden">
      <SignalLoop />
      <PerformanceTracks />
    </div>
  );
}
