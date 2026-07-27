import type { CaseStudyRevampData } from "./types"

export const cpsRevampCaseStudy = {
  "slug": "cps",
  "breadcrumbCurrent": "CPS Energy",
  "metadata": {
    "title": "CPS Energy: Operations & SAP Field Integration",
    "image": {
      "src": "/cps/hero-cps-01.png",
      "alt": "CPS Energy streetlight operations in San Antonio across a network of more than 225,000 streetlights",
      "width": 1440,
      "height": 582
    }
  },
  "hero": {
    "eyebrow": "SAP · Field Operations · Service Design · Systems Integration · Smart City · Public Utilities",
    "title": "CPS Energy: Streetlight Operations & SAP Field Integration",
    "intro": "San Antonio's streetlight repair process was failing in public. Residents reported the same outages repeatedly, work orders disappeared between CPS Energy, SAP, and Dalkia field crews, and a repair could take three weeks. I led the product and program work that connected resident intake, SAP, dispatch, and field execution into one accountable service loop, cutting repair calls 73%, truck rolls 43%, and repair windows to 1-4 days across 225K+ streetlights. The program won a 2025 Global Smart 20 Award.",
    "metrics": [
      {
        "value": "43",
        "suffix": "%",
        "label": "Fewer Truck Rolls"
      },
      {
        "value": "1-4",
        "suffix": "D",
        "label": "Day Repair Window"
      },
      {
        "value": "225",
        "suffix": "K",
        "label": "Streetlights"
      }
    ],
    "image": {
      "kind": "image",
      "src": "/cps/hero-cps-01.png",
      "alt": "CPS Energy streetlight operations in San Antonio across a network of more than 225,000 streetlights",
      "aspectRatio": "16/9"
    }
  },
  "productionQuote": {
    "quote": "For us, this is more than just a streetlight program, it's about creating a safer, greener, and more connected San Antonio.",
    "attributionTitle": "Richard Medina",
    "attributionSubtitle": "Chief Energy Delivery Officer, CPS Energy",
    "avatarSrc": "/cps/cps-richard-medina-tinified.png"
  },
  "executiveBrief": {
    "eyebrow": "At-a-Glance",
    "title": "Smart City Operations",
    "copy": "A $2M program across two organizations, 15 people, and 6 system integrations. I owned product direction, service design, and end-to-end delivery across the full product lifecycle, from the first resident report through SAP, field dispatch, repair, and closure.",
    "role": "Program & Product Lead",
    "client": "CPS Energy",
    "timeline": "Aug 2024 – Apr 2025",
    "teamStakeholders": "15+",
    "budgetScale": "$2M",
    "systemsTechnology": "SAP · IVR · field iPad workflow · resident reporting · telematics · Maximo/MDS",
    "tools": [
      {
        "label": "Figma",
        "icon": "/tool-icons/svg/figma-logo.svg"
      },
      {
        "label": "Azure",
        "icon": "/tool-icons/svg/azure-logo.svg"
      },
      {
        "label": "SAP",
        "icon": "/tool-icons/svg/sap-logo.svg"
      },
      {
        "label": "Smartsheet",
        "icon": "/tool-icons/svg/smartsheet-logo.svg"
      }
    ],
    "problem": "A broken streetlight could sit unresolved for three weeks. Resident reports, SAP work orders, dispatch decisions, field activity, and closure updates were fragmented across CPS Energy and Dalkia with no single owner and no closed loop.",
    "mandate": "Build one end-to-end service loop from the first resident report or sensor alert through dispatch, field repair, and closure, so work could no longer disappear between handoffs.",
    "whatIChanged": "Mapped the full resident-to-repair journey. Defined the resident reporting experience. Aligned CPS Energy and Dalkia around one operating model. Drove SAP and field-workflow integration. Used a proof of concept to move the program from integration debates into deployment.",
    "outcome": "Repair calls fell 73%. Truck rolls fell 43%. Repair windows dropped from three weeks to 1-4 days. The deployed service supports 1.5 million San Antonio residents. The program won the 2025 Global Smart 20 Award.",
    "facts": [
      {
        "icon": "role",
        "label": "Role",
        "value": "Program & Product Lead"
      },
      {
        "icon": "client",
        "label": "Client",
        "value": "CPS Energy"
      },
      {
        "icon": "client",
        "label": "Industry",
        "value": "Public Utilities • Smart City"
      },
      {
        "icon": "timeline",
        "label": "Timeline",
        "value": "Aug 2024 – Apr 2025"
      },
      {
        "icon": "team",
        "label": "Team / Stakeholders",
        "value": "15+"
      },
      {
        "icon": "budget",
        "label": "Budget / Scale",
        "value": "$2M"
      },
      {
        "icon": "systems",
        "label": "Systems / Technology",
        "value": "SAP · IVR · field iPad workflow · resident reporting · telematics · Maximo/MDS"
      }
    ]
  },
  "challenge": {
    "eyebrow": "Problem Statement",
    "title": "Homes in Darkness",
    "paragraphs": [
      "San Antonio residents were dealing with dark streets, slow repair timelines, and a support experience that gave them no confidence an outage would be resolved. The problem was bigger than maintenance. The service loop was fragmented across resident intake, 311 and call-center channels, IVR, SAP, dispatch, field crews, follow-up orders, and closure with no single thread connecting any of it.",
      "Ownership was divided across CPS Energy and Dalkia, but nobody owned the complete journey. Residents reported the same outage repeatedly because they couldn't see status. Field crews arrived without current work-order information. Follow-up work disappeared between teams. Operations lacked one reliable view of the repair lifecycle.",
      "Dark streets and delayed repairs became local-news material. That meant the program had to fix the service and restore public confidence at the same time: one intake path, one accountable workflow, and one closed loop from report to repair."
    ],
    "visual": {
      "kind": "youtube",
      "videoId": "Ch9cUuG95qI",
      "aspectRatio": "16/9"
    },
    "caption": "Local news documented the streetlight service failure before the modernization program delivered a connected repair loop."
  },
  "ownership": {
    "eyebrow": "What I Owned",
    "title": "Public Consequences, No Owner",
    "summary": "Two organizations. 6 integrations. 15 people. A $2M program that was failing in public. I set the product direction, defined the service architecture, kept CPS Energy and Dalkia aligned, and drove delivery from discovery through deployment.",
    "decisions": [
      {
        "title": "Mapped the Entire Resident-to-Repair Journey",
        "copy": "Before anything could be fixed, the complete failure map had to exist. I traced the breakdown across reporting channels, IVR, SAP work-order creation, dispatch, simple and complex repair paths, field completion, system closure, and follow-up orders."
      },
      {
        "title": "Defined the Resident Reporting Experience",
        "copy": "I led the product and UX direction for a map-based resident reporting tool that let people identify the affected streetlight, submit the issue with location context, and move the request directly into the operating workflow without a phone call."
      },
      {
        "title": "Aligned The Enterprise Around One Service Model",
        "copy": "CPS Energy and Dalkia each owned part of the repair process but neither owned the complete journey. I established shared ownership, clarified handoffs, and kept both organizations working toward one resident-to-repair outcome instead of two parallel operating models."
      },
      {
        "title": "Connected Field Work to SAP",
        "copy": "I drove alignment around the field iPad workflow and SAP integration so crews could receive work orders, complete repairs, trigger follow-up work orders, and close the loop in the system of record without manual handoffs between field and operations."
      },
      {
        "title": "Used Proof of Concept as a Forcing Function",
        "copy": "Abstract integration debates were stalling progress. I partnered with engineering to turn contested system behavior into observable, testable output, moving the program from debate into deployment."
      }
    ]
  },
  "solution": {
    "mode": "three-column-and-diagram",
    "eyebrow": "Solution",
    "title": "One Service Loop From Report to Repair",
    "copy": "One front door for residents. One operational flow across CPS Energy and Dalkia. One accountable path through intake, SAP, dispatch, field work, closure, and follow-up.",
    "operatingModel": {
      "eyebrow": "Operating Model",
      "title": "The Exact Workflow That Closed the Repair Loop",
      "copy": "The resident interface, system workflow, dispatch process, field execution, closure, and follow-up were designed as one accountable service loop."
    },
    "architecture": [
      {
        "eyebrow": "Resident Experience",
        "title": "Find the Exact Streetlight",
        "copy": "Residents could select the affected light on an interactive map and move directly into issue reporting.",
        "bullets": [
          "Streetlight identified by location",
          "Digital issue submission",
          "Less dependence on repeat calls"
        ],
        "image": {
          "src": "/cps/product-cps-01.png",
          "alt": "CPS Energy map showing a selected streetlight and the Report Streetlight Issue action",
          "width": 900,
          "height": 1406
        }
      },
      {
        "eyebrow": "Resident Experience",
        "title": "Capture the Right Context",
        "copy": "The reporting tool carried location and problem details into the service workflow so the request could be acted on.",
        "bullets": [
          "Resident and outage details",
          "Clear path into operations",
          "Connected to the repair lifecycle"
        ],
        "image": {
          "src": "/cps/product-cps-02.png",
          "alt": "CPS Energy Report Streetlight Issue tool with map-based reporting instructions",
          "width": 900,
          "height": 1406
        }
      },
      {
        "eyebrow": "Resident Experience",
        "title": "Close the Resident Loop",
        "copy": "A structured issue form connected the resident-facing experience to the operational work required to resolve the outage.",
        "bullets": [
          "Relevant issue information captured",
          "Field work could follow the report",
          "Repair status could return to the service path"
        ],
        "image": {
          "src": "/cps/product-cps-03.png",
          "alt": "CPS Energy streetlight issue form for submitting customer and outage details",
          "width": 900,
          "height": 1406
        }
      }
    ],
    "summary": "The value didn't come from adding another isolated tool. It came from creating one operating model that CPS Energy and Dalkia could run from the first report through the completed repair."
  },
  "impact": {
    "eyebrow": "Impact",
    "title": "From Public Failure to Smart-City Recognition",
    "intro": "A streetlight program that was making local news for all the wrong reasons delivered 73% fewer repair calls, 43% fewer truck rolls, and repair windows that dropped from three weeks to 1-4 days across 225K+ streetlights serving 1.5 million residents.",
    "editorialImage": {
      "src": "/cps/hero-cps-04.png",
      "alt": "CPS Energy streetlight operations impact",
      "width": 1440,
      "height": 386
    },
    "metrics": [
      {
        "value": "73",
        "suffix": "%",
        "label": "Fewer Repair Calls",
        "detail": "Reduction after digital intake and closed-loop operations"
      },
      {
        "value": "43",
        "suffix": "%",
        "label": "Fewer Truck Rolls",
        "detail": "Reduction through better dispatch and field coordination"
      },
      {
        "value": "1-4",
        "label": "Day Repair Window",
        "detail": "Reduced from approximately three weeks"
      },
      {
        "value": "1.5M",
        "label": "Residents Served",
        "detail": "San Antonio residents supported"
      }
    ],
    "transformation": {
      "eyebrow": "Transformation",
      "title": "From Public Failure to One Measurable Operating Model",
      "rows": [
        {
          "problem": "Residents reported the same outages repeatedly with no visibility into whether anything would be fixed.",
          "decision": "A map-based resident reporting experience connected intake directly to the operating workflow, replacing repeat phone calls with one digital path into the repair system.",
          "outcome": "Repair calls fell 73% after digital intake and closed-loop operations went live."
        },
        {
          "problem": "Field crews arrived without current work-order information and follow-up repairs disappeared between teams.",
          "decision": "The field iPad workflow and SAP integration gave crews live work orders, completion tracking, and automatic follow-up order creation without manual handoffs.",
          "outcome": "Repair windows fell from three weeks to 1-4 days. Truck rolls fell 43%."
        },
        {
          "problem": "CPS Energy and Dalkia each owned part of the repair process but nobody owned the complete journey.",
          "decision": "One shared operating model across both organizations, with clear handoffs, shared visibility into the repair lifecycle, and one accountable service loop from report to closure.",
          "outcome": "The solution launched and deployed successfully, serving 1.5 million San Antonio residents and winning the 2025 Global Smart 20 Award."
        }
      ]
    }
  },
  "evidence": {
    "eyebrow": "Delivery Proof",
    "title": "What the Work Actually Produced",
    "intro": "The program went from local-news failure to a 2025 Smart 20 Award. The press coverage, board records, and project documentation below trace the full arc.",
    "testimonial": {
      "quote": "This is the city's first official initiative to widely install solar-powered LED street lights within city limits. Together we are lighting the path to a brighter future!",
      "attributionTitle": "Ron Nirenberg",
      "attributionSubtitle": "Mayor, San Antonio, Texas",
      "avatarSrc": "/cps/ron-nirenberg.webp"
    },
    "validationItems": []
  },
  "recognition": {
    "eyebrow": "Recognition",
    "title": "From Public Failure to Smart-City Recognition",
    "intro": "The program went from local-news failure to a 2025 Smart 20 Award. The press coverage, board records, and project documentation below trace the full arc.",
    "featured": {
      "media": {
        "kind": "youtube",
        "videoId": "GZMHsAIH1Os",
        "aspectRatio": "16/9"
      },
      "title": "San Antonio New Low-Carbon Streetlights",
      "date": "August 20, 2025",
      "summary": "New solar streetlights set to go up across San Antonio as CPS Energy partners to modernize the city's streetlight network",
      "tags": [
        "Press",
        "ABC News"
      ]
    },
    "rows": [
      {
        "publisher": "MaryScottNabers.com",
        "date": "April 23, 2025",
        "summary": "Texas claimed 5 of the top 20 smart city projects globally, with San Antonio among the honorees at the 2025 Smart 20 Awards",
        "pdfHref": "/cps/files/20250423_CPSE_MSN.pdf"
      },
      {
        "publisher": "TerraGo Technologies",
        "date": "April 15, 2025",
        "summary": "CPS Energy's streetlight and smart city program wins the 2025 Smart 20 Award for innovation, sustainability, and connected operations",
        "pdfHref": "/cps/files/20250415_CPSE_TerraGo.pdf"
      },
      {
        "publisher": "San Antonio Report",
        "date": "August 30, 2024",
        "summary": "San Antonio contracts with Dalkia Energy to install 400 new solar-powered streetlights, addressing gaps in street lighting and improving public safety",
        "pdfHref": "/cps/files/20240830_CPSE_SAReport.pdf"
      },
      {
        "publisher": "CPS Energy Board of Trustees",
        "date": "March 25, 2024",
        "summary": "Board meeting agenda covering the Smart City and streetlight modernization program",
        "pdfHref": "/cps/files/20240325_CPSE_SACityCouncilAgenda.pdf"
      },
      {
        "publisher": "News4SanAntonio (NBC)",
        "date": "March 18, 2024",
        "summary": "Northeast San Antonio residents go without street lighting for months, exposing the urgency of CPS Energy's modernization program",
        "pdfHref": "/cps/files/20240318_CPSE_NBC.pdf"
      },
      {
        "publisher": "Digi.City",
        "date": "February 20, 2024",
        "summary": "Smart Cities Connect announces the 2024 Smart 20 Awards, recognizing the top 20 most innovative smart city projects worldwide",
        "pdfHref": "/cps/files/20240220_CPSE_DigiCity.pdf"
      }
    ]
  },
  "relatedStudies": {
    "slugs": [
      "newyorklife",
      "bi"
    ]
  },
  "finalCta": {
    "eyebrow": "Next",
    "title": "See the compliance platform program that followed.",
    "copy": "CPS Energy was a field operations and SAP integration story. New York Life was a different kind of complexity: 12,000+ agent sites, a litigation-sensitive compliance problem, and an agent retention crisis hiding underneath it."
  }
} as CaseStudyRevampData
