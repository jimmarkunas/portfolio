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
export const Slide05Question: React.FC = () => {
  const pillars = secureCarolinas2026Copy.slides.question.pillars.map((pillar) => ({
    ...pillar,
    icon:
      pillar.letter === 'A' ? <ShieldCheck className="w-4 h-4 text-[#3B71CA]" /> :
      pillar.letter === 'G' ? <AlertOctagon className="w-4 h-4 text-[#3B71CA]" /> :
      pillar.letter === 'E' ? <FileSearch className="w-4 h-4 text-[#3B71CA]" /> :
      pillar.letter === 'N' ? <Network className="w-4 h-4 text-[#3B71CA]" /> :
      pillar.letter === 'T' ? <ArrowRightLeft className="w-4 h-4 text-[#3B71CA]" /> :
      <Award className="w-4 h-4 text-[#3B71CA]" />,
  }));

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.question.title}
        subtitle={secureCarolinas2026Copy.slides.question.subtitle}
        extraBadge={secureCarolinas2026Copy.slides.question.headerBadge}
      />

      <div className="space-y-5 my-auto">
        {/* Central Core Question Hero Card */}
        <div className="sc26-surface-card-accent p-6 lg:p-8 text-center space-y-2 relative overflow-hidden">
          <span className="sc26-type-mono-tag text-[#3B71CA] font-bold">
            {secureCarolinas2026Copy.slides.question.bannerLabel}
          </span>
          <h3 className="text-xl lg:text-3xl font-light text-[#18181B] max-w-4xl mx-auto leading-tight">
            “{secureCarolinas2026Copy.slides.question.questionQuote.replace(' before we allow an AI agent to act on behalf of the enterprise?', '')}{' '}
            <span className="font-semibold text-[#3B71CA] underline decoration-[#3B71CA]/30 decoration-2 underline-offset-4">
              act on behalf of the enterprise
            </span>?”
          </h3>
        </div>

        {/* 6 Monolithic Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * idx }}
              className="sc26-surface-card p-4 hover:border-[#3B71CA] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#F0F0F2]">
                  <span className="text-2xl font-bold font-mono text-[#18181B] group-hover:text-[#3B71CA] transition-colors">
                    {p.letter}
                  </span>
                  <div className="p-1 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]">
                    {p.icon}
                  </div>
                </div>
                <div className="text-xs font-bold text-[#18181B]">{p.name}</div>
              </div>
              <div className="text-[11px] text-[#71717A] mt-2 pt-2 border-t border-[#F8F8F9] leading-tight">
                {p.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framing Banner */}
        <div className="sc26-surface-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#3B71CA]" />
            <span className="text-xs lg:text-sm font-medium text-[#18181B]">
              <strong className="text-[#3B71CA]">{secureCarolinas2026Copy.slides.question.framingEmphasis}</strong> {secureCarolinas2026Copy.slides.question.framing.replace(`${secureCarolinas2026Copy.slides.question.framingEmphasis} `, '')}
            </span>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-[#3B71CA] uppercase px-3 py-1 bg-[#EFF6FF] rounded-full border border-[#3B71CA]/30">
            {secureCarolinas2026Copy.slides.question.framingLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
