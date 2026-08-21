import React from 'react';
import { SlideHeader } from '../../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide10Transfer: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.transfer;

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act2}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-7">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="sc26-surface-card flex min-h-[250px] flex-col justify-center border-[#B91C1C]/30 p-8 lg:min-h-[300px]">
            <span className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#B91C1C] lg:text-base">
              {copy.badLabel}
            </span>
            <div className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.5rem]">
              {copy.badTitle}
            </div>
          </div>

          <div className="sc26-surface-card-accent flex min-h-[250px] flex-col justify-center p-8 lg:min-h-[300px]">
            <span className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#3B71CA] lg:text-base">
              {copy.goodLabel}
            </span>
            <div className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.5rem]">
              {copy.goodTitle}
            </div>
          </div>
        </div>

        <div className="sc26-surface-card p-6 lg:p-7">
          <div className="mb-4 sc26-type-mono-tag font-semibold text-[#71717A]">{copy.payloadLabel}</div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {copy.payload.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[110px] items-center justify-center rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-5 text-center lg:min-h-[130px]"
              >
                <span className="text-2xl font-semibold text-[#18181B] lg:text-[2rem]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-6 text-center">
          <p className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-3xl">
            {copy.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
