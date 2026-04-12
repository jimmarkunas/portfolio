"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { pageview } from "@/lib/analytics"

export function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams?.toString() || ""

  useEffect(() => {
    if (!pathname) {
      return
    }

    pageview(search ? `${pathname}?${search}` : pathname)
  }, [pathname, search])

  return null
}
