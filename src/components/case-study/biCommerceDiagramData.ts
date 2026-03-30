import type { Tip } from "./useModal"

export const TOOLTIPS: Record<string, Tip> = {
  "shopper-browser": {
    label: "CUSTOMER PRESENTATION",
    title: "Shopper Browser",
    body: "Delivered the live B2B storefront across desktop, tablet, and mobile. Veterinary accounts used this layer to browse products, build orders, and submit purchases online.",
  },
  "adobe-web-sdk": {
    label: "ADOBE WEB SDK",
    title: "Adobe Web SDK",
    body: "Captured storefront events and sent them into Adobe's measurement stack. It tracked user behavior, page interaction, and commerce events across markets.",
  },
  "sap": {
    label: "SOURCE OF TRUTH",
    title: "SAP",
    body: "Served as the back-office source for core commercial data. Product, pricing, inventory, and order records flowed from or reconciled back to this system.",
  },
  "mulesoft": {
    label: "INTEGRATION SPINE",
    title: "Mulesoft API Layer",
    body: "Connected Adobe Commerce, SAP, Avalara, and adjacent systems through a shared API layer. It handled cross-system data exchange without embedding each integration directly in the storefront.",
  },
  "idp": {
    label: "Adobe Commerce IDP",
    title: "IDP",
    body: "Handled identity and access across authenticated B2B flows. User login, account association, and permission-aware access depended on this layer.",
  },
  "apps": {
    label: "Adobe Apps",
    title: "Apps",
    body: "Represented connected applications behind the storefront and commerce stack. These services consumed shared data and extended core flows without becoming standalone builds.",
  },
  "api-hooks": {
    label: "MULESOFT & Adobe API/HOOKS",
    title: "API/Hooks",
    body: "Moved real-time events between commerce and enterprise systems. These hooks carried pricing, tax, account, and order signals during transaction flows.",
  },
  "aem": {
    label: "CONTENT & ANALYTICS",
    title: "Adobe Experience Manager",
    body: "Handled content delivery around the storefront and integrated with Adobe analytics tooling. It kept editorial content separate from transaction logic.",
  },
  "aem-connector": {
    label: "DATA",
    title: "AEM Connector",
    body: "Moved AEM content and experience signals into the broader data layer. It linked content activity with commerce and analytics data downstream.",
  },
  "adobe-graphql": {
    label: "COMMERCE LAYER",
    title: "Adobe GraphQL",
    body: "Exposed commerce data to the front end through structured APIs. Catalog, cart, and checkout data moved through this layer to support the storefront experience.",
  },
  "commerce-cloud": {
    label: "COMMERCE LAYER",
    title: "Adobe Commerce Cloud",
    body: "Served as the core commerce layer for the global storefront. Shared ordering logic, catalog behavior, and transaction flow lived here.",
  },
  "commerce-services": {
    label: "COMMERCE LAYER",
    title: "Catalog, Cart & Checkout",
    body: "Managed the sellable catalog, staged order intent, and executed account logic and tax calculation before submission. These three nodes covered the full transaction path from browse to order.",
  },
  "data-lake": {
    label: "DATA",
    title: "Data Lake",
    body: "Stored storefront and experience data for downstream analysis. It provided a shared data foundation across markets and tools.",
  },
  "payments": {
    label: "INTEGRATION",
    title: "Payments",
    body: "Processed payment authorization for online B2B orders. This node handled the transaction handoff between checkout and payment processing.",
  },
  "tax": {
    label: "INTEGRATION",
    title: "Tax",
    body: "Calculated transaction tax through Avalara during checkout. Tax logic was applied in real time before order submission.",
  },
}
