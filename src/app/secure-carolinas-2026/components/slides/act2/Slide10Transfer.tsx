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

      <div className="my-auto space-y-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="sc26-surface-card flex min-h-[220px] flex-col justify-center border-[#B91C1C]/30 p-7 lg:min-h-[250px]">
            <span className="mb-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#B91C1C] lg:text-sm">
              {copy.badLabel}
            </span>
            <div className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-[2.2rem]">
              {copy.badTitle}
            </div>
          </div>

          <div className="sc26-surface-card-accent flex min-h-[220px] flex-col justify-center p-7 lg:min-h-[250px]">
            <span className="mb-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#447ACB] lg:text-sm">
              {copy.goodLabel}
            </span>
            <div className="text-2xl font-semibold leading-tight text-[#18181B] lg:text-[2.2rem]">
              {copy.goodTitle}
            </div>
          </div>
        </div>

        <div className="sc26-surface-card p-5 lg:p-6">
          <div className="mb-5 font-mono text-lg font-semibold tracking-[0.04em] text-[#447ACB] lg:text-xl">
            {copy.payloadLabel}
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {copy.payload.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[92px] items-center justify-center rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-4 text-center lg:min-h-[110px]"
              >
                <span className="text-xl font-semibold text-[#18181B] lg:text-[1.7rem]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-5 text-center">
          <p className="max-w-5xl text-xl font-semibold leading-tight text-[#18181B] lg:text-[2.3rem]">
            {copy.anchor}
          </p>
        </div>
      </div>
    </div>
  );
};
