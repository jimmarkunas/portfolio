"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  DEFAULT_CTA_HREF,
  SIMULATION_STEPS,
  STAGE_HEIGHT_CLASS,
} from "./modere.data";
import type {
  DecisionOption,
  HistoryItem,
  ModereSimulationProps,
  ResultsView,
} from "./modere.types";
import { cn } from "./modere.utils";
import {
  DecisionView,
  IntroView,
  OutcomeView,
  ResultsHeader,
  TopChrome,
} from "./modere.views";
import { AnalysisView, ArchitectureView } from "./modere.detail-views";

export default function ModereSimulation({
  className,
  ctaHref = DEFAULT_CTA_HREF,
}: ModereSimulationProps) {
  const [step, setStep] = useState(0);
  const [revenue, setRevenue] = useState(500_000_000);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [resultsView, setResultsView] = useState<ResultsView>("outcome");

  const handleDecision = (option: DecisionOption) => {
    setRevenue((current) => current + option.revenueImpact);
    setHistory((current) => [
      ...current,
      { ...option, stepTitle: SIMULATION_STEPS[step].title },
    ]);

    if (step < SIMULATION_STEPS.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    setIsFinished(true);
    setResultsView("outcome");
  };

  const reset = () => {
    setStep(0);
    setRevenue(500_000_000);
    setHistory([]);
    setIsFinished(false);
    setShowIntro(true);
    setResultsView("outcome");
  };

  return (
    <section
      className={cn(
        "w-full border border-white/10 bg-[#141414] p-4 text-white shadow-2xl md:p-6 lg:p-8",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141414]">
        {!showIntro ? <TopChrome revenue={revenue} onReset={reset} /> : null}

        <main className={cn("relative md:box-border", STAGE_HEIGHT_CLASS, !showIntro && "pt-24")}>
          <AnimatePresence mode="wait">
            {showIntro ? (
              <IntroView onStart={() => setShowIntro(false)} />
            ) : !isFinished ? (
              <DecisionView stepIndex={step} step={SIMULATION_STEPS[step]} onSelect={handleDecision} />
            ) : (
              <motion.section
                key={`results-${resultsView}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "mx-auto flex h-full max-w-6xl flex-col px-6 md:px-10 lg:px-0",
                  resultsView === "architecture" ? "pb-0" : "pb-16",
                )}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm font-mono">
                    04
                  </div>
                  <div className="h-px w-12 bg-white/10" />
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Results</div>
                </div>

                <ResultsHeader value={resultsView} onChange={setResultsView} />

                {resultsView === "outcome" ? (
                  <OutcomeView
                    revenue={revenue}
                    onReset={reset}
                    onChangeView={setResultsView}
                    ctaHref={ctaHref}
                  />
                ) : resultsView === "architecture" ? (
                  <ArchitectureView />
                ) : (
                  <AnalysisView history={history} />
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </div>
    </section>
  );
}
