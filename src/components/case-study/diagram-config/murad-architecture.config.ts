export type DiagramPath = { x: number; y: number }[]

export const MURAD_DESKTOP_WIDTH = 1440
export const MURAD_DESKTOP_HEIGHT = 825

export const MURAD_MOBILE_WIDTH = 340
export const MURAD_MOBILE_HEIGHT = 1440

export const MURAD_PATHS: DiagramPath[] = [
  [{ x: 288, y: 122 }, { x: 481, y: 122 }, { x: 592, y: 122 }],
  [{ x: 720, y: 202 }, { x: 720, y: 352 }],
  [{ x: 353, y: 320 }, { x: 426, y: 320 }, { x: 426, y: 413 }, { x: 592, y: 413 }],
  [{ x: 353, y: 518 }, { x: 426, y: 518 }, { x: 426, y: 413 }, { x: 592, y: 413 }],
  [{ x: 289, y: 715 }, { x: 426, y: 715 }, { x: 426, y: 413 }, { x: 592, y: 413 }],
  [{ x: 720, y: 479 }, { x: 720, y: 635 }],
]

export const MURAD_RED_PATHS: DiagramPath[] = [
  [{ x: 730, y: 635 }, { x: 730, y: 479 }],
  [{ x: 848, y: 413 }, { x: 1281, y: 413 }, { x: 1281, y: 635 }],
  [{ x: 848, y: 122 }, { x: 1089, y: 122 }, { x: 1281, y: 122 }, { x: 1281, y: 635 }],
]

export const MURAD_MOBILE_RED_PATHS: DiagramPath[] = [
  [{ x: 160, y: 376 }, { x: 160, y: 168 }],
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
