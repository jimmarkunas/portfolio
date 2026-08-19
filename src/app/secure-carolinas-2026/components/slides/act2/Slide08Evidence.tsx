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
export const Slide08Evidence: React.FC = () => {
  const pipeline = [
    { step: 'Intent', desc: 'Goal & prompt context' },
    { step: 'Inputs', desc: 'RAG & database context' },
    { step: 'Decision', desc: 'Selected action path' },
    { step: 'Tool Calls', desc: 'Payloads & parameters' },
    { step: 'State Change', desc: 'System mutation record' },
    { step: 'Outcome', desc: 'Verifiable business result' },
  ];

  const questions = [
    'What the agent knew at decision time',
    'What strategy it decided to execute',
    'Which specific tools it called',
    'What human approvals occurred',
    'What enterprise state changed',
    'Whether the action succeeded',
    'Why the case escalated (if any)',
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel="ACT II — A.G.E.N.T.S. Framework"
        title="E — Evidence"
        subtitle="Can we reconstruct exactly what happened?"
        extraBadge="Pillar 3 of 6"
      />

      <div className="space-y-5 my-auto">
        {/* Operational Timeline */}
        <div className="sc26-surface-card p-6 space-y-4">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            Auditable Operational Timeline
          </span>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {pipeline.map((p, idx) => (
              <div key={idx} className="p-3 bg-[#EFF6FF] border border-[#3B71CA]/20 rounded-xl text-center">
                <div className="text-[10px] font-mono font-bold text-[#3B71CA]">0{idx + 1}</div>
                <div className="text-xs font-bold text-[#18181B] mt-0.5">{p.step}</div>
                <div className="text-[10px] text-[#71717A] mt-0.5">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Enterprise Questions Checklist */}
        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            What the Enterprise Must Be Able to Determine
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {questions.map((q, i) => (
              <div key={i} className="p-2.5 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                <span className="text-xs font-medium text-[#18181B]">{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anchor Line */}
        <div className="sc26-surface-card-accent p-4 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#3B71CA] shrink-0" />
          <p className="text-xs lg:text-sm font-semibold text-[#18181B]">
            We're not asking for hidden model reasoning.{' '}
            <span className="text-[#3B71CA]">We're asking for an auditable operational record.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
