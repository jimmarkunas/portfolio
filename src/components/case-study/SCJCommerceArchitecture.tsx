"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowLeftRight,
  BarChart3,
  BadgePercent,
  Code2,
  CreditCard,
  Globe,
  LayoutGrid,
  MessageSquareMore,
  Package,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useModal } from "./useModal";
import { SCJ_TOOLTIPS } from "./scjDiagramData";
import ParticleCanvas from "./ParticleCanvas";

type TopNodeId = "personalization" | "merchandising" | "ugc" | "promotions" | "frontend";
type CommerceNodeId = "omnichannel" | "subscriptions" | "catalog" | "checkout" | "orders" | "customer";
type SystemNodeId = "erp" | "oms" | "pim" | "esp" | "cms" | "analytics";
type MeasuredNodeId = CommerceNodeId | SystemNodeId | "api";

type DiagramNode<T extends string> = {
  id: T;
  label: string;
  icon?: ReactNode;
};

type BrandSystemNode = DiagramNode<SystemNodeId> & {
  brand: SystemNodeId;
};

type Box = { left: number; top: number; width: number; height: number };

type ComponentProps = {
  className?: string;
};


const TOP_NODES: DiagramNode<TopNodeId>[] = [
  { id: "personalization", label: "Personalization",             icon: <BrandIcon src="/tool-icons/svg/icon-user.svg"    alt="Personalization" /> },
  { id: "merchandising",   label: "Merchandising",               icon: <BrandIcon src="/tool-icons/svg/icon-slider.svg"  alt="Merchandising" /> },
  { id: "ugc",             label: "User-Generated\nContent",     icon: <BrandIcon src="/tool-icons/svg/icon-ugc.svg"     alt="UGC" /> },
  { id: "promotions",      label: "Promotions",                  icon: <BrandIcon src="/tool-icons/svg/icon-coupon.svg"  alt="Promotions" /> },
  { id: "frontend",        label: "Front-end Coding &\nScoping", icon: <BrandIcon src="/tool-icons/svg/icon-code.svg"    alt="Front-end Coding" /> },
];

const COMMERCE_NODES: DiagramNode<CommerceNodeId>[] = [
  { id: "omnichannel",   label: "Omni-Channel",               icon: <BrandIcon src="/tool-icons/svg/icon-web.svg"          alt="Omni-Channel" /> },
  { id: "subscriptions", label: "Subscriptions",              icon: <BrandIcon src="/tool-icons/svg/ordergroove-logo.svg"   alt="Ordergroove" /> },
  { id: "catalog",       label: "Product Catalog &\nContent", icon: <BrandIcon src="/tool-icons/svg/icon-shipping.svg"      alt="Product Catalog" /> },
  { id: "checkout",      label: "Cart & Checkout",            icon: <BrandIcon src="/tool-icons/svg/icon-credit-card.svg"   alt="Cart & Checkout" /> },
  { id: "orders",        label: "Orders",                     icon: <BrandIcon src="/tool-icons/svg/icon-shopping-bag.svg"  alt="Orders" /> },
  { id: "customer",      label: "Customer Data",              icon: <BrandIcon src="/tool-icons/svg/iscon-user-02.svg"      alt="Customer Data" /> },
];

const SYSTEM_NODES: BrandSystemNode[] = [
  { id: "erp",       label: "ERP",       brand: "erp" },
  { id: "oms",       label: "OMS",       brand: "oms" },
  { id: "pim",       label: "PIM",       brand: "pim" },
  { id: "esp",       label: "ESP",       brand: "esp" },
  { id: "cms",       label: "CMS",       brand: "cms" },
  { id: "analytics", label: "Analytics", brand: "analytics" },
];

const BRAND_LOGOS: Record<SystemNodeId, string> = {
  erp:       "/tool-icons/svg/sap-logo.svg",
  oms:       "/tool-icons/svg/merkle-logo.svg",
  pim:       "/tool-icons/svg/salsify-logo.svg",
  esp:       "/tool-icons/svg/klaviyo-logo.svg",
  cms:       "/tool-icons/svg/shogun-logo.svg",
  analytics: "/tool-icons/svg/icon-pie-chart.svg",
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
};
const cardTransition = { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } as const;
const staggerParent = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewport = { once: true, amount: 0.1 } as const;

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function TextLines({ label }: { label: string }) {
  return (
    <>
      {label.split("\n").map((line) => (
        <span key={line} className="block">{line}</span>
      ))}
    </>
  );
}

function useMeasuredNodes(ids: readonly MeasuredNodeId[]) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Partial<Record<MeasuredNodeId, HTMLDivElement | null>>>({});
  const [boxes, setBoxes] = useState<Partial<Record<MeasuredNodeId, Box>>>({});

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const next: Partial<Record<MeasuredNodeId, Box>> = {};
      ids.forEach((id) => {
        const node = nodeRefs.current[id];
        if (!node) return;
        const rect = node.getBoundingClientRect();
        next[id] = {
          left: rect.left - wrapperRect.left,
          top:  rect.top  - wrapperRect.top,
          width:  rect.width,
          height: rect.height,
        };
      });
      setBoxes(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    ids.forEach((id) => {
      const node = nodeRefs.current[id];
      if (node) observer.observe(node);
    });
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  const setNodeRef = (id: MeasuredNodeId) => (element: HTMLDivElement | null) => {
    nodeRefs.current[id] = element;
  };

  return { wrapperRef, boxes, setNodeRef };
}

