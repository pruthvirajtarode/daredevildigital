import LeadEngineAudit from '../components/sections/LeadEngineAudit';

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      {/* White spacer matches the fixed navbar height so content starts cleanly below */}
      <div className="bg-brand-offwhite h-20 lg:h-24" />
      <LeadEngineAudit />
    </div>
  );
}
