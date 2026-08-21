import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileSearch, 
  Network, 
  ArrowRightLeft, 
  Award,
  AlertOctagon
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
      />

      <div className="my-auto space-y-4 lg:space-y-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * idx }}
              className="sc26-surface-card flex min-h-[220px] flex-col justify-between p-4 transition-all hover:border-[#3B71CA] group lg:min-h-[280px] lg:p-5"
            >
              <div>
                <div className="mb-3 flex items-center justify-between border-b border-[#F0F0F2] pb-2">
                  <span className="font-mono text-3xl font-bold text-[#18181B] transition-colors group-hover:text-[#3B71CA] lg:text-[3.25rem]">
                    {p.letter}
                  </span>
                  <div className="p-1 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]">
                    {p.icon}
                  </div>
                </div>
                <div className="text-sm font-bold text-[#18181B] lg:text-[1.25rem]">{p.name}</div>
              </div>
              <div className="border-t border-[#F8F8F9] pt-2 text-sm leading-tight text-[#71717A] lg:text-[1.1rem]">
                {p.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-5 py-4 text-center lg:px-8 lg:py-6">
          <p className="text-xl font-semibold leading-tight text-[#18181B] lg:text-[2.15rem]">
            {secureCarolinas2026Copy.slides.question.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
