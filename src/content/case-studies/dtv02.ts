import type { CaseStudyData } from "@/content/case-studies/types"
import { directveverywhereCopy } from "@/content/case-studies/chunks/directveverywhere.copy"
import { directveverywhereRecognitionRows } from "@/content/case-studies/chunks/directveverywhere.recognition"

export const directveverywhereCaseStudy = {
  slug: "dtv02",
  breadcrumbCurrent: "DIRECTV Everywhere",
  hero: {
    title: "Leading the Launch of DIRECTV Everywhere",
    intro: directveverywhereCopy.heroIntro,
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
      src: "/dtv02/hero-dtv02-01.png",
      alt: "DIRECTV Everywhere cross-platform streaming launch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Streaming Under Pressure",
    copy: directveverywhereCopy.atAGlanceCopy,
    stats: [
      { value: "5", suffix: "M+", label: "Downloads" },
      { value: "5", suffix: "", label: "Device Families" },
      { value: "20", suffix: "M+", label: "Subscriber Base" },
      { value: "12", suffix: " mo", label: "Program Timeline" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "Product Served Before Ready",
    media: {
      kind: "youtube",
      videoId: "A_snqcURb_E",
      aspectRatio: "16/9",
    },
    overview: directveverywhereCopy.problemOverview,
    projectOverviewRows: [
      { label: "Client", value: "DIRECTV" },
      { label: "Industry", value: "Streaming • Media • Consumer Video" },
      { label: "Timeline", value: "Jun 2012 - Jun 2013" },
    ],
    tools: [
      { label: "DIRECTV", icon: "/tool-icons/dtv-logo.png" },
      { label: "Amazon Fire TV", icon: "/tool-icons/amazon-firetv-logo.png" },
      { label: "Apple iOS App Store", icon: "/tool-icons/apple-appstore-logo.png" },
      { label: "Apple TV", icon: "/tool-icons/apple-tv-logo.png" },
      { label: "Google Play", icon: "/tool-icons/google-play-logo.png" },
      { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
    ],
    quote: {
      quote:
        "DIRECTV Everywhere had died before it was born. We needed someone to save it.",
      attributionTitle: "Don Cansino",
      attributionSubtitle: "SVP Engineering, DIRECTV",
      avatarSrc: "/dtv02/don-cansino.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Product Manager",
    copy: directveverywhereCopy.roleCopy,
    tags: [
      "Product Leadership",
      "Cross-Platform",
      "Roadmap Definition",
      "Org Alignment",
    ],
    stats: [
      { value: "20", suffix: "M+", label: "Subscribers" },
      { value: "$6", suffix: "M", label: "Budget" },
      { value: "75+", suffix: "", label: "Stakeholders" },
      { value: "12", suffix: " mo", label: "Program Timeline" },
    ],
    narrative: {
      title: "I Solved the People Problem + the Product Problem",
      paragraphs: directveverywhereCopy.roleNarrative.paragraphs,
      highlights: directveverywhereCopy.roleNarrative.highlights,
      closing: directveverywhereCopy.roleNarrative.closing,
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Product Across Every Screen",
    copy: directveverywhereCopy.solutionCopy,
    cards: [
      {
        category: "Platform Parity",
        readTime: "Cross-device roadmap",
        title:
          "I pushed the roadmap toward cross-device parity so web, iOS, Android, tablets, and connected TV did not become isolated product islands with conflicting promises.",
        art: "/dtv02/modal-dtv02-01.png",
      },
      {
        category: "Auth & Entitlement",
        readTime: "Subscriber access logic",
        title:
          "I helped define one subscriber logic for authentication and entitlement so customers could understand what they could watch, where they could watch it, and why the experience changed by device or location.",
        art: "/dtv02/modal-dtv02-02.png",
      },
      {
        category: "Content Reach",
        readTime: "Live + VOD rollout",
        title:
          "I prioritized broader content and network reach over vanity features, which helped the service become useful faster and positioned DIRECTV to expand channel access over time.",
        art: "/dtv02/modal-dtv02-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Real Challenge Was Organizational Gravity",
    paragraphs: directveverywhereCopy.supplementalNarrative.paragraphs,
    highlights: directveverywhereCopy.supplementalNarrative.highlights,
    closing: directveverywhereCopy.supplementalNarrative.closing,
  },
  impact: {
    eyebrow: "Impact",
    title: "Scale, Reach & Credibility",
    intro: directveverywhereCopy.impactIntro,
    proofPoints: ["Parity", "Adoption", "Reach"],
    stats: [
      { value: "5", suffix: "M+", label: "Downloads" },
      { value: "5", suffix: "", label: "Device Families" },
      { value: "400", suffix: "+", label: "Channels" },
      { value: "$200", suffix: "M", label: "Revenue Uplift" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary: directveverywhereCopy.impactBeforeAfterSummary,
      columns: [
        {
          label: "Before",
          title: "Marketing ≠ Reality",
          points: [
            "No coherent cross-platform streaming product.",
            "Teams were not aligned around product/customer experience.",
            "At risk of publicly overpromising & not delivering.",
          ],
        },
        {
          label: "After",
          title: "Market Leader",
          points: [
            "DIRECTV Everywhere shipped across major devices.",
            "5M+ downloads + established one unified entitlement experience.",
            "Became the market leader in streaming content distribution.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Defined Product Truth",
        copy: directveverywhereCopy.impactJourneyStepCopies[0],
      },
      {
        step: "2",
        title: "Prioritized What Mattered",
        copy: directveverywhereCopy.impactJourneyStepCopies[1],
      },
      {
        step: "3",
        title: "Shiped Something the Market Believed in",
        copy: directveverywhereCopy.impactJourneyStepCopies[2],
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Helped Make It Real",
    introCopy: directveverywhereCopy.deliveryIntroCopy,
    phases: [
      {
        phase: "Phase 01",
        title: "Stabilize",
        copy:
          "Reframed Everywhere as a product, started forcing alignment around one subscriber experience.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Define",
        copy:
          "Wrote the PRDs & product rules that kept stakeholders working from one truth.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Align",
        copy:
          "Drove product decisions so the experience stayed coherent instead of fractured.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Launch",
        copy:
          "Helped turn the public campaign into a usable first-generation product.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Expand",
        copy:
          "Supported product evolution into broader live channel access & major network integrations.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Jim kept the teams aligned when the campaign pressure was public and hard to ignore.",
    attributionTitle: "Mark Tang",
    attributionSubtitle: "Director, Software Engineering, DIRECTV",
    avatarSrc: "/dtv02/mark-tang.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Product Milestones",
    intro: directveverywhereCopy.recognitionIntro,
    featured: {
      media: {
        kind: "youtube",
        videoId: "AyIUhugmOSQ",
        aspectRatio: "16/9",
      },
      company: "DIRECTV Everywhere Ad",
      dates: "",
      summary:
        "Check out DIRECTV Cinema's 30 second TV commercial, 'Everything Everywhere All at Once' from the Cable, Satellite TV & ISP.",
      tags: ["Ad", "National TV"],
    },
    rows: directveverywhereRecognitionRows,
  },
} satisfies CaseStudyData
