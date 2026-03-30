import type { Tip } from "./useModal"

export const SCJ_TOOLTIPS: Record<string, Tip> = {
  // Top nodes — Storefront presentation
  personalization: {
    label: "STOREFRONT DESIGN",
    title: "Personalization",
    body: "Surfaced relevant products and content based on browse and purchase history. First-party data was thin at launch, so rules-based logic carried most of the load.",
  },
  merchandising: {
    label: "STOREFRONT DESIGN",
    title: "Merchandising",
    body: "Controlled product sequencing, collection logic, and featured placement. Gave the brand team direct control over what consumers saw without engineering involvement.",
  },
  ugc: {
    label: "STOREFRONT DESIGN",
    title: "User-Generated Content",
    body: "Pulled ratings and reviews onto PDPs to support purchase confidence. Critical for a brand moving from retail shelf to a screen where the product can't be smelled.",
  },
  promotions: {
    label: "STOREFRONT DESIGN",
    title: "Promotions",
    body: "Managed discount codes, bundle offers, and campaign-driven pricing. Designed to let the marketing team run promos without touching the commerce config.",
  },
  frontend: {
    label: "STOREFRONT DESIGN",
    title: "Front-end Coding & Scoping",
    body: "Defined the build scope for the BigCommerce storefront theme and custom components. Kept the front-end lean enough to ship on schedule without a large dev team.",
  },

  // Commerce nodes
  omnichannel: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Omni-Channel",
    body: "Maintained consistent pricing, inventory, and product data across DTC and retail feeds. Prevented the new channel from creating conflicts with existing retail accounts.",
  },
  subscriptions: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Subscriptions",
    body: "Enabled recurring orders for cleaning and home-care consumables. Required custom integration work since BigCommerce's native subscription support was limited at the time.",
  },
  catalog: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Product Catalog & Content",
    body: "Synced structured product data from Salsify into BigCommerce. Ensured PDPs had accurate attributes, copy, and imagery without manual re-entry.",
  },
  checkout: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Cart & Checkout",
    body: "Handled payment capture, tax calculation via Avalara, and address validation. One of the most integration-heavy nodes — any failure here meant a broken order.",
  },
  orders: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Orders",
    body: "Routed confirmed orders from BigCommerce to SAP and the OMS for fulfillment. Getting this flow right was the core solutioning challenge of the program.",
  },
  customer: {
    label: "COMMERCE SYSTEM LAYER",
    title: "Customer Data",
    body: "Captured first-party customer records at checkout for the first time in SCJ's DTC history. Fed downstream into ESP for lifecycle marketing.",
  },

  // System nodes
  erp: {
    label: "ENTERPRISE SYSTEMS",
    title: "ERP",
    body: "SAP handled financial records, inventory positions, and order confirmation back to BigCommerce. The integration pattern defined here became the model for Caldrea and Method.",
  },
  oms: {
    label: "ENTERPRISE SYSTEMS",
    title: "OMS",
    body: "Managed parcel-level fulfillment routing after orders landed from BigCommerce. SCJ's existing OMS was built for retail distribution — DTC parcel logic required significant rework.",
  },
  pim: {
    label: "ENTERPRISE SYSTEMS",
    title: "PIM",
    body: "Salsify served as the product information source of truth. Structured attributes and digital assets flowed from here into the BigCommerce catalog automatically.",
  },
  esp: {
    label: "ENTERPRISE SYSTEMS",
    title: "ESP",
    body: "Powered post-purchase and lifecycle email flows using customer data captured at checkout. Connected to BigCommerce order events via the API layer.",
  },
  cms: {
    label: "ENTERPRISE SYSTEMS",
    title: "CMS",
    body: "Managed editorial content, brand story pages, and campaign landing pages outside the core product catalog. Kept content updates off the development queue.",
  },
  analytics: {
    label: "ENTERPRISE SYSTEMS",
    title: "Analytics",
    body: "Tracked storefront behavior, conversion funnel, and order data to give SCJ its first DTC performance baseline. Domo was used for cross-channel reporting.",
  },

  // Layer blocks
  api: {
    label: "INTEGRATION",
    title: "2-Way Rest API Layer",
    body: "Brokered data exchange between BigCommerce and all enterprise systems. Bidirectional design meant order status, inventory, and customer data stayed in sync across the stack.",
  },
  storefront: {
    label: "LAYER",
    title: "Storefront Design",
    body: "The consumer-facing presentation layer built on BigCommerce. Covered everything a shopper sees and interacts with, from homepage to checkout confirmation.",
  },
  "commerce-layer": {
    label: "LAYER",
    title: "Commerce System Layer",
    body: "The operational core of the DTC stack. Handled catalog, orders, customer data, and checkout logic sitting between the storefront and the enterprise systems underneath.",
  },
}
