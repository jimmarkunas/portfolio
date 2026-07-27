"use client"

import { motion } from "motion/react"
import type { RefObject, ReactNode } from "react"

import { PortfolioImageCard } from "./PortfolioImageCard"
import { StaggerItem } from "./StaggerItem"
import { portfolioHoverCardClass, portfolioHoverWideCardClass } from "./styles"

type ShowcaseCard = {
  href: string
  src: string
  alt: string
  aspectRatio: string
}

type RevealVisibility = Record<"title" | "pills" | "row1" | "row2" | "row3" | "row4", boolean>

type RevealSentinelRefs = {
  title: RefObject<HTMLDivElement>
  row1: RefObject<HTMLDivElement>
  row2: RefObject<HTMLDivElement>
  row3: RefObject<HTMLDivElement>
  row4: RefObject<HTMLDivElement>
}

type RevealWrapProps = {
  reduceMotionEnabled: boolean
  show: boolean
  itemY: number
  delay?: number
  className?: string
  children: ReactNode
}

type RowBaseProps = {
  reduceMotionEnabled: boolean
  visibility: RevealVisibility
  itemY: number
  sentinelRefs: RevealSentinelRefs
}

type PortfolioRowProps = RowBaseProps & {
  cards: ShowcaseCard[]
}

type PortfolioFeatureRowProps = RowBaseProps & {
  feature: ShowcaseCard
  sideStack: ShowcaseCard[]
}

type PortfolioWideRowsProps = RowBaseProps & {
  lowerRow: ShowcaseCard[]
  lowerMiddleRow: ShowcaseCard[]
  wideRows: ShowcaseCard[]
}

type PortfolioFounderRowProps = {
  reduceMotionEnabled: boolean
  itemY: number
  cards: ShowcaseCard[]
}

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const PORTFOLIO_GUTTER_CLASS = "gap-4 md:gap-6"

