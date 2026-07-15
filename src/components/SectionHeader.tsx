import type { ReactNode } from "react"

import { EyebrowPill } from "@/components/EyebrowPill"

type SectionHeaderProps = {
  eyebrow: ReactNode
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  controls?: ReactNode
  titleAs?: "h1" | "h2" | "h3" | "h4"
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
  eyebrowClassName?: string
  eyebrowLabelClassName?: string
  titleGroupClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  controlsClassName?: string
}

function hasTextContent(value: ReactNode) {
  return value !== null && value !== undefined && !(typeof value === "string" && value.length === 0)
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  controls,
  titleAs = "h2",
  align = "left",
  tone = "light",
  className = "",
  eyebrowClassName = "",
  eyebrowLabelClassName = "",
  titleGroupClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  controlsClassName = "",
}: SectionHeaderProps) {
  const isDark = tone === "dark"
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left"
  const HeadingTag = titleAs
  const shouldRenderTitleGroup = hasTextContent(title) || hasTextContent(description)
  const titleToneClass = isDark ? "text-white" : "text-[#222222]"
  const descriptionToneClass = isDark ? "text-white/72" : "text-black/66"

  return (
    <div className={`flex flex-col ${alignmentClass} ${className}`.trim()}>
      <EyebrowPill
        className={`${isDark ? "!bg-white/10" : ""} ${eyebrowClassName}`.trim()}
        dotClassName={isDark ? "!bg-white" : ""}
        labelClassName={`${isDark ? "text-white" : "text-[#222222]"} ${eyebrowLabelClassName}`.trim()}
      >
        {eyebrow}
      </EyebrowPill>

      {shouldRenderTitleGroup ? (
        <div className={`${alignmentClass} ${titleGroupClassName}`.trim()}>
          {hasTextContent(title) ? <HeadingTag className={`${titleToneClass} ${titleClassName}`.trim()}>{title}</HeadingTag> : null}
          {hasTextContent(description) ? (
            <p className={`${descriptionToneClass} ${descriptionClassName}`.trim()}>{description}</p>
          ) : null}
        </div>
      ) : null}

      {children}

      {controls ? <div className={controlsClassName}>{controls}</div> : null}
    </div>
  )
}
