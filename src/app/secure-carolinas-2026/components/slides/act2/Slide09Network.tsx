import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Layers, 
  FileSearch, 
  Network, 
  ArrowRightLeft, 
  Award,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Shield,
  FileText,
  Sliders,
  Sparkles
} from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';

// ==========================================
export const Slide09Network: React.FC = () => {
  const badPatterns = [
    { title: 'Broad CRM Admin Access', tag: 'Full read/write credentials' },
    { title: 'Production DB Direct Access', tag: 'Unconstrained SQL execution' },
    { title: 'Full Mailbox Send/Receive', tag: 'Unfiltered outbound communication' },
    { title: 'Unrestricted Billing API', tag: 'Global financial authority' },
  ];

  const capabilities = [
    { name: 'retrieve_order', scope: 'Read-only Order Status' },
    { name: 'issue_credit_under_$100', scope: 'Scoped Finance Function' },
    { name: 'create_support_ticket', scope: 'Structured Case Creation' },
    { name: 'schedule_shipment', scope: 'Fulfillment Dispatch API' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT II — A.G.E.N.T.S. Framework"
        title="N — Network & Integrations"
        subtitle="What can the agent reach — and therefore affect?"
        extraBadge="Pillar 4 of 6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto">
        {/* Anti-Pattern Column */}
        <div className="sc26-surface-card p-6 space-y-4 border-[#B91C1C]/30">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#B91C1C] font-bold">
              Anti-Pattern (Catastrophic Blast Radius)
            </span>
            <XCircle className="w-4 h-4 text-[#B91C1C]" />
          </div>

          <div className="p-2.5 bg-[#B91C1C]/10 rounded-xl text-xs font-semibold text-[#B91C1C]">
            Blanket / Broad Enterprise System Access
          </div>

          <div className="space-y-2">
            {badPatterns.map((b, i) => (
              <div key={i} className="p-2.5 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#18181B]">{b.title}</span>
                <span className="text-[#B91C1C] font-mono text-[10px]">{b.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Governed Column */}
        <div className="sc26-surface-card-accent p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#3B71CA]/15">
            <span className="sc26-type-mono-tag text-[#3B71CA] font-bold">
              Governed Pattern (Blast Radius Containment)
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#3B71CA]" />
          </div>

          <div className="p-2.5 bg-[#EFF6FF] rounded-xl text-xs font-semibold text-[#3B71CA]">
            Narrowly Defined, Purpose-Built Tool Endpoints
          </div>

          <div className="space-y-2">
            {capabilities.map((c, i) => (
              <div key={i} className="p-2.5 bg-white border border-[#E4E4E7] rounded-xl flex items-center justify-between text-xs shadow-sm">
                <span className="font-mono font-bold text-[#18181B]">{c.name}()</span>
                <span className="text-[#52525B] text-[11px]">{c.scope}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anchor Line */}
      <div className="sc26-surface-card p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#3B71CA]" />
          <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
            Give the agent <span className="text-[#3B71CA]">capabilities</span>, not blanket access.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#71717A] px-3 py-1 bg-[#F4F4F5] rounded-full">
          Principle of Least Privilege
        </span>
      </div>
    </div>
  );
};
