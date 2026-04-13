"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  RefreshCcw,
  ShieldAlert,
} from "lucide-react";

import {
  CONSOLE_LINES,
  CONSOLE_PREFIX,
  DEFAULT_CTA_HREF,
  LEFT_ARCHITECTURE_NODES,
  OUTCOME_SUMMARY,
  OUTCOME_VIEW_ACTIONS,
  RESULT_TABS,
  RESULTS_VIEW_CONTENT,
  RIGHT_ARCHITECTURE_NODES,
  SIMULATION_STEPS,
  STAGE_HEIGHT_CLASS,
} from "./modere.data";
import { getCurrentPagePath, trackEvent } from "@/lib/analytics";
import type {
  Decision,
  DecisionOption,
  HistoryItem,
  ModereSimulationProps,
  ResultsView,
} from "./modere.types";
import { siteCta } from "@/content/site";

const BOOK_CALL_LABEL = siteCta.bookCallLabel;

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const OUTCOME_ACTION_BUTTON_CLASS =
  "inline-flex min-h-12 items-center gap-2 border border-white/20 px-5 text-sm font-medium text-white transition-all hover:-translate-y-px hover:border-white";
const OUTCOME_PRIMARY_LINK_CLASS =
  "inline-flex min-h-12 items-center gap-2 border border-white bg-white px-5 text-sm font-medium text-black transition-all hover:-translate-y-px";

function formatRevenue(value: number) {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }

  return `$${Math.round(value / 1_000_000)}M`;
}

function PageNumber({ value, dark = false }: { value: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em]",
        dark ? "text-black/35" : "text-white/35",
      )}
    >
      {value}
    </div>
  );
}

function NodeCard({
  eyebrow,
  label,
  compact = false,
}: {
  eyebrow: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-center border border-white/10 bg-[#141414] px-5 py-4",
        compact ? "min-h-[92px]" : "min-h-[108px]",
      )}
    >
      <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
        {eyebrow}
      </div>
      <div className="text-[16px] tracking-[-0.02em] md:text-[18px]">{label}</div>
    </div>
  );
}

function TopChrome({ revenue, onReset }: { revenue: number; onReset: () => void }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
      <div className="pointer-events-auto flex items-center gap-4">
        <button
          type="button"
          onClick={onReset}
          className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
          title="Restart Game"
        >
          <RefreshCcw className="h-5 w-5" />
        </button>
        <div className="hidden sm:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            Simulation Active
          </div>
          <div className="text-sm font-medium">Modere $1B Growth Engine</div>
        </div>
      </div>

      <div className="pointer-events-auto flex flex-col items-end border border-white/5 bg-black/40 px-4 py-2 backdrop-blur-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Live Revenue</div>
        <motion.div
          key={revenue}
          initial={{ scale: 1.2, color: "#FFFFFF" }}
          animate={{ scale: 1, color: revenue >= 1_000_000_000 ? "#FFFFFF" : "#7B7B7B" }}
          className="text-2xl font-light tracking-[-0.04em]"
        >
          {formatRevenue(revenue)}
        </motion.div>
      </div>
    </div>
  );
}

function IntroView({ onStart }: { onStart: () => void }) {
  return (
    <motion.section
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="grid h-full content-start px-6 pb-12 pt-[15px] md:px-10 md:pt-[15px] lg:px-16 lg:pb-16 lg:pt-[15px]"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
        Interactive Executive Simulation
      </div>
      <h1 className="mt-[15px] text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
        What Would You Do?
      </h1>

      <div className="mt-10 grid items-start gap-12 md:grid-cols-2 lg:gap-24">
        <div className="space-y-6">
          <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-white/60">
            Modere is stuck at $500M. The technology is a &quot;dumpster fire,&quot; the politics are toxic, and growth has stalled.
          </p>
          <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-white/90">
            You are the Lead Architect. Your mission: Navigate the technical and political minefield to engineer the escape to $1B.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              Objective
            </div>
            <div className="text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
              Scale to $1B without a total system collapse.
            </div>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 border border-white bg-white px-6 text-[18px] font-medium text-black transition-all hover:-translate-y-px"
          >
            Enter Simulation
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.span>
          </button>

          <div className="text-center text-[10px] uppercase tracking-[0.35em] text-white/30">
            Estimated time: 3 Minutes • High Stakes
          </div>
          <PageNumber value="01" />
        </div>
      </div>
    </motion.section>
  );
}

