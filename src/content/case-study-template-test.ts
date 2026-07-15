import type { CaseStudyMedia, CaseStudySummaryColumn } from "@/content/case-studies"

export type CaseStudyTemplateTestMetric = {
  value: string
  suffix?: string
  label: string
  detail?: string
}

export type CaseStudyTemplateTestFact = {
  label: string
  value: string
}

export type CaseStudyTemplateTestDecision = {
  title: string
  copy: string
}

export type CaseStudyTemplateTestArchitectureLane = {
  eyebrow: string
  title: string
  copy: string
  bullets: string[]
}

export type CaseStudyTemplateTestValidationItem = {
  eyebrow: string
  title: string
  copy: string
}

export type CaseStudyTemplateTestRelatedStudy = {
  eyebrow: string
  title: string
  summary: string
  href: string
  image: {
    src: string
    alt: string
  }
}

export type CaseStudyTemplateTestData = {
  slug: string
  breadcrumbCurrent: string
  hero: {
    eyebrow: string
    title: string
    intro: string
    metrics: CaseStudyTemplateTestMetric[]
    image: CaseStudyMedia
  }
  executiveBrief: {
    role: string
    client: string
    timeline: string
    teamStakeholders: string
    budgetScale: string
    systemsTechnology: string
    problem: string
    mandate: string
    whatIChanged: string
    outcome: string
    facts: CaseStudyTemplateTestFact[]
  }
  challenge: {
    eyebrow: string
    title: string
    paragraphs: string[]
    visual: CaseStudyMedia
    caption: string
  }
  ownership: {
    eyebrow: string
    title: string
    summary: string
    decisions: CaseStudyTemplateTestDecision[]
  }
  solution: {
    eyebrow: string
    title: string
    copy: string
    architecture: CaseStudyTemplateTestArchitectureLane[]
    summary: string
    timeline: Array<{
      phase: string
      title: string
      copy: string
      ringClass: string
      labelClass: string
    }>
  }
  impact: {
    eyebrow: string
    title: string
    intro: string
    metrics: CaseStudyTemplateTestMetric[]
    beforeAfter: {
      title: string
      summary: string
      columns: CaseStudySummaryColumn[]
    }
    connections: Array<{
      title: string
      copy: string
    }>
  }
  evidence: {
    eyebrow: string
    title: string
    intro: string
    testimonial: {
      quote: string
      attributionTitle: string
      attributionSubtitle: string
    }
    validationItems: CaseStudyTemplateTestValidationItem[]
  }
  relatedStudies: CaseStudyTemplateTestRelatedStudy[]
  finalCta: {
    eyebrow: string
    title: string
    copy: string
  }
}

