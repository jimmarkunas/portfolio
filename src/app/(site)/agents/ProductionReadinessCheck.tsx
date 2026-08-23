"use client"

import { useState } from "react"

import { secureCarolinas2026Copy } from "@/content/secure-carolinas-2026"
import { agentsContent } from "@/content/site/agents"

type ProductionReadinessCheckVariant = "default" | "presentation" | "scenario"

type ProductionReadinessCheckProps = {
  variant?: ProductionReadinessCheckVariant
  scenario?: ScenarioConfig
}

type Status = "DEFINED" | "PARTIAL" | "UNCLEAR"
type View = "intro" | "assessment" | "result"
type FoundationAnswer = "YES" | "NO" | null
type BusinessValue = "Increase ROI" | "Decrease Cost" | "Increase Operational Efficiency"
type Decision = {
  title: "GO" | "GO WITH CONDITIONS" | "NO GO" | "INCOMPLETE"
  description: string
}

type ScenarioConfig = typeof secureCarolinas2026Copy.scenarios.customerOrderException

const statuses: readonly Status[] = ["DEFINED", "PARTIAL", "UNCLEAR"]
const businessValues: readonly BusinessValue[] = ["Increase ROI", "Decrease Cost", "Increase Operational Efficiency"]
const totalSteps = 9
const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8EB4F0]"
const selectedOptionClass = "border-[#8EB4F0] bg-[#447ACB]/20 text-white shadow-[inset_0_0_0_1px_rgba(142,180,240,0.15)]"

type GateInputs = {
  systemsInventory: FoundationAnswer,
  ownershipDefined: FoundationAnswer,
  selectedValues: BusinessValue[],
  selectedStatuses: Record<string, Status>,
}

function evaluateGateTitle({
  systemsInventory,
  ownershipDefined,
  selectedValues,
  selectedStatuses,
}: GateInputs) {
  const agentAnswers = agentsContent.questions.map(([letter]) => selectedStatuses[letter])

  if (
    systemsInventory === null ||
    ownershipDefined === null ||
    selectedValues.length === 0 ||
    agentAnswers.some((answer) => answer === undefined)
  ) {
    return "INCOMPLETE" as const
  }

  if (systemsInventory === "NO" || ownershipDefined === "NO" || agentAnswers.includes("UNCLEAR")) {
    return "NO GO" as const
  }

  if (agentAnswers.includes("PARTIAL")) return "GO WITH CONDITIONS" as const

  return "GO" as const
}

function getResult(
  systemsInventory: FoundationAnswer,
  ownershipDefined: FoundationAnswer,
  selectedValues: BusinessValue[],
  selectedStatuses: Record<string, Status>,
) : Decision {
  const title = evaluateGateTitle({ systemsInventory, ownershipDefined, selectedValues, selectedStatuses })

  if (title === "INCOMPLETE") return { title, description: "Complete all nine readiness steps to check production readiness." }
  if (title === "NO GO") return { title, description: "Resolve the foundation or control gaps before production." }
  if (title === "GO WITH CONDITIONS") return { title, description: "Complete the partial controls and document the conditions before production." }
  return { title, description: "The foundation is ready and all six A.G.E.N.T.S. controls are defined for production." }
}

