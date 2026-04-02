"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

type TriggerMode = "load" | "in-view"

type AnimatedMetricValueProps = {
  value: string
  trigger?: TriggerMode
  className?: string
}

type ParsedValue = {
  prefix: string
  suffix: string
  value: number
  decimals: number
  useGrouping: boolean
}

function parseMetricValue(raw: string): ParsedValue | null {
  const allMatches = Array.from(raw.matchAll(/-?\d[\d,]*(?:\.\d+)?/g))
  if (allMatches.length !== 1) return null
  const match = allMatches[0]
  if (!match || match.index == null) return null

  const numberText = match[0]
  const prefix = raw.slice(0, match.index)
  const suffix = raw.slice(match.index + numberText.length)

  // Skip ambiguous composite values such as "6m-2w".
  if (suffix.includes("-")) return null

  const normalized = numberText.replace(/,/g, "")
  const parsed = Number.parseFloat(normalized)
  if (!Number.isFinite(parsed)) return null

  const decimalPoint = normalized.indexOf(".")
  const decimals = decimalPoint >= 0 ? normalized.length - decimalPoint - 1 : 0
  const useGrouping = numberText.includes(",")

  return {
    prefix,
    suffix,
    value: parsed,
    decimals,
    useGrouping,
  }
}

function formatMetricValue(value: number, parsed: ParsedValue) {
  if (parsed.decimals > 0) {
    const formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
      useGrouping: parsed.useGrouping,
    })
    return `${parsed.prefix}${formatted}${parsed.suffix}`
  }

  const rounded = Math.round(value)
  const formatted = parsed.useGrouping ? rounded.toLocaleString("en-US") : String(rounded)
  return `${parsed.prefix}${formatted}${parsed.suffix}`
}

export function AnimatedMetricValue({
  value,
  trigger = "in-view",
  className = "",
}: AnimatedMetricValueProps) {
  const parsed = useMemo(() => parseMetricValue(value), [value])
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(rootRef, { once: true, amount: 0.4, margin: "-12% 0px" })
  const [displayValue, setDisplayValue] = useState(value)

  const shouldStart = trigger === "load" ? true : isInView

  useEffect(() => {
    if (!parsed) {
      setDisplayValue(value)
      return
    }

    if (reduceMotion || !shouldStart) {
      setDisplayValue(value)
      return
    }

    let frameId = 0
    const startedAt = performance.now()
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 767px)").matches
    const durationMs = isMobile ? 700 : 950

    const tick = (now: number) => {
      const elapsed = now - startedAt
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parsed.value * eased
      setDisplayValue(formatMetricValue(current, parsed))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      } else {
        setDisplayValue(value)
      }
    }

    frameId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frameId)
  }, [parsed, reduceMotion, shouldStart, value])

  return (
    <span ref={rootRef} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {displayValue}
    </span>
  )
}
