import type { ReactNode } from "react"

type EyebrowPillProps = {
  children: ReactNode
  className?: string
  dotClassName?: string
  labelClassName?: string
  showDot?: boolean
}

export function EyebrowPill({
  children,
  className = "",
  dotClassName = "",
  labelClassName = "",
  showDot = true,
}: EyebrowPillProps) {
  return (
    <div className={`eyebrow-pill ${className}`.trim()}>
      {showDot ? <span className={`eyebrow-pill__dot ${dotClassName}`.trim()} /> : null}
      <span className={labelClassName}>{children}</span>
    </div>
  )
}
