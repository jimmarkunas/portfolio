"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { BarChart3, Check, FileText, Settings, UserRound, type LucideIcon } from "lucide-react";
import { useGuidedExerciseFlow } from "@/components/exercise/useGuidedExerciseFlow";
import { pdma2026ExerciseContent, type PdmaExerciseAuthority, type PdmaExerciseControlChoice, type PdmaExerciseValue } from "@/content/pdma2026";
import { embeddedExerciseCopy as copy } from "../../templateContent";

type ExerciseState = {
  initiative: string;
  value: PdmaExerciseValue | null;
  authority: PdmaExerciseAuthority | null;
  controls: Partial<Record<string, PdmaExerciseControlChoice>>;
};

type Section = 0 | 1 | 2 | 3;

const { title, subtitle, values, authority: authorityLevels, controls } = pdma2026ExerciseContent;
const STEP_COUNT = 2 + controls.length;
const sectionIcons: readonly LucideIcon[] = [BarChart3, UserRound, Settings, FileText];
const initialState: ExerciseState = { initiative: copy.initiativeDefault, value: null, authority: null, controls: {} };

function Choice({ selected, onSelect, label, detail, marker }: { selected: boolean; onSelect: () => void; label: string; detail: string; marker?: string }) {
  return <button type="button" role="radio" aria-checked={selected} onClick={onSelect} className={`pdmat-xapp__choice${selected ? " is-selected" : ""}`}>
    <i className="pdmat-xapp__radio" aria-hidden="true" />
    {marker && <span className="pdmat-xapp__choice-marker">{marker}</span>}
    <strong>{label}</strong>
    <span>{detail}</span>
  </button>;
}

function Panel({ label, prompt, children }: { label: string; prompt: string; children: ReactNode }) {
  return <>
    <header className="pdmat-xapp__panel-head"><span>{label}</span><strong>{prompt}</strong></header>
    {children}
  </>;
}

