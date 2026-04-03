"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type MotionRevealPreset =
  | "section"
  | "card"
  | "image"
  | "shape"
  | "hero"
  | "heroMedia"
  | "flow"
  | "cardStrong"
const revealEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

type MotionRevealProps = {
  children?: ReactNode
  className?: string
  delay?: number
  preset?: MotionRevealPreset
  once?: boolean
  amount?: number
  margin?: string
  style?: CSSProperties
}

export function MotionReveal({
  children,
  className = "",
  delay = 0,
  preset = "section",
  once = true,
  amount = 0.2,
  margin = "-8% 0px",
  style,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const handleMediaQuery = () => setIsMobile(mediaQuery.matches)

    handleMediaQuery()
    mediaQuery.addEventListener("change", handleMediaQuery)

    return () => mediaQuery.removeEventListener("change", handleMediaQuery)
  }, [])

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  const sectionY = isMobile ? 9 : 14
  const cardY = isMobile ? 7 : 11
  const imageY = isMobile ? 5 : 8

  if (preset === "shape") {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0.58 }}
        whileInView={{ opacity: [0.58, 0.72, 0.58], y: [0, -3, 0] }}
        viewport={{ once, amount, margin }}
        transition={{
          duration: isMobile ? 6.6 : 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay,
        }}
      >
        {children}
      </motion.div>
    )
  }

  if (preset === "image") {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: imageY, clipPath: "inset(0 0 14% 0)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once, amount, margin }}
        transition={{ duration: isMobile ? 0.34 : 0.42, delay, ease: revealEase }}
      >
        {children}
      </motion.div>
    )
  }

  if (preset === "hero") {
    const heroY = isMobile ? 14 : 22
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: heroY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount, margin }}
        transition={{ duration: isMobile ? 0.48 : 0.62, delay, ease: revealEase }}
      >
        {children}
      </motion.div>
    )
  }

  if (preset === "heroMedia") {
    const mediaY = isMobile ? 14 : 20
    const mediaClip = isMobile ? "inset(0 0 20% 0)" : "inset(0 0 28% 0)"
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: mediaY, scale: 0.988, clipPath: mediaClip }}
        whileInView={{ opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once, amount, margin }}
        transition={{ duration: isMobile ? 0.56 : 0.7, delay, ease: revealEase }}
      >
        {children}
      </motion.div>
    )
  }

  if (preset === "flow") {
    const flowX = isMobile ? -10 : -18
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, x: flowX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once, amount, margin }}
        transition={{ duration: isMobile ? 0.38 : 0.48, delay, ease: revealEase }}
      >
        {children}
      </motion.div>
    )
  }

  if (preset === "cardStrong") {
    const cardStrongY = isMobile ? 10 : 16
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: cardStrongY, scale: 0.988 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once, amount, margin }}
        transition={{ duration: isMobile ? 0.36 : 0.48, delay, ease: revealEase }}
      >
        {children}
      </motion.div>
    )
  }

  const y = preset === "card" ? cardY : sectionY
  const duration = preset === "card"
    ? (isMobile ? 0.28 : 0.34)
    : (isMobile ? 0.34 : 0.42)

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin }}
      transition={{ duration, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  )
}
