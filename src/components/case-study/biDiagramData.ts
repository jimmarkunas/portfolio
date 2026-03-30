import type { Tip } from "./useModal"

export const BI_TOOLTIPS: Record<string, Tip> = {
  // Customer Presentation
  "shopper-browser": {
    label: "CUSTOMER PRESENTATION",
    title: "Shopper Browser",
    body: "Delivered the live B2B storefront across desktop, tablet, and mobile. Veterinary accounts used this layer to browse products, build orders, and submit purchases online.",
  },
  "adobe-web-sdk": {
    label: "CUSTOMER PRESENTATION",
    title: "Adobe Web SDK",
    body: "Captured storefront events and sent them into Adobe's measurement stack. It tracked user behavior, page interaction, and commerce events across markets.",
  },

  // Source of Truth
  sap: {
    label: "SOURCE OF TRUTH",
    title: "SAP",
    body: "Served as the back-office source for core commercial data. Product, pricing, inventory, and order records flowed from or reconciled back to this system.",
  },
  products: {
    label: "SOURCE OF TRUTH",
    title: "Products",
    body: "Held the product master used by the storefront. Product structure, sellable attributes, and market-level assortment rules depended on this data.",
  },
  inventory: {
    label: "SOURCE OF TRUTH",
    title: "Inventory",
    body: "Provided inventory status for storefront ordering. Availability data from this node determined whether products could be sold online.",
  },
  orders: {
    label: "SOURCE OF TRUTH",
    title: "Orders",
    body: "Received submitted orders from the commerce layer for downstream processing. This was the system handoff from digital ordering into fulfillment and servicing.",
  },

  // Integration Spine
  mulesoft: {
    label: "INTEGRATION SPINE",
    title: "Mulesoft API Layer",
    body: "Connected Adobe Commerce, SAP, Avalara, and adjacent systems through a shared API layer. It handled cross-system data exchange without embedding each integration directly in the storefront.",
  },
  idp: {
    label: "INTEGRATION SPINE",
    title: "IDP",
    body: "Handled identity and access across authenticated B2B flows. User login, account association, and permission-aware access depended on this layer.",
  },
  apps: {
    label: "INTEGRATION SPINE",
    title: "Apps",
    body: "Represented connected applications behind the storefront and commerce stack. These services consumed shared data and extended core flows without becoming standalone builds.",
  },
  "api-hooks": {
    label: "INTEGRATION SPINE",
    title: "API/Hooks",
    body: "Moved real-time events between commerce and enterprise systems. These hooks carried pricing, tax, account, and order signals during transaction flows.",
  },

  // Content & Analytics
  aem: {
    label: "CONTENT & ANALYTICS",
    title: "Adobe Experience Manager",
    body: "Handled content delivery around the storefront and integrated with Adobe analytics tooling. It kept editorial content separate from transaction logic.",
  },
  content: {
    label: "CONTENT & ANALYTICS",
    title: "Content",
    body: "Managed page content, messaging, and localized experience elements. Markets used this layer to vary content without changing commerce behavior.",
  },
  campaigns: {
    label: "CONTENT & ANALYTICS",
    title: "Campaigns",
    body: "Connected campaign traffic and landing experiences into the storefront. It tied promotional activity to shared commerce flows instead of separate market microsites.",
  },
  analytics: {
    label: "CONTENT & ANALYTICS",
    title: "Analytics",
    body: "Measured storefront behavior, conversion, and usage across countries. It provided one reporting framework for the global rollout.",
  },

  // Commerce Layer
  "commerce-cloud": {
    label: "COMMERCE LAYER",
    title: "Adobe Commerce Cloud",
    body: "Served as the core commerce layer for the global storefront. Shared ordering logic, catalog behavior, and transaction flow lived here.",
  },
  graphql: {
    label: "COMMERCE LAYER",
    title: "Adobe GraphQL",
    body: "Exposed commerce data to the front end through structured APIs. Catalog, cart, and checkout data moved through this layer to support the storefront experience.",
  },
  catalog: {
    label: "COMMERCE LAYER",
    title: "Catalog",
    body: "Managed the sellable catalog shown in each market. Product visibility and assortment presentation flowed through this node.",
  },
  cart: {
    label: "COMMERCE LAYER",
    title: "Cart",
    body: "Held product selections, pricing context, and order intent before checkout. This was the staging point between browsing and transaction submission.",
  },
  checkout: {
    label: "COMMERCE LAYER",
    title: "Checkout",
    body: "Executed account logic, tax calculation, and order submission. It was the final transaction layer before orders moved into enterprise processing.",
  },

  // Data
  "data-lake": {
    label: "DATA",
    title: "Data Lake",
    body: "Stored storefront and experience data for downstream analysis. It provided a shared data foundation across markets and tools.",
  },
  "aem-connector": {
    label: "DATA",
    title: "AEM Connector",
    body: "Moved AEM content and experience signals into the broader data layer. It linked content activity with commerce and analytics data downstream.",
  },

  // 3rd Party
  payments: {
    label: "3RD PARTY",
    title: "Payments",
    body: "Processed payment authorization for online B2B orders. This node handled the transaction handoff between checkout and payment processing.",
  },
  tax: {
    label: "3RD PARTY",
    title: "Tax",
    body: "Calculated transaction tax through Avalara during checkout. Tax logic was applied in real time before order submission.",
  },
}
