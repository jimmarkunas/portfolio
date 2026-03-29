"use client"
import { useRef, useEffect, useState } from "react"
import ParticleCanvas from "./ParticleCanvas"
import Modal from "./Modal"
import { useModal } from "./useModal"
import { DIAGRAM_DATA as D } from "./muradDiagramData"
import DesktopCard from "./DesktopCard"
import MobileCard from "./MobileCard"

const PATHS = [
  // CMS/Contentful → Adobe (top horizontal via left REST pill)
  [{x:288,y:122},{x:481,y:122},{x:592,y:122}],
  // Adobe → API Layer (vertical down)
  [{x:720,y:202},{x:720,y:352}],
  // BigCommerce US → API Layer
  [{x:353,y:320},{x:426,y:320},{x:426,y:413},{x:592,y:413}],
  // BigCommerce UK → API Layer
  [{x:353,y:518},{x:426,y:518},{x:426,y:413},{x:592,y:413}],
  // BigCommerce MY → API Layer
  [{x:353,y:715},{x:426,y:715},{x:426,y:413},{x:592,y:413}],
  // API Layer → Oracle EBS (down)
  [{x:720,y:479},{x:720,y:635}],
  // API Layer → Sendgrid (right then down right spine)
  [{x:848,y:413},{x:1281,y:413},{x:1281,y:635}],
  // Adobe → Sendgrid (top route via right REST pill)
  [{x:848,y:122},{x:1089,y:122},{x:1281,y:122},{x:1281,y:635}],
]

