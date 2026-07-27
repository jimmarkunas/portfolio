"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatedSvgFlowDots } from "@/components/motion/AnimatedSvgFlowDots"
import type { FlowAnimationSpec } from "@/components/motion/flow-types"

const FRAME_WIDTH = 1368
const FRAME_HEIGHT = 566
type NodeKind = "automation" | "people"
type DiagramNode = { id: string; label: string; x: number; y: number; w: number; h: number; kind: NodeKind }
type ConnectorSegment = { id: string; x: number; y: number; w: number; h: number }
type CpsFlowConnector = { id: string; d: string; pathLength: number; delay?: number }
const CPS_DOT_SPEED = 24

const NODES: DiagramNode[] = [
  { id: "node-311-call-center", label: "311 & Call Center", x: 14, y: 80, w: 128, h: 64, kind: "people" },
  { id: "node-customer-report-online", label: "Customer Report Online", x: 14, y: 183, w: 128, h: 64, kind: "people" },
  { id: "node-streetlight-alert", label: "Streetlight Alert", x: 14, y: 285, w: 128, h: 64, kind: "automation" },
  { id: "node-resource-mgmt-call", label: "Resource Mgmt. Call", x: 14, y: 386, w: 128, h: 64, kind: "people" },
  { id: "node-ivr", label: "IVR", x: 220, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-sap-work-order-created", label: "SAP W/O Created", x: 220, y: 386, w: 128, h: 64, kind: "automation" },
  { id: "node-create-sap-work-order", label: "Create SAP Work Order", x: 390, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-order-dispatch-crew", label: "Order Dispatch to Crew", x: 559, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-decision-simple-repair", label: "Decision: Simple Repair", x: 728, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-follow-order-created", label: "Follow Order Created", x: 728, y: 248, w: 128, h: 64, kind: "automation" },
  { id: "node-order-sent-tech-crew", label: "Order Sent to Tech Crew", x: 728, y: 363, w: 128, h: 64, kind: "automation" },
  { id: "node-field-work-completed", label: "Field Work Completed", x: 898, y: 133, w: 128, h: 64, kind: "people" },
  { id: "node-field-work-completed-lower", label: "Field Work Completed", x: 898, y: 363, w: 128, h: 64, kind: "people" },
  { id: "node-outage-order-closed-mds", label: "Outage Order Closed (MDS)", x: 1068, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-mds-lower", label: "Outage Order Closed (MDS)", x: 1068, y: 363, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-sap", label: "Outage Order Closed (SAP)", x: 1237, y: 133, w: 128, h: 64, kind: "automation" },
  { id: "node-outage-order-closed-sap-lower", label: "Outage Order Closed (SAP)", x: 1237, y: 363, w: 128, h: 64, kind: "people" },
]

const CONNECTORS: ConnectorSegment[] = [
  { id: "line-15", x: 142, y: 112, w: 30, h: 1 }, { id: "line-16", x: 142, y: 215, w: 30, h: 1 }, { id: "line-17", x: 172, y: 112, w: 1, h: 103 }, { id: "line-18", x: 452, y: 197, w: 1, h: 120 }, { id: "line-19", x: 619, y: 197, w: 1, h: 221 }, { id: "line-20", x: 792, y: 197, w: 1, h: 51 }, { id: "line-21", x: 792, y: 312, w: 1, h: 51 }, { id: "arrow-1", x: 142, y: 418, w: 78, h: 1 }, { id: "arrow-2", x: 172, y: 165, w: 48, h: 1 }, { id: "arrow-3", x: 348, y: 165, w: 42, h: 1 }, { id: "arrow-4", x: 348, y: 418, w: 271, h: 1 }, { id: "arrow-5", x: 142, y: 317, w: 310, h: 1 }, { id: "arrow-6", x: 518, y: 165, w: 41, h: 1 }, { id: "arrow-7", x: 687, y: 165, w: 41, h: 1 }, { id: "arrow-8", x: 856, y: 165, w: 42, h: 1 }, { id: "arrow-9", x: 1026, y: 165, w: 42, h: 1 }, { id: "arrow-10", x: 1196, y: 165, w: 41, h: 1 }, { id: "arrow-11", x: 856, y: 395, w: 42, h: 1 }, { id: "arrow-12", x: 1026, y: 395, w: 42, h: 1 }, { id: "arrow-13", x: 1196, y: 395, w: 41, h: 1 },
]

const HORIZONTAL_CONNECTORS = CONNECTORS.filter((connector) => connector.w > connector.h)
const CPS_FLOW_CONNECTORS: CpsFlowConnector[] = [
  { id: "311-to-ivr", d: "M 142 112 H 172 V 165 H 220", pathLength: 131, delay: 0 },
  { id: "customer-online-to-ivr", d: "M 142 215 H 172 V 165 H 220", pathLength: 131, delay: 0.14 },
  { id: "streetlight-to-create-sap", d: "M 142 317 H 452 V 165 H 390", pathLength: 524, delay: 0.28 },
  { id: "sap-created-to-dispatch", d: "M 348 418 H 623 V 197", pathLength: 496, delay: 0.42 },
  { id: "resource-call-to-sap-created", d: "M 142 418 H 220", pathLength: 78, delay: 0.56 },
  { id: "decision-to-follow-order", d: "M 792 197 V 248", pathLength: 51, delay: 0.7 },
  { id: "follow-order-to-tech-crew", d: "M 792 312 V 363", pathLength: 51, delay: 0.84 },
]
const CPS_FLOW_CONNECTOR_IDS = new Set(["line-15", "line-16", "line-17", "line-20", "line-21", "arrow-1", "arrow-2", "arrow-4", "arrow-5", "line-18", "line-19"])
const REMAINING_FLOW_CONNECTORS: CpsFlowConnector[] = HORIZONTAL_CONNECTORS.filter((connector) => !CPS_FLOW_CONNECTOR_IDS.has(connector.id)).map((connector, index) => ({ id: `horizontal-${connector.id}`, d: `M ${connector.x} ${connector.y} H ${connector.x + connector.w}`, pathLength: connector.w, delay: 1 + index * 0.12 }))
const ALL_FLOW_CONNECTORS = [...CPS_FLOW_CONNECTORS, ...REMAINING_FLOW_CONNECTORS]
const STATIC_CONNECTORS = CONNECTORS.filter((connector) => !CPS_FLOW_CONNECTOR_IDS.has(connector.id) && !HORIZONTAL_CONNECTORS.some((horizontal) => horizontal.id === connector.id))
const LABEL_FALLBACKS: Record<string, string> = { "node-resource-mgmt-call": "Resource Mgmt. Call", "node-field-work-completed-lower": "Field Work Completed", "node-outage-order-closed-mds-lower": "Outage Order Closed (MDS)", "node-outage-order-closed-sap-lower": "Outage Order Closed (SAP)" }
const LABEL_TEXT_FIT_OVERRIDES: Record<string, string> = { "node-order-dispatch-crew": "Order Dispatch to\nCrew", "node-field-work-completed": "Field Work\nCompleted", "node-field-work-completed-lower": "Field Work\nCompleted", "node-outage-order-closed-mds": "Outage Order\nClosed (MDS)", "node-outage-order-closed-mds-lower": "Outage Order\nClosed (MDS)", "node-outage-order-closed-sap": "Outage Order\nClosed (SAP)", "node-outage-order-closed-sap-lower": "Outage Order\nClosed (SAP)" }
const LABELS: Record<string, string> = { "node-311-call-center": "311 & Call Center", "node-customer-report-online": "Customer Report Online", "node-streetlight-alert": "Streetlight Alert", "node-resource-mgmt-call": "Resource Mgmt. Call", "node-ivr": "IVR", "node-sap-work-order-created": "SAP W/O Created", "node-create-sap-work-order": "Create SAP Work Order", "node-order-dispatch-crew": "Order Dispatch to\nCrew", "node-decision-simple-repair": "Decision: Simple Repair", "node-follow-order-created": "Follow Order Created", "node-order-sent-tech-crew": "Order Sent to Tech Crew", "node-field-work-completed": "Field Work\nCompleted", "node-field-work-completed-lower": "Field Work\nCompleted", "node-outage-order-closed-mds": "Outage Order\nClosed (MDS)", "node-outage-order-closed-mds-lower": "Outage Order\nClosed (MDS)", "node-outage-order-closed-sap": "Outage Order\nClosed (SAP)", "node-outage-order-closed-sap-lower": "Outage Order\nClosed (SAP)" }
function getLabel(id: string) { return LABEL_TEXT_FIT_OVERRIDES[id] ?? LABELS[id] ?? LABEL_FALLBACKS[id] ?? id }

function DesktopWorkflow({ reducedMotion }: { reducedMotion: boolean }) {
  const specs: FlowAnimationSpec[] = ALL_FLOW_CONNECTORS.map((connector) => ({ id: `cps-${connector.id}`, path: { kind: "svg", d: connector.d }, direction: "path-forward", loopMode: "restart", speed: CPS_DOT_SPEED, pathLength: connector.pathLength, delay: connector.delay, style: { color: "#222222", size: 6, opacity: 1 } }))
  return <div className="relative mx-auto h-[566px] w-[1368px] bg-[#F3F3F3]">{STATIC_CONNECTORS.map((connector) => <div key={connector.id} className="absolute bg-[#7B7B7B]" style={{ left: connector.x, top: connector.y, width: connector.w, height: connector.h }} />)}<svg className="pointer-events-none absolute inset-0 h-[566px] w-[1368px] overflow-visible" viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`} aria-hidden="true"><g fill="none" stroke="#7B7B7B" strokeWidth="1">{ALL_FLOW_CONNECTORS.map((connector) => <path key={connector.id} d={connector.d} />)}</g><AnimatedSvgFlowDots specs={specs} reducedMotion={reducedMotion} /></svg>{NODES.map((node) => <div key={node.id} className={`absolute flex items-center justify-center rounded-lg border border-[#222222]/20 px-2.5 py-2 text-center text-sm font-medium leading-[1.25] whitespace-pre-line ${node.kind === "automation" ? "bg-white text-[#222222]" : "bg-[#222222] text-white"}`} style={{ left: node.x, top: node.y, width: node.w, height: node.h }}>{getLabel(node.id)}</div>)}<div className="absolute bottom-[5.4%] right-[3.2%] flex flex-col gap-5 text-[16px] text-[#222222]"><div className="flex items-center gap-3 whitespace-nowrap"><div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#222222] bg-white" /><span className="font-medium">Automation</span></div><div className="flex items-center gap-3 whitespace-nowrap"><div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#222222] bg-[#222222]" /><span className="font-medium">People</span></div></div></div>
}

export function CpsOperationsFlowDiagram() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useEffect(() => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReducedMotion(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update) }, [])
  useLayoutEffect(() => { const element = viewportRef.current; if (!element) return; const update = () => { const styles = window.getComputedStyle(element); const horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight); const contentWidth = Math.max(0, element.clientWidth - horizontalPadding); setScale(Math.min(1, contentWidth / FRAME_WIDTH)) }; update(); const observer = new ResizeObserver(update); observer.observe(element); return () => observer.disconnect() }, [])
  return <div ref={viewportRef} className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px] bg-[#F3F3F3] py-3 md:py-5"><div className="relative" style={{ height: FRAME_HEIGHT * scale }}><div className="absolute top-0 origin-top-left" style={{ left: -14 * scale, width: FRAME_WIDTH, height: FRAME_HEIGHT, transform: `scale(${scale})` }}><DesktopWorkflow reducedMotion={reducedMotion} /></div></div></div>
}
