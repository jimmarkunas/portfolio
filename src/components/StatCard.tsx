import type { ReactNode } from "react"
import { AnimatedMetricValue } from "@/components/metrics/AnimatedMetricValue"

type StatCardProps = {
  value: string
  suffix?: string
  label: ReactNode
  variant?: "intro" | "impact"
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
  variant,
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
  const isIntroVariant = variant === "intro"
  const isImpactVariant = variant === "impact"
  const alignmentClasses =
    variant
      ? "items-center text-center justify-center"
      : align === "left"
      ? "items-start text-left justify-between"
      : "items-center text-center justify-center"
  const surfaceClasses = variant ? "rounded-[10px] bg-white" : surfaceClassName
  const cardClasses = variant ? "relative overflow-hidden" : `relative overflow-hidden ${surfaceClassName}`
  const contentClasses = variant
    ? isIntroVariant
      ? "relative flex h-full flex-col items-center text-center gap-4 justify-center"
      : "relative flex h-full flex-col items-center text-center gap-3.5 justify-start xl:flex-row xl:items-start xl:justify-between xl:gap-6 xl:text-left"
    : `relative flex h-full flex-col ${alignmentClasses} ${contentClassName}`
  const valueContainerClasses = variant
    ? isIntroVariant
      ? "text-center text-slate-800"
      : "text-center text-slate-800 xl:text-left"
    : `leading-none text-slate-800 ${align === "center" ? "text-center" : "text-left"} ${valueClassName}`
  const valueTextClasses = variant
    ? isIntroVariant
      ? "font-[var(--font-family-display)] type-stat-number font-semibold"
      : "font-[var(--font-family-display)] text-[56px] font-medium leading-[60px]"
    : `font-[var(--font-family-display)] ${valueTextClassName}`.trim()
  const suffixClasses = variant
    ? isIntroVariant
      ? "font-[var(--font-family-display)]"
      : "font-[var(--font-family-display)] text-[36px] font-semibold leading-9"
    : `font-[var(--font-family-display)] ${suffixClassName}`.trim()
  const labelClasses = variant
    ? isIntroVariant
      ? `type-p2 max-w-[220px] text-center text-neutral-700 ${labelClassName}`.trim()
      : `type-p2 max-w-[220px] text-center font-medium text-neutral-700 xl:max-w-[240px] xl:text-left ${labelClassName}`.trim()
    : labelClassName
  const hasCompositeSuffix = /[0-9/]/.test(suffix)
  const hasCompositeValue = value.includes("/")
  const shouldAnimateValue = animateValue && !hasCompositeSuffix && !hasCompositeValue

  return (
    <article className={`${cardClasses} ${surfaceClasses} ${className}`.trim()}>
      <div className={contentClasses.trim()}>
        {decoration ? <div className="mb-3 flex justify-center">{decoration}</div> : null}
        <div className={`${valueContainerClasses} ${valueClassName}`.trim()}>
          {shouldAnimateValue ? (
            <AnimatedMetricValue
              value={value}
              trigger={animationTrigger}
              className={valueTextClasses}
            />
          ) : (
            <span className={valueTextClasses}>{value}</span>
          )}
          {suffix ? (
            <span className={suffixClasses}>{suffix}</span>
          ) : null}
        </div>
        <div className={labelClasses}>{label}</div>
      </div>
    </article>
  )
}
