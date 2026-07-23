import type { CaseStudyRevampData } from "./types"

export type ModereSolutionContent = { eyebrow: string; title: string; intro: string; closingCopy: string }
export const modereSolutionContent = {
  eyebrow: "Solution",
  title: "One Commerce System, Many Growth Paths",
  intro: "I shaped a composable, API-first commerce platform designed for scalability and less friction for affiliates and customers. One system. Many markets. Business teams in control of the commercial operations that used to require engineering.",
  closingCopy: "This is what good platform work looks like - less friction for the business, less chaos for the teams, and more room for revenue growth.",
} satisfies ModereSolutionContent

export const modereRevampCaseStudy = {
  "slug": "modere",
  "breadcrumbCurrent": "Modere",
  "metadata": {
    "title": "Modere Preview",
    "description": "Internal preview route for the Modere revamp case study.",
    "image": {
      "src": "/modere/hero-modere-01.png",
      "alt": "Modere composable commerce platform hero image",
      "width": 2880,
      "height": 1164
    }
  },
  "hero": {
    "eyebrow": "BigCommerce · Composable Commerce · Health & Beauty · Affiliate Commerce",
    "title": "Winning Awards and Making $1B With Modere",
    "intro": "Modere wanted to break past $500M in revenue and push toward $1B, but the existing stack was too brittle, too custom, and too dependent on engineers for routine commercial work. I helped push the platform toward a composable architecture and protect the system decisions that gave the business a cleaner path to scale - across 10 markets, 7 languages, and a political environment that was actively working against the right outcome. The result earned a MACH Impact Award nomination.",
    "metrics": [
      {
        "value": "$1",
        "suffix": "B",
        "label": "Revenue Target Reached"
      },
      {
        "value": "43",
        "suffix": "%",
        "label": "Conversion Uplift"
      },
      {
        "value": "10",
        "suffix": "",
        "label": "Markets Supported"
      }
    ],
    "image": {
      "kind": "image",
      "src": "/modere/hero-modere-01.png",
      "alt": "Modere composable commerce platform hero image",
      "aspectRatio": "16/9"
    }
  },
  "productionQuote": {
    "quote": "We can't keep scaling this business market by market on custom work; we need a scalable solution.",
    "attributionTitle": "Shan Sullivan",
    "attributionSubtitle": "SVP, Technology, Modere",
    "avatarSrc": "/modere/shan-sullivan.jpeg"
  },
  "executiveBrief": {
    "eyebrow": "At-a-Glance",
    "title": "Commerce at Scale",
    "copy": "Modere wasn't short on demand. It was short on scale. Leadership wanted to break past $500M and push toward $1B, but the existing stack was too brittle, too custom, and too dependent on engineers to get there cleanly. Affiliate signup, checkout, promotions, mobile, and market expansion were all dragging, and the politics around the work made it harder.",
    "tools": [
      {
        "label": "BigCommerce",
        "icon": "/tool-icons/svg/bc-logo-blk.svg"
      },
      {
        "label": "Pimcore",
        "icon": "/tool-icons/svg/pimcore-logo.svg"
      },
      {
        "label": "Contentstack",
        "icon": "/tool-icons/svg/contentstack-logo.svg"
      },
      {
        "label": "Azure",
        "icon": "/tool-icons/svg/azure-logo.svg"
      }
    ],
    "problem": "Every market was building its own version of the product. Nothing was shared. The company was trying to hit $1B in revenue but the technology was holding it back - and the original agency wasn't going to deliver the right platform.",
    "mandate": "Stop every team from building their own thing. Get all partners using one shared, scalable composable system.",
    "whatIChanged": "I defined the single architecture every market had to follow, aligned three vendors around one shared delivery plan, eliminated one-off custom builds market by market, and protected the architecture from scope creep and vendor drift.",
    "outcome": "$1B revenue target reached. 43% conversion uplift. 35% faster site. 10 markets supported on one composable system. MACH Impact Award nomination.",
    "facts": [
      {
        "icon": "role",
        "label": "Role",
        "value": "Senior Product Manager & Program Manager"
      },
      {
        "icon": "client",
        "label": "Client",
        "value": "Modere"
      },
      {
        "icon": "client",
        "label": "Industry",
        "value": "Health & Beauty • Affiliate Commerce"
      },
      {
        "icon": "timeline",
        "label": "Timeline",
        "value": "Mar 2023 - Jun 2024 · 16 months"
      },
      {
        "icon": "team",
        "label": "Team / Stakeholders",
        "value": "20-person team"
      },
      {
        "icon": "budget",
        "label": "Budget / Scale",
        "value": "$6M program budget"
      },
      {
        "icon": "systems",
        "label": "Systems / Technology",
        "value": "BigCommerce, Pimcore, Contentstack, MobiLoud; 20+ system integrations"
      }
    ]
  },
  "challenge": {
    "eyebrow": "Problem Statement",
    "title": "Platform Couldn't Scale",
    "paragraphs": [
      "Modere wasn't short on demand. It was short on scale. Leadership wanted to break past $500M and push toward $1B, but the existing stack was too brittle, too custom, and too dependent on engineers to get there cleanly. Affiliate signup, checkout, promotions, mobile, and market expansion were all dragging, and the politics around the work made it harder.",
      "Every country was building its own version of the product. Nothing was shared. New markets created more custom work than leverage, and the engineering team had become the bottleneck for too much of the commercial operation - promotions, product updates, market changes, and affiliate experiences all carried friction that didn't need to exist. The business was being constrained by its own infrastructure.",
      "The original agency wasn't going to deliver the right platform. I saw that early. Helping bring in the right partner and protecting the composable vision through the internal politics that followed was as much the job as the delivery work itself. This wasn't just a technology problem - it was a political transformation that needed stronger architecture, the right partners, and the discipline to avoid bad compromises."
    ],
    "visual": {
      "kind": "image",
      "src": "/modere/hero-modere-02.png",
      "alt": "Modere global commerce and architecture overview",
      "aspectRatio": "16/9"
    },
    "caption": "The affiliate and market complexity that made the old stack unsustainable."
  },
  "ownership": {
    "eyebrow": "My Role",
    "title": "Senior Product Manager & Program Manager",
    "summary": "I sat at the center of product, program, and architecture. My job was to hold the composable vision through the politics and stop the platform from collapsing into another expensive half-measure.",
    "decisions": [
      {
        "title": "Identified the Wrong Partner Early",
        "copy": "The original agency wasn't going to deliver the right platform. I recognized that before the build was far enough along to make changing course catastrophic, helped bring in the right partner, and made the architecture real instead of theoretical."
      },
      {
        "title": "Insisted on Composable Over Another Brittle Rebuild",
        "copy": "The easier path was another all-in-one platform rebuild. I pushed for composable - a thin commerce layer, Pimcore as the product brain, and clean separation between content, checkout, and business logic. That decision gave Modere a system that could scale to new markets without generating more custom work each time."
      },
      {
        "title": "Positioned Pimcore as the Product Brain",
        "copy": "Centralizing product data, pricing, promotions, and inventory logic in Pimcore - rather than baking it into the commerce layer - was the architectural decision that made the platform commercially useful. It gave business teams control over 4,000+ SKUs and 26 global warehouses without engineering tickets for routine updates."
      },
      {
        "title": "Aligned Three Vendors Around One Delivery Plan",
        "copy": "BigCommerce, Pimcore, and the delivery agency were operating with misaligned priorities. I structured a shared delivery plan that kept all three moving toward the same architecture and prevented the platform from fragmenting into separate systems with incompatible assumptions."
      },
      {
        "title": "Protected the Architecture From Scope Creep and Political Pressure",
        "copy": "Internal politics and vendor drift were the two forces most likely to turn the composable vision into another expensive compromise. My job was to hold the line - on architecture decisions, on what went into which system, and on which trade-offs were acceptable. That discipline is why the platform could support 10 markets without collapsing."
      }
    ]
  },
  "solution": {
    "mode": "diagram",
    "background": "gray",
    "eyebrow": "Solution",
    "title": "One Commerce System, Many Growth Paths",
    "copy": "I shaped a composable, API-first commerce platform designed for scalability and less friction for affiliates and customers. One system. Many markets. Business teams in control of the commercial operations that used to require engineering.",
    "architecture": [],
    "summary": "This is what good platform work looks like - less friction for the business, less chaos for the teams, and more room for revenue growth."
  },
  "impact": {
    "eyebrow": "Impact",
    "title": "Growth, Conversion, and Scale",
    "intro": "The architecture turned interconnected systems into commercial leverage - a better path to scale, a better affiliate experience, and a system built for growth.",
    "metrics": [
      {
        "value": "$1",
        "suffix": "B",
        "label": "Revenue Target Reached",
        "detail": "Revenue target reached after the prior platform had constrained scale."
      },
      {
        "value": "43",
        "suffix": "%",
        "label": "Conversion Uplift",
        "detail": "Post-launch conversion improvement across markets."
      },
      {
        "value": "35",
        "suffix": "%",
        "label": "Faster Site",
        "detail": "Site performance improvement on the composable stack."
      },
      {
        "value": "4",
        "suffix": "wk",
        "label": "Mobile Launch Timeline",
        "detail": "10 markets and 7 languages launched through MobiLoud in four weeks."
      }
    ],
    "transformation": {
      "eyebrow": "Before & After",
      "title": "Custom Work & Friction to Composable & Scalable",
      "rows": [
        {
          "problem": "Every market was building its own version of the product. New market entry created more custom work than commercial leverage, and the business couldn't scale without the engineering team as a constant bottleneck.",
          "decision": "I pushed for a composable architecture with a thin commerce layer and Pimcore as the product brain, rather than another brittle all-in-one rebuild.",
          "outcome": "One shared system supported 10 markets and 7 languages without generating a new custom build each time, and the $1B revenue target was reached."
        },
        {
          "problem": "The original agency wasn't going to deliver the right platform, and internal politics were pulling the architecture toward another expensive compromise.",
          "decision": "I identified the wrong partner early, helped bring in the right one, and held the composable vision through the political pressure that followed.",
          "outcome": "The platform was built on the right foundation. The MACH Alliance nominated Modere's implementation as a serious real-world composable commerce build."
        },
        {
          "problem": "Promotions, product updates, affiliate experiences, and market changes all required engineering involvement, making the commercial operation slow and friction-heavy.",
          "decision": "I kept business logic out of the commerce layer and put it in Pimcore, so business teams could manage commercial operations without engineering tickets.",
          "outcome": "Business teams gained control over products and promotions without waiting on IT. Affiliate and customer commerce flows saw 43% conversion uplift and 35% site speed improvement."
        }
      ]
    }
  },
  "evidence": {
    "eyebrow": "Delivery Proof",
    "title": "What the Work Actually Produced",
    "intro": "The architecture didn't just look good on a slide. It earned an award nomination, outside validation from platform partners, and was strong enough to be recognized in the MACH ecosystem as a serious composable commerce implementation.",
    "testimonial": {
      "quote": "Jim protected the architecture and kept the team from building the wrong thing.",
      "attributionTitle": "Chris Beck",
      "attributionSubtitle": "CTO, Modere",
      "avatarSrc": "/modere/chris-back.jpeg"
    },
    "validationItems": [
      {
        "eyebrow": "Architecture",
        "title": "Composable Held Under Pressure",
        "copy": "The composable vision survived internal politics, a partner change, and 16 months of delivery pressure without collapsing into a brittle all-in-one compromise. That outcome was the result of specific architecture decisions made and defended throughout the program."
      },
      {
        "eyebrow": "Market Expansion",
        "title": "10 Markets, One System",
        "copy": "The platform launched across 10 markets and 7 languages without generating a separate custom build for each one. Mobile launched across the same footprint in 4 weeks - a result that would have been operationally impossible on the prior stack."
      },
      {
        "eyebrow": "Business Independence",
        "title": "Engineering Out of the Commercial Loop",
        "copy": "Business teams could launch products, manage promotions, and operate affiliate flows without engineering dependency. That structural change - not the tech stack selection - is what made the platform commercially useful."
      }
    ]
  },
  "recognition": {
    "eyebrow": "Recognition",
    "title": "Press & Recognition",
    "intro": "The architecture earned an award nomination, outside validation from platform partners, and MACH recognition as a serious real-world composable commerce implementation.",
    "editorialImage": {
      "src": "/modere/mach-award.png",
      "alt": "MACH Alliance Impact Award nomination for Modere composable commerce",
      "width": 2960,
      "height": 824
    },
    "rows": [
      {
        "publisher": "MACH Alliance",
        "date": "2025",
        "summary": "The MACH Alliance nominated Modere's composable commerce architecture for a MACH Impact Award, recognizing it as a serious real-world implementation of composable, best-of-breed commerce.",
        "pdfHref": "/modere/files/05-mach-alliance-award.pdf"
      },
      {
        "publisher": "Guidance",
        "date": "2024",
        "summary": "Guidance documented Modere's headless BigCommerce implementation across seven markets, including custom promotions, shareable cart behavior, and deep back-office integrations.",
        "pdfHref": "/modere/files/01-guidance-modere-case-study.pdf"
      },
      {
        "publisher": "Hamari",
        "date": "2024",
        "summary": "Hamari documented how Modere used its referral and social commerce platform to drive customer acquisition and loyalty growth across the new composable commerce stack.",
        "pdfHref": "/modere/files/02-hamari-modere-case-study.pdf"
      },
      {
        "publisher": "Pimcore",
        "date": "2024",
        "summary": "Pimcore highlighted how Modere centralized product data, pricing, and inventory logic across 4,000+ SKUs and 26 global warehouses while reducing time to market and duplicated data.",
        "pdfHref": "/modere/files/03-pimcore-modere-case-study.pdf"
      },
      {
        "publisher": "MobiLoud",
        "date": "2024",
        "summary": "MobiLoud documented how Modere launched a wrapper-based mobile app strategy across 10 markets and 7 languages in four weeks on a single codebase.",
        "pdfHref": "/modere/files/04-mobiloud-modere-case-study.pdf"
      }
    ]
  },
  "relatedStudies": {
    "slugs": [
      "foh",
      "bi"
    ]
  },
  "finalCta": {
    "eyebrow": "Next step",
    "title": "If this preview looks right, we can wire it into the live case study next.",
    "copy": "Use this preview route to confirm the hierarchy, spacing, and interactive simulation before any live Modere migration."
  }
} as CaseStudyRevampData
