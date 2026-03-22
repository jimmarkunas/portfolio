import type { CaseStudyData } from "@/components/case-study/types"

export const k2CaseStudy = {
  slug: "k2",
  breadcrumbCurrent: "K2 Sports",
  hero: {
    title: "I Built One Clean Commerce Engine Behind Nine K2 Brands",
    intro:
      "K2 Sports was being forced off a dying Demandware stack, but the business still wanted each brand to feel distinct while finance and operations wanted one manageable engine underneath everything. I led the program and solution architecture that turned that mess into a headless multi-brand model, with BigCommerce powering commerce, WordPress and Contentstack powering the front end, and Avante plus Quivers staying the source of truth. The result was nine sites launched in under nine months, faster site creation, faster publishing, and a headless setup business users could actually run.",
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
      src: "/k2/hero-k2-01.png",
      alt: "K2 Sports headless multi-brand commerce transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "One Engine, Many Brands",
    copy:
      "This was a forced replatform, but it became something much more valuable. I turned a brittle migration problem into a reusable headless commerce pattern that let nine K2 brands share one backend engine while still preserving brand-specific front ends, regional logic, and business-user control.",
    stats: [
      { value: "9", suffix: "", label: "sites launched" },
      { value: "75", suffix: "%", label: "faster site creation" },
      { value: "90", suffix: "%", label: "faster publishing" },
      { value: "50", suffix: "%", label: "productivity boost" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Forced Migration With No Coherent Plan",
    media: {
      kind: "image",
      src: "/k2/hero-k2-02.png",
      alt: "K2 Sports headless commerce architecture and scoping artifacts",
      aspectRatio: "16/9",
    },
    overview:
      "Demandware was sunsetting, reconciliation across systems was too manual, and nobody had a clean answer for how Quivers, Avante, payments, CMS, SEO, and nine storefronts were supposed to work together in SaaS. Marketing wanted every brand to keep its own look and feel. Finance and operations wanted one reliable engine under everything. The business needed a model that could move at speedboat speed without turning headless commerce into an engineering science project.",
    projectOverviewRows: [
      { label: "Client", value: "K2 Sports" },
      { label: "Industry", value: "Sporting Goods • Multi-Brand Commerce • Headless" },
      { label: "Timeline", value: "2020" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "Contentstack", icon: "/tool-icons/contentstack-logo.png" },
      { label: "WordPress", icon: "/tool-icons/wordpress-logo.png" },
      { label: "Quivers", icon: "/tool-icons/quivers-logo.png" },
    ],
    quote: {
      quote:
        "The challenge was not just replacing Demandware. It was making nine storefronts, multiple systems, and business users all work on one unified model.",
      attributionTitle: "Nicole Phillips",
      attributionSubtitle: "Director of eCommerce, K2",
      avatarSrc: "/k2/nicole-phillips.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program Manager & Solution Architect",
    copy:
      "I owned the multi-brand architecture, integration strategy, program execution, and the political work required to get nine storefronts moving on one clean model. In practice, that meant I was the architecture lead, the traffic cop, the SEO and cutover risk manager, and the one person pulling the right people together to make the hard calls.",
    tags: [
      "Headless Commerce",
      "Program Leadership",
      "Multi-Brand Architecture",
      "Integration Strategy",
    ],
    stats: [
      { value: "4", suffix: "", label: "team size" },
      { value: "$1.5", suffix: "M", label: "program budget" },
      { value: "9", suffix: "", label: "brand sites" },
      { value: "1", suffix: "", label: "shared engine" },
    ],
    narrative: {
      title: "I Made Headless Commerce Work for Business Users, Not Just Engineers",
      paragraphs: [
        "What I saw faster than other people was that this could not be solved by simply swapping one commerce platform for another. K2 needed a multi-store, multi-brand ecosystem from scratch, and it had to satisfy competing priorities at the same time. Marketing wanted beautiful brand experiences, finance wanted less reconciliation, operations wanted cleaner order logic, and nobody wanted BigCommerce pretending to be an ERP.",
        "I made three decisions that changed the trajectory. First, I built the unified API pattern behind the nine-store setup so the portfolio could behave like one manageable system instead of nine disconnected storefronts. Second, I kept Avante and Quivers as the source of truth instead of letting BigCommerce become fake ERP, which preserved data discipline and made the model sustainable. Third, I solved the DNS proxy and SEO continuity problem so the headless setup could hide ugly store URLs, preserve search equity, and still feel like one clean brand experience on the front end.",
      ],
      highlights: [
        "Built the unified API and proxy pattern behind a nine-store, multi-brand headless ecosystem.",
        "Protected Avante and Quivers as system-of-record layers instead of letting the commerce platform absorb the wrong responsibilities.",
        "Solved DNS, 301, and SEO continuity so the migration did not destroy organic traffic or brand coherence.",
      ],
      closing:
        "This is one of my clearest examples of building bleeding-edge architecture while still making it operable for marketing, finance, and operations.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Headless, But Actually Operable",
    copy:
      "I designed a model where one backend commerce engine could power many distinct brand experiences. BigCommerce handled cart, checkout, and core commerce services. WordPress and Contentstack handled the front-end experience. Avante and Quivers stayed the operational truth. A proxy layer and centralized APIs made the whole thing feel clean to customers and manageable to the business.",
    cards: [
      {
        category: "Unified Commerce Core",
        readTime: "Shared backend engine",
        title:
          "I helped centralize commerce into one BigCommerce-driven engine so nine storefronts could share the same operational backbone without flattening brand identity.",
        art: "/k2/product-k2-01.png",
      },
      {
        category: "Source-of-Truth Discipline",
        readTime: "Avante + Quivers model",
        title:
          "I kept Avante and Quivers in the right roles so order logic, inventory, and operational truth stayed where they belonged instead of turning the commerce layer into a fake ERP.",
        art: "/k2/product-k2-02.png",
      },
      {
        category: "Headless Experience Layer",
        readTime: "Proxy + front end",
        title:
          "I solved the proxy, domain, and SEO continuity challenges so brand teams could keep clean front-end experiences while the backend operated as one multi-brand system.",
        art: "/k2/product-k2-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Was a Headless Multi-Store Monolith in Disguise",
    image: "/k2/hero-k2-03.png",
    paragraphs: [
      "What made this story rare is that it was not a simple headless commerce implementation. It was effectively a multi-store monolith disguised as one clean brand experience. That sounds scary until somebody actually designs it well. The challenge was to keep the architecture disciplined enough for finance and operations, while still giving marketing teams the flexibility to make each brand look and feel distinct.",
      "That balance only works when someone understands the whole stack. I was the person who could see across the APIs, storefronts, business users, source systems, and migration risks at the same time. That is why the solution held together, and why BigCommerce later used the pattern with future multi-brand clients.",
    ],
    highlights: [
      "The architecture let nine brands behave like one manageable system without looking like one generic front end.",
      "The solutioning pattern became a downstream reference for future BigCommerce multi-brand work.",
    ],
    closing:
      "The win was bigger than a migration. It was turning a forced move into a reusable architecture the business could actually live with.",
    closingImage: "/k2/hero-k2-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Speed, Scale, And Lower Ownership Cost",
    intro:
      "The project mattered because it did more than get K2 off a sunsetting platform. It gave the business a cleaner operating model, faster content velocity, faster storefront creation, and a lower-cost way to support a complex multi-brand portfolio without handing everything back to engineering every time marketing wanted to move.",
    proofPoints: ["Launch Speed", "Business Control", "Lower TCO"],
    stats: [
      { value: "9", suffix: "", label: "sites launched" },
      { value: "75", suffix: "%", label: "faster site creation" },
      { value: "90", suffix: "%", label: "faster publishing" },
      { value: "2", suffix: "", label: "custom BC integrations" },
    ],
    statsImage: "/k2/hero-k2-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "K2 moved from a brittle multi-brand migration problem with too much manual reconciliation to a headless commerce model that launched faster, published faster, and gave the portfolio one manageable engine behind the scenes.",
      columns: [
        {
          label: "Before",
          title: "Forced Migration, Fragile Model",
          points: [
            "Demandware was dying and the business had no clean multi-brand SaaS plan.",
            "Reconciliation across systems was too manual and too noisy.",
            "Marketing flexibility and operational discipline were pulling in opposite directions.",
          ],
        },
        {
          label: "After",
          title: "Reusable And Operable",
          points: [
            "Nine sites launched in under nine months on one reusable headless pattern.",
            "Site creation accelerated by 75% and publishing accelerated by 90%.",
            "The business gained lower ownership costs and more control without engineering becoming the bottleneck for every change.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Design One Engine",
        copy: "I built the architecture pattern that let nine storefronts share one backend commerce model instead of fragmenting into separate implementation projects.",
      },
      {
        step: "2",
        title: "Keep the Truth in the Right Place",
        copy: "I made sure Avante and Quivers remained the source of truth so the business could scale without breaking data discipline or inventing fake system ownership.",
      },
      {
        step: "3",
        title: "Make It Work at Speed",
        copy: "I pulled the right people together to deliver two custom, platform-wide BigCommerce integrations and a headless experience layer that could move fast without collapsing into chaos.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Made the Portfolio Manageable",
    introCopy:
      "This work had to move like an enterprise program at speedboat speed. The program moved through platform scoping, source-system discipline, API and proxy design, storefront migration, and launch sequencing across a portfolio that could easily have collapsed into nine separate problem sets.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the gaps across Demandware replacement, reconciliation pain, source-system ownership, and the realities of running nine brand storefronts in SaaS.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Architect",
        copy: "Defined the shared engine, centralized API, proxy, and source-of-truth model that let the portfolio behave like one clean system.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Protect",
        copy: "Solved the DNS, SEO, and routing risks so the migration would not destroy traffic, URLs, or the front-end brand experience.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Launch",
        copy: "Rolled the architecture across nine storefronts while keeping the business-user experience manageable and the system truth stable.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Left behind a reusable multi-brand pattern that K2 and BigCommerce could apply to future portfolio work.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "What Jim built was bigger than a migration. He created one clean engine behind nine brands, cut the noise between systems, and made the whole portfolio more manageable.",
    attributionTitle: "Nicole Phillips",
    attributionSubtitle: "Director of eCommerce, K2",
    avatarSrc: "/k2/nicole-phillips-impact.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Case Studies & Downstream Proof",
    intro:
      "The strongest proof here is that the architecture showed up repeatedly in public case studies as an example of headless commerce done well, and the solutioning pattern later influenced additional BigCommerce multi-brand work.",
    featured: {
      media: {
        kind: "image",
        src: "/k2/hero-k2-06.png",
        alt: "K2 Sports headless commerce case study validation",
        aspectRatio: "16/9",
      },
      company: "BigCommerce, Contentstack, and Magenest All Published Case Studies on This Architecture",
      dates: "",
      summary:
        "Platform partners published five case studies covering the K2 multi-brand headless rollout, documenting faster site creation, lower ownership costs, and scalable architecture across eight brands.",
      tags: ["Case Study", "Headless Commerce"],
    },
    rows: [
      {
        company: "Headless Commerce Success Story: K2 Sports",
        source: "Magenest",
        dates: "December 18, 2023",
        summary:
          "Magenest reinforced K2 as a reference implementation for lower ownership costs, scalable architecture, and rapid multi-brand launch velocity built on BigCommerce headless.",
        tags: ["Case Study", "Headless"],
        file: "/k2/files/2023-12-18_magenest-casestudy-01.pdf",
      },
      {
        company: "K2 Sports Scales a Multi-Brand Portfolio With Headless Commerce",
        source: "BigCommerce",
        dates: "November 9, 2021",
        summary:
          "BigCommerce published a follow-on case study positioning K2 as a proof point for enterprise multi-brand headless, with continued emphasis on flexibility and faster market expansion.",
        tags: ["Case Study", "BigCommerce"],
        file: "/k2/files/2021-11-09_bc-casestudy-02.pdf",
      },
      {
        company: "K2 Sports Accelerates Content Operations With Contentstack",
        source: "Contentstack",
        dates: "February 18, 2020",
        summary:
          "Contentstack published a second case study highlighting continued improvements in content publishing speed and operational productivity across the multi-brand portfolio.",
        tags: ["Case Study", "Contentstack"],
        file: "/k2/files/2020-02-18cs-casestudy-02.pdf",
      },
      {
        company: "K2 Sports Cuts Time-to-Market With Contentstack Headless CMS",
        source: "Contentstack",
        dates: "February 15, 2020",
        summary:
          "Contentstack highlighted 75% faster site creation, 90% faster content publishing, and 50% productivity gains from the new headless content architecture across K2 brands.",
        tags: ["Case Study", "Contentstack"],
        file: "/k2/files/2020-02-15_cs-casestudy-01.pdf",
      },
      {
        company: "K2 Sports Scales a Multi-Brand Portfolio With Headless Commerce",
        source: "BigCommerce",
        dates: "January 18, 2020",
        summary:
          "BigCommerce positioned K2 as a proof point for multi-brand headless commerce, emphasizing the flexibility of one backend engine with differentiated brand experiences across eight sports brands.",
        tags: ["Case Study", "BigCommerce"],
        file: "/k2/files/2020-01-18_bc-casestudy-01.pdf",
      },
    ],
  },
} satisfies CaseStudyData
