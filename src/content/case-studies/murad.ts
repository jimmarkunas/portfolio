import type { CaseStudyData } from "@/components/case-study/types"

export const muradCaseStudy = {
  slug: "murad",
  breadcrumbCurrent: "Murad",
  hero: {
    title: "Murad: From Chaos to Creation",
    intro:
      "Murad needed a cheaper, cleaner path off Magento and a subscription-first global DTC model that could sit on top of Oracle EBS and a messy pile of enterprise integrations. By the time I came in, two agencies were fired, the politics were bad, and three weeks before launch we learned BigCommerce couldn’t settle credit card payments over the API",
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
      "This wasn’t a normal replatform. It was a messy global shift from Magento to BigCommerce, built around subscriptions, tied into Oracle EBS and a long list of custom partners, with a client that had already fired agencies and still needed to hit launch. My job was to keep the stack together, calm the politics, and leave the business with something it could actually operate.",
    stats: [
      { value: "3", suffix: "", label: "Countries in Scopee" },
      { value: "11", suffix: "", label: "Named Integrations" },
      { value: "2", suffix: "", label: "Fired Agencies" },
      { value: "2", suffix: "", label: "Custom Platform Changes" },
    ],
  },
  problem: {
    eyebrow: "Problem Statement",
    title: "A Re-Platform Nobody Had Under Control",
    media: {
      kind: "image",
      src: "/murad/hero-murad-02.png",
      alt: "Murad project schedule and architecture planning materials",
      aspectRatio: "16/9",
    },
    overview:
      "Murad wanted off Magento. For them, the platform was expensive and too dependent on developer support. The problem? The replacement had no room for simplicity. BigCommerce had to sit on top of Oracle EBS, support subscriptions through OrderGroove (an integration that didn't exist), and carry a global rollout across the US, UK, and MY. When I got pulled in, two agencies had already churned, and core order, payment, shipment, and refund flows were nonexistent.",
    projectOverviewRows: [
      { label: "Client", value: "Murad (Unilever) Global DTC" },
      { label: "Industry", value: "Beauty • Skincare • eCommerce" },
      { label: "Timeline", value: "2019 Launch + Global Fast-Follows" },
    ],
    tools: [
      { label: "BigCommerce", icon: "/tool-icons/svg/bc-logo-blk.svg" },
      { label: "Oracle EBS", icon: "/tool-icons/svg/oracle-logo.svg" },
      { label: "OrderGroove", icon: "/tool-icons/svg/ordergroove-logo.svg" },
      { label: "Contentful", icon: "/tool-icons/svg/contentful-logo.svg" },
      { label: "SendGrid", icon: "/tool-icons/svg/sendgrid-logo.svg" },
      { label: "Avalara", icon: "/tool-icons/svg/avalara-logo.svg" },
      { label: "Yotpo", icon: "/tool-icons/svg/yotpo-logo.svg" },
    ],
    quote: {
      quote:
        "I needed a PM who could save the day. After Murad changed agencies twice, and my PM walked off the job, I personally requested Jim.",
      attributionTitle: "Neely Cox",
      attributionSubtitle: "Enterprise Account Manager, BigCommerce",
      avatarSrc: "/murad/neely-cox.jpeg",
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
      { value: "11", suffix: "", label: "Named Integrations" },
      { value: "$1", suffix: "M", label: "Program Budget" },
      { value: "2", suffix: "", label: "Team Size" },
      { value: "3", suffix: "", label: "Markets in Scope" },
    ],
    narrative: {
      title: "I Turned Chaos Into a Launch",
      paragraphs: [
        "BigCommerce was going to have to bend to the client, because the client wasn’t going to bend to the platform. Murad was used to Magento behavior, the business was under-staffed, the agencies were unstable, and the only way this was going to ship was if Neely & I documented the real order and payment logic, forced the right escalations, and kept the whole thing from collapsing into blame.",
        "I changed the trajectory in three places. I documented the Oracle order, shipment, and refund model, escalated the BigCommerce payment blocker to the CEO and CTO three weeks before launch, and pushed the stack toward a reusable subscription-first architecture instead of a one-off US patch.",
      ],
      highlights: [
        "Documented & solutioned the Oracle order, shipment, and refund logic.",
        "Escalated the payment-settlement blocker toe the CEO to get platform changes made before launch.",
        "Shaped a subscription-first model across BigCommerce, Oracle EBS, OrderGroove, and the global market rollout.",
      ],
      closing:
        "I held together a chaotic enterprise program long enough to ship something real, then left behind a clearer model than the one I inherited.",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "A Global Stack Murad Could Actually Run",
    copy:
      "I turned Murad's under-documented, partner-heavy eCommerce program into a workable BigCommerce + Oracle + subscriptions model with global rollout logic.",
    diagramKey: "murad-architecture",
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
      "The stack was hard. The client dynamic was harder. Murad was demanding, highly sensitive with partners, and already on its third agency when launch pressure hit full force. Most of the stack relied on custom partners, thin support, or BigCommerce operating outside the usual playbook. That made the real job bigger than architecture. It was keeping the program moving and the launch date credible.",
      "Three weeks before launch, we found a payment-settlement gap serious enough to kill the program. I caught Brent Bellm in the parking garage, walked him through the risk, got the CTO pulled in, and forced the escalation fast enough to keep launch alive.",
    ],
    highlights: [
      "The client was like Donald Trump on The Apprentice.",
      "The BC platform had some ugly enterprise gaps that came to head 3 weeks before launch.",
    ],
    closing:
      "Murad is one of my clearest examples of turning technical chaos, client politics, and partner instability into an actual launch.",
  },
  impact: {
    eyebrow: "Impact",
    title: "Launch, Stability, Independence",
    intro:
      "Murad got a global launch model, a smooth cutover, and a path off Magento that reduced dependence on a large internal dev team.",
    proofPoints: ["Rescue", "Scale", "Independence"],
    stats: [
      { value: "3", suffix: "", label: "Markets Launched" },
      { value: "2", suffix: "", label: "Custom BC Integrations" },
      { value: "0", suffix: "", label: "Launch Issues" },
      { value: "0", suffix: "", label: "Magento devs needed" },
    ],
    beforeAfter: {
      title: "Before & After",
      summary:
        "Murad moved from an expensive Magento model to a lighter BigCommerce operating model that could support subscriptions.",
      columns: [
        {
          label: "Before",
          title: "Expensive",
          points: [
            "Magento required heavy developer support.",
            "Marketing changes took weeks.",
            "Murad's confidence in the program was shaky.",
          ],
        },
        {
          label: "After",
          title: "Custom & Light",
          points: [
            "Murad launched 3 global markets.",
            "Launch earned explicit praise from Murad leadership.",
            "Murad had a clean path forward post Magento.",
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
        copy: "When the payment-settlement blocker surfaced late, I escalated it high & fast enough to prevent a launch failure.",
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
      "This was a messy global launch with no margin for drift. I managed architecture, subscriptions, partner realignment, escalations, and cutover while the client insisted BigCommerce act like Magento.",
    phases: [
      {
        phase: "Phase 01",
        title: "Diagnose",
        copy: "Mapped gaps across Magento parity, ERP, subscriptions, and cross-market rollout.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Stabilize",
        copy: "Re-aligned client & partner ecosystem after agency churn, and rebuilt confidence.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Defined subscription-first stack across BC, Oracle, OrderGroove, and Avalara.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Escalate",
        copy: "Surfaced critical payments blocker, pulled in executives, and solved the issue.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 05",
        title: "Launch",
        copy: "Delivered a smooth cutover, global market rollout, and a self-service commerce model.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  challengeQuote: {
    quote:
      "Thank you so much for the smooth launch. I know it took a lot of preparation by everyone involved. Very much appreciated by the leadership team at Murad.",
    attributionTitle: "Van Vuong",
    attributionSubtitle: "Chief Digital Officer, Murad",
    avatarSrc: "/murad/van-vuong.jpeg",
  },

} satisfies CaseStudyData