export const caseStudyTemplateTest = {
  slug: "case-study-test",
  breadcrumbCurrent: "Template Test",
  hero: {
    eyebrow: "Fictional placeholder",
    title: "Atlas Ops: A Clearer Operating Model for Service Teams",
    intro:
      "This fictional case study exists only to pressure-test the standard template. It gives us a realistic, outcome-led story so we can review hierarchy, spacing, and responsive behavior before any live migration begins.",
    metrics: [
      { value: "32", suffix: "%", label: "Fewer handoff delays" },
      { value: "4", suffix: "d", label: "Faster status clarity" },
      { value: "8", suffix: "", label: "Systems rationalized" },
    ],
    image: {
      kind: "image",
      src: "/test/man-placeholder.png",
      alt: "Fictional placeholder hero visual for the case study template test",
      aspectRatio: "16/9",
    },
  },
  executiveBrief: {
    role: "Product and Program Lead",
    client: "Northstar Service Network (fictional)",
    timeline: "April 2025 - September 2025",
    teamStakeholders: "12 people across operations, design, engineering, finance, and service leadership",
    budgetScale: "$1.6M program spanning 3 regional teams and 1 national support desk",
    systemsTechnology: "Figma, React, ServiceNow, SAP, Airtable, and a shared reporting layer",
    problem:
      "The intake, dispatch, and follow-up experience was splitting across too many systems, so teams could not trust the status of urgent work.",
    mandate:
      "Create one operating model that made ownership visible, reduced handoff risk, and gave leadership a clearer way to manage service work.",
    whatIChanged:
      "I simplified the front door, clarified who owned each step, and aligned the operating sequence with the way teams actually worked.",
    outcome:
      "The program became easier to run, easier to explain, and faster to act on because the workflow matched the real business problem.",
    facts: [
      { label: "Role", value: "Product and Program Lead" },
      { label: "Client", value: "Northstar Service Network (fictional)" },
      { label: "Timeline", value: "April 2025 - September 2025" },
      { label: "Team / stakeholders", value: "12 people across operations, design, engineering, finance, and service leadership" },
      { label: "Budget / scale", value: "$1.6M program spanning 3 regional teams and 1 national support desk" },
      { label: "Systems / technology", value: "Figma, React, ServiceNow, SAP, Airtable, and a shared reporting layer" },
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
      },
      {
        eyebrow: "Operating Core",
        title: "One decision model",
        copy: "The middle of the system enforced the logic for priority, routing, and escalation.",
        bullets: ["Rules before routing", "Defined escalation thresholds", "Fewer ambiguous states"],
      },
      {
        eyebrow: "Validation Loop",
        title: "One feedback layer",
        copy: "Leadership and service teams could review the same operating data and trust the result.",
        bullets: ["Shared reporting view", "Actionable audit trail", "Visible service outcomes"],
      },
    ],
    summary:
      "The architecture is intentionally simple so the page can validate spacing, hierarchy, and legibility without relying on fictional branding.",
    timeline: [
      {
        phase: "Phase 01",
        title: "Observe",
        copy: "Map where status was getting lost and why the service model felt inconsistent.",
        ringClass: "border-[#D39D23]",
        labelClass: "text-[#D39D23]",
      },
      {
        phase: "Phase 02",
        title: "Align",
        copy: "Get operations, product, and engineering to agree on one operating language.",
        ringClass: "border-[#5E7FB7]",
        labelClass: "text-[#5E7FB7]",
      },
      {
        phase: "Phase 03",
        title: "Design",
        copy: "Turn the agreed model into a cleaner workflow and supporting interface system.",
        ringClass: "border-[#1A9E9A]",
        labelClass: "text-[#1A9E9A]",
      },
      {
        phase: "Phase 04",
        title: "Prove",
        copy: "Review the new sequence against real service situations and remove ambiguity.",
        ringClass: "border-[#3E7BE0]",
        labelClass: "text-[#3E7BE0]",
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "The change was measurable in the work itself",
    intro:
      "The results mattered in three ways: the business had less friction, the operation had clearer ownership, and the project could scale without adding confusion.",
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
        suffix: "d",
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
    beforeAfter: {
      title: "Before & After",
      summary:
        "The program moved from a fragmented service path to one operating model that teams could explain, execute, and review together.",
      columns: [
        {
          label: "Before",
          title: "Fragmented service work",
          points: [
            "Status was interpreted differently by each team.",
            "Handoffs required manual follow-up to stay on track.",
            "Leadership lacked a trusted view of the operating reality.",
          ],
        },
        {
          label: "After",
          title: "A clearer operating spine",
          points: [
            "One intake path made triage and ownership visible.",
            "The decision model reduced ambiguity at every handoff.",
            "Shared reporting created a more reliable view of progress.",
          ],
        },
      ],
    },
    connections: [
      {
        title: "Decision 1 -> Outcome",
        copy: "A single intake path reduced avoidable delay and made the first decision faster.",
      },
      {
        title: "Decision 2 -> Outcome",
        copy: "Clear ownership states cut down the back-and-forth that used to slow escalations.",
      },
      {
        title: "Decision 5 -> Outcome",
        copy: "Tracking the right measures early gave the team proof that the model was working.",
      },
    ],
  },
  evidence: {
    eyebrow: "Evidence & Validation",
    title: "One testimonial plus three proof points",
    intro:
      "Validation was part of the template review, so this section keeps the proof visible without turning it into a wall of badges.",
    testimonial: {
      quote:
        "The strongest change was not the UI. It was that the team could finally describe the service model the same way across operations and leadership.",
      attributionTitle: "Senior service leader",
      attributionSubtitle: "Fictional feedback used for template testing",
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
  relatedStudies: [
    {
      eyebrow: "Related Study 01",
      title: "Cleaner workflow, quieter operations",
      summary:
        "A fictional companion story that keeps the same operating clarity theme while testing the card layout.",
      href: "/work/",
      image: {
        src: "/test/man-placeholder.png",
        alt: "Fictional related study placeholder image 1",
      },
    },
    {
      eyebrow: "Related Study 02",
      title: "Visible ownership across a larger system",
      summary:
        "A second fictional card to confirm that two related studies stack cleanly on mobile and read well on desktop.",
      href: "/work/",
      image: {
        src: "/test/man-placeholder.png",
        alt: "Fictional related study placeholder image 2",
      },
    },
  ],
  finalCta: {
    eyebrow: "Next step",
    title: "If this structure feels right, we can turn it into the live template next.",
    copy:
      "Use this test route to confirm the hierarchy, spacing, and responsive behavior before we migrate any real case studies.",
  },
} satisfies CaseStudyTemplateTestData

