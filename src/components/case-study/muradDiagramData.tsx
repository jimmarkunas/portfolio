import type { DiagramData } from "./muradDiagramTypes"
import {
  ADOBE_INTEGRATIONS,
  ADOBE_LOGO_DESKTOP,
  ADOBE_LOGO_MOBILE,
  BC_INTEGRATIONS,
  BC_LOGO_DESKTOP,
  BC_LOGO_MOBILE,
  CONTENTFUL_INTEGRATIONS,
  CONTENTFUL_LOGO_DESKTOP,
  CONTENTFUL_LOGO_MOBILE,
  ORACLE_INTEGRATIONS,
  ORACLE_LOGO_DESKTOP,
  ORACLE_LOGO_MOBILE,
  SENDGRID_INTEGRATIONS,
  SENDGRID_LOGO_DESKTOP,
  SENDGRID_LOGO_MOBILE,
} from "./muradDiagramIcons"

export type {
  DiagramApiLayer,
  DiagramCard,
  DiagramData,
  DiagramIntegration,
} from "./muradDiagramTypes"

export const DIAGRAM_DATA: DiagramData = {
  contentful: {
    eyebrow: "PWA Front End",
    title: "Contentful",
    subtitle: "Content Management System",
    logoDesktop: CONTENTFUL_LOGO_DESKTOP,
    logoMobile: CONTENTFUL_LOGO_MOBILE,
    integrations: CONTENTFUL_INTEGRATIONS,
  },

  bcUS: {
    eyebrow: "US Storefront",
    title: "BigCommerce (US)",
    subtitle: "Commerce System",
    logoDesktop: BC_LOGO_DESKTOP,
    logoMobile: BC_LOGO_MOBILE,
    integrations: BC_INTEGRATIONS,
  },

  bcUK: {
    eyebrow: "UK Storefront",
    title: "BigCommerce (UK)",
    subtitle: "Commerce System",
    logoDesktop: BC_LOGO_DESKTOP,
    logoMobile: BC_LOGO_MOBILE,
    integrations: BC_INTEGRATIONS,
  },

  bcMY: {
    eyebrow: "Malaysia Storefront",
    title: "BigCommerce (MY)",
    subtitle: "Commerce System",
    logoDesktop: BC_LOGO_DESKTOP,
    logoMobile: BC_LOGO_MOBILE,
    integrations: BC_INTEGRATIONS,
  },

  adobe: {
    title: "Adobe Experience Platform",
    subtitle: "Data, Marketing & Analytics",
    logoDesktop: ADOBE_LOGO_DESKTOP,
    logoMobile: ADOBE_LOGO_MOBILE,
    integrations: ADOBE_INTEGRATIONS,
  },

  oracle: {
    eyebrow: "Source of Truth",
    title: "Oracle EBS",
    subtitle: "Enterprise Resource System",
    logoDesktop: ORACLE_LOGO_DESKTOP,
    logoMobile: ORACLE_LOGO_MOBILE,
    integrations: ORACLE_INTEGRATIONS,
  },

  sendgrid: {
    title: "Sendgrid (Custom Int.)",
    subtitle: "Email Management System",
    logoDesktop: SENDGRID_LOGO_DESKTOP,
    logoMobile: SENDGRID_LOGO_MOBILE,
    integrations: SENDGRID_INTEGRATIONS,
  },

  apiLayer: {
    title: "API Layer",
    subtitle: "Central Migration Hub",
  },

  tooltips: {
    contentful: {
      label: "Content Management",
      title: "Contentful",
      body: "Headless CMS serving structured content to the PWA front end via REST API. Acts as the central content repository, enabling content-as-code workflows and decoupled publishing across all storefronts.",
    },
    adobe: {
      label: "Data, Marketing & Analytics",
      title: "Adobe Experience Platform",
      body: "Unified customer data platform ingesting behavioral and transactional data to power audience segmentation, real-time personalization, and cross-channel analytics.",
    },
    "bc-us": {
      label: "US Storefront",
      title: "BigCommerce (US)",
      body: "BigCommerce-powered storefront for the US market. Integrates Avalara for real-time tax compliance, OrderGroove for subscription management, and PayPal for checkout payment processing.",
    },
    "bc-uk": {
      label: "UK Storefront",
      title: "BigCommerce (UK)",
      body: "BigCommerce storefront for the UK market with the same integration stack — Avalara, OrderGroove, and PayPal — configured for UK tax rules, currency, and fulfillment requirements.",
    },
    "bc-my": {
      label: "Malaysia Storefront",
      title: "BigCommerce (MY)",
      body: "BigCommerce storefront for the Malaysia market. Shares the same architecture as US and UK with regional configurations for local tax, currency, and logistics.",
    },
    "api-layer": {
      label: "Central Hub",
      title: "API Layer",
      body: "Custom middleware orchestrating data flow between all storefront platforms and downstream systems. Decouples front-end commerce from ERP and marketing infrastructure, enabling independent scaling and evolution of each layer.",
    },
    oracle: {
      label: "Source of Truth",
      title: "Oracle EBS",
      body: "Oracle E-Business Suite serves as the authoritative record for orders, payments, shipping, and customer data. All transactional data ultimately syncs here through the API layer.",
    },
    sendgrid: {
      label: "Email Management",
      title: "Sendgrid (Custom Int.)",
      body: "Custom Sendgrid integration handling three distinct email channels: transactional order events, scheduled marketing campaigns, and profile-triggered lifecycle messages.",
    },
    "rest-left": {
      label: "REST API",
      title: "Contentful → Adobe",
      body: "REST API connection routing structured content from Contentful into Adobe Experience Platform, enabling content to be activated for personalization and audience targeting.",
    },
    "rest-right": {
      label: "REST API",
      title: "Adobe → Sendgrid",
      body: "REST API connection from Adobe Experience Platform to Sendgrid, enabling audience segments and behavioral event triggers to drive targeted email campaigns.",
    },
    "bc-avalara": {
      label: "Tax Integration",
      title: "Avalara",
      body: "Real-time tax calculation and compliance across all three storefronts. Automatically computes applicable taxes per transaction based on product type, customer location, and regional tax rules.",
    },
    "bc-ordergroove": {
      label: "Subscription Management",
      title: "OrderGroove",
      body: "Powers recurring order and subscription workflows. Enables customers to set up auto-replenishment schedules, manage active subscriptions, and skip or pause future deliveries.",
    },
    "bc-paypal": {
      label: "Payment Gateway",
      title: "PayPal",
      body: "Checkout payment processing supporting PayPal wallet, Venmo, and card payments. Handles authorization, capture, and refund flows integrated into the BigCommerce checkout experience.",
    },
    "erp-shipping": {
      label: "Fulfillment",
      title: "Shipping",
      body: "Oracle manages shipment records, carrier assignments, and tracking updates. Shipping events are synced from the API layer post-order and surfaced back to storefronts for customer notifications.",
    },
    "erp-payments": {
      label: "Financial Records",
      title: "Payments",
      body: "Oracle EBS is the authoritative system for all payment transactions, reconciliation batches, and refund processing. Payment data flows in from all storefronts via the API layer.",
    },
    "erp-customers": {
      label: "Customer Master",
      title: "Customers",
      body: "Oracle maintains the master customer record including full account history, contact data, and preferences — shared across all storefronts to provide a unified customer view.",
    },
    "esp-transactional": {
      label: "Order Comms",
      title: "Transactional",
      body: "System-triggered emails dispatched immediately on transactional events — order confirmations, shipping updates, delivery notifications, and account alerts triggered by the API layer.",
    },
    "esp-marketing": {
      label: "Campaign Emails",
      title: "Marketing",
      body: "Scheduled and event-triggered marketing campaigns including product launches, promotions, and re-engagement sequences. Audience segments flow from Adobe Experience Platform to drive targeting.",
    },
    "esp-profiles": {
      label: "Subscriber Data",
      title: "Profiles",
      body: "Customer profile and preference data synced from Oracle EBS and Adobe Experience Platform. Powers personalized sending logic, suppression lists, and lifecycle automation rules in Sendgrid.",
    },
    "axp-target": {
      label: "Personalization",
      title: "Target",
      body: "Adobe Target powers real-time A/B testing and content personalization across all storefronts. Decisions are informed by behavioral segments built and maintained in Adobe Audience Manager.",
    },
    "axp-audience": {
      label: "Segment Management",
      title: "Audience",
      body: "Adobe Audience Manager builds and manages customer segments from behavioral and transactional signals. Segments activate in Adobe Target for on-site personalization and Sendgrid for email campaigns.",
    },
    "axp-cx": {
      label: "Customer Data",
      title: "CX",
      body: "Adobe CX consolidates customer interaction data across all channels into a unified profile, enabling consistent personalization and cross-channel attribution throughout the customer journey.",
    },
    "cms-content1": {
      label: "Structured Content",
      title: "Content Entries",
      body: "Contentful entries power the PWA front end with structured copy, product descriptions, and page templates. Content is authored in Contentful and delivered to the storefront via REST API.",
    },
    "cms-content2": {
      label: "Content Architecture",
      title: "Content Models",
      body: "Custom content type definitions governing the schema and validation rules for all structured data. Models define how content is authored, related, and consumed by the front-end application.",
    },
    "cms-assets": {
      label: "Digital Assets",
      title: "Assets",
      body: "Contentful's Digital Asset Management stores and serves optimized images, videos, and files to the PWA via CDN. Assets are linked to content entries for contextual, on-demand delivery.",
    },
  },
}
