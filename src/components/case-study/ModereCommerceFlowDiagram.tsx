"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/case-study/Modal";
import { useModal } from "@/components/case-study/useModal";
import type { Tip } from "@/components/case-study/useModal";
import {
  Users,
  ShoppingCart,
  Smartphone,
  Share2,
  Globe,
  CreditCard,
  Truck,
  Search,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const COLORS = {
  ink: "#222222",
  secondary: "#4B5154",
  muted: "#7B7B7B",
  white: "#FFFFFF",
  softWhite: "#FEFEFE",
  lightGray: "#F3F3F3",
  border: "#E5E7EB",
};

const TIPS: Record<string, Tip> = {
  affiliates: {
    label: "Actors",
    title: "Affiliates",
    body: "Affiliates were the revenue engine, so signup, commissions, and shared-cart flows had to scale without disruption.",
  },
  shoppers: {
    label: "Actors",
    title: "Shoppers",
    body: "Shoppers moved between web, mobile, and affiliate carts, so the experience had to stay consistent across markets and languages.",
  },
  contentstack: {
    label: "Experience Layer",
    title: "Contentstack",
    body: "Contentstack handled localized storefront content so teams could ship updates without waiting on engineering.",
  },
  bigcommerce: {
    label: "Commerce Core",
    title: "BigCommerce",
    body: "BigCommerce stayed intentionally thin for catalog and checkout, keeping core business logic outside the platform.",
  },
  pimcore: {
    label: "Commerce Core",
    title: "Pimcore",
    body: "Pimcore became the product brain for catalog, pricing, and inventory distributed across channels.",
  },
  erp: {
    label: "Enterprise Systems",
    title: "ERP + Inventory",
    body: "Infor handled inventory and operations, integrated for cross-market accuracy without tightly coupling the stack.",
  },
  touchpoints: {
    label: "Touchpoints",
    title: "Web, Mobile & Shared Cart",
    body: "A shared commerce engine powered web, mobile, and shared-cart touchpoints across markets.",
  },
};

type MiniRowIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

type MiniRowConfig = {
  label: string;
  icon?: MiniRowIcon;
  iconSrc?: string;
  subdued?: boolean;
  tipKey?: string;
};

type FlowStepConfig = {
  step: string;
  mobileTitle: string;
  desktopTitle?: string;
  mobileBody: string;
  desktopBody: string;
  emphasized?: boolean;
  desktopClassName?: string;
  rows: MiniRowConfig[];
  insetModule?: {
    title: string;
    rows: MiniRowConfig[];
  };
  chips?: string[];
};

const FLOW_STEPS: FlowStepConfig[] = [
  {
    step: "01",
    mobileTitle: "Actors",
    mobileBody: "Revenue starts with affiliates and shoppers entering the same system.",
    desktopBody: "Affiliates and shoppers drive revenue into the same system.",
    rows: [
      { icon: Users, label: "Affiliates", tipKey: "affiliates" },
      { icon: ShoppingCart, label: "Shoppers", subdued: true, tipKey: "shoppers" },
    ],
  },
  {
    step: "02",
    mobileTitle: "Touchpoints",
    mobileBody: "The experience appears across every sales surface, not just one storefront.",
    desktopBody: "Sales happen across web, mobile, and shared cart flows.",
    rows: [
      { icon: Globe, label: "Web Store", tipKey: "touchpoints" },
      { icon: Smartphone, label: "Mobile App", subdued: true, tipKey: "touchpoints" },
      { icon: Share2, label: "Shared Cart", tipKey: "touchpoints" },
    ],
  },
  {
    step: "03",
    mobileTitle: "Experience Layer",
    desktopTitle: "Experience",
    mobileBody: "Content and localization shape the front-end experience before transactions fire.",
    desktopBody: "Content and localization shape the front-end layer.",
    rows: [
      { iconSrc: "/tool-icons/svg/contentstack-logo.svg", label: "Contentstack", tipKey: "contentstack" },
      { icon: Globe, label: "Localized UX", subdued: true },
    ],
  },
  {
    step: "04",
    mobileTitle: "Commerce Core",
    mobileBody: "Commerce stays intentionally thin so product, promotions, and rules can evolve without another replatform.",
    desktopBody: "BigCommerce stays thin so the system remains replaceable and scalable.",
    emphasized: true,
    desktopClassName: "xl:w-[232px]",
    rows: [{ iconSrc: "/tool-icons/svg/bc-logo-icon.svg", label: "BigCommerce", tipKey: "bigcommerce" }],
    insetModule: {
      title: "Product Truth",
      rows: [{ iconSrc: "/tool-icons/svg/pimcore-logo.svg", label: "Pimcore", tipKey: "pimcore" }],
    },
    chips: ["PIM-led", "API-first"],
  },
  {
    step: "05",
    mobileTitle: "Enterprise Systems",
    mobileBody: "Payments, inventory, shipping, analytics, and compliance complete the operating model.",
    desktopBody: "Operational services complete the model and keep the business running.",
    rows: [
      { icon: CreditCard, label: "Payments" },
      { iconSrc: "/tool-icons/svg/infor-logo.svg", label: "ERP + Inventory", subdued: true, tipKey: "erp" },
      { icon: Truck, label: "Tax + Shipping" },
      { icon: Search, label: "Analytics", subdued: true },
      { icon: ShieldCheck, label: "Compliance" },
    ],
  },
];

const STEP_COUNT = FLOW_STEPS.length;

function EyebrowPill({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-[50px] px-3 py-1.5"
      style={{ background: COLORS.white, color: COLORS.ink, border: `1px solid ${COLORS.border}` }}
    >
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: COLORS.ink }}
      />
      <span className="type-p5">{children}</span>
    </div>
  );
}

