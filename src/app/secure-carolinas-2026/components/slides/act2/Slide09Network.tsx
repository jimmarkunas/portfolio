import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide09Network: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.network;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="sc26-surface-card border-[#B91C1C]/30 p-7 lg:p-9">
            <div className="mb-6 flex items-center justify-between border-b border-[#F0F0F2] pb-4">
              <span className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#B91C1C] lg:text-base">
                {copy.badPatternLabel}
              </span>
              <XCircle className="h-6 w-6 text-[#B91C1C]" />
            </div>
            <div className="space-y-3">
              {copy.badPatterns.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[84px] items-center justify-center rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-5 text-center lg:min-h-[96px]"
                >
                  <span className="text-xl font-semibold text-[#18181B] lg:text-[1.8rem]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sc26-surface-card-accent p-7 lg:p-9">
            <div className="mb-6 flex items-center justify-between border-b border-[#3B71CA]/15 pb-4">
              <span className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#3B71CA] lg:text-base">
                {copy.governedLabel}
              </span>
              <CheckCircle2 className="h-6 w-6 text-[#3B71CA]" />
            </div>
            <div className="space-y-3">
              {copy.capabilities.map((item) => (
                <div
                  key={item.name}
                  className="flex min-h-[84px] items-center justify-center rounded-2xl border border-[#BFD3FF] bg-white px-5 text-center lg:min-h-[96px]"
                >
                  <span className="text-xl font-semibold text-[#18181B] lg:text-[1.8rem]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-7 text-center lg:py-8">
          <p className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
            {copy.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