function PulseGlow({ w, h, uid = "pg", color = "#447acb", style }: {
  w: number
  h: number
  uid?: string
  color?: string
  style?: React.CSSProperties
}) {
  const cx = w / 2
  const cy = h / 2
  const r = Math.max(w, h) * 1.4
  const pad = r
  return (
    <svg
      width={w} height={h}
      style={{ position: "absolute", top: 0, left: 0, overflow: "visible", pointerEvents: "none", zIndex: 0, ...style }}
    >
      <defs>
        <radialGradient id={`${uid}-rg`} cx={cx} cy={cy} r={r} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={color} stopOpacity="0.3" />
          <stop offset="40%"  stopColor={color} stopOpacity="0.12" />
          <stop offset="70%"  stopColor={color} stopOpacity="0.04" />
          <stop offset="100%" stopColor={color} stopOpacity="0"   />
        </radialGradient>
        <clipPath id={`${uid}-clip`}>
          <path fillRule="evenodd"
            d={`M ${-pad} ${-pad} H ${w + pad} V ${h + pad} H ${-pad} Z M 0 0 H ${w} V ${h} H 0 Z`} />
        </clipPath>
      </defs>
      <rect x={-pad} y={-pad} width={w + pad * 2} height={h + pad * 2}
        fill={`url(#${uid}-rg)`} clipPath={`url(#${uid}-clip)`}>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="6s"
          calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}


const MOBILE_W = 340
const MOBILE_H = 1440

// Order: Oracle → Contentful → API → BC US/UK/MY → Sendgrid → Adobe
// All paths vertical (constant x per segment)
// 40px visual gap between every block
const MOBILE_PATHS = [
  [{x:150,y:168},{x:150,y:376}],
  [{x:180,y:336},{x:180,y:376}],
  [{x:166,y:504},{x:166,y:544}],
  [{x:180,y:504},{x:180,y:712}],
  [{x:195,y:504},{x:195,y:880}],
  [{x:210,y:504},{x:210,y:1048}],
  [{x:180,y:1176},{x:180,y:1216}],
  [{x:254,y:336},{x:254,y:1216}],
]

export default function MuradArchitectureDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const mobileWrapperRef = useRef<HTMLDivElement>(null)
  const mobileCanvasRef = useRef<HTMLDivElement>(null)
  const [mobileScale, setMobileScale] = useState(1)
  const { activeKey, toggle, close } = useModal()

  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const update = () => setScale(Math.min(1, el.offsetWidth / 1440))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileWrapperRef.current) return
    const el = mobileWrapperRef.current
    const update = () => setMobileScale(el.getBoundingClientRect().width / MOBILE_W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <>
    {/* ── Desktop ───────────────────────────────────────────────────── */}
    <div className="hidden w-full md:block">
    <div className="relative w-full overflow-hidden" style={{ height: `${825 * scale}px` }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "100%",
        backgroundColor: "#fefefe",
        backgroundImage: "radial-gradient(circle, #d4d4e4 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden rounded-[10px]"
      style={{ height: `${825 * scale}px` }}
    >
      <div
        ref={canvasContainerRef}
        style={{
          width: 1440,
          height: 825,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "relative",
        }}
      >
<div className="w-[1440px] h-[825px] relative">
  <div className="w-[1440px] h-[825px] left-0 top-0 absolute" style={{ backgroundColor: "#fefefe" }} />
  <DesktopCard data={D.bcUS} cardKey="bc-us" toggle={toggle} variant="border" style={{left:33,top:240}} />
  <DesktopCard data={D.bcUK} cardKey="bc-uk" toggle={toggle} variant="border" style={{left:33,top:438}} />
  <DesktopCard data={D.bcMY} cardKey="bc-my" toggle={toggle} variant="border" style={{left:33,top:635}} />
  <div data-layer="API" className="Api w-64 h-16 left-[592px] top-[379px] absolute cursor-pointer group" onPointerDown={e => e.stopPropagation()} onClick={e => { e.stopPropagation(); toggle('api-layer') }}>
    <PulseGlow w={256} h={128} uid="pg-api" style={{ top: -28, left: 0 }} />
    <div data-layer="API Container" className="ApiContainer w-64 h-32 left-0 top-[-28px] absolute bg-neutral-800 rounded-[10px] border border-[#7b7b7b] group-hover:border-blue-500 transition-colors" />
    <div data-layer="Modal Title" className="ModalTitle w-64 h-8 left-0 top-[36px] absolute">
      <div data-layer="Paragraph" className="Paragraph w-64 h-3.5 left-0 top-[16px] absolute text-center justify-start text-neutral-50 text-sm font-normal font-display leading-4">{D.apiLayer.subtitle}</div>
      <div data-layer="Header" className="Header w-64 h-4 left-0 top-0 absolute text-center justify-start text-white text-base font-semibold font-display leading-4">{D.apiLayer.title}</div>
    </div>
    <div data-layer="Modal Logo" className="ModalLogo w-64 h-9 left-0 top-0 absolute">
      <div data-layer="Vector" className="Vector size-6 left-[116px] top-[6px] absolute" />
      <div data-svg-wrapper data-layer="Vector" className="Vector left-[117px] top-[8px] absolute">
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0038 18.9956H6.00378C4.58701 18.9965 3.21563 18.496 2.13247 17.5827C1.04931 16.6695 0.324252 15.4024 0.0856863 14.0059C-0.152879 12.6093 0.110439 11.1734 0.829013 9.95242C1.54759 8.7314 2.67506 7.80405 4.01178 7.33457C3.9665 6.38823 4.11379 5.44254 4.44474 4.5548C4.77569 3.66706 5.2834 2.85574 5.93713 2.16999C6.59085 1.48424 7.37698 0.938325 8.24788 0.565325C9.11879 0.192325 10.0564 0 11.0038 0C11.9512 0 12.8888 0.192325 13.7597 0.565325C14.6306 0.938325 15.4167 1.48424 16.0704 2.16999C16.7242 2.85574 17.2319 3.66706 17.5628 4.5548C17.8938 5.44254 18.0411 6.38823 17.9958 7.33457C19.3325 7.80405 20.46 8.7314 21.1785 9.95242C21.8971 11.1734 22.1604 12.6093 21.9219 14.0059C21.6833 15.4024 20.9583 16.6695 19.8751 17.5827C18.7919 18.496 17.4206 18.9965 16.0038 18.9956ZM16.0038 6.99557C16.004 6.32857 15.8708 5.66827 15.612 5.05354C15.3532 4.4388 14.974 3.88207 14.4967 3.41611C14.0195 2.95015 13.4538 2.58439 12.8331 2.34036C12.2123 2.09633 11.549 1.97896 10.8822 1.99518C10.2154 2.01139 9.55863 2.16085 8.95047 2.43476C8.34231 2.70867 7.79511 3.10149 7.34107 3.59009C6.88703 4.0787 6.53534 4.6532 6.30671 5.27979C6.07807 5.90638 5.97712 6.57237 6.00978 7.23857L6.07978 8.72657L4.67578 9.22057C3.78629 9.53514 3.03653 10.1539 2.55888 10.9675C2.08123 11.7811 1.90639 12.7374 2.06524 13.6674C2.22409 14.5974 2.70641 15.4414 3.42705 16.0503C4.14769 16.6593 5.0603 16.9941 6.00378 16.9956H16.0038C16.7401 16.9953 17.4621 16.7918 18.0902 16.4075C18.7183 16.0232 19.2281 15.473 19.5635 14.8174C19.8989 14.1619 20.0468 13.4265 19.991 12.6923C19.9351 11.9581 19.6777 11.2535 19.2471 10.6562C18.8165 10.059 18.2293 9.59213 17.5503 9.30719C16.8714 9.02225 16.1269 8.93026 15.399 9.04136C14.6711 9.15245 13.988 9.46231 13.4249 9.93681C12.8618 10.4113 12.4406 11.032 12.2078 11.7306L10.3098 11.0976C10.7086 9.90295 11.4731 8.86404 12.4949 8.12787C13.5168 7.3917 14.7443 6.99558 16.0038 6.99557Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
  <DesktopCard data={D.oracle} cardKey="oracle" toggle={toggle} eyebrowPos="below" style={{left:592,top:635}} />
  <DesktopCard data={D.sendgrid} cardKey="sendgrid" toggle={toggle} style={{left:1153,top:635}} />
  <DesktopCard data={D.adobe} cardKey="adobe" toggle={toggle} style={{left:592,top:42}} />
  <DesktopCard data={D.contentful} cardKey="contentful" toggle={toggle} style={{left:32,top:42}} />
  <div data-layer="Data Pipeline" className="DataPipeline z-20 w-28 h-8 left-[977px] top-[105px] absolute bg-blue-500 rounded-md">
    <PulseGlow w={112} h={32} uid="pg-rest-r" />
    <div data-layer="REST API" className="RestApi w-28 h-8 left-0 top-0 absolute flex items-center justify-center text-center text-sky-50 text-sm font-normal font-display leading-4">REST API</div>
  </div>
  <div data-layer="Data Pipeline" className="DataPipeline z-20 w-28 h-8 left-[369px] top-[105px] absolute bg-blue-500 rounded-md">
    <PulseGlow w={112} h={32} uid="pg-rest-l" />
    <div data-layer="REST API" className="RestApi w-28 h-8 left-0 top-0 absolute flex items-center justify-center text-center text-sky-50 text-sm font-normal font-display leading-4">REST API</div>
  </div>
  <div data-layer="Arrows" className="Arrows w-[994px] h-[593.02px] left-[288px] top-[120.98px] absolute" style={{ pointerEvents: 'none' }}>
    <div data-svg-wrapper data-layer="Arrow 10" className="Arrow10 left-[1px] top-[397.02px] absolute">
      <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H138" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 11" className="Arrow11 left-[1px] top-[593.02px] absolute">
      <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H138" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 12" className="Arrow12 left-[1px] top-[200.02px] absolute">
      <svg width="138" height="1" viewBox="0 0 138 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H138" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 6" className="Arrow6 left-[559px] top-[292.02px] absolute">
      <svg width="434" height="1" viewBox="0 0 434 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H434" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 3" className="Arrow3 left-[432px] top-[86.02px] absolute">
      <svg width="1" height="145" viewBox="0 0 1 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0L0.5 145" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 4" className="Arrow4 left-[993px] top-[0.02px] absolute">
      <svg width="1" height="514" viewBox="0 0 1 514" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0L0.5 514" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 9" className="Arrow9 left-[559px] top-[-0px] absolute">
      <svg width="130" height="2" viewBox="0 0 130 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M130 0.515991L6.58035e-05 0.499998" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1 left-0 top-[0.02px] absolute">
      <svg width="81" height="1" viewBox="0 0 81 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M81 0.5L0 0.5" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 5" className="Arrow5 left-[138px] top-[16.02px] absolute">
      <svg width="3" height="577" viewBox="0 0 3 577" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0.000907898L1.551 577.001" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 2" className="Arrow2 left-[196px] top-[0.02px] absolute">
      <svg width="108" height="1" viewBox="0 0 108 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5L108 0.5" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 4" className="Arrow4 left-[432px] top-[358.02px] absolute">
      <svg width="1" height="156" viewBox="0 0 1 156" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0L0.5 156" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 7" className="Arrow7 left-[804px] top-[0.02px] absolute">
      <svg width="189" height="1" viewBox="0 0 189 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5L189 0.5" stroke="#959595"/>
      </svg>
    </div>
    <div data-svg-wrapper data-layer="Arrow 14" className="Arrow14 left-[138px] top-[292.02px] absolute">
      <svg width="166" height="1" viewBox="0 0 166 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H166" stroke="#959595"/>
      </svg>
    </div>
  </div>
</div>
        <ParticleCanvas paths={PATHS} containerRef={canvasContainerRef} />
      </div>
      <style jsx>{`
        [data-layer="Modal Integrations"] [data-svg-wrapper] {
          cursor: pointer;
          transition: fill 0.15s ease, stroke 0.15s ease;
        }

        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg path[fill="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg rect[fill="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg circle[fill="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg ellipse[fill="#212529"] {
          fill: #3b82f6;
        }

        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg path[stroke="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg rect[stroke="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg circle[stroke="#212529"],
        [data-layer="Modal Integrations"] [data-svg-wrapper]:hover svg ellipse[stroke="#212529"] {
          stroke: #3b82f6;
        }

        [data-layer="Modal Integrations"] [data-layer="Avalara Logo"]:hover svg rect,
        [data-layer="Modal Integrations"] [data-layer="Ordergroove"]:hover svg rect,
        [data-layer="Modal Integrations"] [data-layer="Paypal Logo"]:hover svg rect {
          fill: transparent;
        }

        [data-layer="Modal Integrations"] [data-layer="Avalara Logo"]:hover svg path,
        [data-layer="Modal Integrations"] [data-layer="Ordergroove"]:hover svg path,
        [data-layer="Modal Integrations"] [data-layer="Paypal Logo"]:hover svg path {
          fill: #3b82f6;
        }
      `}</style>
    </div>
    </div>
    </div>{/* end desktop hidden md:block */}

    {/* ── Mobile layout ───────────────────────────────────────────── */}
    <div className="block md:hidden -mx-6">
      <div
        className="relative"
        style={{
          width: "100dvw",
          marginLeft: "calc(50% - 50dvw)",
          height: `${MOBILE_H * mobileScale}px`,
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)", width: "100vw", height: "100%",
          backgroundColor: "#fefefe",
          backgroundImage: "radial-gradient(circle, #d4d4e4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div
          ref={mobileWrapperRef}
          className="relative mx-auto overflow-hidden"
          style={{ width: "calc(100dvw - 20px)", height: `${MOBILE_H * mobileScale}px` }}
        >
          <div ref={mobileCanvasRef} style={{ width: MOBILE_W, height: MOBILE_H, transform: `scale(${mobileScale})`, transformOrigin: "top left", position: "relative", backgroundColor: "#fefefe" }}>
            <ParticleCanvas paths={MOBILE_PATHS} containerRef={mobileCanvasRef} />
            {/* ── Oracle ── */}
            <MobileCard data={D.oracle} top={40} cardKey="oracle" toggle={toggle} />
            {/* ── Contentful ── */}
            <MobileCard data={D.contentful} top={208} cardKey="contentful" toggle={toggle} />
            {/* ── API Layer top=376 ── */}
            <div className="w-80 h-32 absolute cursor-pointer group" style={{left:10,top:376}} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();toggle('api-layer')}}>
              <PulseGlow w={320} h={128} uid="pg-m-api" style={{top:0,left:0}} />
              <div className="w-80 h-32 left-0 top-0 absolute bg-neutral-800 rounded-[10px] border border-[#7b7b7b] group-hover:border-blue-500 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="mb-2">
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0038 18.9956H6.00378C4.58701 18.9965 3.21563 18.496 2.13247 17.5827C1.04931 16.6695 0.324252 15.4024 0.0856863 14.0059C-0.152879 12.6093 0.110439 11.1734 0.829013 9.95242C1.54759 8.7314 2.67506 7.80405 4.01178 7.33457C3.9665 6.38823 4.11379 5.44254 4.44474 4.5548C4.77569 3.66706 5.2834 2.85574 5.93713 2.16999C6.59085 1.48424 7.37698 0.938325 8.24788 0.565325C9.11879 0.192325 10.0564 0 11.0038 0C11.9512 0 12.8888 0.192325 13.7597 0.565325C14.6306 0.938325 15.4167 1.48424 16.0704 2.16999C16.7242 2.85574 17.2319 3.66706 17.5628 4.5548C17.8938 5.44254 18.0411 6.38823 17.9958 7.33457C19.3325 7.80405 20.46 8.7314 21.1785 9.95242C21.8971 11.1734 22.1604 12.6093 21.9219 14.0059C21.6833 15.4024 20.9583 16.6695 19.8751 17.5827C18.7919 18.496 17.4206 18.9965 16.0038 18.9956ZM16.0038 6.99557C16.004 6.32857 15.8708 5.66827 15.612 5.05354C15.3532 4.4388 14.974 3.88207 14.4967 3.41611C14.0195 2.95015 13.4538 2.58439 12.8331 2.34036C12.2123 2.09633 11.549 1.97896 10.8822 1.99518C10.2154 2.01139 9.55863 2.16085 8.95047 2.43476C8.34231 2.70867 7.79511 3.10149 7.34107 3.59009C6.88703 4.0787 6.53534 4.6532 6.30671 5.27979C6.07807 5.90638 5.97712 6.57237 6.00978 7.23857L6.07978 8.72657L4.67578 9.22057C3.78629 9.53514 3.03653 10.1539 2.55888 10.9675C2.08123 11.7811 1.90639 12.7374 2.06524 13.6674C2.22409 14.5974 2.70641 15.4414 3.42705 16.0503C4.14769 16.6593 5.0603 16.9941 6.00378 16.9956H16.0038C16.7401 16.9953 17.4621 16.7918 18.0902 16.4075C18.7183 16.0232 19.2281 15.473 19.5635 14.8174C19.8989 14.1619 20.0468 13.4265 19.991 12.6923C19.9351 11.9581 19.6777 11.2535 19.2471 10.6562C18.8165 10.059 18.2293 9.59213 17.5503 9.30719C16.8714 9.02225 16.1269 8.93026 15.399 9.04136C14.6711 9.15245 13.988 9.46231 13.4249 9.93681C12.8618 10.4113 12.4406 11.032 12.2078 11.7306L10.3098 11.0976C10.7086 9.90295 11.4731 8.86404 12.4949 8.12787C13.5168 7.3917 14.7443 6.99558 16.0038 6.99557Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-white text-base font-semibold font-display leading-4">{D.apiLayer.title}</div>
                <div className="mt-2 text-neutral-50 text-sm font-normal font-display leading-4">{D.apiLayer.subtitle}</div>
              </div>
            </div>
            {/* ── BC US ── */}
            <MobileCard data={D.bcUS} top={544} cardKey="bc-us" toggle={toggle} />
            {/* ── BC UK ── */}
            <MobileCard data={D.bcUK} top={712} cardKey="bc-uk" toggle={toggle} />
            {/* ── BC MY ── */}
            <MobileCard data={D.bcMY} top={880} cardKey="bc-my" toggle={toggle} />
            {/* ── Sendgrid ── */}
            <MobileCard data={D.sendgrid} top={1048} cardKey="sendgrid" toggle={toggle} />
            {/* ── Adobe ── */}
            <MobileCard data={D.adobe} top={1216} cardKey="adobe" toggle={toggle} />
          </div>
        </div>
      </div>
    </div>

    <Modal tip={activeKey ? (D.tooltips[activeKey] ?? null) : null} onClose={close} />
    </>
  )
}