function TagChip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex min-h-7 items-center rounded-[999px] px-3 py-1.5 ${dark ? "type-p5" : "type-ui-sm"}`}
      style={{
        background: dark ? COLORS.ink : "#EEF4FE",
        color: dark ? COLORS.white : "#477ACB",
        outline: dark ? `1px solid ${COLORS.ink}` : "1px solid #E5E7EB",
        outlineOffset: dark ? undefined : "-1px",
      }}
    >
      {children}
    </div>
  );
}

function Rail({ filling, triggerKey }: { filling: boolean; triggerKey: number }) {
  return (
    <div className="relative hidden h-px flex-1 self-center xl:block" style={{ background: COLORS.border, zIndex: 0, position: "relative" }}>
      <motion.div
        key={filling ? triggerKey : undefined}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        initial={{ left: "0%", opacity: 0 }}
        animate={filling ? {
          left: ["0%", "100%"],
          opacity: [0, 1, 1, 0],
        } : { left: "0%", opacity: 0 }}
        transition={{
          left: { duration: 3.6, ease: "easeInOut" },
          opacity: { duration: 3.6, times: [0, 0.02, 0.85, 1] },
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M11 5l4 4-4 4" stroke="#477ACB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}

function VerticalFlowArrow() {
  return (
    <div className="flex justify-center xl:hidden">
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-full"
        style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
      >
        <ArrowRight className="h-4 w-4 rotate-90" style={{ color: COLORS.ink }} />
      </div>
    </div>
  );
}

function MiniRow({
  icon: Icon,
  iconSrc,
  label,
  subdued = false,
  tipKey,
  onOpen,
}: {
  icon?: MiniRowIcon;
  iconSrc?: string;
  label: string;
  subdued?: boolean;
  tipKey?: string;
  onOpen?: (key: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const clickable = !!tipKey && !!onOpen;

  return (
    <div
      className="flex items-center gap-2 rounded-xl px-3 py-2"
      style={{
        background: subdued ? COLORS.lightGray : COLORS.white,
        border: hovered && clickable ? "1px solid #477ACB" : `1px solid ${COLORS.border}`,
        cursor: clickable ? "pointer" : "default",
        transition: "border-color 0.15s",
      }}
      onMouseEnter={() => clickable && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={e => e.stopPropagation()}
      onClick={e => {
        e.stopPropagation();
        if (clickable) onOpen!(tipKey!);
      }}
    >
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full"
        style={{ background: COLORS.softWhite, border: `1px solid ${COLORS.border}` }}
      >
        {iconSrc ? (
          <img src={iconSrc} alt="" className="h-3.5 w-3.5 object-contain" />
        ) : Icon ? (
          <Icon className="h-3.5 w-3.5" style={{ color: COLORS.ink }} />
        ) : null}
      </div>
      <span className="type-p5" style={{ color: COLORS.ink }}>
        {label}
      </span>
    </div>
  );
}

function FlowCard({
  step,
  title,
  body,
  children,
  emphasized = false,
  isActive = false,
  compact = false,
  className = "",
}: {
  step: string;
  title: string;
  body: string;
  children: React.ReactNode;
  emphasized?: boolean;
  isActive?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative min-w-0 xl:w-[212px] flex flex-col self-stretch z-10 ${className}`}
      animate={{ y: isActive ? -6 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {emphasized ? (
        <motion.div
          className="pointer-events-none absolute -inset-2 rounded-[20px]"
          style={{ border: `1px dashed ${COLORS.secondary}` }}
          animate={{ backgroundPositionX: [0, 24] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      ) : null}

      <motion.div
        className="relative flex flex-col h-full rounded-[12px] p-4"
        animate={{
          borderColor: isActive ? [COLORS.border, "#477ACB", "#477ACB"] : COLORS.border,
          boxShadow: isActive
            ? "0 20px 50px rgba(71,122,203,0.22), 0 4px 16px rgba(71,122,203,0.14)"
            : "0 10px 30px rgba(15,23,42,0.05)",
        }}
        transition={{
          borderColor: isActive
            ? { duration: 0.9, times: [0, 0.12, 1], ease: "easeOut" }
            : { duration: 0.5 },
          boxShadow: { duration: 0.6 },
        }}
        style={{
          background: COLORS.white,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: COLORS.border,
        }}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <motion.span
            className="type-p5"
            animate={{ color: isActive ? COLORS.ink : COLORS.muted }}
            transition={{ duration: 0.2 }}
          >
            {step}
          </motion.span>
          {emphasized ? <TagChip dark>Core</TagChip> : null}
        </div>

        <div className="type-h6" style={{ color: COLORS.ink }}>
          {title}
        </div>

        <p className="type-p4 mt-2" style={{ color: COLORS.muted }}>
          {body}
        </p>

        <div className={`mt-4 ${compact ? "flex flex-wrap gap-2" : "space-y-2"}`}>{children}</div>
      </motion.div>
    </motion.div>
  );
}

function InsetModule({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-[12px] p-2.5"
      style={{
        background: COLORS.lightGray,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <div className="type-p5 mb-2 px-1 uppercase tracking-[0.12em]" style={{ color: COLORS.muted }}>
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function renderMiniRows(rows: MiniRowConfig[], onOpen: (key: string) => void, keyPrefix: string) {
  return rows.map((row) => (
    <MiniRow
      key={`${keyPrefix}-${row.label}`}
      icon={row.icon}
      iconSrc={row.iconSrc}
      label={row.label}
      subdued={row.subdued}
      tipKey={row.tipKey}
      onOpen={row.tipKey ? onOpen : undefined}
    />
  ));
}

function renderStepContent(step: FlowStepConfig, onOpen: (key: string) => void, keyPrefix: string, compact = false) {
  return (
    <>
      {renderMiniRows(step.rows, onOpen, keyPrefix)}

      {step.insetModule ? (
        compact
          ? renderMiniRows(step.insetModule.rows, onOpen, `${keyPrefix}-inset`)
          : (
            <InsetModule title={step.insetModule.title}>
              {renderMiniRows(step.insetModule.rows, onOpen, `${keyPrefix}-inset`)}
            </InsetModule>
          )
      ) : null}

      {step.chips ? (
        compact
          ? step.chips.map(chip => <TagChip key={`${keyPrefix}-chip-${chip}`}>{chip}</TagChip>)
          : (
            <div className="flex flex-wrap gap-2 pt-1">
              {step.chips.map(chip => (
                <TagChip key={`${keyPrefix}-chip-${chip}`}>{chip}</TagChip>
              ))}
            </div>
          )
      ) : null}
    </>
  );
}

export default function ModereCommerceFlowDiagram({ className = "" }: { className?: string }) {
  const { activeKey, open, close } = useModal();
  const activeTip = activeKey ? TIPS[activeKey] ?? null : null;

  const [activeStep, setActiveStep] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [resetToken, setResetToken] = useState(0);

  const navigate = (next: number) => {
    if (next === 0) setCycle(c => c + 1);
    setActiveStep(next);
    setResetToken(t => t + 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((step) => {
        const next = (step + 1) % STEP_COUNT;
        if (next === 0) setCycle((current) => current + 1);
        return next;
      });
    }, 10000);
    return () => clearInterval(id);
  }, [resetToken]);

  return (
    <div className={`w-full ${className}`} onPointerDown={close}>
      <Modal tip={activeTip} onClose={close} />
      <div
        className="rounded-[28px] p-5 md:p-6"
        style={{
          background: "#FEFEFE",
        }}
      >
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <EyebrowPill>Composable Commerce Flow</EyebrowPill>

          <div className="flex flex-wrap gap-2">
            <TagChip>10+ markets / 7 languages</TagChip>
            <TagChip>43%+ conversion uplift</TagChip>
            <TagChip>35% faster page loads</TagChip>
          </div>
        </div>

        <div className="xl:hidden">
          {/* Carousel */}
          <div className="relative overflow-hidden pt-3 pb-3">
            <motion.div
              className="flex"
              animate={{ x: `${-activeStep * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {FLOW_STEPS.map((step) => (
                <div key={`carousel-${step.step}`} className="w-full shrink-0 px-1">
                  <FlowCard
                    step={step.step}
                    title={step.mobileTitle}
                    body={step.mobileBody}
                    emphasized={step.emphasized}
                    compact
                  >
                    {renderStepContent(step, open, `mobile-${step.step}`, true)}
                  </FlowCard>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between px-1">
            <button
              type="button"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full"
              style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
              onPointerDown={e => e.stopPropagation()}
              onClick={e => { e.stopPropagation(); navigate((activeStep - 1 + STEP_COUNT) % STEP_COUNT); }}
            >
              <ArrowRight className="h-4 w-4 rotate-180" style={{ color: COLORS.ink }} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {FLOW_STEPS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onPointerDown={e => e.stopPropagation()}
                  onClick={e => { e.stopPropagation(); navigate(i); }}
                  style={{
                    width: activeStep === i ? 20 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: activeStep === i ? "#477ACB" : COLORS.border,
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full"
              style={{ background: COLORS.white, border: `1px solid ${COLORS.border}` }}
              onPointerDown={e => e.stopPropagation()}
              onClick={e => { e.stopPropagation(); navigate((activeStep + 1) % STEP_COUNT); }}
            >
              <ArrowRight className="h-4 w-4" style={{ color: COLORS.ink }} />
            </button>
          </div>
        </div>

        <div className="relative hidden xl:block">
          <div className="mt-3 flex items-stretch gap-4 overflow-visible" style={{ isolation: "isolate" }}>
            {FLOW_STEPS.map((step, index) => (
              <React.Fragment key={`desktop-${step.step}`}>
                <FlowCard
                  step={step.step}
                  title={step.desktopTitle ?? step.mobileTitle}
                  body={step.desktopBody}
                  emphasized={step.emphasized}
                  isActive={activeStep === index}
                  className={step.desktopClassName ?? ""}
                >
                  {renderStepContent(step, open, `desktop-${step.step}`)}
                </FlowCard>

                {index < STEP_COUNT - 1 ? (
                  <Rail filling={activeStep === index + 1} triggerKey={cycle * STEP_COUNT + index + 1} />
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
