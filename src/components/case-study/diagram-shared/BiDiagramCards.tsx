import type { MouseEvent, ReactNode } from "react"

import {
  CampaignIcon,
  ContentIcon,
  DatabaseIcon,
  InventoryIcon,
  LaptopIcon,
  ProductsIcon,
} from "@/components/case-study/bi-commerce-icons"
import {
  BI_AEM_CARD,
  BI_MULESOFT_CARD,
  BI_SAP_CARD,
  type BiBadgeKey,
  type BiFeatureIconKey,
} from "@/components/case-study/diagram-config/bi-commerce.config"

type CardFeature = {
  label: string
  icon: ReactNode
}

export type BiPillFeature = {
  label: string
  onClick?: (event: MouseEvent) => void
}

export type BiSystemCardModel = {
  eyebrowLabel: string
  eyebrowLeft: ReactNode
  title: string
  body: string
  features: CardFeature[]
}

export type BiHeroCardModel = {
  eyebrowLabel: string
  eyebrowLeft: ReactNode
  title: string
  body: string
}

function renderBadge(badge: BiBadgeKey) {
  if (badge === "sap") return <SapBadge />
  if (badge === "aem") return <AemBadge />
  return <MulesoftBadge />
}

function renderFeatureIcon(icon: BiFeatureIconKey) {
  if (icon === "products") return <ProductsIcon />
  if (icon === "inventory") return <InventoryIcon />
  if (icon === "content") return <ContentIcon />
  if (icon === "campaign") return <CampaignIcon />
  return <DatabaseIcon />
}

function toCardFeatures(features: { label: string; icon: BiFeatureIconKey }[]): CardFeature[] {
  return features.map((feature) => ({
    label: feature.label,
    icon: renderFeatureIcon(feature.icon),
  }))
}

export const BI_SAP_SYSTEM_CARD: BiSystemCardModel = {
  eyebrowLabel: BI_SAP_CARD.eyebrowLabel,
  eyebrowLeft: renderBadge(BI_SAP_CARD.eyebrow),
  title: BI_SAP_CARD.title,
  body: BI_SAP_CARD.body,
  features: toCardFeatures(BI_SAP_CARD.features),
}

export const BI_AEM_SYSTEM_CARD: BiSystemCardModel = {
  eyebrowLabel: BI_AEM_CARD.eyebrowLabel,
  eyebrowLeft: renderBadge(BI_AEM_CARD.eyebrow),
  title: BI_AEM_CARD.title,
  body: BI_AEM_CARD.body,
  features: toCardFeatures(BI_AEM_CARD.features),
}

export const BI_MULESOFT_HERO_CARD: BiHeroCardModel = {
  eyebrowLabel: BI_MULESOFT_CARD.eyebrowLabel,
  eyebrowLeft: renderBadge(BI_MULESOFT_CARD.eyebrow),
  title: BI_MULESOFT_CARD.title,
  body: BI_MULESOFT_CARD.body,
}

export function MarchingAntsBorder({
  children,
  shouldReduceMotion,
}: {
  children: ReactNode
  shouldReduceMotion: boolean
}) {
  return (
    <div className="relative group">
      {children}
      <svg
        className="pointer-events-none"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}
      >
        <rect
          x="-6"
          y="-6"
          width="calc(100% + 12px)"
          height="calc(100% + 12px)"
          rx="16"
          fill="none"
          stroke="#ED2224"
          strokeWidth="1.5"
          strokeDasharray="7 5"
          opacity="0.85"
          className="group-hover:stroke-[#447acb]"
          style={{ transition: "stroke 300ms" }}
        >
          {shouldReduceMotion ? null : (
            <animate attributeName="stroke-dashoffset" from="0" to="-1510" dur="180s" repeatCount="indefinite" />
          )}
        </rect>
      </svg>
    </div>
  )
}

