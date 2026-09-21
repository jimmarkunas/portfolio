"use client"

import { motion, useReducedMotion } from "motion/react"

import { EyebrowPill } from "@/components/EyebrowPill"
import { MotionReveal } from "@/components/motion/MotionReveal"
import { PortfolioImageCard } from "@/components/work/portfolio-founder/PortfolioImageCard"
import { StaggerItem } from "@/components/work/portfolio-founder/StaggerItem"
import { portfolioHoverCardClass } from "@/components/work/portfolio-founder/styles"

export type HomepageFounderCard = {
  href: string
  src: string
  alt: string
  aspectRatio: string
}

type HomepageFounderSectionProps = {
  founder: {
    pill: string
    title: string
    description: string
  }
  cards: HomepageFounderCard[]
}

export function HomepageFounderSection({ founder, cards }: HomepageFounderSectionProps) {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <MotionReveal
      preset="section"
      className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#222222]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-6 py-8 md:px-10 md:py-10 lg:px-10 lg:py-12">
        <div className="flex w-full flex-col items-start gap-3">
          <EyebrowPill className="!px-3 !py-0.5" labelClassName="type-p5 text-[#222222]">
            {founder.pill}
          </EyebrowPill>
          <div className="grid w-full gap-3 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-10">
            <h2 className="type-h2 text-white">{founder.title}</h2>
            <p className="type-p2 max-w-[900px] text-white/76">{founder.description}</p>
          </div>
        </div>

        <motion.div
          className="grid w-full gap-4 md:grid-cols-2 md:gap-6"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18, margin: "-8% 0px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {cards.map((card) => (
            <StaggerItem key={card.href} reduceMotion={reduceMotion} itemY={24}>
              <PortfolioImageCard
                {...card}
                className={portfolioHoverCardClass}
              />
            </StaggerItem>
          ))}
        </motion.div>
      </div>
    </MotionReveal>
  )
}
