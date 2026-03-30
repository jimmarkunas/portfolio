"use client";
import { useRef, useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useModal } from "./useModal";
import { TOOLTIPS } from "./biCommerceDiagramData";
import { ProductsIcon, InventoryIcon, DatabaseIcon, ContentIcon, CampaignIcon, LaptopIcon } from "./bi-commerce-icons";
import {
  AEM_BROWSER_PATH,
  AEM_DATALAKE_PATH,
  BROWSER_AEM_PATH,
  CC_DATALAKE_PATH,
  CC_MULESOFT_PATH,
  CC_SAP_PATH,
  CONN_H,
  CONN_W,
  DATALAKE_AEM_PATH,
  DATALAKE_CC_PATH,
  MOB_DOWN,
  MOB_UP,
  MULESOFT_BROWSER_PATH,
  MULESOFT_CC_PATH,
  MULESOFT_SAP_PATH,
  SAP_CC_PATH,
  SAP_MULESOFT_PATH,
  TOKENS,
  VH,
  VW,
} from "./bi-commerce-ecosystem.constants";

const SAP_CARD = {
  eyebrowLabel: "SOURCE OF TRUTH",
  eyebrowLeft: <SapBadge />,
  title: "SAP",
  body: "Owns commercial truth across products, pricing, inventory, and order data.",
  features: [
    { label: "Products", icon: <ProductsIcon /> },
    { label: "Inventory", icon: <InventoryIcon /> },
    { label: "Orders",   icon: <DatabaseIcon /> },
  ],
};

const AEM_CARD = {
  eyebrowLabel: "CONTENT & ANALYTICS",
  eyebrowLeft: <AemBadge />,
  title: "Adobe Experience Manager",
  body: "Publishes content and experience assets that shape browsing and merchandising.",
  features: [
    { label: "Content",   icon: <ContentIcon /> },
    { label: "Campaigns", icon: <CampaignIcon /> },
    { label: "Analytics", icon: <DatabaseIcon /> },
  ],
};

const MULESOFT_CARD = {
  eyebrowLabel: "INTEGRATION SPINE",
  eyebrowLeft: <MulesoftBadge />,
  title: "Mulesoft API Layer",
  body: "Publishes content and experience assets that shape browsing and merchandising.",
};

const MULESOFT_PILLS = [
  { label: "IDP",       key: "idp"       },
  { label: "Apps",      key: "apps"      },
  { label: "API/HOOKS", key: "api-hooks" },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;

type CardFeature = {
  label: string;
  icon: React.ReactNode;
};

type PillFeature = {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
};

export default function CommerceEcosystemDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { activeKey, toggle, close } = useModal();
  const tip = activeKey ? (TOOLTIPS[activeKey] ?? null) : null;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries =>
      setScale(Math.min(1, entries[0].contentRect.width / VW))
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="rounded-sm bg-white overflow-hidden w-full">
      <Modal tip={tip} onClose={close} />

      <div className="md:hidden p-4">
        <ResponsiveStackLayout toggle={toggle} />
      </div>

      <div className="hidden md:block" style={{ height: VH * scale, position: "relative", overflow: "hidden" }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0, width: VW, height: VH }}>
          <DesktopFixedLayout toggle={toggle} />
        </div>
      </div>
    </div>
  );
}

const mobileCard = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

function MobileConnector() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="flex justify-center py-[7px]">
      <div ref={ref} className="relative" style={{ width: CONN_W, height: CONN_H }}>
        <div className="absolute top-0 bottom-0" style={{ left: 11, width: 1.5, background: "#D9DDE3" }} />
        <div className="absolute top-0 bottom-0" style={{ left: 23, width: 1.5, background: "#D9DDE3" }} />
        <ParticleCanvas paths={[MOB_DOWN]} containerRef={ref as React.RefObject<HTMLElement>} color="237,34,36" />
        <ParticleCanvas paths={[MOB_UP]}   containerRef={ref as React.RefObject<HTMLElement>} color="34,34,34" />
      </div>
    </div>
  );
}

function MarchingAntsBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {children}
      <svg className="pointer-events-none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
        <rect x="-6" y="-6" width="calc(100% + 12px)" height="calc(100% + 12px)" rx="16" fill="none" stroke="#ED2224" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.85" className="group-hover:stroke-[#447acb]" style={{ transition: "stroke 300ms" }}>
          <animate attributeName="stroke-dashoffset" from="0" to="-1510" dur="180s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}

function MobileReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={mobileCard}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

function ResponsiveStackLayout({ toggle }: { toggle: (key: string) => void }) {
  return (
    <div className="flex flex-col">
      <MobileReveal>
        <SystemCard className="w-full" compact {...SAP_CARD} onClick={() => toggle("sap")} />
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <div className="flex flex-wrap gap-3 justify-center">
          <BlueTag label="PAYMENTS" onClick={() => toggle("payments")} />
          <BlueTag label="TAX" onClick={() => toggle("tax")} />
        </div>
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <HeroCard
          className="w-full"
          {...MULESOFT_CARD}
          pills={MULESOFT_PILLS.map(p => ({ label: p.label, onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle(p.key); } }))}
          onClick={() => toggle("mulesoft")}
        />
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <MarchingAntsBorder>
          <CommerceCard className="w-full" compact onClick={() => toggle("commerce-cloud")} onGraphqlClick={() => toggle("adobe-graphql")} onPillsClick={() => toggle("commerce-services")} />
        </MarchingAntsBorder>
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <SystemCard className="w-full" compact {...AEM_CARD} onClick={() => toggle("aem")} />
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <DataLakeCard className="w-full" onClick={() => toggle("data-lake")} onConnectorClick={() => toggle("aem-connector")} />
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <BrowserCard className="w-full" compact onClick={() => toggle("shopper-browser")} onSdkClick={() => toggle("adobe-web-sdk")} />
      </MobileReveal>
    </div>
  );
}

function DesktopFixedLayout({ toggle }: { toggle: (key: string) => void }) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={canvasContainerRef}
      className="relative h-[875px] w-[1440px] overflow-hidden bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >
      <ConnectorLayer />
      {([
        [CC_SAP_PATH,         "237,34,36" ],
        [SAP_CC_PATH,         "34,34,34"  ],
        [DATALAKE_CC_PATH,    "34,34,34"  ],
        [CC_DATALAKE_PATH,    "237,34,36" ],
        [BROWSER_AEM_PATH,    "68,122,203"],
        [AEM_BROWSER_PATH,    "68,122,203"],
        [CC_MULESOFT_PATH,    "237,34,36" ],
        [MULESOFT_CC_PATH,    "34,34,34"  ],
        [AEM_DATALAKE_PATH,   "68,122,203"],
        [DATALAKE_AEM_PATH,   "34,34,34"  ],
        [SAP_MULESOFT_PATH,   "34,34,34"  ],
        [MULESOFT_SAP_PATH,   "34,34,34"  ],
        [MULESOFT_BROWSER_PATH,"34,34,34" ],
      ] as const).map(([path, color], i) => (
        <ParticleCanvas key={i} paths={[path]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color={color} />
      ))}

      <motion.div className="absolute left-[501px] top-[0px] z-10" variants={cardVariants} transition={cardTransition}>
        <BrowserCard className="w-[475px]" onClick={() => toggle("shopper-browser")} onSdkClick={() => toggle("adobe-web-sdk")} />
      </motion.div>

      <motion.div className="absolute left-[1px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <SystemCard className="w-80" {...SAP_CARD} onClick={() => toggle("sap")} />
      </motion.div>

      <motion.div className="absolute left-[483px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <HeroCard
          className="w-[475px]"
          {...MULESOFT_CARD}
          pills={MULESOFT_PILLS.map(p => ({ label: p.label, onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle(p.key); } }))}
          onClick={() => toggle("mulesoft")}
        />
      </motion.div>

      <motion.div className="absolute left-[1045px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <SystemCard className="w-[390px]" {...AEM_CARD} onClick={() => toggle("aem")} />
      </motion.div>

      <motion.div className="absolute left-[483px] top-[606px] z-10" variants={cardVariants} transition={cardTransition}>
        <MarchingAntsBorder>
          <CommerceCard className="w-[475px]" onClick={() => toggle("commerce-cloud")} onGraphqlClick={() => toggle("adobe-graphql")} onPillsClick={() => toggle("commerce-services")} />
        </MarchingAntsBorder>
      </motion.div>

      <motion.div className="absolute left-[1115px] top-[677px] z-10" variants={cardVariants} transition={cardTransition}>
        <DataLakeCard className="w-80" onClick={() => toggle("data-lake")} onConnectorClick={() => toggle("aem-connector")} />
      </motion.div>

      <motion.div className="absolute left-[98px] top-[591px] z-10" variants={cardVariants} transition={cardTransition}>
        <BlueTag label="PAYMENTS" onClick={() => toggle("payments")} />
      </motion.div>

      <motion.div className="absolute left-[98px] top-[699px] z-10" variants={cardVariants} transition={cardTransition}>
        <BlueTag label="TAX" onClick={() => toggle("tax")} />
      </motion.div>
    </motion.div>
  );
}

