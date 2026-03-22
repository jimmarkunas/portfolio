import type { CaseStudyData } from "@/components/case-study/types"

export const newYorkLifeCaseStudy = {
  slug: "newyorklife",
  breadcrumbCurrent: "New York Life",
  hero: {
    title: "I Turned New York Life's Compliance Bottleneck Into a Scalable Product Platform",
    intro:
      "New York Life needed more than a better CMS. It needed a way to stop legal and brand risk from leaking across thousands of agent sites without slowing the business to a crawl. I helped turn that manual, compliance-heavy mess into a governed multi-tenant platform that cut launch times from months to weeks, shrank review cycles from weeks to days, and drove a ~200% lift in leads and appointments.",
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
      src: "/newyorklife/hero-nyl-01.png",
      alt: "New York Life product platform hero image showing governed agent site experiences",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Governance That Performed",
    copy:
      "I was brought in to help New York Life modernize how thousands of agent sites were launched, governed, and monetized. The result was not just a safer content system, it was a reusable product platform that improved speed, consistency, compliance, and commercial performance at enterprise scale.",
    stats: [
      { value: "$10", suffix: "M", label: "program budget" },
      { value: "12,000", suffix: "+", label: "sites governed" },
      { value: "200", suffix: "%", label: "lead uplift" },
      { value: "6 mo", suffix: " → 2–4 wk", label: "site launch reduction" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Too Many Sites, Too Much Risk",
    media: {
      kind: "image",
      src: "/newyorklife/hero-nyl-02.png",
      alt: "New York Life product launch workflow and governed site ecosystem",
      aspectRatio: "16/9",
    },
    overview:
      "Before this platform, each agent website behaved like its own project. Local vendors, inconsistent branding, manual compliance checks, and no single source of truth made every update slow, expensive, and risky. New York Life needed a way to support 12,000+ agent sites without letting speed create legal exposure or brand chaos.",
    projectOverviewRows: [
      { label: "Client", value: "New York Life" },
      { label: "Industry", value: "Insurance • Enterprise SaaS • Compliance" },
      { label: "Timeline", value: "March 2024 to November 2024" },
    ],
    tools: [
      { label: "Azure IDP/SSO", icon: "/tool-icons/msazure-logo.png" },
      { label: "Mulesoft", icon: "/tool-icons/mulesoft-logo.png" },
      { label: "Google My Business", icon: "/tool-icons/google-mb-logo.png" },
      { label: "Adobe Experience Manager", icon: "/tool-icons/adobexm-logo.png" },
      { label: "Salesforce", icon: "/tool-icons/salesforce-logo.png" },
    ],
    quote: {
      quote:
        "What I've consistently observed is this: The greatest challenge isn't technology, it's people and process.",
      attributionTitle: "Don Vu",
      attributionSubtitle: "CDAO, New York Life",
      avatarSrc: "/newyorklife/don-vu.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Product Manager and Program Manager",
    copy:
      "I owned the product logic that made this more than a one-off client build. I translated a compliance-heavy enterprise problem into a governed, multi-tenant platform, aligned stakeholders around the right operating model, and helped shape the system that later became Fusion92's COREcms product.",
    tags: [
      "Product Strategy",
      "Platform Design",
      "Compliance Workflow",
      "Enterprise Governance",
    ],
    stats: [
      { value: "6", suffix: "", label: "system integrations" },
      { value: "$10", suffix: "M", label: "program budget" },
      { value: "10", suffix: "", label: "team size" },
      { value: "9", suffix: " mo", label: "program timeline" },
    ],
    narrative: {
      title: "I Turned a Client Build Into a Platform",
      paragraphs: [
        "When I stepped in, New York Life's content operation was too manual to scale and too risky to trust. Site launches could take up to six months, compliance reviews dragged on for weeks, and every local update created another chance for legal or reputational damage. The business needed to move faster, but nobody was going to accept speed without tighter control.",
        "I designed the multi-tenant product logic, the permission model, and the workflow structure that made that trade-off possible. I translated the vision into backlog, specs, epics, and stories, led the trade-off conversations across digital and compliance, and made sure the platform worked as both a New York Life solution and a reusable product architecture for future regulated clients.",
      ],
      highlights: [
        "Defined the multi-tenant model that later became COREcms's reusable product foundation.",
        "Built the permission and compliance workflow that matched New York Life's actual operating structure.",
        "Led backlog, workshops, demos, and steering conversations across home office and digital stakeholders.",
      ],
      closing:
        "This is the kind of work I am best at — turning bureaucracy and risk into a product system that actually performs.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Platform, Tight Guardrails",
    copy:
      "I helped shape a multi-tenant enterprise CMS that let agents move faster while keeping home office control where it belonged. The product combined simple site creation, built-in governance, centralized content systems, and enterprise integrations so every site could look polished, stay compliant, and drive measurable business value.",
    cards: [
      {
        category: "Governed Site Creation",
        readTime: "Template-Driven Builder",
        title:
          "Non-technical teams could create and update pages through a template-driven builder without direct code access, while the underlying system kept the experience controlled and reusable.",
        art: "/newyorklife/product-nyl-01.png",
      },
      {
        category: "Compliance Workflow Engine",
        readTime: "Review Status Logic",
        title:
          "Built-in status tracking and review gates ensured no page went live without the right checkpoints, replacing manual ambiguity with clear accountability.",
        art: "/newyorklife/product-nyl-02.png",
      },
      {
        category: "Data and Growth Layer",
        readTime: "Enterprise Integrations",
        title:
          "Integrations like Azure IDP/SSO, Mulesoft, Adobe Experience Manager, Salesforce, Google My Business, and Calendly turned every site into a governed growth asset instead of a disconnected brochure.",
        art: "/newyorklife/product-nyl-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Hard Part Was Governance at Scale",
    image: "/newyorklife/hero-nyl-03.png",
    paragraphs: [
      "The technology mattered, but the real challenge was operational. New York Life needed a platform that mirrored how the business actually worked — back office creation, agent requests, home office review, and centralized publishing — without forcing people into brittle workarounds.",
      "Once those roles, permissions, and workflows were structured correctly, the platform stopped behaving like a pile of pages and started behaving like an enterprise system. Compliance got visibility, agents got speed, and the brand stopped fragmenting at the edges.",
    ],
    highlights: [
      "Built for 12,000+ governed sites, not a handful of marketing pages.",
      "Reduced ambiguity and risk through clear role boundaries and workflow states.",
    ],
    closing:
      "What looked like a CMS on the surface was really a governance product with commercial upside.",
    closingImage: "/newyorklife/hero-nyl-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Speed, Safety, and Commercial Lift",
    intro:
      "This work mattered because it proved that tighter governance did not have to slow the business down. Once the platform had the right product logic underneath it, New York Life could move faster, reduce risk, and drive better lead performance across a massive agent network.",
    proofPoints: ["Compliance", "Speed", "Commercial Performance"],
    stats: [
      { value: "200", suffix: "%", label: "lead uplift" },
      { value: "12,000", suffix: "+", label: "sites governed" },
      { value: "~3×", suffix: "", label: "digital revenue growth" },
      { value: "6 mo", suffix: " → 2–4 wk", label: "site launch reduction" },
    ],
    statsImage: "/newyorklife/hero-nyl-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "New York Life moved from fragmented, high-risk, manual site management to a centralized, governed model that improved speed, consistency, risk control, and commercial performance.",
      columns: [
        {
          label: "Before",
          title: "Manual, Slow, and Exposed",
          points: [
            "Site launches could take up to six months.",
            "Compliance reviews were manual and could take about three weeks.",
            "No global visibility into what was live across agent sites.",
            "Brand inconsistency created legal and reputational risk.",
          ],
        },
        {
          label: "After",
          title: "Governed, Faster, and Stronger",
          points: [
            "New site launches dropped to roughly 2 to 4 weeks.",
            "Compliance turnaround dropped to 1 to 3 days.",
            "12,000+ sites could be governed centrally.",
            "Lead and appointment activity improved by ~200%.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Expose the Real Bottleneck",
        copy:
          "I identified that the problem was not just pages, it was governance, risk, and scale inside a litigation-sensitive content operation.",
      },
      {
        step: "2",
        title: "Build the Operating Logic",
        copy:
          "I defined the roles, permissions, review flow, and reusable platform structure that made speed and control work together.",
      },
      {
        step: "3",
        title: "Turn Governance Into Performance",
        copy:
          "Once the product logic was right, New York Life launched faster, reviewed faster, reduced risk, and improved lead performance across the network.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Made the Machine Work",
    introCopy:
      "This project required more than backlog management. I had to balance enterprise bureaucracy, compliance sensitivity, platform design, and commercial upside, while keeping stakeholders aligned around a product they could trust.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the legal, brand, and workflow risks hiding inside a fragmented content operation.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Got home office, digital, and compliance stakeholders moving toward one governed operating model.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined the multi-tenant platform logic, permission model, and workflow states.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected enterprise systems and translated product decisions into concrete backlog and delivery work.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Proved the model at scale through faster launches, tighter compliance, and stronger lead performance.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "To ensure that we deliver experiences that exceed your expectations, we are constantly evolving and modernizing. We are investing more than $1 billion in service, technology, data and AI, and we are continuously supporting and empowering our agents and advisors to serve your full spectrum of needs.",
    attributionTitle: "Craig DeSanto",
    attributionSubtitle: "Chair, President & CEO, New York Life Insurance Company",
    avatarSrc: "/newyorklife/craig-desanto.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press and Strategic Context",
    intro:
      "This project sat inside a larger New York Life modernization push around technology, data, AI, and agent enablement. The strongest external proof is not a trophy, it is the fact that the operating logic behind this platform lines up with how New York Life publicly described its modernization strategy and how Fusion92 later marketed COREcms as an enterprise product.",
    featured: {
      media: {
        kind: "image",
        src: "/newyorklife/hero-nyl-06.png",
        alt: "New York Life and AWS modernization article feature",
        aspectRatio: "16/9",
      },
      company: "New York Life and AWS: Building a Modern Foundation for Data and AI",
      dates: "",
      summary:
        "New York Life says AWS featured the company for reimagining its digital foundation with a modern, cloud-first platform that unifies data across the enterprise to deliver faster insights, more seamless experiences, and smarter tools for clients, agents, and advisors.",
      tags: ["Press", "Modernization"],
    },
    rows: [
      {
        company: "New York Life and AWS: Building a Modern Foundation for Data and AI",
        dates: "2024",
        summary:
          "New York Life says AWS featured the company for reimagining its digital foundation with a modern, cloud-first platform that unifies data across the enterprise to deliver faster insights, more seamless experiences, and smarter tools for clients, agents, and advisors.",
        tags: ["Press", "Modernization"],
        file: "/newyorklife/files/newyorklife.com-New York Life and AWS Building a modern foundation for data and AI.pdf",
      },
      {
        company: "2024 Report to Policy Owners",
        dates: "2024",
        summary:
          "New York Life says it is investing more than $1 billion in service, technology, data, and AI, and describes an ongoing push to modernize operations, improve digital capabilities, and empower agents and advisors at scale.",
        tags: ["Annual Report", "Strategy"],
        file: "/newyorklife/files/Report-to-Policy-Owners-2024.pdf",
      },
      {
        company: "The Enterprise Platform for Growth",
        dates: "2024",
        summary:
          "Fusion92 positions COREcms as an enterprise growth platform built to simplify site creation, centralize content, enforce built-in compliance, support multi-brand and highly regulated industries, and drive lead generation through integrations like Google My Business and Calendly.",
        tags: ["Product", "Platform"],
        file: "/newyorklife/files/Fusion92 _ Core CMS_compressed.pdf",
      },
    ],
  },
} satisfies CaseStudyData
