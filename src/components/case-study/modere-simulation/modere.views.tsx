import { motion } from "framer-motion";
import {
  ArrowRight,
  RefreshCcw,
} from "lucide-react";

import {
  OUTCOME_SUMMARY,
  OUTCOME_VIEW_ACTIONS,
  RESULT_TABS,
  RESULTS_VIEW_CONTENT,
} from "./modere.data";
import { getCurrentPagePath, trackEvent } from "@/lib/analytics";
import type {
  Decision,
  DecisionOption,
  ResultsView,
} from "./modere.types";
import {
  BOOK_CALL_LABEL,
  OUTCOME_ACTION_BUTTON_CLASS,
  OUTCOME_PRIMARY_LINK_CLASS,
  cn,
  formatRevenue,
} from "./modere.utils";

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

export function TopChrome({ revenue, onReset }: { revenue: number; onReset: () => void }) {
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
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">
            Simulation Active
          </div>
          <div className="text-sm font-medium">Modere $1B Growth Engine</div>
        </div>
      </div>

      <div className="pointer-events-auto flex flex-col items-end border border-white/5 bg-black/40 px-4 py-2 backdrop-blur-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF]">Live Revenue</div>
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

export function IntroView({ onStart }: { onStart: () => void }) {
  return (
    <motion.section
      key="intro"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="grid h-full content-start px-6 pb-12 pt-[15px] md:px-10 md:pt-[15px] lg:px-16 lg:pb-16 lg:pt-[15px]"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#9CA3AF]">
        Interactive Executive Simulation
      </div>
      <h1 className="mt-[15px] text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
        What Would You Do?
      </h1>

      <div className="mt-10 grid items-start gap-12 md:grid-cols-2 lg:gap-24">
        <div className="space-y-6">
          <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-[#D1D5DB]">
            Modere is stuck at $500M. The technology is a &quot;dumpster fire,&quot; the politics are toxic, and growth has stalled.
          </p>
          <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-white/90">
            You are the Lead Architect. Your mission: Navigate the technical and political minefield to engineer the escape to $1B.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <div className="space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9CA3AF]">
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

          <div className="text-center text-[10px] uppercase tracking-[0.35em] text-[#9CA3AF]">
            Estimated time: 3 Minutes • High Stakes
          </div>
          <PageNumber value="01" />
        </div>
      </div>
    </motion.section>
  );
}

export function DecisionView({
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
        <div className="text-[10px] uppercase tracking-[0.28em] text-[#9CA3AF]">Decision Point</div>
      </div>

      <h2 className="mb-8 max-w-4xl text-[30px] font-normal leading-[1.3] tracking-[-0.02em] md:text-[36px]">
        {step.title}
      </h2>
      <p className="mb-16 max-w-4xl text-[18px] font-normal leading-[1.5] tracking-[0] text-[#D1D5DB]">
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
              <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[#9CA3AF] transition-opacity group-hover:text-white">
                Option {index + 1}
              </div>
              <div className="mb-4 text-[30px] leading-tight tracking-[-0.03em] md:text-[38px]">
                {option.label}
              </div>
              <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-[#D1D5DB]">
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
              : "border-white/15 text-[#D1D5DB] hover:border-white/40 hover:text-white",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function ResultsHeader({
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
        <p className="text-[18px] font-normal leading-[1.5] tracking-[0] text-[#D1D5DB]">
          {content.body}
        </p>
      </div>
      <ResultsTabs value={value} onChange={onChange} />
    </div>
  );
}

export function OutcomeView({
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
