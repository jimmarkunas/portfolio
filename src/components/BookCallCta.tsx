"use client"

import { TrackedBookCallLink } from "@/components/analytics/TrackedSiteShellLinks"
import { siteCta } from "@/content/site"

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
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0.957229 11.3614L0 10.4042L9.02046 1.375H0.819729V0H11.3614V10.5417H9.9864V2.34094L0.957229 11.3614Z"
          fill="currentColor"
        />
      </svg>
    </TrackedBookCallLink>
  )
}