function DecisionView({
  stepIndex,
  step,
  onSelect,
}: {
  stepIndex: number;
  step: Decision;
  onSelect: (option: DecisionOption) => void;
}) {
  return (
    <motion.section
      key={`simulation-${stepIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto flex h-full max-w-6xl flex-col px-6 pb-16 md:px-10 lg:px-0"
    >
      <div className="mb-12 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm font-mono">
          0{stepIndex + 1}
        </div>
        <div className="h-px w-20 bg-white/10 md:w-28" />
        <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Decision Point</div>
      </div>

      <h2 className="mb-8 max-w-4xl text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
        {step.title}
      </h2>
      <p className="mb-16 max-w-4xl text-[18px] font-normal leading-[1.5] tracking-[0] text-white/60">
        {step.scenario}
      </p>

      <div className="mt-auto grid w-full max-w-4xl gap-8 md:mx-auto md:grid-cols-2">
        {step.options.map((option, index) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option)}
            className="group relative flex min-h-[300px] flex-col justify-between border border-white/10 p-8 text-left transition-all hover:border-white md:p-10"
          >
            <div>
              <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-white/40 transition-opacity group-hover:text-white">
                Option {index + 1}
              </div>
              <div className="mb-4 text-[30px] leading-tight tracking-[-0.03em] md:text-[38px]">
                {option.label}
              </div>
              <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-white/50">
                {option.description}
              </p>
            </div>

            <div className="mt-8 flex translate-x-[-10px] items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
              Select Decision
              <ArrowRight className="h-4 w-4" />
            </div>
            <PageNumber value={`D${stepIndex + 1}.${index + 1}`} />
          </button>
        ))}
      </div>
    </motion.section>
  );
}

function ResultsTabs({
  value,
  onChange,
}: {
  value: ResultsView;
  onChange: (next: ResultsView) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 md:justify-end">
      {RESULT_TABS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={cn(
            "inline-flex min-h-11 items-center border px-4 text-[11px] font-bold uppercase tracking-[0.24em] transition-all",
            value === tab.value
              ? "border-white bg-white text-black"
              : "border-white/15 text-white/70 hover:border-white/40 hover:text-white",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function ResultsHeader({
  value,
  onChange,
}: {
  value: ResultsView;
  onChange: (next: ResultsView) => void;
}) {
  const content = RESULTS_VIEW_CONTENT[value];

  return (
    <div className="mb-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
      <div className="max-w-3xl">
        <h2 className="mb-4 text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
          {content.titlePrefix}
          {content.titleEmphasis ? <span className="italic">{content.titleEmphasis}</span> : null}
          {content.titleSuffix}
        </h2>
        <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-white/60">
          {content.body}
        </p>
      </div>
      <ResultsTabs value={value} onChange={onChange} />
    </div>
  );
}

function OutcomeView({
  revenue,
  onReset,
  onChangeView,
  ctaHref,
}: {
  revenue: number;
  onReset: () => void;
  onChangeView: (next: ResultsView) => void;
  ctaHref: string;
}) {
  const summary =
    revenue >= 1_000_000_000 ? OUTCOME_SUMMARY.success : OUTCOME_SUMMARY.plateau;

  return (
    <div className="grid flex-1 min-h-0 items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col items-start">
        <p className="max-w-3xl text-[18px] font-normal leading-[1.5] tracking-[0] text-white/90">
          {summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-4">
          {OUTCOME_VIEW_ACTIONS.map((action) => (
            <button
              key={action.nextView}
              type="button"
              onClick={() => onChangeView(action.nextView)}
              className={OUTCOME_ACTION_BUTTON_CLASS}
            >
              {action.label}
              <ArrowRight className="h-4 w-4" />
            </button>
          ))}
          <button
            type="button"
            onClick={onReset}
            className={OUTCOME_ACTION_BUTTON_CLASS}
          >
            Restart Simulation
            <RefreshCcw className="h-4 w-4" />
          </button>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={OUTCOME_PRIMARY_LINK_CLASS}
            onClick={() => {
              trackEvent("book_call_click", {
                location: "case_study_cta",
                label: BOOK_CALL_LABEL,
                href: ctaHref,
                page_path: getCurrentPagePath(),
              });
            }}
          >
            {BOOK_CALL_LABEL}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative flex h-full min-h-0 flex-col items-center justify-center bg-white p-10 text-center text-black">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-black/60">
          Final Revenue
        </div>
        <div className="text-[56px] font-light tracking-[-0.05em] md:text-[72px]">
          {formatRevenue(revenue)}
        </div>
        <div className="mt-4 text-xs font-mono text-black/60">Target: $1.0B</div>
        <PageNumber value="02" dark />
      </div>
    </div>
  );
}

function ArchitectureView() {
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="relative flex-1 min-h-0 overflow-hidden border border-white/5 bg-white/[0.02] p-5 md:p-6">
        <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative h-full min-h-0">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line x1="20" y1="28" x2="45" y2="37" stroke="rgba(255,255,255,0.9)" strokeWidth="0.35" strokeDasharray="1.2 1.2" />
            <line x1="20" y1="68" x2="45" y2="43" stroke="rgba(255,255,255,0.9)" strokeWidth="0.35" strokeDasharray="1.2 1.2" />
            <line x1="60" y1="40" x2="79" y2="40" stroke="rgba(255,255,255,0.95)" strokeWidth="0.45" />
            <line x1="79" y1="20" x2="79" y2="80" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="20" x2="83" y2="20" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="50" x2="83" y2="50" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
            <line x1="79" y1="80" x2="83" y2="80" stroke="rgba(255,255,255,0.95)" strokeWidth="0.35" />
          </svg>

          <div className="relative z-10 grid h-full min-h-0 grid-cols-1 gap-4 md:grid-cols-[220px_minmax(220px,1fr)_220px] md:gap-6">
            <div className="grid min-h-0 grid-rows-2 gap-4">
              {LEFT_ARCHITECTURE_NODES.map((node) => (
                <NodeCard key={node.label} eyebrow={node.eyebrow} label={node.label} />
              ))}
            </div>

            <div className="flex min-h-0 flex-col items-center justify-center gap-4">
              <div className="flex w-full max-w-[300px] min-h-[132px] flex-col justify-center border border-white/10 bg-[#141414] px-6 py-5">
                <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
                  The Nervous System
                </div>
                <div className="text-[18px] tracking-[-0.02em] md:text-[22px]">Next.js Engine</div>
              </div>

              <div className="flex w-full max-w-[300px] flex-col border border-white/10 bg-black/20 px-5 py-4">
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
                  Console Log
                </div>
                <div className="space-y-2 font-mono text-[10px] text-white/60">
                  {CONSOLE_LINES.map((line, index) => (
                    <div key={line} className={index === CONSOLE_LINES.length - 1 ? "text-white" : undefined}>
                      {CONSOLE_PREFIX} {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid min-h-0 grid-rows-3 gap-4">
              {RIGHT_ARCHITECTURE_NODES.map((node) => (
                <NodeCard key={node.label} eyebrow={node.eyebrow} label={node.label} compact />
              ))}
            </div>
          </div>
        </div>

        <PageNumber value="03" />
      </div>
    </div>
  );
}

function AnalysisView({ history }: { history: HistoryItem[] }) {
  return (
    <div className="flex flex-1 min-h-0 flex-col overflow-hidden">
      <div className="grid h-full min-h-0 flex-1 auto-rows-fr gap-5 overflow-hidden md:grid-cols-3">
        {history.map((item, index) => (
          <div
            key={`${item.stepTitle}-${item.label}`}
            className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden border border-white/5 p-5 md:p-6"
          >
            <div className="min-h-0">
              <div className="mb-5 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                  {item.stepTitle}
                </div>
                {item.isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-white/40" />
                ) : (
                  <ShieldAlert className="h-4 w-4 text-white/40" />
                )}
              </div>
              <div className="mb-3 text-[22px] leading-[1.2] tracking-[-0.02em] md:text-[24px]">
                &quot;{item.label}&quot;
              </div>
              <p className="text-[15px] font-normal italic leading-[1.45] tracking-[0] text-white/50 md:text-[16px]">
                {item.politicsQuote}
              </p>
            </div>

            <div className="mt-6 border-t border-white/5 pt-5">
              <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">Outcome</div>
              <div className="text-[16px] font-normal leading-[1.45] tracking-[0] text-white/90 md:text-[17px]">
                {item.outcome}
              </div>
              <PageNumber value={`J${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="relative hidden h-0 shrink-0 overflow-visible lg:block">
        <PageNumber value="04" />
      </div>
    </div>
  );
}

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
