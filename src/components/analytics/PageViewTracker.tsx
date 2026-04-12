"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { pageview } from "@/lib/analytics"

export function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams?.toString() || ""
  const hasTrackedInitialRef = useRef(false)

  useEffect(() => {
    if (!pathname) {
      return
    }

    if (!hasTrackedInitialRef.current) {
      hasTrackedInitialRef.current = true
      return
    }

    pageview(search ? `${pathname}?${search}` : pathname)
  }, [pathname, search])

  return null
}
