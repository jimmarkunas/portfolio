export type FlowDirection = "path-forward" | "path-reverse"
export type FlowLoopMode = "restart" | "ping-pong" | "once"
export type FlowReducedMotionBehavior = "hidden" | "start" | "end" | "static-distribution"
export type FlowPath = { kind: "svg"; d: string } | { kind: "points"; points: Array<{ x: number; y: number }> }
export type FlowParticleStyle = { color: string; size: number; sizeVariance?: number; opacity?: number; borderColor?: string; borderWidth?: number; shadow?: string }
export type FlowAnimationSpec = { id: string; path: FlowPath; direction?: FlowDirection; loopMode?: FlowLoopMode; speed?: number; pathLength?: number; duration?: number; delay?: number; easing?: string; count?: number; spacing?: number; speedVariance?: number; style: FlowParticleStyle; phase?: number; zIndex?: number; reducedMotionBehavior?: FlowReducedMotionBehavior }
