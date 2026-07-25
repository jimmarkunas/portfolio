import type { CSSProperties } from "react"

import {
  getNodeVisualState,
  NodeMarker,
} from "@/components/case-study/method-migration-flow/MethodMigrationShared"
import {
  cn,
  FRAME_HEIGHT,
  FRAME_WIDTH,
  type Lane,
  type NodeId,
  type SelectionState,
} from "@/components/case-study/method-migration-flow/methodMigrationModel"

type DesktopNodeProps = {
  id: NodeId
  lane: Lane
  title: string
  subtitle: string
  style: CSSProperties
  state: SelectionState
  accent?: boolean
}

function DesktopNode({
  id,
  lane,
  title,
  subtitle,
  style,
  state,
  accent = false,
}: DesktopNodeProps) {
  const { active, dimmed } = getNodeVisualState(id, lane, state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label={`${title}. ${subtitle}`}
      {...state.bindNode(id)}
      className={cn(
        "absolute z-20 flex appearance-none flex-col items-center justify-center gap-[16px] rounded-[12px] border border-[#C7CBD0] bg-[#FCFCFC] px-[20px] py-[18px] text-center text-[#0F1112]",
        "cursor-pointer transition-[border-color,box-shadow,opacity] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.14)]",
        dimmed && "opacity-35",
      )}
      style={style}
    >
      <NodeMarker active={active} accent={accent} />
      <span
        className={cn(
          "whitespace-pre-line text-[19px] font-normal leading-[1.28] tracking-[-0.02em]",
          (accent || active) && "text-[#075BFF]",
        )}
      >
        {title}
      </span>
      <span className="whitespace-pre-line text-[17px] font-normal leading-[1.48] text-[#676C75]">
        {subtitle}
      </span>
    </button>
  )
}

function DesktopPlatform({ state }: { state: SelectionState }) {
  const id: NodeId = "migration-platform"
  const { active, dimmed } = getNodeVisualState(id, "conversion", state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label="Migration platform. BigCommerce plus AEM and AEP. Shared commerce, content, and data. Front-end data layer. Behavioral tracking live."
      {...state.bindNode(id)}
      className={cn(
        "absolute z-20 flex appearance-none flex-col items-stretch rounded-[14px] border border-[#0F1112] bg-[#18191A] px-[29px] py-[31px] text-left text-white shadow-[0_12px_28px_rgba(15,17,18,0.08)]",
        "cursor-pointer transition-[border-color,box-shadow,opacity] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.18),0_12px_28px_rgba(15,17,18,0.12)]",
        dimmed && "opacity-35",
      )}
      style={{ left: 414, top: 522, width: 332, height: 284 }}
    >
      <span className="text-[14px] font-medium uppercase leading-none tracking-[0.22em] text-white/90">
        Migration platform
      </span>
      <span className="mt-[22px] text-[24px] font-normal leading-[1.2] tracking-[-0.025em]">
        BigCommerce + AEM/AEP
      </span>
      <span className="mt-[13px] text-[17px] font-normal leading-[1.4] text-white/90">
        Shared commerce · content · data
      </span>
      <span className="my-[24px] h-px w-full bg-white/60" />
      <span className="text-[22px] font-normal leading-[1.25] tracking-[-0.02em]">
        Front-end data layer
      </span>
      <span className="mt-[13px] text-[17px] font-normal leading-[1.4] text-white/90">
        Behavioral tracking live
      </span>
    </button>
  )
}

function DesktopOutcome({ state }: { state: SelectionState }) {
  const id: NodeId = "revenue-uplift"
  const { active } = getNodeVisualState(id, "both", state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label="20% DTC revenue uplift. 3 launches: US, CA, Men."
      {...state.bindNode(id)}
      className={cn(
        "absolute z-20 flex appearance-none flex-col items-start rounded-[14px] border border-[#C7CBD0] bg-[#FCFCFC] px-[29px] pb-[28px] pt-[38px] text-left text-[#0F1112]",
        "cursor-pointer transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.14)]",
      )}
      style={{ left: 1390, top: 360, width: 220, height: 272 }}
    >
      <span aria-hidden="true" className="h-[5px] w-[38px] rounded-full bg-[#075BFF]" />
      <span className="mt-[22px] text-[68px] font-normal leading-none tracking-[-0.055em]">20%</span>
      <span className="mt-[16px] text-[19px] font-normal leading-[1.25] tracking-[-0.02em]">
        DTC revenue uplift
      </span>
      <span className="mt-[22px] text-[17px] font-normal leading-[1.45] text-[#676C75]">
        3 launches ·
        <br />
        US, CA, Men
      </span>
    </button>
  )
}

