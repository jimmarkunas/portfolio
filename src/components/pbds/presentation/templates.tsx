import type { ReactNode } from "react"

import { BrandMark } from "@/components/pbds/BrandMark"
import { EvidenceCard, EvidenceMetric } from "@/components/pbds/evidence"
import { SlideStage, type SlideTone } from "@/components/pbds/presentation/SlideStage"

const mutedClass = (tone: SlideTone) =>
  tone === "dark" ? "text-white opacity-[0.65]" : "text-mid"

const markColor = (tone: SlideTone): "magenta" | "ink" =>
  tone === "dark" ? "magenta" : "ink"

export function CoverSlide({
  kicker = "JIM MARKUNAS / PERSONAL BRAND",
  title,
  subtitle,
  footer = "THE FIXER LEAVES EVIDENCE.",
  tone = "light",
}: {
  kicker?: string
  title: string
  subtitle: string
  footer?: string
  tone?: SlideTone
}) {
  return (
    <SlideStage tone={tone}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="text-slide-kicker font-medium uppercase text-magenta">{kicker}</div>
          <BrandMark color={markColor(tone)} width={120} height={120} />
        </div>

        <div className="max-w-[1500px]">
          <h1 className="font-display text-slide-title font-semibold tracking-[-0.045em]">
            {title}
          </h1>
          <div aria-hidden className="mt-10 h-2 w-[180px] rounded-pill bg-magenta" />
          <p className={`mt-10 max-w-[1180px] text-slide-body ${mutedClass(tone)}`}>
            {subtitle}
          </p>
        </div>

        <div className={`text-slide-caption font-medium uppercase tracking-[0.14em] ${mutedClass(tone)}`}>
          {footer}
        </div>
      </div>
    </SlideStage>
  )
}

export function StatementSlide({
  kicker = "THE FIXER",
  statement,
  support,
  footer = "JIM MARKUNAS",
  tone = "light",
}: {
  kicker?: string
  statement: string
  support?: string
  footer?: string
  tone?: SlideTone
}) {
  return (
    <SlideStage tone={tone}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="text-slide-kicker font-medium uppercase text-magenta">{kicker}</div>
          <BrandMark color={markColor(tone)} width={96} height={96} />
        </div>

        <div className="max-w-[1500px]">
          <h2 className="font-display text-slide-statement font-semibold tracking-[-0.04em]">
            {statement}
          </h2>
          <div aria-hidden className="mt-10 h-2 w-[120px] rounded-pill bg-magenta" />
          {support ? (
            <p className={`mt-10 max-w-[1180px] text-slide-body ${mutedClass(tone)}`}>
              {support}
            </p>
          ) : null}
        </div>

        <div className={`text-slide-caption font-medium uppercase tracking-[0.14em] ${mutedClass(tone)}`}>
          {footer}
        </div>
      </div>
    </SlideStage>
  )
}

export function MetricSlide({
  kicker = "MEASURABLE TRANSFORMATION",
  title,
  body,
  metric,
  metricLabel,
  metricDetail,
  footer = "SOURCE · VERIFIED PROGRAM EVIDENCE",
  tone = "light",
}: {
  kicker?: string
  title: string
  body: string
  metric: string
  metricLabel: string
  metricDetail?: string
  footer?: string
  tone?: SlideTone
}) {
  const metricTone = tone === "dark" ? "ink" : "white"

  return (
    <SlideStage tone={tone}>
      <div className="grid h-full grid-cols-12 items-center gap-10">
        <div className="col-span-7">
          <div className="text-slide-kicker font-medium uppercase text-magenta">{kicker}</div>
          <h2 className="mt-8 max-w-[1000px] font-display text-slide-section font-semibold tracking-[-0.035em]">
            {title}
          </h2>
          <p className={`mt-8 max-w-[980px] text-slide-body ${mutedClass(tone)}`}>{body}</p>
          <div className={`mt-16 text-slide-caption font-medium uppercase tracking-[0.14em] ${mutedClass(tone)}`}>
            {footer}
          </div>
        </div>
        <div className="col-span-5">
          <EvidenceMetric
            tone={metricTone}
            value={metric}
            label={metricLabel}
            detail={metricDetail}
            className={tone === "dark" ? "" : "shadow-2"}
          />
        </div>
      </div>
    </SlideStage>
  )
}

