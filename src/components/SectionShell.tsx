import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { Container } from "@/components/Container"

type SectionShellProps<T extends ElementType = "section"> = {
  as?: T
  children: ReactNode
  className?: string
  containerClassName?: string
  surface?: "surface" | "white" | "ink" | "transparent"
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">

const surfaceClasses = {
  surface: "bg-surface",
  white: "bg-white",
  ink: "bg-ink text-white",
  transparent: "",
}

export function SectionShell<T extends ElementType = "section">({
  as,
  children,
  className = "",
  containerClassName = "",
  surface = "surface",
  ...props
}: SectionShellProps<T>) {
  const Component = as ?? "section"

  return (
    <Component
      className={`${surfaceClasses[surface]} ${className}`.trim()}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  )
}
