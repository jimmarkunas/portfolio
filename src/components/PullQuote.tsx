import type { ReactNode } from "react"

type PullQuoteProps = {
  quote: ReactNode
  attributionTitle: string
  attributionSubtitle: string
  initials?: string
  avatarSrc?: string
  className?: string
  quoteClassName?: string
  attributionClassName?: string
  glyphClassName?: string
  dark?: boolean
  decorativeFrame?: ReactNode
}

export function PullQuote({
  quote,
  attributionTitle,
  attributionSubtitle,
  initials = "CQ",
  avatarSrc,
  className = "",
  quoteClassName = "",
  attributionClassName = "",
  glyphClassName = "",
  dark = false,
  decorativeFrame,
}: PullQuoteProps) {
  const quoteTextColor = dark ? "text-[#FEFEFE]" : "text-[#222222]"
  const subtitleColor = dark ? "text-white/55" : "text-[#222222]/55"
  const badgeClasses = dark
    ? "bg-[#F3F3F3] text-[#222222]"
    : "bg-[#F3F3F3] text-[#222222]"

  return (
    <div className={`relative overflow-hidden px-6 py-8 text-center md:px-10 md:py-10 lg:px-12 lg:py-12 ${className}`.trim()}>
      {decorativeFrame}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 font-serif text-[180px] leading-none tracking-[-0.14em] md:text-[250px] ${glyphClassName}`.trim()}
      >
        &ldquo;
      </div>

      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center">
        <blockquote
          className={`max-w-[1180px] text-[28px] italic leading-[1.45] tracking-[-0.03em] md:text-[36px] lg:text-[52px] lg:leading-[1.35] ${quoteTextColor} ${quoteClassName}`.trim()}
        >
          {quote}
        </blockquote>

        <div className={`mt-4 flex items-center gap-4 ${attributionClassName}`.trim()}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={attributionTitle}
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full font-[var(--font-family-display)] text-[22px] ${badgeClasses}`}
            >
              {initials}
            </div>
          )}
          <div className="text-left">
            <div className={`type-p2 font-medium ${quoteTextColor}`}>{attributionTitle}</div>
            <div className={`type-p4 ${subtitleColor}`}>{attributionSubtitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
