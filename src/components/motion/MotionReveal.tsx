"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type MotionRevealPreset = "section" | "card" | "image" | "shape"
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
