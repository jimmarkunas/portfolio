import type { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
  className?: string
}

/**
 * Canonical PBDS content container.
 *
 * Figma authority:
 * - max content: 1200px
 * - mobile gutter: 20px
 * - tablet gutter: 40px
 * - desktop gutter: 80px
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-gutter-mobile pbds-tablet:px-gutter-tablet pbds-desktop:px-gutter-desktop ${className}`.trim()}
    >
      {children}
    </div>
  )
}
