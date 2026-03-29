"use client";
import { useRef, useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useModal } from "./useModal";
import { TOOLTIPS } from "./biCommerceDiagramData";
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
        <SystemCard
          className="w-full"
          compact
          eyebrowLabel="SOURCE OF TRUTH"
          eyebrowLeft={<SapBadge />}
          title="SAP"
          body="Owns commercial truth across products, pricing, inventory, and order data."
          features={[
            { label: "Products", icon: <ProductsIcon /> },
            { label: "Inventory", icon: <InventoryIcon /> },
            { label: "Orders", icon: <DatabaseIcon /> },
          ]}
          onClick={() => toggle("sap")}
        />
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
          eyebrowLabel="INTEGRATION SPINE"
          eyebrowLeft={<MulesoftBadge />}
          title="Mulesoft API Layer"
          body="Publishes content and experience assets that shape browsing and merchandising."
          pills={[{ label: "IDP", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("idp"); } }, { label: "Apps", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("apps"); } }, { label: "API/HOOKS", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("api-hooks"); } }]}
          onClick={() => toggle("mulesoft")}
        />
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <div className="relative group">
          <CommerceCard className="w-full" compact onClick={() => toggle("commerce-cloud")} onGraphqlClick={() => toggle("adobe-graphql")} onPillsClick={() => toggle("commerce-services")} />
          <svg className="pointer-events-none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
            <rect x="-6" y="-6" width="calc(100% + 12px)" height="calc(100% + 12px)" rx="16" fill="none" stroke="#ED2224" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.85" className="group-hover:stroke-[#447acb]" style={{ transition: "stroke 300ms" }}>
              <animate attributeName="stroke-dashoffset" from="0" to="-1510" dur="180s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
      </MobileReveal>

      <MobileConnector />

      <MobileReveal>
        <SystemCard
          className="w-full"
          compact
          eyebrowLabel="CONTENT & ANALYTICS"
          eyebrowLeft={<AemBadge />}
          title="Adobe Experience Manager"
          body="Publishes content and experience assets that shape browsing and merchandising."
          features={[
            { label: "Content", icon: <ContentIcon /> },
            { label: "Campaigns", icon: <CampaignIcon /> },
            { label: "Analytics", icon: <DatabaseIcon /> },
          ]}
          onClick={() => toggle("aem")}
        />
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
      <ParticleCanvas paths={[CC_SAP_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="237,34,36" />
      <ParticleCanvas paths={[SAP_CC_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[DATALAKE_CC_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[CC_DATALAKE_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="237,34,36" />
      <ParticleCanvas paths={[BROWSER_AEM_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="68,122,203" />
      <ParticleCanvas paths={[AEM_BROWSER_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="68,122,203" />
      <ParticleCanvas paths={[CC_MULESOFT_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="237,34,36" />
      <ParticleCanvas paths={[MULESOFT_CC_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[AEM_DATALAKE_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="68,122,203" />
      <ParticleCanvas paths={[DATALAKE_AEM_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[SAP_MULESOFT_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[MULESOFT_SAP_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />
      <ParticleCanvas paths={[MULESOFT_BROWSER_PATH]} containerRef={canvasContainerRef as React.RefObject<HTMLElement>} color="34,34,34" />

      <motion.div className="absolute left-[501px] top-[0px] z-10" variants={cardVariants} transition={cardTransition}>
        <BrowserCard className="w-[475px]" onClick={() => toggle("shopper-browser")} onSdkClick={() => toggle("adobe-web-sdk")} />
      </motion.div>

      <motion.div className="absolute left-[1px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <SystemCard
          className="w-80"
          eyebrowLabel="SOURCE OF TRUTH"
          eyebrowLeft={<SapBadge />}
          title="SAP"
          body="Owns commercial truth across products, pricing, inventory, and order data."
          features={[
            { label: "Products", icon: <ProductsIcon /> },
            { label: "Inventory", icon: <InventoryIcon /> },
            { label: "Orders", icon: <DatabaseIcon /> },
          ]}
          onClick={() => toggle("sap")}
        />
      </motion.div>

      <motion.div className="absolute left-[483px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <HeroCard
          className="w-[475px]"
          eyebrowLabel="INTEGRATION SPINE"
          eyebrowLeft={<MulesoftBadge />}
          title="Mulesoft API Layer"
          body="Publishes content and experience assets that shape browsing and merchandising."
          pills={[{ label: "IDP", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("idp"); } }, { label: "Apps", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("apps"); } }, { label: "API/HOOKS", onClick: (e: React.MouseEvent) => { e.stopPropagation(); toggle("api-hooks"); } }]}
          onClick={() => toggle("mulesoft")}
        />
      </motion.div>

      <motion.div className="absolute left-[1045px] top-[279px] z-10" variants={cardVariants} transition={cardTransition}>
        <SystemCard
          className="w-[390px]"
          eyebrowLabel="CONTENT & ANALYTICS"
          eyebrowLeft={<AemBadge />}
          title="Adobe Experience Manager"
          body="Publishes content and experience assets that shape browsing and merchandising."
          features={[
            { label: "Content", icon: <ContentIcon /> },
            { label: "Campaigns", icon: <CampaignIcon /> },
            { label: "Analytics", icon: <DatabaseIcon /> },
          ]}
          onClick={() => toggle("aem")}
        />
      </motion.div>

      <motion.div className="absolute left-[483px] top-[606px] z-10" variants={cardVariants} transition={cardTransition}>
        <div className="relative group">
          <CommerceCard className="w-[475px]" onClick={() => toggle("commerce-cloud")} onGraphqlClick={() => toggle("adobe-graphql")} onPillsClick={() => toggle("commerce-services")} />
          <svg className="pointer-events-none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
            <rect x="-6" y="-6" width="calc(100% + 12px)" height="calc(100% + 12px)" rx="16" fill="none" stroke="#ED2224" strokeWidth="1.5" strokeDasharray="7 5" opacity="0.85" className="group-hover:stroke-[#447acb]" style={{ transition: "stroke 300ms" }}>
              <animate attributeName="stroke-dashoffset" from="0" to="-1510" dur="180s" repeatCount="indefinite" />
            </rect>
          </svg>
        </div>
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
              onClick ? "hover:outline-2 hover:outline-blue-500 hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)]" : "",
            ].join(" ")
          : [
              "outline-1 bg-white outline-[#D9DDE3] text-[#222222]",
              onClick ? "hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]" : "",
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
          <div className="flex flex-row items-center gap-4">
            <div className="grid grid-cols-3 gap-3 shrink-0">
              {features.map(f => <DeviceFeature key={f.label} label={f.label} icon={f.icon} />)}
            </div>
            <div className="type-p4 text-[#222222]">{body}</div>
          </div>
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

        <div className="flex flex-row items-center gap-4">
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <DeviceFeature label="Web" />
            <DeviceFeature label="Tablet" icon={<img src="/tool-icons/svg/icon-tablet.svg" alt="Tablet" className="h-6 w-6" />} />
            <DeviceFeature label="Mobile" icon={<img src="/tool-icons/svg/icon-mobile.svg" alt="Mobile" className="h-6 w-6" />} />
          </div>
          <div className="type-p4 text-[#222222]">Customer FE experience across platforms</div>
        </div>
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

function PulseGlow() {
  return (
    <style>{`
      @keyframes bi-pulse-glow {
        0%, 100% { box-shadow: 0 0 60px 16px rgba(68,122,203,0.45), 0 0 120px 40px rgba(68,122,203,0.20); }
        50%       { box-shadow: 0 0 100px 30px rgba(68,122,203,0.80), 0 0 180px 70px rgba(68,122,203,0.38); }
      }
      .bi-pulse-glow { border-radius: 10px; }
      @media (min-width: 768px) {
        .bi-pulse-glow { animation: bi-pulse-glow 6s ease-in-out infinite; }
      }
    `}</style>
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
      <PulseGlow />
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
          <div className="flex flex-row items-center gap-4">
            <div className="grid grid-cols-3 gap-3 shrink-0">
              <DeviceFeature label="Catalog" icon={<ProductsIcon />} />
              <DeviceFeature label="Cart" icon={<InventoryIcon />} />
              <DeviceFeature label="Checkout" icon={<DatabaseIcon />} />
            </div>
            <div className="type-p4 text-[#222222]">Publishes content and experience assets that shape browsing and merchandising.</div>
          </div>
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

function SapBadge() {
  return <img src="/tool-icons/svg/sap-logo.svg" alt="SAP" className="h-5 w-5 rounded-[2px]" />;
}

function MulesoftBadge() {
  return <img src="/tool-icons/svg/mulesoft-logo.svg" alt="Mulesoft" className="h-5 w-5 rounded-[2px]" />;
}

function AemBadge() {
  return <img src="/tool-icons/svg/adobe-experience-manager-logo.svg" alt="Adobe Experience Manager" className="h-5 w-5 rounded-[2px]" />;
}

function AdobeBadge() {
  return <img src="/tool-icons/svg/adobe-logo.svg" alt="Adobe" className="h-5 w-5 rounded-[2px]" />;
}

function ProductsIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.993C0.0018 0.7304 0.1069 0.479 0.2925 0.2932C0.4781 0.1074 0.7294 0.0021 0.992 0H19.008C19.556 0 20 0.445 20 0.993V17.007C19.9982 17.2696 19.8931 17.521 19.7075 17.7068C19.5219 17.8926 19.2706 17.9979 19.008 18H0.992C0.7288 17.9997 0.4765 17.895 0.2905 17.7088C0.1045 17.5226 0 17.2702 0 17.007V0.993ZM4 12V14H16V12H4ZM4 4V10H10V4H4ZM12 4V6H16V4H12ZM12 8V10H16V8H12ZM6 6H8V8H6V6Z" fill="#212529"/>
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.507V12.457H19.95C19.449 17.51 15.185 21.457 10 21.457C4.477 21.457 0 16.98 0 11.457C0 6.272 3.947 2.008 9 1.507V1.507ZM11 0C16.553 0.477 20.979 4.904 21.457 10.457H11V0V0Z" fill="#212529"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.41667 13.5417C5.41667 13.8808 5.91608 14.4712 7.07417 15.0508C8.5735 15.8004 10.7001 16.25 13 16.25C15.2999 16.25 17.4265 15.8004 18.9258 15.0508C20.0839 14.4712 20.5833 13.8808 20.5833 13.5417V11.1898C18.7958 12.2948 16.0626 13 13 13C9.93742 13 7.20417 12.2937 5.41667 11.1898V13.5417ZM20.5833 16.6064C18.7958 17.7114 16.0626 18.4167 13 18.4167C9.93742 18.4167 7.20417 17.7103 5.41667 16.6064V18.9583C5.41667 19.2974 5.91608 19.8878 7.07417 20.4674C8.5735 21.2171 10.7001 21.6667 13 21.6667C15.2999 21.6667 17.4265 21.2171 18.9258 20.4674C20.0839 19.8878 20.5833 19.2974 20.5833 18.9583V16.6064ZM3.25 18.9583V8.125C3.25 5.43292 7.61583 3.25 13 3.25C18.3842 3.25 22.75 5.43292 22.75 8.125V18.9583C22.75 21.6504 18.3842 23.8333 13 23.8333C7.61583 23.8333 3.25 21.6504 3.25 18.9583ZM13 10.8333C15.2999 10.8333 17.4265 10.3837 18.9258 9.63408C20.0839 9.0545 20.5833 8.46408 20.5833 8.125C20.5833 7.78592 20.0839 7.1955 18.9258 6.61592C17.4265 5.86625 15.2999 5.41667 13 5.41667C10.7001 5.41667 8.5735 5.86625 7.07417 6.61592C5.91608 7.1955 5.41667 7.78592 5.41667 8.125C5.41667 8.46408 5.91608 9.0545 7.07417 9.63408C8.5735 10.3837 10.7001 10.8333 13 10.8333Z" fill="#212529"/>
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0V0H19.831C20.475 0 21 0.546 21 1.1904V22.8096C20.9997 23.1254 20.8775 23.4282 20.6603 23.6514C20.443 23.8746 20.1486 24 19.8415 24H1.15853C1.00532 23.9989 0.853819 23.9668 0.712681 23.9055C0.571543 23.8441 0.443531 23.7548 0.335954 23.6426C0.228377 23.5304 0.143341 23.3975 0.0857029 23.2515C0.0280647 23.1055 -0.00104744 22.9492 0.0000287851 22.7916V7.2L7 0ZM3.30169 7.2H7V3.396L3.30169 7.2ZM9.33335 2.4V8.4C9.33335 8.71826 9.21043 9.02349 8.99164 9.24853C8.77285 9.47357 8.4761 9.6 8.16668 9.6H2.33336V21.6H18.6667V2.4H9.33335Z" fill="#212529"/>
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.35 0H25.65C26.008 0 26.3514 0.140476 26.6046 0.390524C26.8578 0.640573 27 0.979711 27 1.33333V22.6667C27 23.0203 26.8578 23.3594 26.6046 23.6095C26.3514 23.8595 26.008 24 25.65 24H1.35C0.991958 24 0.64858 23.8595 0.395406 23.6095C0.142232 23.3594 0 23.0203 0 22.6667V1.33333C0 0.979711 0.142232 0.640573 0.395406 0.390524C0.64858 0.140476 0.991958 0 1.35 0V0ZM24.3 5.65067L13.5972 15.1173L2.7 5.62133V21.3333H24.3V5.65067ZM3.38985 2.66667L13.5824 11.5493L23.6277 2.66667H3.38985Z" fill="#212529"/>
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.95455 2.66667V17.3333H25.0455V2.66667H3.95455ZM1.31818 1.34267C1.31818 0.601333 1.91795 0 2.62582 0H26.3742C27.0965 0 27.6818 0.598667 27.6818 1.34267V20H1.31818V1.34267ZM0 21.3333H29V24H0V21.3333Z" fill="#222222"/>
    </svg>
  );
}
