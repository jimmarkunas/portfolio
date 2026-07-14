"use client"

import { ButtonLink } from "@/components/ButtonLink"
import { ExternalLinkMiniIcon } from "@/components/icons/ui-icons"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type CaseStudyPressCtaProps = {
  href: string
  title: string
  location: string
}

export function CaseStudyPressCta({ href, title, location }: CaseStudyPressCtaProps) {
  return (
    <ButtonLink
      href={href}
      external
      target="_blank"
      rel="noopener noreferrer"
      variant="bookCall"
      className="w-full px-5 text-[15px] md:w-auto"
      ariaLabel={`Open "${title}" in a new tab`}
      onClick={() => {
        trackEvent("outbound_link_click", {
          location,
          label: title,
          href,
          page_path: getCurrentPagePath(),
        })
      }}
    >
      <span>Open in new tab</span>
      <ExternalLinkMiniIcon />
    </ButtonLink>
  )
}
