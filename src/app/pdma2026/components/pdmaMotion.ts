import { useReducedMotion } from "motion/react";

export const pdmaEase = "easeOut" as const;
export function usePdmaReducedMotion() { return useReducedMotion(); }
export function pdmaTransition(reduced: boolean | null, duration: number, delay = 0) {
  return reduced ? { duration: 0 } : { duration, delay, ease: pdmaEase };
}
