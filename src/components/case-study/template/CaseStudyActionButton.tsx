"use client"

import Link from "next/link"

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

  const className =
    variant === "primary"
      ? "inline-flex min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#447ACB]"
      : "inline-flex min-h-[56px] items-center rounded-[99px] border border-[#222222]/12 bg-white px-6 pb-3.5 pt-3 text-[20px] leading-8 text-[#222222] transition-[transform,color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#447ACB] hover:text-[#447ACB]"

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
      <a href={action.href} target="_blank" rel="noreferrer" className={className} onClick={() => trackActionClick(action)}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className} onClick={() => trackActionClick(action)}>
      {content}
    </Link>
  )
}