export type EvidenceSlideItem = {
  title: string
  body: ReactNode
  source?: string
  kicker?: string
}

export function EvidenceSlide({
  kicker = "EVIDENCE",
  title,
  body,
  items,
  footer = "SOURCE-LED · VERIFIABLE · SPECIFIC",
  tone = "light",
}: {
  kicker?: string
  title: string
  body?: string
  items: EvidenceSlideItem[]
  footer?: string
  tone?: SlideTone
}) {
  const cardTone = tone === "dark" ? "ink" : "white"
  const gridClass = items.length >= 3 ? "grid-cols-3" : "grid-cols-2"

  return (
    <SlideStage tone={tone}>
      <div className="flex h-full flex-col">
        <div className="text-slide-kicker font-medium uppercase text-magenta">{kicker}</div>
        <div className="mt-8 flex items-end justify-between gap-12">
          <h2 className="max-w-[1000px] font-display text-slide-section font-semibold tracking-[-0.035em]">
            {title}
          </h2>
          {body ? <p className={`max-w-[620px] text-slide-body ${mutedClass(tone)}`}>{body}</p> : null}
        </div>

        <div className={`mt-14 grid flex-1 ${gridClass} gap-8`}>
          {items.slice(0, 3).map((item) => (
            <EvidenceCard
              key={item.title}
              kicker={item.kicker}
              title={item.title}
              source={item.source}
              tone={cardTone}
              className={tone === "dark" ? "" : "shadow-1"}
            >
              {item.body}
            </EvidenceCard>
          ))}
        </div>

        <div className={`mt-8 text-slide-caption font-medium uppercase tracking-[0.14em] ${mutedClass(tone)}`}>
          {footer}
        </div>
      </div>
    </SlideStage>
  )
}

export function SystemFlowSlide({
  kicker = "SYSTEM TRANSFORMATION",
  title,
  steps,
  footer = "Reveal the sequence in React. Keep the static export readable with every step visible.",
  tone = "light",
  activeStep,
}: {
  kicker?: string
  title: string
  steps: [string, string, string, string, string]
  footer?: string
  tone?: SlideTone
  activeStep?: number
}) {
  return (
    <SlideStage tone={tone}>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-slide-kicker font-medium uppercase text-magenta">{kicker}</div>
            <h2 className="mt-8 max-w-[1200px] font-display text-slide-section font-semibold tracking-[-0.035em]">
              {title}
            </h2>
          </div>
          <BrandMark color={markColor(tone)} width={96} height={96} />
        </div>

        <div className="relative mt-24 flex-1">
          <div aria-hidden className={`absolute left-[7%] right-[7%] top-[78px] h-1 ${tone === "dark" ? "bg-white" : "bg-line"} opacity-[0.3]`} />
          <div className="relative grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const isActive = activeStep === undefined || index <= activeStep
              const isCurrent = activeStep === index
              return (
                <div key={`${step}-${index}`} className="text-center">
                  <div
                    className={`mx-auto flex h-[156px] w-[156px] items-center justify-center rounded-circle border-2 text-slide-section font-semibold transition-all duration-base ease-standard ${
                      isActive
                        ? "border-magenta bg-magenta text-ink"
                        : tone === "dark"
                          ? "border-white bg-ink text-white opacity-[0.45]"
                          : "border-line bg-white text-mid"
                    } ${isCurrent ? "shadow-accent" : ""}`}
                  >
                    {index + 1}
                  </div>
                  <div className={`mt-8 text-slide-body font-medium ${isActive ? "" : "opacity-[0.45]"}`}>
                    {step}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`text-slide-caption font-medium uppercase tracking-[0.14em] ${mutedClass(tone)}`}>
          {footer}
        </div>
      </div>
    </SlideStage>
  )
}
