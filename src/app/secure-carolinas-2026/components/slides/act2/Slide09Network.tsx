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
export const Slide09Network: React.FC = () => {
  const badPatterns = secureCarolinas2026Copy.slides.network.badPatterns;
  const capabilities = secureCarolinas2026Copy.slides.network.capabilities;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.network.title}
        subtitle={secureCarolinas2026Copy.slides.network.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.network.headerBadge}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto">
        {/* Anti-Pattern Column */}
        <div className="sc26-surface-card p-6 space-y-4 border-[#B91C1C]/30">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0F0F2]">
            <span className="sc26-type-mono-tag text-[#B91C1C] font-bold">
              {secureCarolinas2026Copy.slides.network.badPatternLabel}
            </span>
            <XCircle className="w-4 h-4 text-[#B91C1C]" />
          </div>

          <div className="p-2.5 bg-[#B91C1C]/10 rounded-xl text-xs font-semibold text-[#B91C1C]">
            {secureCarolinas2026Copy.slides.network.badPatternIntro}
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
              {secureCarolinas2026Copy.slides.network.governedLabel}
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#3B71CA]" />
          </div>

          <div className="p-2.5 bg-[#EFF6FF] rounded-xl text-xs font-semibold text-[#3B71CA]">
            {secureCarolinas2026Copy.slides.network.governedIntro}
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
            {secureCarolinas2026Copy.slides.network.anchor}
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#71717A] px-3 py-1 bg-[#F4F4F5] rounded-full">
          {secureCarolinas2026Copy.slides.network.anchorBadge}
        </span>
      </div>
    </div>
  );
};
