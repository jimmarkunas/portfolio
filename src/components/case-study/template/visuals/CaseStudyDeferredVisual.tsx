"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import type { ComponentType } from "react"
import { useEffect, useRef, useState } from "react"

import type {
  CaseStudyPreQuoteChartKey,
  CaseStudySolutionDiagramKey,
  DiagramData,
  GlobalLocation,
} from "@/components/case-study/types"

type SharedVisualProps = {
  className?: string
  minHeightClassName?: string
  loadingLabel?: string
  eager?: boolean
}

type DeferredVisualProps =
  | (SharedVisualProps & {
      visual: "global-locations"
      title: string
      locations: GlobalLocation[]
    })
  | (SharedVisualProps & {
      visual: "problem-chart"
      chartKey: "retail-vs-dtc"
      brandName?: string
    })
  | (SharedVisualProps & {
      visual: "prequote-chart"
      chartKey: CaseStudyPreQuoteChartKey
    })
  | (SharedVisualProps & {
      visual: "solution-diagram"
      diagram?: DiagramData
      diagramKey?: CaseStudySolutionDiagramKey
    })
  | (SharedVisualProps & {
      visual: "media-react-diagram"
      component: "bi-data-silos"
    })

type DeferredVisualConfig = {
  cacheKey: string
  loader: () => Promise<{ default: ComponentType<any> }>
  componentProps?: Record<string, unknown>
  loadingLabel: string
  minHeightClassName: string
  eager: boolean
}

function joinClassNames(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ")
}

function resolveVisualConfig(props: DeferredVisualProps): DeferredVisualConfig | null {
  const loadingLabel = props.loadingLabel ?? "Loading visual..."
  const minHeightClassName = props.minHeightClassName ?? "min-h-[360px]"
  const eager = props.eager ?? false

  if (props.visual === "global-locations") {
    return {
      cacheKey: "global-locations",
      loader: () =>
        import("@/components/case-study/GlobalLocationsMap").then((module) => ({
          default: module.GlobalLocationsMap,
        })),
      componentProps: {
        title: props.title,
        locations: props.locations,
      },
      loadingLabel,
      minHeightClassName,
      eager,
    }
  }

  if (props.visual === "problem-chart") {
    return {
      cacheKey: `problem-chart:${props.chartKey}`,
      loader: () => import("@/components/case-study/MrsMeyersRetailVsDtcChart"),
      componentProps: {
        brandName: props.brandName,
      },
      loadingLabel,
      minHeightClassName,
      eager,
    }
  }

  if (props.visual === "prequote-chart") {
    if (props.chartKey === "directv-revenue") {
      return {
        cacheKey: "prequote:directv-revenue",
        loader: () =>
          import("@/components/case-study/DirecTVRevenueChart").then((module) => ({
            default: module.DirecTVRevenueChart,
          })),
        loadingLabel,
        minHeightClassName,
        eager,
      }
    }

    return {
      cacheKey: "prequote:bi-data-silos",
      loader: () => import("@/components/case-study/BoehringerDataSilosDiagram"),
      loadingLabel,
      minHeightClassName,
      eager,
    }
  }

  if (props.visual === "solution-diagram") {
    if (props.diagram) {
      return {
        cacheKey: "solution-diagram:headless-commerce",
        loader: () => import("@/app/diagrams/headless_commerce_react"),
        componentProps: {
          data: props.diagram,
        },
        loadingLabel,
        minHeightClassName,
        eager,
      }
    }

    if (!props.diagramKey) {
      return null
    }

    const diagramLoaders: Record<
      CaseStudySolutionDiagramKey,
      () => Promise<{ default: ComponentType<any> }>
    > = {
      "murad-architecture": () => import("@/components/case-study/MuradArchitectureDiagram"),
      "bi-commerce-ecosystem": () => import("@/components/case-study/bi-commerce-ecosystem-diagram"),
      "scj-commerce-architecture": () => import("@/components/case-study/SCJCommerceArchitecture"),
    }

    return {
      cacheKey: `solution-diagram:${props.diagramKey}`,
      loader: diagramLoaders[props.diagramKey],
      loadingLabel,
      minHeightClassName,
      eager,
    }
  }

  if (props.component === "bi-data-silos") {
    return {
      cacheKey: "media-react-diagram:bi-data-silos",
      loader: () => import("@/components/case-study/BoehringerDataSilosDiagram"),
      loadingLabel,
      minHeightClassName,
      eager,
    }
  }

  return null
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

export function CaseStudyDeferredVisual(props: DeferredVisualProps) {
  const config = resolveVisualConfig(props)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(rootRef, { once: true, margin: "-15% 0px" })
  const shouldReduceMotion = useReducedMotion()
  const [loadedKey, setLoadedKey] = useState<string | null>(null)
  const [LoadedComponent, setLoadedComponent] = useState<ComponentType<any> | null>(null)
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    if (loadedKey === config?.cacheKey) {
      return
    }
    setLoadedKey(config?.cacheKey ?? null)
    setLoadedComponent(null)
    setLoadFailed(false)
  }, [config?.cacheKey, loadedKey])

  const shouldLoad = !!config && (config.eager || isInView)

  useEffect(() => {
    if (!config || !shouldLoad || LoadedComponent || loadFailed) {
      return
    }

    let isCancelled = false
    config
      .loader()
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
  }, [config, shouldLoad, LoadedComponent, loadFailed])

  if (!config) {
    return null
  }

  return (
    <div ref={rootRef} className={joinClassNames("w-full", props.className)}>
      {LoadedComponent ? (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <LoadedComponent {...(config.componentProps ?? {})} />
        </motion.div>
      ) : loadFailed ? (
        <div
          className={joinClassNames(
            "flex items-center justify-center rounded-[10px] border border-[#e5e7eb] bg-white px-4 py-8 text-center",
            config.minHeightClassName
          )}
        >
          <p className="type-p4 text-[#4B5154]">Unable to load visual.</p>
        </div>
      ) : (
        <LoadingSkeleton
          label={config.loadingLabel}
          minHeightClassName={config.minHeightClassName}
          reduceMotion={!!shouldReduceMotion}
        />
      )}
    </div>
  )
}
