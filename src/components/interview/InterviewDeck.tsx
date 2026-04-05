"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight, Expand, Minimize2, MonitorUp, NotebookTabs } from "lucide-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type SlideMetric = {
  label: string
  value: string
}

type DeckSlide = {
  kicker: string
  title: string
  summary: string
  bullets: string[]
  metrics: SlideMetric[]
  notes: string[]
}

const DECK_SLIDES: DeckSlide[] = [
  {
    kicker: "Slide 01 - Positioning",
    title: "How I Create Business Impact",
    summary:
      "A systems-level product and program leader for digital commerce, platform modernization, and high-stakes delivery.",
    bullets: [
      "I lead cross-functional teams from strategy to shipped outcomes.",
      "I convert ambiguous business goals into operating plans and execution cadence.",
      "I focus on measurable outcomes: revenue lift, speed, and reliability.",
    ],
    metrics: [
      { label: "Years Leading Delivery", value: "20+" },
      { label: "Programs Delivered", value: "75+" },
      { label: "Budget Managed", value: "$100M+" },
    ],
    notes: [
      "Open with a clear one-sentence positioning statement.",
      "Anchor early on business outcomes, not just execution capability.",
      "Set expectation that the next slides are evidence, not theory.",
    ],
  },
  {
    kicker: "Slide 02 - Signature Wins",
    title: "Commercial Outcomes",
    summary: "Representative outcomes across portfolio programs.",
    bullets: [
      "Delivered revenue uplift from $500M to $1B at Modere.",
      "Drove $120M YoY revenue impact at DIRECTV.",
      "Built repeatable launch and operations models for global programs.",
    ],
    metrics: [
      { label: "Revenue Uplift", value: "$1B" },
      { label: "YoY Impact", value: "$120M" },
      { label: "Project Awards", value: "2" },
    ],
    notes: [
      "Use this slide to show scale and repeatability.",
      "If asked for proof, open a matching case study tab.",
      "Keep this section to 60-90 seconds.",
    ],
  },
  {
    kicker: "Slide 03 - Operating Model",
    title: "How I Work",
    summary: "My execution model aligns teams quickly and keeps delivery predictable.",
    bullets: [
      "Phase 1: Clarify strategy, scope boundaries, and measurable outcomes.",
      "Phase 2: Build cross-functional execution rhythm and ownership map.",
      "Phase 3: Ship in increments with risk controls and leadership visibility.",
    ],
    metrics: [
      { label: "Execution Phases", value: "3" },
      { label: "Stakeholder Layers", value: "4+" },
      { label: "Decision Cadence", value: "Weekly" },
    ],
    notes: [
      "Interviewers often ask process questions; this slide answers them early.",
      "Show that your method scales from startup to enterprise.",
      "Invite a deeper dive into one phase if they want detail.",
    ],
  },
  {
    kicker: "Slide 04 - Case Study Lens",
    title: "Cross-Functional Leadership in Practice",
    summary:
      "Complex programs are won by tight alignment between product, engineering, operations, and executive stakeholders.",
    bullets: [
      "Defined clear scope and sequencing to reduce delivery thrash.",
      "Created decision frameworks that resolved team and vendor deadlocks.",
      "Protected outcome quality while still accelerating speed to market.",
    ],
    metrics: [
      { label: "Core Workstreams", value: "6" },
      { label: "Enterprise Teams", value: "10+" },
      { label: "Primary KPI Modes", value: "Revenue + Speed" },
    ],
    notes: [
      "Tell one concise story here, then pause for questions.",
      "Mention one challenge, one intervention, one result.",
      "Use this slide to highlight leadership style under pressure.",
    ],
  },
  {
    kicker: "Slide 05 - Why Me",
    title: "What Teams Get When I Join",
    summary: "I create momentum quickly and build delivery confidence across the organization.",
    bullets: [
      "Fast signal detection: I identify execution blockers early.",
      "Clear communication: leadership, teams, and partners stay aligned.",
      "Reliable delivery: strategy gets translated into shipped results.",
    ],
    metrics: [
      { label: "Ramp Time", value: "Weeks" },
      { label: "Delivery Confidence", value: "High" },
      { label: "Cross-Team Alignment", value: "Sustained" },
    ],
    notes: [
      "This is your close for fit and value.",
      "Tie strengths directly to the role they are hiring for.",
      "End with one sentence on culture and leadership style.",
    ],
  },
  {
    kicker: "Slide 06 - Discussion",
    title: "Q&A / Deep Dive",
    summary: "I can walk through any case study, metric, or delivery pattern in detail.",
    bullets: [
      "Choose a case: revenue, platform modernization, or operating model.",
      "Choose a focus: strategy, execution, stakeholder management, or outcomes.",
      "I can map my approach to your team structure in real time.",
    ],
    metrics: [
      { label: "Deep-Dive Cases", value: "10+" },
      { label: "Primary Domains", value: "Commerce + Platform" },
      { label: "Best Next Step", value: "Role Fit Discussion" },
    ],
    notes: [
      "Invite interviewer preference: case-first or competency-first.",
      "Keep this slide on screen while answering.",
      "Close by aligning on mutual fit and next steps.",
    ],
  },
]

