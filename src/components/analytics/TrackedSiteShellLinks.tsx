"use client"

import type { ReactNode } from "react"

import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type TrackedSiteShellLinkProps = {
  href: string
  label: string
  location: string
  className?: string
  children: ReactNode
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  onClick?: () => void
  ariaLabel?: string
}

export function TrackedBookCallLink({
  href,
  label,
  location,
  className,
  children,
  target = "_blank",
  rel = "noreferrer",
  onClick,
  ariaLabel,
}: TrackedSiteShellLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        trackEvent("book_call_click", {
          location,
          label,
          href,
          page_path: getCurrentPagePath(),
        })
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}

export function TrackedOutboundIconLink({
  href,
  label,
  location,
  className,
  children,
  target = "_blank",
  rel = "noreferrer",
  onClick,
  ariaLabel,
}: TrackedSiteShellLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel ?? label}
      onClick={() => {
        trackEvent("outbound_link_click", {
          location,
          label,
          href,
          page_path: getCurrentPagePath(),
        })
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}
