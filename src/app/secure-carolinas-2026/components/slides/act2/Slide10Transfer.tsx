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
export const Slide10Transfer: React.FC = () => {
  const payload = [
    { label: 'Objective', desc: 'Original task assignment' },
    { label: 'Customer Context', desc: 'Tier, lifetime value, history' },
    { label: 'Actions Attempted', desc: 'Lookups, partial tool calls' },
    { label: 'Evidence Gathered', desc: 'Order snapshots & telemetry' },
    { label: 'Current State', desc: 'Exact status in OMS/CRM' },
    { label: 'Reason for Escalation', desc: 'Limit reached or ambiguity' },
    { label: 'Recommended Action', desc: 'Synthesized options for human' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT II — A.G.E.N.T.S. Framework"
        title="T — Transfer & Escalation"
        subtitle="What happens when the agent should stop?"
        extraBadge="Pillar 5 of 6"
      />

      <div className="space-y-5 my-auto">
        {/* Contrast Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sc26-surface-card p-[18px] space-y-1.5 border-[#B91C1C]/30">
            <span className="sc26-type-mono-tag text-[#B91C1C] font-bold">Bad Escalation</span>
            <div className="text-xs lg:text-sm font-bold text-[#18181B]">
              Agent Fails → Sends Generic Alert → Human Starts from Zero
            </div>
            <p className="text-[11px] text-[#71717A]">
              Destroys employee productivity, increases MTTR, and degrades customer trust.
            </p>
          </div>

          <div className="sc26-surface-card-accent p-[18px] space-y-1.5">
            <span className="sc26-type-mono-tag text-[#3B71CA] font-bold">Good Escalation</span>
            <div className="text-xs lg:text-sm font-bold text-[#18181B]">
              Agent Stops → Packages Full Context → Human Continues Flow
            </div>
            <p className="text-[11px] text-[#52525B]">
              Clean handover of state, telemetry, and synthesized next actions.
            </p>
          </div>
        </div>

        {/* Handover Payload Grid */}
        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            What the Human Inherits (The Handover Payload)
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {payload.map((item, idx) => (
              <div key={idx} className="p-3 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] flex flex-col justify-between">
                <div className="text-xs font-bold text-[#18181B]">{item.label}</div>
                <div className="text-[10px] text-[#71717A] mt-1 leading-tight">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Anchor Line */}
        <div className="sc26-surface-card p-4 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#3B71CA] shrink-0" />
          <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
            A human should <span className="text-[#3B71CA]">inherit the work</span> — not restart it.
          </p>
        </div>
      </div>
    </div>
  );
};
