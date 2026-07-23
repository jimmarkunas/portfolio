"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatedSvgFlowDots } from "@/components/motion/AnimatedSvgFlowDots"
import type { FlowAnimationSpec } from "@/components/motion/flow-types"

const FRAME_WIDTH = 1368
const FRAME_HEIGHT = 566
type NodeKind = "automation" | "people"
type DiagramNode = { id: string; label: string; x: number; y: number; w: number; h: number; kind: NodeKind }
type ConnectorSegment = { id: string; x: number; y: number; w: number; h: number }
type WorkflowEdge = { source: string; target: string; label?: string }
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

const EDGES: WorkflowEdge[] = [
  { source: "node-311-call-center", target: "node-ivr" },
  { source: "node-customer-report-online", target: "node-ivr" },
  { source: "node-ivr", target: "node-create-sap-work-order" },
  { source: "node-streetlight-alert", target: "node-create-sap-work-order" },
  { source: "node-resource-mgmt-call", target: "node-sap-work-order-created" },
  { source: "node-sap-work-order-created", target: "node-order-dispatch-crew" },
  { source: "node-create-sap-work-order", target: "node-order-dispatch-crew" },
  { source: "node-order-dispatch-crew", target: "node-decision-simple-repair" },
  { source: "node-decision-simple-repair", target: "node-field-work-completed", label: "Simple repair" },
  { source: "node-decision-simple-repair", target: "node-follow-order-created", label: "Follow-up required" },
  { source: "node-follow-order-created", target: "node-order-sent-tech-crew" },
  { source: "node-order-sent-tech-crew", target: "node-field-work-completed-lower" },
  { source: "node-field-work-completed", target: "node-outage-order-closed-mds" },
  { source: "node-outage-order-closed-mds", target: "node-outage-order-closed-sap" },
  { source: "node-field-work-completed-lower", target: "node-outage-order-closed-mds-lower" },
  { source: "node-outage-order-closed-mds-lower", target: "node-outage-order-closed-sap-lower" },
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
const NODE_BY_ID = Object.fromEntries(NODES.map((node) => [node.id, node]))
function edgeLabel(source: string, target: string) { return EDGES.find((edge) => edge.source === source && edge.target === target)?.label }
function asPercentX(px: number) { return `${(px / FRAME_WIDTH) * 100}%` }
function asPercentY(px: number) { return `${(px / FRAME_HEIGHT) * 100}%` }
function nodeClass(kind: NodeKind) { return `flex min-h-14 w-full min-w-0 items-center justify-center rounded-lg border border-[#222222]/20 px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.65rem,1vw,1rem)] text-center text-[clamp(0.875rem,0.75rem+0.35vw,1.125rem)] font-medium leading-[1.2] ${kind === "automation" ? "bg-white text-[#222222]" : "bg-[#222222] text-white"}` }

function MobileNode({ id }: { id: string }) {
  const node = NODE_BY_ID[id]
  return <div className={`${nodeClass(node.kind)} [container-type:inline-size]`}><span className="block max-h-full max-w-full overflow-hidden text-[clamp(0.8125rem,8cqi,1.125rem)] leading-[1.15] [overflow-wrap:break-word]">{node.label}</span></div>
}

function NarrowTabletWorkflow({ reducedMotion }: { reducedMotion: boolean }) {
  return <div className="mx-auto w-full max-w-[620px]"><MobileWorkflow reducedMotion={reducedMotion} /></div>
}

function MobileConnector({ label, reducedMotion }: { label?: string; reducedMotion: boolean }) {
  const path = "M 50 0 V 32"
  const spec: FlowAnimationSpec = { id: `cps-mobile-${label ?? "edge"}`, path: { kind: "svg", d: path }, direction: "path-forward", loopMode: "restart", speed: CPS_DOT_SPEED, pathLength: 32, style: { color: "#222222", size: 6, opacity: 1 } }
  return <div className="relative flex min-h-8 w-full flex-col items-center justify-center text-[#7B7B7B]"><div className="relative h-8 w-full"><svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 32" aria-hidden="true"><path d={path} fill="none" stroke="#7B7B7B" strokeWidth="1" /><AnimatedSvgFlowDots specs={[spec]} reducedMotion={reducedMotion} /></svg></div>{label ? <span className="absolute top-1/2 -translate-y-1/2 bg-[#F3F3F3] px-2 text-xs font-medium leading-none">{label}</span> : null}</div>
}

function MobileWorkflow({ reducedMotion }: { reducedMotion: boolean }) {
  return <div className="mx-auto w-full max-w-[520px] space-y-3 px-1">
    <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#7B7B7B]">Intake paths</p>
    <div className="relative grid gap-2 sm:grid-cols-2"><MobileNode id="node-311-call-center" /><MobileNode id="node-customer-report-online" /><div className="pointer-events-none absolute left-1/2 top-full h-4 w-1/2 -translate-x-1/2 border-x border-b border-[#7B7B7B]" /></div>
    <MobileConnector reducedMotion={reducedMotion} />
    <div className="relative mx-auto max-w-[260px]"><MobileNode id="node-ivr" /><div className="pointer-events-none absolute left-1/2 top-full h-4 w-1/2 -translate-x-1/2 border-x border-b border-[#7B7B7B]" /></div>
    <div className="grid gap-3 border-t border-[#7B7B7B]/40 pt-3 sm:grid-cols-2"><div><MobileNode id="node-streetlight-alert" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-create-sap-work-order" /></div><div><MobileNode id="node-resource-mgmt-call" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-sap-work-order-created" /></div></div>
    <MobileConnector reducedMotion={reducedMotion} />
    <MobileNode id="node-order-dispatch-crew" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-decision-simple-repair" />
    <div className="relative grid gap-4 border-t border-[#7B7B7B]/40 pt-4 sm:grid-cols-2"><div><p className="mb-1 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#7B7B7B]">{edgeLabel("node-decision-simple-repair", "node-field-work-completed")}</p><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-field-work-completed" /></div><div><p className="mb-1 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#7B7B7B]">{edgeLabel("node-decision-simple-repair", "node-follow-order-created")}</p><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-follow-order-created" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-order-sent-tech-crew" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-field-work-completed-lower" /></div></div>
    <div className="relative mx-auto max-w-[260px]"><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-outage-order-closed-mds" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-outage-order-closed-sap" /></div>
    <div className="flex flex-wrap justify-center gap-4 border-t border-[#7B7B7B]/40 pt-4 text-sm font-medium text-[#222222]"><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] border border-[#222222] bg-white" />Automation</div><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] border border-[#222222] bg-[#222222]" />People</div></div>
  </div>
}

function DesktopWorkflow({ reducedMotion }: { reducedMotion: boolean }) {
  const specs: FlowAnimationSpec[] = ALL_FLOW_CONNECTORS.map((connector) => ({ id: `cps-${connector.id}`, path: { kind: "svg", d: connector.d }, direction: "path-forward", loopMode: "restart", speed: CPS_DOT_SPEED, pathLength: connector.pathLength, delay: connector.delay, style: { color: "#222222", size: 6, opacity: 1 } }))
  return <div className="relative mx-auto h-[566px] w-[1368px] bg-[#F3F3F3]">{STATIC_CONNECTORS.map((connector) => <div key={connector.id} className="absolute bg-[#7B7B7B]" style={{ left: connector.x, top: connector.y, width: connector.w, height: connector.h }} />)}<svg className="pointer-events-none absolute inset-0 h-[566px] w-[1368px] overflow-visible" viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`} aria-hidden="true"><g fill="none" stroke="#7B7B7B" strokeWidth="1">{ALL_FLOW_CONNECTORS.map((connector) => <path key={connector.id} d={connector.d} />)}</g><AnimatedSvgFlowDots specs={specs} reducedMotion={reducedMotion} /></svg>{NODES.map((node) => <div key={node.id} className={`${nodeClass(node.kind)} absolute`} style={{ left: node.x, top: node.y, width: node.w, height: node.h }}><span className="block max-h-full max-w-full overflow-hidden text-[16px] leading-[1.15]">{node.label}</span></div>)}<div className="absolute bottom-[5.4%] right-[3.2%] flex flex-col gap-5 text-[16px] text-[#222222]"><div className="flex items-center gap-3 whitespace-nowrap"><div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#222222] bg-white" /><span className="font-medium">Automation</span></div><div className="flex items-center gap-3 whitespace-nowrap"><div className="h-5 w-5 shrink-0 rounded-[2px] border border-[#222222] bg-[#222222]" /><span className="font-medium">People</span></div></div></div>
}

function TabletWorkflow({ reducedMotion }: { reducedMotion: boolean }) {
  return <div className="mx-auto w-full max-w-[1120px] space-y-4">
    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2"><div className="space-y-2"><MobileNode id="node-311-call-center" /><MobileNode id="node-customer-report-online" /></div><MobileConnector reducedMotion={reducedMotion} /><div className="space-y-2"><MobileNode id="node-ivr" /><MobileNode id="node-streetlight-alert" /></div><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-create-sap-work-order" /></div>
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"><div className="flex items-center gap-2"><MobileNode id="node-resource-mgmt-call" /><MobileConnector reducedMotion={reducedMotion} /></div><MobileNode id="node-sap-work-order-created" /><MobileConnector reducedMotion={reducedMotion} /></div>
    <div className="flex justify-center"><MobileConnector reducedMotion={reducedMotion} /></div><div className="mx-auto max-w-[260px]"><MobileNode id="node-order-dispatch-crew" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-decision-simple-repair" /></div>
    <div className="grid grid-cols-2 gap-4 border-t border-[#7B7B7B]/40 pt-3"><div><p className="mb-2 text-center text-[clamp(0.6875rem,0.625rem+0.25vw,0.875rem)] font-semibold uppercase tracking-[0.08em] text-[#7B7B7B]">Simple Repair</p><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-field-work-completed" /></div><div><p className="mb-2 text-center text-[clamp(0.6875rem,0.625rem+0.25vw,0.875rem)] font-semibold uppercase tracking-[0.08em] text-[#7B7B7B]">Follow-up Required</p><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-follow-order-created" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-order-sent-tech-crew" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-field-work-completed-lower" /></div></div>
    <div className="mx-auto max-w-[260px]"><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-outage-order-closed-mds" /><MobileConnector reducedMotion={reducedMotion} /><MobileNode id="node-outage-order-closed-sap" /></div>
    <div className="flex justify-center gap-5 border-t border-[#7B7B7B]/40 pt-3 text-[clamp(0.75rem,0.6875rem+0.25vw,1rem)] font-medium"><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] border border-[#222222] bg-white" />Automation</div><div className="flex items-center gap-2"><div className="h-5 w-5 rounded-[2px] border border-[#222222] bg-[#222222]" />People</div></div>
  </div>
}

export function CpsOperationsFlowDiagram() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useEffect(() => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReducedMotion(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update) }, [])
  useLayoutEffect(() => { const element = viewportRef.current; if (!element) return; const update = () => setScale(Math.min(1, element.clientWidth / FRAME_WIDTH)); update(); const observer = new ResizeObserver(update); observer.observe(element); return () => observer.disconnect() }, [])
  return <div ref={viewportRef} className="overflow-hidden rounded-[24px] bg-[#F3F3F3] p-3 md:p-5"><div className="relative" style={{ height: FRAME_HEIGHT * scale }}><div className="absolute left-0 top-0 origin-top-left" style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT, transform: `scale(${scale})` }}><DesktopWorkflow reducedMotion={reducedMotion} /></div></div></div>
}