function BaseCard({
  children,
  className,
  dark = false,
  onClick,
}: {
  children: ReactNode
  className?: string
  dark?: boolean
  onClick?: () => void
}) {
  return (
    <div
      className={[
        className ?? "",
        "rounded-[10px] p-5 md:p-6 outline outline-offset-[-1px] overflow-hidden transition-[outline,box-shadow] duration-150",
        dark
          ? [
              "outline-1 bg-[#202124] outline-[#202124] text-white",
              onClick
                ? "cursor-pointer hover:outline-2 hover:outline-blue-500 hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)]"
                : "",
            ].join(" ")
          : [
              "outline-1 bg-white outline-[#D9DDE3] text-[#222222]",
              onClick ? "cursor-pointer hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]" : "",
            ].join(" "),
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

function EyebrowRow({
  left,
  right,
}: {
  left: ReactNode
  right?: ReactNode
}) {
  return <div className="flex items-center justify-between gap-4">{left}{right}</div>
}

function EyebrowLabel({
  icon,
  label,
  dark = false,
}: {
  icon: ReactNode
  label: string
  dark?: boolean
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 overflow-hidden">
      {icon}
      <div className={["type-p5 tracking-[0.06em] uppercase", dark ? "text-white/70" : "text-[#7B7B7B]"].join(" ")}>
        {label}
      </div>
    </div>
  )
}

function Title({
  children,
  dark = false,
}: {
  children: ReactNode
  dark?: boolean
}) {
  return (
    <h3 className={["type-h6", dark ? "text-white" : "text-[#222222]"].join(" ")}>
      {children}
    </h3>
  )
}

function Body({
  children,
  dark = false,
}: {
  children: ReactNode
  dark?: boolean
}) {
  return (
    <p className={["type-p4", dark ? "text-white" : "text-[#222222]"].join(" ")}>
      {children}
    </p>
  )
}

function FeatureRow({ features }: { features: CardFeature[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 self-stretch">
      {features.map((feature) => (
        <div key={feature.label} className="flex flex-col items-center justify-center gap-3">
          {feature.icon}
          <div className="type-ui-sm text-center text-[#222222]">{feature.label}</div>
        </div>
      ))}
    </div>
  )
}

function PillRow({
  pills,
  hoverLight = false,
}: {
  pills: BiPillFeature[]
  hoverLight?: boolean
}) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 self-stretch">
      {pills.map((pill) => (
        <BlueTag key={pill.label} label={pill.label} fullWidth hoverLight={hoverLight} onClick={pill.onClick} />
      ))}
    </div>
  )
}

export function BlueTag({
  label,
  fullWidth = false,
  hoverLight = false,
  onClick,
}: {
  label: string
  fullWidth?: boolean
  hoverLight?: boolean
  onClick?: (event: MouseEvent) => void
}) {
  return (
    <div
      className={[
        fullWidth ? "w-full" : "w-28",
        "h-8 rounded-md bg-[#4A7FDB] outline outline-1 outline-transparent transition-[background-color,outline-color,box-shadow] duration-150 group/tag",
        onClick
          ? hoverLight
            ? "cursor-pointer hover:bg-[#fefefe] hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
            : "cursor-pointer hover:bg-[#222222] hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
          : "",
      ].join(" ")}
      onClick={onClick}
    >
      <div
        className={[
          "type-ui-sm flex h-full items-center justify-center px-3 text-center transition-colors duration-150",
          onClick && hoverLight ? "text-[#F0F7FF] group-hover/tag:text-[#222222]" : "text-[#F0F7FF]",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  )
}

function TokenPill({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: (event: MouseEvent) => void
}) {
  return (
    <div
      className={[
        "rounded-[999px] bg-[#EEF4FE] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-[#E5E7EB] shrink-0 transition-[background-color,color] duration-150",
        onClick ? "cursor-pointer hover:bg-[#222222] group/pill" : "",
      ].join(" ")}
      onClick={onClick}
    >
      <div
        className={[
          "type-ui-sm text-center text-[#477ACB] whitespace-nowrap transition-colors duration-150",
          onClick ? "group-hover/pill:text-[#fefefe]" : "",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  )
}

export function SystemCard({
  className,
  eyebrowLabel,
  eyebrowLeft,
  title,
  body,
  features,
  onClick,
  compact = false,
}: {
  className?: string
  eyebrowLabel: string
  eyebrowLeft: ReactNode
  title: string
  body: string
  features: CardFeature[]
  onClick?: () => void
  compact?: boolean
}) {
  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow left={<EyebrowLabel icon={eyebrowLeft} label={eyebrowLabel} />} />
        <Title>{title}</Title>
        {compact ? (
          <CompactCardLayout
            icons={features.map((feature) => (
              <DeviceFeature key={feature.label} label={feature.label} icon={feature.icon} />
            ))}
            body={body}
          />
        ) : (
          <>
            <Body>{body}</Body>
            <FeatureRow features={features} />
          </>
        )}
      </div>
    </BaseCard>
  )
}

export function BrowserCard({
  className,
  compact: _compact = false,
  onClick,
  onSdkClick,
}: {
  className?: string
  compact?: boolean
  onClick?: () => void
  onSdkClick?: () => void
}) {
  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow
          left={<EyebrowLabel icon={<BlueDot />} label="CONTENT & ANALYTICS" />}
          right={
            <TokenPill onClick={onSdkClick ? (event) => { event.stopPropagation(); onSdkClick() } : undefined}>
              Adobe Web SDK
            </TokenPill>
          }
        />

        <Title>Shopper Browser</Title>

        <CompactCardLayout
          icons={
            <>
              <DeviceFeature label="Web" />
              <DeviceFeature
                label="Tablet"
                icon={<img src="/tool-icons/svg/icon-tablet.svg" alt="Tablet" className="h-6 w-6" />}
              />
              <DeviceFeature
                label="Mobile"
                icon={<img src="/tool-icons/svg/icon-mobile.svg" alt="Mobile" className="h-6 w-6" />}
              />
            </>
          }
          body="Customer FE experience across platforms"
        />
      </div>
    </BaseCard>
  )
}

function DeviceFeature({
  label,
  icon,
}: {
  label: string
  icon?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      {icon ?? <LaptopIcon />}
      <div className="type-ui-sm text-center text-[#222222]">{label}</div>
    </div>
  )
}

function CompactCardLayout({
  icons,
  body,
}: {
  icons: ReactNode
  body: string
}) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="grid grid-cols-3 gap-3 shrink-0">{icons}</div>
      <div className="type-p4 text-[#222222]">{body}</div>
    </div>
  )
}

export function HeroCard({
  className,
  eyebrowLabel,
  eyebrowLeft,
  title,
  body,
  pills,
  onClick,
}: {
  className?: string
  eyebrowLabel: string
  eyebrowLeft: ReactNode
  title: string
  body: string
  pills: BiPillFeature[]
  onClick?: () => void
}) {
  return (
    <div className="relative bi-pulse-glow">
      <BaseCard className={className} dark onClick={onClick}>
        <div className="flex flex-col gap-4">
          <EyebrowRow left={<EyebrowLabel icon={eyebrowLeft} label={eyebrowLabel} dark />} />
          <Title dark>{title}</Title>
          <Body dark>{body}</Body>
          <PillRow pills={pills} hoverLight />
        </div>
      </BaseCard>
    </div>
  )
}

export function CommerceCard({
  className,
  onClick,
  onGraphqlClick,
  onPillsClick,
  compact = false,
}: {
  className?: string
  onClick?: () => void
  onGraphqlClick?: () => void
  onPillsClick?: () => void
  compact?: boolean
}) {
  const pillHandler = onPillsClick
    ? (event: MouseEvent) => {
        event.stopPropagation()
        onPillsClick()
      }
    : undefined

  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow
          left={<EyebrowLabel icon={<AdobeBadge />} label="COMMERCE LAYER" />}
          right={
            <TokenPill onClick={onGraphqlClick ? (event) => { event.stopPropagation(); onGraphqlClick() } : undefined}>
              Adobe GraphQL
            </TokenPill>
          }
        />
        <Title>Adobe Commerce Cloud</Title>
        {compact ? (
          <CompactCardLayout
            icons={
              <>
                <DeviceFeature label="Catalog" icon={<ProductsIcon />} />
                <DeviceFeature label="Cart" icon={<InventoryIcon />} />
                <DeviceFeature label="Checkout" icon={<DatabaseIcon />} />
              </>
            }
            body="Publishes content and experience assets that shape browsing and merchandising."
          />
        ) : (
          <>
            <Body>Publishes content and experience assets that shape browsing and merchandising.</Body>
            <PillRow
              pills={[
                { label: "CATALOG", onClick: pillHandler },
                { label: "CART", onClick: pillHandler },
                { label: "CHECKOUT", onClick: pillHandler },
              ]}
            />
          </>
        )}
      </div>
    </BaseCard>
  )
}

export function DataLakeCard({
  className,
  onClick,
  onConnectorClick,
}: {
  className?: string
  onClick?: () => void
  onConnectorClick?: () => void
}) {
  return (
    <BaseCard className={className} dark onClick={onClick}>
      <EyebrowRow
        left={<span className="type-p2 font-medium text-white">Data Lake</span>}
        right={
          <TokenPill onClick={onConnectorClick ? (event) => { event.stopPropagation(); onConnectorClick() } : undefined}>
            AEM Connector
          </TokenPill>
        }
      />
    </BaseCard>
  )
}

function BlueDot() {
  return <div className="h-3 w-3 rounded-full bg-[#477ACB]" />
}

function Badge({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return <img src={src} alt={alt} className="h-5 w-5 rounded-[2px]" />
}

function SapBadge() {
  return <Badge src="/tool-icons/svg/sap-logo.svg" alt="SAP" />
}

function MulesoftBadge() {
  return <Badge src="/tool-icons/svg/mulesoft-logo.svg" alt="Mulesoft" />
}

function AemBadge() {
  return <Badge src="/tool-icons/svg/adobe-experience-manager-logo.svg" alt="Adobe Experience Manager" />
}

function AdobeBadge() {
  return <Badge src="/tool-icons/svg/adobe-logo.svg" alt="Adobe" />
}
