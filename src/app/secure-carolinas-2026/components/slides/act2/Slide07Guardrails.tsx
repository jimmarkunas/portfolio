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
export const Slide07Guardrails: React.FC = () => {
  const guardrails = [
    { name: 'Policy Constraints', desc: 'Internal operational rules and customer guidelines' },
    { name: 'Compliance Rules', desc: 'SOX, HIPAA, GDPR, SOC2 statutory verifications' },
    { name: 'Financial Thresholds', desc: 'Deterministic caps on discounts, credits, refunds' },
    { name: 'Confidence Thresholds', desc: 'Minimum probabilistic score before execution' },
    { name: 'Prohibited Actions', desc: 'Immutable blacklist of restricted tool parameters' },
    { name: 'Validation Requirements', desc: 'Strict runtime JSON schema and type verification' },
    { name: 'Customer Protections', desc: 'Automated PII scrubbing, sentiment enforcement' },
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT II — A.G.E.N.T.S. Framework"
        title="G — Guardrails"
        subtitle="Under what conditions may the agent exercise that authority?"
        extraBadge="Pillar 2 of 6"
      />

      <div className="space-y-5 my-auto">
        {/* Core Distinction Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sc26-surface-card p-5 space-y-2 border-[#B91C1C]/30">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B91C1C] uppercase tracking-wider">
              <XCircle className="w-4 h-4" /> Fragile Assumption
            </div>
            <div className="text-sm font-bold text-[#18181B]">Prompt Instruction</div>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Telling the LLM in natural language: “Please do not issue refunds over $100.” Vulnerable to prompt injections, hallucinations, and context loss.
            </p>
          </div>

          <div className="sc26-surface-card-accent p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3B71CA] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" /> Architectural Control
            </div>
            <div className="text-sm font-bold text-[#18181B]">Deterministic System Enforcement</div>
            <p className="text-xs text-[#52525B] leading-relaxed">
              API gateway policies, rate limits, deterministic schemas, and cryptographically signed scopes that mechanically reject unauthorized requests.
            </p>
          </div>
        </div>

        {/* 7 Guardrail Types Grid */}
        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            Deterministic Guardrail Enforcements
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {guardrails.map((g, idx) => (
              <div key={idx} className="p-2.5 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] space-y-0.5">
                <div className="text-xs font-bold text-[#18181B]">{g.name}</div>
                <div className="text-[10px] text-[#71717A] leading-tight">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Anchor Line */}
        <div className="sc26-surface-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B71CA]" />
            <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
              If the consequence matters, the surrounding system should enforce the rule.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#B91C1C] font-bold">
            Prompt instruction ≠ Control
          </span>
        </div>
      </div>
    </div>
  );
};
