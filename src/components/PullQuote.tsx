import type { CSSProperties, ReactNode } from "react"

type PullQuoteProps = {
  quote: ReactNode
  attributionTitle: string
  attributionSubtitle: string
  initials?: string
  avatarSrc?: string
  className?: string
  contentClassName?: string
  quoteClassName?: string
  attributionClassName?: string
  glyphClassName?: string
  dark?: boolean
  decorativeFrame?: ReactNode
  hoverBlue?: boolean
}

export function PullQuote({
  quote,
  attributionTitle,
  attributionSubtitle,
  initials = "CQ",
  avatarSrc,
  className = "",
  contentClassName = "",
  quoteClassName = "",
  attributionClassName = "",
  glyphClassName = "",
  dark = false,
  decorativeFrame,
  hoverBlue = false,
}: PullQuoteProps) {
  const quoteTextClass = dark ? "text-white" : "text-[#222222]"
  const subtitleTextClass = dark ? "text-[rgba(255,255,255,0.55)]" : "text-[rgba(34,34,34,0.55)]"
  const badgeClasses = dark
    ? "bg-[#F3F3F3] text-[#222222]"
    : "bg-[#F3F3F3] text-[#222222]"
  const quoteClampStyle: CSSProperties = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  }
  const hoverTextClass = hoverBlue ? "transition-colors duration-200 group-hover:text-[#447ACB]" : ""

  return (
    <div className={`relative overflow-hidden px-6 py-8 text-center md:px-10 md:py-10 lg:px-12 lg:py-12 ${className}`.trim()}>
      {decorativeFrame}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 font-serif text-[180px] leading-none tracking-[-0.14em] md:text-[250px] ${glyphClassName}`.trim()}
      >
        &ldquo;
      </div>

      <div className={`relative mx-auto flex max-w-[1240px] flex-col items-center ${contentClassName}`.trim()}>
        <blockquote
          className={`max-w-[1180px] px-4 text-[clamp(24px,3vw,52px)] italic leading-[1.28] tracking-[-0.03em] sm:px-8 md:px-12 lg:px-16 ${quoteTextClass} ${hoverTextClass} ${quoteClassName}`.trim()}
          style={quoteClampStyle}
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
            <div className={`type-p2 font-medium ${quoteTextClass}`.trim()}>
              {attributionTitle}
            </div>
            <div className={`type-p4 ${subtitleTextClass}`.trim()}>
              {attributionSubtitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