function ConnectorLayer() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1440 875"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >

      <path d="M 866 39 H 1240" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 1240 39 V 279" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 866 54 H 1225" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 1225 54 V 279" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 720 0 V 279" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 710 494 V 606" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 725 494 V 606" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 319 384 H 483" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 319 399 H 483" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 958 715 H 1115" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 958 730 H 1115" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 1240 506 V 677" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 1255 506 V 677" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 154 506 V 710" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 154 710 H 483" stroke={TOKENS.line} strokeWidth="2" />
      <path d="M 139 506 V 725 H 483" stroke={TOKENS.line} strokeWidth="2" />

    </svg>
  );
}

function BaseCard({
  children,
  className,
  dark = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={[
        className ?? "",
        "rounded-[10px] p-5 md:p-6 outline outline-offset-[-1px] overflow-hidden transition-[outline,box-shadow] duration-150",
        dark
          ? [
              "outline-1 bg-[#202124] outline-[#202124] text-white",
              onClick ? "cursor-pointer hover:outline-2 hover:outline-blue-500 hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)]" : "",
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
  );
}

function EyebrowRow({
  left,
  right,
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
}) {
  return <div className="flex items-center justify-between gap-4">{left}{right}</div>;
}

function EyebrowLabel({
  icon,
  label,
  dark = false,
}: {
  icon: React.ReactNode;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 overflow-hidden">
      {icon}
      <div
        className={[
          "type-p5 tracking-[0.06em] uppercase",
          dark ? "text-white/70" : "text-[#7B7B7B]",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  );
}

function Title({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h3 className={["type-h6", dark ? "text-white" : "text-[#222222]"].join(" ")}>
      {children}
    </h3>
  );
}

function Body({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={["type-p4", dark ? "text-white" : "text-[#222222]"].join(" ")}>
      {children}
    </p>
  );
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
  );
}

function PillRow({ pills, hoverLight = false }: { pills: PillFeature[]; hoverLight?: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 self-stretch">
      {pills.map((pill) => (
        <BlueTag key={pill.label} label={pill.label} fullWidth hoverLight={hoverLight} onClick={pill.onClick} />
      ))}
    </div>
  );
}

function BlueTag({ label, fullWidth = false, hoverLight = false, onClick }: { label: string; fullWidth?: boolean; hoverLight?: boolean; onClick?: (e: React.MouseEvent) => void }) {
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
      <div className={["type-ui-sm flex h-full items-center justify-center px-3 text-center transition-colors duration-150", onClick && hoverLight ? "text-[#F0F7FF] group-hover/tag:text-[#222222]" : "text-[#F0F7FF]"].join(" ")}>
        {label}
      </div>
    </div>
  );
}

function TokenPill({ children, onClick }: { children: React.ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <div
      className={[
        "rounded-[999px] bg-[#EEF4FE] px-3 py-1.5 outline outline-1 outline-offset-[-1px] outline-[#E5E7EB] shrink-0 transition-[background-color,color] duration-150",
        onClick ? "cursor-pointer hover:bg-[#222222] group/pill" : "",
      ].join(" ")}
      onClick={onClick}
    >
      <div className={["type-ui-sm text-center text-[#477ACB] whitespace-nowrap transition-colors duration-150", onClick ? "group-hover/pill:text-[#fefefe]" : ""].join(" ")}>
        {children}
      </div>
    </div>
  );
}

function SystemCard({
  className,
  eyebrowLabel,
  eyebrowLeft,
  title,
  body,
  features,
  onClick,
  compact = false,
}: {
  className?: string;
  eyebrowLabel: string;
  eyebrowLeft: React.ReactNode;
  title: string;
  body: string;
  features: CardFeature[];
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow left={<EyebrowLabel icon={eyebrowLeft} label={eyebrowLabel} />} />
        <Title>{title}</Title>
        {compact ? (
          <CompactCardLayout
            icons={features.map(f => <DeviceFeature key={f.label} label={f.label} icon={f.icon} />)}
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
  );
}

function BrowserCard({ className, compact = false, onClick, onSdkClick }: { className?: string; compact?: boolean; onClick?: () => void; onSdkClick?: () => void }) {
  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow
          left={<EyebrowLabel icon={<BlueDot />} label="CONTENT & ANALYTICS" />}
          right={
            <TokenPill onClick={onSdkClick ? (e) => { e.stopPropagation(); onSdkClick(); } : undefined}>
              Adobe Web SDK
            </TokenPill>
          }
        />

        <Title>Shopper Browser</Title>

        <CompactCardLayout
          icons={<><DeviceFeature label="Web" /><DeviceFeature label="Tablet" icon={<img src="/tool-icons/svg/icon-tablet.svg" alt="Tablet" className="h-6 w-6" />} /><DeviceFeature label="Mobile" icon={<img src="/tool-icons/svg/icon-mobile.svg" alt="Mobile" className="h-6 w-6" />} /></>}
          body="Customer FE experience across platforms"
        />
      </div>
    </BaseCard>
  );
}

function DeviceFeature({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      {icon ?? <LaptopIcon />}
      <div className="type-ui-sm text-center text-[#222222]">{label}</div>
    </div>
  );
}

function CompactCardLayout({ icons, body }: { icons: React.ReactNode; body: string }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="grid grid-cols-3 gap-3 shrink-0">{icons}</div>
      <div className="type-p4 text-[#222222]">{body}</div>
    </div>
  );
}

function HeroCard({
  className,
  eyebrowLabel,
  eyebrowLeft,
  title,
  body,
  pills,
  onClick,
}: {
  className?: string;
  eyebrowLabel: string;
  eyebrowLeft: React.ReactNode;
  title: string;
  body: string;
  pills: PillFeature[];
  onClick?: () => void;
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
  );
}

function CommerceCard({ className, onClick, onGraphqlClick, onPillsClick, compact = false }: { className?: string; onClick?: () => void; onGraphqlClick?: () => void; onPillsClick?: () => void; compact?: boolean }) {
  const pillHandler = onPillsClick
    ? (e: React.MouseEvent) => { e.stopPropagation(); onPillsClick(); }
    : undefined;
  return (
    <BaseCard className={className} onClick={onClick}>
      <div className="flex flex-col gap-2">
        <EyebrowRow
          left={<EyebrowLabel icon={<AdobeBadge />} label="COMMERCE LAYER" />}
          right={
            <TokenPill onClick={onGraphqlClick ? (e) => { e.stopPropagation(); onGraphqlClick(); } : undefined}>
              Adobe GraphQL
            </TokenPill>
          }
        />
        <Title>Adobe Commerce Cloud</Title>
        {compact ? (
          <CompactCardLayout
            icons={<><DeviceFeature label="Catalog" icon={<ProductsIcon />} /><DeviceFeature label="Cart" icon={<InventoryIcon />} /><DeviceFeature label="Checkout" icon={<DatabaseIcon />} /></>}
            body="Publishes content and experience assets that shape browsing and merchandising."
          />
        ) : (
          <>
            <Body>Publishes content and experience assets that shape browsing and merchandising.</Body>
            <PillRow pills={[
              { label: "CATALOG", onClick: pillHandler },
              { label: "CART", onClick: pillHandler },
              { label: "CHECKOUT", onClick: pillHandler },
            ]} />
          </>
        )}
      </div>
    </BaseCard>
  );
}

function DataLakeCard({ className, onClick, onConnectorClick }: { className?: string; onClick?: () => void; onConnectorClick?: () => void }) {
  return (
    <BaseCard className={className} dark onClick={onClick}>
      <EyebrowRow
        left={<span className="type-p2 font-medium text-white">Data Lake</span>}
        right={
          <TokenPill onClick={onConnectorClick ? (e) => { e.stopPropagation(); onConnectorClick(); } : undefined}>
            AEM Connector
          </TokenPill>
        }
      />
    </BaseCard>
  );
}

function BlueDot() {
  return <div className="h-3 w-3 rounded-full bg-[#477ACB]" />;
}

function Badge({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-5 w-5 rounded-[2px]" />;
}
function SapBadge()      { return <Badge src="/tool-icons/svg/sap-logo.svg" alt="SAP" />; }
function MulesoftBadge() { return <Badge src="/tool-icons/svg/mulesoft-logo.svg" alt="Mulesoft" />; }
function AemBadge()      { return <Badge src="/tool-icons/svg/adobe-experience-manager-logo.svg" alt="Adobe Experience Manager" />; }
function AdobeBadge()    { return <Badge src="/tool-icons/svg/adobe-logo.svg" alt="Adobe" />; }