function ProductionReadinessCheckDefault({ variant = "default" }: ProductionReadinessCheckProps) {
  const isPresentation = variant === "presentation"
  const shellPadding = isPresentation ? "p-2 md:p-3 lg:p-4" : "p-3 md:p-5 lg:p-6"
  const shellMinHeight = isPresentation ? "min-h-[520px] md:min-h-[560px] lg:min-h-[600px]" : "min-h-[620px] md:min-h-[640px] lg:min-h-[700px]"
  const innerPadding = isPresentation ? "px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6" : "px-5 py-6 md:px-7 md:py-8"
  const headerMinHeight = isPresentation ? "min-h-[88px] gap-3 px-4 py-4 md:px-5" : "min-h-[112px] gap-4 px-5 py-5 md:px-7"
  const introGridClass = isPresentation ? "grid flex-1 gap-5 md:grid-cols-[minmax(0,1fr)_280px] md:items-center" : "grid flex-1 gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-center"
  const introCardClass = isPresentation ? "border border-white/10 bg-white/[0.03] p-4 md:p-5" : "border border-white/10 bg-white/[0.03] p-5"
  const stepOuterClass = isPresentation ? "mb-6 flex flex-wrap items-center gap-3 md:mb-7" : "mb-8 flex flex-wrap items-center gap-4"
  const stepNumberClass = isPresentation ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs" : "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-sm"
  const optionCardClass = isPresentation ? "flex min-h-[122px] flex-col justify-between border p-4 text-left transition-colors" : "flex min-h-[140px] flex-col justify-between border p-5 text-left transition-colors"
  const optionCardClassAssessment = isPresentation ? "group relative flex min-h-[108px] flex-col justify-between border p-4 text-left transition-colors" : "group relative flex min-h-[120px] flex-col justify-between border p-5 text-left transition-colors"
  const footerClass = isPresentation ? "mt-6 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4" : "mt-8 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5"
  const stepHeaderClass = isPresentation
    ? "mb-4 grid grid-cols-[minmax(0,1fr)_1fr] items-stretch"
    : "mb-8 grid grid-cols-[minmax(0,1fr)_1fr] items-stretch"
  const stepHeaderLeftClass = isPresentation
    ? "flex min-w-0 items-center gap-3 pr-4"
    : "flex min-w-0 items-center gap-4 pr-5"
  const stepHeaderRightClass = isPresentation
    ? "flex min-w-0 items-center border-l border-white/15 pl-4"
    : "flex min-w-0 items-center border-l border-white/15 pl-5"

  const [view, setView] = useState<View>("intro")
  const [stepIndex, setStepIndex] = useState(0)
  const [systemsInventory, setSystemsInventory] = useState<FoundationAnswer>(null)
  const [ownershipDefined, setOwnershipDefined] = useState<FoundationAnswer>(null)
  const [selectedValues, setSelectedValues] = useState<BusinessValue[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<Record<string, Status>>({})
  const currentQuestion = stepIndex >= 3 ? agentsContent.questions[stepIndex - 3] : undefined
  const result = getResult(systemsInventory, ownershipDefined, selectedValues, selectedStatuses)

  const reset = () => {
    setView("intro")
    setStepIndex(0)
    setSystemsInventory(null)
    setOwnershipDefined(null)
    setSelectedValues([])
    setSelectedStatuses({})
  }

  const start = () => {
    setStepIndex(0)
    setSystemsInventory(null)
    setOwnershipDefined(null)
    setSelectedValues([])
    setSelectedStatuses({})
    setView("assessment")
  }

  const hasCurrentAnswer = stepIndex === 0
    ? systemsInventory !== null
    : stepIndex === 1
      ? ownershipDefined !== null
      : stepIndex === 2
        ? selectedValues.length > 0
        : currentQuestion !== undefined && selectedStatuses[currentQuestion[0]] !== undefined

  const selectFoundationAnswer = (answer: Exclude<FoundationAnswer, null>) => {
    if (stepIndex === 0) setSystemsInventory(answer)
    if (stepIndex === 1) setOwnershipDefined(answer)
  }

  return (
    <section aria-labelledby="production-readiness-check">
      <div className={`w-full border border-white/10 bg-[#222222] text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] ${shellPadding}`}>
        <div className={`flex flex-col rounded-[20px] border border-white/10 bg-[#222222] ${shellMinHeight}`}>
          <header className={`flex flex-col justify-center border-b border-white/10 sm:flex-row sm:items-center sm:justify-between ${headerMinHeight}`}>
            <div>
              <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">
                {view === "intro" ? "Readiness Console" : view === "assessment" ? "Assessment Active" : "Assessment Complete"}
              </div>
              <h2 id="production-readiness-check" className="type-h3 mt-2 text-white">A.G.E.N.T.S. Production Readiness Check</h2>
            </div>
            {view === "assessment" ? (
              <div className="border border-white/10 bg-black/25 px-4 py-3 sm:text-right">
                <div className="type-p5 uppercase tracking-[0.2em] text-[#9CA3AF]">Current step</div>
                <div className="type-p2 mt-1 text-white">Step {stepIndex + 1} of {totalSteps}</div>
              </div>
            ) : null}
          </header>

          <main className={`flex flex-1 flex-col ${innerPadding}`}>
            {view === "intro" ? (
              <section className={introGridClass}>
                <div>
                  <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#8EB4F0]">Interactive assessment</div>
                  <p className="type-h5 mt-4 max-w-[700px] text-white">Assess whether your AI agent is production-ready.</p>
                  <p className="type-p3 mt-4 max-w-[700px] text-[#AEB5C0]">Start with the enterprise foundation, define the business value, then assess each A.G.E.N.T.S. control.</p>
                </div>
                <div className={introCardClass}>
                  <div className="type-p5 uppercase tracking-[0.28em] text-[#9CA3AF]">Assessment format</div>
                  <div className="type-p2 mt-3 text-white">9 steps · guided review</div>
                  <button type="button" className={`mt-6 flex min-h-14 w-full items-center justify-center border border-white bg-white px-5 type-p4 font-medium text-black transition-colors hover:bg-[#E6E9EE] ${focusClass}`} onClick={start}>
                    Start Assessment
                  </button>
                </div>
              </section>
            ) : view === "assessment" ? (
              <section aria-labelledby="current-step-title" className="flex flex-1 flex-col">
                {stepIndex === 0 || stepIndex === 1 ? (
                  <fieldset>
                    <div className={stepHeaderClass}>
                      <div className={stepHeaderLeftClass}>
                        <div className={stepNumberClass}>{String(stepIndex + 1).padStart(2, "0")}</div>
                        <span className="type-h4 text-[#8EB4F0]">{stepIndex === 0 ? "SYSTEMS" : "OWNERSHIP"}</span>
                        <span className="type-h4 text-white">{stepIndex === 0 ? "Inventory" : "Defined"}</span>
                      </div>
                      <div className={stepHeaderRightClass}>
                        <span id="current-step-title" className="type-h3 min-w-0 text-white">
                          {stepIndex === 0
                            ? "Did you inventory your current systems and tools enterprise-wide?"
                            : "Do these systems and tools have defined owners enterprise-wide?"}
                        </span>
                      </div>
                    </div>
                    <p className="type-p3 mt-5 max-w-3xl text-[#D1D5DB]">Answer this foundation question before evaluating the A.G.E.N.T.S. controls.</p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Foundation answer">
                      {(["YES", "NO"] as const).map((answer) => {
                        const selected = (stepIndex === 0 ? systemsInventory : ownershipDefined) === answer
                        return (
                          <button key={answer} type="button" aria-pressed={selected} className={`${optionCardClass} ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`} onClick={() => selectFoundationAnswer(answer)}>
                            <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Foundation answer</span>
                            <span className="type-h5">{answer}</span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>
                ) : stepIndex === 2 ? (
                  <fieldset>
                    <div className={stepHeaderClass}>
                      <div className={stepHeaderLeftClass}>
                        <div className={stepNumberClass}>{String(stepIndex + 1).padStart(2, "0")}</div>
                        <span className="type-h4 text-[#8EB4F0]">VALUE</span>
                        <span className="type-h4 text-white">Target</span>
                      </div>
                      <div className={stepHeaderRightClass}>
                        <span id="current-step-title" className="type-h3 min-w-0 text-white">
                          What business value are you working on?
                        </span>
                      </div>
                    </div>
                    <p className="type-p3 mt-5 max-w-3xl text-[#D1D5DB]">Select one or more value targets. This is required context, not a score.</p>
                    <div className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Business value targets">
                      {businessValues.map((value) => {
                        const selected = selectedValues.includes(value)
                        return (
                          <button key={value} type="button" aria-pressed={selected} className={`${optionCardClass} ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`} onClick={() => setSelectedValues((current) => selected ? current.filter((item) => item !== value) : [...current, value])}>
                            <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Value target</span>
                            <span className="type-h5">{value}</span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>
                ) : currentQuestion ? (
                  <fieldset>
                    <div className={stepHeaderClass}>
                      <div className={stepHeaderLeftClass}>
                        <div className={stepNumberClass}>{String(stepIndex + 1).padStart(2, "0")}</div>
                        <span className="type-h4 text-[#8EB4F0]">{currentQuestion[0]}</span>
                        <span className="type-h4 text-white">{currentQuestion[1]}</span>
                      </div>
                      <div className={stepHeaderRightClass}>
                        <span id="current-step-title" className="type-h3 min-w-0 text-white">{currentQuestion[2]}</span>
                      </div>
                    </div>
                    <p className="type-p3 mt-5 max-w-3xl text-[#D1D5DB]">{currentQuestion[3]}</p>
                    <div className="mt-8 grid gap-3 md:grid-cols-3" aria-label={`${currentQuestion[1]} status`}>
                      {statuses.map((status) => {
                        const selected = selectedStatuses[currentQuestion[0]] === status
                        return (
                          <button key={status} type="button" aria-pressed={selected} className={`${optionCardClassAssessment} ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`} onClick={() => setSelectedStatuses((current) => ({ ...current, [currentQuestion[0]]: status }))}>
                            <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Status option</span>
                            <span className="type-h5">{status}</span>
                            <span className={`type-p4 ${selected ? "text-[#D1D5DB]" : "text-[#AEB5C0]"}`}>{status === "DEFINED" ? "The control is explicit and ready to operate." : status === "PARTIAL" ? "The control exists but needs completion." : "The control or its owner is not clear."}</span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>
                ) : null}

                <div className={footerClass}>
                  <button type="button" className={`min-h-[44px] border border-white/20 px-4 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass}`} onClick={() => stepIndex > 0 ? setStepIndex((current) => current - 1) : setView("intro")}>Back</button>
                  <button type="button" disabled={!hasCurrentAnswer} className={`min-h-[44px] border px-5 type-p5 font-bold uppercase tracking-[0.16em] transition-colors ${focusClass} ${hasCurrentAnswer ? "border-white bg-white text-black hover:bg-[#E6E9EE]" : "cursor-not-allowed border-white/10 bg-white/5 text-white/35"}`} onClick={() => stepIndex < totalSteps - 1 ? setStepIndex((current) => current + 1) : setView("result")}>
                    {stepIndex === totalSteps - 1 ? "View Result" : "Next Step"}
                  </button>
                </div>
              </section>
            ) : (
              <section className="flex flex-1 flex-col">
                <div className="mb-8 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 font-mono text-sm">R</div><div className="h-px w-12 bg-white/10" /><div className="type-p5 uppercase tracking-[0.28em] text-[#9CA3AF]">Results</div></div>
                <div className="border border-[#447ACB]/60 bg-[#447ACB]/15 px-5 py-6 md:px-7 md:py-7" role="status" aria-live="polite"><div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Readiness result</div><p className="type-h2 mt-2 text-white">{result.title}</p><p className="type-p3 mt-3 max-w-[760px] text-[#D1D5DB]">{result.description}</p></div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="border border-white/10 bg-white/[0.03] px-4 py-4"><div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Foundation inventory</div><div className="type-p4 mt-1 text-white">{systemsInventory}</div></div>
                  <div className="border border-white/10 bg-white/[0.03] px-4 py-4"><div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Defined ownership</div><div className="type-p4 mt-1 text-white">{ownershipDefined}</div></div>
                </div>
                <div className="mt-3 border border-white/10 bg-white/[0.03] px-4 py-4"><div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Business value</div><div className="type-p4 mt-1 text-white">{selectedValues.join(" · ")}</div></div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {agentsContent.questions.map(([letter, name, question]) => <div key={letter} className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.03] px-4 py-4"><div className="min-w-0"><div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">{letter} · {name}</div><div className="type-p4 mt-1 text-white">{question}</div></div><div className="shrink-0 type-p5 font-bold uppercase tracking-[0.12em] text-[#8EB4F0]">{selectedStatuses[letter]}</div></div>)}
                </div>
                <button type="button" className={`mt-8 min-h-[44px] self-start border border-white/25 px-5 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass}`} onClick={reset}>Reassess</button>
              </section>
            )}
          </main>
        </div>
      </div>
    </section>
  )
}

type ScenarioControl = typeof secureCarolinas2026Copy.scenarios.customerOrderException.controls[number]
type ScenarioControlLetter = ScenarioControl["letter"]
type ScenarioControlChoice = ScenarioControl["choices"][number]
type ScenarioBusinessValue = typeof secureCarolinas2026Copy.scenarios.customerOrderException.businessValue.options[number]
type OperatingProfileField = "AUTONOMY" | "HUMAN LOAD" | "OPERATIONAL RISK"
type OperatingProfileLevel = "LOW" | "MODERATE" | "HIGH"
type ScenarioProfileChoice = {
  autonomy?: OperatingProfileLevel
  humanLoad?: OperatingProfileLevel
  operationalRisk?: OperatingProfileLevel
}

type ScenarioState = {
  systemsInventory: FoundationAnswer
  ownershipDefined: FoundationAnswer
  businessValue: ScenarioBusinessValue | null
  selections: Partial<Record<ScenarioControlLetter, ScenarioControlChoice>>
}

const scenario = secureCarolinas2026Copy.scenarios.customerOrderException
const levelValue: Record<OperatingProfileLevel, number> = { LOW: 0, MODERATE: 1, HIGH: 2 }
const levelLabel: Record<number, OperatingProfileLevel> = { 0: "LOW", 1: "MODERATE", 2: "HIGH" }
const profileFieldKeyMap: Record<OperatingProfileField, "autonomy" | "humanLoad" | "operationalRisk"> = {
  AUTONOMY: "autonomy",
  "HUMAN LOAD": "humanLoad",
  "OPERATIONAL RISK": "operationalRisk",
}

function getControlStatusTitle(status: Status) {
  if (status === "DEFINED") return "DEFINED"
  if (status === "PARTIAL") return "PARTIAL"
  return "UNCLEAR"
}

function getDecisionFromState(state: ScenarioState) {
  if (state.systemsInventory === null || state.ownershipDefined === null || state.businessValue === null) {
    return "INCOMPLETE" as const
  }

  if (state.systemsInventory === "NO" || state.ownershipDefined === "NO") {
    return "NO GO" as const
  }

  const statuses = scenario.controls.map((control) => state.selections[control.letter]?.resultingStatus)
  if (statuses.some((status) => status === undefined)) return "INCOMPLETE" as const
  if (statuses.includes("UNCLEAR")) return "NO GO" as const
  if (statuses.includes("PARTIAL")) return "GO WITH CONDITIONS" as const
  return "GO" as const
}

function getOperatingProfile(state: ScenarioState) {
  return scenario.profileFields.map((field) => {
    const key = profileFieldKeyMap[field]
    const samples = scenario.controls
      .map((control) => {
        const choice = state.selections[control.letter]
        if (!choice) return undefined
        return (choice as ScenarioProfileChoice)[key]
      })
      .filter((value): value is OperatingProfileLevel => value !== undefined)

    if (samples.length === 0) {
      return { field, value: "—" as const, average: null }
    }

    const average = samples.reduce((sum, level) => sum + levelValue[level], 0) / samples.length
    const rounded = Math.round(average)
    return {
      field,
      value: levelLabel[Math.max(0, Math.min(2, rounded))],
      average,
    }
  })
}

function ScenarioProductionReadinessCheck() {
  const totalSteps = 9
  const [view, setView] = useState<"intro" | "assessment" | "result">("intro")
  const [stepIndex, setStepIndex] = useState(0)
  const [state, setState] = useState<ScenarioState>({
    systemsInventory: null,
    ownershipDefined: null,
    businessValue: null,
    selections: {},
  })

  const currentControl = stepIndex >= 3 ? scenario.controls[stepIndex - 3] : undefined
  const currentControlSelection = currentControl ? state.selections[currentControl.letter] : undefined
  const decision = getDecisionFromState(state)
  const operatingProfile = getOperatingProfile(state)
  const readyForCurrentStep =
    stepIndex === 0
      ? state.systemsInventory !== null
      : stepIndex === 1
        ? state.ownershipDefined !== null
        : stepIndex === 2
          ? state.businessValue !== null
          : Boolean(currentControlSelection)

  const isFoundationBlocked = (stepIndex === 0 && state.systemsInventory === "NO") || (stepIndex === 1 && state.ownershipDefined === "NO")

  const reset = () => {
    setView("intro")
    setStepIndex(0)
    setState({
      systemsInventory: null,
      ownershipDefined: null,
      businessValue: null,
      selections: {},
    })
  }

  const start = () => {
    setView("assessment")
    setStepIndex(0)
  }

  const canGoNext = readyForCurrentStep && !isFoundationBlocked
  const stepLabel = String(stepIndex + 1).padStart(2, "0")
  const stepBoxValue = view === "result" ? "FINAL" : `${stepIndex + 1}/${totalSteps}`

  const updateFoundation = (answer: Exclude<FoundationAnswer, null>) => {
    if (stepIndex === 0) {
      setState((current) => ({ ...current, systemsInventory: answer }))
      return
    }

    if (stepIndex === 1) {
      setState((current) => ({ ...current, ownershipDefined: answer }))
    }
  }

  const currentStepTitle =
    stepIndex === 0
      ? scenario.foundation.systemsQuestion
      : stepIndex === 1
        ? scenario.foundation.ownershipQuestion
        : stepIndex === 2
          ? scenario.businessValue.question
          : currentControl
            ? currentControl.question
            : ""

  const currentStepLabel =
    stepIndex === 0
      ? "SYSTEMS"
      : stepIndex === 1
        ? "OWNERSHIP"
        : stepIndex === 2
          ? "VALUE"
          : currentControl?.letter ?? ""

  const currentStepSuffix =
    stepIndex === 0
      ? "Inventory"
      : stepIndex === 1
        ? "Defined"
        : stepIndex === 2
          ? "Target"
          : currentControl?.name ?? ""

  const onNext = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex((current) => current + 1)
      return
    }

    setView("result")
  }

  if (view === "intro") {
    return (
      <section aria-labelledby="production-readiness-check">
        <div className="w-full border border-white/10 bg-[#222222] p-2 text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] md:p-3 lg:p-4">
          <div className="flex min-h-0 flex-col rounded-[20px] border border-white/20 bg-[#222222]">
            <header className="grid gap-4 border-b border-white/20 px-5 py-5 md:px-6 md:py-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-6">
              <div className="min-w-0">
                <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#AEB5C0]">Audience challenge</div>
                <h2 id="production-readiness-check" className="type-h2 mt-4 text-white">{scenario.title}</h2>
                <div className="type-h4 mt-4 text-[#447ACB]">{scenario.name}</div>
                <p className="type-p3 mt-3 max-w-[980px] text-[#AEB5C0]">{scenario.subtitle}</p>
              </div>
              <div className="rounded-[12px] border border-[#447ACB] bg-[#447ACB] px-6 py-5 text-white lg:text-right">
                <div className="type-p5 font-bold uppercase tracking-[0.24em] text-white/90">Assessment</div>
                <div className="type-p1 mt-3 text-white">9 steps · guided challenge</div>
              </div>
            </header>

            <main className="flex flex-1 px-5 py-5 md:px-6 md:py-6">
              <div className="flex min-h-[360px] w-full flex-col rounded-[18px] border border-white/25 bg-[#222222] px-5 py-5 md:px-7 md:py-6 lg:min-h-[390px] lg:px-8 lg:py-7">
                <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#447ACB]">The Challenge</div>
                <p className="type-h2 mt-6 w-full max-w-none text-white">
                  Test your agent’s controls + the foundation beneath them.
                </p>
                <button
                  type="button"
                  className={`mt-auto flex min-h-14 items-center justify-center gap-4 self-end rounded-[12px] border border-[#447ACB] bg-[#447ACB] px-7 type-p2 font-medium text-white transition-colors hover:border-[#2F5EA4] hover:bg-[#2F5EA4] ${focusClass}`}
                  onClick={start}
                >
                  <span>Start Challenge</span>
                  <span aria-hidden="true" className="text-[1.35em] leading-none">→</span>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    )
  }

  if (view === "result") {
    return (
      <section aria-labelledby="production-readiness-check">
        <div className="w-full border border-white/10 bg-[#222222] text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] p-2 md:p-3 lg:p-4">
          <div className="flex min-h-[0] flex-col rounded-[20px] border border-white/10 bg-[#222222]">
            <header className="flex min-h-[0] flex-col justify-center gap-2 border-b border-white/10 px-4 py-3 md:px-5 md:py-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">Challenge complete</div>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 id="production-readiness-check" className="type-h3 text-white">{scenario.title}</h2>
                  <div className="type-h4 text-[#8EB4F0]">{scenario.name}</div>
                </div>
                <p className="type-p4 mt-1 max-w-[780px] text-[#AEB5C0]">{scenario.subtitle}</p>
              </div>
              <div className="border border-white/10 bg-black/25 px-4 py-3 lg:text-right">
                <div className="type-p5 uppercase tracking-[0.2em] text-[#9CA3AF]">Production</div>
                <div className="type-p2 mt-1 text-white">Final decision</div>
              </div>
            </header>

            <main className="flex min-h-0 flex-1 flex-col gap-4 px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
              <div className="rounded-[18px] border border-[#447ACB]/50 bg-[#447ACB]/12 px-4 py-4 md:px-5 md:py-5" role="status" aria-live="polite">
                <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Production decision</div>
                <p className="type-h2 mt-2 text-white">{decision}</p>
                <p className="type-p3 mt-2 max-w-[840px] text-[#D1D5DB]">
                  {decision === "INCOMPLETE"
                    ? "Complete the challenge steps before making a production decision."
                    : decision === "NO GO"
                      ? "The operating model is not ready for production yet."
                      : decision === "GO WITH CONDITIONS"
                        ? "The operating model can proceed if the partial controls are addressed."
                        : "The operating model is ready to go into production."}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {scenario.controls.map((control) => {
                  const choice = state.selections[control.letter]
                  const status = choice?.resultingStatus ?? "UNCLEAR"
                  return (
                    <div key={control.letter} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">{control.letter} · {control.name}</div>
                      <div className="mt-2 type-h5 text-white">{getControlStatusTitle(status)}</div>
                      <p className="type-p4 mt-2 text-[#D1D5DB]">{choice?.tradeoff ?? "No choice was selected for this control."}</p>
                    </div>
                  )
                })}
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {operatingProfile.map((item) => (
                  <div key={item.field} className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">{item.field}</div>
                    <div className="mt-2 type-h5 text-white">{item.value}</div>
                    <div className="type-p5 mt-2 text-[#AEB5C0]">
                      {item.average === null ? "—" : `avg ${item.average.toFixed(1)} / 2`}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Selected business value</div>
                  <div className="mt-2 type-h5 text-white">{state.businessValue ?? "—"}</div>
                  <p className="type-p4 mt-2 text-[#D1D5DB]">
                    {state.businessValue === scenario.businessValue.referenceValue
                      ? scenario.businessValue.referenceExplanation
                      : "Business value keeps the operating decision anchored to a specific production outcome."}
                  </p>
                </div>

                <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Discussion prompt</div>
                  <p className="type-h5 mt-2 text-white">{scenario.result.discussionPrompt}</p>
                </div>
              </div>

              <button
                type="button"
                className={`mt-auto min-h-[44px] self-start border border-white/25 px-4 py-2 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass}`}
                onClick={reset}
              >
                {scenario.result.resetLabel}
              </button>
            </main>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="production-readiness-check">
      <div className="w-full border border-white/10 bg-[#222222] text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] p-2 md:p-3 lg:p-4">
        <div className="flex min-h-[0] flex-col rounded-[20px] border border-white/10 bg-[#222222]">
          <header className="flex min-h-[0] flex-col justify-center gap-2 border-b border-white/10 px-4 py-3 md:px-5 md:py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">Audience challenge</div>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 id="production-readiness-check" className="type-h3 text-white">{scenario.title}</h2>
                <div className="type-h4 text-[#8EB4F0]">{scenario.name}</div>
              </div>
              <p className="type-p4 mt-1 max-w-[780px] text-[#AEB5C0]">{scenario.subtitle}</p>
            </div>
            <div className="flex min-h-[72px] items-center justify-center border border-white/10 bg-black/25 px-4 py-3 lg:min-w-[104px] lg:text-right">
              <div className="type-p1 font-bold leading-none text-white">{stepBoxValue}</div>
            </div>
          </header>

          <main className="flex min-h-0 flex-1 flex-col px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">
            <section className="flex min-h-0 flex-1 flex-col">
              <div className="grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-sm">
                    {stepLabel}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="type-h4 text-[#8EB4F0]">{currentStepLabel}</span>
                      <span className="type-h4 text-white">{currentStepSuffix}</span>
                    </div>
                    {stepIndex >= 3 ? <div className="type-p5 mt-1 text-[#8EB4F0]">{scenario.profileLabel}</div> : null}
                  </div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">{stepIndex < 3 ? "Step prompt" : "Control prompt"}</div>
                  <p className="type-p4 mt-1 text-white">{currentStepTitle}</p>
                </div>
              </div>

              {stepIndex === 0 || stepIndex === 1 ? (
                <fieldset className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="grid gap-3 sm:grid-cols-2" aria-label={stepIndex === 0 ? "Systems inventory answer" : "Ownership answer"}>
                    {(["YES", "NO"] as const).map((answer) => {
                      const selected = (stepIndex === 0 ? state.systemsInventory : state.ownershipDefined) === answer
                      return (
                        <button
                          key={answer}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[126px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[136px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => updateFoundation(answer)}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Foundation answer</span>
                          <span className="type-h5">{answer}</span>
                        </button>
                      )
                    })}
                  </div>

                  {(stepIndex === 0 ? state.systemsInventory : state.ownershipDefined) === "NO" ? (
                    <div className="mt-4 rounded-[18px] border border-[#B12E2E]/50 bg-[#B12E2E]/12 px-4 py-4">
                      <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#F2A3A3]">FOUNDATION BLOCKER</div>
                      <p className="type-h5 mt-2 text-white">NO GO</p>
                      <p className="type-p4 mt-2 text-[#D1D5DB]">
                        {stepIndex === 0 ? scenario.foundation.systemsNoGoBody : scenario.foundation.ownershipNoGoBody}
                      </p>
                    </div>
                  ) : null}
                </fieldset>
              ) : stepIndex === 2 ? (
                <fieldset className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="grid gap-3 md:grid-cols-3" aria-label="Business value targets">
                    {scenario.businessValue.options.map((value) => {
                      const selected = state.businessValue === value
                      return (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[126px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[136px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => setState((current) => ({ ...current, businessValue: value }))}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Value target</span>
                          <span className="type-h5">{value}</span>
                        </button>
                      )
                    })}
                  </div>

                  {state.businessValue ? (
                    <div className="mt-4 rounded-[18px] border border-[#447ACB]/50 bg-[#447ACB]/12 px-4 py-4">
                      <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">{scenario.businessValue.referenceLabel}</div>
                      <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
                        <div className="type-h5 text-white">{scenario.businessValue.referenceValue}</div>
                        <p className="type-p4 max-w-[780px] text-[#D1D5DB]">{scenario.businessValue.referenceExplanation}</p>
                      </div>
                    </div>
                  ) : null}
                </fieldset>
              ) : currentControl ? (
                <fieldset className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="grid gap-3 md:grid-cols-3" aria-label={`${currentControl.name} choices`}>
                    {currentControl.choices.map((choice) => {
                      const selected = currentControlSelection?.id === choice.id
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[132px] flex-col justify-between rounded-[18px] border p-4 text-left transition-colors lg:min-h-[144px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => setState((current) => ({ ...current, selections: { ...current.selections, [currentControl.letter]: choice } }))}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>{choice.label}</span>
                          <span className="type-p4 text-[#D1D5DB]">{choice.description}</span>
                        </button>
                      )
                    })}
                  </div>

                  {currentControlSelection ? (
                    <div className="mt-4 rounded-[18px] border border-[#447ACB]/50 bg-[#447ACB]/12 px-4 py-4">
                      <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Resulting status</div>
                      <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
                        <div className="type-h5 text-white">{currentControlSelection.resultingStatus}</div>
                        <p className="type-p4 max-w-[780px] text-[#D1D5DB]">{currentControlSelection.tradeoff}</p>
                      </div>
                    </div>
                  ) : null}
                </fieldset>
              ) : null}

              <div className="mt-4 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  className={`min-h-[40px] border border-white/20 px-4 py-2 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass} ${stepIndex === 0 ? "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-white" : ""}`}
                  onClick={() => {
                    if (stepIndex === 0) return
                    if (stepIndex === 3 && state.businessValue === null) {
                      setStepIndex((current) => current - 1)
                      return
                    }
                    if (stepIndex > 0) setStepIndex((current) => current - 1)
                  }}
                  disabled={stepIndex === 0}
                >
                  Back
                </button>

                <button
                  type="button"
                  disabled={!canGoNext}
                  className={`min-h-[40px] border px-4 py-2 type-p5 font-bold uppercase tracking-[0.16em] transition-colors ${focusClass} ${canGoNext ? "border-white bg-white text-black hover:bg-[#E6E9EE]" : "cursor-not-allowed border-white/10 bg-white/5 text-white/35"}`}
                  onClick={onNext}
                >
                  {isFoundationBlocked
                    ? "FOUNDATION BLOCKER"
                    : stepIndex === 2
                      ? "Continue to A.G.E.N.T.S."
                      : stepIndex === totalSteps - 1
                        ? "See Production Decision"
                        : "Next Step"}
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  )
}

export function ProductionReadinessCheck(props: ProductionReadinessCheckProps) {
  if (props.variant === "scenario" && props.scenario) {
    return <ScenarioProductionReadinessCheck />
  }

  return <ProductionReadinessCheckDefault variant={props.variant ?? "default"} />
}
