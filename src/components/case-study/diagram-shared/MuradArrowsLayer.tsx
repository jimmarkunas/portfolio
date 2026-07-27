"use client"

import { useRef } from "react"
import { AnimatedSvgPathDots } from "@/components/motion/AnimatedSvgPathDots"

export function MuradArrowsLayer() {
  const adobeToApiPathRef = useRef<SVGPathElement>(null)
  const apiToAdobeRedPathRef = useRef<SVGPathElement>(null)
  const apiToSendgridPathRef = useRef<SVGPathElement>(null)
  const apiToOracleBlueRef = useRef<SVGPathElement>(null)
  const oracleToApiRedRef = useRef<SVGPathElement>(null)

  return (
    <div
      data-layer="Arrows"
      className="Arrows z-0 w-[994px] h-[593.02px] left-[288px] top-[120.98px] absolute"
      style={{ pointerEvents: "none" }}
    >
      <div data-svg-wrapper data-layer="Arrow 10" className="Arrow10 left-[1px] top-[397.02px] absolute">
        <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H138" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 11" className="Arrow11 -left-[5px] top-[593.02px] absolute">
        <svg width="144" height="1" viewBox="0 0 144 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H144" stroke="#959595" strokeLinecap="square" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 12" className="Arrow12 left-[1px] top-[200.02px] absolute">
        <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H138" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 6" className="Arrow6 left-[559px] top-[292.02px] absolute">
        <svg width="434" height="1" viewBox="0 0 434 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H434" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="API SendGrid Particle Path" className="ApiSendgridParticlePath z-10 left-[559px] top-[292.02px] absolute">
        <svg width="435" height="223" viewBox="0 0 435 223" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <path ref={apiToSendgridPathRef} id="murad-api-sendgrid-particle-path" d="M0 0.5H434.5V222" stroke="transparent" />
          <AnimatedSvgPathDots
            pathRef={apiToSendgridPathRef}
            direction="forward"
            speed={22}
            count={3}
            radius={4.5}
            color="rgb(203,68,68)"
            spacingMode="random"
            randomSeed="murad-api-sendgrid"
          />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 3" className="Arrow3 z-10 left-[432px] top-[81.02px] absolute">
        <svg width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <path ref={adobeToApiPathRef} id="murad-adobe-api-connector" d="M0.5 0L0.5 150" stroke="#959595" />
          <AnimatedSvgPathDots
            pathRef={adobeToApiPathRef}
            direction="forward"
            speed={14.2}
            radius={4.5}
            color="#447ACB"
            spacingMode="uniform"
          />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 3 Red" className="Arrow3Red z-10 left-[447px] top-[81.02px] absolute">
        <svg width="1" height="150" viewBox="0 0 1 150" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <path ref={apiToAdobeRedPathRef} id="murad-api-adobe-red" d="M0.5 150L0.5 0" stroke="#959595" />
          <AnimatedSvgPathDots
            pathRef={apiToAdobeRedPathRef}
            direction="forward"
            speed={14.2}
            radius={4.5}
            color="rgb(203,68,68)"
            spacingMode="uniform"
          />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 4" className="Arrow4 left-[993px] top-[0.02px] absolute">
        <svg width="1" height="514" viewBox="0 0 1 514" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0L0.5 514" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1 left-0 top-[0.02px] absolute">
        <svg width="304" height="1" viewBox="0 0 304 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H304" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 5" className="Arrow5 left-[138px] top-[16.02px] absolute">
        <svg width="3" height="577" viewBox="0 0 3 577" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0.000907898L1.551 577.001" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 7" className="Arrow7 left-[559px] top-[0.02px] absolute">
        <svg width="434" height="1" viewBox="0 0 434 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H434" stroke="#959595" />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 4" className="Arrow4 z-10 left-[432px] top-[358.02px] absolute">
        <svg width="1" height="156" viewBox="0 0 1 156" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <path ref={apiToOracleBlueRef} id="murad-api-oracle-blue" d="M0.5 0L0.5 156" stroke="#959595" />
          <AnimatedSvgPathDots
            pathRef={apiToOracleBlueRef}
            direction="forward"
            speed={14.2}
            radius={4.5}
            color="#447ACB"
            spacingMode="uniform"
          />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 4 Red" className="Arrow4Red z-10 left-[447px] top-[358.02px] absolute">
        <svg width="1" height="156" viewBox="0 0 1 156" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <path ref={oracleToApiRedRef} id="murad-api-oracle-red" d="M0.5 0L0.5 156" stroke="#959595" />
          <AnimatedSvgPathDots
            pathRef={oracleToApiRedRef}
            direction="reverse"
            speed={14.2}
            radius={4.5}
            color="rgb(203,68,68)"
            phaseOffset={0.5}
            spacingMode="uniform"
          />
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Arrow 14" className="Arrow14 left-[138px] top-[292.02px] absolute">
        <svg width="166" height="1" viewBox="0 0 166 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H166" stroke="#959595" />
        </svg>
      </div>
    </div>
  )
}
