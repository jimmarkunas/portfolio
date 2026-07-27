"use client"

import { useEffect, useId, useMemo, useState } from "react"
import { useReducedMotion } from "motion/react"

export type ParticleSpacingMode = "uniform" | "random"

type AnimatedSvgPathDotsProps = {
  pathRef: React.RefObject<SVGPathElement | null>
  direction?: "forward" | "reverse"
  speed: number
  count?: number
  radius?: number
  color: string
  opacity?: number
  phaseOffset?: number
  className?: string
  reducedMotionBehavior?: "hidden" | "start" | "end"
  spacingMode?: ParticleSpacingMode
  randomSeed?: string | number
  minimumPhaseGap?: number
}

function hashSeed(seed: string | number) {
  let hash = 2166136261
  for (const character of String(seed)) {
    hash ^= character.charCodeAt(0)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function seededRandom(seed: string | number) {
  let state = hashSeed(seed)
  return () => {
    state += 0x6d2b79f5
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function circularPhaseDistance(first: number, second: number) {
  const distance = Math.abs(first - second)
  return Math.min(distance, 1 - distance)
}

function createRandomPhaseOffsets(count: number, randomSeed: string | number | undefined, minimumPhaseGap: number) {
  const nextRandom = randomSeed === undefined ? Math.random : seededRandom(randomSeed)
  const offsets: number[] = []
  const gap = Math.max(0, Math.min(0.49, minimumPhaseGap))
  let attempts = 0
  const maxAttempts = Math.max(100, count * 100)

  while (offsets.length < count && attempts < maxAttempts) {
    const candidate = nextRandom()
    if (gap === 0 || offsets.every((offset) => circularPhaseDistance(offset, candidate) >= gap)) {
      offsets.push(candidate)
    }
    attempts += 1
  }

  while (offsets.length < count) offsets.push(nextRandom())
  return offsets
}

export function AnimatedSvgPathDots({
  pathRef,
  direction = "forward",
  speed,
  count = 3,
  radius = 3,
  color,
  opacity = 0.85,
  phaseOffset = 0,
  className,
  reducedMotionBehavior = "hidden",
  spacingMode = "uniform",
  randomSeed,
  minimumPhaseGap = 0,
}: AnimatedSvgPathDotsProps) {
  const id = useId().replace(/:/g, "")
  const prefersReducedMotion = useReducedMotion()
  const [pathId, setPathId] = useState<string | null>(null)
  const [pathLength, setPathLength] = useState<number | null>(null)
  const dotCount = Math.max(1, Math.floor(count))
  const phaseOffsets = useMemo(
    () => spacingMode === "random"
      ? createRandomPhaseOffsets(dotCount, randomSeed, minimumPhaseGap)
      : Array.from({ length: dotCount }, (_, index) => index / dotCount),
    [dotCount, minimumPhaseGap, randomSeed, spacingMode],
  )

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const nextPathId = path.id || `animated-svg-path-${id}`
    if (!path.id) path.id = nextPathId

    setPathId(nextPathId)
    setPathLength(path.getTotalLength())
  }, [id, pathRef])

  if (!pathId || !pathLength || speed <= 0) return null

  const duration = pathLength / speed
  const isReduced = prefersReducedMotion === true
  if (isReduced && reducedMotionBehavior === "hidden") return null

  const isReverse = direction === "reverse"
  const keyPoints = isReverse ? "1;0" : "0;1"
  const stationaryPoint = reducedMotionBehavior === "end"
    ? (isReverse ? "0" : "1")
    : (isReverse ? "1" : "0")

  return (
    <g className={className} aria-hidden="true">
      {Array.from({ length: dotCount }, (_, index) => {
        const begin = phaseOffset + phaseOffsets[index] * duration
        return (
          <circle
            key={`${id}-dot-${index}`}
            r={radius}
            fill={color}
            opacity={opacity}
            data-animated-svg-path-dot
          >
            <animateMotion
              dur={isReduced ? "0.001s" : `${duration}s`}
              begin={isReduced ? "0s" : `${begin}s`}
              repeatCount={isReduced ? "1" : "indefinite"}
              fill="freeze"
              keyPoints={isReduced ? `${stationaryPoint};${stationaryPoint}` : keyPoints}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </circle>
        )
      })}
    </g>
  )
}
