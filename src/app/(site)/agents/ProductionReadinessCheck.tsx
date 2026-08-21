"use client"

import { useState } from "react"

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

type ScenarioRound = {
  letter: "A" | "G" | "E" | "N" | "T" | "S"
  name: string
  evidence: string
  reference: Status
  reason: string
}

export type ScenarioConfig = {
  title: string
  name: string
  subtitle: string
  rounds: readonly ScenarioRound[]
}

function ScenarioProductionReadinessCheck({ scenario }: { scenario: ScenarioConfig }) {
  const totalSteps = 9
  const [stepIndex, setStepIndex] = useState(0)
  const [systemsInventory, setSystemsInventory] = useState<FoundationAnswer>(null)
  const [ownershipDefined, setOwnershipDefined] = useState<FoundationAnswer>(null)
  const [selectedValue, setSelectedValue] = useState<BusinessValue | null>(null)
  const [controlAnswers, setControlAnswers] = useState<Partial<Record<ScenarioRound["letter"], Status>>>({})
  const [revealed, setRevealed] = useState(false)

  const isComplete = stepIndex >= totalSteps
  const currentRound = stepIndex >= 3 && stepIndex < totalSteps ? scenario.rounds[stepIndex - 3] : undefined
  const currentControlStep = stepIndex >= 3 && stepIndex < totalSteps ? stepIndex - 3 : -1
  const currentRoundAnswer = currentRound ? controlAnswers[currentRound.letter] : undefined
  const selectedStatusRecord = scenario.rounds.reduce((acc, round) => {
    const answer = controlAnswers[round.letter]
    if (answer) acc[round.letter] = answer
    return acc
  }, {} as Record<string, Status>)
  const referenceStatusRecord = scenario.rounds.reduce((acc, round) => {
    acc[round.letter] = round.reference
    return acc
  }, {} as Record<string, Status>)

  const audienceDecisionTitle = evaluateGateTitle({
    systemsInventory,
    ownershipDefined,
    selectedValues: selectedValue ? [selectedValue] : [],
    selectedStatuses: selectedStatusRecord,
  })
  const referenceDecisionTitle = evaluateGateTitle({
    systemsInventory: "YES",
    ownershipDefined: "YES",
    selectedValues: [businessValues[0]],
    selectedStatuses: referenceStatusRecord,
  })

  const audienceScore = scenario.rounds.reduce((score, round) => {
    const answer = controlAnswers[round.letter]
    return answer === round.reference ? score + 1 : score
  }, 0)

  const canAdvance =
    stepIndex === 0
      ? systemsInventory !== null
      : stepIndex === 1
        ? ownershipDefined !== null
        : stepIndex === 2
          ? selectedValue !== null
          : revealed

  const reset = () => {
    setStepIndex(0)
    setSystemsInventory(null)
    setOwnershipDefined(null)
    setSelectedValue(null)
    setControlAnswers({})
    setRevealed(false)
  }

  const advance = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex((current) => current + 1)
      setRevealed(false)
    } else {
      setStepIndex(totalSteps)
    }
  }

  const chooseAnswer = (answer: Status) => {
    if (!currentRound || revealed) return
    setControlAnswers((current) => ({ ...current, [currentRound.letter]: answer }))
    setRevealed(true)
  }

  const currentStepNumber = String(stepIndex + 1).padStart(2, "0")
  const scenarioLabelVisible = stepIndex >= 2
  const scoreVisible = stepIndex >= 3 && !isComplete
  const stepHeaderClass = "mb-3 grid grid-cols-[minmax(0,1fr)_1fr] items-stretch"
  const stepHeaderLeftClass = "flex min-w-0 items-center gap-4 pr-5"
  const stepHeaderRightClass = "flex min-w-0 items-center border-l border-white/15 pl-5"

  if (isComplete) {
    return (
      <section aria-labelledby="production-readiness-check">
        <div className="w-full border border-white/10 bg-[#222222] p-2 text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] md:p-3 lg:p-4">
          <div className="flex min-h-[468px] flex-col rounded-[20px] border border-white/10 bg-[#222222] md:min-h-[500px] lg:min-h-[532px]">
            <header className="flex min-h-[80px] flex-col justify-center gap-2 border-b border-white/10 px-4 py-2.5 md:px-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">Challenge Complete</div>
                <h2 id="production-readiness-check" className="type-h3 mt-2 text-white">{scenario.title}</h2>
                <p className="type-p4 mt-2 max-w-[720px] text-[#AEB5C0]">{scenario.subtitle}</p>
              </div>
            </header>

            <main className="flex flex-1 flex-col gap-3 px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
              <div className="border border-[#447ACB]/60 bg-[#447ACB]/15 px-5 py-4 md:px-7 md:py-5" role="status" aria-live="polite">
                <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Audience decision</div>
                <p className="type-h2 mt-2 text-white">{audienceDecisionTitle}</p>
                <p className="type-p3 mt-2 max-w-[760px] text-[#D1D5DB]">
                  {audienceDecisionTitle === "INCOMPLETE"
                    ? "Complete the foundation steps before the audience can make a production decision."
                    : audienceDecisionTitle === "NO GO"
                      ? "Resolve the foundation or control gaps before production."
                      : audienceDecisionTitle === "GO WITH CONDITIONS"
                        ? "Complete the partial controls and document the conditions before production."
                        : "The foundation is ready and all six A.G.E.N.T.S. controls are defined for production."}
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Audience score</div>
                  <div className="type-p2 mt-1 text-white">{audienceScore} / 6</div>
                </div>
                <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Reference decision</div>
                  <div className="type-p2 mt-1 text-white">{referenceDecisionTitle}</div>
                </div>
              </div>

              <div className="border border-[#447ACB]/40 bg-white/[0.03] px-5 py-3 md:px-7 md:py-4">
                <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Reference reveal</div>
                <p className="type-p3 mt-1.5 max-w-[860px] text-[#D1D5DB]">
                  The canonical Customer Order Exception Agent assessment resolves to <span className="font-semibold text-white">NO GO</span>.
                </p>
                <p className="type-p4 mt-1.5 text-white">
                  {referenceDecisionTitle === "NO GO"
                    ? "One unclear control killed the release."
                    : referenceDecisionTitle === "GO WITH CONDITIONS"
                      ? "The reference assessment requires conditions before release."
                      : "All six controls are defined."}
                </p>
              </div>

              <button
                type="button"
                className={`mt-auto min-h-[36px] self-start border border-white/25 px-3 py-1.5 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass}`}
                onClick={reset}
              >
                Restart Challenge
              </button>
            </main>
          </div>
        </div>
      </section>
    )
  }

  const stepNumber = String(stepIndex + 1).padStart(2, "0")

  return (
    <section aria-labelledby="production-readiness-check">
      <div className="w-full border border-white/10 bg-[#222222] p-2 text-white shadow-[0_24px_70px_rgba(17,19,24,0.24)] md:p-3 lg:p-4">
        <div className="flex min-h-0 flex-col rounded-[20px] border border-white/10 bg-[#222222]">
          <header className="flex min-h-0 flex-col justify-center gap-2 border-b border-white/10 px-4 py-3 md:px-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="type-p5 font-bold uppercase tracking-[0.3em] text-[#9CA3AF]">Audience challenge</div>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 id="production-readiness-check" className="type-h3 text-white">{scenario.title}</h2>
                <div className="type-h4 text-[#447ACB]">{scenario.name}</div>
              </div>
              <p className="type-p4 mt-1 max-w-[720px] text-[#AEB5C0]">{scenario.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              {scoreVisible ? (
                <div className="border border-[#447ACB]/45 bg-[#447ACB]/12 px-4 py-2.5">
                  <div className="type-p5 uppercase tracking-[0.2em] text-[#8EB4F0]">Audience score</div>
                  <div className="type-p2 mt-1 text-white">{audienceScore} / 6</div>
                </div>
              ) : null}
              <div className="border border-white/10 bg-black/25 px-4 py-2.5 sm:text-right">
                <div className="type-p5 uppercase tracking-[0.2em] text-[#9CA3AF]">Current step</div>
                <div className="type-p2 mt-1 text-white">Step {currentStepNumber} of 09</div>
              </div>
            </div>
          </header>

          <main className="flex min-h-0 flex-1 flex-col px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5">
            {scenarioLabelVisible ? (
                <div className="mb-3 flex items-center gap-3">
                <div className="rounded-full border border-[#447ACB]/45 bg-[#447ACB]/12 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#8EB4F0]">
                  Customer Order Exception Agent
                </div>
              </div>
            ) : null}

            {stepIndex === 0 ? (
              <section className="flex flex-1 flex-col">
                <div className={stepHeaderClass}>
                  <div className={stepHeaderLeftClass}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs">{currentStepNumber}</div>
                    <span className="type-h4 text-[#8EB4F0]">SYSTEMS</span>
                    <span className="type-h4 text-white">Inventory</span>
                  </div>
                  <div className={stepHeaderRightClass}>
                    <span className="type-h4 min-w-0 text-white">Did you inventory your current systems and tools enterprise-wide?</span>
                  </div>
                </div>
                <fieldset>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Systems inventory answer">
                    {(["YES", "NO"] as const).map((answer) => {
                      const selected = systemsInventory === answer
                      return (
                        <button
                          key={answer}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[122px] flex-col justify-between border p-4 text-left transition-colors lg:min-h-[132px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => setSystemsInventory(answer)}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Foundation answer</span>
                          <span className="type-h5">{answer}</span>
                        </button>
                      )
                    })}
                  </div>
                </fieldset>
              </section>
            ) : stepIndex === 1 ? (
              <section className="flex flex-1 flex-col">
                <div className={stepHeaderClass}>
                  <div className={stepHeaderLeftClass}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs">{currentStepNumber}</div>
                    <span className="type-h4 text-[#8EB4F0]">OWNERSHIP</span>
                    <span className="type-h4 text-white">Defined</span>
                  </div>
                  <div className={stepHeaderRightClass}>
                    <span className="type-h4 min-w-0 text-white">Do these systems and tools have defined owners enterprise-wide?</span>
                  </div>
                </div>
                <fieldset>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Ownership answer">
                    {(["YES", "NO"] as const).map((answer) => {
                      const selected = ownershipDefined === answer
                      return (
                        <button
                          key={answer}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[122px] flex-col justify-between border p-4 text-left transition-colors lg:min-h-[132px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => setOwnershipDefined(answer)}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Foundation answer</span>
                          <span className="type-h5">{answer}</span>
                        </button>
                      )
                    })}
                  </div>
                </fieldset>
              </section>
            ) : stepIndex === 2 ? (
              <section className="flex flex-1 flex-col">
                <div className={stepHeaderClass}>
                  <div className={stepHeaderLeftClass}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs">{currentStepNumber}</div>
                    <span className="type-h4 text-[#8EB4F0]">VALUE</span>
                    <span className="type-h4 text-white">Target</span>
                  </div>
                  <div className={stepHeaderRightClass}>
                    <span className="type-h4 min-w-0 text-white">What business value is this agent primarily creating?</span>
                  </div>
                </div>
                <fieldset>
                  <div className="mt-6 grid gap-3 md:grid-cols-3" aria-label="Business value targets">
                    {businessValues.map((value) => {
                      const selected = selectedValue === value
                      return (
                        <button
                          key={value}
                          type="button"
                          aria-pressed={selected}
                          className={`flex min-h-[122px] flex-col justify-between border p-4 text-left transition-colors lg:min-h-[132px] lg:p-5 ${focusClass} ${selected ? selectedOptionClass : "border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]"}`}
                          onClick={() => setSelectedValue(selected ? null : value)}
                        >
                          <span className={`type-p5 font-bold uppercase tracking-[0.28em] ${selected ? "text-[#8EB4F0]" : "text-[#9CA3AF]"}`}>Value target</span>
                          <span className="type-h5">{value}</span>
                        </button>
                      )
                    })}
                  </div>
                </fieldset>
                {selectedValue ? (
                  <div className="mt-3 border border-white/10 bg-white/[0.03] px-4 py-2.5">
                    <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Reference</div>
                    <div className="mt-1.5 flex flex-col gap-1.5 md:flex-row md:items-center md:gap-3">
                      <div className="type-p2 text-white">INCREASE OPERATIONAL EFFICIENCY</div>
                      <p className="type-p4 max-w-[720px] text-[#D1D5DB]">
                        Automates high-volume order exceptions and reduces manual intervention in fulfillment resolution.
                      </p>
                    </div>
                  </div>
                ) : null}
              </section>
            ) : currentRound ? (
              <section className="flex flex-1 flex-col">
                <div className={stepHeaderClass}>
                  <div className={stepHeaderLeftClass}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs">{currentStepNumber}</div>
                    <span className="type-h4 text-[#8EB4F0]">{currentRound.letter}</span>
                    <span className="type-h4 text-white">{currentRound.name}</span>
                  </div>
                  <div className={stepHeaderRightClass}>
                    <span className="type-h4 min-w-0 text-white">{currentRound.evidence}</span>
                  </div>
                </div>

                {!revealed ? (
                  <div className="flex flex-1 flex-col">
                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                      {statuses.map((status) => (
                        <button
                          key={status}
                          type="button"
                          className={`flex min-h-[88px] flex-col justify-center border p-4 text-center transition-colors lg:min-h-[96px] lg:p-5 ${focusClass} border-white/15 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08]`}
                          onClick={() => chooseAnswer(status)}
                        >
                          <span className="type-h5">{status}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col">
                    <div className="border border-[#447ACB]/60 bg-[#447ACB]/15 px-4 py-4 md:px-5 md:py-5">
                      <div className="type-p5 font-bold uppercase tracking-[0.28em] text-[#8EB4F0]">Reference assessment</div>
                      <p className="type-h2 mt-2 text-white">{currentRound.reference}</p>
                      <p className="type-p4 mt-2 max-w-[860px] text-[#D1D5DB]">{currentRound.reason}</p>
                    </div>

                    <div className="mt-3 grid gap-3 md:grid-cols-3">
                      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
                        <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Audience answer</div>
                        <div className="type-p2 mt-1 text-white">{currentRoundAnswer}</div>
                      </div>
                      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
                        <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Audience score</div>
                        <div className="type-p2 mt-1 text-white">{audienceScore} / 6</div>
                      </div>
                      <div className="border border-white/10 bg-white/[0.03] px-4 py-3">
                        <div className="type-p5 uppercase tracking-[0.24em] text-[#9CA3AF]">Match status</div>
                        <div className="type-p2 mt-1 text-white">{currentRoundAnswer === currentRound.reference ? "MATCH" : "MISS"}</div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ) : null}

            <div className="mt-3 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-0">
              <button
                type="button"
                className={`min-h-[36px] border border-white/20 px-3 py-1.5 type-p5 font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-black ${focusClass} ${stepIndex === 0 ? "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-white" : ""}`}
                onClick={() => {
                  if (stepIndex === 0) return
                  setStepIndex((current) => current - 1)
                  setRevealed(false)
                }}
                disabled={stepIndex === 0}
              >
                Back
              </button>
              <button
                type="button"
                disabled={!canAdvance}
                className={`min-h-[36px] border px-3 py-1.5 type-p5 font-bold uppercase tracking-[0.16em] transition-colors ${focusClass} ${canAdvance ? "border-white bg-white text-black hover:bg-[#E6E9EE]" : "cursor-not-allowed border-white/10 bg-white/5 text-white/35"}`}
                onClick={() => {
                  if (stepIndex === 2 && !selectedValue) return
                  advance()
                }}
              >
                {stepIndex === 2
                  ? "Continue to A.G.E.N.T.S."
                  : currentRound
                    ? (revealed && stepIndex === 8 ? "See Production Decision" : "Next Control")
                    : "Next Step"}
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export function ProductionReadinessCheck(props: ProductionReadinessCheckProps) {
  if (props.variant === "scenario" && props.scenario) {
    return <ScenarioProductionReadinessCheck scenario={props.scenario} />
  }

  return <ProductionReadinessCheckDefault variant={props.variant ?? "default"} />
}
