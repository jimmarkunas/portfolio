import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide07Guardrails: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.guardrails;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="sc26-surface-card flex min-h-[320px] flex-col justify-center border-[#B91C1C]/30 p-8 lg:min-h-[380px] lg:p-10">
            <div className="mb-6 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#B91C1C] lg:text-base">
              <XCircle className="h-6 w-6" />
              {copy.fragileLabel}
            </div>
            <div className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.6rem]">
              {copy.fragileTitle}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-[#71717A] lg:text-xl">
              {copy.fragileBody}
            </p>
          </div>

          <div className="sc26-surface-card-accent flex min-h-[320px] flex-col justify-center p-8 lg:min-h-[380px] lg:p-10">
            <div className="mb-6 flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#3B71CA] lg:text-base">
              <CheckCircle2 className="h-6 w-6" />
              {copy.controlLabel}
            </div>
            <div className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.6rem]">
              {copy.controlTitle}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-[#52525B] lg:text-xl">
              {copy.controlBody}
            </p>
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
