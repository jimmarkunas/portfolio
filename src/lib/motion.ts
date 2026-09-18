export const presentationSlideMotion = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: {
    duration: 0.48,
    ease: [0.2, 0, 0, 1] as const,
  },
} as const

export const presentationRevealMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.32,
    ease: [0.2, 0, 0, 1] as const,
  },
} as const
