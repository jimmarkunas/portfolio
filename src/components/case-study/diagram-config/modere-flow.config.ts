import type { ComponentType, CSSProperties } from "react"

import {
  CreditCard,
  Globe,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
} from "lucide-react"

import type { Tip } from "@/components/case-study/useModal"

export type MiniRowIcon = ComponentType<{ className?: string; style?: CSSProperties }>

export type MiniRowConfig = {
  label: string
  icon?: MiniRowIcon
  iconSrc?: string
  subdued?: boolean
  tipKey?: string
}

export type FlowStepConfig = {
  step: string
  mobileTitle: string
  desktopTitle?: string
  mobileBody: string
  desktopBody: string
  emphasized?: boolean
  desktopClassName?: string
  rows: MiniRowConfig[]
  insetModule?: {
    title: string
    rows: MiniRowConfig[]
  }
  chips?: string[]
}

export const MODERE_COLORS = {
  ink: "#222222",
  secondary: "#4B5154",
  muted: "#7B7B7B",
  white: "#FFFFFF",
  softWhite: "#FEFEFE",
  lightGray: "#F3F3F3",
  border: "#E5E7EB",
} as const

export const MODERE_TIPS: Record<string, Tip> = {
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
}

export const MODERE_FLOW_STEPS: FlowStepConfig[] = [
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
]

export const MODERE_STEP_COUNT = MODERE_FLOW_STEPS.length
