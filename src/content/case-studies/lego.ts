import type { CaseStudyData } from "@/components/case-study/types"

export const legoCaseStudy = {
  slug: "lego",
  breadcrumbCurrent: "BCG • LEGO",
  hero: {
    title: "I Helped Turn LEGO's Digital Transformation Into a Shippable Omni-Channel Product",
    intro:
      "LEGO was behind on omni-channel relative to players like Target, Disney, and Walmart, and the existing shop experience was not good enough to carry the next phase of growth. I came in as the program manager and solution architect who could turn broad transformation strategy into real product behavior, bridge designers, business, and hardcore engineers, and make the engagement layer worthy of a world-class brand. That work helped set the stage for growth through retail channels, e-commerce, and digital platforms by strengthening the omni-channel infrastructure underneath the customer experience.",
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
      "This was the engagement-layer work that helped LEGO stop behaving like a brand with a half-baked shop bolted onto a strong enterprise platform. I helped translate the digital transformation into actual customer-facing product requirements across navigation, cart, checkout, promotions, and cross-platform commerce behavior, so LEGO could grow through retail channels, e-commerce, and digital platforms with a stronger omni-channel foundation.",
    stats: [
      { value: "3", suffix: "x", label: "revenue growth" },
      { value: "$50", suffix: "M", label: "cost savings" },
      { value: "24", suffix: "%", label: "digital sales uplift" },
      { value: "$25", suffix: "", label: "AOV lift" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Great Brand Behind on Omni-Channel",
    media: {
      kind: "image",
      src: "/lego/hero-lego-02.png",
      alt: "LEGO navigation, checkout, and omni-channel design authority materials",
      aspectRatio: "16/9",
    },
    overview:
      "LEGO had already built a serious enterprise platform, but the customer-facing engagement layer was still lagging the market. The shop felt cluttered, navigation had grown messy, cart and checkout behavior varied too much across flows and regions, and the experience was not yet operating like a modern omni-channel storefront across retail, digital, and third-party channels. The company needed a stronger digital product layer before its broader transformation could fully pay off.",
    projectOverviewRows: [
      { label: "Client", value: "BCG • LEGO" },
      { label: "Industry", value: "Retail • Toys • Omni-Channel Commerce" },
      { label: "Timeline", value: "Jun 2015 to Jun 2016" },
    ],
    tools: [
      { label: "Oracle ATG", icon: "/tool-icons/oracle-logo.png" },
      { label: "SAP ERP", icon: "/tool-icons/sap-logo.png" },
      { label: "Optimizely", icon: "/tool-icons/optimizely-logo.png" },
      { label: "Design Authority", icon: "/tool-icons/figma.svg" },
    ],
    quote: {
      quote:
        "Where we're not savvy enough is in where software development is going now, like smaller applications, disruptive business models, omni-channel landscapes, e-commerce, web-based services, cloud-based services, and so on. We're not nimble enough there. And we could risk ending up with a legacy platform instead of an advantage platform.",
      attributionTitle: "Jørgen Vig Knudstorp",
      attributionSubtitle: "Chief Executive Officer, LEGO",
      avatarSrc: "/lego/jorgen-knudstorp.png",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program Manager & Solution Architect",
    copy:
      "I was the commerce systems expert responsible for solutioning and UI/UX product management across the hardest parts of the LEGO shop transformation. My job was to take broad, generalized transformation goals and turn them into shippable product requirements that designers, business leaders, and engineers could all execute against.",
    tags: [
      "Program Leadership",
      "Solution Architecture",
      "Omni-Channel Product",
      "Requirements Ownership",
    ],
    stats: [
      { value: "5", suffix: "", label: "sales channels" },
      { value: "$16", suffix: "M", label: "program budget" },
      { value: "40", suffix: "", label: "team size" },
      { value: "6", suffix: "+", label: "country variants" },
    ],
    narrative: {
      title: "I Turned Broad Strategy Into Shippable Product Behavior",
      paragraphs: [
        "The hard part here was not making prettier screens. The hard part was translating a very broad digital transformation into concrete product behavior that could survive design politics, enterprise constraints, and real commerce complexity. LEGO needed the shop to stop feeling like an afterthought and start behaving like the omni-channel engagement layer of a world-class retail and digital brand.",
        "I made three decisions that changed the trajectory. First, I pushed the navigation simplification from four rows to two, which reduced clutter and gave the product hierarchy real discipline. Second, I owned the cart and checkout PRDs across device states and regional variants, which turned scattered flow debates into something teams could actually build. Third, I used the Design Authority process to turn political design arguments into structured decisions, so the program stopped circling and started shipping.",
      ],
      highlights: [
        "Simplified the shop navigation from four rows to two and helped create a cleaner taxonomy around Sets, Bricks, Accessories, and Explore.",
        "Owned cart and checkout requirements across desktop, tablet, mobile, and country-specific states.",
        "Used Design Authority artifacts to convert broad transformation debates into executable product decisions.",
      ],
      closing:
        "This is one of my clearest examples of bridging brand, business, and engineering when the strategy is broad and the product still needs to get built.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Better Engagement Layer for a Bigger Transformation",
    copy:
      "I helped define the omni-channel product layer that sat on top of LEGO's enterprise stack. The work focused on making the shop cleaner, more cross-platform, more product-focused, and better aligned to how modern retail customers actually discover, compare, and buy across brand stores, big box partners, theme parks, and digital channels.",
    cards: [
      {
        category: "Navigation & Taxonomy",
        readTime: "Hierarchy, not clutter",
        title:
          "I helped collapse a cluttered navigation model into a cleaner, more legible product structure that reduced browsing friction and made cross-category exploration feel more intentional.",
        art: "/lego/product-lego-01.png",
      },
      {
        category: "Checkout & Cart",
        readTime: "Cross-platform flows",
        title:
          "I owned the requirements for some of the hardest cart and checkout behaviors, including account logic, gift cards, timed-out sessions, country-specific states, and flow consistency across devices.",
        art: "/lego/product-lego-02.png",
      },
      {
        category: "Omni-Channel Experience",
        readTime: "Retail + digital convergence",
        title:
          "I helped shape a shop experience that could coexist with LEGO Stores, Amazon, Walmart, Target, and theme parks without the digital layer feeling disconnected from the broader brand or retail strategy.",
        art: "/lego/product-lego-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "This Was More Than a Site Refresh",
    image: "/lego/hero-lego-03.png",
    paragraphs: [
      "A lot of teams talk about digital transformation in abstract terms. This was the opposite. The work had to show up in navigation states, category templates, cart rules, checkout flows, account logic, and the exact way the shop behaved across desktop, tablet, and mobile. That is where transformation either becomes real or dies as PowerPoint.",
      "That is why this case study matters. My contribution was not abstract strategy. It was the product-definition and solutioning work that made the omni-channel infrastructure usable, customer-facing, and commercially relevant. LEGO's growth through retail channels, e-commerce, and digital platforms needed a stronger engagement layer, and this project helped build it.",
    ],
    highlights: [
      "The engagement-layer work directly supported LEGO's omni-channel push across owned and partner channels.",
      "The job was to turn strategy into product behavior without losing the brand in the process.",
    ],
    closing:
      "The big win was not just a cleaner shop. It was making the digital transformation show up where customers could actually feel it.",
    closingImage: "/lego/hero-lego-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Commercial Lift With Better Product Foundations",
    intro:
      "This work mattered because it supported real business performance, not just cleaner screens. By strengthening the omni-channel infrastructure and product layer, the project contributed to LEGO's broader growth through retail channels, e-commerce, and digital platforms, while making the shop easier to navigate, easier to optimize, and easier to scale globally.",
    proofPoints: ["Revenue", "Efficiency", "Commerce UX"],
    stats: [
      { value: "3", suffix: "x", label: "revenue growth" },
      { value: "$50", suffix: "M", label: "cost savings" },
      { value: "24", suffix: "%", label: "digital sales uplift" },
      { value: "$25", suffix: "", label: "AOV lift" },
    ],
    statsImage: "/lego/hero-lego-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "LEGO moved from a half-baked shop experience behind stronger enterprise systems to a more disciplined omni-channel engagement layer that could support digital growth, retail integration, and faster product evolution.",
      columns: [
        {
          label: "Before",
          title: "Strong Platform, Weak Experience",
          points: [
            "The shop was behind market expectations for omni-channel retail.",
            "Navigation and taxonomy were cluttered enough that users often defaulted to search.",
            "Cart, checkout, and regional behavior were too inconsistent to scale cleanly.",
          ],
        },
        {
          label: "After",
          title: "Cleaner, Faster, More Commercial",
          points: [
            "The engagement layer better supported growth through retail channels, e-commerce, and digital platforms.",
            "A cleaner navigation and product hierarchy made browsing more useful and less noisy.",
            "Cross-platform checkout and merchandising behavior became easier to manage, test, and scale.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Simplify the Experience",
        copy: "I pushed the navigation and taxonomy toward a more disciplined product structure so the shop could stop feeling like a cluttered catalog and start feeling like a modern commerce experience.",
      },
      {
        step: "2",
        title: "Define the Hard Flows",
        copy: "I turned broad ideas about omni-channel and global commerce into concrete requirements for cart, checkout, promotions, gift cards, and cross-device behavior.",
      },
      {
        step: "3",
        title: "Make Strategy Shippable",
        copy: "By using Design Authority and detailed PRDs, I helped convert transformation strategy into product decisions teams could actually build and ship.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Made the Work Real",
    introCopy:
      "This program moved through information design, navigation convergence, checkout definition, and Design Authority approval while balancing brand, business, and engineering concerns. The real work was keeping those groups aligned long enough to create product decisions that could survive delivery.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped where the existing shop was lagging omni-channel expectations, especially around navigation, product discovery, and cross-device behavior.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Simplify",
        copy: "Reduced hierarchy clutter and pushed the navigation from four rows to two so the shop structure became more coherent and commercially useful.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Define",
        copy: "Owned detailed requirements for checkout, gift cards, promotions, and device-specific states across multiple country variants.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Align",
        copy: "Used Design Authority materials to resolve disagreements between design, business, and engineering and keep the product moving.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "Created reusable patterns that strengthened LEGO's omni-channel infrastructure and supported broader growth through retail, e-commerce, and digital platforms.",
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
    avatarSrc: "/lego/geneson-rho.png",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Case Studies, Research, And Public Validation",
    intro:
      "The strongest validation here is that LEGO's digital transformation became a management and research case, and the omni-channel infrastructure work was part of the mechanism that supported later growth through retail channels, e-commerce, and digital platforms.",
    featured: {
      media: {
        kind: "image",
        src: "/lego/hero-lego-06.png",
        alt: "MIT and public validation of LEGO's digital transformation",
        aspectRatio: "16/9",
      },
      company: "Harvard, MIT, BCG, and The Guardian All Documented This Transformation",
      dates: "",
      summary:
        "LEGO's digital transformation became a management case study across multiple institutions and publications, reinforcing that the omni-channel infrastructure work was part of a genuine, documented corporate reinvention.",
      tags: ["Research", "Press", "Digital Transformation"],
    },
    rows: [
      {
        company: "How Lego Clicked: the Super Brand That Reinvented Itself",
        source: "The Guardian",
        dates: "June 4, 2017",
        summary:
          "The Guardian framed LEGO as one of the most successful corporate reinventions of its era, reinforcing the broader transformation story that the omni-channel commerce work supported.",
        tags: ["Press", "Brand Reinvention"],
        file: "/lego/files/03 The Guardian LEGO Digital.pdf",
      },
      {
        company: "MIS Quarterly Executive",
        source: "MIS Quarterly Executive",
        dates: "2016",
        summary:
          "MIS Quarterly Executive treated LEGO's transformation as a serious enterprise and digital strategy case, reinforcing the importance of its engagement-platform evolution.",
        tags: ["Research", "Enterprise Strategy"],
        file: "/lego/files/04 MIS Quarterly Executive_compressed.pdf",
      },
      {
        company: "Transforming the LEGO Group for the Digital Economy",
        source: "MIT Sloan CISR",
        dates: "March 2016",
        summary:
          "MIT Sloan CISR documented LEGO's effort to become a digital company and explicitly described the need for a stronger engagement platform, omni-channel access, and faster, more adaptive product delivery.",
        tags: ["Research", "Digital Transformation"],
        file: "/lego/files/02 MIT Case Study.pdf",
      },
      {
        company: "BCG Interview With LEGO CEO Jørgen Vig Knudstorp",
        source: "BCG",
        dates: "2016",
        summary:
          "BCG published an interview with LEGO CEO Knudstorp on the digital transformation strategy, including the need to move faster in omni-channel, e-commerce, and cloud-based services.",
        tags: ["Research", "Strategy"],
        file: "/lego/files/05 BCG Interview Lego CEO.pdf",
      },
      {
        company: "LEGO: An Iconic Brand's Digital Transformation",
        source: "Harvard Business Review",
        dates: "2015",
        summary:
          "Harvard Business Review documented LEGO's broader transformation journey, covering the turnaround strategy, digital evolution, and how the company rebuilt itself into a world-class brand.",
        tags: ["Research", "Brand Strategy"],
        file: "/lego/files/01 Harvard Business Review.pdf",
      },
    ],
  },
} satisfies CaseStudyData
