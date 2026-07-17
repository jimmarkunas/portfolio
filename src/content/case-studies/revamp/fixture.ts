import type { CaseStudyRevampData } from "./types"

export const caseStudyRevampFixture = {
  slug: "case-study-test",
  breadcrumbCurrent: "Template Test",
  hero: {
    eyebrow: "Fictional placeholder",
    title: "Atlas Ops: A Clearer Operating Model for Service Teams",
    intro:
      "This fictional case study exists only to pressure-test the standard template. It gives us a realistic, outcome-led story so we can review hierarchy, spacing, and responsive behavior before any live migration begins.",
    metrics: [
      { value: "32", suffix: "%", label: "Fewer handoff delays" },
      { value: "4", suffix: "D", label: "Faster status clarity" },
      { value: "8", suffix: "", label: "Systems rationalized" },
    ],
    image: {
      kind: "image",
      src: "/test/man-placeholder.png",
      alt: "Fictional placeholder hero visual for the case study template test",
      aspectRatio: "16/9",
    },
  },
  productionQuote: {
    quote:
      "We needed to completely re-brand Frederick's. We needed to launch fast. I had to have Shopify. Jim & I made magic at American Apparel, I had to have Jim as PM.",
    attributionTitle: "Amanda Lopez",
    attributionSubtitle: "Director of eCommerce, Frederick's of Hollywood",
    avatarSrc: "/foh/amanda-lopez.jpeg",
  },
  executiveBrief: {
    eyebrow: "Executive Brief",
    title: "Recruiter-readable context in one view",
    copy:
      "This section keeps the facts compact and the narrative readable so the page can be scanned quickly without losing the shape of the work.",
    role: "Product and Program Lead",
    client: "Northstar Service Network (fictional)",
    timeline: "April 2025 - September 2025",
    teamStakeholders: "12 people across operations, design, engineering, finance, and service leadership",
    budgetScale: "$1.6M program spanning 3 regional teams and 1 national support desk",
    systemsTechnology: "Figma, React, ServiceNow, SAP, Airtable, and a shared reporting layer",
    tools: [
      { label: "Figma", icon: "/tool-icons/svg/figma-logo.svg" },
      { label: "React", icon: "/tool-icons/svg/react-logo.svg" },
      { label: "ServiceNow", icon: "/tool-icons/svg/servicenow-logo.svg" },
    ],
    problem:
      "The intake, dispatch, and follow-up experience was splitting across too many systems, so teams could not trust the status of urgent work.",
    mandate:
      "Create one operating model that made ownership visible, reduced handoff risk, and gave leadership a clearer way to manage service work.",
    whatIChanged:
      "I simplified the front door, clarified who owned each step, and aligned the operating sequence with the way teams actually worked.",
    outcome:
      "The program became easier to run, easier to explain, and faster to act on because the workflow matched the real business problem.",
    facts: [
      { icon: "role", label: "Role", value: "Product and Program Lead" },
      { icon: "client", label: "Client", value: "Northstar Service Network (fictional)" },
      { icon: "timeline", label: "Timeline", value: "April 2025 - September 2025" },
      { icon: "team", label: "Team & Stakeholders", value: "12 people across operations, design, engineering, finance, and service leadership" },
      { icon: "budget", label: "Budget & Scale", value: "$1.6M program spanning 3 regional teams and 1 national support desk" },
      { icon: "systems", label: "Systems", value: "Figma, React, ServiceNow, SAP, Airtable, and a shared reporting layer" },
    ],
  },
  challenge: {
    eyebrow: "Challenge",
    title: "The risk was operational, not cosmetic",
    paragraphs: [
      "The team was losing time every time a case moved from intake to dispatch to follow-up. One group saw a ticket as open, another saw it as waiting, and leadership saw three different versions of the same work.",
      "That mismatch created real risk: missed handoffs, duplicate effort, and a status model that was too vague to support confident decisions. The constraints were familiar to any messy service program: limited time, legacy systems, and stakeholders who needed proof before they changed anything.",
    ],
    visual: {
      kind: "video-placeholder",
      title: "Before-state workflow placeholder",
      subtitle: "Use this space for the rough process map, journey artifact, or pre-launch screenshot.",
      aspectRatio: "16/9",
    },
    caption: "A rough workflow map or before-state screenshot can live here during the review phase.",
  },
  ownership: {
    eyebrow: "What I Owned",
    title: "I owned the operating model, not just the screens",
    summary:
      "My job was to make the work legible to the organization, then make the design decisions that kept the model stable once the team started delivering.",
    editorialImage: {
      src: "/test/case-study-images/ownership-editorial.png",
      alt: "Neutral editorial placeholder image for the What I Owned section",
      width: 2880,
      height: 1164,
      caption: "Test placeholder for ownership section editorial imagery.",
    },
    decisions: [
      {
        title: "Set one intake model",
        copy: "I replaced multiple entry points with one front door so urgent work could be triaged consistently.",
      },
      {
        title: "Define ownership states",
        copy: "I named the moments where accountability changed hands so status stopped getting lost between teams.",
      },
      {
        title: "Sequence the systems work",
        copy: "I prioritized the integrations that unlocked the operating path instead of chasing low-value polish first.",
      },
      {
        title: "Tighten exception handling",
        copy: "I clarified how edge cases should move through the system so unusual work did not derail the main flow.",
      },
      {
        title: "Lock the success metrics",
        copy: "I set the outcome measures early so we could see whether the new process was actually improving service delivery.",
      },
    ],
  },
  solution: {
    eyebrow: "System / Solution",
    title: "A smaller number of moves created a much clearer system",
    copy:
      "The solution focused on a simpler operating spine, clearer decisions at each step, and a review loop that kept service, product, and leadership aligned.",
    architecture: [
      {
        eyebrow: "Front Door",
        title: "One intake path",
        copy: "Every request entered through one controlled entry point with a shared status language.",
        bullets: ["Single triage screen", "Shared issue taxonomy", "Clear owner handoff"],
        image: {
          src: "/test/case-study-images/solution-card-01.png",
          alt: "Neutral placeholder image for the first solution card",
          width: 1792,
          height: 1856,
          caption: "Test placeholder for the first solution card image.",
        },
      },
      {
        eyebrow: "Operating Core",
        title: "One decision model",
        copy: "The middle of the system enforced the logic for priority, routing, and escalation.",
        bullets: ["Rules before routing", "Defined escalation thresholds", "Fewer ambiguous states"],
        image: {
          src: "/test/case-study-images/solution-card-02.png",
          alt: "Neutral placeholder image for the second solution card",
          width: 1792,
          height: 1856,
        },
      },
      {
        eyebrow: "Validation Loop",
        title: "One feedback layer",
        copy: "Leadership and service teams could review the same operating data and trust the result.",
        bullets: ["Shared reporting view", "Actionable audit trail", "Visible service outcomes"],
        image: {
          src: "/test/case-study-images/solution-card-03.png",
          alt: "Neutral placeholder image for the third solution card",
          width: 1792,
          height: 1856,
          caption: "Test placeholder for the third solution card image.",
        },
      },
    ],
    summary:
      "The architecture is intentionally simple so the page can validate spacing, hierarchy, and legibility without relying on fictional branding.",
  },
  impact: {
    eyebrow: "Impact",
    title: "The change was measurable in the work itself",
    intro:
      "The results mattered in three ways: the business had less friction, the operation had clearer ownership, and the project could scale without adding confusion.",
    editorialImage: {
      src: "/test/case-study-images/impact-editorial.png",
      alt: "Neutral editorial placeholder image for the Impact section",
      width: 2880,
      height: 1164,
      caption: "Test placeholder for impact section editorial imagery.",
    },
    metrics: [
      {
        value: "46",
        suffix: "%",
        label: "Faster triage",
        detail: "Operational result: teams reached the right owner sooner.",
      },
      {
        value: "27",
        suffix: "%",
        label: "Fewer escalations",
        detail: "Business result: leadership spent less time resetting the same issue.",
      },
      {
        value: "11",
        suffix: "D",
        label: "Down to a 3-day review loop",
        detail: "Process result: the status check became faster and easier to trust.",
      },
      {
        value: "3",
        suffix: "",
        label: "Regions on one process",
        detail: "Scale result: the model could hold across multiple teams without drifting.",
      },
    ],
    transformation: {
      eyebrow: "Transformation",
      title: "From fragmented service work to one operating spine",
      rows: [
        {
          problem: "Status was interpreted differently by each team.",
          decision: "Create one shared intake and status model.",
          outcome: "Faster first decisions.",
        },
        {
          problem: "Handoffs required manual follow-up.",
          decision: "Define explicit ownership and escalation states.",
          outcome: "Fewer escalations.",
        },
        {
          problem: "Leadership lacked a trusted operating view.",
          decision: "Establish shared measurement and reporting.",
          outcome: "Trusted operating data.",
        },
      ],
    },
  },
  evidence: {
    eyebrow: "Evidence & Validation",
    title: "One testimonial plus three proof points",
    intro:
      "Validation was part of the template review, so this section keeps the proof visible without turning it into a wall of badges.",
    testimonial: {
      quote:
        "Jim gave us speed & creative problem-solving. He turned a bankrupt brand into a campaign-ready commerce machine without burying us in complexity.",
      attributionTitle: "Amanda Lopez",
      attributionSubtitle: "Director of eCommerce, Frederick's of Hollywood",
      avatarSrc: "/foh/amanda-lopez.jpeg",
    },
    validationItems: [
      {
        eyebrow: "Artifact",
        title: "Reviewed operating map",
        copy: "A before-and-after workflow map showed how the new decision path removed ambiguity.",
      },
      {
        eyebrow: "Decision",
        title: "Stakeholder sign-off",
        copy: "Cross-functional review confirmed that the new sequence matched how the business wanted to work.",
      },
      {
        eyebrow: "Outcome",
        title: "Service readability",
        copy: "The final review focused on whether teams could understand status and ownership at a glance.",
      },
    ],
  },
  recognition: {
    eyebrow: "Recognition",
    title: "Press & Accolades",
    intro:
      "Fictional placeholder copy explaining that this work received external recognition and press coverage.",
    editorialImage: {
      src: "/test/case-study-images/recognition-editorial.png",
      alt: "Neutral editorial placeholder image for the Press & Accolades section",
      width: 2880,
      height: 1164,
    },
    featured: {
      media: {
        kind: "youtube",
        videoId: "GZMHsAIH1Os",
        aspectRatio: "16/9",
      },
      title: "A fictional featured press story",
      date: "June 12, 2026",
      summary: "Placeholder summary used to test the featured press layout and responsive video embed.",
      tags: ["Press", "Featured"],
    },
    rows: [
      {
        publisher: "Northstar Business Review",
        date: "May 28, 2026",
        summary: "Placeholder article summary used to validate the standard PDF press-row layout.",
        pdfHref: "/cps/files/20240220_CPSE_DigiCity.pdf",
      },
      {
        publisher: "Operations Weekly",
        date: "April 17, 2026",
        summary: "A second fictional article used to test spacing, hierarchy, and new-tab behavior.",
        pdfHref: "/bi/files/BI-AdobeCaseStudy.pdf",
      },
      {
        publisher: "Service Design Journal",
        date: "March 6, 2026",
        summary: "A third fictional article used to confirm multiple press rows stack correctly.",
        pdfHref: "/lego/files/01-Harvard-Business-Review.pdf",
      },
    ],
  },
  relatedStudies: [
    {
      eyebrow: "Related Study 01",
      title: "Winning Awards And Making $1B With Modere",
      summary:
        "Work Nominated for a MACH Composable Award: Modere wanted to double from $500M GMV to $1B, but the old stack and market-by-market launch model were already breaking under the weight. I helped push the platform toward a composable architecture and protect the system decisions that gave the business a cleaner path to scale.",
      href: "/work/modere",
      image: {
        src: "/modere/hero-modere-01.png",
        alt: "Modere composable commerce platform hero image",
      },
    },
    {
      eyebrow: "Related Study 02",
      title: "Boehringer Ingelheim: 1st B2B Adobe Cloud Commerce",
      summary:
        "Boehringer Ingelheim had five markets, country-specific business rules, and a commerce model that didn’t scale. I led the product and program work to define one global reference storefront, decide where local variation belonged, and keep commerce stable through the shift from Oracle to SAP.",
      href: "/work/bi",
      image: {
        src: "/bi/hero-bi-01.png",
        alt: "Boehringer Ingelheim global commerce transformation hero image",
      },
    },
  ],
  finalCta: {
    eyebrow: "Next step",
    title: "If this structure feels right, we can turn it into the live template next.",
    copy:
      "Use this test route to confirm the hierarchy, spacing, and responsive behavior before we migrate any real case studies.",
  },
} satisfies CaseStudyRevampData