function clampSlideIndex(rawIndex: number) {
  if (Number.isNaN(rawIndex)) return 0
  return Math.min(Math.max(rawIndex, 0), DECK_SLIDES.length - 1)
}

export function InterviewDeck() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const shellRef = useRef<HTMLDivElement>(null)

  const getSlideFromQuery = useCallback(() => {
    const raw = Number(searchParams.get("slide") ?? "1")
    return clampSlideIndex(raw - 1)
  }, [searchParams])

  const [slideIndex, setSlideIndex] = useState(getSlideFromQuery)
  const [showNotes, setShowNotes] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slide = DECK_SLIDES[slideIndex]
  const progressPercent = useMemo(() => ((slideIndex + 1) / DECK_SLIDES.length) * 100, [slideIndex])

  const goNext = useCallback(() => {
    setSlideIndex((current) => clampSlideIndex(current + 1))
  }, [])

  const goPrev = useCallback(() => {
    setSlideIndex((current) => clampSlideIndex(current - 1))
  }, [])

  const jumpToSlide = useCallback((nextIndex: number) => {
    setSlideIndex(clampSlideIndex(nextIndex))
  }, [])

  const toggleNotes = useCallback(() => {
    setShowNotes((current) => !current)
  }, [])

  const enterFullscreen = useCallback(async () => {
    const node = shellRef.current
    if (!node || typeof document === "undefined" || document.fullscreenElement) return

    try {
      await node.requestFullscreen()
    } catch {
      // Browser blocked fullscreen request; deck still works without it.
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    if (typeof document === "undefined" || !document.fullscreenElement) return

    try {
      await document.exitFullscreen()
    } catch {
      // No-op fallback; leave fullscreen state handling to listener.
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (typeof document === "undefined") return
    if (document.fullscreenElement) {
      void exitFullscreen()
      return
    }
    void enterFullscreen()
  }, [enterFullscreen, exitFullscreen])

  useEffect(() => {
    const nextFromQuery = getSlideFromQuery()
    setSlideIndex((current) => (current === nextFromQuery ? current : nextFromQuery))
  }, [getSlideFromQuery])

  useEffect(() => {
    const currentQueryValue = Number(searchParams.get("slide") ?? "1")
    if (clampSlideIndex(currentQueryValue - 1) === slideIndex) return

    const nextParams = new URLSearchParams(searchParams.toString())
    nextParams.set("slide", String(slideIndex + 1))
    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false })
  }, [pathname, router, searchParams, slideIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const isTypingTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable

      if (isTypingTarget || event.metaKey || event.ctrlKey || event.altKey) return

      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault()
        goNext()
        return
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp" || event.key === "Backspace") {
        event.preventDefault()
        goPrev()
        return
      }
      if (event.key.toLowerCase() === "f") {
        event.preventDefault()
        toggleFullscreen()
        return
      }
      if (event.key.toLowerCase() === "n") {
        event.preventDefault()
        toggleNotes()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [goNext, goPrev, toggleFullscreen, toggleNotes])

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener("fullscreenchange", onFullscreenChange)
    onFullscreenChange()
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div
      ref={shellRef}
      className="fixed inset-0 z-[120] bg-[radial-gradient(circle_at_top,#1c2738_0%,#111827_42%,#090d15_100%)] text-[#F8FAFC]"
    >
      <div className="flex h-full flex-col">
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-3 px-4 py-3 md:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <Link
                href="/"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                aria-label="Back to site"
              >
                <ChevronLeft className="h-4 w-4" />
              </Link>
              <div className="min-w-0">
                <p className="truncate text-[11px] uppercase tracking-[0.2em] text-[#93C5FD]">Interview Deck</p>
                <p className="truncate text-[13px] text-white/80">Press F for fullscreen, N for notes</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleNotes}
                className={`inline-flex h-9 items-center gap-2 rounded-full border px-3 text-[13px] transition-colors ${
                  showNotes
                    ? "border-[#60A5FA] bg-[#60A5FA]/20 text-[#DBEAFE]"
                    : "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white"
                }`}
              >
                <NotebookTabs className="h-4 w-4" />
                Notes
              </button>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-[13px] text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[1500px] px-4 pb-3 md:px-7">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[#60A5FA] transition-[width] duration-300" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </header>

        <main className="mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 flex-col px-4 pb-4 pt-4 md:px-7 md:pb-7 md:pt-6">
          <div className="relative min-h-0 flex-1">
            <section className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.94)_0%,rgba(8,12,22,0.96)_100%)] p-5 md:p-8">
              <div className="grid h-full min-h-0 grid-rows-[auto_1fr_auto] gap-4 md:gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#93C5FD]">{slide.kicker}</p>
                  <h1 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-5xl">{slide.title}</h1>
                  <p className="mt-3 max-w-[950px] text-base text-white/75 md:text-xl">{slide.summary}</p>
                </div>

                <div className="grid min-h-0 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-[#BFDBFE]">Talking Points</p>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/85 md:text-2xl md:leading-relaxed">
                      {slide.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#60A5FA]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid auto-rows-fr gap-4">
                    {slide.metrics.map((metric) => (
                      <article key={metric.label} className="flex min-h-[88px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-[#BFDBFE]">{metric.label}</p>
                        <p className="text-3xl font-semibold leading-none text-white md:text-5xl">{metric.value}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <footer className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-sm text-white/65">
                    Slide {slideIndex + 1} of {DECK_SLIDES.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      disabled={slideIndex === 0}
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white/85 transition-colors hover:border-white/45 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={slideIndex === DECK_SLIDES.length - 1}
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-[#60A5FA]/50 bg-[#60A5FA]/20 px-4 text-sm text-[#DBEAFE] transition-colors hover:border-[#93C5FD] hover:bg-[#60A5FA]/30 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </footer>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={goPrev}
                  className="pointer-events-auto absolute bottom-[76px] left-0 top-[76px] w-[20%]"
                />
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={goNext}
                  className="pointer-events-auto absolute bottom-[76px] right-0 top-[76px] w-[20%]"
                />
              </div>
            </section>

            {showNotes ? (
              <aside className="absolute bottom-4 left-4 right-4 z-30 rounded-2xl border border-[#60A5FA]/35 bg-[#0B1222]/95 p-4 shadow-[0_18px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm md:bottom-6 md:left-auto md:right-6 md:w-[460px]">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[#93C5FD]">
                    <MonitorUp className="h-3.5 w-3.5" />
                    Presenter Notes
                  </p>
                  <button
                    type="button"
                    onClick={toggleNotes}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {slide.notes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#60A5FA]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>

          <nav aria-label="Jump to slide" className="mt-4 flex flex-wrap gap-2">
            {DECK_SLIDES.map((deckSlide, index) => {
              const active = index === slideIndex
              return (
                <button
                  key={deckSlide.kicker}
                  type="button"
                  onClick={() => jumpToSlide(index)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-[#60A5FA] bg-[#60A5FA]/20 text-[#DBEAFE]"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-white/45 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              )
            })}
          </nav>
        </main>
      </div>
    </div>
  )
}
