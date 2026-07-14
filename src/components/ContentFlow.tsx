import type { ReactNode } from "react"

type ContentFlowProps = {
  children: ReactNode
  spacing: "compact" | "body"
}

const spacingClasses = {
  compact: "gap-[var(--space-12)]",
  body: "gap-[var(--space-20)]",
}

export function ContentFlow({ children, spacing }: ContentFlowProps) {
  return <div className={`flex flex-col ${spacingClasses[spacing]}`}>{children}</div>
}
