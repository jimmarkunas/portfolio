"use client";

import { useMemo, useState, type ReactNode } from "react";

import { useGuidedExerciseFlow } from "@/components/exercise/useGuidedExerciseFlow";
import {
  pdma2026ExerciseContent,
  type PdmaExerciseAuthority,
  type PdmaExerciseControlChoice,
  type PdmaExerciseValue,
} from "@/content/pdma2026";
import { pdmaAssets } from "../pdmaAssets";

type ExerciseState = {
  initiative: string;
  value: PdmaExerciseValue | null;
  authority: PdmaExerciseAuthority | null;
  controls: Partial<Record<string, PdmaExerciseControlChoice>>;
};

type ExerciseChromeProps = {
  progress: number;
  leftLabel: string;
  nav: readonly [string, string, string];
  onReturn: () => void;
  children: ReactNode;
};

const initialState: ExerciseState = {
  initiative: "AI initiative",
  value: null,
  authority: null,
  controls: {},
};

const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2FAE]";

const introRows = [
  ["01", "VALUE", "Increase revenue, decrease cost, or streamline operations?", `${pdmaAssets.slide14Root}/66471.svg`, `${pdmaAssets.slide14Root}/5cb15.svg`],
  ["02", "AUTHORITY", "What may AI observe, recommend, prepare, decide, or execute?", `${pdmaAssets.slide14Root}/408a3.svg`, `${pdmaAssets.slide14Root}/5cb15.svg`],
  ["03", "A.G.E.N.T.S.", "Define controls, evidence, systems, transfer, and success.", `${pdmaAssets.slide14Root}/a7ab0.svg`, `${pdmaAssets.slide14Root}/5cb15.svg`],
  ["04", "OUTPUT", "Generate a mini productization brief / backlog-ready artifact.", `${pdmaAssets.slide14Root}/ea3ba.svg`, `${pdmaAssets.slide14Root}/cda5a.svg`],
] as const;

const valueMeta = [
  { number: "01", kicker: "TOP-LINE VALUE", prompt: "Does it help us acquire, convert, retain, or expand?" },
  { number: "02", kicker: "SYSTEM COST", prompt: "Does it remove meaningful labor, cost-to-serve, rework, or waste?" },
  { number: "03", kicker: "OPERATING LEVERAGE", prompt: "Does it make work materially faster, simpler, more scalable, or less manual?" },
] as const;

const authorityMeta = [
  { number: "01", copy: "AI sees the state of the product or process.", icon: `${pdmaAssets.slide08Root}/91b4d.svg`, boundary: "Observation" },
  { number: "02", copy: "AI proposes what should happen.", icon: `${pdmaAssets.slide08Root}/d17aa.svg`, boundary: "Recommendation" },
  { number: "03", copy: "AI stages the action for human review.", icon: `${pdmaAssets.slide08Root}/9244f.svg`, boundary: "Prepared action" },
  { number: "04", copy: "AI chooses the action within defined rules.", icon: `${pdmaAssets.slide08Root}/8b919.svg`, boundary: "Decision" },
  { number: "05", copy: "AI acts within defined limits.", icon: `${pdmaAssets.slide08Root}/97008.svg`, boundary: "Execution" },
] as const;

