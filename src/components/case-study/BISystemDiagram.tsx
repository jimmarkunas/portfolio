"use client"
import { useRef, useEffect, useState } from "react"



const CANVAS_W = 1440
const CANVAS_H = 825

export default function BISystemDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!wrapperRef.current) return
    const el = wrapperRef.current
    const update = () => setScale(Math.min(1, el.offsetWidth / CANVAS_W))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      {/* ── Desktop ── */}
      <div className="hidden w-full md:block">
        <div className="relative w-full overflow-hidden" style={{ height: `${CANVAS_H * scale}px` }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", backgroundColor: "#fefefe", backgroundImage: "radial-gradient(circle, #d4d4e4 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div ref={wrapperRef} className="relative w-full overflow-hidden rounded-[10px]" style={{ height: `${CANVAS_H * scale}px` }}>
            <div ref={containerRef} style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})`, transformOrigin: "top left", position: "relative", backgroundColor: "#fefefe" }}>

              {/* AXM / Adobe Experience Manager */}
              <div className="w-[436px] h-[483px] left-[1004px] top-0 absolute bg-zinc-100 rounded-[10px]">
                <div className="w-32 h-16 left-[19px] top-[188px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-32 h-16 left-0 top-0 absolute flex items-center justify-center text-center text-white text-lg font-medium font-display leading-6">Marketo &amp; Campaign</div>
                </div>
                <div className="w-32 h-16 left-[178px] top-[188px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-32 h-16 left-0 top-0 absolute flex items-center justify-center text-center text-white text-lg font-medium font-display leading-6">RT CDP &amp; CX Segment</div>
                </div>
                <div className="w-20 h-16 left-[333px] top-[188px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-20 h-16 left-0 top-0 absolute flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">AJO &amp; CJA</div>
                </div>
                <div className="w-20 h-16 left-[333px] top-[291px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-20 h-16 left-0 top-0 absolute flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Query &amp; Privacy Svc</div>
                </div>
                <div className="w-20 h-16 left-[333px] top-[394px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-20 h-16 left-0 top-0 absolute flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Cart &amp; Checkout</div>
                </div>
                <div className="w-64 h-44 left-[19px] top-[291px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-64 h-44 left-0 top-0 absolute flex items-center justify-center text-center text-white text-lg font-medium font-display leading-6">Data Pipeline</div>
                </div>
                <div className="w-[408px] h-10 left-[19px] top-[44px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-96 h-10 left-0 top-0 absolute flex items-center justify-center text-white text-lg font-medium font-display leading-6">Adobe Analytics &amp; Target</div>
                </div>
                <div className="w-[408px] h-10 left-[19px] top-[116px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default">
                  <div className="w-96 h-10 left-0 top-0 absolute flex items-center justify-center text-white text-lg font-medium font-display leading-6">Adobe Experience Platform</div>
                </div>
                <div className="eyebrow-pill absolute left-[19px] top-[10px]">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">Adobe Experience Manager</span>
                </div>
              </div>

              {/* Customer Presentation */}
              <div className="w-96 h-16 left-[509px] top-[47px] absolute bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-neutral-800">
                <div className="left-[9px] top-[23px] absolute">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5V16H20V5H4ZM2 4.007C2 3.451 2.455 3 2.992 3H21.008C21.556 3 22 3.449 22 4.007V18H2V4.007ZM1 19H23V21H1V19Z" fill="#212529" /></svg>
                </div>
                <div className="left-[41px] top-[23px] absolute">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 4V20H18V4H6ZM5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2ZM12 17C12.2652 17 12.5196 17.1054 12.7071 17.2929C12.8946 17.4804 13 17.7348 13 18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18C11 17.7348 11.1054 17.4804 11.2929 17.2929C11.4804 17.1054 11.7348 17 12 17Z" fill="#212529" /></svg>
                </div>
                <div className="left-[73px] top-[23px] absolute">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 4V20H17V4H7ZM6 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V21C19 21.2652 18.8946 21.5196 18.7071 21.7071C18.5196 21.8946 18.2652 22 18 22H6C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2ZM12 17C12.2652 17 12.5196 17.1054 12.7071 17.2929C12.8946 17.4804 13 17.7348 13 18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18C11 17.7348 11.1054 17.4804 11.2929 17.2929C11.4804 17.1054 11.7348 17 12 17Z" fill="#212529" /></svg>
                </div>
                <div className="w-44 h-16 left-[112px] top-0 absolute flex items-center text-neutral-800 text-lg font-medium font-display leading-6">Shopper's Browser</div>
                <div className="w-28 h-8 left-[291px] top-[19px] absolute bg-blue-500 rounded-md flex items-center justify-center text-sky-50 text-sm font-medium font-display leading-4">Adobe Web SDK</div>
                <div className="eyebrow-pill absolute left-0 top-[-37px]">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">Customer Presentation Layer</span>
                </div>
              </div>

              {/* Data Lake */}
              <div className="w-64 h-10 left-[1023px] top-[517px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-xl font-medium font-display leading-6">
                Data Lake
              </div>

              {/* 3rd Party Apps */}
              <div className="w-[454px] h-56 left-0 top-[605px] absolute bg-zinc-100 rounded-[10px]">
                <div className="w-44 h-16 left-[10px] top-[35px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-lg font-medium font-display leading-6">Payment Gateway</div>
                <div className="w-44 h-16 left-[10px] top-[136px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-lg font-medium font-display leading-6">Tax</div>
                <div className="w-28 h-8 left-[297px] top-[32px] absolute bg-red-600 rounded-md flex items-center justify-center text-sky-50 text-sm font-medium font-display leading-4">Webhooks</div>
                <div className="w-28 h-8 left-[297px] top-[67px] absolute bg-red-600 rounded-md flex items-center justify-center text-sky-50 text-sm font-medium font-display leading-4">REST API</div>
                <div className="eyebrow-pill absolute left-0 top-0">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">3rd Party Apps</span>
                </div>
              </div>

              {/* Developer Platform */}
              <div className="w-52 h-40 left-[247px] top-[369px] absolute bg-zinc-100 rounded-[10px]">
                <div className="w-48 h-8 left-[8px] top-[97px] absolute bg-red-600 rounded-md flex items-center justify-center text-sky-50 text-sm font-medium font-display leading-4">Webhooks</div>
                <div className="w-20 h-16 left-[8px] top-[10px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Apps</div>
                <div className="w-20 h-16 left-[112px] top-[10px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Adobe IO Events</div>
                <div className="eyebrow-pill absolute left-[29px] top-[136px]">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">Developer Platform</span>
                </div>
              </div>

              {/* API Layer */}
              <div className="w-96 h-36 left-[503px] top-[340px] absolute bg-neutral-800 rounded-[10px]">
                <div className="w-96 h-11 left-0 top-0 absolute flex items-center justify-center text-white text-lg font-medium font-display leading-6">API Layer (Mulesoft)</div>
                <div className="w-40 h-20 left-[264px] top-[56px] absolute bg-blue-500 rounded-md hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-sky-50 text-base font-medium font-display leading-4 px-1">Experience Platform Connector</div>
                <div className="w-20 h-16 left-[12px] top-[60px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">API Mesh</div>
                <div className="w-20 h-16 left-[138px] top-[60px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Adobe IDP</div>
              </div>

              {/* Legend */}
              <div className="w-64 h-56 left-[1172px] top-[599px] absolute bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200">
                <div className="w-64 h-10 left-[1px] top-[9px] absolute flex items-center gap-3 px-3">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none"><circle cx="17.5" cy="17.5" r="17.5" fill="#ED2224" /></svg>
                  <span className="text-black text-sm font-semibold font-display leading-4">Adobe Commerce as a Cloud</span>
                </div>
                <div className="w-64 h-10 left-[1px] top-[66px] absolute flex items-center gap-3 px-3">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none"><circle cx="17.5" cy="17.5" r="17.5" fill="#447ACB" /></svg>
                  <span className="text-black text-sm font-semibold font-display leading-4">Adobe Experience</span>
                </div>
                <div className="w-64 h-10 left-0 top-[123px] absolute flex items-center gap-3 px-3">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none"><circle cx="17.5" cy="17.5" r="17.5" fill="#222222" /></svg>
                  <span className="text-black text-sm font-semibold font-display leading-4">3rd Party Systems</span>
                </div>
                <div className="w-64 h-10 left-[2px] top-[179px] absolute flex items-center gap-3 px-3">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none"><circle cx="17.5" cy="17.5" r="17.5" fill="#457D79" /></svg>
                  <span className="text-black text-sm font-semibold font-display leading-4">Source of Truth</span>
                </div>
              </div>

              {/* Commerce Storefront / FE Control Center */}
              <div className="w-52 h-80 left-[247px] top-[1px] absolute bg-zinc-100 rounded-[10px]">
                <div className="w-44 h-16 left-[18px] top-[46px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-lg font-medium font-display leading-6">
                  Front End Blocks
                </div>
                <div className="w-20 h-16 left-[11px] top-[149px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">User Auth</div>
                <div className="w-20 h-16 left-[111px] top-[149px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">PDP &amp; PLP</div>
                <div className="w-20 h-16 left-[11px] top-[252px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Cart</div>
                <div className="w-20 h-16 left-[111px] top-[252px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Checkout</div>
                <div className="eyebrow-pill absolute left-[11px] top-[9px]">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">FE Control Center</span>
                </div>
              </div>

              {/* Back Office Systems */}
              <div className="w-56 h-80 left-[1px] top-0 absolute bg-zinc-100 rounded-[10px]">
                <div className="w-52 h-16 left-[11px] top-[250px] absolute bg-[#457D79] rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-lg font-medium font-display leading-6">SAP</div>
                <div className="w-52 h-16 left-[11px] top-[148px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-lg font-medium font-display leading-6">Store Builder</div>
                <div className="w-52 h-16 left-[11px] top-[46px] absolute bg-blue-500 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-lg font-medium font-display leading-6">
                  AXM Builder
                </div>
                <div className="eyebrow-pill absolute left-[11px] top-[10px]">
                  <div className="eyebrow-pill__dot" />
                  <span className="text-black text-xs font-semibold font-display leading-6">Back Office Systems</span>
                </div>
              </div>

              {/* Adobe Experience Edge */}
              <div className="w-40 h-8 left-[800px] top-[134px] absolute bg-blue-500 rounded-md flex items-center justify-center text-sky-50 text-sm font-medium font-display leading-4">
                Adobe Experience Edge
              </div>

              {/* Adobe Commerce Cloud All */}
              <div className="w-[652px] h-56 left-[502px] top-[593px] absolute rounded-[10px]">
                {/* DevOps */}
                <div className="w-56 h-48 left-[416px] top-[11px] absolute bg-zinc-100 rounded-[10px]">
                  <div className="w-52 h-10 left-[11px] top-[12px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-base font-medium font-display leading-5">Storage</div>
                  <div className="w-52 h-10 left-[11px] top-[62px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-base font-medium font-display leading-5">CDN &amp; Cache</div>
                  <div className="w-52 h-10 left-[11px] top-[113px] absolute bg-neutral-800 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-white text-base font-medium font-display leading-5">Databases</div>
                  <div className="eyebrow-pill absolute left-[37px] top-[167px]">
                    <div className="eyebrow-pill__dot" />
                    <span className="text-black text-xs font-semibold font-display leading-6">DevOps Cloud Svcs.</span>
                  </div>
                </div>
                {/* Adobe Commerce */}
                <div className="w-96 h-52 left-[7px] top-[11px] absolute bg-zinc-100 rounded-[10px]">
                  <div className="eyebrow-pill absolute left-[14px] top-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ED2224] shrink-0" />
                    <span className="text-black text-xs font-semibold font-display leading-6">Adobe GraphQL</span>
                  </div>
                  <div className="w-80 h-10 left-[21px] top-[124px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Composable Commerce Data Model</div>
                  <div className="w-20 h-16 left-[149px] top-[33px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Search &amp; Recs</div>
                  <div className="w-20 h-16 left-[277px] top-[33px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Catalog</div>
                  <div className="w-20 h-16 left-[21px] top-[33px] absolute bg-red-600 rounded-[10px] hover:ring-2 hover:ring-white/40 transition-all cursor-default flex items-center justify-center text-center text-white text-base font-medium font-display leading-5">Commerce Codebase</div>
                  <div className="eyebrow-pill absolute left-[87px] top-[182px]">
                    <div className="eyebrow-pill__dot" />
                    <span className="text-black text-xs font-semibold font-display leading-6">Adobe Commerce Cloud</span>
                  </div>
                </div>
              </div>

              {/* Back Office → FE Control Center tree connector */}
              <svg width="28" height="136" viewBox="0 0 28 136" fill="none" style={{ position: "absolute", left: 220, top: 78, pointerEvents: "none" }}>
                <path d="M0 1 H13" stroke="#959595" strokeWidth="2" />
                <path d="M0 103 H13" stroke="#959595" strokeWidth="2" />
                <path d="M13 1 V103" stroke="#959595" strokeWidth="2" />
                <path d="M13 52 H28" stroke="#959595" strokeWidth="2" />
              </svg>

              {/* FE Control Center → Customer Presentation */}
              <svg width="55" height="2" viewBox="0 0 55 2" fill="none" style={{ position: "absolute", left: 455, top: 79, pointerEvents: "none" }}><path d="M0 1 H55" stroke="#959595" strokeWidth="2" /></svg>

              {/* Connectors — faithfully reproduced from Figma source */}
              <div className="w-24 h-14 left-[930px] top-[482px] absolute" style={{ pointerEvents: "none" }}>
                <svg width="2" height="59" viewBox="0 0 2 59" fill="none" style={{ position: "absolute", left: 0, top: 0 }}><path d="M1 0L1 59" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="93" height="2" viewBox="0 0 93 2" fill="none" style={{ position: "absolute", left: 0, top: 58 }}><path d="M0.00012207 1L93.0001 1.00935" stroke="#959595" strokeWidth="2" /></svg>
              </div>

              <div className="w-[532px] h-[529px] left-[848px] top-[63px] absolute" style={{ pointerEvents: "none" }}>
                <svg width="2" height="136" viewBox="0 0 2 136" fill="none" style={{ position: "absolute", left: 321, top: 92 }}><path d="M1 0L1 136" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="122" viewBox="0 0 2 122" fill="none" style={{ position: "absolute", left: 0, top: 407 }}><path d="M1 0L1 122" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="30" height="2" viewBox="0 0 30 2" fill="none" style={{ position: "absolute", left: 115, top: 88 }}><path d="M0 1L30 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="61" height="2" viewBox="0 0 61 2" fill="none" style={{ position: "absolute", left: 82, top: 371 }}><path d="M0 1L61 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="36" viewBox="0 0 2 36" fill="none" style={{ position: "absolute", left: 9, top: 35 }}><path d="M1 0L1 36" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="372" viewBox="0 0 2 372" fill="none" style={{ position: "absolute", left: 144, top: 0 }}><path d="M1 372L1 -2.86102e-06" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="31" height="2" viewBox="0 0 31 2" fill="none" style={{ position: "absolute", left: 144, top: 1 }}><path d="M0 1H31" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="30" height="2" viewBox="0 0 30 2" fill="none" style={{ position: "absolute", left: 145, top: 73 }}><path d="M0 1H30" stroke="#959595" strokeWidth="2" /></svg>
                {/* AXM Arrow Down group — left=237, top=92 within parent */}
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 237, top: 92 }}><path d="M1 0L1 33" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 401, top: 92 }}><path d="M1 0L1 33" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 532, top: 92 }}><path d="M1 0L1 33" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 532, top: 195 }}><path d="M1 0L1 33" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 532, top: 298 }}><path d="M1 0L1 33" stroke="#959595" strokeWidth="2" /></svg>
                {/* AXM Presentation Arrow — left=-394, top=19 within parent (848-394=454, 63+19=82) */}
                <svg width="346" height="104" viewBox="0 0 346 104" fill="none" style={{ position: "absolute", left: -394, top: 19 }}>
                  <path d="M346 54H300" stroke="#959595" strokeWidth="2" />
                  <path d="M300 55V2" stroke="#959595" strokeWidth="2" />
                  <path d="M300 3L326 3" stroke="#959595" strokeWidth="2" />
                </svg>
              </div>

              <div className="w-24 h-72 left-[116px] top-[314px] absolute" style={{ pointerEvents: "none" }}>
                <svg width="3" height="291" viewBox="0 0 3 291" fill="none" style={{ position: "absolute", left: 0, top: 0 }}><path d="M1 0L1 291" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="132" height="2" viewBox="0 0 132 2" fill="none" style={{ position: "absolute", left: 1, top: 94 }}><path d="M132 1L0 1" stroke="#959595" strokeWidth="2" /></svg>
              </div>

              <div className="w-96 h-[519px] left-[181px] top-[257px] absolute" style={{ pointerEvents: "none" }}>
                <svg width="119" height="2" viewBox="0 0 119 2" fill="none" style={{ position: "absolute", left: 230, top: 398 }}><path d="M119 1L-5.72205e-06 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="119" height="2" viewBox="0 0 119 2" fill="none" style={{ position: "absolute", left: 230, top: 432 }}><path d="M119 1L-5.72205e-06 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="116" height="2" viewBox="0 0 116 2" fill="none" style={{ position: "absolute", left: 0, top: 396 }}><path d="M0 1H116" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="59" height="2" viewBox="0 0 59 2" fill="none" style={{ position: "absolute", left: 0, top: 519 }}><path d="M0 1L59 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="116" height="2" viewBox="0 0 116 2" fill="none" style={{ position: "absolute", left: 0, top: 431 }}><path d="M0 1L116 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="88" viewBox="0 0 2 88" fill="none" style={{ position: "absolute", left: 58, top: 431 }}><path d="M1 0L1 88" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="95" height="2" viewBox="0 0 95 2" fill="none" style={{ position: "absolute", left: 273, top: 0 }}><path d="M95 1L1.19209e-06 1" stroke="#959595" strokeWidth="2" /></svg>
                {/* ACC Up Arrows — left=120, top=-140 within parent */}
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 120, top: -140 }}><path d="M1 33L1 -1.3113e-06" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 120, top: -37 }}><path d="M1 33L1 -1.3113e-06" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 220, top: -37 }}><path d="M1 33L1 -1.3113e-06" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="33" viewBox="0 0 2 33" fill="none" style={{ position: "absolute", left: 220, top: -140 }}><path d="M1 33L1 -1.3113e-06" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="123" viewBox="0 0 2 123" fill="none" style={{ position: "absolute", left: 377, top: 213 }}><path d="M1 0L1 123" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="123" viewBox="0 0 2 123" fill="none" style={{ position: "absolute", left: 504, top: 213 }}><path d="M1 0L1 123" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="61" height="2" viewBox="0 0 61 2" fill="none" style={{ position: "absolute", left: 273, top: 167 }}><path d="M61 1L0 1" stroke="#959595" strokeWidth="2" /></svg>
                <svg width="2" height="84" viewBox="0 0 2 84" fill="none" style={{ position: "absolute", left: 368, top: -1 }}><path d="M1 84L1 2.6226e-06" stroke="#959595" strokeWidth="2" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col gap-3 rounded-[10px] bg-zinc-50 p-4 outline outline-1 outline-zinc-200">
          <div className="flex gap-2 flex-wrap">
            <div className="flex-1 min-w-[100px] h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-medium text-center px-1">AXM Builder</div>
            <div className="flex-1 min-w-[100px] h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-sm font-medium text-center px-1">Store Builder</div>
            <div className="flex-1 min-w-[80px] h-10 bg-[#457D79] rounded-lg flex items-center justify-center text-white text-sm font-medium">SAP</div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex-1 min-w-[100px] h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-medium text-center px-1">Front End Blocks</div>
            <div className="flex-1 min-w-[80px] h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">User Auth</div>
            <div className="flex-1 min-w-[80px] h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-sm font-medium text-center px-1">PDP &amp; PLP</div>
          </div>
          <div className="flex justify-center"><div className="h-4 w-0.5 bg-zinc-400" /></div>
          <div className="rounded-lg outline outline-1 outline-neutral-300 bg-white p-2 flex items-center justify-between gap-2">
            <span className="text-neutral-800 text-sm font-medium">Shopper's Browser</span>
            <div className="bg-blue-500 rounded px-2 py-1 text-sky-50 text-xs font-medium">Adobe Web SDK</div>
          </div>
          <div className="flex justify-center"><div className="h-4 w-0.5 bg-zinc-400" /></div>
          <div className="bg-neutral-800 rounded-[10px] p-3">
            <div className="text-white text-sm font-semibold text-center mb-2">API Layer (Mulesoft)</div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-medium">API Mesh</div>
              <div className="flex-1 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-medium">Adobe IDP</div>
              <div className="flex-1 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-medium text-center px-1">Exp. Platform Connector</div>
            </div>
          </div>
          <div className="flex justify-center"><div className="h-4 w-0.5 bg-zinc-400" /></div>
          <div className="flex gap-2">
            <div className="flex-1 bg-zinc-100 rounded-[10px] p-2">
              <div className="text-xs font-semibold text-zinc-500 mb-1">Adobe Commerce Cloud</div>
              <div className="flex gap-1 flex-wrap">
                <div className="h-8 px-2 bg-red-600 rounded flex items-center text-white text-xs font-medium">Codebase</div>
                <div className="h-8 px-2 bg-red-600 rounded flex items-center text-white text-xs font-medium">Search &amp; Recs</div>
                <div className="h-8 px-2 bg-red-600 rounded flex items-center text-white text-xs font-medium">Catalog</div>
              </div>
            </div>
            <div className="flex-1 bg-zinc-100 rounded-[10px] p-2">
              <div className="text-xs font-semibold text-zinc-500 mb-1">Adobe Experience Manager</div>
              <div className="flex gap-1 flex-col">
                <div className="h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium">Analytics &amp; Target</div>
                <div className="h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-medium">Data Pipeline</div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap pt-1 border-t border-zinc-200 mt-1">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-600" /><span className="text-xs text-zinc-600">Adobe Commerce</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-xs text-zinc-600">Adobe Experience</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-neutral-800" /><span className="text-xs text-zinc-600">3rd Party</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#457D79]" /><span className="text-xs text-zinc-600">Source of Truth</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
