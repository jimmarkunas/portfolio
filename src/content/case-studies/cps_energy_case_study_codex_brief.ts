// CPS Energy case study content brief
// Purpose: Give Claude Code / Codex a single source of truth for implementing
// the CPS Energy case study page without inventing new structure, copy, or patterns.
// Follow the existing case study template and design-system rules already established in the repo.
//
// Implementation rules:
// 1) Do not rewrite the narrative voice into generic PM language.
// 2) Keep copy in first person where the template expects personal ownership.
// 3) Do not introduce extra sections beyond the approved template.
// 4) Reuse shared primitives where available: SectionShell, EyebrowPill, TagPill, StatCard, PullQuote, Timeline.
// 5) Preserve intentional mobile / tablet / desktop behavior.
// 6) Do not replace specific metrics with softer phrasing.
// 7) If the repo type differs slightly from this object shape, map fields conservatively instead of rewriting content.

export const cpsEnergyCaseStudy = {
  slug: "cps-energy",
  seo: {
    title: "CPS Energy: Smart Streetlight & Smart City Operations",
    description:
      "I turned a slow-moving utility initiative into an award-winning customer and operations story by connecting resident reporting, field workflows, and utility systems into one working service model.",
  },

  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "CPS Energy" },
    ],
    title: "CPS Energy: Smart Streetlight & Smart City Operations",
    intro:
      "Residents were reporting dark streets, support teams were juggling fragmented systems, and city leaders were taking heat for a service model nobody could clearly explain. I led the product, program, and solutioning work to connect customer reporting, field operations, and core utility systems into one working flow that cut calls, sped up repairs, and helped turn a public optics problem into an award-winning smart city story.",
    primaryCta: {
      label: "View Recognition",
      href: "#recognition",
    },
    secondaryCta: {
      label: "View CV",
      href: "/jim-markunas-cv",
    },
    image: {
      src: "/case-studies/cps-energy/hero.jpg",
      alt: "CPS Energy smart streetlight interface and operational systems overview",
    },
  },

  atAGlance: {
    eyebrow: "At-a-glance",
    title: "Public service, rebuilt",
    copy:
      "This engagement sat at the intersection of customer experience, field operations, vendor integration, and public-sector delivery. I helped turn a slow, opaque streetlight repair process into a more visible, measurable, and operationally coherent service model.",
    stats: [
      {
        value: "73",
        suffix: "%",
        label: "Fewer repair calls",
      },
      {
        value: "1–4",
        suffix: " days",
        label: "New fix window",
      },
      {
        value: "43",
        suffix: "%",
        label: "Fewer truck rolls",
      },
      {
        value: "135",
        suffix: "K+",
        label: "Streetlights in scope",
      },
    ],
  },

  problem: {
    eyebrow: "Problem Statement",
    title: "A public utility service model that felt broken",
    media: {
      kind: "video-placeholder",
      title: "Homes in Darkness: Local News Coverage",
      subtitle: "Use the existing news clip or a still from the segment if video is not embedded",
      aspectRatio: "16/9",
    },
    overview:
      "The story started as a complaint, not a clean project brief. Residents in San Antonio were going to local TV because whole blocks were left in the dark for weeks. Under the hood, the issue was less about bulbs and more about bureaucracy, legacy systems, unclear ownership, and a workflow spread across 311, IVR, SAP, dispatch tools, and manual handoffs. CPS had the city mandate and the vendor relationship, but not a unified operating model that residents or stakeholders could trust.",
    projectOverviewRows: [
      { label: "Project", value: "Smart Streetlights and Smart City Operations" },
      { label: "Client", value: "CPS Energy & Dalkia" },
      { label: "Industry", value: "Utilities / Public Service / Smart City" },
      { label: "Location", value: "San Antonio, Texas" },
      { label: "Timeline", value: "August 2024 – April 2025" },
    ],
    tools: [
      { label: "SAP", icon: "/tool-icons/sap.svg" },
      { label: "GIS", icon: "/tool-icons/gis.svg" },
      { label: "Terrago", icon: "/tool-icons/terrago.svg" },
      { label: "Swift / iOS", icon: "/tool-icons/swift.svg" },
      { label: "Figma", icon: "/tool-icons/figma.svg" },
    ],
    quote: {
      quote:
        "For us, this is more than just a streetlight program. It is about creating a safer, greener, and more connected San Antonio.",
      attributionTitle: "Richard Medina",
      attributionSubtitle: "Chief Energy Delivery Officer, CPS Energy",
    },
  },

  role: {
    eyebrow: "My Role",
    title: "Program, product, and solution lead",
    copy:
      "I was brought in to align the stakeholders, shape the service model, and get the ecosystem working end to end. That meant leading scope, UX, system flow, vendor coordination, and the political conversations required to move a public utility initiative through legacy constraints.",
    tags: [
      "Program Leadership",
      "Product Strategy",
      "Solutioning",
      "Stakeholder Alignment",
      "UX Direction",
    ],
    stats: [
      {
        value: "1",
        suffix: "",
        label: "Unified service flow",
      },
      {
        value: "3",
        suffix: "",
        label: "Core systems aligned",
      },
      {
        value: "2",
        suffix: "",
        label: "Organizations coordinated",
      },
      {
        value: "1",
        suffix: " POC",
        label: "That unlocked alignment",
      },
    ],
    narrative: {
      title: "I made the machine work together",
      paragraphs: [
        "This was not a project where I could hide behind status updates. The real work was getting CPS, Dalkia, and internal stakeholders to agree on scope, sequence, and what a working service model actually looked like. I led the conversations that forced clarity, especially when ownership was fuzzy and the legacy process made everyone default to workarounds.",
        "I personally pushed three decisions that changed the trajectory of the engagement. First, I got Dalkia aligned on using in-field iPads tied into both Dalkia and CPS systems so crews could receive work, update status, and send information back in real time. Second, I led the UI direction for the CPS web experience so residents could report the exact streetlight and stop falling into a black hole. Third, I brought stakeholder groups together to prioritize the SAP work over competing roadmap items and kept the negotiations moving until the system path was clear.",
        "The turning point came when the working POC gave everyone something concrete to rally around. Once stakeholders could see the customer flow, the streetlight mapping, and the status logic in action, the project stopped being abstract. That shifted the final stretch from debate into delivery.",
      ],
      highlights: [
        "Aligned CPS, Dalkia, and internal contributors around one scoped operating model.",
        "Led the system and UX design for the resident reporting experience.",
        "Negotiated SAP prioritization to unblock the integration path.",
        "Used the working POC as the forcing function that unified the room.",
      ],
      closing:
        "This is the kind of work I am best at: reading the politics, simplifying the problem, and getting a fragmented delivery environment pointed at a real business outcome.",
    },
  },

  solution: {
    eyebrow: "Solution",
    title: "A visible, connected service model for residents and crews",
    copy:
      "I helped shape a service experience that gave residents one front door, gave field teams real-time operational flow, and gave CPS leadership a cleaner view of outages, work, and progress. The value was not just the interface. It was the new operating model underneath it.",
    cards: [
      {
        category: "Resident Experience",
        readTime: "2 min read",
        title: "Residents could report the exact streetlight on an interactive map and track repair progress.",
        art: "ux",
      },
      {
        category: "Field Operations",
        readTime: "2 min read",
        title: "In-field iPad workflows let crews receive, update, and close work in real time.",
        art: "motion",
      },
      {
        category: "Systems Integration",
        readTime: "2 min read",
        title: "Terrago, SAP, ARM, and GIS were connected into a more coherent repair and status pipeline.",
        art: "olive",
      },
    ],
  },

  supplementalNarrative: {
    title: "What changed underneath the interface",
    paragraphs: [
      "Before this work, the process was fragmented across call centers, IVR, SAP, dispatch, and follow-up orders that could close in one place and remain unresolved somewhere else. The new direction connected customer reporting to field execution more directly, with operational visibility that could support both repair work and broader smart-city reporting.",
      "The resident-facing website experience mattered because it removed guesswork. Customers no longer had to call and hope someone could figure out which asset they meant. They could select the exact streetlight from a map, submit the issue digitally, and receive updates on the repair path.",
      "The field workflow mattered because it made the operation faster and more accountable. Dalkia and CPS workers could receive and assign work orders in real time, send updates and invoices back to CPS systems, and feed repair status back into the customer journey instead of leaving it disconnected from operations.",
    ],
    highlights: [
      "Interactive map-based outage reporting replaced guesswork and repeat calls.",
      "Real-time work-order updates tightened the loop between crews and customer communication.",
      "Shared operational views reduced dependence on fragmented spreadsheets and email chains.",
    ],
    closing:
      "This was a service redesign disguised as a technology project. The software mattered because it forced a better way of working.",
  },

  impact: {
    eyebrow: "Impact",
    title: "What changed",
    intro:
      "The results prove this was not a cosmetic launch. It improved customer behavior, operating speed, and service efficiency in a program already under public scrutiny.",
    proofPoints: ["Lower friction", "Faster repairs", "Better visibility"],
    stats: [
      {
        value: "73",
        suffix: "%",
        label: "Fewer repair calls",
      },
      {
        value: "3w → 1–4",
        suffix: " days",
        label: "Repair time improvement",
      },
      {
        value: "43",
        suffix: "%",
        label: "Truck-roll reduction",
      },
      {
        value: "2025",
        suffix: "",
        label: "Global Smarty 20 award",
      },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "The biggest shift was from opacity and delay to visibility and action. Residents got a clearer service path, and CPS got a more workable operating model.",
      columns: [
        {
          label: "Before",
          title: "Opaque and reactive",
          points: [
            "Residents had to call to report outages.",
            "Repair status disappeared into fragmented workflows.",
            "Crews and support teams worked across disconnected systems.",
            "Leadership lacked one clear view of performance and backlog.",
          ],
        },
        {
          label: "After",
          title: "Visible and measurable",
          points: [
            "Residents could report the exact streetlight digitally.",
            "Repair progress could be surfaced back to the customer.",
            "Field updates flowed in real time through the operating process.",
            "Program data became usable for service and smart-city reporting.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "01",
        title: "Expose the real problem",
        copy:
          "I reframed the issue from isolated repair complaints into a systems and ownership problem that was hurting service credibility.",
      },
      {
        step: "02",
        title: "Align the operating model",
        copy:
          "I brought CPS, Dalkia, and internal stakeholders around one scoped service flow, one system path, and one set of priorities.",
      },
      {
        step: "03",
        title: "Ship the working proof",
        copy:
          "The POC made the future state tangible, accelerated buy-in, and helped move the final stretch from politics into execution.",
      },
    ],
  },

  delivery: {
    eyebrow: "Implementation",
    title: "How I moved it forward",
    introTitle: "Delivery in a politically messy environment",
    introCopy:
      "This work required more than backlog management. It needed sequencing, negotiation, and enough clarity to move legacy systems, vendor behavior, and public-sector expectations toward one outcome without losing momentum.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the legacy flow, stakeholder gaps, and system blockers behind the public-facing service failure.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Brought CPS, Dalkia, and internal teams into agreement on scope, ownership, and SAP prioritization.",
        ringClass: "border-[#447ACB]",
        labelClass: "text-[#447ACB]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Led the resident experience and system flow design for reporting, repair status, and crew updates.",
        ringClass: "border-[#8A5CF6]",
        labelClass: "text-[#8A5CF6]",
      },
      {
        phase: "Phase 04",
        title: "Prove",
        copy: "Used the working POC to create alignment and push the program into the final delivery stretch.",
        ringClass: "border-[#10B981]",
        labelClass: "text-[#10B981]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Connected the new resident flow and field process into a more visible, measurable service model.",
        ringClass: "border-[#EF4444]",
        labelClass: "text-[#EF4444]",
      },
    ],
  },

  challengeQuote: {
    quote:
      "You can hire someone else to manage the work. You hire me when the work actually has to succeed.",
    attributionTitle: "Jim Markunas",
    attributionSubtitle: "Program / Product / Transformation Leader",
  },

  recognition: {
    eyebrow: "Recognition",
    title: "Award-winning public-service modernization",
    intro:
      "This project mattered because the outcomes were visible to residents, city leaders, and the broader smart-city ecosystem. The work helped transform a negative local narrative into a recognized example of utility modernization with measurable service improvement.",
    featured: {
      media: {
        kind: "image",
        src: "/case-studies/cps-energy/recognition-featured.jpg",
        alt: "Recognition media for CPS Energy smart streetlight modernization",
        aspectRatio: "16/9",
      },
      company: "Global Smarty Awards / CPS Energy",
      dates: "2025",
      summary:
        "The streetlight operations initiative was recognized with the 2025 Global Smarty 20 Award, reflecting the broader smart-city and operational impact of the work.",
      tags: ["Smart City", "Award", "Public Sector"],
    },
    rows: [
      {
        company: "CPS Energy / San Antonio",
        dates: "2024–2025",
        summary:
          "The initiative turned public complaints about dark streets into a more transparent repair experience and a measurable operations story.",
        tags: ["CX", "Operations"],
      },
      {
        company: "Resident Reporting Experience",
        dates: "Launch period",
        summary:
          "Interactive outage reporting and status updates reduced reliance on support calls and made the repair path easier to trust.",
        tags: ["Digital Service", "Visibility"],
      },
      {
        company: "Field Workflow Modernization",
        dates: "Launch period",
        summary:
          "In-field iPad workflows and system integration improved real-time coordination between crews, dispatch, and customer communication.",
        tags: ["Field Ops", "Integration"],
      },
    ],
  },
};

export default cpsEnergyCaseStudy;
