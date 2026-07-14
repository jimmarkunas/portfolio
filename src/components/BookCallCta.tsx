"use client"

import { TrackedBookCallLink } from "@/components/analytics/TrackedSiteShellLinks"
import { siteCta } from "@/content/site"
import { ExternalLinkMiniIcon } from "@/components/icons/ui-icons"

type BookCallCtaProps = {
  location?: string
  tone?: "default" | "brand"
  className?: string
  onClick?: () => void
}

export function BookCallCta({
  location = "site_shell",
  tone = "default",
  className = "",
  onClick,
}: BookCallCtaProps) {
  return (
    <TrackedBookCallLink
      href={siteCta.bookingUrls.siteShell}
      label={siteCta.bookCallLabel}
      location={location}
      tone={tone}
      className={className}
      onClick={onClick}
    >
      <span>{siteCta.bookCallLabel}</span>
      <ExternalLinkMiniIcon />
    </TrackedBookCallLink>
  )
}
