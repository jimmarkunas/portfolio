import type { HTMLAttributes, ReactNode } from "react"

import { Surface, type SurfaceTone } from "@/components/pbds/layout"

type ClassValue = string | false | null | undefined
const cx = (...values: ClassValue[]) => values.filter(Boolean).join(" ")

type EvidenceTone = Extract<SurfaceTone, "white" | "ink">

export function EvidenceMetric({
  kicker = "PROOF",
  value,
  label,
  detail,
  tone = "white",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  kicker?: string
  value: string
  label: string
  detail?: string
  tone?: EvidenceTone
}) {
  const muted = tone === "ink" ? "text-white opacity-[0.65]" : "text-mid"

  return (
    <Surface
      tone={tone}
      className={cx("relative overflow-hidden p-8 pbds-tablet:p-10", className)}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-y-8 left-0 w-1.5 rounded-pill bg-magenta"
      />
      <div className="pl-4">
        <div className={cx("text-micro font-medium uppercase", muted)}>{kicker}</div>
        <div className="mt-5 font-display text-slide-metric font-semibold tracking-[-0.04em]">
          {value}
        </div>
        <div className="mt-4 font-display text-pbds-h3 font-semibold">{label}</div>
        {detail ? (
          <div className={cx("mt-4 max-w-[32rem] text-body-s", muted)}>{detail}</div>
        ) : null}
      </div>
    </Surface>
  )
}

export function EvidenceCard({
  kicker = "EVIDENCE",
  title,
  children,
  source,
  tone = "white",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  kicker?: string
  title: string
  children: ReactNode
  source?: string
  tone?: EvidenceTone
}) {
  const muted = tone === "ink" ? "text-white opacity-[0.65]" : "text-mid"

  return (
    <article {...props}>
      <Surface tone={tone} className={cx("h-full p-8 pbds-tablet:p-10", className)}>
        <div className="text-micro font-medium uppercase tracking-[var(--type-micro-track)] text-magenta">
          {kicker}
        </div>
        <h3 className="mt-5 max-w-[34rem] font-display text-pbds-h3 font-semibold">
          {title}
        </h3>
        <div className={cx("mt-5 max-w-[42rem] text-body-m", muted)}>{children}</div>
        {source ? (
          <div className={cx("mt-8 text-micro font-medium uppercase", muted)}>
            {source}
          </div>
        ) : null}
      </Surface>
    </article>
  )
}
