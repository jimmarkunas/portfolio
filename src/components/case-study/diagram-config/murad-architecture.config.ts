import type { ParticlePathStyle } from "@/components/case-study/ParticleCanvas"

export type DiagramPath = { x: number; y: number }[]

const MURAD_CRISP_RED_PARTICLE_STYLE: ParticlePathStyle = {
  radius: 3,
  radiusVariance: 0,
  opacity: 0.85,
  glow: false,
}

const MURAD_CRISP_BLUE_PARTICLE_STYLE: ParticlePathStyle = {
  radius: 3,
  radiusVariance: 0,
  opacity: 0.85,
  glow: false,
}

function withParticleStyle(path: DiagramPath, particleStyle: ParticlePathStyle): DiagramPath {
  return Object.assign(path, { particleStyle })
}

export const MURAD_DESKTOP_WIDTH = 1440
export const MURAD_DESKTOP_HEIGHT = 825

export const MURAD_MOBILE_WIDTH = 340
export const MURAD_MOBILE_HEIGHT = 1440

const BIGCOMMERCE_TRUNK_X = 427

export const MURAD_PATHS: DiagramPath[] = [
  withParticleStyle(
    [{ x: 288, y: 122 }, { x: 481, y: 122 }, { x: 592, y: 122 }],
    MURAD_CRISP_BLUE_PARTICLE_STYLE,
  ),
  withParticleStyle(
    [{ x: 289, y: 321 }, { x: BIGCOMMERCE_TRUNK_X, y: 321 }, { x: BIGCOMMERCE_TRUNK_X, y: 413 }, { x: 592, y: 413 }],
    MURAD_CRISP_BLUE_PARTICLE_STYLE,
  ),
  withParticleStyle(
    [{ x: 353, y: 518 }, { x: BIGCOMMERCE_TRUNK_X, y: 518 }, { x: BIGCOMMERCE_TRUNK_X, y: 413 }, { x: 592, y: 413 }],
    MURAD_CRISP_BLUE_PARTICLE_STYLE,
  ),
  withParticleStyle(
    [{ x: 289, y: 715 }, { x: BIGCOMMERCE_TRUNK_X, y: 715 }, { x: BIGCOMMERCE_TRUNK_X, y: 413 }, { x: 592, y: 413 }],
    MURAD_CRISP_BLUE_PARTICLE_STYLE,
  ),
]

export const MURAD_RED_PATHS: DiagramPath[] = [
  withParticleStyle(
    [{ x: 848, y: 122 }, { x: 1089, y: 122 }, { x: 1281, y: 122 }, { x: 1281, y: 635 }],
    MURAD_CRISP_RED_PARTICLE_STYLE,
  ),
]

export const MURAD_MOBILE_RED_PATHS: DiagramPath[] = [
  [{ x: 165, y: 376 }, { x: 165, y: 168 }],
]

export const MURAD_MOBILE_PATHS: DiagramPath[] = [
  [{ x: 150, y: 168 }, { x: 150, y: 376 }],
  [{ x: 180, y: 336 }, { x: 180, y: 376 }],
  [{ x: 166, y: 504 }, { x: 166, y: 544 }],
  [{ x: 180, y: 504 }, { x: 180, y: 712 }],
  [{ x: 195, y: 504 }, { x: 195, y: 880 }],
  [{ x: 210, y: 504 }, { x: 210, y: 1048 }],
  [{ x: 180, y: 1176 }, { x: 180, y: 1216 }],
  [{ x: 254, y: 336 }, { x: 254, y: 1216 }],
]
