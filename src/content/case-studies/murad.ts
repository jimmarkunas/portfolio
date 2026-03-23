import type { CaseStudyData } from "@/components/case-study/types"

export const muradCaseStudy = {
  slug: "murad",
  breadcrumbCurrent: "Murad",
  hero: {
    title: "I Turned Murad's Chaotic Replatform Into a Live Global DTC Engine",
    intro:
      "Murad was trying to move off Magento, reduce cost, stop relying on a large in-house dev team, and launch a subscription-first global DTC model on top of Oracle EBS and a pile of fragile integrations. By the time I was deep in the work, the client had fired two agencies, the politics were ugly, and three weeks before launch we discovered BigCommerce could not settle credit card payments over the API. I held the program together, escalated the blocker to the top, and got the launch over the line with a smooth cutover, six markets live, and zero Magento developers needed afterward.",
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
      src: "/murad/hero-murad-01.png",
      alt: "Murad global DTC replatform hero image",
    },
  },
  atAGlance: {
    eyebrow: "At-a-Glance",
    title: "Subscription-First Under Fire",
    copy:
      "This was not a clean migration. It was a politically messy, subscription-first global replatform from Magento to BigCommerce, wired into Oracle EBS and a long list of custom partners, under a client that had already churned through agencies and still needed to launch. My job was to make the stack hold, calm the room, and leave behind a model the business could actually run.",
    stats: [
      { value: "6", suffix: "", label: "markets in scope" },
      { value: "11", suffix: "", label: "named integrations" },
      { value: "2", suffix: "", label: "fired agencies" },
      { value: "1", suffix: "", label: "subscription model" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Replatform Nobody Had Under Control",
    media: {
      kind: "image",
      src: "/murad/hero-murad-02.png",
      alt: "Murad project schedule and architecture planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "Murad wanted out of Magento because the platform was expensive and demanded a level of developer support the business did not want to keep paying for. But the replacement was not simple. The new BigCommerce stack had to work with Oracle EBS as the financial source of truth, support subscriptions through OrderGroove, and carry a global rollout across the US, UK, AU, DE, MX, and MY. At the same time, the client had already churned through two agencies, and key order, payment, shipment, and refund flows were still under-documented and easy to break.",
    projectOverviewRows: [
      { label: "Client", value: "Murad (Unilever) Global DTC" },
      { label: "Industry", value: "Beauty • Skincare • eCommerce" },
      { label: "Timeline", value: "2019 Launch, With Global Fast-Follows" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/bc-logo.png" },
      { label: "Oracle EBS", icon: "/tool-icons/oracle-logo.png" },
      { label: "OrderGroove", icon: "/tool-icons/ordergroove-logo.png" },
      { label: "Contentful", icon: "/tool-icons/contentful-logo.png" },
    ],
    quote: {
      quote:
        "As an account manager, I needed a PM who could save the day. After Murad changed agencies twice, and my PM walked off the job, I personally requested Jim.",
      attributionTitle: "Neely Cox",
      attributionSubtitle: "Enterprise Account Manager, BigCommerce",
    },
  },
  role: {
    eyebrow: "My Role",
    title: "Program Manager & Solutions Architect",
    copy:
      "I was the person holding together architecture, launch planning, executive escalation, partner management, and day-to-day client survival. In plain English, I was the program manager, solution engineer, and client therapist at the same time.",
    tags: [
      "Program Leadership",
      "Solution Architecture",
      "Global DTC",
      "Subscription Commerce",
    ],
    stats: [
      { value: "11", suffix: "", label: "named integrations" },
      { value: "$1", suffix: "M", label: "program budget" },
      { value: "2", suffix: "", label: "team size" },
      { value: "6", suffix: "", label: "markets in scope" },
    ],
    narrative: {
      title: "I Turned Chaos Into a Launch",
      paragraphs: [
        "What I saw faster than other people was simple, BigCommerce was going to have to change to accommodate the client, because the client was not going to change to accommodate the platform. Murad was used to Magento behavior, the business was under-staffed, the agencies were unstable, and the only way this would ship was if someone could document the real order and payment logic, force the right escalations, and keep everyone moving without letting the whole thing dissolve into blame.",
        "I made three decisions that changed the trajectory. First, I documented the Oracle order, shipment, and refund model so people could stop guessing how the business actually worked. Second, when we discovered three weeks before launch that BigCommerce could not settle credit card payments over the API, I escalated it straight to the top and got the CEO and CTO pulled in, which got the blocker resolved. Third, I shaped the stack as a subscription-first architecture that Murad could reuse across markets instead of as a one-off patch job built only for the US.",
      ],
      highlights: [
        "Documented the Oracle order, shipment, and refund logic that the team needed to stop improvising around.",
        "Escalated the payment-settlement blocker high enough to get platform changes made before launch.",
        "Shaped a subscription-first model across BigCommerce, Oracle EBS, OrderGroove, and the global market rollout.",
      ],
      closing:
        "This is the kind of work I am unusually good at, holding together chaotic enterprise programs long enough to ship something real, then leaving behind a clearer model than the one I inherited.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Global Stack Murad Could Actually Run",
    copy:
      "I helped turn Murad's under-documented, partner-heavy eCommerce program into a workable BigCommerce and Oracle model with subscriptions, global rollout logic, and enough self-service capability that the business could stop depending on a permanent bench of Magento developers. The stack was not small, but after the work, it was finally legible.",
    cards: [
      {
        category: "Subscription Engine",
        readTime: "OrderGroove + recurring commerce",
        title:
          "I helped define the subscription-first architecture across OrderGroove, BigCommerce, and Murad's business rules, including frequency logic, incentives, customer-service controls, and legacy subscription migration.",
        art: "olive",
      },
      {
        category: "Enterprise Backbone",
        readTime: "Oracle-first order model",
        title:
          "I documented and stabilized the order, shipment, payment, and refund logic between BigCommerce and Oracle EBS so the business had a repeatable operating model instead of undocumented tribal knowledge.",
        art: "olive",
      },
      {
        category: "Global Commerce Layer",
        readTime: "Multi-market rollout",
        title:
          "I helped shape a shared launch pattern across the US, UK, AU, DE, MX, and MY, while keeping critical integrations aligned across Contentful, Braintree, Kount, Avalara, SendGrid, Retention Science, Yotpo, and Swell.",
        art: "olive",
      },
    ],
  },
  supplementalNarrative: {
    title: "The Politics Were the Project",
    paragraphs: [
      "The technical work was hard, but the politics were harder. Murad was demanding, highly sensitive to perceived slights from partners, and already on agency number three by the time the launch pressure peaked. Almost every important partner in the stack was either custom, semi-supported, or dependent on BigCommerce stretching beyond the normal playbook. That meant the real job was not only architecture, it was maintaining enough confidence and enough forward motion that the launch date remained believable.",
      "That is why the parking-garage story matters. Three weeks before launch, we found a payment-settlement gap serious enough to derail the program. I literally caught Brent Bellm in the parking garage, explained the risk, asked him to call the CTO, and got the issue elevated fast enough to keep the launch alive. That was not normal project management. That was operator judgment under pressure.",
    ],
    highlights: [
      "The client had already churned through two agencies before the launch stabilized.",
      "A platform limitation discovered three weeks before go-live required CEO and CTO escalation.",
    ],
    closing:
      "Murad is one of my clearest examples of turning technical chaos, client politics, and partner instability into an actual launch.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Launch, Stability, Independence",
    intro:
      "The outcome was not just a new site. Murad got a global launch model, a smoother cutover than the circumstances deserved, and a path off Magento that reduced dependence on a large internal dev team. Just as important, the work put me on the map internally as someone who could survive the ugliest CPG stacks and still ship.",
    proofPoints: ["Scale", "Rescue", "Independence"],
    stats: [
      { value: "6", suffix: "", label: "markets launched" },
      { value: "3", suffix: "", label: "custom BC integrations" },
      { value: "1", suffix: "", label: "smooth cutover" },
      { value: "0", suffix: "", label: "Magento devs needed" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "Murad moved from an expensive, developer-dependent Magento model and chaotic partner environment to a cleaner BigCommerce and Oracle operating model that could support subscriptions and global growth.",
      columns: [
        {
          label: "Before",
          title: "Expensive, Fragile, Under-Documented",
          points: [
            "Magento required more internal developer support than the business wanted to carry.",
            "Order, payment, shipment, and refund flows were hard to explain and easy to break.",
            "The client had already churned through agencies and confidence in the program was shaky.",
          ],
        },
        {
          label: "After",
          title: "Live, Clearer, More Repeatable",
          points: [
            "Murad launched across six markets on a subscription-first BigCommerce model.",
            "The cutover went smoothly enough to earn explicit praise from Murad leadership.",
            "The business had a path forward without needing a permanent Magento-heavy support model.",
          ],
        },
      ],
    },
    journeySteps: [
      {
        step: "1",
        title: "Make the Stack Legible",
        copy: "I translated undocumented Oracle, payment, and subscription logic into something teams could actually work from.",
      },
      {
        step: "2",
        title: "Escalate the Real Risk",
        copy: "When the payment-settlement blocker surfaced late, I escalated it high enough and fast enough to prevent a launch failure.",
      },
      {
        step: "3",
        title: "Ship Through the Chaos",
        copy: "I held the client, partners, platform, and global rollout together long enough to get the launch done and leave behind a model the business could keep using.",
      },
    ],
  },
  delivery: {
    eyebrow: "Implementation",
    title: "Delivery Phases",
    introTitle: "How I Held It Together",
    introCopy:
      "This was a politically messy global launch with almost no room for drift. The work moved through architecture clarification, partner realignment, subscription design, platform escalation, and final cutover, all while the client expected BigCommerce to behave like Magento and the agencies kept changing around us.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped the real gaps across Magento replacement, Oracle EBS dependencies, subscription requirements, and cross-market rollout needs.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Stabilize",
        copy: "Re-aligned the client and partner ecosystem after agency churn, and rebuilt enough confidence to keep the launch plan alive.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined the subscription-first stack across BigCommerce, Oracle EBS, OrderGroove, Contentful, tax, payments, service, and marketing tools.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Escalate",
        copy: "Surfaced the payment-settlement blocker, pulled in executive support, and got the platform issue solved before go-live.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered a smooth cutover, global market rollout, and a self-service commerce model Murad could operate with far less Magento dependence.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Thank you so much for the smooth launch. I know it took a lot of preparation by everyone involved. Very much appreciated by the leadership team at Murad.",
    attributionTitle: "Van",
    attributionSubtitle: "Murad Stakeholder",
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Validation & Follow-On Impact",
    intro:
      "The strongest proof here was not outside press. It was the fact that Murad became a reference-style success internally and the work helped establish me as the person who could handle ugly CPG commerce stacks when the politics and integrations got difficult.",
    rows: [
      {
        company: "Murad Reference Win",
        dates: "Post-launch",
        summary:
          "The project positioned Murad as a reference-style customer and strengthened internal trust that I could handle chaotic enterprise launches.",
        tags: ["Reference", "Internal Credibility"],
      },
      {
        company: "Subscription Program Live",
        dates: "2019",
        summary:
          "The OrderGroove-powered Auto-Delivery model went live with defined frequency rules, incentives, migration logic, and customer-service controls.",
        tags: ["Subscriptions", "Launch"],
      },
      {
        company: "Global Expansion Pattern",
        dates: "2019 and after",
        summary:
          "The launch created a reusable BigCommerce and Oracle pattern that supported fast-follow international markets beyond the first US go-live.",
        tags: ["Scale", "Global Rollout"],
      },
    ],
  },
} satisfies CaseStudyData
