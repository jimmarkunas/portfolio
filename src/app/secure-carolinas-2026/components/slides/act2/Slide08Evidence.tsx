import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide08Evidence: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.evidence;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="sc26-surface-card p-8 lg:p-10">
          <div className="mb-6 sc26-type-mono-tag font-semibold text-[#71717A]">
            {copy.timelineLabel}
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 lg:gap-3">
            {copy.pipeline.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex min-h-[170px] min-w-0 items-center justify-center rounded-2xl border border-[#BFD3FF] bg-[#EFF6FF] px-3 text-center lg:min-h-[210px] lg:px-4">
                  <span className="text-xl font-semibold leading-tight text-[#18181B] lg:text-[2rem]">
                    {item.step}
                  </span>
                </div>
                {index < copy.pipeline.length - 1 && (
                  <ArrowRight className="h-6 w-6 shrink-0 text-[#A1A1AA] lg:h-8 lg:w-8" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
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
