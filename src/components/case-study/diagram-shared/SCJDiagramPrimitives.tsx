import type { ReactNode } from "react"
import {
  ArrowLeftRight,
  BarChart3,
  LayoutGrid,
  ShoppingBag,
} from "lucide-react"

import {
  SCJ_BRAND_LOGOS,
  SCJ_COMMERCE_NODES,
  SCJ_TOP_NODES,
  type MeasuredNodeId,
  type SystemNodeId,
} from "@/components/case-study/diagram-config/scj-architecture.config"

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

function TextLines({ label }: { label: string }) {
  return (
    <>
      {label.split("\n").map((line) => (
        <span key={line} className="block">{line}</span>
      ))}
    </>
  )
}

function UserExperienceBadge() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#447acb] bg-white shadow-[0_1px_2px_rgba(34,34,34,0.04)]">
      <ShoppingBag className="h-4 w-4 text-[#447acb]" />
    </div>
  )
}

function HeaderIcon({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className="inline-flex h-6 w-6 items-center justify-center text-[var(--color-ink)]">{children}</span>
}

function BrandIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px]">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  )
}

export function BrandMark({ brand }: { brand: SystemNodeId }) {
  const src = SCJ_BRAND_LOGOS[brand]
  if (src) {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px]">
        <img src={src} alt={brand} className="h-full w-full object-contain" />
      </div>
    )
  }
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(34,34,34,0.08)] bg-white text-[#222222]">
      <BarChart3 className="h-4 w-4" />
    </span>
  )
}

const NODE_CARD_BASE =
  "flex h-28 flex-col items-center justify-center gap-2 rounded-[10px] border border-[#222222] bg-white px-4 py-2 text-center transition-[border-color] duration-150"

export function NodeCard({
  label,
  icon,
  nodeRef,
  onClick,
}: {
  label: string
  icon: ReactNode
  nodeRef?: (el: HTMLDivElement | null) => void
  onClick?: () => void
}) {
  return (
    <div ref={nodeRef} onClick={onClick} className={cn(NODE_CARD_BASE, onClick && "cursor-pointer hover:border-[var(--color-accent)] hover:shadow-[0_0_0_2px_rgba(68,122,203,0.18),0_8px_24px_rgba(68,122,203,0.22)]")}>
      {icon}
      <div className="type-p4 max-w-[150px] text-[var(--color-ink)]">
        <TextLines label={label} />
      </div>
    </div>
  )
}

function CombinedLayersShell({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function LayerSection({
  icon,
  title,
  subtitle,
  children,
  showDivider = true,
  headerBg = "bg-zinc-100",
  onHeaderClick,
}: {
  icon: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
  showDivider?: boolean
  headerBg?: string
  onHeaderClick?: () => void
}) {
  return (
    <div className={cn("bg-white", showDivider && "border-b border-[var(--color-border)]")}>
      <div
        onClick={onHeaderClick}
        className={cn(
          "flex h-16 items-center justify-start gap-2 border-b border-[var(--color-border)] bg-white px-0 py-3 text-left",
          onHeaderClick && "cursor-pointer transition-[outline,box-shadow] duration-150 hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
        )}
      >
        <HeaderIcon dark>{icon}</HeaderIcon>
        <div className="flex flex-col items-start gap-0.5 text-left">
          <div className="type-h6 text-[var(--color-ink)]">{title}</div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export function ApiLayer({
  nodeRef,
  onClick,
}: {
  nodeRef?: (el: HTMLDivElement | null) => void
  onClick?: () => void
}) {
  return (
    <div
      ref={nodeRef}
      onClick={onClick}
      className={cn(
        "flex h-16 items-center justify-center gap-3 rounded-[10px] border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2 text-white transition-[border-color] duration-150",
        onClick && "cursor-pointer hover:outline-2 hover:outline-blue-500 hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)]"
      )}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center text-[var(--color-accent)]">
        <ArrowLeftRight className="h-5 w-5" />
      </span>
      <div className="type-h6 text-center">2-Way Rest API Layer</div>
    </div>
  )
}

export function StorefrontAndCommerceLayers({
  toggle,
  topGridClass,
  commerceGridClass,
  setNodeRef,
}: {
  toggle: (key: string) => void
  topGridClass: string
  commerceGridClass: string
  setNodeRef?: (id: MeasuredNodeId) => (el: HTMLDivElement | null) => void
}) {
  return (
    <CombinedLayersShell>
      <LayerSection
        icon={<LayoutGrid className="h-5 w-5" />}
        title="Storefront Design"
        subtitle="Presentation Layer"
        onHeaderClick={() => toggle("storefront")}
      >
        <div className={topGridClass}>
          {SCJ_TOP_NODES.map((node) => (
            <NodeCard
              key={node.id}
              label={node.label}
              icon={<BrandIcon src={node.iconSrc} alt={node.iconAlt} />}
              onClick={() => toggle(node.id)}
            />
          ))}
        </div>
      </LayerSection>

      <LayerSection
        icon={<img src="/tool-icons/svg/bc-logo-icon.svg" alt="BigCommerce" className="h-8 w-8" />}
        title="Commerce System Layer"
        showDivider={false}
        subtitle="Commerce Platform"
        onHeaderClick={() => toggle("commerce-layer")}
      >
        <div className={commerceGridClass}>
          {SCJ_COMMERCE_NODES.map((node) => (
            <NodeCard
              key={node.id}
              label={node.label}
              icon={<BrandIcon src={node.iconSrc} alt={node.iconAlt} />}
              nodeRef={setNodeRef?.(node.id)}
              onClick={() => toggle(node.id)}
            />
          ))}
        </div>
      </LayerSection>
    </CombinedLayersShell>
  )
}

export function UserExperienceEyebrow() {
  return <div className="type-ui-sm text-center text-[#222222]">User Experience Layer</div>
}

export function UserExperienceIcon() {
  return <UserExperienceBadge />
}
