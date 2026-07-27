import type { CaseStudyRevampData } from "./types"

export const muradRevampCaseStudy = {
  "slug": "murad",
  "breadcrumbCurrent": "Murad",
  "metadata": {
    "title": "Murad: From Chaos to Creation",
    "image": {
      "src": "/murad/hero-murad-01.png",
      "alt": "Murad global DTC replatform hero image",
      "width": 1600,
      "height": 900
    }
  },
  "hero": {
    "eyebrow": "At-a-Glance",
    "title": "Murad: From Chaos to Creation",
    "intro": "Murad needed a cheaper, cleaner path off Magento and a subscription-first global DTC model that could sit on top of Oracle EBS and a messy pile of enterprise integrations. By the time I came in, two agencies were fired, the politics were bad, and three weeks before launch we learned BigCommerce couldn’t settle credit card payments via API",
    "metrics": [
      {
        "value": "3",
        "suffix": "",
        "label": "Countries"
      },
      {
        "value": "12",
        "suffix": "",
        "label": "Named Integrations"
      },
      {
        "value": "2",
        "suffix": "",
        "label": "Custom Platform Changes"
      }
    ],
    "image": {
      "kind": "image",
      "src": "/murad/hero-murad-01.png",
      "alt": "Murad global DTC replatform hero image",
      "aspectRatio": "16/9"
    }
  },
  "productionQuote": {
    "quote": "I needed a PM who could save the day. After Murad changed agencies twice, and my PM walked off the job, I personally requested Jim.",
    "attributionTitle": "Neely Cox",
    "attributionSubtitle": "Enterprise Account Manager, BigCommerce",
    "avatarSrc": "/murad/neely-cox.jpeg"
  },
  "executiveBrief": {
    "eyebrow": "At-a-Glance",
    "title": "Subscription-First Under Fire",
    "copy": "This wasn’t a normal replatform. It was a messy global shift from Magento to BigCommerce, built around subscriptions, tied into Oracle EBS and a long list of custom partners, with a rough and tumble client hell-bent on hitting their launch date. My job was to keep the stack together, calm the politics, and leave the business with something it could actually operate.",
    "tools": [
      {
        "label": "BigCommerce",
        "icon": "/tool-icons/svg/bc-logo-blk.svg"
      },
      {
        "label": "Oracle EBS",
        "icon": "/tool-icons/svg/oracle-logo.svg"
      },
      {
        "label": "OrderGroove",
        "icon": "/tool-icons/svg/ordergroove-logo.svg"
      },
      {
        "label": "Contentful",
        "icon": "/tool-icons/svg/contentful-logo.svg"
      },
      {
        "label": "SendGrid",
        "icon": "/tool-icons/svg/sendgrid-logo.svg"
      },
      {
        "label": "Avalara",
        "icon": "/tool-icons/svg/avalara-logo.svg"
      },
      {
        "label": "Yotpo",
        "icon": "/tool-icons/svg/yotpo-logo.svg"
      }
    ],
    "problem": "Murad wanted off Magento. For them, the platform was expensive and too dependent on developer support. The problem? The replacement had no room for simplicity. BigCommerce had to sit on top of Oracle EBS, support subscriptions through OrderGroove (an integration that didn't exist), and carry a global rollout across the US, UK, and MY. When I got pulled in, two agencies had already churned, and core order, payment, shipment, and refund flows were nonexistent.",
    "mandate": "I was the person holding together architecture, launch planning, executive escalation, partner management, and day-to-day client survival. In plain English, I was the program manager, solution engineer, and client therapist at the same time.",
    "whatIChanged": "BigCommerce was going to have to bend to the client, because the client wasn’t going to bend to the platform. Murad was used to Magento, the business was under-staffed, the agencies were unstable, and the only way this was going to ship was if Neely & I documented the real order and payment logic, forced the right escalations, and kept the whole thing from collapsing into blame.",
    "outcome": "Murad got a global launch model, a smooth cutover, and a path off Magento that reduced dependence on a large internal dev team.",
    "facts": [
      {
        "icon": "role",
        "label": "Role",
        "value": "Program Manager & Solutions Architect"
      },
      {
        "icon": "client",
        "label": "Client",
        "value": "Murad (Unilever)"
      },
      {
        "icon": "client",
        "label": "Industry",
        "value": "Beauty • Skincare • eCommerce"
      },
      {
        "icon": "timeline",
        "label": "Timeline",
        "value": "2019 Launch + Global Fast-Follows"
      },
      {
        "icon": "team",
        "label": "Team / Stakeholders",
        "value": "15"
      },
      {
        "icon": "budget",
        "label": "Budget / Scale",
        "value": "$1M"
      },
      {
        "icon": "systems",
        "label": "Systems / Technology",
        "value": "BigCommerce, Oracle EBS, OrderGroove, Contentful, SendGrid, Avalara, Yotpo"
      }
    ]
  },
  "challenge": {
    "eyebrow": "Problem Statement",
    "title": "A Re-Platform Nobody Had Under Control",
    "paragraphs": [
      "Murad wanted off Magento. The platform was expensive, developer-dependent, and couldn't support the global subscription model they needed to grow. But the replacement wasn't simple. BigCommerce had to sit on top of Oracle EBS, subscriptions had to run through OrderGroove using an integration that didn't exist yet, and the rollout had to cover the US, UK, and Malaysia. By the time I was pulled in, two agencies had already walked off the account and core order, payment, shipment, and refund flows were nonexistent.",
      "The technical complexity wasn't the hard part. The hard part was that Unilever was watching. Murad was a prestige skincare brand inside one of the world's largest consumer goods companies, and a failed replatform wouldn't just hurt Murad — it would damage confidence in the entire BigCommerce enterprise program. There was no margin for another failed agency handoff.",
    ],
    "visual": {
      "kind": "image",
      "src": "/murad/hero-murad-02.png",
      "alt": "Murad project schedule and architecture planning materials",
      "aspectRatio": "16/9"
    },
    "caption": "Murad had a strong brand identity."
  },
  "ownership": {
    "eyebrow": "What I Owned",
    "title": "I Transformed Chaos to Execution",
    "summary": "Two agencies had failed before I arrived. My job was to stop the bleeding, own the architecture decisions the prior teams had left unresolved, and get Murad across the line across three markets with a two-person team. That meant driving solution design on the Oracle EBS and OrderGroove integrations, managing partner and executive relationships on both sides, and keeping the client confident enough to stay the course while we rebuilt from a standing start.",
    "decisions": [
      {
        "title": "Order model",
        "copy": "Mapped and solutioned the Oracle EBS order, shipment, and refund logic that the prior agencies had left unresolved, turning it into documented integration requirements engineering could actually build against."
      },
      {
        "title": "Payment escalation",
        "copy": "Identified a payment settlement blocker that would have killed the launch and escalated directly to the BigCommerce CEO to force platform changes before go-live."
      },
      {
        "title": "Subscription architecture",
        "copy": "Defined the subscription model across BigCommerce, Oracle EBS, and OrderGroove, including token vaulting and recurring billing logic that had no prior implementation reference to pull from."
      },
      {
        "title": "Global rollout",
        "copy": "Sequenced and executed cutover across the US, UK, and Malaysia with zero launch issues, then handed the client a self-service commerce model they could actually operate without engineering on call."
      },
      {
        "title": "Client survival",
        "copy": "Kept the client relationship intact through two agency failures, a standing-start rebuild, and a tight timeline, earning unsolicited executive thank-you emails from Murad leadership after launch."
      }
    ]
  },
  "solution": {
    "mode": "three-column-and-diagram",
    "eyebrow": "Solution",
    "title": "A Global Stack Murad Could Actually Run",
    "copy": "I turned Murad's under-documented, partner-heavy eCommerce program into a workable BigCommerce + Oracle + subscriptions model with global rollout logic.",
    "architecture": [],
    "diagramKey": "murad-architecture",
    "summary": "The stack was hard. The client dynamic was harder. Murad was demanding, highly sensitive with partners, and already on its third agency when launch pressure hit full force. Most of the stack relied on custom partners, thin support, or BigCommerce operating outside the usual playbook. That made the real job bigger than architecture. It was keeping the program moving and the launch date credible."
  },
  "impact": {
    "eyebrow": "Impact",
    "title": "Launch, Stability, Independence",
    "intro": "Murad got a global launch model, a smooth cutover, and a path off Magento that reduced dependence on a large internal dev team.",
    "metrics": [
      {
        "value": "3",
        "suffix": "",
        "label": "Markets Launched"
      },
      {
        "value": "2",
        "suffix": "",
        "label": "Custom BC Integrations"
      },
      {
        "value": "0",
        "suffix": "",
        "label": "Launch Issues"
      },
      {
        "value": "0",
        "suffix": "",
        "label": "Magento devs needed"
      }
    ],
    "transformation": {
      "eyebrow": "Before & After",
      "title": "Before & After",
      "rows": [
        {
          "problem": "Magento required heavy developer support.",
          "decision": "I translated undocumented Oracle, payment, and subscription logic into something teams could actually work from.",
          "outcome": "Murad launched 3 global markets."
        },
        {
          "problem": "Marketing changes took weeks.",
          "decision": "When the payment-settlement blocker surfaced late, I escalated it high & fast enough to prevent a launch failure.",
          "outcome": "Launch earned explicit praise from Murad leadership."
        },
        {
          "problem": "Murad's confidence in the program was shaky.",
          "decision": "I held the client, partners, platform, and global rollout together long enough to get the launch done and leave behind a model the business could keep using.",
          "outcome": "Murad had a clean path forward post Magento."
        }
      ]
    }
  },
  "evidence": {
    "eyebrow": "Delivery Proof",
    "title": "Delivery Phases",
    "intro": "This was a messy global launch with no margin for drift. I managed architecture, subscriptions, partner realignment, escalations, and cutover while the client insisted BigCommerce act like Magento.",
    "testimonial": {
      "quote": "Thank you so much for the smooth launch. I know it took a lot of preparation by everyone involved. Very much appreciated by the leadership team at Murad.",
      "attributionTitle": "Van Vuong",
      "attributionSubtitle": "Chief Digital Officer, Murad",
      "avatarSrc": "/murad/van-vuong.jpeg"
    },
    "validationItems": [
      {
        "eyebrow": "Phase 01",
        "title": "Diagnose",
        "copy": "Mapped gaps across Magento parity, ERP, subscriptions, and cross-market rollout."
      },
      {
        "eyebrow": "Phase 02",
        "title": "Stabilize",
        "copy": "Re-aligned client & partner ecosystem after agency churn, and rebuilt confidence."
      }
    ]
  },
  "relatedStudies": {
    "slugs": [
      "method",
      "k2"
    ]
  },
  "finalCta": {
    "eyebrow": "Next step",
    "title": "Review the Murad case study.",
    "copy": "A direct legacy-parity preview."
  }
} as CaseStudyRevampData
