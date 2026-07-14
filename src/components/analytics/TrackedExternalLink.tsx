"use client"

import type { ReactNode } from "react"

import { TextLink } from "@/components/TextLink"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type TrackedExternalLinkProps = {
  href: string
  label: string
  location: string
  className?: string
  children: ReactNode
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
  download?: string
  ariaLabel?: string
  eventName?: "book_call_click" | "outbound_link_click"
}

const BOOK_CALL_PATTERN = /book\s*a\s*call/i

function resolveEventName(
  label: string,
  eventName?: "book_call_click" | "outbound_link_click",
) {
  if (eventName) {
    return eventName
  }

  return BOOK_CALL_PATTERN.test(label) ? "book_call_click" : "outbound_link_click"
}

export function TrackedExternalLink({
  href,
  label,
  location,
  className,
  children,
  target,
  rel,
  download,
  ariaLabel,
  eventName,
}: TrackedExternalLinkProps) {
  return (
    <TextLink
      href={href}
      external
      target={target}
      rel={rel}
      download={download}
      className={className}
      ariaLabel={ariaLabel}
      onClick={() => {
        trackEvent(resolveEventName(label, eventName), {
          location,
          label,
          href,
          page_path: getCurrentPagePath(),
        })
      }}
    >
      {children}
    </TextLink>
  )
}
