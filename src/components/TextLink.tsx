"use client"

import Link from "next/link"
import type { MouseEventHandler, ReactNode } from "react"

type TextLinkProps = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  ariaLabel?: string
  download?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function TextLink({
  href,
  children,
  className = "",
  external = false,
  target,
  rel,
  ariaLabel,
  download,
  onClick,
}: TextLinkProps) {
  const composedClassName = `text-link ${className}`.trim()

  if (external) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
        download={download}
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
