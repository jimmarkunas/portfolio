import type { CaseStudyData } from "@/components/case-study/types"

export const fredericksCaseStudy = {
  slug: "foh",
  breadcrumbCurrent: "Frederick's of Hollywood",
  hero: {
    title: "Turning Frederick's Into Celebrity-Driven DTC",
    intro:
      "After buying Frederick’s of Hollywood out of bankruptcy, ABG needed a fast digital-first relaunch built around Megan Fox as co-owner, without repeating the cost and weight of a traditional enterprise stack. I helped deliver a Shopify Plus flagship built for traffic, promotions, and a cleaner operating model.",
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
      src: "/foh/hero-foh-01.png",
      alt: "Frederick's of Hollywood digital relaunch hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Celebrity Traffic, Lean Stack",
    copy:
      "This wasn't a standard eCommerce launch. For ABG, It was a dead brand brought back as a digital-first flagship, with Megan Fox as the campaign machine. For Shopify, it was to prove Plus as the right-sized architecture under the hood. My job was to make the launch fast, operationally safe, and light enough to move at campaign speed.",
    stats: [
      { value: "25", suffix: "%", label: "Lower TCO" },
      { value: "3", suffix: "x", label: "Faster Promo Launches" },
      { value: "1", suffix: "", label: "Unified Shop Stack" },
      { value: "1", suffix: "", label: "Celebrity-led Re-launch" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Dead Brand Needed a Live Campaign Machine",
    media: {
      kind: "youtube",
      videoId: "FVzUv5UsKXc",
      aspectRatio: "16/9",
    },
    overview:
      "Frederick's went bankrupt and shuttered its stores. ABG bought the brand as an online revival play, not a nostalgia project. The relaunch had to be fast, marketing-led, and lean (to survive without a bloated enterprise stack). The challenge was building a DTC flagship that could handle celebrity-driven traffic spikes, constant campaign launches, and a full rebrand, while Shopify Plus  was still maturing for enterprise and needed creative workarounds behind the scenes.",
    projectOverviewRows: [
      { label: "Client", value: "Frederick's of Hollywood" },
      { label: "Industry", value: "Fashion • DTC • Brand Relaunch" },
      { label: "Timeline", value: "2016 - 2018" },
    ],
    tools: [
      { label: "Klaviyo", icon: "/tool-icons/svg/klaviyo-logo.svg" },
      { label: "Domo", icon: "/tool-icons/svg/domo-logo.svg" },
      { label: "Shopify Plus", icon: "/tool-icons/svg/shopify-logo.svg" },
    ],
    quote: {
      quote:
        "We needed to completely re-brand Frederick's. We needed to launch fast. I had to have Shopify. Jim & I made magic at American Apparel, I had to have Jim as PM.",
      attributionTitle: "Amanda Lopez",
      attributionSubtitle: "Director of eCommerce, Frederick's of Hollywood",
      avatarSrc: "/foh/amanda-lopez.jpeg",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Enterprise Program Manager",
    copy:
      "I had one goal: get Frederick's live fast without a bloated stack. I owned the launch, stack coordination, and operating model that made the needle move, and supported the platform enhancement work after launch. It was equal parts program leadership, architecture triage, and campaign-readiness planning.",
    tags: [
      "Program Leadership",
      "DTC Relaunch",
      "Solutioning",
      "Marketing Ops",
    ],
    stats: [
      { value: "3", suffix: " mo", label: "Launch Timeline" },
      { value: "$3", suffix: "M", label: "Program Budget" },
      { value: "9", suffix: "", label: "Team Size" },
      { value: "6", suffix: "", label: "System Integrations" },
    ],
    narrative: {
      image: "/foh/hero-foh-03.png",
      title: "I Made the Re-launch Fast Enough to Matter",
      paragraphs: [
        "Frederick's didn't need monolithic commerce architecture. It needed a high-speed flagship. Marketing needed to move like a media brand while still keeping the back office clean. But Shopify Plus was still early in its enterprise maturity, which meant the clean sales story didn't always match the implementation reality. The platform was right for total cost of ownership & speed, but only if someone knew how to work around the rough edges without over-engineering.",
        "I changed the trajectory in three places: I helped keep the Shopify Plus relaunch lean + right-sized for a digital-first brand revival. I built for marketing speed, so promos could launch without engineering bottlenecks. Then, I kept the back office connected through lightweight integrations & workarounds to let the business stay lean without breaking operations.",
      ],
      highlights: [
        "Helped right-size the architecture for a digital-first relaunch.",
        "Built for marketing-owned campaign velocity to launch promotions faster.",
        "Kept the back-office systems aligned without slowing the brand down.",
      ],
      closing:
        "This wasn't just a re-launch. It was proof that right architecture beats big architecture when speed, cost, and campaign velocity are on the line.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Lean Stack, Loud Re-launch",
    copy:
      "I shaped a commerce model that gave ABG a premium flagship without dragging old retail baggage into the build. Shopify Plus drove the storefront & promo velocity, while the stack stayed lean.",
    cards: [
      {
        category: "Flagship Commerce",
        readTime: "Right-sized architecture",
        title:
          "I helped frame Shopify Plus as the right answer for a pure-play relaunch, giving the brand a fast, lower-TCO storefront instead of another oversized commerce program.",
        art: "/foh/modal-foh-01.png",
      },
      {
        category: "Campaign Engine",
        readTime: "Marketing-owned velocity",
        title:
          "I structured the store so marketing could move quickly on campaign drops, promotions, and celebrity-led launches without making engineering the bottleneck every time.",
        art: "/foh/modal-foh-02.png",
      },
      {
        category: "Lean Operations",
        readTime: "Back-office sync",
        title:
          "I kept ERP/OMS, 3PL, payments, fraud tools, and email/marketing aligned through lightweight integrations and practical workarounds that kept the stack lean but reliable.",
        art: "/foh/modal-foh-03.png",
      },
    ],
  },
  supplementalNarrative: {
    title: "Megan Fox Was the Spark, the Commerce System Was the Gasoline",
    paragraphs: [
      "The relaunch worked because the Shopify Plus could keep up with the brand story. Megan Fox wasn't just a face on the campaign, she was a stakeholder, and the driving force that gave Frederick's relevance again; she kept the relaunch in the press. That kind of attention is great, until your stack folds under it.",
      "My job was to make sure the business could ride the wave without infrastructure wiping out. The win was making a celebrity-driven re-launch feel operationally effortless, even though the platform still needed creative workarounds to behave like enterprise software when it mattered.",
    ],
    highlights: [
      "The stack had to survive traffic and ordering spikes and stay easy for marketing & merchandising stakeholders to run.",
      "The stack had to be consistent; the relaunch turned PR momentum into a real operating model instead of a one-week burst of attention.",
    ],
    closing:
      "The creative was loud. The architecture was disciplined.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Lower Cost, Fast Campaigns, More Control",
    intro:
      "Frederick's was more than a pretty re-launch. It was one unified stack that could support on-going DTC operations without collapsing.",
    proofPoints: ["Build", "Iterate", "ROI"],
    stats: [
      { value: "25", suffix: "%", label: "lower TCO" },
      { value: "3", suffix: "x", label: "faster promo launches" },
      { value: "1", suffix: "", label: "unified shop stack" },
      { value: "1", suffix: "", label: "campaign machine" },
    ],
    statsImage: "/foh/hero-foh-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "Frederick's moved from bankrupt to a digital-first flagship built for velocity.",
      columns: [
        {
          label: "Before",
          title: "Dead Brand, Heavy Risk",
          points: [
            "Frederick's went bankrupt + lost physical retail.",
            "No DTC commerce existed for the brand.",
            "No promotional engine for digital campaigns.",
          ],
        },
        {
          label: "After",
          title: "Lean DTC Engine",
          points: [
            "Commerce model built for digital-first ops.",
            "Promotional launches moved 3x faster.",
            "Unified DTC stack for on-going growth.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Right-Sized the Stack",
        copy: "I helped keep architecture honest, lean & fast-moving, strong enough to survive traffic and operationss.",
      },
      {
        step: "2",
        title: "Built for Campaign Velocity",
        copy: "I structured the re-launch so marketing could own promotions and celebrity-driven moments without engineering tickets.",
      },
      {
        step: "3",
        title: "Turned PR Into Operations",
        copy: "The result was a DTC flagship that could convert PR momentum into a repeatable commerce model.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "I Helped Bring Frederick's Back to Life",
    introCopy:
      "The re-launch cut across strategy, architecture, integrations, and campaign operations.",
    phases: [
      {
        phase: "Phase 01",
        title: "Reframe",
        copy: "Positioned re-launch as a digital-first flagship program.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Right-Size",
        copy: "Shaped a lean Shopify Plus architecture + integration boundaries for fast execution.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Operationalize",
        copy: "Designed marketing-owned campaign workflow and practical back-office workarounds.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Launch",
        copy: "Delivered a celebrity-ready flagship that could absorb the Megan Fox re-launch push.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Scale",
        copy: "DTC blueprint ABG could use as a template for future brands.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Jim gave us speed & creative problem-solving. He turned a bankrupt brand into a campaign-ready commerce machine without burying us in complexity.",
    attributionTitle: "Amanda Lopez",
    attributionSubtitle: "Director of eCommerce, Frederick's of Hollywood",
    avatarSrc: "/foh/amanda-lopez.jpeg",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "The relaunch moved Frederick’s from bankruptcy recovery into real market visibility. Megan Fox kept the brand in the press, and the digital-first model gave ABG a way to turn that attention into a functioning DTC business.",
    leadImage: {
      src: "/foh/hero-foh-05.png",
      alt: "Megan Fox campaign image from the Frederick's of Hollywood relaunch",
    },
    featured: {
      media: {
        kind: "youtube",
        videoId: "aq36WDqpzvo",
        aspectRatio: "16/9",
      },
      company: "Megan Fox Extra TV Interview",
      dates: "March 30, 2018",
      summary:
        "Extratv interview at the launch of Megan's Frederick's lingerie collection at Forever 21.",
      tags: ["TV", "Extra"],
    },
    rows: [
      {
        company: "Megan Fox Dons Frederick's of Hollywood Teddy for Her Lingerie Launch",
        source: "Daily Mail",
        dates: "March 24, 2018",
        summary:
          "Daily Mail covered the Forever 21 spring launch event, showing the brand's celebrity-led relaunch moving beyond one campaign into broader retail visibility and seasonal drops.",
        tags: ["Press", "Daily Mail"],
        file: "/foh/files/05-foh-dailymail.pdf",
      },
      {
        company: "Megan Fox Stuns in Raunchy Frederick's of Hollywood Shoot",
        source: "The Sun",
        dates: "2018",
        summary:
          "The Sun covered Megan Fox's continued campaign presence for Frederick's, extending the brand's reach into international tabloid and pop-culture coverage.",
        tags: ["Press", "The Sun"],
        file: "/foh/files/08-foh-thesun.pdf",
      },
      {
        company: "Megan Fox Models Lingerie in Steamy Frederick's of Hollywood Campaign",
        source: "E! Online",
        dates: "October 25, 2017",
        summary:
          "E! highlighted the holiday 2017 campaign and Fox's first design collaboration, reinforcing the speed and flexibility of the new digital campaign engine.",
        tags: ["Press", "E! Online"],
        file: "/foh/files/06-foh-eonline.pdf",
      },
      {
        company: "Megan Fox Launches Lingerie Line With Frederick's of Hollywood",
        source: "W Magazine",
        dates: "2017",
        summary:
          "W Magazine covered the Megan Fox collection launch, positioning Frederick's relaunch as a fashion-forward brand moment rather than a nostalgia play.",
        tags: ["Press", "W Magazine"],
        file: "/foh/files/04-foh-wmagazine.pdf",
      },
      {
        company: "Megan Fox Tapped to Front Revamped Lingerie Brand Frederick's of Hollywood",
        source: "Stuff NZ",
        dates: "September 22, 2016",
        summary:
          "Stuff NZ reported that Megan Fox joined Frederick's as brand ambassador, stakeholder, and creative partner after ABG bought the company out of bankruptcy, making the relaunch a long-term brand play rather than a one-off endorsement.",
        tags: ["Press", "Stuff NZ"],
        file: "/foh/files/07-foh-stuffnz.pdf",
      },
      {
        company: "The Return of Frederick's of Hollywood",
        source: "The Cut",
        dates: "2016",
        summary:
          "The Cut covered the Frederick's brand revival, contextualizing the digital-first relaunch within the broader landscape of legacy lingerie brands reinventing themselves post-bankruptcy.",
        tags: ["Press", "The Cut"],
        file: "/foh/files/03-foh-thecut.png",
      },
      {
        company: "Frederick's of Hollywood Is Back and It Looks Like This",
        source: "Refinery29",
        dates: "2016",
        summary:
          "Refinery29 previewed the digital-first relaunch and the brand's new identity, helping Frederick's reach a younger DTC audience ahead of the first Megan Fox campaign.",
        tags: ["Press", "Refinery29"],
        file: "/foh/files/02-foh-refinery29.pdf",
      },
      {
        company: "Frederick's of Hollywood Goes Digital After ABG Acquisition",
        source: "New York Business Journal",
        dates: "2016",
        summary:
          "New York Business Journal covered ABG's acquisition of Frederick's and the strategy to relaunch the brand as a pure-play digital flagship without a physical retail footprint.",
        tags: ["Press", "NY Business"],
        file: "/foh/files/01-foh-nybizjournal.pdf",
      },
    ],
  },
} satisfies CaseStudyData
