type StatTextProps = {
  value: string
  prefix?: string
  suffix?: string
  label: string
  size?: "standard" | "compact"
  className?: string
  metricRowClassName?: string
  labelClassName?: string
}

function buildAccessibleText(prefix: string, value: string, suffix: string, label: string) {
  return `${prefix}${value}${suffix} ${label}`.trim()
}

export function StatText({
  value,
  prefix = "",
  suffix = "",
  label,
  size = "standard",
  className = "",
  metricRowClassName = "",
  labelClassName = "",
}: StatTextProps) {
  const accessibleText = buildAccessibleText(prefix, value, suffix, label)
  const isCompact = size === "compact"

  if (!isCompact) {
    return (
      <div className={`flex h-full flex-col items-center justify-center gap-4 text-center ${className}`.trim()}>
        <div aria-label={accessibleText} className={`text-center text-slate-800 ${metricRowClassName}`.trim()}>
          {prefix ? <span className="font-[var(--font-family-display)] type-stat-number font-semibold">{prefix}</span> : null}
          <span className="font-[var(--font-family-display)] type-stat-number font-semibold">{value}</span>
          {suffix ? <span className="font-[var(--font-family-display)] type-stat-number font-semibold">{suffix}</span> : null}
        </div>
        <div className={labelClassName}>{label}</div>
      </div>
    )
  }

  return (
    <div className={`flex h-full flex-col items-center justify-center text-center ${className}`.trim()}>
      <div
        aria-label={accessibleText}
        className={`inline-flex items-baseline justify-center whitespace-nowrap leading-none text-slate-800 ${metricRowClassName}`.trim()}
      >
        {prefix ? (
          <span className="font-[var(--font-family-display)] text-[28px] font-semibold leading-none text-slate-800">
            {prefix}
          </span>
        ) : null}
        <span className="font-[var(--font-family-display)] text-[56px] font-semibold leading-none tabular-nums text-slate-800">
          {value}
        </span>
        {suffix ? (
          <span className="font-[var(--font-family-display)] text-[28px] font-semibold leading-none text-slate-800">
            {suffix}
          </span>
        ) : null}
      </div>
      <div className={`mt-5 max-w-[210px] text-center text-[21px] font-normal leading-[1.3] text-neutral-700 ${labelClassName}`.trim()}>
        {label}
      </div>
    </div>
  )
}
