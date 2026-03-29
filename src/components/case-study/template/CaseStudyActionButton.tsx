import Link from "next/link"

import type { CaseStudyData } from "@/components/case-study/types"
import { ArrowUpRightIcon } from "@/components/icons/ui-icons"

type HeroAction = CaseStudyData["hero"]["primaryCta"]

export function CaseStudyActionButton({
  action,
  variant,
}: {
  action: HeroAction
  variant: "primary" | "secondary"
}) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white transition-colors hover:bg-[#447ACB]"
      : "inline-flex min-h-[56px] items-center rounded-[99px] border border-[#222222]/12 bg-white px-6 pb-3.5 pt-3 text-[20px] leading-8 text-[#222222] transition-colors hover:border-[#447ACB] hover:text-[#447ACB]"

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
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  )
}
