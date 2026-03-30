export type TopNodeId = "personalization" | "merchandising" | "ugc" | "promotions" | "frontend"
export type CommerceNodeId = "omnichannel" | "subscriptions" | "catalog" | "checkout" | "orders" | "customer"
export type SystemNodeId = "erp" | "oms" | "pim" | "esp" | "cms" | "analytics"
export type MeasuredNodeId = CommerceNodeId | SystemNodeId | "api"

export type DiagramNodeConfig<T extends string> = {
  id: T
  label: string
  iconSrc: string
  iconAlt: string
}

export type BrandSystemNodeConfig = {
  id: SystemNodeId
  label: string
  brand: SystemNodeId
}

export const SCJ_TOP_NODES: DiagramNodeConfig<TopNodeId>[] = [
  { id: "personalization", label: "Personalization", iconSrc: "/tool-icons/svg/icon-user.svg", iconAlt: "Personalization" },
  { id: "merchandising", label: "Merchandising", iconSrc: "/tool-icons/svg/icon-slider.svg", iconAlt: "Merchandising" },
  { id: "ugc", label: "User-Generated\nContent", iconSrc: "/tool-icons/svg/icon-ugc.svg", iconAlt: "UGC" },
  { id: "promotions", label: "Promotions", iconSrc: "/tool-icons/svg/icon-coupon.svg", iconAlt: "Promotions" },
  { id: "frontend", label: "Front-end Coding &\nScoping", iconSrc: "/tool-icons/svg/icon-code.svg", iconAlt: "Front-end Coding" },
]

export const SCJ_COMMERCE_NODES: DiagramNodeConfig<CommerceNodeId>[] = [
  { id: "omnichannel", label: "Omni-Channel", iconSrc: "/tool-icons/svg/icon-web.svg", iconAlt: "Omni-Channel" },
  { id: "subscriptions", label: "Subscriptions", iconSrc: "/tool-icons/svg/ordergroove-logo.svg", iconAlt: "Ordergroove" },
  { id: "catalog", label: "Product Catalog &\nContent", iconSrc: "/tool-icons/svg/icon-shipping.svg", iconAlt: "Product Catalog" },
  { id: "checkout", label: "Cart & Checkout", iconSrc: "/tool-icons/svg/icon-credit-card.svg", iconAlt: "Cart & Checkout" },
  { id: "orders", label: "Orders", iconSrc: "/tool-icons/svg/icon-shopping-bag.svg", iconAlt: "Orders" },
  { id: "customer", label: "Customer Data", iconSrc: "/tool-icons/svg/iscon-user-02.svg", iconAlt: "Customer Data" },
]

export const SCJ_SYSTEM_NODES: BrandSystemNodeConfig[] = [
  { id: "erp", label: "ERP", brand: "erp" },
  { id: "oms", label: "OMS", brand: "oms" },
  { id: "pim", label: "PIM", brand: "pim" },
  { id: "esp", label: "ESP", brand: "esp" },
  { id: "cms", label: "CMS", brand: "cms" },
  { id: "analytics", label: "Analytics", brand: "analytics" },
]

export const SCJ_BRAND_LOGOS: Record<SystemNodeId, string> = {
  erp: "/tool-icons/svg/sap-logo.svg",
  oms: "/tool-icons/svg/merkle-logo.svg",
  pim: "/tool-icons/svg/salsify-logo.svg",
  esp: "/tool-icons/svg/klaviyo-logo.svg",
  cms: "/tool-icons/svg/shogun-logo.svg",
  analytics: "/tool-icons/svg/icon-pie-chart.svg",
}
