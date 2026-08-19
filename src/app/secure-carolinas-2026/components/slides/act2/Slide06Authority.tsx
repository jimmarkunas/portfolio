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
export const Slide06Authority: React.FC = () => {
  const ladder = [
    { level: '01', name: 'Observe', desc: 'Read-only context intake without mutation' },
    { level: '02', name: 'Recommend', desc: 'Advise human operator on optimal actions' },
    { level: '03', name: 'Draft', desc: 'Stage proposed mutations for human validation' },
    { level: '04', name: 'Execute w/ Approval', desc: 'Requires explicit human authorization' },
    { level: '05', name: 'Execute within Limits', desc: 'Autonomous within bounded policy gates' },
    { level: '06', name: 'Escalate', desc: 'Mandatory handover when limits are reached' },
  ];

  const concepts = [
    { title: 'Bounded Autonomy', text: 'Explicit scopes of allowable actions and functions' },
    { title: 'Transaction Limits', text: 'Hard financial caps (e.g., maximum refund $100)' },
    { title: 'Approval Thresholds', text: 'Triggers that require mandatory supervisor sign-off' },
    { title: 'Prohibited Actions', text: 'Immutable blacklist of forbidden system changes' },
    { title: 'Revocation', text: 'Instant kill-switch and privilege deprovisioning' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT II — A.G.E.N.T.S. Framework"
        title="A — Authority"
        subtitle="What is this agent actually allowed to decide and do?"
        extraBadge="Pillar 1 of 6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Left: The Authority Ladder */}
        <div className="lg:col-span-7 sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
              The Authority Ladder (Stepped Elevation)
            </span>
            <span className="text-[10px] font-mono text-[#3B71CA] font-semibold">
              Bounded Progression
            </span>
          </div>

          <div className="space-y-2">
            {ladder.map((step, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                  idx >= 4
                    ? 'bg-[#EFF6FF] border-[#3B71CA]/40 text-[#18181B] shadow-sm'
                    : 'bg-[#F8F8F9] border-[#EDEDF0] text-[#3F3F46]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#71717A]">{step.level}</span>
                  <span className="text-xs font-bold text-[#18181B]">{step.name}</span>
                </div>
                <span className="text-[11px] text-[#71717A]">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Key Governance Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="sc26-surface-card p-6 space-y-3">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
              Key Governance Mechanisms
            </span>
            <div className="space-y-2">
              {concepts.map((c, i) => (
                <div key={i} className="p-2.5 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] space-y-0.5">
                  <div className="text-xs font-bold text-[#18181B]">{c.title}</div>
                  <div className="text-[10px] text-[#71717A]">{c.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Anchor Callout */}
          <div className="sc26-surface-card-accent p-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B71CA] shrink-0" />
            <p className="text-sm font-semibold text-[#18181B]">
              Authority is a <span className="text-[#3B71CA]">ladder</span>, not a toggle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
