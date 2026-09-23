"use client";

import { useMemo, useState } from "react";

import { useGuidedExerciseFlow } from "@/components/exercise/useGuidedExerciseFlow";
import {
  pdma2026ExerciseContent,
  type PdmaExerciseAuthority,
  type PdmaExerciseControlChoice,
  type PdmaExerciseValue,
} from "@/content/pdma2026";

type ExerciseState = {
  initiative: string;
  value: PdmaExerciseValue | null;
  authority: PdmaExerciseAuthority | null;
  controls: Partial<Record<string, PdmaExerciseControlChoice>>;
};

const initialState: ExerciseState = {
  initiative: "AI initiative",
  value: null,
  authority: null,
  controls: {},
};

const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2FAE]";

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
      label: `${control.letter} — ${control.name}`,
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

  const briefText = useMemo(() => {
    return [
      "PDMA 2026 — MINI PRODUCTIZATION BRIEF",
      `Opportunity: ${state.initiative.trim() || "AI initiative"}`,
      `Primary business value: ${state.value ?? "Unresolved"}`,
      `Authority level: ${state.authority ?? "Unresolved"}`,
      "",
      "A.G.E.N.T.S.",
      ...output.controls.map((item) => `${item.label}: ${item.summary}`),
      "",
      `Productization summary: ${output.summary}`,
      "",
      "Next steps / unresolved items:",
      ...output.nextSteps.map((item) => `- ${item}`),
    ].join("\n");
  }, [output, state]);

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
    window.setTimeout(() => {
      window.location.href = "/pdma2026";
    }, 150);
  };

  const stageLabel = stepIndex === 0 ? "VALUE" : stepIndex === 1 ? "AUTHORITY" : "A.G.E.N.T.S.";
  const stageTitle = stepIndex === 0
    ? "Choose the primary business value."
    : stepIndex === 1
      ? "Choose the intended AI authority level."
      : currentControl?.question ?? "Define the productization decision.";
  const stageDescriptor = stepIndex === 0
    ? "Select one value driver. It is context for the product definition, not a score."
    : stepIndex === 1
      ? "Increasing authority means increasing consequence and autonomy. Pick the intended operating level."
      : currentControl?.descriptor ?? "Productization decision";

  if (view === "intro") {
    return (
      <main className="min-h-dvh bg-[#090909] px-5 py-6 text-[#F5F5F2] md:px-8 md:py-8 lg:px-12 lg:py-10">
        <div className="mx-auto flex min-h-[calc(100dvh-3rem)] w-full max-w-[1600px] flex-col rounded-[28px] border border-[#2E2E2E] bg-[#0D0D0F] p-6 md:p-9 lg:p-12">
          <div className="flex items-center justify-between gap-6 border-b border-[#2E2E2E] pb-6">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A7A7A]">PDMA 2026 · Live exercise</div>
            <button type="button" onClick={returnToDeck} className={`text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F5F2] hover:text-[#FF2FAE] ${focusClass}`}>Return to presentation</button>
          </div>

          <div className="grid flex-1 gap-10 py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center">
            <section>
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#FF2FAE]">VALUE → AUTHORITY → A.G.E.N.T.S. → OUTPUT</div>
              <h1 className="mt-5 max-w-[1050px] text-[clamp(3.4rem,7vw,7.1rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-white">{pdma2026ExerciseContent.title}</h1>
              <p className="mt-6 max-w-[900px] text-[clamp(1.35rem,2.2vw,2.1rem)] leading-[1.3] text-[#B8B8BE]">{pdma2026ExerciseContent.subtitle}</p>
            </section>

            <aside className="rounded-[24px] border border-[#44464A] bg-[#141416] p-6 md:p-8">
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#7A7A7A]" htmlFor="pdma-initiative">Opportunity / AI initiative</label>
              <input id="pdma-initiative" value={state.initiative} onChange={(event) => setState((current) => ({ ...current, initiative: event.target.value }))} className={`mt-3 w-full border-b border-[#44464A] bg-transparent px-0 py-3 text-2xl text-white outline-none placeholder:text-[#55555B] focus:border-[#FF2FAE] ${focusClass}`} placeholder="Name the initiative" />
              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#7A7A7A]">Exercise format</div>
              <div className="mt-2 text-2xl text-white">8 decisions · one usable PM artifact</div>
              <button type="button" onClick={flow.start} className={`mt-8 flex min-h-14 w-full items-center justify-center rounded-full bg-[#FF2FAE] px-6 text-base font-semibold text-[#090909] transition-transform hover:scale-[1.01] ${focusClass}`}>Start productization exercise</button>
            </aside>
          </div>
        </div>
      </main>
    );
  }

  if (view === "result") {
    return (
      <main className="min-h-dvh bg-[#090909] px-4 py-4 text-[#F5F5F2] md:px-6 md:py-6 lg:px-8 lg:py-8">
        <div className="mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-[1760px] flex-col rounded-[28px] border border-[#2E2E2E] bg-[#0D0D0F] p-5 md:p-7 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2E2E2E] pb-5">
            <div><div className="text-xs font-semibold uppercase tracking-[0.26em] text-[#FF2FAE]">OUTPUT</div><h1 className="mt-2 text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-none tracking-[-0.05em]">Mini productization brief</h1></div>
            <div className="flex flex-wrap gap-3"><button type="button" onClick={copyBrief} className={`rounded-full border border-[#FF2FAE] px-5 py-3 text-sm font-semibold text-[#FF2FAE] hover:bg-[#FF2FAE] hover:text-[#090909] ${focusClass}`}>{copyStatus}</button><button type="button" onClick={flow.reset} className={`rounded-full border border-[#44464A] px-5 py-3 text-sm font-semibold text-white hover:border-[#F5F5F2] ${focusClass}`}>Reset</button><button type="button" onClick={returnToDeck} className={`rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#090909] ${focusClass}`}>Return to presentation</button></div>
          </div>

          <div className="grid flex-1 gap-5 pt-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <section className="space-y-4">
              <div className="rounded-[20px] border border-[#2E2E2E] bg-[#121214] p-5"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">Opportunity</div><div className="mt-2 text-2xl font-semibold text-white">{state.initiative.trim() || "AI initiative"}</div></div>
              <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[20px] border border-[#2E2E2E] bg-[#121214] p-5"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">Primary value</div><div className="mt-2 text-xl text-white">{state.value}</div></div><div className="rounded-[20px] border border-[#2E2E2E] bg-[#121214] p-5"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">Authority</div><div className="mt-2 text-xl text-white">{state.authority}</div></div></div>
              <div className="rounded-[20px] border border-[#FF2FAE]/40 bg-[#FF2FAE]/[0.06] p-5"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF2FAE]">Productization summary</div><p className="mt-3 text-lg leading-[1.45] text-[#E6E6E6]">{output.summary}</p></div>
              <div className="rounded-[20px] border border-[#2E2E2E] bg-[#121214] p-5"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">Next steps / unresolved items</div><ol className="mt-3 space-y-3 text-base leading-[1.4] text-[#E6E6E6]">{output.nextSteps.map((item, index) => <li key={item} className="flex gap-3"><span className="font-semibold text-[#FF2FAE]">0{index + 1}</span><span>{item}</span></li>)}</ol></div>
            </section>

            <section className="rounded-[20px] border border-[#2E2E2E] bg-[#121214] p-5 md:p-6">
              <div className="flex items-end justify-between gap-4"><div><div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7A7A]">A.G.E.N.T.S.</div><div className="mt-2 text-2xl font-semibold">Productization decisions</div></div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF2FAE]">Backlog-ready</div></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">{output.controls.map((item) => <div key={item.label} className="rounded-[16px] border border-[#2E2E2E] bg-[#0D0D0F] p-4"><div className="text-sm font-semibold tracking-[0.05em] text-[#FF2FAE]">{item.label}</div><p className="mt-2 text-base leading-[1.35] text-[#D8D8DC]">{item.summary}</p></div>)}</div>
            </section>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-[#090909] px-4 py-4 text-[#F5F5F2] md:px-6 md:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-[1760px] flex-col rounded-[28px] border border-[#2E2E2E] bg-[#0D0D0F] p-5 md:p-7 lg:p-8">
        <header className="grid gap-5 border-b border-[#2E2E2E] pb-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div><div className="text-xs font-semibold uppercase tracking-[0.26em] text-[#FF2FAE]">{stageLabel}</div><h1 className="mt-3 max-w-[1200px] text-[clamp(2.6rem,5vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">{stageTitle}</h1><p className="mt-3 max-w-[1000px] text-lg leading-[1.4] text-[#AFAFB5]">{stageDescriptor}</p></div>
          <div className="min-w-[240px]"><div className="flex justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#7A7A7A]"><span>Decision {stepIndex + 1}</span><span>{flow.stepCount}</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#2E2E2E]"><div className="h-full bg-[#FF2FAE] transition-[width]" style={{ width: `${((stepIndex + 1) / flow.stepCount) * 100}%` }} /></div></div>
        </header>

        <section className="flex flex-1 flex-col py-6">
          {stepIndex === 0 ? (
            <div className="grid flex-1 gap-4 md:grid-cols-3">{pdma2026ExerciseContent.values.map((value) => { const selected = state.value === value; return <button key={value} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, value }))} className={`min-h-[220px] rounded-[22px] border p-6 text-left transition-colors ${focusClass} ${selected ? "border-[#FF2FAE] bg-[#FF2FAE]/[0.08]" : "border-[#2E2E2E] bg-[#121214] hover:border-[#7A7A7A]"}`}><div className={`text-xs font-semibold uppercase tracking-[0.22em] ${selected ? "text-[#FF2FAE]" : "text-[#7A7A7A]"}`}>Primary value</div><div className="mt-6 text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white">{value}</div></button>; })}</div>
          ) : stepIndex === 1 ? (
            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">{pdma2026ExerciseContent.authority.map((authority, index) => { const selected = state.authority === authority; return <button key={authority} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, authority }))} className={`flex min-h-[220px] flex-col justify-between rounded-[22px] border p-5 text-left transition-colors ${focusClass} ${selected ? "border-[#FF2FAE] bg-[#FF2FAE]/[0.08]" : "border-[#2E2E2E] bg-[#121214] hover:border-[#7A7A7A]"}`}><div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7A7A]">0{index + 1}</div><div><div className={`text-2xl font-semibold ${selected ? "text-[#FF2FAE]" : "text-white"}`}>{authority}</div><div className="mt-2 text-sm leading-[1.4] text-[#8F8F96]">{index < 2 ? "Lower autonomy" : index === 2 ? "Prepared action" : "Higher consequence"}</div></div></button>; })}</div>
          ) : currentControl ? (
            <div className="grid flex-1 gap-4 md:grid-cols-3">{currentControl.choices.map((choice) => { const selected = currentControlChoice?.id === choice.id; return <button key={choice.id} type="button" aria-pressed={selected} onClick={() => setState((current) => ({ ...current, controls: { ...current.controls, [currentControl.letter]: choice } }))} className={`min-h-[220px] rounded-[22px] border p-6 text-left transition-colors ${focusClass} ${selected ? "border-[#FF2FAE] bg-[#FF2FAE]/[0.08]" : "border-[#2E2E2E] bg-[#121214] hover:border-[#7A7A7A]"}`}><div className={`text-sm font-semibold ${selected ? "text-[#FF2FAE]" : "text-white"}`}>{choice.label}</div><p className="mt-5 text-lg leading-[1.45] text-[#B8B8BE]">{choice.summary}</p></button>; })}</div>
          ) : null}
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2E2E2E] pt-5">
          <button type="button" disabled={flow.isFirstStep} onClick={flow.back} className={`rounded-full border border-[#44464A] px-5 py-3 text-sm font-semibold transition-colors ${focusClass} ${flow.isFirstStep ? "cursor-not-allowed text-[#55555B]" : "text-white hover:border-white"}`}>Back</button>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A7A7A]">{state.initiative.trim() || "AI initiative"}</div>
          <button type="button" disabled={!readyForCurrentStep} onClick={flow.next} className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${focusClass} ${readyForCurrentStep ? "bg-[#FF2FAE] text-[#090909]" : "cursor-not-allowed bg-[#2E2E2E] text-[#67676D]"}`}>{flow.isLastStep ? "Generate brief" : "Next decision"}</button>
        </footer>
      </div>
    </main>
  );
}
