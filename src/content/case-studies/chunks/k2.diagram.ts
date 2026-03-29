import type { DiagramData } from "@/components/case-study/types"

export const k2Diagram: DiagramData = {
  inputs: [
    { id: "pwa", label: "PWA Storefront", icon: "/tool-icons/contentstack-logo.png", descriptor: "Contentstack", tier: "EXPERIENCE" },
    { id: "cms", label: "CMS DXP", icon: "/tool-icons/wordpress-logo.png", descriptor: "WordPress", tier: "CONTENT" },
    { id: "hc", label: "Headless Commerce", icon: "/tool-icons/bc-logo.png", descriptor: "BigCommerce", tier: "COMMERCE" },
  ],
  outputs: [
    { id: "pos", label: "POS", glyph: "database", descriptor: "In-store", tier: "OMNI-CHANNEL" },
    { id: "web", label: "Web App", glyph: "monitor", descriptor: "Storefronts", tier: "OMNI-CHANNEL" },
    { id: "mob", label: "Mobile App", glyph: "devices", descriptor: "iOS · Android", tier: "OMNI-CHANNEL" },
  ],
  integrations: [
    { id: "quivers", label: "Quivers", icon: "/tool-icons/quivers-logo.png" },
    { id: "epicor", label: "Avante", icon: "/tool-icons/epicore-logo.png" },
    { id: "stripe", label: "Stripe", icon: "/tool-icons/stripe-logo.png" },
  ],
  integrationsLabel: "BACK-OFFICE SYSTEMS",
  pills: [
    { id: "rest", label: "REST" },
    { id: "graphql", label: "GraphQL" },
    { id: "webhooks", label: "Webhooks" },
  ],
  tooltips: {
    pwa: { title: "PWA Storefront", body: "Brand teams controlled each storefront's front-end experience while the commerce engine stayed shared underneath; fast, app-like, and decoupled." },
    cms: { title: "CMS DXP", body: "WordPress powered the front-end brand layer for each of the nine storefronts, and was the integration layer for BC's cart, orders, and checkout." },
    hc: { title: "Headless Commerce", body: "BigCommerce served as the shared commerce engine — catalog, cart, and checkout across all 9 brands." },
    api: { title: "API Layer", body: "The central integration hub. REST & GraphQL APIs connected all platforms with clean separation between the commerce engine and front-end surfaces." },
    quivers: { title: "Quivers", body: "Unified commerce platform connecting K2 brands, big-box, and specialty retailers. Maintained as the source of truth for omni-channel fulfillment & wholesale data." },
    epicor: { title: "Avante / ERP", body: "ERP managing inventory, financials, and distribution. Kept deliberately outside the commerce layer to avoid turning BigCommerce into a fake ERP." },
    stripe: { title: "Stripe", body: "Payment processing infrastructure handling transactions, fraud prevention, and payout management across all brands and channels." },
    rest: { title: "REST", body: "RESTful endpoints for standard data operations — storefronts, POS, and mobile apps consume product, order, and customer data through this layer." },
    graphql: { title: "GraphQL", body: "Flexible query layer letting front-end teams fetch exactly the data they need — powers the complex, cross-brand requirements of the PWA storefronts." },
    webhooks: { title: "Webhooks", body: "Event-driven notifications keeping inventory, orders, and customer data in sync across BigCommerce, Quivers, Avante, and the storefronts in real time." },
    pos: { title: "POS", body: "Point-of-sale for in-store transactions. Syncs inventory and order data with the central platform in real time." },
    web: { title: "Web App", body: "Browser-based storefronts. Each of K2's nine brands got a distinct front-end experience consuming the same shared commerce infrastructure." },
    mob: { title: "Mobile App", body: "Native and hybrid mobile applications delivering dedicated iOS & Android experiences across the brand portfolio." },
  },
}
