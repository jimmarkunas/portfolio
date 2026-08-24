import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { ProductionReadinessCheck } from "@/app/(site)/agents/ProductionReadinessCheck";
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide14DefinedPartialUnclear: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.readinessStatus;

  const statusClasses = (label: string) => {
    if (label === 'DEFINED') return 'border-[#15803D] bg-[#15803D]/5 text-[#15803D]';
    if (label === 'PARTIAL') return 'border-[#B45309] bg-[#B45309]/5 text-[#B45309]';
    return 'border-[#B91C1C] bg-[#B91C1C]/5 text-[#B91C1C]';
  };

  const ruleClasses = (outcome: string) => {
    if (outcome === 'GO') return 'border-[#15803D]/30 bg-[#15803D]/5 text-[#15803D]';
    if (outcome === 'GO WITH CONDITIONS') return 'border-[#B45309]/30 bg-[#B45309]/5 text-[#B45309]';
    return 'border-[#B91C1C]/30 bg-[#B91C1C]/5 text-[#B91C1C]';
  };

  const orderedGateRules = [...copy.gateRules].sort((a, b) => {
    const order = ['GO', 'GO WITH CONDITIONS', 'NO GO'];
    return order.indexOf(a.outcome) - order.indexOf(b.outcome);
  });

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act4}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-7">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {copy.statuses.map((status, index) => (
            <motion.div
              key={status.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className={`sc26-surface-card flex min-h-[280px] flex-col justify-center border-2 p-7 text-center lg:min-h-[330px] lg:p-9 ${statusClasses(status.label)}`}
            >
              <div className="font-mono text-2xl font-bold tracking-[0.12em] lg:text-3xl">{status.label}</div>
              <div className="mt-7 text-2xl font-semibold leading-snug text-[#18181B] lg:text-[2rem]">
                {status.definition}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {orderedGateRules.map((rule) => (
            <div
              key={rule.outcome}
              className={`flex min-h-[125px] items-center justify-between rounded-2xl border px-6 lg:min-h-[145px] lg:px-7 ${ruleClasses(rule.outcome)}`}
            >
              <span className="text-base font-semibold text-[#18181B] lg:text-xl">{rule.cond}</span>
              <ArrowRight className="h-6 w-6 shrink-0 opacity-50" aria-hidden="true" />
              <span className="font-mono text-lg font-bold lg:text-xl">{rule.outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Slide15ProductionDecision: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.productionDecision;

  const decisionClasses = (title: string) => {
    if (title === 'GO') return 'border-[#15803D]';
    if (title === 'GO WITH CONDITIONS') return 'border-[#B45309]';
    return 'border-[#B91C1C]';
  };

  const badgeClasses = (title: string) => {
    if (title === 'GO') return 'bg-[#15803D] text-white';
    if (title === 'GO WITH CONDITIONS') return 'bg-[#B45309] text-white';
    return 'bg-[#B91C1C] text-white';
  };

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act4}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {copy.decisions.map((decision, index) => (
            <motion.div
              key={decision.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className={`sc26-surface-card flex min-h-[330px] flex-col justify-between rounded-2xl border-2 p-7 lg:min-h-[390px] lg:p-9 ${decisionClasses(decision.title)}`}
            >
              <span className={`w-fit rounded-full px-4 py-2 font-mono text-sm font-bold tracking-[0.08em] lg:text-base ${badgeClasses(decision.title)}`}>
                {decision.title}
              </span>
              <div>
                <div className="text-2xl font-semibold text-[#18181B] lg:text-[2rem]">{decision.status}</div>
                <p className="mt-4 text-lg leading-relaxed text-[#52525B] lg:text-xl">{decision.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-8 text-center">
          <p className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.6rem]">{copy.finalQuote}</p>
        </div>
      </div>
    </div>
  );
};

export const Slide16ClosingCta: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.closingCta;

  return (
    <div className="sc26-slide-wrapper justify-center">
      <div className="sc26-enter-body mx-auto flex w-full max-w-[1500px] flex-col gap-8 lg:gap-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.72fr)] lg:items-center lg:gap-12">
          <div>
            <div className="space-y-4">
              <h1 className="sc26-type-hero max-w-4xl text-[#18181B]">{copy.title}</h1>
              <p className="sc26-type-h2 max-w-3xl text-[#52525B]">{copy.subtitle}</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] rounded-[28px] border border-[#E4E4E7] bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <div className="mb-5 text-center font-mono text-sm font-bold tracking-[0.18em] text-[#447ACB] lg:text-base">
                {copy.primaryAction}
              </div>
              <img
                src="/qr-codes/secure-carolinas-2026-agents.png"
                alt="QR code linking to the A.G.E.N.T.S. framework and production readiness kit"
                className="mx-auto aspect-square w-full max-w-[360px] select-none object-contain"
              />
              <p className="mt-5 text-center text-lg font-semibold text-[#18181B] lg:text-[1.15rem]">
                {copy.linkText}
              </p>
              <p className="mt-2 text-center text-sm text-[#52525B] lg:text-base">{copy.scanText}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const Slide16ReadinessCheck: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper justify-center">
      <div className="sc26-enter-body sc26-readiness-check-stage flex min-h-0 flex-1 flex-col">
        <ProductionReadinessCheck
          variant="scenario"
          scenario={secureCarolinas2026Copy.scenarios.customerOrderException}
        />
      </div>
    </div>
  );
};
