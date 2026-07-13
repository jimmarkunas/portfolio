import Link from "next/link"

import type { PortfolioImageCardProps } from "./types"
import { portfolioHoverOverlayClass } from "./styles"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

function PortfolioHoverIcon() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      <span className="inline-flex h-20 w-20 items-center justify-center gap-2.5 rounded-[100px] bg-[#447ACB] p-3.5 outline outline-1 outline-offset-[-1px] outline-[#447ACB]/10">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.3402 17.2594L13.5615 33.0381L10.9688 30.4454L26.7475 14.6667H12.8403V11H33.0069V31.1667H29.3402V17.2594Z"
            fill="#FFE6E6"
          />
        </svg>
      </span>
    </span>
  )
}

export function PortfolioImageCard({
  href,
  src,
  alt,
  aspectRatio,
  className,
  wrapperClassName,
  fillContainer,
  loading,
  fetchPriority,
}: PortfolioImageCardProps) {
  return (
    <div className={wrapperClassName}>
      <Link
        href={href}
        className={className}
        style={fillContainer ? undefined : { aspectRatio }}
        onClick={() => {
          trackEvent("case_study_open", {
            location: "portfolio_grid",
            label: alt,
            page_path: getCurrentPagePath(),
          })
        }}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span aria-hidden="true" className={portfolioHoverOverlayClass} />
        <PortfolioHoverIcon />
      </Link>
    </div>
  )
}
