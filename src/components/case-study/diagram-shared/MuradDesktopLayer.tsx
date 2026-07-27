import { motion } from "motion/react"

import DesktopCard from "@/components/case-study/DesktopCard"
import { MuradApiLayerCard } from "@/components/case-study/diagram-shared/MuradApiLayerCard"
import { MuradArrowsLayer } from "@/components/case-study/diagram-shared/MuradArrowsLayer"
import { MuradPulseGlow } from "@/components/case-study/diagram-shared/MuradPulseGlow"

export function MuradDesktopLayer({
  data,
  toggle,
  cardVariants,
  cardTransition,
}: {
  data: any
  toggle: (key: string) => void
  cardVariants: { hidden: { opacity: number; y: number }; visible: { opacity: number; y: number } }
  cardTransition: { duration: number; ease: readonly [number, number, number, number] }
}) {
  return (
    <div className="w-[1440px] h-[825px] relative">
      <div className="w-[1440px] h-[825px] left-0 top-0 absolute" style={{ backgroundColor: "#fefefe" }} />
      <motion.div className="absolute z-10" style={{ left: 33, top: 240 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.bcUS} cardKey="bc-us" toggle={toggle} variant="border" iconOverlay style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 33, top: 438 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.bcUK} cardKey="bc-uk" toggle={toggle} variant="border" iconOverlay style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 33, top: 635 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.bcMY} cardKey="bc-my" toggle={toggle} variant="border" iconOverlay style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 592, top: 379 }} variants={cardVariants} transition={cardTransition}>
        <MuradApiLayerCard title={data.apiLayer.title} subtitle={data.apiLayer.subtitle} onClick={() => toggle("api-layer")} />
      </motion.div>
      <motion.div className="absolute z-10" style={{ left: 592, top: 635 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.oracle} cardKey="oracle" toggle={toggle} eyebrowPos="below" style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 1153, top: 635 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.sendgrid} cardKey="sendgrid" toggle={toggle} style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 592, top: 42 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.adobe} cardKey="adobe" toggle={toggle} style={{}} /></motion.div>
      <motion.div className="absolute z-10" style={{ left: 32, top: 42 }} variants={cardVariants} transition={cardTransition}><DesktopCard data={data.contentful} cardKey="contentful" toggle={toggle} style={{}} /></motion.div>
      <div data-layer="Data Pipeline" className="DataPipeline z-20 w-28 h-8 left-[977px] top-[105px] absolute bg-blue-500 rounded-md">
        <MuradPulseGlow w={112} h={32} uid="pg-rest-r" />
        <div data-layer="REST API" className="RestApi w-28 h-8 left-0 top-0 absolute flex items-center justify-center text-center text-sky-50 text-sm font-normal font-display leading-4">REST API</div>
      </div>
      <div data-layer="Data Pipeline" className="DataPipeline z-20 w-28 h-8 left-[369px] top-[105px] absolute bg-blue-500 rounded-md">
        <MuradPulseGlow w={112} h={32} uid="pg-rest-l" />
        <div data-layer="REST API" className="RestApi w-28 h-8 left-0 top-0 absolute flex items-center justify-center text-center text-sky-50 text-sm font-normal font-display leading-4">REST API</div>
      </div>
      <MuradArrowsLayer />
    </div>
  )
}
