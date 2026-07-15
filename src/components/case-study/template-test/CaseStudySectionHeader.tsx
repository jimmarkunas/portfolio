import type { ReactNode } from "react"

import { EyebrowPill } from "@/components/EyebrowPill"

type CaseStudySectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  copy?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function CaseStudySectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
  className = "",
}: CaseStudySectionHeaderProps) {
  const isDark = tone === "dark"
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left"

  return (
    <div className={`flex flex-col gap-4 ${alignmentClass} ${className}`.trim()}>
      <EyebrowPill
        className={isDark ? "bg-white/10" : "bg-white"}
        dotClassName={isDark ? "bg-white" : ""}
        labelClassName={isDark ? "type-p2 text-white" : "type-p2 text-[#222222]"}
      >
        {eyebrow}
      </EyebrowPill>

      <div className={`flex flex-col gap-3 ${alignmentClass}`.trim()}>
        <h2 className={isDark ? "type-h3 text-white" : "type-h3 text-[#222222]"}>{title}</h2>
        {copy ? (
          <p className={isDark ? "type-p3 max-w-[760px] text-white/72" : "type-p3 max-w-[760px] text-black/66"}>
            {copy}
          </p>
        ) : null}
      </div>
    </div>
  )
}