// ─── Primitives ──────────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="type-ui-sm text-center text-[#222222]">
      {children}
    </div>
  );
}

function UserExperienceBadge() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#447acb] bg-white shadow-[0_1px_2px_rgba(34,34,34,0.04)]">
      <ShoppingBag className="h-4 w-4 text-[#447acb]" />
    </div>
  );
}

function HeaderIcon({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={cn(
      "inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white",
      dark ? "border-[#222222] text-[#222222]" : "border-[#d9e6fb] text-[#447acb]"
    )}>
      {children}
    </span>
  );
}

function LucideIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(34,34,34,0.08)] bg-[#fefefe] text-[#222222]">
      {children}
    </span>
  );
}

function BrandIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px]">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

function BrandMark({ brand }: { brand: SystemNodeId }) {
  const src = BRAND_LOGOS[brand];
  if (src) {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[2px]">
        <img src={src} alt={brand} className="h-full w-full object-contain" />
      </div>
    );
  }
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-[rgba(34,34,34,0.08)] bg-white text-[#222222]">
      <BarChart3 className="h-4 w-4" />
    </span>
  );
}

// ─── Shared card ─────────────────────────────────────────────────────────────

const NODE_CARD_BASE =
  "flex h-32 flex-col items-center justify-center gap-3 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#e5e7eb] bg-white px-4 py-3 text-center shadow-[0_1px_2px_rgba(34,34,34,0.02)] transition-[outline,box-shadow] duration-150";

function NodeCard({
  label,
  icon,
  nodeRef,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  nodeRef?: (el: HTMLDivElement | null) => void;
  onClick?: () => void;
}) {
  return (
    <div ref={nodeRef} onClick={onClick} className={cn(NODE_CARD_BASE, onClick && "cursor-pointer hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]")}>
      {icon}
      <div className="type-p4 max-w-[150px] text-[#222222]">
        <TextLines label={label} />
      </div>
    </div>
  );
}

// ─── Layout components ───────────────────────────────────────────────────────

function CombinedLayersShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#7b7b7b] bg-white shadow-[0_1px_2px_rgba(34,34,34,0.02)]">
      {children}
    </div>
  );
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
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
  showDivider?: boolean;
  headerBg?: string;
  onHeaderClick?: () => void;
}) {
  return (
    <div className={cn("bg-white", showDivider && "border-b border-[#e5e7eb]")}>
      <div
        onClick={onHeaderClick}
        className={cn(
          "flex h-24 items-center justify-center gap-3 border-b border-[#e5e7eb] outline outline-1 outline-offset-[-1px] outline-transparent px-5 py-3 text-center",
          headerBg,
          onHeaderClick && "cursor-pointer transition-[outline,box-shadow] duration-150 hover:outline-blue-500 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
        )}
      >
        <HeaderIcon dark>{icon}</HeaderIcon>
        <div className="flex flex-col items-start gap-1 text-left">
          <div className="type-h4 text-[#222222]">{title}</div>
          {subtitle ? <div className="type-p5 text-[#222222]">{subtitle}</div> : null}
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function ApiLayer({
  nodeRef,
  onClick,
}: {
  nodeRef?: (el: HTMLDivElement | null) => void;
  onClick?: () => void;
}) {
  return (
    <div
      ref={nodeRef}
      onClick={onClick}
      className={cn(
        "flex h-20 items-center justify-center gap-3 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-[#202124] bg-neutral-800 px-5 py-3 text-white shadow-[0_1px_2px_rgba(34,34,34,0.06)] transition-[outline,box-shadow] duration-150",
        onClick && "cursor-pointer hover:outline-2 hover:outline-blue-500 hover:shadow-[0_0_0_2px_rgba(68,122,203,0.15),0_8px_32px_rgba(68,122,203,0.35)]"
      )}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/90 text-white">
        <ArrowLeftRight className="h-4 w-4" />
      </span>
      <div className="type-h4 text-center">2-Way Rest API Layer</div>
    </div>
  );
}

/** Shared LayerSection tree — used by both desktop and mobile with different grid classes */
function StorefrontAndCommerceLayers({
  toggle,
  topGridClass,
  commerceGridClass,
  setNodeRef,
}: {
  toggle: (key: string) => void;
  topGridClass: string;
  commerceGridClass: string;
  setNodeRef?: (id: MeasuredNodeId) => (el: HTMLDivElement | null) => void;
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
          {TOP_NODES.map((node) => (
            <NodeCard
              key={node.id}
              label={node.label}
              icon={node.icon}
              onClick={() => toggle(node.id)}
            />
          ))}
        </div>
      </LayerSection>

      <LayerSection
        icon={<img src="/tool-icons/svg/bc-logo-icon.svg" alt="BigCommerce" className="h-8 w-8" />}
        title="Commerce System Layer"
        showDivider={false}
        headerBg="bg-transparent"
        onHeaderClick={() => toggle("commerce-layer")}
      >
        <div className={commerceGridClass}>
          {COMMERCE_NODES.map((node) => (
            <NodeCard
              key={node.id}
              label={node.label}
              icon={node.icon}
              nodeRef={setNodeRef?.(node.id)}
              onClick={() => toggle(node.id)}
            />
          ))}
        </div>
      </LayerSection>
    </CombinedLayersShell>
  );
}

// ─── Connectors ──────────────────────────────────────────────────────────────

// ─── Diagrams ─────────────────────────────────────────────────────────────────

function DesktopDiagram({ toggle }: { toggle: (key: string) => void }) {
  const measuredIds = useMemo(
    () => [
      ...COMMERCE_NODES.map((n) => n.id),
      ...SYSTEM_NODES.map((n) => n.id),
      "api",
    ] as MeasuredNodeId[],
    []
  );

  const { wrapperRef, boxes, setNodeRef } = useMeasuredNodes(measuredIds);

  const particlePaths = useMemo(() => {
    const api = boxes.api;
    if (!api) return [];
    const paths: { x: number; y: number }[][] = [];
    COMMERCE_NODES.forEach((node, index) => {
      const topBox    = boxes[node.id];
      const bottomBox = boxes[SYSTEM_NODES[index].id];
      if (!topBox || !bottomBox) return;
      const topX    = topBox.left    + topBox.width    / 2;
      const topY    = topBox.top     + topBox.height;
      const bottomX = bottomBox.left + bottomBox.width / 2;
      const bottomY = bottomBox.top;
      paths.push([{ x: topX, y: topY },               { x: topX,    y: api.top            }]);
      paths.push([{ x: bottomX, y: api.top + api.height }, { x: bottomX, y: bottomY }]);
    });
    return paths;
  }, [boxes]);

  return (
    <div className="hidden xl:block">
      <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={staggerParent}>
      <div ref={wrapperRef} className="relative">
        {particlePaths.length > 0 && (
          <ParticleCanvas paths={particlePaths} containerRef={wrapperRef as React.RefObject<HTMLElement>} />
        )}

        <div className="relative z-10 flex flex-col items-center gap-5">
          <motion.div className="flex flex-col items-center gap-4" variants={cardVariants} transition={cardTransition}>
            <SectionEyebrow>User Experience</SectionEyebrow>
            <UserExperienceBadge />
          </motion.div>

          <motion.div className="w-full" variants={cardVariants} transition={cardTransition}>
            <StorefrontAndCommerceLayers
              toggle={toggle}
              topGridClass="grid grid-cols-5 gap-5"
              commerceGridClass="grid grid-cols-6 gap-5"
              setNodeRef={setNodeRef}
            />
          </motion.div>

          <motion.div className="relative w-full px-5 pt-36" variants={cardVariants} transition={cardTransition}>
            <div className="absolute inset-x-0 top-6">
              <ApiLayer nodeRef={setNodeRef("api")} onClick={() => toggle("api")} />
            </div>
            <div className="grid grid-cols-6 gap-5">
              {SYSTEM_NODES.map((node) => (
                <NodeCard
                  key={node.id}
                  label={node.label}
                  icon={<BrandMark brand={node.brand} />}
                  nodeRef={setNodeRef(node.id)}
                  onClick={() => toggle(node.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

function MobileDiagram({ toggle }: { toggle: (key: string) => void }) {
  return (
    <motion.div
      className="space-y-4 xl:hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerParent}
    >
      <motion.div className="flex flex-col items-center gap-3 text-center" variants={cardVariants} transition={cardTransition}>
        <SectionEyebrow>User Experience</SectionEyebrow>
        <UserExperienceBadge />
      </motion.div>

      <motion.div variants={cardVariants} transition={cardTransition}>
        <StorefrontAndCommerceLayers
          toggle={toggle}
          topGridClass="grid gap-2.5 sm:grid-cols-2"
          commerceGridClass="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
        />
      </motion.div>

      <motion.div variants={cardVariants} transition={cardTransition}>
        <ApiLayer onClick={() => toggle("api")} />
      </motion.div>

      <motion.div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3" variants={cardVariants} transition={cardTransition}>
        {SYSTEM_NODES.map((node) => (
          <NodeCard
            key={node.id}
            label={node.label}
            icon={<BrandMark brand={node.brand} />}
            onClick={() => toggle(node.id)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function SCJCommerceArchitecture({ className }: ComponentProps) {
  const { activeKey, toggle, close } = useModal();
  const tip = activeKey ? (SCJ_TOOLTIPS[activeKey] ?? null) : null;

  return (
    <section
      className={cn("w-full bg-transparent text-[#222222]", className)}
    >
      <Modal tip={tip} onClose={close} />
      <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-6 md:py-6 xl:px-8">
        <DesktopDiagram toggle={toggle} />
        <MobileDiagram toggle={toggle} />
      </div>
    </section>
  );
}
