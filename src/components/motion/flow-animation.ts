import type { FlowAnimationSpec, FlowDirection, FlowLoopMode } from "./flow-types"
export const FLOW_DEFAULTS = { direction: "path-forward" as FlowDirection, loopMode: "restart" as FlowLoopMode, easing: "linear", reducedMotionBehavior: "hidden" as const }
export function normalizeFlowSpec(spec: FlowAnimationSpec) {
  const duration = spec.speed && spec.pathLength ? spec.pathLength / spec.speed : spec.duration ?? 1
  if (process.env.NODE_ENV !== "production" && spec.speed && spec.duration) console.warn(`[flow-animation] ${spec.id}: speed takes precedence over duration`)
  return { ...FLOW_DEFAULTS, ...spec, duration, delay: spec.delay ?? 0, count: spec.count ?? 1, phase: spec.phase ?? 0 }
}
