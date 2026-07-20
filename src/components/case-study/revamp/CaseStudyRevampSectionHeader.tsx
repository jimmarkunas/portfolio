import type { ReactNode } from "react"

import { SectionHeader } from "@/components/SectionHeader"
import { CASE_STUDY_SECTION_INTRO_CLASS } from "./CaseStudySectionIntro"

type CaseStudySectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  copy?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function CaseStudyRevampSectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
  className = "",
}: CaseStudySectionHeaderProps) {
  const isDark = tone === "dark"

  return (
    <SectionHeader
      eyebrow={eyebrow}
      title={title}
      description={copy}
      align={align}
      tone={tone}
      className={`flex flex-col gap-4 ${className}`.trim()}
      eyebrowClassName={isDark ? "!bg-white/10" : ""}
      eyebrowLabelClassName="type-p3"
      titleGroupClassName="flex flex-col gap-3"
      titleClassName="type-h2"
      descriptionClassName={`${CASE_STUDY_SECTION_INTRO_CLASS} max-w-[760px]`}
    />
  )
}
