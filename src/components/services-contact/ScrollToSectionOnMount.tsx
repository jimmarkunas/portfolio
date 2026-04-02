"use client"

import { useEffect } from "react"

export function ScrollToSectionOnMount({ targetId }: { targetId: string }) {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      target?.scrollIntoView({ block: "start" })
    })

    return () => cancelAnimationFrame(frame)
  }, [targetId])

  return null
}

