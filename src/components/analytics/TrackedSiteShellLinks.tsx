"use client"

import type { ReactNode } from "react"

import { ButtonLink } from "@/components/ButtonLink"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type TrackedSiteShellLinkProps = {
  href: string
  label: string
  location: string
  className?: string
  tone?: "default" | "brand"
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
  tone = "default",
  children,
  target = "_blank",
  rel = "noreferrer",
  onClick,
  ariaLabel,
}: TrackedSiteShellLinkProps) {
  return (
    <ButtonLink
      href={href}
      external
      target={target}
      rel={rel}
      variant="bookCall"
      tone={tone}
      className={className}
      ariaLabel={ariaLabel}
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
    </ButtonLink>
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
