"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import type { ComponentType } from "react"
import { useEffect, useRef, useState } from "react"

export type DeferredVisualLoaderProps = {
  cacheKey: string
  loader: () => Promise<{ default: ComponentType<any> }>
  componentProps?: Record<string, unknown>
  className?: string
  minHeightClassName?: string
  loadingLabel?: string
  eager?: boolean
}

function joinClassNames(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ")
}

function LoadingSkeleton({
  label,
  minHeightClassName,
  reduceMotion,
}: {
  label: string
  minHeightClassName: string
  reduceMotion: boolean
}) {
  return (
    <div
      className={joinClassNames(
        "relative w-full overflow-hidden rounded-[10px] border border-[#e5e7eb] bg-white/80",
        minHeightClassName
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(239,243,248,0.8),rgba(255,255,255,0.95),rgba(239,243,248,0.8))]" />
      {reduceMotion ? null : (
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(68,122,203,0.18),transparent)]"
          initial={{ x: "-120%" }}
          animate={{ x: "320%" }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
        />
      )}
      <div className="relative z-10 flex h-full min-h-[inherit] items-center justify-center px-4 text-center">
        <p className="type-p4 text-[#4B5154]">{label}</p>
      </div>
    </div>
  )
}

export function DeferredVisualLoader({
  cacheKey,
  loader,
  componentProps,
  className,
  minHeightClassName = "min-h-[360px]",
  loadingLabel = "Loading visual...",
  eager = false,
}: DeferredVisualLoaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(rootRef, { once: true, margin: "-15% 0px" })
  const shouldReduceMotion = useReducedMotion()
  const [loadedKey, setLoadedKey] = useState<string | null>(null)
  const [LoadedComponent, setLoadedComponent] = useState<ComponentType<any> | null>(null)
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    if (loadedKey === cacheKey) {
      return
    }
    setLoadedKey(cacheKey)
    setLoadedComponent(null)
    setLoadFailed(false)
  }, [cacheKey, loadedKey])

  const shouldLoad = eager || isInView

  useEffect(() => {
    if (!shouldLoad || LoadedComponent || loadFailed) {
      return
    }

    let isCancelled = false
    loader()
      .then((module) => {
        if (!isCancelled) {
          setLoadedComponent(() => module.default)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setLoadFailed(true)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [loader, shouldLoad, LoadedComponent, loadFailed])

  return (
    <div ref={rootRef} className={joinClassNames("w-full", className)}>
      {LoadedComponent ? (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LoadedComponent {...(componentProps ?? {})} />
        </motion.div>
      ) : loadFailed ? (
        <div
          className={joinClassNames(
            "flex items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-white px-4 py-8 text-center",
            minHeightClassName
          )}
        >
          <p className="type-p4 text-[#4B5154]">Unable to load visual.</p>
        </div>
      ) : (
        <LoadingSkeleton
          label={loadingLabel}
          minHeightClassName={minHeightClassName}
          reduceMotion={!!shouldReduceMotion}
        />
      )}
    </div>
  )
}
