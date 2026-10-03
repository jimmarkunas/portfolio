"use client"

import { normalizeFlowSpec } from "./flow-animation"
import type { FlowAnimationSpec } from "./flow-types"

type Props = { specs: FlowAnimationSpec[]; reducedMotion?: boolean; active?: boolean; scale?: number }

export function FlowSignal({ specs, reducedMotion = false, active = true, scale = 1 }: Props) {
  if (reducedMotion || !active) return null

  return <>{specs.flatMap((rawSpec) => {
    const spec = normalizeFlowSpec({ ...rawSpec, count: rawSpec.count ?? 3 })
    const path = toPath(spec.path)
    const radius = spec.style.size / (2 * Math.max(scale, 0.01))
    const reverse = spec.direction === "path-reverse"
    const pingPong = spec.loopMode === "ping-pong"
    const keyPoints = pingPong ? (reverse ? "1;0;1" : "0;1;0") : reverse ? "1;0" : "0;1"
    const keyTimes = pingPong ? "0;0.5;1" : "0;1"

    return Array.from({ length: spec.count }, (_, index) => {
      const begin = (spec.delay ?? 0) + (spec.spacing ?? 0) * index + (spec.phase ?? 0)
      const repeatCount = spec.loopMode === "once" ? "1" : "indefinite"

      return <g key={`${spec.id}-${index}`} data-animated-flow-dot data-flow-path-id={spec.id} data-flow-direction={spec.direction} data-flow-loop-mode={spec.loopMode}>
        <circle r={radius} fill={spec.style.color} opacity={spec.style.opacity ?? 1} style={{ filter: spec.style.shadow }}>
          <animateMotion path={path} dur={`${spec.duration}s`} begin={`${begin}s`} repeatCount={repeatCount} keyPoints={keyPoints} keyTimes={keyTimes} calcMode="linear" />
          <animate attributeName="opacity" values={`0;${spec.style.opacity ?? 1};${spec.style.opacity ?? 1};0`} keyTimes="0;0.08;0.92;1" dur={`${spec.duration}s`} begin={`${begin}s`} repeatCount={repeatCount} />
        </circle>
      </g>
    })
  })}</>
}

function toPath(path: FlowAnimationSpec["path"]) {
  return path.kind === "svg" ? path.d : path.points.map((point, index) => `${index ? "L" : "M"}${point.x} ${point.y}`).join(" ")
}
