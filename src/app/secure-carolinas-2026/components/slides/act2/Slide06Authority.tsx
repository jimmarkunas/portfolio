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
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

// ==========================================
export const Slide06Authority: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.authority.title}
        subtitle={secureCarolinas2026Copy.slides.authority.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.authority.headerBadge}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Left: The Authority Ladder */}
        <div className="lg:col-span-7 sc26-surface-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
              {secureCarolinas2026Copy.slides.authority.ladderLabel}
            </span>
            <span className="text-[10px] font-mono text-[#3B71CA] font-semibold">
              {secureCarolinas2026Copy.slides.authority.ladderBadge}
            </span>
          </div>

          <div className="space-y-2">
            {secureCarolinas2026Copy.slides.authority.ladder.map((step, idx) => (
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
              {secureCarolinas2026Copy.slides.authority.conceptsLabel}
            </span>
            <div className="space-y-2">
              {secureCarolinas2026Copy.slides.authority.concepts.map((c, i) => (
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
              {secureCarolinas2026Copy.slides.authority.anchor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
