"use client"

import { motion, useReducedMotion } from "motion/react"
import type { CaseStudyData } from "@/content/case-studies"

const sectionStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
} as const

const sectionItem = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
} as const

const bubblePop = {
  hidden: { scale: 0.96, opacity: 0.85 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 24, mass: 0.55 },
  },
} as const

const panelParallax = {
  hidden: { y: 6, opacity: 0.55 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const

const arrowCue = {
  hidden: { opacity: 0, x: -5 },
  show: {
    opacity: 0.55,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut", delay: 0.32 },
  },
} as const

const starCircleFloat = {
  boxShadow: [
    "0 0 0 0 rgba(68,122,203,0.00)",
    "0 0 0 4px rgba(68,122,203,0.12)",
    "0 0 0 0 rgba(68,122,203,0.00)",
  ],
}

function getStarCircleFloatTransition(delay: number) {
  return {
    duration: 3.2,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
    delay,
  }
}

export function CaseStudySTARSection({ data }: { data: CaseStudyData }) {
  if (!data.star) return null
  const { situation, task, actions, results } = data.star
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-[12px] border border-[#e5e7eb] bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={panelParallax}
      animate={{
        borderColor: ["rgba(229,231,235,1)", "rgba(209,213,219,1)", "rgba(229,231,235,1)"],
      }}
      transition={{
        borderColor: { duration: 5.6, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]"
        variants={panelParallax}
      />

      <motion.div
        className="relative grid grid-cols-1 divide-y divide-[#e5e7eb] lg:grid-cols-[1fr_1fr_1.4fr_1fr] lg:divide-x lg:divide-y-0"
        variants={sectionStagger}
      >
        <motion.div className="relative flex flex-col gap-4 overflow-hidden p-5 lg:p-6" variants={sectionItem}>
          <div className="flex items-center gap-2.5">
            <motion.div
              className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f3f3f3]"
              variants={bubblePop}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      ...starCircleFloat,
                      transition: getStarCircleFloatTransition(0),
                    }
              }
              viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.7 }}
            >
              <motion.span
                className="absolute inset-[-3px] rounded-full border border-[#447acb]/25"
                initial={{ scale: 0.84, opacity: 0 }}
                whileInView={{ scale: [0.84, 1.18], opacity: [0.45, 0] }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              />
              <span className="text-[24px] font-semibold leading-none text-[#7b7b7b]">S</span>
            </motion.div>
            <span className="text-[16px] font-medium uppercase leading-none tracking-[0.1em] text-[#7b7b7b]">Situation</span>
            <motion.span
              className="ml-1 hidden text-[#447acb] lg:inline-block"
              variants={arrowCue}
              whileInView={{ x: [0, 8, 0], opacity: [0.18, 1, 0.18] }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.85, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>
          <div className="flex flex-col gap-1 rounded-[8px] border border-[#e5e7eb] bg-[#f9f9f9] p-4">
            <span className="mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#7b7b7b]">The problem</span>
            <p className="type-p4 text-[#222222]">{situation}</p>
          </div>
        </motion.div>

        <motion.div className="relative flex flex-col gap-4 overflow-hidden p-5 lg:p-6" variants={sectionItem}>
          <div className="flex items-center gap-2.5">
            <motion.div
              className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#447acb]/30 bg-[#447acb]/10"
              variants={bubblePop}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      ...starCircleFloat,
                      transition: getStarCircleFloatTransition(0.22),
                    }
              }
              viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.7 }}
            >
              <motion.span
                className="absolute inset-[-3px] rounded-full border border-[#447acb]/25"
                initial={{ scale: 0.84, opacity: 0 }}
                whileInView={{ scale: [0.84, 1.18], opacity: [0.45, 0] }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
              />
              <span className="text-[24px] font-semibold leading-none text-[#447acb]">T</span>
            </motion.div>
            <span className="text-[16px] font-medium uppercase leading-none tracking-[0.1em] text-[#7b7b7b]">Task</span>
            <motion.span
              className="ml-1 hidden text-[#447acb] lg:inline-block"
              variants={arrowCue}
              whileInView={{ x: [0, 8, 0], opacity: [0.18, 1, 0.18] }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.85, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut", delay: 0.14 }}
            >
              →
            </motion.span>
          </div>
          <p className="type-p4 text-[#222222]">{task}</p>
        </motion.div>

        <motion.div className="relative flex flex-col gap-4 overflow-hidden p-5 lg:p-6" variants={sectionItem}>
          <div className="flex items-center gap-2.5">
            <motion.div
              className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f3f3f3]"
              variants={bubblePop}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      ...starCircleFloat,
                      transition: getStarCircleFloatTransition(0.44),
                    }
              }
              viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.7 }}
            >
              <motion.span
                className="absolute inset-[-3px] rounded-full border border-[#447acb]/25"
                initial={{ scale: 0.84, opacity: 0 }}
                whileInView={{ scale: [0.84, 1.18], opacity: [0.45, 0] }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.44, ease: "easeOut" }}
              />
              <span className="text-[24px] font-semibold leading-none text-[#7b7b7b]">A</span>
            </motion.div>
            <span className="text-[16px] font-medium uppercase leading-none tracking-[0.1em] text-[#7b7b7b]">Action</span>
            <motion.span
              className="ml-1 hidden text-[#447acb] lg:inline-block"
              variants={arrowCue}
              whileInView={{ x: [0, 8, 0], opacity: [0.18, 1, 0.18] }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.85, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut", delay: 0.28 }}
            >
              →
            </motion.span>
          </div>
          <ol className="flex flex-col gap-3">
            {actions.map((action, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F1112]">
                  <span className="text-[10px] font-semibold text-white">{i + 1}</span>
                </div>
                <span className="type-p4 text-[#222222]">{action}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div className="relative flex flex-col gap-4 overflow-hidden p-5 lg:p-6" variants={sectionItem}>
          <div className="flex items-center gap-2.5">
            <motion.div
              className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#447acb]/30 bg-[#447acb]/10"
              variants={bubblePop}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      ...starCircleFloat,
                      transition: getStarCircleFloatTransition(0.66),
                    }
              }
              viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.7 }}
            >
              <motion.span
                className="absolute inset-[-3px] rounded-full border border-[#447acb]/25"
                initial={{ scale: 0.84, opacity: 0 }}
                whileInView={{ scale: [0.84, 1.18], opacity: [0.45, 0] }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.56, ease: "easeOut" }}
              />
              <span className="text-[24px] font-semibold leading-none text-[#447acb]">R</span>
            </motion.div>
            <span className="text-[16px] font-medium uppercase leading-none tracking-[0.1em] text-[#7b7b7b]">Result</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {results.map((result, i) => (
              <motion.div
                key={i}
                className="relative flex items-baseline gap-2.5 overflow-hidden rounded-[8px] border border-[#e5e7eb] bg-[#f9f9f9] px-3.5 py-2.5"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.46 + i * 0.11 }}
              >
                <motion.span
                  className="absolute left-0 top-0 h-full w-full origin-left bg-[linear-gradient(90deg,rgba(68,122,203,0.10),rgba(68,122,203,0))]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: [0, 1, 1], opacity: [0, 0.7, 0] }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.85, delay: 0.58 + i * 0.12, ease: "easeOut" }}
                />
                <span
                  className={`relative shrink-0 font-[var(--font-family-display)] text-[20px] font-semibold leading-none ${
                    result.variant === "primary"
                      ? "text-[#447acb]"
                      : result.variant === "secondary"
                        ? "text-[#222222]"
                        : "text-[#7b7b7b]"
                  }`}
                >
                  {result.value}
                </span>
                <span className="relative text-[15px] leading-[1.3] text-[#7b7b7b]">{result.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
