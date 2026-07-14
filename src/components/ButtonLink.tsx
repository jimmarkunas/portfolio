"use client"

import Link from "next/link"
import type { MouseEventHandler, ReactNode } from "react"

export type ButtonLinkVariant = "primary" | "secondary" | "bookCall"
export type ButtonLinkTone = "default" | "brand"

const variantClassNames = {
  primary: "button-primary",
  secondary: "button-secondary",
  bookCall: "button-book-call",
} as const satisfies Record<ButtonLinkVariant, string>

const toneClassNames = {
  default: "",
  brand: "button-book-call--brand",
} as const satisfies Record<ButtonLinkTone, string>

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: ButtonLinkVariant
  tone?: ButtonLinkTone
  className?: string
  external?: boolean
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "default",
  className = "",
  external = false,
  target,
  rel,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const composedClassName = `${variantClassNames[variant]} ${toneClassNames[tone]} ${className}`.trim()

  if (external) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
        className={composedClassName}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={composedClassName} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
