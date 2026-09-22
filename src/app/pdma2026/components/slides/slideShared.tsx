import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export const asset = (slide: string, file: string) => `/pdma2026/${slide}/${file}`;

export function Layer({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .55, delay: reduced ? 0 : delay, ease: "easeOut" }}>{children}</motion.div>;
}

export function ImageLayer({ src, className, alt = "", delay = .12, opacity = 1 }: { src: string; className: string; alt?: string; delay?: number; opacity?: number }) {
  const reduced = useReducedMotion();
  return <motion.img className={className} src={src} alt={alt} initial={reduced ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity, scale: 1 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : delay, ease: "easeOut" }} />;
}
