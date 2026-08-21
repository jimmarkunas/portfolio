import React from 'react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide11Success: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.success;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-7">
        <div className="sc26-surface-card p-7 lg:p-8">
          <div className="mb-8 font-mono text-2xl font-semibold tracking-[0.06em] text-[#3B71CA] lg:text-3xl">{copy.metricsLabel}</div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {copy.metrics.map((metric) => (
              <div
                key={metric.name}
                className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-5 text-center lg:min-h-[220px]"
              >
                <span className="text-3xl font-semibold text-[#18181B] lg:text-[2.4rem]">{metric.name}</span>
                <span className="mt-3 text-base text-[#71717A] lg:text-lg">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="sc26-surface-card flex min-h-[150px] flex-col justify-center p-6 lg:p-7">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#3B71CA] lg:text-base">
              {copy.ownershipLabel}
            </span>
            <span className="mt-3 text-xl font-semibold leading-snug text-[#18181B] lg:text-2xl">
              {copy.ownershipText}
            </span>
          </div>

          <div className="sc26-surface-card-accent flex min-h-[150px] items-center justify-center p-6 text-center lg:p-7">
            <p className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
              {copy.anchor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
