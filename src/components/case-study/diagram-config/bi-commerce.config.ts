import {
  AEM_BROWSER_PATH,
  AEM_DATALAKE_PATH,
  BROWSER_AEM_PATH,
  CC_DATALAKE_PATH,
  CC_MULESOFT_PATH,
  CC_SAP_PATH,
  DATALAKE_AEM_PATH,
  DATALAKE_CC_PATH,
  MULESOFT_BROWSER_PATH,
  MULESOFT_CC_PATH,
  MULESOFT_SAP_PATH,
  SAP_CC_PATH,
  SAP_MULESOFT_PATH,
} from "@/components/case-study/bi-commerce-ecosystem.constants"

export type BiFeatureIconKey = "products" | "inventory" | "database" | "content" | "campaign"
export type BiBadgeKey = "sap" | "aem" | "mulesoft"

export type BiCardFeatureConfig = {
  label: string
  icon: BiFeatureIconKey
}

export type BiSystemCardConfig = {
  eyebrowLabel: string
  eyebrow: BiBadgeKey
  title: string
  body: string
  features: BiCardFeatureConfig[]
}

export const BI_SAP_CARD: BiSystemCardConfig = {
  eyebrowLabel: "SOURCE OF TRUTH",
  eyebrow: "sap",
  title: "SAP",
  body: "Owns commercial truth across products, pricing, inventory, and order data.",
  features: [
    { label: "Products", icon: "products" },
    { label: "Inventory", icon: "inventory" },
    { label: "Orders", icon: "database" },
  ],
}

export const BI_AEM_CARD: BiSystemCardConfig = {
  eyebrowLabel: "CONTENT & ANALYTICS",
  eyebrow: "aem",
  title: "Adobe Experience Manager",
  body: "Publishes content and experience assets that shape browsing and merchandising.",
  features: [
    { label: "Content", icon: "content" },
    { label: "Campaigns", icon: "campaign" },
    { label: "Analytics", icon: "database" },
  ],
}

export const BI_MULESOFT_CARD = {
  eyebrowLabel: "INTEGRATION SPINE",
  eyebrow: "mulesoft" as const,
  title: "Mulesoft API Layer",
  body: "Publishes content and experience assets that shape browsing and merchandising.",
}

export const BI_MULESOFT_PILLS = [
  { label: "IDP", key: "idp" },
  { label: "Apps", key: "apps" },
  { label: "API/HOOKS", key: "api-hooks" },
] as const

export const BI_CONNECTOR_PATHS = [
  "M 866 39 H 1240",
  "M 1240 39 V 279",
  "M 866 54 H 1225",
  "M 1225 54 V 279",
  "M 720 0 V 279",
  "M 710 494 V 606",
  "M 725 494 V 606",
  "M 319 384 H 483",
  "M 319 399 H 483",
  "M 958 715 H 1115",
  "M 958 730 H 1115",
  "M 1240 506 V 677",
  "M 1255 506 V 677",
  "M 154 506 V 710",
  "M 154 710 H 483",
  "M 139 506 V 725 H 483",
] as const

export const BI_DESKTOP_NODE_POSITIONS = {
  browser: { left: 501, top: 0 },
  sap: { left: 1, top: 279 },
  mulesoft: { left: 483, top: 279 },
  aem: { left: 1045, top: 279 },
  commerceCloud: { left: 483, top: 606 },
  dataLake: { left: 1115, top: 677 },
  paymentsTag: { left: 98, top: 591 },
  taxTag: { left: 98, top: 699 },
} as const

export const BI_DESKTOP_PARTICLE_PATHS = [
  [CC_SAP_PATH, "237,34,36"],
  [SAP_CC_PATH, "34,34,34"],
  [DATALAKE_CC_PATH, "34,34,34"],
  [CC_DATALAKE_PATH, "237,34,36"],
  [BROWSER_AEM_PATH, "68,122,203"],
  [AEM_BROWSER_PATH, "68,122,203"],
  [CC_MULESOFT_PATH, "237,34,36"],
  [MULESOFT_CC_PATH, "34,34,34"],
  [AEM_DATALAKE_PATH, "68,122,203"],
  [DATALAKE_AEM_PATH, "34,34,34"],
  [SAP_MULESOFT_PATH, "34,34,34"],
  [MULESOFT_SAP_PATH, "34,34,34"],
  [MULESOFT_BROWSER_PATH, "34,34,34"],
] as const
