import type { CaseStudyData } from "@/content/case-studies/types"

export const cpsEnergyCaseStudy = {
  slug: "cps",
  breadcrumbCurrent: "CPS Energy",
  hero: {
    title: "CPS Energy: Smart Streetlight & Smart City Operations",
    intro:
      "San Antonio's streets were going dark, residents were losing confidence in a city service nobody could explain, and the repair loop, spanning resident intake, SAP, dispatch, and field crews, had no clear owner. I took accountability for the product, program, and service design that connected all of it, cutting repair calls by 73%, shrinking repair windows from roughly 3 weeks to 1–4 days, and reducing truck rolls by 43%.",
    primaryCta: {
      label: "Book a Call",
      href: "https://calendar.app.google/iwn5AUyWqJadMK2t9",
      external: true,
    },
    secondaryCta: {
      label: "View CV",
      href: "/cv",
    },
    image: {
      src: "/cps/hero-cps-01.png",
      alt: "CPS Energy smart streetlight program",
    },
  },
  atAGlance: {
    eyebrow: "At-a-glance",
    title: "Smart City Modernization",
    copy:
      "San Antonio had 200K+ streetlights and a repair process that was breaking down at every handoff. I owned the product and program work to rebuild it, from resident intake through field execution to system integration, delivering measurable reductions in call volume, truck rolls, and repair time.",
    stats: [
      { value: "73", suffix: "%", label: "Fewer repair calls" },
      { value: "43", suffix: "%", label: "Fewer truck rolls" },
      { value: "1≤4", suffix: "", label: "Day repair window (from ~3 weeks)" },
      { value: "200K", suffix: "+", label: "Streetlights in scope" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Homes in Darkness",
    media: {
      kind: "youtube",
      videoId: "Ch9cUuG95qI",
      aspectRatio: "16/9",
    },
    overview:
      "San Antonio residents were dealing with dark streets, slow repair timelines, and a broken support experience. The problem was bigger than maintenance: the workflow was fragmented across resident intake, call-center, SAP, dispatch, field updates, and follow-up orders. Ownership was unclear across CPS Energy and Dalkia, and the service model was opaque. Project drama played out in public.",
    projectOverviewRows: [
      { label: "Client", value: "CPS Energy" },
      { label: "Industry", value: "Public Utilities / Smart City" },
      { label: "Timeline", value: "August 2024 – April 2025" },
    ],
    tools: [
      { label: "Figma", icon: "/tool-icons/svg/figma-logo.svg" },
      { label: "Azure", icon: "/tool-icons/svg/azure-logo.svg" },
      { label: "SAP", icon: "/tool-icons/svg/sap-logo.svg" },
      { label: "Smartsheet", icon: "/tool-icons/svg/smartsheet-logo.svg" },
    ],
    quote: {
      quote:
        "For us, this is more than just a streetlight program, it's about creating a safer, greener, and more connected San Antonio. By embracing smart technologies, we are enhancing public safety, improving energy efficiency, and paving the way for a more sustainable future.",
      attributionTitle: "Richard Medina",
      attributionSubtitle: "Chief Energy Delivery Officer, CPS Energy",
      avatarSrc: "/cps/cps-richard-medina-tinified.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program & Product Lead",
    copy:
      "6 systems to integrate. 15 people across two organizations that didn't naturally agree. I held the product direction, the program structure, and the accountability that made it all move.",
    tags: [
      "Program Leadership",
      "Product Direction",
      "Service Design",
      "System Integration",
    ],
    stats: [
      { value: "6", suffix: "", label: "System integrations" },
      { value: "$2", suffix: "M", label: "Program budget" },
      { value: "15", suffix: "", label: "Team size" },
      { value: "8", suffix: " mo", label: "Program timeline" },
    ],
    narrative: {
      title: "I Made the Machine Work Together",
      paragraphs: [
        "The street-level symptoms were visible: dark lights, slow repairs, residents calling in the same outage multiple times because nobody closed the loop. The real problem was inside the operation. Ownership was split between CPS Energy and Dalkia with no clear model for who owned what. The workflow ran across SAP, IVR intake, dispatch, and field follow-ups in a way that reliably lost orders between steps.",
        "I owned the product direction for resident reporting and the field operations workflow. I drove SAP to the top of the integration roadmap over competing priorities, a decision that unlocked the critical path. I partnered with engineering to built a proof of concept and used it to end all scope debates. This pushed the project into successful delivery.",
      ],
      highlights: [
        "Built the in-field iPad workflow that gave Dalkia crews real-time work orders, status updates, and a direct data connection back to CPS systems.",
        "Owned the resident reporting product so anyone could find the exact streetlight, submit the issue, and get status back without ever having to call.",
        "Forced SAP integration to the top of the roadmap, held it against competing priorities, and drove it through to a clear delivery path.",
      ],
      closing:
        "This project directly benefitted 1.5 million people in a meaningful way, and changed the course of smart city projects. Plus, we won an award.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "We Built Perpetual Motion Green Tech for Smart Cities",
    copy:
      "One front door for residents. One operational flow for crews. One service model CPS could actually run. This was not a feature rollout, it was a restructured digital product pipeline.",
    cards: [
      {
        category: "Resident Experience",
        readTime: "Map-based reporting",
        title:
          "Interactive reporting let residents identify the exact streetlight and submit issues digitally, replacing a call-center-heavy intake path",
        art: "/cps/product-cps-01.png",
      },
      {
        category: "Field Operations",
        readTime: "In-field iPad workflow",
        title:
          "Crews received work orders in real time, updated status from the field, and returned data to central systems, cleaner handoffs, fewer lost orders",
        art: "/cps/product-cps-02.png",
      },
      {
        category: "Systems Integration",
        readTime: "SAP · Terrago · GIS",
        title:
          "Terrago, SAP, ARM, and GIS connected into a shared operational view, outages, work orders, crews, and citywide inventory in one pipeline",
        art: "/cps/product-cps-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "In This Project, Ditigal Tech & The Streets Danced Together",
    image: "/cps/hero-cps-03.png",
    paragraphs: [
      "Yes, the issue started with smart bulbs, but it was really about lack of end-to-end ownership. Residents reported outages and heard nothing back. Crews showed up to jobs with incomplete orders. Operations had no real-time picture of what was happening across 200K streetlights. The work rebuilt those connections so a report from the street or a ping from a smart streetlight could make automation valuable for $1.5 million people.",
    ],
    highlights: [
      "Digital issue submission by customers + autmated outage tracking reduced city services burden & cash burn across the board.",
      "Real-time field updates replaced follow-up orders that could disappear between teams.",
    ],
    closing:
      "As you'll see in the Press & Accolades section below, this project moved the needle from 'pitchforks & torches' to 'international awards.'",
    closingImage: "/cps/hero-cps-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "The Results I Drove",
    intro:
      "Our war was fought on three fronts: customer experience, crew operations, and the public budget. I led us to victory on all three.",
    proofPoints: ["Bad Press", "PM Leadership", "Good Press"],
    stats: [
      { value: "73", suffix: "%", label: "Fewer repair calls" },
      { value: "43", suffix: "%", label: "Fewer truck rolls" },
      { value: "1≤4", suffix: "", label: "Day repair window" },
      { value: "200K", suffix: "+", label: "Streetlights in scope" },
    ],
    statsImage: "/cps/hero-cps-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "A coherent digital transformation turned fragmented systems into a unified repair & reporting pipeline residents and operators could trust.",
      columns: [
        {
          label: "Before",
          title: "Fragmented",
          points: [
            "Residents used inefficient channels with no visibility.",
            "Operations were fragmented and lost",
            "No ownership across CPS, Dalkia, and city ops.",
          ],
        },
        {
          label: "After",
          title: "Connected",
          points: [
            "Digital reporting gave residents a front door & visibility.",
            "In-field iPads connected crews & systems in real time.",
            "One clear operating model aligned all operations.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "In-field iPad Workflow",
        copy:
          "I drove alignment around in-field iPads tied to Dalkia & CPS systems so crews could receive work + update status in real time, closing the gap between systems and execution.",
      },
      {
        step: "2",
        title: "Resident Reporting UX",
        copy:
          "I led the UI and product direction for a customer reporting experience. Residents could identify their exact streetlight outage and get it fixed.",
      },
      {
        step: "3",
        title: "SAP Prioritization & Stakeholder Alignment",
        copy:
          "I brought the right stakeholder groups together to prioritize SAP work over competing roadmap items and kept negotiations moving until we delivered an award-winning technical program.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "The Time Between Dark Homes and Global Recognition",
    introCopy:
      "5 phases across 8 months. The first two were about finding root causes and getting two organizations to agree on what they were actually building. The middle phase was design and integration work. Finally, proof of concept and launch, holding the operating model together through go-live.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Map breakdowns across intake, dispatch, and systems.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Lead CPS & Dalkia to agreement on scope, ownership, and the product.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Define resident reporting UX, in-field iPad workflow, and SI path, SAP, Terrago, GIS.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Prove",
        copy: "Used POC as a force function to drive stakeholder debate to delivery.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Deploy repair workflow systems, close resident-to-operations loop, track service outcomes.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "This is the city's first official initiative to widely install solar-powered LED street lights within city limits. Together we are lighting the path to a brighter future!",
    attributionTitle: "Ron Nirenberg",
    attributionSubtitle: "Mayor, San Antonio, TX",
    avatarSrc: "/cps/ron-nirenberg.webp",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The CPS Energy smart streetlight modernization was recognized nationally for its impact on smart city service delivery. The work contributed to CPS Energy receiving the 2025 Global Smarty 20 Award.",
    featured: {
      media: {
        kind: "youtube",
        videoId: "GZMHsAIH1Os",
        aspectRatio: "16/9",
      },
      company: "San Antonio New Low-Carbon Streetlights",
      dates: "August 20, 2025",
      summary:
        "New solar streetlights set to go up across San Antonio as CPS Energy partners to modernize the city's streetlight network",
      tags: ["Press", "ABC News"],
    },
    rows: [
      {
        company: "MaryScottNabers.com",
        dates: "April 23, 2025",
        summary: "Texas claimed 5 of the top 20 smart city projects globally, with San Antonio among the honorees at the 2025 Smart 20 Awards",
        tags: ["Press", "Smart City"],
        file: "/cps/files/20250423_CPSE_MSN.pdf",
        url: "https://maryscottnabers.com/2025/04/23/texas-projects-dominate-smart-20-awards-at-global-conference",
      },
      {
        company: "TerraGo Technologies",
        dates: "April 15, 2025",
        summary: "CPS Energy's streetlight and smart city program wins the 2025 Smart 20 Award for innovation, sustainability, and connected operations",
        tags: ["Press", "Smart City"],
        file: "/cps/files/20250415_CPSE_TerraGo.pdf",
      },
      {
        company: "San Antonio Report",
        dates: "August 30, 2024",
        summary: "San Antonio contracts with Dalkia Energy to install 400 new solar-powered streetlights, addressing gaps in street lighting and improving public safety",
        tags: ["Press", "Solar"],
        file: "/cps/files/20240830_CPSE_SAReport.pdf",
      },
      {
        company: "CPS Energy Board of Trustees",
        dates: "March 25, 2024",
        summary: "Board meeting agenda covering the Smart City and streetlight modernization program",
        tags: ["Official Record"],
        file: "/cps/files/20240325_CPSE_SACityCouncilAgenda.pdf",
      },
      {
        company: "News4SanAntonio (NBC)",
        dates: "March 18, 2024",
        summary: "Northeast San Antonio residents go without street lighting for months, exposing the urgency of CPS Energy's modernization program",
        tags: ["Press", "NBC News"],
        file: "/cps/files/20240318_CPSE_NBC.pdf",
      },
      {
        company: "Digi.City",
        dates: "February 20, 2024",
        summary: "Smart Cities Connect announces the 2024 Smart 20 Awards, recognizing the top 20 most innovative smart city projects worldwide",
        tags: ["Press", "Smart City"],
        file: "/cps/files/20240220_CPSE_DigiCity.pdf",
      },
    ],
  },
} satisfies CaseStudyData