function ExerciseChrome({ progress, leftLabel, nav, onReturn, children }: ExerciseChromeProps) {
  return (
    <main className="min-h-dvh bg-[#050505] text-[#F2F2F5] [font-family:Inter,ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto flex min-h-dvh w-full max-w-[1920px] flex-col bg-[#090909]">
        <header className="grid min-h-[78px] grid-cols-[auto_minmax(80px,1fr)] items-center gap-x-7 border-b border-[#15181B] px-5 md:grid-cols-[auto_minmax(120px,1fr)_auto] md:px-9 lg:px-[3.5vw]">
          <button type="button" onClick={onReturn} className={`text-left text-[13px] font-bold uppercase tracking-[0.05em] text-[#F5F5F2] transition-colors hover:text-[#FF2FAE] md:text-[15px] ${focusClass}`} aria-label="Return to PDMA presentation">
            PDMA 2026
          </button>
          <div className="relative h-[3px] bg-[#303338]" aria-hidden="true">
            <div className="absolute inset-y-0 left-0 bg-[#FF2FAE] transition-[width] duration-300" style={{ width: `${Math.max(4, progress)}%` }} />
          </div>
          <div className="hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7A7D85] md:flex lg:text-[12px]">
            <span>{nav[0]}</span><span className="text-[#FF2FAE]">•</span><span>{nav[1]}</span><span className="text-[#FF2FAE]">•</span><span>{nav[2]}</span>
          </div>
        </header>

        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="mt-auto flex min-h-[72px] items-center gap-5 border-t border-[#15181B] px-5 md:px-9 lg:px-[3.5vw]">
          <div className="shrink-0 text-[10px] font-medium uppercase tracking-[0.34em] text-[#7A7D85] md:text-[11px]">{leftLabel}</div>
          <div className="h-px flex-1 bg-[#303338]" />
          <img src={pdmaAssets.asterisk} alt="" className="h-9 w-9 shrink-0 md:h-11 md:w-11" aria-hidden="true" />
        </footer>
      </div>
    </main>
  );
}

function EditorialTitle({ whiteText, magentaText, compact = false }: { whiteText: string; magentaText: string; compact?: boolean }) {
  const size = compact ? "text-[clamp(2.75rem,5vw,5.4rem)]" : "text-[clamp(3.25rem,6.2vw,6.8rem)]";
  return (
    <h1 className={`${size} font-extrabold uppercase leading-[0.92] tracking-[-0.045em]`}>
      <span className="block text-[#F2F2F5]">{whiteText}</span>
      <span className="block text-[#FF2FAE]">{magentaText}</span>
    </h1>
  );
}

