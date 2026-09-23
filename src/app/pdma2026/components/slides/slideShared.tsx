import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { ImageGeometry, Point } from "../../pdmaGeometry";

export const asset = (slide: string, file: string) => `/pdma2026/${slide}/${file}`;

export function Layer({ children, className = "", delay = 0, geometry }: { children: ReactNode; className?: string; delay?: number; geometry?: Point }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} style={geometry ? { position: "absolute", left: geometry.x, top: geometry.y } : undefined} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .55, delay: reduced ? 0 : delay, ease: "easeOut" }}>{children}</motion.div>;
}

export function ImageLayer({ src, className, alt = "", delay = .12, opacity = 1, geometry }: { src: string; className: string; alt?: string; delay?: number; opacity?: number; geometry?: ImageGeometry }) {
  const reduced = useReducedMotion();
  return <motion.img className={className} src={src} alt={alt} style={geometry ? { position: "absolute", left: geometry.x, top: geometry.y, width: geometry.width, height: geometry.height, opacity: geometry.opacity } : undefined} initial={reduced ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity, scale: 1 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : delay, ease: "easeOut" }} />;
}
