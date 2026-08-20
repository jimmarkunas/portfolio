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
export const Slide11Success: React.FC = () => {
  const metrics = secureCarolinas2026Copy.slides.success.metrics;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.success.title}
        subtitle={secureCarolinas2026Copy.slides.success.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.success.headerBadge}
      />

      <div className="space-y-5 my-auto">
        {/* Core Premise */}
        <div className="sc26-surface-card p-4 flex items-center justify-between">
          <div className="text-xs lg:text-sm text-[#52525B]">
            <strong className="text-[#18181B]">{secureCarolinas2026Copy.slides.success.coreLabel}</strong> {secureCarolinas2026Copy.slides.success.coreText}{' '}
          </div>
          <span className="text-[10px] font-mono text-[#B91C1C] px-2.5 py-0.5 bg-[#B91C1C]/10 rounded-full font-bold">
            {secureCarolinas2026Copy.slides.success.taskBadge}
          </span>
        </div>

        {/* 8 Dimensions Grid */}
        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            {secureCarolinas2026Copy.slides.success.metricsLabel}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-[#F8F8F9] rounded-xl border border-[#EDEDF0] space-y-0.5">
                <div className="text-xs font-bold text-[#18181B]">{m.name}</div>
                <div className="text-[10px] text-[#71717A] leading-tight">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Single Owner & Anchor Line */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
          <div className="md:col-span-5 p-4 sc26-surface-card flex items-center gap-3">
            <span className="sc26-type-mono-tag text-[#71717A] font-bold">{secureCarolinas2026Copy.slides.success.ownershipLabel}</span>
            <span className="text-xs font-medium text-[#18181B]">{secureCarolinas2026Copy.slides.success.ownershipText}</span>
          </div>

          <div className="md:col-span-7 p-4 sc26-surface-card-accent flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#3B71CA] shrink-0" />
            <p className="text-xs lg:text-sm font-semibold text-[#18181B]">{secureCarolinas2026Copy.slides.success.anchor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