function DesktopConnectors({ activeLane }: { activeLane: Lane | null }) {
  const seoActive = activeLane === "seo" || activeLane === "both"
  const conversionActive = activeLane === "conversion" || activeLane === "both"
  const hasActiveLane = activeLane !== null
  const capabilityDots = [
    [317, 672], [332, 672], [347, 672],
    [770, 672], [785, 672], [800, 672],
    [1046, 672], [1061, 672], [1076, 672],
  ] as const

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <path d="M52 112H1566" fill="none" stroke="#B7BBC0" strokeWidth="1.5" />
      <path d="M580 130V521" fill="none" stroke="#B7BBC0" strokeDasharray="8 11" strokeWidth="1.5" />
      <path d="M980 130V595" fill="none" stroke="#B7BBC0" strokeDasharray="8 11" strokeWidth="1.5" />
      <path d="M56 298H1492V360" fill="none" opacity={hasActiveLane && !seoActive ? 0.2 : 1} stroke="#0F1112" strokeWidth="2" />
      <path d="M56 672H1492V632" fill="none" opacity={hasActiveLane && !conversionActive ? 0.2 : 1} stroke="#0F1112" strokeWidth="2" />
      <path className="transition-opacity duration-150 motion-reduce:transition-none" d="M56 298H1492V360" fill="none" opacity={seoActive ? 1 : 0} stroke="#075BFF" strokeWidth="3" />
      <path className="transition-opacity duration-150 motion-reduce:transition-none" d="M56 672H1492V632" fill="none" opacity={conversionActive ? 1 : 0} stroke="#075BFF" strokeWidth="3" />
      {capabilityDots.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} fill="#075BFF" r="5" />)}
    </svg>
  )
}

export function MethodMigrationDesktop({ state }: { state: SelectionState }) {
  return (
    <>
      <DesktopConnectors activeLane={state.activeLane} />
      <div className="absolute text-center text-[16px] font-medium uppercase leading-none tracking-[0.22em] text-[#0F1112]" style={{ left: 136, top: 75, width: 340 }}>01 · Audit</div>
      <div className="absolute text-center text-[16px] font-medium uppercase leading-none tracking-[0.22em] text-[#0F1112]" style={{ left: 607, top: 75, width: 350 }}>02 · Migrate</div>
      <div className="absolute text-center text-[16px] font-medium uppercase leading-none tracking-[0.22em] text-[#0F1112]" style={{ left: 1086, top: 75, width: 350 }}>03 · Convert</div>
      <div className="absolute text-[15px] font-medium uppercase leading-none tracking-[0.17em] text-[#075BFF]" style={{ left: 52, top: 168 }}>SEO protection</div>
      <div className="absolute text-[15px] font-medium uppercase leading-none tracking-[0.17em] text-[#075BFF]" style={{ left: 52, top: 516 }}>Conversion growth</div>

      <DesktopNode id="search-console" lane="seo" title={"Google Search\nConsole"} subtitle={"Traffic baseline\ndocumented"} style={{ left: 52, top: 224, width: 203, height: 188 }} state={state} />
      <DesktopNode id="seo-mapping" lane="seo" title={"SEO migration\nmapping"} subtitle={"URLs · categories ·\ncanonicals"} style={{ left: 334, top: 224, width: 201, height: 188 }} state={state} />
      <DesktopNode id="redirect-build" lane="seo" title="301 redirect build" subtitle={"Old URLs →\nBigCommerce"} style={{ left: 632, top: 224, width: 203, height: 188 }} state={state} />
      <DesktopNode id="zero-traffic-loss" lane="seo" title="Zero traffic loss" subtitle={"301s validated\npost-launch"} style={{ left: 950, top: 224, width: 209, height: 188 }} state={state} accent />
      <DesktopNode id="conversion-audit" lane="conversion" title="Conversion audit" subtitle={"Homegrown system\nbaseline"} style={{ left: 52, top: 596, width: 203, height: 178 }} state={state} />
      <DesktopPlatform state={state} />
      <DesktopNode id="aep-personalization" lane="conversion" title="AEP personalization" subtitle={"Real-time segment\ntargeting"} style={{ left: 822, top: 595, width: 201, height: 179 }} state={state} />
      <DesktopNode id="conversion-lift" lane="conversion" title="Conversion lift" subtitle={"vs. homegrown\nbaseline"} style={{ left: 1105, top: 595, width: 201, height: 179 }} state={state} accent />
      <DesktopOutcome state={state} />

      <div className="absolute flex items-center gap-[20px] text-[18px] font-normal leading-none text-[#075BFF]" style={{ left: 423, top: 827 }}>
        <span aria-hidden="true" className="h-[43px] w-[4px] rounded-full bg-[#075BFF]" />
        <span>New capability vs. Mrs. Meyer’s</span>
      </div>
    </>
  )
}
