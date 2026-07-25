import type { CaseStudyRevampData } from "./types"

export const mmRevampCaseStudy = {
  "slug": "mm",
  "breadcrumbCurrent": "Mrs. Meyer's",
  "metadata": {
    "title": "Launching Mrs. Meyer's First DTC Channel From Scratch",
    "image": {
      "src": "/mm/hero-mm-01.png",
      "alt": "Mrs. Meyer's direct-to-consumer commerce launch hero image",
      "width": 1600,
      "height": 900
    }
  },
  "hero": {
    "eyebrow": "At-a-Glance",
    "title": "Launching Mrs. Meyer's First DTC Channel From Scratch",
    "intro": "Mrs. Meyer's had strong retail recognition but no owned customer relationship, no first-party data, and no proof that DTC could add revenue without cannibalizing the Target and Walmart shelf space that built the brand. I led SC Johnson's first direct commerce launch from scratch, designing the integration pattern, navigating the enterprise politics, and building a stack that became the reusable model for Caldrea and Method.",
    "metrics": [
      {
        "value": "$15",
        "suffix": "%",
        "label": "Revenue Uplift"
      },
      {
        "value": "10",
        "suffix": "%",
        "label": "Brand GMV Target"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Systems in Stack"
      }
    ],
    "image": {
      "kind": "image",
      "src": "/mm/hero-mm-01.png",
      "alt": "Mrs. Meyer's direct-to-consumer commerce launch hero image",
      "aspectRatio": "16/9"
    }
  },
  "productionQuote": {
    "quote": "This was the first time BC partnered with a globally recognized retail brand to go from zero to one, and Jim was the perfect PM for the job.",
    "attributionTitle": "Rachel Gavinski",
    "attributionSubtitle": "Key Account Director, BigCommerce",
    "avatarSrc": "/mm/rachel-gavinski.jpeg"
  },
  "executiveBrief": {
    "eyebrow": "At-a-Glance",
    "title": "SC Johnson's First DTC Bet",
    "copy": "Mrs. Meyer's was SC Johnson's first move into direct commerce, and BigCommerce's largest merchant at the time. I owned the cross-functional machine that connected a retail-era enterprise stack to a consumer-grade storefront, kept the politics from derailing the launch, and structured the architecture so it didn't die with one brand.",
    "tools": [
      {
        "label": "BigCommerce",
        "icon": "/tool-icons/svg/bc-logo-blk.svg"
      },
      {
        "label": "SAP",
        "icon": "/tool-icons/svg/sap-logo.svg"
      },
      {
        "label": "Salsify",
        "icon": "/tool-icons/svg/salsify-logo.svg"
      },
      {
        "label": "Avalara",
        "icon": "/tool-icons/svg/avalara-logo.svg"
      }
    ],
    "problem": "SC Johnson wanted to prove DTC could work for Mrs. Meyer's without damaging their key retail relationships. The company had no DTC, no owned customer relationship, and no modern path from storefront to fulfillment. The systems underneath were built for pallets and retail distribution, not parcel shipping, tax, payments, and subscriptions.",
    "mandate": "Own the cross-functional machine, architecture decisions, vendor coordination, launch planning, and executive communication on both the SC Johnson and BigCommerce sides, and get SC Johnson's first direct commerce channel live.",
    "whatIChanged": "Defined the SAP and BigCommerce integration pattern that became the foundation for every SC Johnson brand that followed. Structured the stack to be a reusable model, not a dead-end build. Kept stakeholder alignment intact through constant translation across SC Johnson, BigCommerce, and agency teams.",
    "outcome": "15% revenue uplift. A direct path to 10% of brand GMV through owned DTC. Retail relationships intact at launch and after. Caldrea and Method followed on the same architecture. SC Johnson proved the model worked.",
    "facts": [
      {
        "icon": "role",
        "label": "Role",
        "value": "Senior Program Manager"
      },
      {
        "icon": "client",
        "label": "Client",
        "value": "SC Johnson"
      },
      {
        "icon": "client",
        "label": "Industry",
        "value": "CPG • Home Care • eCommerce"
      },
      {
        "icon": "timeline",
        "label": "Timeline",
        "value": "Feb 2019 - Jul 2019"
      },
      {
        "icon": "team",
        "label": "Team / Stakeholders",
        "value": "25"
      },
      {
        "icon": "budget",
        "label": "Budget / Scale",
        "value": "$3M"
      },
      {
        "icon": "systems",
        "label": "Systems / Technology",
        "value": "BigCommerce, SAP, Salsify, Avalara"
      }
    ]
  },
  "challenge": {
    "eyebrow": "Problem Statement",
    "title": "A Retail Giant With No Direct Channel",
    "paragraphs": [
      "Mrs. Meyer's had real brand equity, a loyal customer base, and shelf space in every major retailer in the country. What it didn't have was any way to sell directly to the people buying it. SC Johnson had never run a direct commerce channel. The systems underneath were built for pallet shipments to retail distribution centers, not individual orders, parcel fulfillment, tax calculation, subscription billing, or a storefront a consumer would actually want to use.",
      "The stakes were higher than one brand launch. Mrs. Meyer's was BigCommerce's largest merchant at the time, and a successful rollout was the proof of concept that could bring every SC Johnson home-care brand onto the platform. A failed launch wouldn't just hurt Mrs. Meyer's, it would have ended the SC Johnson relationship entirely."
    ],
    "visual": {
      "kind": "react-diagram",
      "component": "retail-vs-dtc",
      "brandName": "Mrs. Meyers"
    },
    "caption": "The retail-vs-DTC gap SC Johnson needed to close without burning the shelf relationships that built Mrs. Meyer's."
  },
  "ownership": {
    "eyebrow": "What I Owned",
    "title": "I Made Enterprise Plumbing Behave Like DTC",
    "summary": "I owned the cross-functional machine: architecture decisions, vendor coordination, launch planning, and executive communication on both sides. The role was part program leadership, part solution design, and part political stabilization for a launch that had no margin for failure.",
    "decisions": [
      {
        "title": "DTC operating model",
        "copy": "Defined how BigCommerce, SAP, Salsify, Avalara, payments, fulfillment, and reporting had to connect for SC Johnson's first direct commerce motion, with no existing internal playbook to pull from."
      },
      {
        "title": "Integration pattern",
        "copy": "Established the SAP and BigCommerce integration logic that became the foundation for every SC Johnson home-care brand that followed. The decisions made here were reused for Caldrea and Method without rebuilding."
      },
      {
        "title": "Launch safeguards",
        "copy": "Pushed for Rewind backups and tighter launch discipline when the risk profile was too loose. SC Johnson's first DTC impression on BigCommerce's largest merchant account."
      },
      {
        "title": "Vendor and stakeholder coordination",
        "copy": "Kept SC Johnson, BigCommerce, agencies, and downstream system owners aligned across a 25-person, five-month program."
      },
      {
        "title": "Reusable stack architecture",
        "copy": "Structured the Mrs. Meyer's build as the first entry in a repeatable SC Johnson DTC pattern."
      }
    ]
  },
  "solution": {
    "mode": "three-column-and-diagram",
    "eyebrow": "Solution",
    "title": "A Reusable DTC Stack Built on Retail Rails",
    "copy": "The solution was building the launch model in a way SC Johnson could reuse. Storefront, product data, tax, payments, fulfillment, support, and marketing connected into one consumer flow, structured so the next brand could follow the same path without starting over.",
    "architecture": [],
    "diagramKey": "scj-commerce-architecture",
    "summary": "We built an ecosystem that merged SaaS with hosted, integrated the entire enterprise, and added value to the business in lieu of manual processes. This was a great digital transformation for SC Johnson and Son."
  },
  "impact": {
    "eyebrow": "Impact",
    "title": "A New Revenue Channel That Proved the Model",
    "intro": "SC Johnson entered direct commerce and proved it could scale without burning the retail relationships that built Mrs. Meyer's.",
    "metrics": [
      {
        "value": "$15",
        "suffix": "%",
        "label": "Revenue Uplift"
      },
      {
        "value": "10",
        "suffix": "%",
        "label": "Brand GMV Target"
      },
      {
        "value": "2",
        "suffix": "+",
        "label": "Follow-on Brands"
      },
      {
        "value": "0-1",
        "suffix": "",
        "label": "DTC Channel"
      }
    ],
    "transformation": {
      "eyebrow": "Before & After",
      "title": "Before & After",
      "rows": [
        {
          "problem": "No direct-to-consumer storefront for Mrs. Meyer's and no owned first-party relationship with shoppers.",
          "decision": "Defined how BigCommerce, SAP, product data, tax, payments, fulfillment, and reporting had to connect for SC Johnson's first-ever DTC motion, establishing the integration pattern from scratch.",
          "outcome": "Mrs. Meyer's launched a working end-to-end DTC stack with 15% revenue uplift and a direct path to 10% of brand GMV."
        },
        {
          "problem": "Enterprise systems were built for wholesale and retail distribution, not parcel shipping, subscriptions, or consumer-grade commerce.",
          "decision": "Connected BigCommerce, SAP, Salsify, Avalara, fulfillment, and Klaviyo into one consumer flow, replacing retail-era workflows with a parcel-ready DTC operation on a five-month timeline.",
          "outcome": "SC Johnson's enterprise stack operated like a direct commerce business for the first time, with retail relationships intact at launch and after."
        },
        {
          "problem": "Every new SC Johnson brand launch risked becoming a separate, costly technology project.",
          "decision": "Structured the Mrs. Meyer's build as a reusable pattern, making deliberate architecture decisions that Caldrea and Method could follow without rebuilding.",
          "outcome": "The architecture and delivery model were reused for Caldrea and Method, turning one launch into a repeatable SC Johnson home-care DTC platform."
        }
      ]
    }
  },
  "evidence": {
    "eyebrow": "Delivery Proof",
    "title": "Delivery Phases",
    "intro": "Five months. A 25-person team. Ten-plus system integrations. No existing DTC playbook at SC Johnson. I moved discovery, design, integration, validation, and vendors toward one date without letting the enterprise politics slow the clock.",
    "testimonial": {
      "quote": "Working with Jim was a life-changing experience.",
      "attributionTitle": "Jon Michael",
      "attributionSubtitle": "Stakeholder, SCJ Program Team",
      "avatarSrc": "/mm/jon-michael.jpeg"
    },
    "validationItems": [
      {
        "eyebrow": "Phase 01",
        "title": "Diagnose",
        "copy": "Mapped gaps across DTC capabilities, enterprise systems, and fulfillment — identifying what SC Johnson's stack could handle and what needed to be purpose-built for consumer commerce."
      },
      {
        "eyebrow": "Phase 02",
        "title": "Align",
        "copy": "Brought SC Johnson, BigCommerce, agencies, and downstream system owners onto one execution path, resolving the vendor and stakeholder misalignment that was the biggest threat to the timeline."
      }
    ]
  },
  "recognition": {
    "eyebrow": "Recognition",
    "title": "Press & Accolades",
    "intro": "The strongest proof here was: the launch worked, BigCommerce leadership recognized it internally, and the pattern became the foundation for more SCJ home-care brands to follow. Plus Jon Michael is super quotable.",
    "editorialImage": {
      "src": "/mm/kudos-mrsmeyers-01.png",
      "alt": "Mrs. Meyer's recognition banner",
      "width": 1600,
      "height": 900
    },
    "rows": []
  },
  "relatedStudies": {
    "slugs": [
      "method",
      "newyorklife"
    ]
  },
  "finalCta": {
    "eyebrow": "Next step",
    "title": "See how the model carried forward to Method.",
    "copy": "Mrs. Meyer's was the pioneer. Method was the follow-on — a homegrown system rescue with SEO protection and AEM/AEP implementation built on top of what SC Johnson proved here."
  }
} as CaseStudyRevampData
