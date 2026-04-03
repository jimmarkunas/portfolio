"use client"

import { useEffect, useState } from "react"

function getMatch(query: string) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false
  }

  return window.matchMedia(query).matches
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(() => getMatch(query))

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined
    }

    const mediaQuery = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    setMatches(mediaQuery.matches)
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange)
      return () => mediaQuery.removeEventListener("change", onChange)
    }
    mediaQuery.addListener(onChange)
    return () => mediaQuery.removeListener(onChange)
  }, [query])

  return matches
}

export function useAdaptiveDiagramMotion() {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const constrainedViewport = useMediaQuery("(max-width: 1024px)")

  return {
    prefersReducedMotion,
    constrainedViewport,
    // Keep full diagram motion on mobile/tablet unless the user explicitly
    // requests reduced motion at OS/browser level.
    shouldReduceMotion: prefersReducedMotion,
  }
}
