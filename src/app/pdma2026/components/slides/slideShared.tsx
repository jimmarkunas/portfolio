import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { ImageGeometry, Point } from "../../pdmaGeometry";
import { pdmaTransition, usePdmaReducedMotion } from "../pdmaMotion";

export const asset = (slide: string, file: string) => `/pdma2026/${slide}/${file}`;

export function Layer({ children, className = "", delay = 0, geometry }: { children: ReactNode; className?: string; delay?: number; geometry?: Point }) {
  const reduced = usePdmaReducedMotion();
  return <motion.div className={className} style={geometry ? { position: "absolute", left: geometry.x, top: geometry.y } : undefined} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={pdmaTransition(reduced, .55, delay)}>{children}</motion.div>;
}

export function ImageLayer({ src, className, alt = "", delay = .12, opacity = 1, geometry }: { src: string; className: string; alt?: string; delay?: number; opacity?: number; geometry?: ImageGeometry }) {
  const reduced = usePdmaReducedMotion();
  return <motion.img className={className} src={src} alt={alt} style={geometry ? { position: "absolute", left: geometry.x, top: geometry.y, width: geometry.width, height: geometry.height, opacity: geometry.opacity } : undefined} initial={reduced ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity, scale: 1 }} transition={pdmaTransition(reduced, .8, delay)} />;
}