export function RevealWrap({
  reduceMotionEnabled,
  show,
  itemY,
  delay = 0,
  className,
  children,
}: RevealWrapProps) {
  if (reduceMotionEnabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: itemY }}
      transition={{ duration: 0.32, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioTopRow({
  reduceMotionEnabled,
  visibility,
  itemY,
  sentinelRefs,
  cards,
}: PortfolioRowProps) {
  return (
    <div className="relative w-full">
      {!reduceMotionEnabled ? (
        <div
          ref={sentinelRefs.row1}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
        />
      ) : null}

      <div className={`grid w-full ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-3`}>
        {cards.map((card, index) => (
          <RevealWrap
            key={card.href}
            reduceMotionEnabled={reduceMotionEnabled}
            show={visibility.row1}
            itemY={itemY}
            delay={index * 0.04}
          >
            <PortfolioImageCard
              href={card.href}
              src={card.src}
              alt={card.alt}
              aspectRatio={card.aspectRatio}
              className={portfolioHoverCardClass}
              loading={index < 3 ? "eager" : "lazy"}
              fetchPriority={index < 3 ? "high" : "auto"}
            />
          </RevealWrap>
        ))}
      </div>
    </div>
  )
}

export function PortfolioFeatureRow({
  reduceMotionEnabled,
  visibility,
  itemY,
  sentinelRefs,
  feature,
  sideStack,
}: PortfolioFeatureRowProps) {
  return (
    <div className="relative w-full">
      {!reduceMotionEnabled ? (
        <div
          ref={sentinelRefs.row2}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
        />
      ) : null}

      <div className={`grid w-full ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-[minmax(0,2.05fr)_minmax(0,1fr)] md:items-stretch`}>
        <RevealWrap
          reduceMotionEnabled={reduceMotionEnabled}
          show={visibility.row2}
          itemY={itemY}
          className="md:h-full"
        >
          <PortfolioImageCard
            href={feature.href}
            src={feature.src}
            alt={feature.alt}
            aspectRatio={feature.aspectRatio}
            className={`${portfolioHoverCardClass} h-full`}
            loading="eager"
            fetchPriority="low"
          />
        </RevealWrap>

        <div className={`grid h-full min-h-0 grid-rows-2 ${PORTFOLIO_GUTTER_CLASS}`}>
          {sideStack.map((card, index) => (
            <RevealWrap
              key={card.href}
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row2}
              itemY={itemY}
              delay={(index + 1) * 0.04}
              className="min-h-0"
            >
              <PortfolioImageCard
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={`${portfolioHoverCardClass} h-full`}
                wrapperClassName="h-full"
                fillContainer
                loading={index === 0 ? "eager" : undefined}
                fetchPriority={index === 0 ? "low" : undefined}
              />
            </RevealWrap>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PortfolioMiddleRow({
  reduceMotionEnabled,
  visibility,
  itemY,
  sentinelRefs,
  cards,
}: PortfolioRowProps) {
  return (
    <div className="relative w-full">
      {!reduceMotionEnabled ? (
        <div
          ref={sentinelRefs.row3}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
        />
      ) : null}

      <div className={`grid w-full ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-2`}>
        {cards.map((card, index) => (
          <RevealWrap
            key={card.href}
            reduceMotionEnabled={reduceMotionEnabled}
            show={visibility.row3}
            itemY={itemY}
            delay={index * 0.04}
          >
            <PortfolioImageCard
              href={card.href}
              src={card.src}
              alt={card.alt}
              aspectRatio={card.aspectRatio}
              className={portfolioHoverCardClass}
            />
          </RevealWrap>
        ))}
      </div>
    </div>
  )
}

export function PortfolioWideRows({
  reduceMotionEnabled,
  visibility,
  itemY,
  sentinelRefs,
  lowerRow,
  lowerMiddleRow,
  wideRows,
}: PortfolioWideRowsProps) {
  return (
    <div className="relative w-full">
      {!reduceMotionEnabled ? (
        <div
          ref={sentinelRefs.row4}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 h-px w-px -top-16 md:-top-24"
        />
      ) : null}

      <div className={`flex w-full flex-col ${PORTFOLIO_GUTTER_CLASS}`}>
        <div className={`grid ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-2`}>
          {lowerRow.map((card, index) => (
            <RevealWrap
              key={card.href}
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row4}
              itemY={itemY}
              delay={index * 0.04}
            >
              <PortfolioImageCard
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={portfolioHoverCardClass}
              />
            </RevealWrap>
          ))}
        </div>

        <RevealWrap reduceMotionEnabled={reduceMotionEnabled} show={visibility.row4} itemY={itemY} delay={0.04}>
          <PortfolioImageCard
            href={wideRows[0].href}
            src={wideRows[0].src}
            alt={wideRows[0].alt}
            aspectRatio={wideRows[0].aspectRatio}
            className={portfolioHoverWideCardClass}
          />
        </RevealWrap>

        <div className={`grid ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-2`}>
          {lowerMiddleRow.map((card, index) => (
            <RevealWrap
              key={card.href}
              reduceMotionEnabled={reduceMotionEnabled}
              show={visibility.row4}
              itemY={itemY}
              delay={0.08 + index * 0.04}
            >
              <PortfolioImageCard
                href={card.href}
                src={card.src}
                alt={card.alt}
                aspectRatio={card.aspectRatio}
                className={portfolioHoverCardClass}
              />
            </RevealWrap>
          ))}
        </div>

        <RevealWrap reduceMotionEnabled={reduceMotionEnabled} show={visibility.row4} itemY={itemY} delay={0.12}>
          <PortfolioImageCard
            href={wideRows[1].href}
            src={wideRows[1].src}
            alt={wideRows[1].alt}
            aspectRatio={wideRows[1].aspectRatio}
            className={portfolioHoverWideCardClass}
          />
        </RevealWrap>
      </div>
    </div>
  )
}

export function PortfolioFounderRow({ reduceMotionEnabled, itemY, cards }: PortfolioFounderRowProps) {
  return (
    <motion.div
      className={`grid w-full ${PORTFOLIO_GUTTER_CLASS} md:grid-cols-2`}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "-8% 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >
      {cards.map((card) => (
        <StaggerItem key={card.href} reduceMotion={reduceMotionEnabled} itemY={itemY}>
          <PortfolioImageCard
            href={card.href}
            src={card.src}
            alt={card.alt}
            aspectRatio={card.aspectRatio}
            className={portfolioHoverCardClass}
          />
        </StaggerItem>
      ))}
    </motion.div>
  )
}
