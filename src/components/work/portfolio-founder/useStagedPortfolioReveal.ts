import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

type StageKey = "title" | "pills" | "row1" | "row2" | "row3" | "row4"

type StageVisibility = Record<StageKey, boolean>

const INITIAL_STAGE_VISIBILITY: StageVisibility = {
  title: true,
  pills: true,
  row1: true,
  row2: true,
  row3: true,
  row4: true,
}

function revealStages(prev: StageVisibility, stages: StageKey[]) {
  let changed = false
  const next = { ...prev }

  for (const stage of stages) {
    if (next[stage]) {
      continue
    }

    next[stage] = true
    changed = true
  }

  return changed ? next : prev
}

export function useStagedPortfolioReveal() {
  const [isMobile, setIsMobile] = useState(false)
  const [visibility, setVisibility] = useState<StageVisibility>(INITIAL_STAGE_VISIBILITY)

  const titleRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const row3Ref = useRef<HTMLDivElement>(null)
  const row4Ref = useRef<HTMLDivElement>(null)

  const titleInView = useInView(titleRef, { once: true, margin: "0px 0px 65% 0px" })
  const row1InView = useInView(row1Ref, { once: true, margin: "0px 0px 35% 0px" })
  const row2InView = useInView(row2Ref, { once: true, margin: "0px 0px 35% 0px" })
  const row3InView = useInView(row3Ref, { once: true, margin: "0px 0px 35% 0px" })
  const row4InView = useInView(row4Ref, { once: true, margin: "0px 0px 35% 0px" })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const onChange = () => setIsMobile(mediaQuery.matches)
    onChange()
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onChange)
      return () => mediaQuery.removeEventListener("change", onChange)
    }

    mediaQuery.addListener(onChange)
    return () => mediaQuery.removeListener(onChange)
  }, [])

  useEffect(() => {
    if (!titleInView) return

    setVisibility((prev) => revealStages(prev, ["title"]))
    const timer = window.setTimeout(() => {
      setVisibility((prev) => revealStages(prev, ["pills"]))
    }, 60)

    return () => window.clearTimeout(timer)
  }, [titleInView])

  useEffect(() => {
    const stagesToReveal: StageKey[] = []

    if (row1InView) stagesToReveal.push("row1")
    if (row2InView) stagesToReveal.push("row2")
    if (row3InView) stagesToReveal.push("row3")
    if (row4InView) stagesToReveal.push("row4")

    if (stagesToReveal.length === 0) {
      return
    }

    setVisibility((prev) => revealStages(prev, stagesToReveal))
  }, [row1InView, row2InView, row3InView, row4InView])

  return {
    itemY: isMobile ? 8 : 12,
    visibility,
    sentinelRefs: {
      title: titleRef,
      row1: row1Ref,
      row2: row2Ref,
      row3: row3Ref,
      row4: row4Ref,
    },
  }
}
