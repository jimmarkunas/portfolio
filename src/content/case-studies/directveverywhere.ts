import type { CaseStudyData } from "@/components/case-study/types"

export const directveverywhereCaseStudy = {
  slug: "dtv02",
  breadcrumbCurrent: "DIRECTV Everywhere",
  hero: {
    title: "Leading the Launch of DIRECTV Everywhere",
    intro:
      "DIRECTV Everywhere was supposed to prove the company could bring premium video beyond the set-top box, but marketing had sold the dream before the product was ready. I stepped in to align 35+ teams around one product truth & turn a public promise into a scalable streaming experience.",
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
    copy:
      "This was DIRECTV's first serious attempt to become a true cross-platform streaming product for a national subscriber base. My job was to keep the product from collapsing under public pressure, align the people problem behind the launch, and make sure the experience worked across phones, tablets, web, and connected TV's instead of turning into a fragmented campaign gimmick.",
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
    overview:
      "Before DIRECTV Everywhere, DIRECTV was still a broadcast TV business trying to answer a market that was rapidly shifting to streaming on every screen. Netflix, HBOGo, and the broader app economy were already teaching customers to expect on-demand, authenticated viewing anywhere. DTV's marketing had already promised the experience publicly, while product, content, device, security, and operations teams were still fighting over what the product actually was.",
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
    copy:
      "I owned the product definition layer that kept a very public streaming launch from disintegrating into cross-functional chaos. I wrote the PRDs, kept 35+ teams aligned, forced decisions around parity and entitlement, and made sure the product that shipped matched one coherent truth instead of 7 competing narratives.",
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
      paragraphs: [
        "DIRECTV Everywhere was not dying because streaming technology was impossible. It was dying because too many teams were in-fighting over competing roadmpas, while a national campaign was selling subscriberships for a product that didn't exist. Public promises on one side, organizational confusion on the other, it was killing the product.",
        "I made three decisions that changed the trajectory. First, I pushed cross-device parity as a product requirement. Second, I prioritized content reach and network integration over perfect player polish, because a broader, coherent experience mattered more than UI perfection. Third, I forced one authentication & entitlement truth across the experience, hence DIRECTV 'Everywhere.'",
      ],
      highlights: [
        "Wrote the product requirements that kept 35+ teams working toward one launch truth.",
        "Forced cross-device parity across web, tablets, phones, Roku, Fire TV, and Apple TV.",
        "Prioritized authentication, entitlement, and content reach over feature sprawl and product drift.",
      ],
      closing:
        "This is how I turn campaign pressure and org chaos into a real consumer product that moves the needle.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "One Product Across Every Screen",
    copy:
      "I helped turn DIRECTV Everywhere from a campaign idea to a coherent product by defining what needed to stay consistent across devices, what content the service could credibly promise, and how subscribers should move through one authenticated experience.",
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
    paragraphs: [
      "Streaming products look like technical stories from the outside; this was an operationalization story. The challenge was getting product, engineering, device teams, content partners, authentication, DRM, operations, QA, and marketing to stop optimizing for their own roadmap and start shipping one believable experience. The PRDs mattered; they weren't paperwork. They were the mechanism that kept the product from splitting into competing realities.",
      "The campaign was already public, so were the stakes. Every missed decision or unresolved fight among teams raised the risk customers would discover the gap between the promise and the product. My job was to close that gap before DIRECTV lost face in public.",
    ],
    highlights: [
      "The core problem was org alignment.",
      "The problem was not a lack of technical ambition..",
    ],
    closing:
      "DIRECTV Everywhere mattered because it proved DTV could behave like a streaming product company, not just advertise like one.",
    closingImage: "/directveverywhere/hero-directveverywhere-05.png",
  },
  impact: {
    eyebrow: "Impact",
    title: "Scale, Reach & Credibility",
    intro:
      "DIRECTV Everywhere became more than just a slick marketing campaign. It turned into a real product that customers downloaded, used across devices, and expanded into it's own standalone product still sold today.",
    proofPoints: ["Parity", "Adoption", "Reach"],
    stats: [
      { value: "5", suffix: "M+", label: "Downloads" },
      { value: "5", suffix: "", label: "Device Families" },
      { value: "400", suffix: "+", label: "Channels" },
      { value: "$200", suffix: "M", label: "Revenue Uplift" },
    ],
    statsImage: "/directveverywhere/hero-directveverywhere-04.png",
    beforeAfter: {
      title: "Before & After",
      summary:
        "Trad TV masquerading as digital to best-in-class cross-platform streaming.",
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
        copy:
          "I used product requirements to force alignment across teams that were each trying to define 'Everywhere' differently.",
      },
      {
        step: "2",
        title: "Prioritized What Mattered",
        copy:
          "I pushed for cross-device parity, usable entitlement logic, and content reach instead of features that wouldn't survive scale.",
      },
      {
        step: "3",
        title: "Shiped Something the Market Believed in",
        copy:
          "The result was a first-generation streaming product that actually worked in public and gave DIRECTV a credible seat at the table in the early streaming wars.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Helped Make It Real",
    introCopy:
      "This launch had to move from campaign promise to working product under intense public and internal pressure. The program moved through product definition, entitlement alignment, device rollout, and scale-up stages, all while keeping a large organization in step.",
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
    intro:
      "DIRECTV Everywhere represented a real shift in how traditional pay-TV providers showed up in the streaming era. Press coverage tracked the rollout from beta to cross-platform expansion, then followed the service as it widened device support, channel reach, and network partnerships.",
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
    rows: [
      {
        company: "DirecTV's OTT Plans Signal a Bigger Streaming Push",
        source: "The Hive",
        dates: "April 12, 2015",
        summary:
          "The Hive tied DIRECTV's OTT ambitions to the broader shift in television distribution, reinforcing the strategic importance of the company's streaming foundation.",
        tags: ["Press", "Hive"],
        file: "/dtv02/files/20150412_DTVE_Hive.pdf",
      },
      {
        company: "DirecTV Streaming Service Planned for 2015",
        source: "Variety",
        dates: "December 19, 2014",
        summary:
          "Variety reported on DIRECTV's next-generation streaming service plans, reflecting how Everywhere had become part of a much bigger digital video strategy.",
        tags: ["Press", "Variety"],
        file: "/dtv02/files/20141219_DTVE_Variety.pdf",
        url: "https://variety.com/2014/digital/news/directv-inks-fox-deal-for-suite-of-internet-tv-services-1201383478/",
      },
      {
        company: "DirecTV to Add Showtime, STARZ to New Streaming Video Service",
        source: "The Hollywood Reporter",
        dates: "December 19, 2014",
        summary:
          "The Hollywood Reporter covered DIRECTV's broader streaming ambitions as the company pushed premium video deeper into authenticated digital access.",
        tags: ["Press", "THR"],
        file: "/dtv02/files/20141219_DTVE_Hollywood_Reporter.pdf",
      },
      {
        company: "Fox Gives DirecTV Everywhere Customers More Than 50 Out-of-Home Live TV Channels",
        source: "Solid Signal",
        dates: "June 9, 2014",
        summary:
          "Solid Signal covered the Fox Now, FXNow, and Nat Geo TV deal that pushed DIRECTV Everywhere beyond 50 out-of-home live linear channels.",
        tags: ["Press", "Solid Signal"],
        file: "/dtv02/files/20140609_DTVE_Solid_Signal.pdf",
      },
      {
        company: "DirecTV Everywhere Expands Authenticated Streaming Access",
        source: "Yahoo News",
        dates: "April 26, 2014",
        summary:
          "Yahoo News covered the continued growth of DIRECTV Everywhere as the service expanded its authenticated streaming footprint and channel access across devices.",
        tags: ["Press", "Yahoo"],
        file: "/dtv02/files/20140426_DTVE_Yahoo_News.png",
      },
      {
        company: "DIRECTV Everywhere Is Now Available on the Roku Platform",
        source: "Roku",
        dates: "February 25, 2014",
        summary:
          "Roku announced the arrival of DIRECTV Everywhere on its platform, expanding the product beyond phones, tablets, and computers into connected TV usage.",
        tags: ["Partner", "Roku"],
        file: "/dtv02/files/20140225_DTVE_Rokudotcom.pdf",
      },
      {
        company: "DirecTV Everywhere Brings Streaming Movies, TV Shows to Android Right Now, iPhone Keeps Waiting",
        source: "Solid Signal",
        dates: "April 26, 2012",
        summary:
          "Solid Signal followed up on the Android expansion of DIRECTV Everywhere, tracking how the service was rolling out across device families as the product matured.",
        tags: ["Press", "Solid Signal"],
        file: "/dtv02/files/20120426_DTVE_Solid_Signal.pdf",
      },
      {
        company: "DirecTV's New Streaming Deal Puts Netflix and Hulu on Notice",
        source: "MIT Technology Review",
        dates: "April 17, 2012",
        summary:
          "MIT Technology Review framed DIRECTV's Starz agreement as part of a bigger effort to compete with emerging streaming leaders like Netflix and Hulu.",
        tags: ["Press", "MIT"],
        file: "/dtv02/files/20120417_DTVE_MIT_Technology_Review.pdf",
        url: "https://www.technologyreview.com/2012/04/17/256166/starz-directv-take-on-netflix-hulu/",
      },
      {
        company: "DirecTV Launches Everywhere Streaming App for iPad and Android",
        source: "Engadget",
        dates: "March 21, 2012",
        summary:
          "Engadget covered the early rollout of DIRECTV Everywhere and its cross-device ambitions as the service moved from announcement into its first public availability.",
        tags: ["Press", "Engadget"],
        file: "/dtv02/files/20120321_DTVE_Engadget.pdf",
        url: "https://www.engadget.com/2012-03-21-directv-ipad-app-adds-some-tv-and-movie-streaming-everywhere.html",
      },
      {
        company: "DirecTV Everywhere App Expected in Late Spring, Early Summer",
        source: "Solid Signal",
        dates: "March 11, 2012",
        summary:
          "Solid Signal reported on the iPad beta and the company's early plan to bring DIRECTV Everywhere to broader device access in the coming months.",
        tags: ["Press", "Solid Signal"],
        file: "/dtv02/files/20120311_DTVE_Solid_Signal.pdf",
        url: "https://blog.solidsignal.com/reviews/hands-directv-everywhere/",
      },
    ],
  },
} satisfies CaseStudyData
