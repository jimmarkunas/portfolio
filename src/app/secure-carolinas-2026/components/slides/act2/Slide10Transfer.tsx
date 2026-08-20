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
export const Slide10Transfer: React.FC = () => {
  const payload = secureCarolinas2026Copy.slides.transfer.payload;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.transfer.title}
        subtitle={secureCarolinas2026Copy.slides.transfer.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.transfer.headerBadge}
      />

      <div className="space-y-5 my-auto">
        {/* Contrast Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sc26-surface-card p-[18px] space-y-1.5 border-[#B91C1C]/30">
            <span className="sc26-type-mono-tag text-[#B91C1C] font-bold">{secureCarolinas2026Copy.slides.transfer.badLabel}</span>
            <div className="text-xs lg:text-sm font-bold text-[#18181B]">
              {secureCarolinas2026Copy.slides.transfer.badTitle}
            </div>
            <p className="text-[11px] text-[#71717A]">
              {secureCarolinas2026Copy.slides.transfer.badBody}
            </p>
          </div>

          <div className="sc26-surface-card-accent p-[18px] space-y-1.5">
            <span className="sc26-type-mono-tag text-[#3B71CA] font-bold">{secureCarolinas2026Copy.slides.transfer.goodLabel}</span>
            <div className="text-xs lg:text-sm font-bold text-[#18181B]">
              {secureCarolinas2026Copy.slides.transfer.goodTitle}
            </div>
            <p className="text-[11px] text-[#52525B]">
              {secureCarolinas2026Copy.slides.transfer.goodBody}
            </p>
          </div>
        </div>

        {/* Handover Payload Grid */}
        <div className="sc26-surface-card p-5 space-y-3">
          <span className="sc26-type-mono-tag text-[#71717A] font-semibold">
            {secureCarolinas2026Copy.slides.transfer.payloadLabel}
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
            <p className="text-xs lg:text-sm font-semibold text-[#18181B]">{secureCarolinas2026Copy.slides.transfer.anchor}</p>
          </div>
      </div>
    </div>
  );
};
