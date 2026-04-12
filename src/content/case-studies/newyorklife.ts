import type { CaseStudyData } from "@/content/case-studies/types"

export const newYorkLifeCaseStudy = {
  slug: "newyorklife",
  breadcrumbCurrent: "New York Life",
  hero: {
    title: "New York Life's Scalable Product Platform",
    intro:
      "Legal exposure, brand drift, and a brutal review process were dragging across thousands of agent sites. I helped turn that mess into a governed multi-tenant platform that cut launches from months to weeks, reduced review cycles from weeks to days, and drove roughly 200% more leads and appointments.",
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
      src: "/newyorklife/hero-nyl-02.png",
      alt: "New York Life product platform hero image showing governed agent site experiences",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Governance That Performed",
    copy:
      "I was brought in to modernize how thousands of New York Life agent sites were launched, governed, and monetized. The result was a reusable product platform that made the business faster, more consistent, more compliant, and easier to scale.",
    stats: [
      { value: "$10", suffix: "M", label: "Program Budget" },
      { value: "12,000", suffix: "+", label: "Sites Governed" },
      { value: "200", suffix: "%", label: "Lead Uplift" },
      { value: "6m-2w", suffix: "", label: "Site Launch Reduction" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Too Many Sites, Too Risky",
    media: {
      kind: "react-diagram",
      component: "nyl-velocity-chart",
    },
    overview:
      "Before this platform, each agent website behaved like its own project. Local vendors, inconsistent branding, manual compliance checks, and no single source of truth made every update slow, expensive, and risky. New York Life needed a way to support 12,000+ agent sites without letting speed create legal exposure or brand chaos.",
    projectOverviewRows: [
      { label: "Client & Agency", value: "New York Life & Fusion92" },
      { label: "Industry", value: "Insurance • Enterprise SaaS • Compliance" },
      { label: "Timeline", value: "March 2024 - November 2024" },
    ],
    tools: [
      { label: "Azure IDP/SSO", icon: "/tool-icons/svg/azure-logo.svg" },
      { label: "Mulesoft", icon: "/tool-icons/svg/mulesoft-logo.svg" },
      { label: "Google My Business", icon: "/tool-icons/svg/google-my-business-logo.svg" },
      { label: "Adobe Experience Manager", icon: "/tool-icons/svg/adobe-experience-manager-logo.svg" },
      { label: "Salesforce", icon: "/tool-icons/svg/salesforce-logo.svg" },
    ],
    quote: {
      quote:
        "Our greatest challenge isn't technology, it's people and process.",
      avatarSrc: "/newyorklife/don-vu.jpeg",
      attributionTitle: "Don Vu",
      attributionSubtitle: "CDAO, New York Life",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Product Manager & Program Manager",
    copy:
      "I owned the product logic that turned this from a one-off build into a governed multi-tenant platform. I translated the compliance problem into a reusable model and helped shape what later became Fusion92’s COREcms product.",
    tags: [
      "Product Strategy",
      "Platform Design",
      "High Trust",
      "Enterprise Governance",
    ],
    stats: [
      { value: "6", suffix: "", label: "System Integrations" },
      { value: "$10", suffix: "M", label: "Program Budget" },
      { value: "10", suffix: "", label: "Team Size" },
      { value: "9", suffix: " mo", label: "Program Timeline" },
    ],
    narrative: {
      title: "Wix For Highly Regulated Enterprises",
      paragraphs: [
        "New York Life’s content operation was too manual to scale and too risky to trust. Launches took up to six months, compliance reviews dragged on for weeks, and every local update created legal and reputational risk. The business needed speed, but only with tighter control.",
        "I designed the multi-tenant logic, permissions, and workflow that made speed and control work together. I turned the vision into execution and made sure the platform worked for New York Life and as a reusable model for future regulated clients.",
      ],
      highlights: [
        "Defined the multi-tenant model that later became CORECMS's reusable product foundation.",
        "Built the permission and compliance workflow that matched New York Life's actual operating structure.",
        "Led backlog, workshops, demos, and steering conversations across home office and digital stakeholders.",
      ],
      closing:
        "I turned bureaucracy and risk into a product system that performed.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Platform, Tight Guardrails",
    copy:
      "Multi-tenant CMS that gave agents more speed without losing central control. It baked governance and AI into the product, so sites stayed compliant and drove ROI.",
    diagramKey: "nyl-rbac-workflow",
    gallery: [
      "/newyorklife/modal-nyl-01.png",
      "/newyorklife/modal-nyl-02.png",
      "/newyorklife/modal-nyl-03.png",
      "/newyorklife/modal-nyl-04.png",
      "/newyorklife/modal-nyl-05.png",
    ],
  },
  supplementalNarrative: {
    title: "Governance at Scale",
    paragraphs: [
      "The technology mattered, but the real challenge was operational. New York Life needed a platform that matched the way the business actually worked, from agent requests to home office review and centralized publishing, without brittle workarounds.",
      "Once the roles, permissions, and workflows were locked in, the platform stopped behaving like disconnected pages and started behaving like a real system. Compliance got visibility, agents got speed, and the brand stopped breaking at the edges.",
    ],
    highlights: [
      "Built for 12,000+ governed sites, not a handful of marketing pages.",
      "Reduced ambiguity and risk through clear role boundaries and workflow states.",
    ],
    closing:
      "What looked like a CMS on the surface was really a governance product with commercial upside.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Speed + Safety + Commercial Lift",
    intro:
      "With the right product logic, New York Life moved faster, reduced risk, and improved lead performance across its agent network.",
    proofPoints: ["Compliance", "Speed", "Commercial Performance"],
    stats: [
      { value: "200", suffix: "%", label: "Lead Uplift" },
      { value: "12,000", suffix: "+", label: "Sites Launched" },
      { value: "3×", suffix: "", label: "Digital Revenue Growth" },
      { value: "6m - 2w", suffix: "", label: "Site Launch Time Reduction" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "New York Life moved from high-risk, manual site management to a centralized, governed model that improved commercial performance.",
      columns: [
        {
          label: "Before",
          title: "Manual, Slow & Exposed",
          points: [
            "Site launches & compliance reviews took up to 6 months.",
            "No global visibility into live agent sites.",
            "Brand inconsistency created legal & reputational risk.",
          ],
        },
        {
          label: "After",
          title: "Governed, Faster & Stronger",
          points: [
            "Compliance turnaround dropped to 1-3 days.",
            "12,000+ sites launched + cebtrally governed.",
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
      "It took more than backlog management: I had to hold together bureaucracy, compliance risk, platform design, and ROI without letting NYL lose trust in the product.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped legal, brand & workflow risks inside a fragmented content operation.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Aligned home office, digital, and compliance stakeholders.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined multi-tenant platform logic, permission model & workflows.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected enterprise systems & translated product decisions to delivery.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Proved model at scale through fast launches & stronger lead gen.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "We're investing $1 billion in service, technology, data and AI, to support & empower our agents and advisors to serve (our customers') full spectrum of needs.",
    attributionTitle: "Craig DeSanto",
    attributionSubtitle: "Chair, President & CEO, New York Life Insurance Company",
    avatarSrc: "/newyorklife/craig-desanto.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "This project sat inside a larger New York Life modernization push around technology, data, AI, and agent enablement. The strongest external proof is the operating logic behind this platform lines up with how New York Life publicly described its modernization strategy.",
    rows: [
      {
        company: "New York Life and AWS: Building a Modern Foundation for Data and AI",
        dates: "2024",
        summary:
          "New York Life says AWS featured the company for reimagining its digital foundation with a modern, cloud-first platform that unifies data across the enterprise to deliver faster insights, more seamless experiences, and smarter tools for clients, agents, and advisors.",
        tags: ["Press", "Modernization"],
        file: "/newyorklife/files/New-York-Life-AWS-Building-Modern-AI-Data-Foundation.pdf",
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
        file: "/newyorklife/files/Fusion92 _Core CMS.pdf",
      },
    ],
  },
} satisfies CaseStudyData
