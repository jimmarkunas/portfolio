import React from 'react';
import { motion } from 'motion/react';
import { Bell, CreditCard, Search, Truck } from 'lucide-react';
import { SlideHeader } from '../SlideHeader';
import { secureCarolinas2026Copy } from '@/content/secure-carolinas-2026/presentationContent';

export const Slide12MeetAgent: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.meetAgent;
  const icons = [
    <Search key="read" className="h-8 w-8 text-[#3B71CA]" />,
    <Truck key="fulfillment" className="h-8 w-8 text-[#3B71CA]" />,
    <CreditCard key="credit" className="h-8 w-8 text-[#3B71CA]" />,
    <Bell key="notify" className="h-8 w-8 text-[#3B71CA]" />,
  ];

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act3}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="sc26-surface-card p-7 lg:p-9">
          <div className="mb-8 font-mono text-2xl font-semibold tracking-[0.06em] text-[#3B71CA] lg:text-3xl">{copy.capabilitiesLabel}</div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {copy.capabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * index }}
                className="flex min-h-[190px] items-center gap-5 rounded-2xl border border-[#E4E4E7] bg-[#F8F8F9] px-7 lg:min-h-[220px] lg:px-9"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#E4E4E7] bg-white">
                  {icons[index]}
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#18181B] lg:text-[2rem]">{capability.label}</div>
                  <div className="mt-2 text-base text-[#71717A] lg:text-lg">{capability.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-8 text-center">
          <p className="text-3xl font-semibold leading-tight text-[#18181B] lg:text-[2.8rem]">
            {copy.governanceQuote}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Slide13DecisionBoard: React.FC = () => {
  const copy = secureCarolinas2026Copy.slides.decisionBoard;

  const statusClasses = (status: string) => {
    if (status === 'DEFINED') return 'border-[#15803D]/30 bg-[#15803D]/10 text-[#15803D]';
    if (status === 'PARTIAL') return 'border-[#B45309]/30 bg-[#B45309]/10 text-[#B45309]';
    return 'border-[#B91C1C]/30 bg-[#B91C1C]/10 text-[#B91C1C]';
  };

  return (
    <div className="sc26-slide-wrapper">
      <SlideHeader
        actLabel={secureCarolinas2026Copy.acts.act3}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="my-auto space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.board.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="sc26-surface-card flex min-h-[220px] flex-col justify-between p-6 lg:min-h-[250px] lg:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-5xl font-bold text-[#18181B] lg:text-6xl">{item.letter}</span>
                <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold tracking-[0.12em] lg:text-sm ${statusClasses(item.badge)}`}>
                  {item.badge}
                </span>
              </div>
              <div className="text-xl font-semibold leading-tight text-[#18181B] lg:text-[1.7rem]">{item.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="sc26-surface-card-accent flex items-center justify-center px-8 py-8 text-center">
          <p className="text-4xl font-semibold leading-tight text-[#18181B] lg:text-5xl">{copy.anchor}</p>
        </div>
      </div>
    </div>
  );
};
