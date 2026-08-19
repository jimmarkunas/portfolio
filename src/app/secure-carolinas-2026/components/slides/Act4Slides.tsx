import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';
import { SlideHeader } from '../SlideHeader';

// ==========================================
// Slide 14 — Defined. Partial. Unclear.
// ==========================================
export const Slide14DefinedPartialUnclear: React.FC = () => {
  const statuses = [
    {
      label: 'DEFINED',
      badgeClass: 'bg-[#15803D]/10 text-[#15803D] border-[#15803D]/30',
      icon: <CheckCircle2 className="w-4 h-4 text-[#15803D]" />,
      definition: 'Explicit, implemented, understood, and owned.',
      implication: 'Deterministic controls & automated test suites exist in production.',
      border: 'hover:border-[#15803D]/60'
    },
    {
      label: 'PARTIAL',
      badgeClass: 'bg-[#B45309]/10 text-[#B45309] border-[#B45309]/30',
      icon: <AlertCircle className="w-4 h-4 text-[#B45309]" />,
      definition: 'Control exists, but material operational gaps remain.',
      implication: 'Requires explicit mitigations & bounded customer rollout.',
      border: 'hover:border-[#B45309]/60'
    },
    {
      label: 'UNCLEAR',
      badgeClass: 'bg-[#B91C1C]/10 text-[#B91C1C] border-[#B91C1C]/30',
      icon: <XCircle className="w-4 h-4 text-[#B91C1C]" />,
      definition: 'The organization cannot explain or demonstrate the control.',
      implication: 'Immediate hard blocker for production deployment.',
      border: 'hover:border-[#B91C1C]/60'
    },
  ];

  const gateRules = [
    { cond: 'Any UNCLEAR', outcome: 'NO GO', style: 'border-[#B91C1C]/30 bg-[#B91C1C]/5 text-[#B91C1C]' },
    { cond: 'No UNCLEAR + ≥1 PARTIAL', outcome: 'GO WITH CONDITIONS', style: 'border-[#B45309]/30 bg-[#B45309]/5 text-[#B45309]' },
    { cond: 'All 6 DEFINED', outcome: 'GO', style: 'border-[#15803D]/30 bg-[#15803D]/5 text-[#15803D]' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT IV — The Production Readiness Gate"
        title="Defined. Partial. Unclear."
        subtitle="Every single A.G.E.N.T.S. domain receives an unambiguous readiness status."
        extraBadge="Readiness Taxonomy"
      />

      <div className="space-y-5 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statuses.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              className={`sc26-surface-card p-5 space-y-2.5 ${s.border} transition-all`}
            >
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F0F2]">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${s.badgeClass}`}>
                  {s.label}
                </span>
                {s.icon}
              </div>
              <div className="text-sm font-bold text-[#18181B] leading-snug">{s.definition}</div>
              <p className="text-[11px] text-[#71717A] border-t border-[#F8F8F9] pt-2">{s.implication}</p>
            </motion.div>
          ))}
        </div>

        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            Deterministic Production Gate Rules
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {gateRules.map((rule, i) => (
              <div key={i} className={`p-3.5 rounded-xl border ${rule.style} flex items-center justify-between`}>
                <span className="text-xs font-mono font-medium text-[#18181B]">{rule.cond}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                <span className="text-xs font-bold font-mono">{rule.outcome}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B71CA]" />
            <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
              Uncertainty in an autonomous agent is not technical debt.{' '}
              <span className="text-[#3B71CA]">It is an active operational risk.</span>
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#3B71CA] font-bold">Binary Governance</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Slide 15 — The Production Decision
// ==========================================
export const Slide15ProductionDecision: React.FC = () => {
  const decisions = [
    {
      title: 'GO',
      status: 'Production Ready',
      desc: 'All 6 A.G.E.N.T.S. controls defined, tested, and actively monitored.',
      border: 'border-[#15803D]',
      badgeBg: 'bg-[#15803D] text-white',
      badgeText: '6/6 Defined'
    },
    {
      title: 'GO WITH CONDITIONS',
      status: 'Constrained Rollout',
      desc: 'Known limitations with explicit circuit breakers, low limits, and shadow audits.',
      border: 'border-[#B45309]',
      badgeBg: 'bg-[#B45309] text-white',
      badgeText: 'Partial Allowed'
    },
    {
      title: 'NO GO',
      status: 'Hard Stop',
      desc: 'At least one material control is unclear. Block production release immediately.',
      border: 'border-[#B91C1C]',
      badgeBg: 'bg-[#B91C1C] text-white',
      badgeText: '≥1 Unclear'
    },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT IV — The Production Readiness Gate"
        title="The Production Decision"
        subtitle="If any A.G.E.N.T.S. control is unclear, the agent is not ready."
        extraBadge="Executive Decision"
      />

      <div className="space-y-5 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {decisions.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              className={`sc26-surface-card p-[22px] border-2 ${d.border} rounded-2xl space-y-3 flex flex-col justify-between`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${d.badgeBg}`}>{d.title}</span>
                  <span className="text-[11px] font-mono text-[#71717A]">{d.status}</span>
                </div>
                <p className="text-xs lg:text-sm font-medium text-[#18181B] leading-relaxed pt-1.5">{d.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-[#71717A] pt-2.5 border-t border-[#F0F0F2]">
                Pillar Requirement: <span className="font-bold text-[#18181B]">{d.badgeText}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sc26-surface-card p-5 space-y-1.5">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">The Purpose of Governance</span>
            <p className="text-sm lg:text-base font-semibold text-[#18181B] leading-snug">
              “The goal isn't to stop autonomous AI.{' '}
              <span className="text-[#3B71CA]">The goal is to know exactly where autonomy ends.</span>”
            </p>
          </div>
          <div className="sc26-surface-card-accent p-5 space-y-1.5">
            <span className="sc26-type-mono-tag text-[#3B71CA] font-bold">Final Spoken Takeaway</span>
            <p className="text-sm lg:text-base font-semibold text-[#18181B] leading-snug">
              “Execution can be delegated.{' '}
              <span className="text-[#3B71CA]">Accountability cannot.</span>”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