/** Live PDMA productization exercise, rebuilt as a contained app body for EmbeddedAppFrame. */
export function ProductizationExerciseApp() {
  const [state, setState] = useState<ExerciseState>(initialState);
  const flow = useGuidedExerciseFlow({ stepCount: STEP_COUNT, onReset: () => setState(initialState) });
  const { view, stepIndex } = flow;
  const control = stepIndex >= 2 ? controls[stepIndex - 2] : undefined;
  const decidedControls = controls.filter(({ letter }) => state.controls[letter]).length;
  const ready = stepIndex === 0 ? state.value !== null : stepIndex === 1 ? state.authority !== null : Boolean(control && state.controls[control.letter]);
  const initiative = state.initiative.trim() || copy.initiativeDefault;

  const section: Section = view === "result" ? 3 : view === "intro" ? 0 : stepIndex === 0 ? 0 : stepIndex === 1 ? 1 : 2;
  const reachable: readonly boolean[] = [true, state.value !== null, state.authority !== null, decidedControls === controls.length];
  const complete: readonly boolean[] = [state.value !== null, state.authority !== null, decidedControls === controls.length, view === "result"];
  const progress = view === "result" ? 100 : view === "intro" ? 0 : ((stepIndex + (ready ? 1 : 0)) / STEP_COUNT) * 100;
  const stats = useMemo(() => [
    state.value ?? copy.unresolved,
    state.authority ?? copy.unresolved,
    `${decidedControls} / ${controls.length}`,
    view === "result" ? copy.outputTitle : copy.unresolved,
  ], [decidedControls, state.authority, state.value, view]);

  const goToSection = (target: Section) => {
    if (!reachable[target]) return;
    if (target === 3) { flow.setView("result"); return; }
    const firstOpenControl = controls.findIndex(({ letter }) => !state.controls[letter]);
    flow.setStepIndex(target === 2 ? 2 + Math.max(0, firstOpenControl) : target);
    flow.setView("assessment");
  };

  let panel: ReactNode;
  if (view === "intro") {
    panel = <Panel label={copy.initiativeLabel} prompt={copy.guideLead}>
      <ol className="pdmat-xapp__guide">{copy.sections.map((item) => <li key={item.number}><span>{item.number}</span><strong>{item.label}</strong><p>{item.body}</p></li>)}</ol>
    </Panel>;
  } else if (view === "result") {
    panel = <Panel label={copy.outputTitle} prompt={initiative}>
      <div className="pdmat-xapp__brief">
        <dl className="pdmat-xapp__brief-meta">
          <div><dt>{copy.sections[0].label}</dt><dd>{state.value}</dd></div>
          <div><dt>{copy.sections[1].label}</dt><dd>{state.authority}</dd></div>
        </dl>
        <ol className="pdmat-xapp__brief-controls" aria-label={copy.outputLabel}>
          {controls.map((item) => <li key={item.letter}><b>{item.letter}</b><strong>{item.name}</strong><span>{state.controls[item.letter]?.summary ?? copy.unresolved}</span></li>)}
        </ol>
      </div>
    </Panel>;
  } else if (stepIndex === 0) {
    panel = <Panel label={copy.valueStep.label} prompt={copy.valueStep.prompt}>
      <div className="pdmat-xapp__choices" role="radiogroup" aria-label={copy.valueStep.prompt}>
        {values.map((value, index) => <Choice key={value} selected={state.value === value} onSelect={() => setState((current) => ({ ...current, value }))} marker={`0${index + 1}`} label={value} detail={copy.valueStep.questions[index]} />)}
      </div>
    </Panel>;
  } else if (stepIndex === 1) {
    panel = <Panel label={copy.authorityStep.label} prompt={copy.authorityStep.prompt}>
      <div className="pdmat-xapp__choices is-compact" role="radiogroup" aria-label={copy.authorityStep.prompt}>
        {authorityLevels.map((level, index) => <Choice key={level} selected={state.authority === level} onSelect={() => setState((current) => ({ ...current, authority: level }))} marker={`0${index + 1}`} label={level} detail={copy.authorityStep.descriptions[index]} />)}
      </div>
    </Panel>;
  } else if (control) {
    panel = <Panel label={`${copy.controlsLabel} · ${control.letter} — ${control.name}`} prompt={control.question}>
      <div className="pdmat-xapp__choices" role="radiogroup" aria-label={control.question}>
        {control.choices.map((choice, index) => <Choice key={choice.id} selected={state.controls[control.letter]?.id === choice.id} onSelect={() => setState((current) => ({ ...current, controls: { ...current.controls, [control.letter]: choice } }))} marker={`0${index + 1}`} label={choice.label} detail={choice.summary} />)}
      </div>
    </Panel>;
  }

  return <div className="pdmat-xapp">
    <nav className="pdmat-xapp__sidebar" aria-label={copy.brand}>
      <p className="pdmat-xapp__brand"><img src="/pdma2026/slide-01/canonical-asterisk.svg" alt="" /><span>{copy.brand}</span></p>
      <ul>{copy.sections.map((item, index) => {
        const Icon = sectionIcons[index];
        const target = index as Section;
        return <li key={item.number}><button type="button" onClick={() => goToSection(target)} disabled={!reachable[index]} aria-current={section === index ? "step" : undefined} className={`pdmat-xapp__nav${section === index ? " is-active" : ""}`}>
          <Icon aria-hidden="true" size={22} strokeWidth={1.8} /><span>{item.label}</span>{complete[index] && <Check className="pdmat-xapp__nav-done" aria-hidden="true" size={18} strokeWidth={2.4} />}
        </button></li>;
      })}</ul>
    </nav>

    <div className="pdmat-xapp__main">
      <header className="pdmat-xapp__header">
        <div><h3>{title}</h3><p>{subtitle}</p></div>
        <label className="pdmat-xapp__initiative"><span>{copy.initiativeLabel}</span><input value={state.initiative} placeholder={copy.initiativePlaceholder} onChange={(event) => setState((current) => ({ ...current, initiative: event.target.value }))} /></label>
      </header>

      <ul className="pdmat-xapp__stats">{copy.sections.map((item, index) => {
        const Icon = sectionIcons[index];
        return <li key={item.number} className={section === index ? "is-active" : undefined}>
          <span className="pdmat-xapp__stat-icon"><Icon aria-hidden="true" size={26} strokeWidth={1.8} /></span>
          <span className="pdmat-xapp__stat-copy"><span>{item.label}</span><strong>{stats[index]}</strong></span>
        </li>;
      })}</ul>

      <section className="pdmat-xapp__panel" aria-live="polite">{panel}</section>

      <footer className="pdmat-xapp__footer">
        {view === "result"
          ? <button type="button" className="pdmat-xapp__button" onClick={flow.reset}>{copy.reset}</button>
          : <button type="button" className="pdmat-xapp__button" onClick={flow.back} disabled={view === "intro" || flow.isFirstStep}>{copy.back}</button>}
        <span className="pdmat-xapp__progress">{view === "assessment" ? copy.decisionLabel(stepIndex + 1, STEP_COUNT) : view === "result" ? copy.decisionLabel(STEP_COUNT, STEP_COUNT) : copy.decisionLabel(0, STEP_COUNT)}<i aria-hidden="true" style={{ "--progress": `${progress}%` } as CSSProperties}><b /></i></span>
        {view === "intro" && <button type="button" className="pdmat-xapp__button is-primary" onClick={flow.start}>{copy.start}</button>}
        {view === "assessment" && <button type="button" className="pdmat-xapp__button is-primary" onClick={flow.next} disabled={!ready}>{flow.isLastStep ? copy.generate : copy.next}</button>}
        {view === "result" && <span className="pdmat-xapp__button is-placeholder" aria-hidden="true" />}
      </footer>
    </div>
  </div>;
}
