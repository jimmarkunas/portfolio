"use client"

import { ButtonLink } from "@/components/ButtonLink"
import { BookCallCta } from "@/components/BookCallCta"
import type { CaseStudyData } from "@/content/case-studies"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type HeroAction = CaseStudyData["hero"]["primaryCta"]
const BOOK_CALL_PATTERN = /book\s*a\s*call/i

function trackActionClick(action: HeroAction) {
  const label = action.label.trim()
  const pagePath = getCurrentPagePath()

  if (BOOK_CALL_PATTERN.test(label)) {
    trackEvent("book_call_click", {
      location: "case_study_cta",
      label,
      href: action.href,
      page_path: pagePath,
    })
    return
  }

  if (action.external) {
    trackEvent("outbound_link_click", {
      location: "case_study_cta",
      label,
      href: action.href,
      page_path: pagePath,
    })
  }
}

export function CaseStudyActionButton({
  action,
  variant,
}: {
  action: HeroAction
  variant: "primary" | "secondary"
}) {
  if (BOOK_CALL_PATTERN.test(action.label)) {
    return <BookCallCta location="case_study_hero" />
  }

  const className = "min-h-[56px] px-6 py-3.5 text-[20px] leading-8"

  const content = (
    <>
      <span>{action.label}</span>
      {variant === "primary" ? (
        <ArrowUpRightIcon />
      ) : null}
    </>
  )

  if (action.external) {
    return (
      <ButtonLink
        href={action.href}
        external
        variant={variant}
        className={className}
        onClick={() => trackActionClick(action)}
      >
        {content}
      </ButtonLink>
    )
  }

  return (
    <ButtonLink href={action.href} variant={variant} className={className} onClick={() => trackActionClick(action)}>
      {content}
    </ButtonLink>
  )
}
