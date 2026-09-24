"use client";

import { useState } from "react";

import { useGuidedExerciseFlow } from "@/components/exercise/useGuidedExerciseFlow";
import {
  getControlStatusTitle,
  getDecisionFromState,
  getOperatingProfile,
  initialState,
  scenario,
  type FoundationAnswer,
  type ScenarioState,
} from "@/components/exercise/customerOrderExceptionScenario";

const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8EB4F0]";

export function SecureCarolinasScenarioExercise() {
  const [state, setState] = useState<ScenarioState>(initialState);
  const flow = useGuidedExerciseFlow({ stepCount: 9, onReset: () => setState(initialState) });
  const { view, stepIndex } = flow;
  const currentControl = stepIndex >= 3 ? scenario.controls[stepIndex - 3] : undefined;
  const currentControlSelection = currentControl ? state.selections[currentControl.letter] : undefined;
  const decision = getDecisionFromState(state);
  const operatingProfile = getOperatingProfile(state);
  const readyForCurrentStep = stepIndex === 0
    ? state.systemsInventory !== null
    : stepIndex === 1
      ? state.ownershipDefined !== null
      : stepIndex === 2
        ? state.businessValue !== null
        : Boolean(currentControlSelection);
  const isFoundationBlocked = (stepIndex === 0 && state.systemsInventory === "NO") || (stepIndex === 1 && state.ownershipDefined === "NO");
  const canGoNext = readyForCurrentStep && !isFoundationBlocked;
  const stepLabel = String(stepIndex + 1).padStart(2, "0");

  const scenarioShellClass = "w-full border border-[#E4E4E7] bg-white text-[#18181B] shadow-[0_24px_70px_rgba(17,19,24,0.08)] p-2 md:p-3 lg:p-4";
  const scenarioInnerClass = "flex min-h-[0] flex-col rounded-[20px] border border-[#E4E4E7] bg-[#FAFAFA]";
  const scenarioWorkingHeaderClass = "grid gap-4 border-b border-[#E4E4E7] px-5 py-5 md:px-6 md:py-6 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,480px)] lg:items-stretch lg:gap-0 lg:px-6 lg:py-6";
  const scenarioHeaderRightPanelClass = "min-w-0 bg-[#F4F4F5] px-5 py-4 md:px-6 lg:flex lg:items-center lg:px-7 lg:py-5";
  const introHeaderClass = "grid gap-4 border-b border-[#E4E4E7] px-5 py-5 md:px-6 md:py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-8 lg:px-6 lg:py-6";
  const scenarioDividerClass = "hidden h-full w-px bg-[#E4E4E7] lg:block";
  const scenarioEyebrowClass = "type-p5 font-bold uppercase tracking-[0.3em] text-[#71717A]";
  const scenarioTitleClass = "text-[#18181B]";
  const scenarioSubtitleClass = "text-[#52525B]";
  const scenarioQuestionClass = "text-[40px] leading-[1.08] tracking-[-0.045em] text-[#18181B] md:text-[48px] lg:text-[52px]";
  const scenarioOptionBaseClass = "border-[#D4D4D8] bg-white text-[#18181B] hover:bg-[#F4F4F5]";
  const scenarioSelectedOptionClass = "border-[#447ACB] bg-white text-[#447ACB] shadow-[inset_0_0_0_1px_rgba(68,122,203,0.12)]";
  const scenarioSurfaceCardClass = "border border-[#E4E4E7] bg-white";
  const scenarioAccentPanelClass = "border border-[#447ACB]/20 bg-white";
  const scenarioFooterButtonClass = "border-[#D4D4D8] bg-white text-[#18181B] hover:bg-[#F4F4F5]";
  const scenarioStageSurfaceClass = "flex min-h-0 flex-1 flex-col bg-[#F4F4F5]";

  const updateFoundation = (answer: Exclude<FoundationAnswer, null>) => {
    if (stepIndex === 0) setState((current) => ({ ...current, systemsInventory: answer }));
    if (stepIndex === 1) setState((current) => ({ ...current, ownershipDefined: answer }));
  };

  const currentStepTitle = stepIndex === 0
    ? scenario.foundation.systemsQuestion
    : stepIndex === 1
      ? scenario.foundation.ownershipQuestion
      : stepIndex === 2
        ? scenario.businessValue.question
        : currentControl?.question ?? "";
  const currentStepLabel = stepIndex === 0 ? "SYSTEMS" : stepIndex === 1 ? "OWNERSHIP" : stepIndex === 2 ? "VALUE" : currentControl?.letter ?? "";
  const currentStepSuffix = stepIndex === 0 ? "Inventory" : stepIndex === 1 ? "Defined" : stepIndex === 2 ? "Target" : currentControl?.name ?? "";
  const currentStepDescriptor = stepIndex === 0
    ? "Enterprise foundation check"
    : stepIndex === 1
      ? "Ownership check"
      : stepIndex === 2
        ? "Business value target"
        : stepIndex === 3
          ? "Decision rights"
          : stepIndex === 4
            ? "Guardrail rules"
            : stepIndex === 5
              ? "Audit trail"
              : stepIndex === 6
                ? "System access"
                : stepIndex === 7
                  ? "Escalation path"
                  : "Outcome ownership";

  if (view === "intro") {
    return (
      <section aria-labelledby="production-readiness-check">
        <div className={scenarioShellClass}>
          <div className={scenarioInnerClass}>
            <header className={introHeaderClass}>
              <div className="min-w-0">
                <div className={scenarioEyebrowClass}>Audience challenge</div>
                <h2 id="production-readiness-check" className={`type-h2 mt-4 ${scenarioTitleClass}`}>{scenario.title}</h2>
                <div className="type-h4 mt-4 text-[#447ACB]">{scenario.name}</div>
                <p className={`type-p3 mt-3 max-w-[980px] ${scenarioSubtitleClass}`}>{scenario.subtitle}</p>
              </div>
              <div className="flex min-h-[72px] w-full max-w-[360px] items-center justify-center rounded-[14px] border border-[#447ACB] bg-[#447ACB] px-6 py-3 text-center text-white lg:justify-self-end lg:self-start">
                <div className="flex flex-col items-center gap-2">
                  <div className="type-p5 font-bold uppercase tracking-[0.24em] text-white/90">Assessment</div>
                  <div className="type-p2 text-white">9 steps · guided challenge</div>
                </div>
              </div>
            </header>
            <main className="flex flex-1 px-5 py-5 md:px-6 md:py-6">
              <div className="flex w-full flex-1 flex-col rounded-[18px] border border-[#DCE6F7] bg-white px-5 py-5 shadow-[0_1px_0_rgba(68,122,203,0.02)] md:px-7 md:py-6 lg:px-8 lg:py-7">
                <div className="text-[2.9rem] font-bold uppercase tracking-[0.16em] text-[#447ACB] lg:text-[3.8rem]">The Challenge</div>
                <p className="mt-4 w-full max-w-none text-[clamp(3.75rem,6vw,6.1rem)] leading-[1.04] tracking-[-0.06em] text-[#18181B]">Test your agent’s controls + the foundation beneath them.</p>
                <button type="button" className={`mt-auto flex min-h-14 w-fit items-center justify-center gap-4 self-end rounded-[12px] border border-[#447ACB] bg-[#447ACB] px-7 type-p2 font-medium text-white transition-colors hover:border-[#2F5EA4] hover:bg-[#2F5EA4] ${focusClass}`} onClick={flow.start}>
                  <span>Start Challenge</span><span aria-hidden="true" className="text-[1.35em] leading-none">→</span>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    );
  }

  if (view === "result") {
    return (
      <section aria-labelledby="production-readiness-check">
        <div className={scenarioShellClass}>
          <div className={scenarioInnerClass}>
            <header className={scenarioWorkingHeaderClass}>
              <div className="min-w-0">
                <div className={scenarioEyebrowClass}>Audience challenge</div>
                <h2 id="production-readiness-check" className={`type-h3 mt-2 lg:whitespace-nowrap ${scenarioTitleClass}`}>{scenario.title}</h2>
                <div className="type-h4 mt-2 text-[#447ACB]">{scenario.name}</div>
                <p className={`type-p4 mt-1 max-w-[820px] ${scenarioSubtitleClass}`}>{scenario.subtitle}</p>
              </div>
              <div className={scenarioDividerClass} aria-hidden="true" />
              <div className={scenarioHeaderRightPanelClass}>
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4D4D8] font-mono text-[0.78rem] leading-none text-[#18181B] lg:h-14 lg:w-14 lg:text-[0.88rem]">FINAL</div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(2.35rem,3vw,3.05rem)] leading-none"><span className="font-light tracking-[-0.055em] text-[#447ACB]">PRODUCTION</span><span className={`font-light tracking-[-0.055em] ${scenarioTitleClass}`}>Decision</span></div>
                    <div className="type-p4 mt-2 text-[#52525B]">{decision}</div>
                  </div>
                </div>
              </div>
            </header>
            <main className={`${scenarioStageSurfaceClass} relative gap-3 px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6`}>
              <div className="-mx-4 grid gap-4 border-b border-[#E4E4E7] px-4 pb-[30px] md:-mx-5 md:px-5 lg:-mx-6 lg:px-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="min-w-0"><div className={scenarioEyebrowClass}>Foundation inventory</div><div className={`mt-2 text-[clamp(1.9rem,2.2vw,2.35rem)] font-light leading-none tracking-[-0.05em] ${scenarioTitleClass}`}>{state.systemsInventory}</div></div>
                <div className="min-w-0"><div className={scenarioEyebrowClass}>Defined ownership</div><div className={`mt-2 text-[clamp(1.9rem,2.2vw,2.35rem)] font-light leading-none tracking-[-0.05em] ${scenarioTitleClass}`}>{state.ownershipDefined}</div></div>
                <div className="min-w-0 sm:col-span-2 lg:col-span-1"><div className={scenarioEyebrowClass}>Selected business value</div><div className={`mt-2 text-[clamp(1.9rem,2.2vw,2.35rem)] font-light leading-none tracking-[-0.05em] ${scenarioTitleClass}`}>{state.businessValue ?? "—"}</div></div>
              </div>
              <div className="grid min-h-0 gap-3 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
                <div className="min-w-0 space-y-3"><div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {scenario.controls.map((control) => {
                    const choice = state.selections[control.letter];
                    const status = choice?.resultingStatus ?? "UNCLEAR";
                    return <div key={control.letter} className={`${scenarioSurfaceCardClass} flex h-full min-h-[188px] flex-col rounded-[16px] p-4`}><div className={scenarioEyebrowClass}>{control.letter} · {control.name}</div><div className={`mt-2 text-[clamp(1.9rem,2.4vw,2.35rem)] font-light leading-[0.95] tracking-[-0.05em] ${scenarioTitleClass}`}>{getControlStatusTitle(status)}</div></div>;
                  })}
                </div></div>
                <div className="min-w-0 flex h-full flex-col gap-4">
                  <div className="grid items-stretch gap-2 sm:grid-cols-3">{operatingProfile.map((item) => <div key={item.field} className="flex h-full min-h-[188px] flex-col items-center justify-center rounded-[16px] border border-[#E4E4E7] bg-white p-4 text-center"><div className={scenarioEyebrowClass}>{item.field}</div><div className={`mt-2 text-[clamp(1.65rem,1.9vw,1.95rem)] font-light leading-none tracking-[-0.05em] ${scenarioTitleClass}`}>{item.value}</div></div>)}</div>
                  <button type="button" className={`absolute bottom-6 right-6 min-h-[44px] w-fit rounded-[12px] border border-[#447ACB] bg-[#447ACB] px-5 py-2 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#447ACB] hover:bg-[#447ACB] ${focusClass}`} onClick={flow.reset}>{scenario.result.resetLabel}</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="production-readiness-check">
      <div className={scenarioShellClass}>
        <div className={scenarioInnerClass}>
          <header className={scenarioWorkingHeaderClass}>
            <div className="min-w-0">
              <div className={scenarioEyebrowClass}>Audience challenge</div>
              <h2 id="production-readiness-check" className={`type-h3 mt-2 lg:whitespace-nowrap ${scenarioTitleClass}`}>{scenario.title}</h2>
              <div className="type-h4 mt-2 text-[#447ACB]">{scenario.name}</div>
              <p className={`type-p4 mt-1 max-w-[820px] ${scenarioSubtitleClass}`}>{scenario.subtitle}</p>
            </div>
            <div className={scenarioDividerClass} aria-hidden="true" />
            <div className={scenarioHeaderRightPanelClass}>
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4D4D8] font-mono text-[1.05rem] text-[#18181B] lg:h-14 lg:w-14 lg:text-[1.15rem]">{stepLabel}</div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[clamp(2.75rem,4vw,3.75rem)] leading-none"><span className="font-light tracking-[-0.055em] text-[#447ACB]">{currentStepLabel}</span><span className={`font-light tracking-[-0.055em] ${scenarioTitleClass}`}>{currentStepSuffix}</span></div>
                  <div className="type-p4 mt-2 text-[#52525B]">{currentStepDescriptor}</div>
                  {stepIndex >= 3 ? <div className="type-p5 mt-2 text-[#447ACB]">{scenario.profileLabel}</div> : null}
                </div>
              </div>
            </div>
          </header>
          <main className={`${scenarioStageSurfaceClass} px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6`}>
            <section className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 py-[25px]"><p className={`${scenarioQuestionClass} max-w-none`}>{currentStepTitle}</p></div>
              {stepIndex === 0 || stepIndex === 1 ? (
                <fieldset className="flex min-h-0 flex-1 flex-col">
                  <div className="grid gap-3 sm:grid-cols-2" aria-label={stepIndex === 0 ? "Systems inventory answer" : "Ownership answer"}>
                    {(["YES", "NO"] as const).map((answer) => {
                      const selected = (stepIndex === 0 ? state.systemsInventory : state.ownershipDefined) === answer;
                      return <button key={answer} type="button" aria-pressed={selected} className={`flex min-h-[126px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[136px] lg:p-5 ${focusClass} ${selected ? scenarioSelectedOptionClass : scenarioOptionBaseClass}`} onClick={() => updateFoundation(answer)}><span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#447ACB]" : "text-[#71717A]"}`}>Foundation answer</span><span className={`type-h5 ${selected ? "text-[#447ACB]" : "text-[#18181B]"}`}>{answer}</span></button>;
                    })}
                  </div>
                  {(stepIndex === 0 ? state.systemsInventory : state.ownershipDefined) === "NO" ? <div className="mt-4 rounded-[18px] border border-[#B12E2E]/20 bg-[#FDECEC] px-4 py-4"><div className="text-[22px] font-bold uppercase leading-none tracking-[0.08em] text-[#F2A3A3]">FOUNDATION BLOCKER</div><p className="mt-2 text-[48px] font-semibold leading-none text-[#18181B]">NO GO</p><p className="mt-2 text-[26px] leading-[1.35] text-[#52525B]">{stepIndex === 0 ? scenario.foundation.systemsNoGoBody : scenario.foundation.ownershipNoGoBody}</p></div> : null}
                </fieldset>
              ) : stepIndex === 2 ? (
                <fieldset className="flex min-h-0 flex-1 flex-col"><div className="grid gap-3 md:grid-cols-3" aria-label="Business value targets">{scenario.businessValue.options.map((value) => { const selected = state.businessValue === value; return <button key={value} type="button" aria-pressed={selected} className={`flex min-h-[126px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[136px] lg:p-5 ${focusClass} ${selected ? scenarioSelectedOptionClass : scenarioOptionBaseClass}`} onClick={() => setState((current) => ({ ...current, businessValue: value }))}><span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#447ACB]" : "text-[#71717A]"}`}>Value target</span><span className={`type-h5 ${selected ? "text-[#447ACB]" : "text-[#18181B]"}`}>{value}</span></button>; })}</div></fieldset>
              ) : currentControl ? (
                <fieldset className="flex min-h-0 flex-1 flex-col">
                  <div className="grid gap-3 md:grid-cols-3" aria-label={`${currentControl.name} choices`}>{currentControl.choices.map((choice) => { const selected = currentControlSelection?.id === choice.id; return <button key={choice.id} type="button" aria-pressed={selected} className={`flex min-h-[132px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[144px] lg:p-5 ${focusClass} ${selected ? scenarioSelectedOptionClass : scenarioOptionBaseClass}`} onClick={() => setState((current) => ({ ...current, selections: { ...current.selections, [currentControl.letter]: choice } }))}><span className={`text-[24px] font-bold leading-[1.15] tracking-[-0.01em] ${selected ? "text-[#447ACB]" : "text-[#18181B]"}`}>{choice.label}</span><span className={`text-[22px] leading-[1.3] ${selected ? "text-[#447ACB]" : "text-[#52525B]"}`}>{choice.description}</span></button>; })}</div>
                  {currentControlSelection ? <div className={`mt-4 rounded-[18px] px-4 py-4 ${scenarioAccentPanelClass}`}><div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#447ACB]">Resulting status</div><div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3"><div className="type-h5 text-[#18181B]">{currentControlSelection.resultingStatus}</div><p className="type-p4 max-w-[780px] text-[#52525B]">{currentControlSelection.tradeoff}</p></div></div> : null}
                </fieldset>
              ) : null}
              <div className="mt-4 flex flex-wrap justify-between gap-3 border-t border-[#E4E4E7] pt-4">
                <button type="button" className={`min-h-[40px] border px-4 py-2 type-p5 font-bold uppercase tracking-[0.16em] text-[#18181B] transition-colors ${scenarioFooterButtonClass} ${focusClass} ${flow.isFirstStep ? "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[#18181B]" : ""}`} onClick={flow.back} disabled={flow.isFirstStep}>Back</button>
                <button type="button" disabled={!canGoNext} className={`min-h-[40px] border px-4 py-2 type-p5 font-bold uppercase tracking-[0.16em] transition-colors ${focusClass} ${canGoNext ? "border-[#447ACB] bg-[#447ACB] text-white hover:bg-[#447ACB]" : "cursor-not-allowed border-[#D4D4D8] bg-white text-[#A1A1AA]"}`} onClick={flow.next}>{isFoundationBlocked ? "FOUNDATION BLOCKER" : stepIndex === 2 ? "Continue to A.G.E.N.T.S." : flow.isLastStep ? "See Production Decision" : "Next Step"}</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
