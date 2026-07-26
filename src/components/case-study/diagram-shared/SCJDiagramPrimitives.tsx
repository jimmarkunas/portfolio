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
  return <span>{label.replace(/\n/g, " ")}</span>
}

function UserExperienceBadge() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#447acb] bg-white shadow-[0_1px_2px_rgba(34,34,34,0.04)]">
      <ShoppingBag className="h-4 w-4 text-[#447acb]" />
    </div>
  )
}

function HeaderIcon({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <span className={cn("inline-flex h-6 w-6 items-center justify-center text-[var(--color-ink)]", className)}>{children}</span>
}

const SCJ_THIN_GLYPH_FILTER_ID = "scj-thin-glyph"

function BrandIcon({ src, alt, thin = false }: { src: string; alt: string; thin?: boolean }) {
  return (
    <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        style={thin ? { filter: `url(#${SCJ_THIN_GLYPH_FILTER_ID})` } : undefined}
      />
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
  centerLabel = false,
}: {
  label: string
  icon: ReactNode
  nodeRef?: (el: HTMLDivElement | null) => void
  onClick?: () => void
  centerLabel?: boolean
}) {
  return (
    <div ref={nodeRef} onClick={onClick} className={cn(NODE_CARD_BASE, onClick && "cursor-pointer hover:border-[var(--color-accent)] hover:shadow-[0_0_0_2px_rgba(68,122,203,0.18),0_8px_24px_rgba(68,122,203,0.22)]")}>
      {icon}
      <div className={cn(
        "type-p4 flex max-w-[150px] justify-center text-center text-[var(--color-ink)]",
        centerLabel ? "items-start" : "h-12 items-start"
      )}>
        <TextLines label={label} />
      </div>
    </div>
  )
}

function CombinedLayersShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#222222] bg-white">
      {children}
    </div>
  )
}

function ThinGlyphFilter() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter id={SCJ_THIN_GLYPH_FILTER_ID} x="-10%" y="-10%" width="120%" height="120%">
          <feMorphology in="SourceGraphic" operator="erode" radius="0.45" />
        </filter>
      </defs>
    </svg>
  )
}

function LayerSection({
  icon,
  title,
  subtitle,
  children,
  showDivider = true,
  headerBg = "bg-zinc-100",
  headerText = "text-[var(--color-ink)]",
  onHeaderClick,
}: {
  icon: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
  showDivider?: boolean
  headerBg?: string
  headerText?: string
  onHeaderClick?: () => void
}) {
  return (
    <div className={cn("bg-white", showDivider && "border-b border-[#222222]")}>
      <div
        onClick={onHeaderClick}
        className={cn(
          "flex h-16 items-center justify-center gap-2 border-b border-[#222222] px-0 py-3 text-center",
          headerBg,
          onHeaderClick && "cursor-pointer transition-[outline,box-shadow] duration-150 hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
        )}
      >
        <HeaderIcon dark className={headerText}>{icon}</HeaderIcon>
        <div className="flex flex-col items-center gap-0.5 text-center">
          <div className={cn("type-h6", headerText)}>{title}</div>
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
    <>
      <ThinGlyphFilter />
      <CombinedLayersShell>
        <LayerSection
          icon={<LayoutGrid className="h-5 w-5" />}
          title="Storefront Design"
          headerBg="bg-[#222222]"
          headerText="text-[#f1f1f1]"
          subtitle="Presentation Layer"
          onHeaderClick={() => toggle("storefront")}
        >
          <div className={topGridClass}>
            {SCJ_TOP_NODES.map((node) => (
              <NodeCard
                key={node.id}
                label={node.label}
                icon={<BrandIcon src={node.iconSrc} alt={node.iconAlt} thin />}
                onClick={() => toggle(node.id)}
              />
            ))}
          </div>
        </LayerSection>

        <LayerSection
          icon={<img src="/tool-icons/svg/bc-logo-icon.svg" alt="BigCommerce" className="h-8 w-8 invert" />}
          title="Commerce System Layer"
          showDivider={false}
          headerBg="bg-[#222222]"
          headerText="text-[#f1f1f1]"
          subtitle="Commerce Platform"
          onHeaderClick={() => toggle("commerce-layer")}
        >
          <div className={commerceGridClass}>
            {SCJ_COMMERCE_NODES.map((node) => (
              <NodeCard
                key={node.id}
                label={node.label}
                icon={<BrandIcon src={node.iconSrc} alt={node.iconAlt} thin />}
                nodeRef={setNodeRef?.(node.id)}
                onClick={() => toggle(node.id)}
              />
            ))}
          </div>
        </LayerSection>
      </CombinedLayersShell>
    </>
  )
}

export function UserExperienceEyebrow() {
  return <div className="type-ui-sm text-center text-[#222222]">User Experience Layer</div>
}

export function UserExperienceIcon() {
  return <UserExperienceBadge />
}