function BriefPreview({ initiative }: { initiative: string }) {
  const fields = ["OPPORTUNITY", "VALUE", "AUTHORITY", "A.G.E.N.T.S.", "OUTPUT", "NEXT STEPS"];
  return (
    <div className="relative mx-auto w-full max-w-[640px] py-7 lg:py-10">
      <div className="absolute inset-x-[3%] inset-y-[8%] rotate-[3.5deg] rounded-[16px] border border-[#2E3236] bg-[#0E1114] shadow-[0_20px_36px_rgba(0,0,0,0.38)]" />
      <div className="relative rotate-[1.8deg] overflow-hidden rounded-[16px] border border-[#44464A] bg-[#14181C] p-6 shadow-[0_18px_30px_rgba(0,0,0,0.52)] md:p-8">
        <div className="absolute inset-x-0 top-0 h-[22%] bg-[rgba(26,30,34,0.72)]" />
        <div className="relative flex items-start justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A7D85] md:text-xs">
          <span className="text-[#F5F5F2]">PDMA 2026</span><span>CONFIDENTIAL&nbsp;&nbsp;•&nbsp;&nbsp;DRAFT</span>
        </div>
        <div className="relative mt-9 text-xs font-semibold uppercase tracking-[0.08em] text-[#7A7D85] md:text-sm">{initiative.trim() || "AI INITIATIVE"}</div>
        <div className="relative mt-2 text-[clamp(1.65rem,3vw,2.35rem)] font-bold uppercase leading-none text-[#F5F5F2]">Productization brief</div>
        <div className="relative mt-5 h-[3px] w-16 bg-[#FF2FAE]" />
        <div className="relative mt-7 space-y-4">
          {fields.map((field, index) => (
            <div key={field} className="grid grid-cols-[110px_1fr] items-center gap-4 md:grid-cols-[145px_1fr]">
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F5F5F2] md:text-xs">{field}</div>
              <div className="space-y-2"><div className="h-1.5 rounded-full bg-[rgba(103,107,112,0.8)]" style={{ width: `${index % 2 === 0 ? 83 : 91}%` }} /><div className="h-1.5 rounded-full bg-[rgba(103,107,112,0.48)]" style={{ width: `${index % 2 === 0 ? 57 : 66}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="relative mt-7 flex items-center gap-3 border-t border-[#44464A] pt-4 text-[9px] font-medium uppercase tracking-[0.13em] text-[#7A7D85] md:text-[10px]">
          <span>From idea to impact</span><span className="h-[2px] w-8 bg-[#FF2FAE]"/><span className="ml-auto">PDMA 2026</span>
        </div>
      </div>
    </div>
  );
}

export function PdmaProductizationExercise() {
  const [state, setState] = useState<ExerciseState>(initialState);
  const [copyStatus, setCopyStatus] = useState("Copy brief");
  const flow = useGuidedExerciseFlow({ stepCount: 8, onReset: () => setState(initialState) });
  const { view, stepIndex } = flow;
  const currentControl = stepIndex >= 2 ? pdma2026ExerciseContent.controls[stepIndex - 2] : undefined;
  const currentControlChoice = currentControl ? state.controls[currentControl.letter] : undefined;
  const readyForCurrentStep = stepIndex === 0
    ? state.value !== null
    : stepIndex === 1
      ? state.authority !== null
      : Boolean(currentControlChoice);

  const output = useMemo(() => {
    const controls = pdma2026ExerciseContent.controls.map((control) => ({
      letter: control.letter,
      name: control.name,
      summary: state.controls[control.letter]?.summary ?? "Unresolved",
    }));
    const nextSteps = [
      `Turn the ${state.authority ?? "selected"} authority boundary into acceptance criteria and explicit decision rights.`,
      "Translate each A.G.E.N.T.S. decision into backlog items with an owner and verification method.",
      `Define the baseline and target for ${state.value ?? "the primary business value"} before pilot launch.`,
    ];
    const summary = `${state.initiative.trim() || "AI initiative"} should be productized around ${state.value ?? "a defined business value"} with AI operating at the ${state.authority ?? "defined"} authority level. The backlog should make decision rights, guardrails, evidence, system access, escalation, and success ownership explicit before release.`;
    return { controls, nextSteps, summary };
  }, [state]);

  const briefText = useMemo(() => [
    "PDMA 2026 — MINI PRODUCTIZATION BRIEF",
    `Opportunity: ${state.initiative.trim() || "AI initiative"}`,
    `Primary business value: ${state.value ?? "Unresolved"}`,
    `Authority level: ${state.authority ?? "Unresolved"}`,
    "",
    "A.G.E.N.T.S.",
    ...output.controls.map((item) => `${item.letter} — ${item.name}: ${item.summary}`),
    "",
    `Productization summary: ${output.summary}`,
    "",
    "Next steps / unresolved items:",
    ...output.nextSteps.map((item) => `- ${item}`),
  ].join("\n"), [output, state]);

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopyStatus("Copied");
      window.setTimeout(() => setCopyStatus("Copy brief"), 1600);
    } catch {
      setCopyStatus("Copy unavailable");
    }
  };

  const returnToDeck = () => {
    window.close();
    window.setTimeout(() => { window.location.href = "/pdma2026"; }, 150);
  };

  if (view === "intro") {
    return (
      <ExerciseChrome progress={4} leftLabel="Turn an AI idea into a production-ready product" nav={["APPLY", "DECIDE", "BUILD"]} onReturn={returnToDeck}>
        <div className="flex flex-1 flex-col px-5 pb-6 pt-8 md:px-9 md:pt-10 lg:px-[3.5vw] lg:pt-12">
          <div>
            <EditorialTitle whiteText="Now you" magentaText="do it." compact />
            <p className="mt-4 max-w-[1050px] text-[clamp(1.1rem,1.7vw,1.65rem)] leading-[1.35] text-[#F2F2F5]">Turn an AI idea into a mini productization brief you can take back to work.</p>
          </div>

          <div className="mt-8 grid flex-1 gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,0.12fr)_minmax(420px,0.8fr)] xl:items-center">
            <section>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FF2FAE] md:text-sm">Interactive exercise — live productization</div>
              <p className="mt-3 text-lg font-semibold text-[#F5F5F2] md:text-xl">The live app will guide you through:</p>
              <div className="mt-5 divide-y divide-[#303338] border-b border-[#303338]">
                {introRows.map(([number, title, body, icon, ring]) => (
                  <div key={number} className="grid grid-cols-[34px_54px_minmax(105px,150px)_1fr] items-center gap-3 py-4 md:grid-cols-[42px_64px_170px_1fr] md:gap-5">
                    <span className="text-xs font-medium tracking-[0.08em] text-[#7A7D85] md:text-sm">{number}</span>
                    <span className="relative h-12 w-12 md:h-14 md:w-14"><img src={ring} alt="" className="absolute inset-0 h-full w-full"/><img src={icon} alt="" className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 md:h-7 md:w-7"/></span>
                    <span className={`border-r border-[#44464A] pr-3 text-sm font-semibold uppercase tracking-[0.06em] md:text-base ${title === "OUTPUT" ? "text-[#FF2FAE]" : "text-[#F5F5F2]"}`}>{title}</span>
                    <span className="text-sm leading-[1.35] text-[#F5F5F2] md:text-base">{body}</span>
                  </div>
                ))}
              </div>
              <label htmlFor="pdma-initiative" className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A7D85] md:text-xs">Opportunity / AI initiative</label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input id="pdma-initiative" value={state.initiative} onChange={(event) => setState((current) => ({ ...current, initiative: event.target.value }))} className={`min-h-12 flex-1 border border-[#44464A] bg-[#111315] px-4 text-base font-medium text-[#F5F5F2] outline-none placeholder:text-[#676B70] focus:border-[#FF2FAE] md:text-lg ${focusClass}`} placeholder="Name the initiative" />
                <button type="button" onClick={flow.start} className={`min-h-12 bg-[#FF2FAE] px-6 text-sm font-bold uppercase tracking-[0.09em] text-[#090909] transition-[filter] hover:brightness-110 ${focusClass}`}>Start exercise →</button>
              </div>
            </section>

            <div className="hidden flex-col items-center justify-center gap-4 xl:flex" aria-hidden="true">
              <div className="text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.2em] text-[#7A7D85]">Ideas<br/>through<br/>structure<br/>to impact</div>
              <div className="h-[3px] w-12 bg-[#FF2FAE]" />
              <img src={`${pdmaAssets.slide14Root}/b1b9e.svg`} alt="" className="w-[180px] max-w-none translate-x-10" />
            </div>

            <BriefPreview initiative={state.initiative} />
          </div>

          <div className="mt-6 border-t border-[#44464A] pt-5">
            <div className="border-l-[3px] border-[#FF2FAE] pl-4 text-[clamp(1rem,1.5vw,1.4rem)] font-semibold uppercase leading-[1.3] text-[#F5F5F2]">You leave with a useful PM artifact — not just a quiz result.</div>
          </div>
        </div>
      </ExerciseChrome>
    );
  }

  if (view === "result") {
    return (
      <ExerciseChrome progress={100} leftLabel="From idea to impact" nav={["VALUE", "AUTHORITY", "OUTPUT"]} onReturn={returnToDeck}>
        <div className="px-5 pb-8 pt-8 md:px-9 lg:px-[3.5vw] lg:pt-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF2FAE]">Output — productization brief</div><EditorialTitle whiteText="From idea" magentaText="to artifact." compact /></div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <button type="button" onClick={copyBrief} className={`border border-[#FF2FAE] px-4 py-3 text-xs font-bold uppercase tracking-[0.11em] text-[#FF2FAE] hover:bg-[#FF2FAE] hover:text-[#090909] ${focusClass}`}>{copyStatus}</button>
              <button type="button" onClick={flow.reset} className={`border border-[#44464A] px-4 py-3 text-xs font-bold uppercase tracking-[0.11em] text-[#F5F5F2] hover:border-[#F5F5F2] ${focusClass}`}>Reset</button>
              <button type="button" onClick={returnToDeck} className={`bg-[#FF2FAE] px-4 py-3 text-xs font-bold uppercase tracking-[0.11em] text-[#090909] ${focusClass}`}>Return to presentation</button>
            </div>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.55fr)]">
            <section className="relative pb-5 pr-0 md:pr-5">
              <div className="absolute bottom-0 left-4 right-0 top-4 rotate-[1.6deg] rounded-[18px] border border-[#2E3236] bg-[#0E1114]" />
              <article className="relative overflow-hidden rounded-[18px] border border-[#44464A] bg-[#14181C] shadow-[0_22px_45px_rgba(0,0,0,0.5)]">
                <div className="border-b border-[#303338] bg-[rgba(26,30,34,0.72)] px-5 py-5 md:px-8">
                  <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A7D85] md:text-xs"><span className="text-[#F5F5F2]">PDMA 2026</span><span>CONFIDENTIAL • DRAFT</span></div>
                  <div className="mt-7 text-xs font-semibold uppercase tracking-[0.1em] text-[#7A7D85] md:text-sm">{state.initiative.trim() || "AI initiative"}</div>
                  <div className="mt-1 text-[clamp(2rem,4vw,3.9rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-[#F5F5F2]">Productization brief</div>
                  <div className="mt-5 h-[3px] w-16 bg-[#FF2FAE]" />
                </div>
                <div className="px-5 py-6 md:px-8 md:py-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="border-l-2 border-[#FF2FAE] pl-4"><div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A7D85]">Opportunity</div><div className="mt-2 text-xl font-bold text-[#F5F5F2]">{state.initiative.trim() || "AI initiative"}</div></div>
                    <div className="grid grid-cols-2 gap-4"><div><div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A7D85]">Value</div><div className="mt-2 text-base font-semibold text-[#F5F5F2]">{state.value}</div></div><div><div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A7D85]">Authority</div><div className="mt-2 text-base font-semibold text-[#F5F5F2]">{state.authority}</div></div></div>
                  </div>

                  <div className="mt-7 border-y border-[#303338] py-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF2FAE]">A.G.E.N.T.S. decisions</div>
                    <div className="mt-4 grid gap-x-7 gap-y-4 md:grid-cols-2">
                      {output.controls.map((item) => <div key={item.letter} className="grid grid-cols-[34px_1fr] gap-3"><div className="text-2xl font-extrabold text-[#FF2FAE]">{item.letter}</div><div><div className="text-xs font-semibold uppercase tracking-[0.07em] text-[#F5F5F2]">{item.name}</div><p className="mt-1 text-sm leading-[1.4] text-[#C7C9CC]">{item.summary}</p></div></div>)}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                    <div><div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#FF2FAE]">Recommended productization summary</div><p className="mt-3 text-base leading-[1.55] text-[#F2F2F5] md:text-lg">{output.summary}</p></div>
                    <div><div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#7A7D85]">Next steps / unresolved items</div><ol className="mt-3 space-y-3">{output.nextSteps.map((item, index) => <li key={item} className="grid grid-cols-[28px_1fr] gap-2 text-sm leading-[1.45] text-[#D8DADC]"><span className="font-bold text-[#FF2FAE]">0{index + 1}</span><span>{item}</span></li>)}</ol></div>
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-t border-[#44464A] pt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-[#7A7D85] md:text-[10px]"><span>From idea to impact</span><span className="h-[2px] w-8 bg-[#FF2FAE]"/><span className="ml-auto">Backlog-ready</span></div>
                </div>
              </article>
            </section>

            <aside className="self-start border-t border-[#44464A] pt-5 xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF2FAE]">Use the artifact</div>
              <p className="mt-3 max-w-md text-lg font-semibold leading-[1.35] text-[#F5F5F2]">Screenshot it. Copy it. Turn it into the first version of your product backlog.</p>
              <div className="mt-7 space-y-5 text-sm leading-[1.45] text-[#AEB1B5]"><p><span className="font-bold text-[#F5F5F2]">01 — Requirements.</span> Convert each decision into an explicit product requirement.</p><p><span className="font-bold text-[#F5F5F2]">02 — Acceptance.</span> Add observable evidence that proves each boundary works.</p><p><span className="font-bold text-[#F5F5F2]">03 — Ownership.</span> Name the human accountable for the consequential outcome.</p></div>
              <div className="mt-8 border-l-[3px] border-[#FF2FAE] pl-4 text-lg font-bold uppercase leading-[1.3] text-[#F5F5F2]">Useful output beats a readiness score.</div>
            </aside>
          </div>
        </div>
      </ExerciseChrome>
    );
  }

  const progress = ((stepIndex + 1) / flow.stepCount) * 88 + 6;

  return (
    <ExerciseChrome progress={progress} leftLabel={`${state.initiative.trim() || "AI initiative"} • decision ${stepIndex + 1} of ${flow.stepCount}`} nav={stepIndex === 0 ? ["REVENUE", "COST", "OPERATIONS"] : stepIndex === 1 ? ["OBSERVE", "DECIDE", "EXECUTE"] : ["STANDARD", "PRODUCT", "GOVERN"]} onReturn={returnToDeck}>
      <div className="flex flex-1 flex-col px-5 pb-7 pt-8 md:px-9 lg:px-[3.5vw] lg:pt-10">
        {stepIndex === 0 ? (
          <>
            <EditorialTitle whiteText="Before you build it," magentaText="prove the value." compact />
            <p className="mt-4 max-w-[1200px] text-[clamp(1.05rem,1.6vw,1.45rem)] leading-[1.4] text-[#F2F2F5]">Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.</p>
            <div className="mt-8 grid overflow-hidden rounded-[14px] border border-[#3A3F44] bg-[#121518] lg:grid-cols-[250px_repeat(3,minmax(0,1fr))]">
              <div className="border-b border-[#3A3F44] bg-[#15181B] p-5 lg:border-b-0 lg:border-r">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2FAE]">Decision rule</div><div className="mt-3 h-[2px] w-10 bg-[#7A7D85]"/><div className="mt-4 text-2xl font-extrabold uppercase leading-[0.98] text-[#F2F2F5]">Pick one<br/>primary<br/>value driver.</div><p className="mt-4 text-xs leading-[1.45] text-[#7A7D85]">Use the business outcome as context for the product definition—not as a score.</p>
              </div>
              {pdma2026ExerciseContent.values.map((value, index) => {
                const selected = state.value === value;
                const meta = valueMeta[index];
                return <button key={value} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, value }))} className={`group relative min-h-[230px] border-b border-[#3A3F44] p-5 text-left transition-colors last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${focusClass} ${selected ? "bg-[rgba(36,14,29,0.92)] shadow-[inset_0_0_0_1px_#FF2FAE]" : "bg-[#121518] hover:bg-[#171A1D]"}`}>
                  <div className="flex items-center justify-between gap-4"><span className={`text-[10px] font-semibold tracking-[0.18em] ${selected ? "text-[#FF2FAE]" : "text-[#7A7D85]"}`}>{meta.number}</span><span className={`relative h-6 w-6 rounded-full border ${selected ? "border-[#FF2FAE]" : "border-[#7A7D85]"}`}>{selected && <span className="absolute inset-1.5 rounded-full bg-[#FF2FAE]"/>}</span></div>
                  <div className={`mt-8 text-[clamp(1.35rem,2.2vw,2rem)] font-extrabold uppercase leading-[1.04] ${selected ? "text-[#FF2FAE]" : "text-[#F2F2F5]"}`}>{value}</div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A7D85]">{meta.kicker}</div>
                  <p className="mt-4 max-w-[310px] text-sm leading-[1.4] text-[#D7D9DB]">{meta.prompt}</p>
                </button>;
              })}
            </div>
            <div className="mt-8 border-t border-[#3A3F44] pt-5"><div className="border-l-[3px] border-[#FF2FAE] pl-4 text-[clamp(1rem,1.5vw,1.35rem)] font-semibold uppercase text-[#F2F2F5]">If you can’t identify one of these outcomes, you don’t have a product.</div></div>
          </>
        ) : stepIndex === 1 ? (
          <>
            <EditorialTitle whiteText="How much authority" magentaText="should the robots have?" compact />
            <p className="mt-4 max-w-[980px] text-[clamp(1.05rem,1.6vw,1.4rem)] leading-[1.4] text-[#F2F2F5]">The farther AI moves from observing to acting, the more deliberately the Product Manager has to design the boundary.</p>
            <div className="relative mt-8 grid gap-3 md:grid-cols-5 md:items-end">
              <div className="pointer-events-none absolute inset-x-[8%] bottom-[34px] hidden h-[220px] rounded-t-[50%] border-t border-[#34383D] md:block" aria-hidden="true" />
              {pdma2026ExerciseContent.authority.map((authority, index) => {
                const selected = state.authority === authority;
                const meta = authorityMeta[index];
                const raised = [0, 34, 56, 34, 0][index];
                const consequential = index >= 3;
                return <button key={authority} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, authority }))} style={{ marginBottom: `${raised}px` }} className={`relative z-10 min-h-[245px] overflow-hidden rounded-[18px] border p-5 text-left transition-[background,border-color,box-shadow,transform] md:min-h-[270px] ${focusClass} ${selected ? "border-[#FF2FAE] bg-[linear-gradient(180deg,rgba(255,47,174,0.22),rgba(52,6,35,0.78))] shadow-[0_0_28px_rgba(255,47,174,0.2)]" : consequential ? "border-[#7A174F] bg-[linear-gradient(180deg,rgba(255,47,174,0.1),rgba(24,9,18,0.75))] hover:border-[#FF2FAE]" : "border-[#3A3F44] bg-[linear-gradient(180deg,#171B20,#0E1114)] hover:border-[#909295]"}`}>
                  <div className={`text-xs font-semibold tracking-[0.12em] ${selected || consequential ? "text-[#FF2FAE]" : "text-[#909295]"}`}>{meta.number}</div>
                  <div className={`mt-4 text-xl font-bold uppercase ${selected || consequential ? "text-[#FF2FAE]" : "text-[#F5F5F2]"}`}>{authority}</div>
                  <p className="mt-3 min-h-[58px] text-sm leading-[1.4] text-[#F2F2F5]">{meta.copy}</p>
                  <div className={`mt-5 flex h-14 w-14 items-center justify-center rounded-full border ${selected || consequential ? "border-[#FF2FAE]" : "border-[#909295]"}`}><img src={meta.icon} alt="" className="h-7 w-7" /></div>
                  <div className="mt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7A7D85]">{meta.boundary}</div>
                </button>;
              })}
            </div>
            <div className="mt-3 grid gap-4 border-t border-[#3A3F44] pt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F5F5F2] sm:grid-cols-3"><span>More autonomy →</span><span className="sm:text-center">More consequence →</span><span className="sm:text-right">More product design</span></div>
            <div className="mt-6 border-l-[3px] border-[#FF2FAE] pl-4 text-[clamp(1rem,1.45vw,1.3rem)] font-bold uppercase text-[#F5F5F2]">The farther right you go, the more product design has to account for the consequences.</div>
          </>
        ) : currentControl ? (
          <>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] lg:items-end">
              <div><div className="text-[clamp(3.4rem,6vw,6.2rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-[#FF2FAE]">A.G.E.N.T.S.</div><p className="mt-3 max-w-[1050px] text-[clamp(1.05rem,1.6vw,1.4rem)] leading-[1.4] text-[#F2F2F5]">Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.</p></div>
              <div className="border-l border-[#44464A] pl-5 text-right"><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A7D85]">Decision {stepIndex - 1} of 6</div><div className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#F5F5F2]">{currentControl.descriptor}</div></div>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative overflow-hidden rounded-[14px] border border-[#B81773] bg-[#130911] p-6 shadow-[0_0_22px_rgba(255,47,174,0.12)] md:p-8">
                <div className="grid grid-cols-[64px_1px_1fr] gap-5 md:grid-cols-[82px_2px_1fr] md:gap-7">
                  <div className="text-[clamp(3.5rem,6vw,5.6rem)] font-extrabold leading-none text-[#FF2FAE]">{currentControl.letter}</div><div className="bg-[rgba(255,47,174,0.65)]"/><div><div className="text-xl font-semibold uppercase tracking-[0.04em] text-[#F2F2F5] md:text-2xl">{currentControl.name}</div><p className="mt-4 text-[clamp(1.3rem,2vw,1.8rem)] font-semibold leading-[1.2] text-[#F5F5F2]">{currentControl.question}</p></div>
                </div>
                <div className="mt-8 border-t border-[#7A174F] pt-5 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#FF2FAE]">One productization standard · six explicit decisions</div>
              </div>

              <div className="grid gap-3">
                {currentControl.choices.map((choice, index) => {
                  const selected = currentControlChoice?.id === choice.id;
                  return <button key={choice.id} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, controls: { ...current.controls, [currentControl.letter]: choice } }))} className={`grid min-h-[112px] grid-cols-[38px_1fr_auto] items-center gap-4 rounded-[12px] border px-5 py-4 text-left transition-[background,border-color,box-shadow] md:grid-cols-[48px_1fr_auto] ${focusClass} ${selected ? "border-[#FF2FAE] bg-[#1A0A15] shadow-[0_0_18px_rgba(255,47,174,0.1)]" : "border-[#3A3F44] bg-[#0E0C0E] hover:border-[#8B245F]"}`}>
                    <span className={`text-sm font-semibold tracking-[0.1em] ${selected ? "text-[#FF2FAE]" : "text-[#7A7D85]"}`}>0{index + 1}</span><span><span className={`block text-base font-semibold md:text-lg ${selected ? "text-[#FF2FAE]" : "text-[#F5F5F2]"}`}>{choice.label}</span><span className="mt-1.5 block text-sm leading-[1.4] text-[#C7C9CC]">{choice.summary}</span></span><span className={`relative h-6 w-6 rounded-full border ${selected ? "border-[#FF2FAE]" : "border-[#7A7D85]"}`}>{selected && <span className="absolute inset-1.5 rounded-full bg-[#FF2FAE]"/>}</span>
                  </button>;
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-y border-[#44464A] py-4 md:grid-cols-[220px_1fr] md:items-center"><div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF2FAE]">Use A.G.E.N.T.S. to</div><div className="text-base font-semibold text-[#F2F2F5] md:text-lg">write better requirements, define operating boundaries, and make production behavior explicit.</div></div>
          </>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <button type="button" disabled={flow.isFirstStep} onClick={flow.back} className={`min-h-11 border px-5 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${focusClass} ${flow.isFirstStep ? "cursor-not-allowed border-[#24272A] text-[#4F5358]" : "border-[#44464A] text-[#F5F5F2] hover:border-[#F5F5F2]"}`}>← Back</button>
          <div className="order-first w-full text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A7D85] sm:order-none sm:w-auto">Decision {stepIndex + 1} / {flow.stepCount}</div>
          <button type="button" disabled={!readyForCurrentStep} onClick={flow.next} className={`min-h-11 px-6 text-xs font-bold uppercase tracking-[0.12em] transition-[background,color] ${focusClass} ${readyForCurrentStep ? "bg-[#FF2FAE] text-[#090909] hover:bg-[#F2F2F5]" : "cursor-not-allowed bg-[#232629] text-[#64686D]"}`}>{flow.isLastStep ? "Generate brief →" : "Next decision →"}</button>
        </div>
      </div>
    </ExerciseChrome>
  );
}
