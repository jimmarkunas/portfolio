import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide06Authority: React.FC = () => {
  const ladder = secureCarolinas2026Copy.slides.authority.ladder;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={secureCarolinas2026Copy.slides.authority.title}
        subtitle={secureCarolinas2026Copy.slides.authority.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="sc26-surface-card p-8 lg:p-10">
          <div className="mb-8 font-mono text-2xl font-semibold tracking-[0.06em] text-[#3B71CA] lg:text-3xl">
            {secureCarolinas2026Copy.slides.authority.ladderLabel}
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1.2fr)] items-center gap-2 lg:gap-3">
            {ladder.map((step, index) => (
              <React.Fragment key={step.level}>
                <div
                  className={`flex min-h-[180px] min-w-0 flex-col items-center justify-center rounded-2xl border px-3 text-center lg:min-h-[220px] lg:px-4 ${
                    index >= 3
                      ? 'border-[#3B71CA]/40 bg-[#EFF6FF]'
                      : 'border-[#E4E4E7] bg-[#F8F8F9]'
                  }`}
                >
                  <span className="mb-3 font-mono text-sm font-bold text-[#3B71CA] lg:text-base">
                    {step.level}
                  </span>
                  <span className="text-xl font-semibold leading-tight text-[#18181B] lg:text-[2rem]">
                    {step.name}
                  </span>
                </div>
                {index < ladder.length - 1 && (
                  <ArrowRight className="h-6 w-6 shrink-0 text-[#A1A1AA] lg:h-8 lg:w-8" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-7 text-center lg:py-8">
          <p className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
            {secureCarolinas2026Copy.slides.authority.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
