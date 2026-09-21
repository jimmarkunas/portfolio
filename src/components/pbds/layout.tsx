import type { HTMLAttributes, ReactNode } from "react"

import { Container } from "@/components/Container"

type ClassValue = string | false | null | undefined
const cx = (...values: ClassValue[]) => values.filter(Boolean).join(" ")

export type SectionSpacing = "compact" | "default" | "spacious"

export function Section({
  children,
  spacing = "default",
  className,
  containerClassName,
  ...props
}: HTMLAttributes<HTMLElement> & {
  children: ReactNode
  spacing?: SectionSpacing
  containerClassName?: string
}) {
  const spacingClass: Record<SectionSpacing, string> = {
    compact: "py-10 pbds-tablet:py-13 pbds-desktop:py-20",
    default: "py-13 pbds-tablet:py-20 pbds-desktop:py-30",
    spacious: "py-20 pbds-tablet:py-30 pbds-desktop:py-30",
  }

  return (
    <section className={cx(spacingClass[spacing], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export type StackGap = "sm" | "md" | "lg"

export function Stack({
  children,
  gap = "md",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  gap?: StackGap
}) {
  const gapClass: Record<StackGap, string> = {
    sm: "gap-3",
    md: "gap-6",
    lg: "gap-10",
  }

  return (
    <div className={cx("flex flex-col", gapClass[gap], className)} {...props}>
      {children}
    </div>
  )
}

export function Cluster({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cx("flex flex-wrap items-center gap-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function Grid({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cx(
        "grid grid-cols-4 gap-6 pbds-tablet:grid-cols-8 pbds-desktop:grid-cols-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type SurfaceTone = "canvas" | "white" | "ink"

export function Surface({
  children,
  tone = "white",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  tone?: SurfaceTone
}) {
  const toneClass: Record<SurfaceTone, string> = {
    canvas: "bg-canvas text-ink",
    white: "bg-white text-ink",
    ink: "bg-ink text-white",
  }

  return (
    <div className={cx("rounded-lg", toneClass[tone], className)} {...props}>
      {children}
    </div>
  )
}
