import type { ReactNode } from "react"

import { EyebrowPill } from "@/components/EyebrowPill"

type CaseStudySectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  copy?: ReactNode
  tone?: "light" | "dark"
  className?: string
}

export function CaseStudyRevampSectionHeader({
  eyebrow,
  title,
  copy,
  tone = "light",
  className = "",
}: CaseStudySectionHeaderProps) {
  const isDark = tone === "dark"
  const titleToneClass = isDark ? "text-white" : "text-[#222222]"
  const descriptionToneClass = isDark ? "text-white/72" : "text-black/66"

  return (
    <div
      className={`grid gap-6 md:gap-5 xl:grid-cols-[minmax(0,460px)_minmax(0,1fr)] xl:items-start xl:gap-x-16 xl:gap-y-4 ${className}`.trim()}
    >
      <div className="flex flex-col items-start gap-3 xl:max-w-[460px]">
        <EyebrowPill
          className={isDark ? "!bg-white/10" : ""}
          dotClassName={isDark ? "!bg-white" : ""}
          labelClassName={`type-p3 ${isDark ? "text-white" : "text-[#222222]"}`.trim()}
        >
          {eyebrow}
        </EyebrowPill>

        <h2 className={`type-h2 ${titleToneClass}`.trim()}>{title}</h2>
      </div>

      {copy ? (
        <p className={`type-p2 w-full max-w-none xl:max-w-[680px] xl:pt-[58px] ${descriptionToneClass}`.trim()}>
          {copy}
        </p>
      ) : null}
    </div>
  )
}
