import type { CaseStudyData } from "@/content/case-studies/types"

export const caseStudy = {
  slug: "dtv01",
  breadcrumbCurrent: "DIRECTV",
  hero: {
    title: "Turning DIRECTV's Slow Offer Engine to a Revenue Machine",
    intro:
      "DIRECTV was bleeding subscribers and money, but its upsell engine was trapped inside siloed teams, legacy systems, and a 6-month launch cycle too slow to matter. I came in to give the offer journey an owner, operationalize digital revenue across channels, and turn seasonal chaos into a repeatable commercial machine. I helped drive $55M in Q4 2025 upsell revenue and cut time-to-value by 60 days.",
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
      src: "/dtv01/hero-dtv-01.png",
      alt: "DIRECTV revenue platform hero image showing brand campaign artwork",
    },
  },
  atAGlance: {
    eyebrow: "At-a-glance",
    title: "Revenue Under Pressure",
    copy:
      "I was brought in during a messy period to turn fragmented sports and premium campaigns into a repeatable upsell & retention engine. The work spanned all of omni-channel: set-top box, DIRECTV.com, mobile, and the operating model underneath all of it. DTV needed offers to launch faster and make real money.",
    stats: [
      { value: "$55", suffix: "M", label: "Q4 Upsell Revenue" },
      { value: "60", suffix: " days", label: "Faster TTV" },
      { value: "12", suffix: "+", label: "Stakeholder Orgs" },
      { value: "20", suffix: "+", label: "Systems in Play" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Shrinking, Siloed Machine",
    media: {
      kind: "image",
      src: "/dtv01/modal-stats-01.png",
      alt: "DIRECTV campaign artwork used to support targeted offers and retention revenue",
      aspectRatio: "16/9",
    },
    overview:
      "DIRECTV needed someone to fix a brittle revenue system inside a shrinking legacy business. Campaigns took 6 months to launch, teams didn't share a unified operating model, and the stack was split across 20+ legacy systems. On top of all that, DTV's corporate breakup with AT&T added even more duplication, pressure and political heat.",
    projectOverviewRows: [
      { label: "Client", value: "DIRECTV" },
      { label: "Industry", value: "Satellite TV • Streaming • Telecommunications" },
      { label: "Timeline", value: "Apr 2025 - Nov 2025" },
    ],
    tools: [
      { label: "DIRECTV Systems", icon: "/tool-icons/dtv-logo.png" },
      { label: "JIRA", icon: "/tool-icons/jira-logo.png" },
      { label: "Mulesoft", icon: "/tool-icons/mulesoft-logo.png" },
      { label: "Smartsheet", icon: "/tool-icons/smartsheet-logo.png" },
      { label: "Snowflake", icon: "/tool-icons/snowflake-logo.png" },
    ],
    quote: {
      quote:
        "We had to raise P&L, but had no idea how to launch campaigns across channels, or how to measure performance. We needed a tactician to align all the teams and lead us to victory.",
      attributionTitle: "Katherine Huynh",
      attributionSubtitle: "Sr. Director of Product Marketing, DIRECTV",
      avatarSrc: "/dtv01/katherine-huynh.jpeg",
      preQuoteHeading: "DIRECTV Revenue Journey",
      preQuoteChart: "directv-revenue",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program & Product Manager",
    copy:
      "I owned the messy middle: operating model, launch mechanics, and enough of the product layer to make the whole machine work. I wasn't there to babysit delivery, I was there to stop the bleed and give our revenue platform lasting ownership.",
    tags: [
      "Revenue Operations",
      "Program Leadership",
      "Product Strategy",
      "Digital Transformation",
    ],
    stats: [
      { value: "20", suffix: "+", label: "System Integrations" },
      { value: "$10", suffix: "M", label: "Program Budget" },
      { value: "65", suffix: "", label: "Stakeholders" },
      { value: "8", suffix: " mo", label: "Program Timeline" },
    ],
    narrative: {
      title: "I Gave the Revenue Journey an Owner",
      image: "/dtv01/hero-dtv-04.png",
      paragraphs: [
        "DIRECTV had the raw ingredients for upsell, but no real machine. Seasonal launches dragged on for 6 months, teams worked in silos, legacy systems fought each other, and the business was trying to protect revenue inside a shrinking subscriber base. Then the AT&T divorce happened: the process had to be duplicated and re-architected under even more pressure.",
        "I stood up the cross-functional operating model, built the intake, grooming, and approval flow, treated the platform as a product instead of a vague architecture initiative, and handled the AT&T duplication problem without letting the revenue roadmap collapse. That gave DIRECTV a cleaner path to launch targeted offers across channels without reinventing the process every season.",
      ],
      highlights: [
        "Defined the revenue platform as a product, w/ clear scope, ownership, and shared offer schema.",
        "Built intake, grooming, and approval model that replaced ad hoc launch chaos.",
        "Handled the AT&T divorce duplication while keeping decisioning, billing, and execution moving.",
      ],
      closing:
        "The real fix wasn'tt just shipping offers faster, it was finally giving the upsell journey an owner and leading the implementation of real ROI-driving digital transformation.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Engine, Many Offers",
    heroImage: "/dtv01/hero-dtv-05.png",
    copy:
      "I treated the digital revenue platform as both a product and an operating system. The solution was not a single feature, it was a repeatable way to design, approve, launch, and measure targeted offers across every key sales surface.",
    cards: [
      {
        category: "Operating Model",
        readTime: "Offer intake & approvals",
        title:
          "I replaced scattered handoffs and ad hoc email chains with one launch model that could carry sports, premium, and seasonal offers without rebuilding the process each time.",
        art: "/dtv01/hero-dtv-05.png",
      },
      {
        category: "Product Layer",
        readTime: "Unified offer schema",
        title:
          "I treated the revenue platform like a real product, defining what it owned, standardizing offer logic, and making one commercial model work across set-top box, web, and mobile.",
        art: "/dtv01/hero-dtv-05.png",
      },
      {
        category: "Commercial Execution",
        readTime: "Decisioning + billing flow",
        title:
          "I connected decisioning, Salesforce, Snowflake, and the set-top box purchase path so customers could discover, accept, and buy add-ons without seeing the legacy plumbing underneath.",
        art: "/dtv01/hero-dtv-05.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "Complicated Tech + Complicated Silos",
    paragraphs: [
      "The diagrams were complicated, but that was only one challenge: too many teams, too many systems, and no one truly owning the commercial journey end-to-end. Every major sports or premium launch felt like a mini re-platform, which is a terrible way to run a retention business.",
      "Once the platform had an owner, the work stopped feeling like a stack of one-off campaigns and started behaving like a commercial system. Offers became more reusable, decisioning became more coherent, and the business gained a faster way to turn retention pressure into ROI.",
    ],
    highlights: [
      "Seasonal launches stopped behaving like custom rebuilds.",
      "The upsell path became a managed commercial system, not a series of disconnected campaigns.",
    ],
    closing:
      "This was bigger than campaign delivery, it was revenue surgery inside a legacy business that could not afford more drift, and aligning 65 stakeholders was no easy task.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Revenue, Speed, Control",
    intro:
      "Once the revenue model had an owner and the launch mechanics were rebuilt, the platform moved faster, launched more coherently, and turned retention pressure into measurable revenue.",
    proofPoints: ["Revenue", "Speed", "Ownership"],
    stats: [
      { value: "55", suffix: "M", label: "Q4 Upsell Revenue" },
      { value: "60", suffix: " days", label: "Faster to Value" },
      { value: "3", suffix: "", label: "Live Sales Surfaces" },
      { value: "180", suffix: " days", label: "Legacy Launch Cycle" },
    ],
    statsImage: "/dtv01/hero-dtv-stats-02.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "The transformation was not cosmetic, DIRECTV moved from brittle campaign chaos to a managed revenue engine with faster commercial execution.",
      columns: [
        {
          label: "Before",
          title: "Slow + Siloed + Brittle",
          points: [
            "Campaign launches dragged for 6 months.",
            "Teams worked in parallel, not in sync.",
            "Offers were inconsistent across channels.",
          ],
        },
        {
          label: "After",
          title: "Owned, faster, repeatable",
          points: [
            "Sports & premium launches moved 60 days faster.",
            "Offer journey had 1 operating model and clear ownership.",
            "The platform helped drive $55M in Q4 2025 upsell revenue.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Expose the Bottleneck",
        copy: "I identified that the real blocker was not just old tech, it was the lack of end-to-end ownership across a shrinking, high-pressure revenue system.",
      },
      {
        step: "2",
        title: "Build the Machine",
        copy: "I stood up the operating model, intake flow, approvals, and product framing that made the platform usable instead of theoretical.",
      },
      {
        step: "3",
        title: "Turn Speed Into Money",
        copy: "Once the machine worked, DIRECTV could launch targeted offers faster across set-top box, web, and mobile, and revenue showed up.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Cleaned Up the Mess",
    introCopy:
      "I came in midstream to a job that was part rescue, part rebuild, part political cleanup. The work had to move fast enough for seasonal deadlines, while also absorbing the duplication and extra complexity created by the AT&T divorce.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped real bottlenecks across launch timing, technology, and ownership.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Pulled 12 orgs into one operating model, forced clarity around roles, approvals, and revenue.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined the platform as a product and shaped the path across set-top box, web, and mobile.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Build",
        copy: "Connected decisioning, billing, and launch mechanics into a workable system.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered targeted sports & premium offers faster with strong commercial payoff.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "What a magnificent symphoney Q3 has been! Thanks to the achievements orchestrated by none other than Jim Markunas. Now, we're able to present offers where customers engage most: on-screen!",
    attributionTitle: "Katherine Huynh",
    attributionSubtitle: "Sr. Director of Product Marketing, DIRECTV",
    avatarSrc: "/dtv01/katherine-huynh.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The strongest external proof was not a trophy, it was market validation. As DIRECTV expanded add-ons, genre packs, and personalization, major outlets started covering the offer ecosystem as a real consumer advantage, not just another cable bundle.",
    featured: {
      media: {
        kind: "image",
        src: "/dtv01/modal-dtv-kudos.png",
        alt: "Business Insider coverage of DIRECTV's streaming and genre pack offerings",
        aspectRatio: "16/9",
      },
      company: "Internal Kudos",
      dates: "",
      summary:
        "Executive leadership was happy with the uptick in retention revenue Q4 2025 thanks to the hard work of my 65 stakeholders. My delivery lead and I were recognized in the company-wide newsletter.",
      tags: ["Kudos", "Newsletter"],
    },
    rows: [
      {
        company: "DIRECTV's Genre Packs Let Subscribers Mix and Match the Channels They Actually Want",
        source: "Billboard",
        dates: "December 11, 2025",
        summary:
          "Billboard covered DIRECTV's Genre Packs as a more flexible way for subscribers to build their own channel lineup.",
        tags: ["Press", "Genre Packs"],
        file: "/dtv01/files/20251211_DTVR_Billboard.pdf",
      },
      {
        company: "DIRECTV Is Fighting Cord-Cutting With New Streaming Offers and Genre Bundles",
        source: "TheStreet",
        dates: "December 9, 2025",
        summary:
          "TheStreet covered DIRECTV's push to counter cord-cutting with new streaming offers, discounts, and genre-specific bundles.",
        tags: ["Press", "Commercial Launch"],
        file: "/dtv01/files/20251209_DTVR_TheStreet.pdf",
      },
      {
        company: "DIRECTV Expands Premium Add-Ons and Personalization Options for Subscribers",
        source: "Hollywood Reporter",
        dates: "December 9, 2025",
        summary:
          "Hollywood Reporter highlighted DIRECTV's premium channel add-ons and expanding personalization options, reinforcing the value of the add-on ecosystem.",
        tags: ["Press", "Add-Ons"],
        file: "/dtv01/files/20251209_DTVR_HollywoodReporter.pdf",
      },
      {
        company: "DIRECTV Is One of the Best Live TV Streaming Services on the Market",
        source: "Business Insider",
        dates: "November 11, 2025",
        summary:
          "Business Insider credited DIRECTV's robust channel lineup and new skinny genre package offerings as key differentiators in the live TV streaming market.",
        tags: ["Press", "Streaming"],
        file: "/dtv01/files/20251125_DTVR_BusinessInsider.pdf",
      },
      {
        company: "DIRECTV Faces Subscriber and Revenue Pressure Ahead of AT&T Spinoff",
        source: "Ion Analytics",
        dates: "July 31, 2024",
        summary:
          "Ion Analytics framed DIRECTV as a subscriber and revenue-shedding asset under strategic pressure, which is useful context for why a faster, more disciplined revenue engine mattered.",
        tags: ["Press", "Market Context"],
        file: "/dtv01/files/20240731_DTVR_IonAnalytics.pdf",
      },
    ],
  },
} satisfies CaseStudyData
