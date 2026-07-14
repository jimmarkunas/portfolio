"use client"

import { Download } from "lucide-react"

import { ButtonLink } from "@/components/ButtonLink"
import { getCurrentPagePath, trackEvent } from "@/lib/analytics"

type FreebiesDownloadButtonProps = {
  href: string
  title: string
  fileName: string
}

export function FreebiesDownloadButton({ href, title, fileName }: FreebiesDownloadButtonProps) {
  return (
    <ButtonLink
      href={href}
      ariaLabel={`Download ${title}`}
      download={fileName}
      variant="primary"
      className="min-h-[44px] px-4 text-[15px]"
      onClick={() => {
        trackEvent("outbound_link_click", {
          location: "freebies_download",
          label: `Download ${title}`,
          href,
          page_path: getCurrentPagePath(),
        })
      }}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span>Download</span>
    </ButtonLink>
  )
}
