import type { ReactNode } from "react"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"

type StatCardProps = {
  value: string
  suffix?: string
  label: ReactNode
  className?: string
  valueClassName?: string
  valueTextClassName?: string
  suffixClassName?: string
  labelClassName?: string
  contentClassName?: string
  surfaceClassName?: string
  decoration?: ReactNode
  align?: "center" | "left"
  animateValue?: boolean
  animationTrigger?: "load" | "in-view"
}

export function StatCard({
  value,
  suffix = "",
  label,
  className = "",
  valueClassName = "",
  valueTextClassName = "",
  suffixClassName = "",
  labelClassName = "",
  contentClassName = "",
  surfaceClassName = "rounded-[10px] bg-white",
  decoration,
  align = "center",
  animateValue = true,
  animationTrigger = "in-view",
}: StatCardProps) {
  const alignmentClasses =
    align === "left"
      ? "items-start text-left justify-between"
      : "items-center text-center justify-center"
  const hasCompositeSuffix = /[0-9/]/.test(suffix)
  const hasCompositeValue = value.includes("/")
  const shouldAnimateValue = animateValue && !hasCompositeSuffix && !hasCompositeValue

  return (
    <article className={`relative overflow-hidden ${surfaceClassName} ${className}`.trim()}>
      {decoration}
      <div className={`relative flex h-full flex-col ${alignmentClasses} ${contentClassName}`.trim()}>
        <div className={`leading-none text-slate-800 ${align === "center" ? "text-center" : "text-left"} ${valueClassName}`.trim()}>
          {shouldAnimateValue ? (
            <AnimatedMetricValue
              value={value}
              trigger={animationTrigger}
              className={`font-[var(--font-family-display)] ${valueTextClassName}`.trim()}
            />
          ) : (
            <span className={`font-[var(--font-family-display)] ${valueTextClassName}`.trim()}>{value}</span>
          )}
          {suffix ? (
            <span className={`font-[var(--font-family-display)] ${suffixClassName}`.trim()}>{suffix}</span>
          ) : null}
        </div>
        <div className={labelClassName}>{label}</div>
      </div>
    </article>
  )
}
