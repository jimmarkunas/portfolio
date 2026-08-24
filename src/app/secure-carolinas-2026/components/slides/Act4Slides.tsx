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
  const title = copy.title;
  const titleEndsWithPeriod = title.endsWith('.');
  const titleBody = titleEndsWithPeriod ? title.slice(0, -1) : title;

  return (
    <div className="sc26-slide-wrapper justify-center">
      <div className="sc26-enter-body mx-auto flex w-full max-w-[1560px] flex-col gap-8 lg:gap-10">
        <div className="space-y-4">
          <h1 className="sc26-type-hero w-full max-w-none whitespace-nowrap text-[#18181B]">
            {titleBody}
            {titleEndsWithPeriod ? <span className="text-[#447ACB]">.</span> : null}
          </h1>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#E4E4E7] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch">
            <div className="flex min-h-full flex-col justify-between px-8 py-9 lg:px-10 lg:py-11">
              <div className="space-y-8">
                <p className="max-w-3xl text-[1.9rem] font-medium leading-[1.15] tracking-[-0.04em] text-[#18181B] lg:text-[2.45rem]">
                  {copy.subtitle}
                </p>
                <div className="h-[3px] w-32 rounded-full bg-[#447ACB]" aria-hidden="true" />
                <div className="space-y-6">
                  <a
                    href="https://greatestpmever.com/agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-fit text-[1.95rem] font-semibold leading-none tracking-[-0.045em] text-[#447ACB] lg:text-[2.6rem]"
                  >
                    greatestpmever.com/agents
                  </a>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm font-bold tracking-[0.16em] text-[#447ACB] lg:text-[0.98rem]">
                    <span>USE IT</span>
                    <span aria-hidden="true">•</span>
                    <span>FORK IT</span>
                    <span aria-hidden="true">•</span>
                    <span>CHALLENGE IT</span>
                    <span aria-hidden="true">•</span>
                    <span>REPORT ADOPTION</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E4E4E7] px-8 py-9 lg:border-l lg:border-t-0 lg:px-10 lg:py-11">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="font-mono text-sm font-bold tracking-[0.18em] text-[#447ACB] lg:text-base">
                  {copy.primaryAction}
                </div>
                <p className="mt-3 text-base font-medium text-[#71717A] lg:text-lg">{copy.scanText}</p>
                <img
                  src="/qr-codes/secure-carolinas-2026-agents.png"
                  alt="QR code linking to the A.G.E.N.T.S. framework and production readiness kit"
                  className="mt-6 aspect-square w-full max-w-[390px] select-none object-contain lg:mt-8"
                />
              </div>
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
