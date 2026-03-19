import type { CaseStudyData } from "@/components/case-study/types"

export const solsticeOpsCaseStudy = {
  slug: "solstice-ops",
  breadcrumbCurrent: "Solstice Ops",
  hero: {
    title: "Solstice Ops: Service Visibility for Field Teams",
    intro:
      "I partnered with operations, product, and service leaders to redesign a fragmented field-service experience into a clear system teams could trust. The work focused on clarity, speed, and consistency across every workflow touchpoint.",
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
      src: "/test/man-placeholder.png",
      alt: "Case study hero portrait placeholder",
    },
  },
  atAGlance: {
    eyebrow: "At-a-glance",
    title: "Operational Design Outcomes",
    copy:
      "This case study shows how service workflows can feel simpler without losing operational depth. The system balanced live reporting, field execution, and decision-making in one coherent product experience.",
    stats: [
      { value: "2.4", suffix: "x", label: "Faster report completion" },
      { value: "87", suffix: "%", label: "Higher ops visibility" },
      { value: "41", suffix: "%", label: "Reduction in manual steps" },
      { value: "19", suffix: "%", label: "Improvement in team adoption" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Where Service Broke Down",
    media: {
      kind: "video-placeholder",
      title: "System Walkthrough Placeholder",
      subtitle: "Swap this for the final walkthrough or use a static image.",
      aspectRatio: "16/9",
    },
    overview:
      "Solstice Ops is a service coordination platform used by field teams to log incidents, manage repair work, and track service outcomes. The old experience was fragmented across views and devices, making it hard for teams to act quickly with confidence.",
    projectOverviewRows: [
      { label: "Project", value: "Solstice Ops Dashboard" },
      { label: "Industry", value: "Field Service & Operations" },
      { label: "Location", value: "Austin, USA" },
    ],
    tools: [
      { label: "Figma", short: "Fg", className: "bg-[#242938] text-white" },
      { label: "Illustrator", short: "Ai", className: "bg-[#330000] text-[#FF9A00]" },
      { label: "Photoshop", short: "Ps", className: "bg-[#001E36] text-[#31A8FF]" },
      { label: "After Effects", short: "Ae", className: "bg-[#00005B] text-[#9999FF]" },
    ],
    quote: {
      quote:
        "The core challenge was not adding more dashboards. It was creating one service model that crews, managers, and operators could all read the same way.",
      attributionTitle: "Challenge Quote",
      attributionSubtitle: "Replace with speaker name and title",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Product Design Lead",
    copy:
      "I led the end-to-end design direction, from workflow definition to interface systems, aligning service operations with a clearer product model.",
    tags: ["Workflow Design", "Design Systems", "Service Ops", "UX Strategy"],
    stats: [
      { value: "9", suffix: "", label: "Core workflows redesigned" },
      { value: "5", suffix: "", label: "Cross-team review cycles" },
      { value: "3", suffix: "", label: "Primary user groups aligned" },
      { value: "2", suffix: "x", label: "Faster stakeholder decisions" },
    ],
    narrative: {
      title: "Why Operational Clarity Matters",
      paragraphs: [
        "When service teams are working across live incidents, delayed context creates real friction. Interfaces need to make status, ownership, and next actions obvious at a glance.",
        "That meant reducing interface noise, aligning patterns across surfaces, and making the product feel dependable in high-pressure moments.",
      ],
      highlights: [
        "Unified status language across workflows.",
        "Fewer handoff gaps between field and office teams.",
        "A clearer structure for live operational decisions.",
      ],
      closing:
        "The design work focused less on adding features and more on helping teams move with confidence through the work they already needed to do.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A More Coherent System for Service Teams",
    copy:
      "The redesign emphasized clearer hierarchy, reusable patterns, and faster access to critical workflow states so teams could act with less hesitation.",
    cards: [
      {
        category: "Service Design",
        readTime: "6 min read",
        title: "Clarifying handoffs between office and field teams",
        art: "olive",
      },
      {
        category: "Dashboard UX",
        readTime: "7 min read",
        title: "Building one reporting model across critical views",
        art: "ux",
      },
      {
        category: "Systems Thinking",
        readTime: "5 min read",
        title: "Scaling patterns across tools without losing clarity",
        art: "motion",
      },
    ],
  },
  supplementalNarrative: {
    title: "Operational Context",
    paragraphs: [
      "The final system needed to support multiple team types without making the interface feel fragmented. That meant defining shared states, clearer reporting language, and fewer competing interaction patterns.",
    ],
    highlights: [
      "Live service context stayed visible throughout the workflow.",
      "Teams spent less time translating between screens.",
    ],
    closing:
      "The result was a product experience that felt calmer and more legible, even when the underlying service work remained complex.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Results Across the Workflow",
    intro:
      "The redesign improved how teams moved through service tasks, reviewed performance, and trusted the system day to day.",
    proofPoints: ["Clearer states", "Faster actions", "Stronger adoption"],
    stats: [
      { value: "38", suffix: "%", label: "Faster dispatch flow" },
      { value: "28", suffix: "%", label: "Higher completion rate" },
      { value: "3.1", suffix: "x", label: "Improved report speed" },
      { value: "81", suffix: "%", label: "Retention in active use" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "The system shifted from fragmented service tracking to one shared operational model with clearer decisions at every step.",
      columns: [
        {
          label: "Before",
          title: "Disconnected service flow",
          points: [
            "Teams jumped between disconnected workflow views.",
            "Reporting context arrived too late to guide action.",
            "Mobile access lagged behind desktop use cases.",
          ],
        },
        {
          label: "After",
          title: "One operational model",
          points: [
            "Shared patterns made service states easier to read.",
            "Live visibility improved handoffs and decision speed.",
            "Field and desktop workflows aligned around one system.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Operational Discovery",
        copy:
          "Mapped how incidents, repairs, and reporting moved across teams to expose where clarity was breaking down.",
      },
      {
        step: "2",
        title: "Workflow Alignment",
        copy:
          "Defined a shared model for status, ownership, and service progress so every surface spoke the same language.",
      },
      {
        step: "3",
        title: "Product Rollout",
        copy:
          "Applied the new interaction patterns across key reporting and dispatch experiences to support long-term adoption.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How the Work Moved Forward",
    introCopy:
      "Each phase built toward one outcome: a calmer, more legible product model that operational teams could trust in real working conditions.",
    phases: [
      {
        phase: "Phase 01",
        title: "Audit",
        copy: "Review service workflows, reporting pain points, and role-specific needs",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Model",
        copy: "Define one shared interaction and information model",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Prototype",
        copy: "Apply the system to dispatch, reporting, and status workflows",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Validate",
        copy: "Review with product and service teams to remove ambiguity",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Ship a clearer experience with stronger reporting trust",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Good operations design is not about adding control. It's about removing ambiguity so teams can move without second-guessing the system.",
    attributionTitle: "Challenge Quote",
    attributionSubtitle: "Replace with speaker name and title",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "This work helped demonstrate how operational software can feel clear, focused, and reliable without sacrificing complexity behind the scenes.",
    featured: {
      media: {
        kind: "video-placeholder",
        title: "Case Study Media Placeholder",
        subtitle: "Replace with the final video URL or still image.",
        aspectRatio: "16/9",
      },
      company: "Studio North, Chicago, USA",
      dates: "May 2023 - Present",
      summary: "Product design lead for service workflow transformation",
      tags: ["Operations", "Product Design"],
    },
    rows: [
      {
        company: "Systems Review Journal, USA",
        dates: "2024 Feature",
        summary: "Featured for workflow simplification in field-service software",
        tags: ["Editorial", "Feature"],
      },
      {
        company: "Design Leaders Roundtable, UK",
        dates: "2024 Mention",
        summary: "Recognized for product clarity across complex operational tools",
        tags: ["Talk", "Recognition"],
      },
      {
        company: "Ops Product Forum, Germany",
        dates: "2025 Showcase",
        summary: "Included as a case study in applied systems thinking for product teams",
        tags: ["Systems", "Product"],
      },
      {
        company: "Experience Review, USA",
        dates: "2025 Nomination",
        summary: "Nominated for service operations product design work",
        tags: ["Nomination", "UX"],
      },
    ],
  },
} satisfies CaseStudyData
