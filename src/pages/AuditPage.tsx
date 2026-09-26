import LeadEngineAudit from '../components/sections/LeadEngineAudit';

import SEO from '../components/ui/SEO';

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lead Engine Audit"
        description="Book a deep diagnostic audit of your Meta ads configuration, CAPI signals, and CRM outcomes."
      />
      {/* White spacer matches the fixed navbar height so content starts cleanly below */}
      <div className="bg-brand-offwhite h-20 lg:h-24" />
      <LeadEngineAudit />
    </div>
  );
}
