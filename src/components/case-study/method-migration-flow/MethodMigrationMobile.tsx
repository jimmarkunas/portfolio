import type { ReactNode } from "react"

import {
  getNodeVisualState,
  NodeMarker,
} from "@/components/case-study/method-migration-flow/MethodMigrationShared"
import {
  cn,
  type Lane,
  type NodeId,
  type SelectionState,
} from "@/components/case-study/method-migration-flow/methodMigrationModel"

type MobileCardProps = {
  id: NodeId
  lane: Lane
  title: string
  subtitle: string
  state: SelectionState
  accent?: boolean
}

function MobileCard({
  id,
  lane,
  title,
  subtitle,
  state,
  accent = false,
}: MobileCardProps) {
  const { active, dimmed } = getNodeVisualState(id, lane, state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label={`${title}. ${subtitle}`}
      {...state.bindNode(id)}
      className={cn(
        "relative flex min-h-[132px] w-full appearance-none flex-col items-center justify-center gap-3 rounded-[10px] border border-[#C7CBD0] bg-[#FCFCFC] px-5 py-5 text-center",
        "cursor-pointer transition-[border-color,box-shadow,opacity] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.14)]",
        dimmed && "opacity-35",
      )}
    >
      <NodeMarker active={active} accent={accent} />
      <span className={cn("type-p3 whitespace-pre-line text-[#0F1112]", (accent || active) && "text-[#075BFF]")}>
        {title}
      </span>
      <span className="type-p4 whitespace-pre-line text-[#676C75]">{subtitle}</span>
    </button>
  )
}

function MobilePlatform({ state }: { state: SelectionState }) {
  const id: NodeId = "migration-platform"
  const { active, dimmed } = getNodeVisualState(id, "conversion", state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label="Migration platform. BigCommerce plus AEM and AEP. Shared commerce, content, and data. Front-end data layer. Behavioral tracking live."
      {...state.bindNode(id)}
      className={cn(
        "flex w-full appearance-none flex-col items-start rounded-[12px] border border-[#0F1112] bg-[#18191A] px-6 py-7 text-left text-white",
        "cursor-pointer transition-[border-color,box-shadow,opacity] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.18)]",
        dimmed && "opacity-35",
      )}
    >
      <span className="type-p5 font-medium uppercase tracking-[0.2em] text-white/90">Migration platform</span>
      <span className="type-p2 mt-4">BigCommerce + AEM/AEP</span>
      <span className="type-p4 mt-2 text-white/90">Shared commerce · content · data</span>
      <span className="my-5 h-px w-full bg-white/60" />
      <span className="type-p2">Front-end data layer</span>
      <span className="type-p4 mt-2 text-white/90">Behavioral tracking live</span>
    </button>
  )
}

function MobileOutcome({ state }: { state: SelectionState }) {
  const id: NodeId = "revenue-uplift"
  const { active } = getNodeVisualState(id, "both", state)

  return (
    <button
      type="button"
      data-node-id={id}
      aria-label="20% DTC revenue uplift. 3 launches: US, CA, Men."
      {...state.bindNode(id)}
      className={cn(
        "flex w-full appearance-none flex-col items-start rounded-[12px] border border-[#C7CBD0] bg-[#FCFCFC] px-6 py-7 text-left text-[#0F1112]",
        "cursor-pointer transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none",
        "hover:border-[#075BFF] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#075BFF]/25",
        active && "border-[#075BFF] shadow-[0_0_0_3px_rgba(7,91,255,0.14)]",
      )}
    >
      <span aria-hidden="true" className="h-1 w-9 rounded-full bg-[#075BFF]" />
      <span className="mt-5 text-[56px] font-normal leading-none tracking-[-0.05em]">20%</span>
      <span className="type-p3 mt-3">DTC revenue uplift</span>
      <span className="type-p4 mt-4 text-[#676C75]">3 launches · US, CA, Men</span>
    </button>
  )
}

function MobileLane({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="type-p5 font-medium uppercase tracking-[0.16em] text-[#075BFF]">{label}</div>
      {children}
    </div>
  )
}

function MobileCapabilityDots() {
  return (
    <div aria-hidden="true" className="flex h-5 items-center justify-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#075BFF]" />
      <span className="h-2 w-2 rounded-full bg-[#075BFF]" />
      <span className="h-2 w-2 rounded-full bg-[#075BFF]" />
    </div>
  )
}

function MobilePhase({ number, label, children }: { number: string; label: string; children: ReactNode }) {
  return (
    <section className="border-t border-[#B7BBC0] pt-5">
      <h2 className="type-p5 mb-6 text-center font-medium uppercase tracking-[0.2em] text-[#0F1112]">
        {number} · {label}
      </h2>
      <div className="grid gap-7 md:grid-cols-2">{children}</div>
    </section>
  )
}

export function MethodMigrationMobile({ state }: { state: SelectionState }) {
  return (
    <div className="space-y-8 rounded-[14px] border border-[#AEB3B8] bg-[#FCFCFC] p-5 sm:p-7 xl:hidden">
      <MobilePhase number="01" label="Audit">
        <MobileLane label="SEO protection">
          <MobileCard id="search-console" lane="seo" title="Google Search Console" subtitle="Traffic baseline documented" state={state} />
          <MobileCard id="seo-mapping" lane="seo" title="SEO migration mapping" subtitle="URLs · categories · canonicals" state={state} />
        </MobileLane>
        <MobileLane label="Conversion growth">
          <MobileCard id="conversion-audit" lane="conversion" title="Conversion audit" subtitle="Homegrown system baseline" state={state} />
        </MobileLane>
      </MobilePhase>

      <MobilePhase number="02" label="Migrate">
        <MobileLane label="SEO protection">
          <MobileCard id="redirect-build" lane="seo" title="301 redirect build" subtitle="Old URLs → BigCommerce" state={state} />
        </MobileLane>
        <MobileLane label="Conversion growth">
          <MobilePlatform state={state} />
          <div className="flex items-center gap-3 text-[#075BFF]">
            <span aria-hidden="true" className="h-9 w-[3px] rounded-full bg-[#075BFF]" />
            <span className="type-p4">New capability vs. Mrs. Meyer’s</span>
          </div>
          <MobileCapabilityDots />
          <MobileCard id="aep-personalization" lane="conversion" title="AEP personalization" subtitle="Real-time segment targeting" state={state} />
        </MobileLane>
      </MobilePhase>

      <MobilePhase number="03" label="Convert">
        <MobileLane label="SEO protection">
          <MobileCard id="zero-traffic-loss" lane="seo" title="Zero traffic loss" subtitle="301s validated post-launch" state={state} accent />
        </MobileLane>
        <MobileLane label="Conversion growth">
          <MobileCard id="conversion-lift" lane="conversion" title="Conversion lift" subtitle="vs. homegrown baseline" state={state} accent />
        </MobileLane>
        <div className="md:col-span-2">
          <MobileOutcome state={state} />
        </div>
      </MobilePhase>
    </div>
  )
}
