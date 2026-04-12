import type { CaseStudyData } from "@/content/case-studies/types"

export const caseStudy = {
  slug: "lego",
  breadcrumbCurrent: "BCG • LEGO",
  hero: {
    title: "LEGO's Digital Transformation With BCG",
    intro:
      "LEGO was behind competitors like Target, Disney, and Walmart, and its shop experience wasn’t ready for the next stage of growth. I came in as scrum master and solution architect to turn strategy into shippable product behavior and build the infrastructure linking retail, ecommerce, and digital.",
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
      src: "/lego/hero-lego-01.png",
      alt: "LEGO omni-channel storefront and enterprise transformation hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Omni-Channel, Finally",
    copy:
      "This was the engagement-layer work that helped LEGO stop behaving like a brand with a half-baked shop bolted onto a strong enterprise platform. I helped translate the digital transformation into customer-facing product requirements across navigation, cart, checkout, promotions, and cross-platform commerce behavior, so LEGO could grow through retail channels + e-commerce with a stronger omni-channel foundation.",
    stats: [
      { value: "3", suffix: "x", label: "Revenue Growth" },
      { value: "$50", suffix: "M", label: "Cost Savings" },
      { value: "24", suffix: "%", label: "Digital Sales Uplift" },
      { value: "$25", suffix: "", label: "AOV Lift" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Great Brand Behind on Omni-Channel",
    media: {
      kind: "image",
      src: "/lego/modal-lego-04.png",
      alt: "LEGO navigation, checkout, and omni-channel design authority materials",
      aspectRatio: "16/9",
    },
    overview:
      "LEGO had already built a serious enterprise platform, but the customer-facing engagement layer was still lagging the market. The shop felt cluttered, navigation had grown messy, cart & checkout behavior varied too much across flows and regions, and the experience was not operating like a modern omni-channel storefront across retail and digital. The company needed a stronger digital product layer.",
    projectOverviewRows: [
      { label: "Client", value: "BCG • LEGO" },
      { label: "Industry", value: "Retail • Toys • Omni-Channel eCommerce" },
      { label: "Timeline", value: "Jun 2015 - Jun 2016" },
    ],
    tools: [
      { label: "Oracle ATG", icon: "/tool-icons/svg/oracle-logo.svg" },
      { label: "SAP ERP", icon: "/tool-icons/svg/sap-logo.svg" },
      { label: "JIRA", icon: "/tool-icons/svg/atlassian-logo.svg" },
      { label: "Figma", icon: "/tool-icons/svg/figma-logo.svg" },
    ],
    quote: {
      quote:
        "We're not savvy enough where software development is going now, smaller applications, disruptive business models, omni-channel landscapes, e-commerce, web-based services, and so on. We're not nimble enough there. And we could risk ending up with a legacy platform instead of an advantage platform.",
      attributionTitle: "Jørgen Vig Knudstorp",     attributionSubtitle: "Chief Executive Officer, LEGO",
      avatarSrc: "/lego/jørgen-vig-knudstorp.jpg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Product Manager",
    copy:
      "I was the commerce systems expert responsible for solutioning + UI/UX product management across the hardest parts of the LEGO shop transformation. My job was to take broad, generalized transformation goals and turn them into shippable product requirements that designers, business leaders, and engineers could all execute against.",
    tags: [
      "Program Leadership",
      "Solution Architecture",
      "Omni-Channel Design",
      "Requirements Ownership",
    ],
    stats: [
      { value: "5", suffix: "", label: "Sales Channels" },
      { value: "$16", suffix: "M", label: "Program Budget" },
      { value: "40", suffix: "", label: "Team Size" },
      { value: "6", suffix: "+", label: "Country Variants" },
    ],
    narrative: {
      title: "I Turned Broad Strategy Into Shippable Product",
      paragraphs: [
        "The hard part here wasn't making prettier screens, it was translating a very broad digital transformation into concrete product behavior that could survive design politics, enterprise constraints, and real commerce complexity. LEGO needed the shop to stop feeling like an afterthought and start behaving like an omni-channel engagement layer of a world-class retail and digital brand.",
        "I changed the trajectory in three places. First, I cleaned up the navigation and tightened the taxonomy, so the shop was easier to understand. Second, I owned cart and checkout requirements across devices and markets, which replaced scattered debate with one buildable path. Third, I used Design Authority to force decisions on contested UX issues.",
      ],
      highlights: [
        "Cleaned up navigation and fixed the taxonomy around Sets, Bricks, Accessories, and Explore.",
        "Owned cart & checkout requirements across devices and markets.",
        "Used Design Authority to force decisions and keep delivery moving.",
      ],
      closing:
        "I helped bridge brand, business, and engineering when the strategy was broad and the product still needed to get built.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Better Engagement Layer for a Bigger Transformation",
    copy:
      "I helped define the product layer that connected LEGO’s enterprise stack to the customer experience. The work focused on cleaning up the shop, making it work consistently across platforms, and aligning it to how modern customers actually browse and buy across retail & digital channels.",
    cards: [
      {
        category: "Navigation & Taxonomy",
        readTime: "Hierarchy, not clutter",
        title:
          "I helped collapse a cluttered navigation model into a cleaner, more legible product structure that reduced browsing friction and made cross-category exploration feel more intentional.",
        art: "/lego/modal-lego-01.png",
      },
      {
        category: "Checkout & Cart",
        readTime: "Cross-platform flows",
        title:
          "I owned the requirements for some of the hardest cart and checkout behaviors, including account logic, gift cards, timed-out sessions, country-specific states, and flow consistency across devices.",
        art: "/lego/modal-lego-02.png",
      },
      {
        category: "Omni-Channel Experience",
        readTime: "Retail + digital convergence",
        title:
          "I helped shape a shop experience that could coexist with LEGO Stores, Amazon, Walmart, Target, and theme parks without the digital layer feeling disconnected from the broader brand or retail strategy.",
        art: "/lego/modal-lego-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Was More Than a Site Refresh",
    paragraphs: [
      "Most digital transformation talk is fiction until it shows up in the product. Here, that meant navigation, category templates, cart rules, checkout flows, account logic, and the way the shop behaved across desktop, tablet, and mobile. That’s where LEGO's transformation became real.",
      "LEGO needed the customer-facing layer to catch up with the scale of the business. I helped define the product behavior and structure that made growth across retail, ecommerce, and digital possible.",
    ],
    highlights: [
      "The engagement-layer work directly supported LEGO's omni-channel push across owned and partner channels.",
      "The project turned strategy into behavior without losing the brand in the process.",
    ],
    closing:
      "The big win wasn't just a cleaner shop; it made the digital transformation show up where customers could actually feel it.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Commercial Lift With Better Product Foundations",
    intro:
      "We made the shop easier to navigate, easier to optimize, and easier to scale globally",
    proofPoints: ["Solutioning", "Transformation", "ROI"],
    stats: [
      { value: "3", suffix: "x", label: "Revenue Growth" },
      { value: "$50", suffix: "M", label: "Cost Savings" },
      { value: "24", suffix: "%", label: "Digital Sales Uplift" },
      { value: "$25", suffix: "", label: "AOV Lift" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "LEGO moved from a half-baked shop experience to a disciplined, omni-channel machine that supported digital growth & retail integration.",
      columns: [
        {
          label: "Before",
          title: "Weak Experience",
          points: [
            "Behind market expectations for omni-channel retail.",
            "Navigation was cluttered, search wasn't contextual.",
            "Cart, checkout, and regional behavior couldn't scale.",
          ],
        },
        {
          label: "After",
          title: "Commercial Machine",
          points: [
            "The engagement layer supported digital & retail growth.",
            "Cleaner product hierarchy made browsing more useful & drove AOV.",
            "Scalable cross-platform checkout & merchandising behavior.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Simplified the Experience",
        copy: "We pushed navigation & taxonomy toward a more disciplined product structure so the shop could stop feeling like a cluttered catalog and start feeling like a modern commerce experience.",
      },
      {
        step: "2",
        title: "Defined the Hard Flows",
        copy: "I turned broad ideas about omni-channel and global commerce into concrete requirements for cart, checkout, promotions, gift cards, and cross-device behavior.",
      },
      {
        step: "3",
        title: "Made Strategy Shippable",
        copy: "By using Design Authority and detailed PRDs, I helped convert transformation strategy into product decisions teams could actually build and ship.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How We TRansformed LEGO",
    introCopy:
      "Navigation, checkout, information design, Design Authority: I kept brand, business, and engineering moving toward decisions that would hold up in delivery.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped where the shop was lagging (omni-channel expectations & cross-device behavior).",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Simplify",
        copy: "Reduced hierarchy clutter so the shop structure became more coherent & commercially useful.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Define",
        copy: "Owned detailed requirements for device-specific states across multiple country variants.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Align",
        copy: "Used Design Authority materials to keep the product moving and drive development.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Created reusable patterns to strengthen omni-channel & support ROI.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Jim's detail level made it possible to bridge design intent, business requirements, and what engineering actually needed to ship.",
    attributionTitle: "Geneson Rho",
    attributionSubtitle: "BCG Pod Lead",
    avatarSrc: "/lego/geneson-rho.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "LEGO's digital transformation became a management and research case profiled by Harvard Business Review and MIT (among others),and our work was part of the mechanism that supported that growth through retail channels, e-commerce, and digital platforms.",
    featured: {
      media: {
        kind: "video",
        src: "/lego/Knudstrop_Lego_lo.mp4",
        aspectRatio: "16/9",
      },
      company: "BCG Interview With LEGO CEO Jørgen Vig Knudstorp",
      dates: "",
      summary:
        "LEGO's digital transformation became a management case study across multiple institutions and publications, reinforcing that the omni-channel infrastructure work was part of a genuine, documented corporate reinvention.",
      tags: ["Interview", "LEGO CEO"],
    },
    rows: [
           {
        company: "BCG Interview With LEGO CEO Jørgen Vig Knudstorp",
        source: "BCG",
        dates: "2016",
        summary:
          "BCG published an interview with LEGO CEO Knudstorp on the digital transformation strategy, including the need to move faster in omni-channel, e-commerce, and cloud-based services.",
        tags: ["Interview", "LEGO CEO"],
        file: "/lego/files/05-BCG-Interview-Lego-CEO.pdf",
      },
            {
        company: "Transforming the LEGO Group for the Digital Economy",
        source: "MIT Sloan CISR",
        dates: "March 2016",
        summary:
          "MIT Sloan CISR documented LEGO's effort to become a digital company and explicitly described the need for a stronger engagement platform, omni-channel access, and faster, more adaptive product delivery.",
        tags: ["Case Study", "MIT"],
        file: "/lego/files/02-MIT-Case-Study.pdf",
      },
      {
        company: "LEGO: An Iconic Brand's Digital Transformation",
        source: "Harvard Business Review",
        dates: "2015",
        summary:
          "Harvard Business Review documented LEGO's broader transformation journey, covering the turnaround strategy, digital evolution, and how the company rebuilt itself into a world-class brand.",
        tags: ["Case Study", "Harvard"],
        file: "/lego/files/01-Harvard-Business-Review.pdf",
      },
      {
        company: "How Lego Clicked: the Super Brand That Reinvented Itself",
        source: "The Guardian",
        dates: "June 4, 2017",
        summary:
          "The Guardian framed LEGO as one of the most successful corporate reinventions of its era, reinforcing the broader transformation story that the omni-channel commerce work supported.",
        tags: ["Press", "Guardian"],
        file: "/lego/files/03-The-Guardian-LEGO-Digital.pdf",
      },
      {
        company: "MIS Quarterly Executive",
        source: "MIS Quarterly Executive",
        dates: "2016",
        summary:
          "MIS Quarterly Executive treated LEGO's transformation as a serious enterprise and digital strategy case, reinforcing the importance of its engagement-platform evolution.",
        tags: ["Case Study", "MIS"],
        file: "/lego/files/04-MIS-Quarterly-Executive.pdf",
      },
    ],
  },
} satisfies CaseStudyData
