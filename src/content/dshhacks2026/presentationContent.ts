import type { DshHacks2026Content } from "./types";

export const dshHacks2026Content = {
  brandLogo: {
    src: "/panels/01-global/ujcg-logo-f3f3f3-65.svg",
    alt: "",
  },
  navigation: {
    previousAriaLabel: "Previous slide",
    nextAriaLabel: "Next slide",
    openTocAriaLabel: "Open slide table of contents",
    toggleFullscreenAriaLabel: "Toggle fullscreen",
    tocDialogAriaLabel: "Slide table of contents",
    tocTitle: "Slide Table of Contents",
    closeButtonLabel: "Close",
  },
  slideOrder: [
    "hero",
    "wrongThing",
    "ideaLast",
    "focusGroup",
    "painProduct",
    "designBrief",
    "rubeGoldberg",
    "directvCaseStudy",
    "aiAmplified",
    "cpsCaseStudy",
    "placeholder",
    "ideasPlural",
    "realProductsSequence",
    "homework",
  ],
  slides: {
    hero: {
      id: "slide-1",
      title: "Do Not Pitch Me Yet Another Trash Sorting App",
      eyebrow: "A Hard Truth for Engineers",
      titleLead: "DO NOT Pitch Me",
      titleMain: "Yet Another Trash Sorting App",
      subtitle: "Product Thinking as an Engineer",
      presenter: "Jim Markunas",
      venue: "LLM Day Austin 2026",
      website: "greatestpmever.com",
    },
    wrongThing: {
      id: "slide-2",
      title: "You've Built the Wrong Thing. Beautifully.",
      titleHighlight: "Beautifully.",
      subtitle: "Why brilliant technical execution fails in the market.",
      bullets: [
        {
          id: "wrong-thing-02",
          title: "Discovery Illusion",
          description:
            "\"I have an idea\" is a statement of personal interest, not a product discovery process.",
        },
        {
          id: "wrong-thing-03",
          title: "Functional but Irrelevant",
          description:
            "Trash sorting apps, meal planners, habit trackers: technically polished, commercially dead.",
        },
        {
          id: "wrong-thing-04",
          title: "Solution-First Bias",
          description:
            "You failed not because you couldn't build it, but because you started with the solution.",
        },
      ],
      loopSteps: [
        { id: "loop-idea", label: "IDEA", description: "Personal spark" },
        { id: "loop-build", label: "BUILD", description: "Hours of coding" },
        { id: "loop-pitch", label: "PITCH", description: "Show the world" },
        { id: "loop-crickets", label: "CRICKETS", description: "Total silence" },
      ],
      loopOutcome: "Dead End: Nobody Cares",
      loopCaption: "No user pain validated. No commercially viable outcome established.",
    },
    ideaLast: {
      id: "slide-3",
      title: "The Idea is Last, Not First",
      titleHighlight: "Last",
      subtitle: "Real products start with problems, not ideas.",
      wrongSequenceTitle: "Engineer’s Loop",
      wrongSequenceSubtitle:
        "Starting with technology and trying to find a problem that fits it.",
      wrongSteps: [
        { id: "wrong-seq-01", step: "01", title: "IDEA", description: "Sparked by new tech or a cool API" },
        { id: "wrong-seq-02", step: "02", title: "BUILD", description: "Build in a vacuum for weeks" },
        { id: "wrong-seq-03", step: "03", title: "VALIDATE", description: "Try to find anyone who will use it" },
      ],
      wrongFooter: "Output: Technically Impressive, Commercially Dead",
      rightSequenceTitle: "Product Thinker’s Loop",
      rightSequenceSubtitle:
        "Starting with human friction and deriving the solution from constraints.",
      rightSteps: [
        { id: "right-seq-01", step: "1", title: "PAIN", description: "Find an acute, costly human struggle" },
        { id: "right-seq-02", step: "2", title: "INSIGHT", description: "Discover why current workarounds fail" },
        { id: "right-seq-03", step: "3", title: "HYPOTHESIS", description: "Design a focused problem statement" },
        { id: "right-seq-04", step: "4", title: "SOLUTION", description: "Brainstorm the simplest tool that works" },
        { id: "right-seq-05", step: "5", title: "FEASIBILITY", description: "Verify technology and cost constraints" },
        { id: "right-seq-06", step: "★", title: "THE IDEA", description: "The final output of strict sequence" },
      ],
      rightFooter: "Output: Products That Solve Real Pain and Generate ROI",
      closingPrefix: "Inverting this sequence lands your product directly in",
      closingBadge: "The Graveyard",
    },
    focusGroup: {
      id: "slide-4",
      title: "Your Network Is a Focus Group. Use It.",
      titleHighlight: "Use It.",
      subtitle: "You don’t need a massive budget. Start where you are.",
      bullets: [
        {
          id: "focus-group-01",
          title: "Research Subjects Are Everywhere",
          description:
            "Friends, family, classmates, employers, and professors: all rich operational domains.",
        },
        {
          id: "focus-group-02",
          title: "Ask the Right Questions",
          description:
            "Ask what part of their day is hardest and most frustrating.",
        },
        {
          id: "focus-group-03",
          title: "Find Friction",
          description:
            "Your job is to extract real pain points, not pitch a solution.",
        },
      ],
      outerRingLabel: "Professional Contacts",
      outerRingCaption: "Professors, Bosses, Supervisors",
      middleRingLabel: "Close Network",
      middleRingCaption: "Classmates, Family, Roommates",
      centerLabel: "YOU",
      centerCaption: "Data Hub",
      arrowLabel: "Pain Data",
    },
    painProduct: {
      id: "slide-5",
      title: "Pain Is the Product. Everything Else Is Features.",
      titleHighlight: "Everything Else Is Features.",
      subtitle: "If you can't point to pain, your product doesn't exist.",
      bullets: [
        {
          id: "pain-product-01",
          title: "Quantified Costs",
          description:
            "Pain must be specific, recurring, and costly (hours, dollars, stress, etc.)",
        },
        {
          id: "pain-product-02",
          title: "The Vague Pain Trap",
          description:
            "What happens in vagueness, stays in vagueness.",
        },
        {
          id: "pain-product-03",
          title: "The Sharp Signal",
          description:
            "\"Reconciling spreadsheets takes three hours every Friday\" is strong enough to build around.",
        },
      ],
      lowSignalLabel: "Vague Frustration (Low Signal)",
      highSignalLabel: "Quantified Cost (High Signal)",
      examples: [
        {
          id: "pain-example-01",
          level: "LOW SIGNAL",
          quote: "\"I wish I was better at scheduling my day...\"",
          badge: "Vague Pain",
          tone: "red",
        },
        {
          id: "pain-example-02",
          level: "MID SIGNAL",
          quote: "\"We lose track of marketing assets when multiple people edit them...\"",
          badge: "Operational Issue",
          tone: "amber",
        },
        {
          id: "pain-example-03",
          level: "HIGH SIGNAL",
          quote:
            "\"I spend 3 hours every week manually reconciling expense reports that should be automated.\"",
          badge: "Sharp Pain",
          tone: "emerald",
        },
      ],
    },
    designBrief: {
      id: "slide-6",
      title: "From Complaint to Design Brief",
      titleHighlight: "Design Brief",
      subtitle: "Refining raw frustration into a structured, executable problem statement.",
      bullets: [
        {
          id: "design-brief-02",
          title: "The Golden Formula",
          description:
            "Every project needs one sentence detailing user, action, root cause, and cost.",
        },
        {
          id: "design-brief-03",
          title: "The North Star",
          description:
            "This formula is not a feature list. It is your filter against scope creep.",
        },
        {
          id: "design-brief-04",
          title: "Unforgivable Focus",
          description:
            "A strong statement saves months of waste by clarifying what you are not building.",
        },
      ],
      complaintLabel: "Casual First-Person Complaint",
      complaintQuote:
        "\"Ugh, reconciling my expense reports every week is so exhausting. I hate looking at all these receipts and matching them up to my spreadsheet. It literally ruins my Friday.\"",
      complaintStatus: "Status: Fuzzy & Non-Executable",
      briefLabel: "The Design Brief Formula",
      briefParts: [
        { id: "brief-user", label: "User", text: "Finance Admin", tone: "emerald" },
        {
          id: "brief-struggle",
          label: "Struggle",
          text: "struggles to reconcile receipts",
          tone: "blue",
        },
        {
          id: "brief-root-cause",
          label: "Root Cause",
          text: "because of manual matching",
          tone: "indigo",
        },
        {
          id: "brief-cost",
          label: "Cost",
          text: "resulting in 3 hours lost every Friday",
          tone: "amber",
        },
      ],
      briefStatus: "Status: Actionable North Star",
    },
    directvCaseStudy: {
      id: "slide-7",
      title: "$120M Sitting in a Broken Process",
      titleHighlight: "Broken Process",
      subtitle: "DIRECTV case study: operational friction = million dollar revenue leak.",
      metrics: [
        { id: "dtv-metric-01", value: "$200m", label: "YoY Revenue Lift", tone: "white" },
        { id: "dtv-metric-02", value: "6 mos", label: "Initial Cycle Time", tone: "red" },
        {
          id: "dtv-metric-03",
          value: "6 → 4 Months",
          label: "Process Optimization",
          tone: "emerald",
          featured: true,
        },
      ],
      bullets: [
        {
          id: "dtv-bullet-01",
          title: "The 180-Day Cycle",
          description:
            "DIRECTV’s needed half a year to execute one marketing campaign.",
        },
        {
          id: "dtv-bullet-02",
          title: "No Tech Bottleneck",
          description:
            "The delay was workflow fragmentation + lack of automation.",
        },
        {
          id: "dtv-bullet-03",
          title: "The Discovery Process",
          description:
            "Nobody pitched a flashy campaign automation app. We mapped the 180-day problem first.",
        },
      ],
    },
    rubeGoldberg: {
      id: "slide-8",
      title: "Revenue Engine Meets Rube Goldberg",
      subtitle: "Generating ROI was painful.",
      caption: "Visualizing Operational Complexity",
      chips: [
        "Manual Hand-off",
        "Spreadsheet Reconciliation",
        "Approval Chain",
        "Data Quality Patch",
        "Last-mile Intervention",
        "Executive Reporting",
      ],
    },
    aiAmplified: {
      id: "slide-9",
      title: "Where AI Could Have Amplified DTV",
      subtitle: "What I’d scope: three agents, one revenue engine.",
      agents: [
        {
          id: "ai-martech",
          title: "Martech Agent",
          desc: "Tracks customer and asset risk, then routes campaign suggestions through governance.",
          tone: "blue",
        },
        {
          id: "ai-billing-config",
          title: "Automated Billing + Config Agent",
          desc: "Builds campaign metadata automatically across platforms and operating systems.",
          tone: "violet",
        },
        {
          id: "ai-reporting",
          title: "Reporting Agent",
          desc: "Reads the lake and surfaces opportunity signals like 40K subs at risk and best offer fit.",
          tone: "green",
        },
      ],
      footer: "The Future of Operational Efficiency",
    },
    cpsCaseStudy: {
      id: "slide-10",
      title: "225,000 Streetlights. 43% Wasted Truck Rolls.",
      titleHighlight: "43% Wasted Truck Rolls.",
      subtitle:
        "CPS Energy: asking humble questions that drive massive efficiency.",
      metrics: [
        { id: "cps-metric-01", value: "225K", label: "Streetlights Managed", tone: "white" },
        { id: "cps-metric-02", value: "43%", label: "Wasted Truck Rolls", tone: "red" },
        {
          id: "cps-metric-03",
          value: "34%–73%",
          label: "Support Call Reduction",
          tone: "amber",
          featured: true,
        },
      ],
      bullets: [
        {
          id: "cps-bullet-01",
          title: "The Operational Scale",
          description:
            "CPS Energy oversaw 225,000 public streetlights across San Antonio. Maintenance was huge and highly complex.",
        },
        {
          id: "cps-bullet-02",
          title: "The Severe Friction",
          description:
            "Crews were repeatedly dispatched to lights that were not actually broken.",
        },
        {
          id: "cps-bullet-03",
          title: "Zero App Hype",
          description:
            "No one suggested a smart-city app. Leadership asked why trucks were being sent to working poles.",
        },
      ],
    },
    placeholder: {
      id: "slide-11",
      title: "Placeholder",
      subtitle: "Content Pending",
    },
    ideasPlural: {
      id: "slide-12",
      title: "Now You Can Have Ideas. Plural.",
      titleHighlight: "Plural.",
      subtitle: "You earn the right to brainstorm after you deeply understand the friction.",
      bullets: [
        {
          id: "ideas-plural-02",
          title: "Hypotheses as Tests",
          description:
            "Generate multiple competing paths and force them to fight for existence against constraints.",
        },
        {
          id: "ideas-plural-03",
          title: "The Ultimate Filter",
          description:
            "Ask whether the idea directly solves the mapped pain at a viable deployment cost.",
        },
        {
          id: "ideas-plural-04",
          title: "Personal Bias Shield",
          description:
            "Your excitement about a stack is not a valid filter. User utility is the filter.",
        },
      ],
      rootLabel: "Root Node",
      rootTitle: "Problem Statement",
      hypotheses: [
        {
          id: "hypothesis-a",
          name: "Hypothesis A",
          description: "Build mobile field toolkit",
          status: "FAIL",
        },
        {
          id: "hypothesis-b",
          name: "Hypothesis B",
          description: "Deploy automated sensors",
          status: "PASS",
        },
        {
          id: "hypothesis-c",
          name: "Hypothesis C",
          description: "Outsource data entry",
          status: "FAIL",
        },
      ],
      footerLabel: "Explore path B: Sensors solve mapped pain at viable cost",
    },
    technologyConstraint: {
      id: "slide-13",
      title: "Technology Is a Constraint, Not a Starting Point",
      titleHighlight: "Constraint",
      subtitle: "Do not let your toolbox define the problem. Focus on what must exist.",
      bullets: [
        {
          id: "tech-constraint-01",
          title: "The Wrong Question",
          description:
            "\"What can I build?\" forces a tech-first approach. Ask what needs to exist to eliminate the friction.",
        },
        {
          id: "tech-constraint-02",
          title: "Validated Order of Operations",
          description:
            "Select technology only after the pain is quantified, the problem is designed, and the hypothesis is locked.",
        },
        {
          id: "tech-constraint-03",
          title: "A Rich Toolset",
          description:
            "Fit-for-purpose tech can be standard APIs, LLMs, existing platforms, or tiny automation scripts.",
        },
        {
          id: "tech-constraint-04",
          title: "Reverse-Engineering Pitfall",
          description:
            "Most engineers pick a hot framework first, then scramble to invent a matching problem.",
        },
      ],
      correctLabel: "Build Sequence (Correct)",
      correctSteps: [
        "1. PEOPLE & PAIN (WIDEST)",
        "2. PROBLEM STATEMENT",
        "3. HYPOTHESIS",
        "4. TECH SELECT (NARROWEST)",
      ],
      correctCaption: "Derived from raw user need down to execution detail.",
      incorrectLabel: "What Engineers Usually Do",
      incorrectSteps: [
        "1. TECH SELECTION",
        "2. COOL IDEA",
        "3. FORCE A PROBLEM",
        "4. ZERO PEOPLE INTERACTION",
      ],
      incorrectCaption: "Forcing a hot framework onto users who have no such need.",
    },
    realProductsSequence: {
      id: "slide-14",
      title: "The Sequence That Produces Real Products",
      titleHighlight: "Real Products",
      subtitle: "Commit this anchor to memory and let it drive every project you launch.",
      stages: [
        {
          id: "sequence-stage-01",
          step: "01",
          title: "Talk to People",
          description: "Discover active domains, daily workflows, and raw friction.",
        },
        {
          id: "sequence-stage-02",
          step: "02",
          title: "Surface & Quantify Pain",
          description: "Establish metrics: hours wasted, money lost, or extreme stress.",
        },
        {
          id: "sequence-stage-03",
          step: "03",
          title: "Design Problem Statement",
          description: "Apply the formula: who, struggles, root cause, cost.",
        },
        {
          id: "sequence-stage-04",
          step: "04",
          title: "Brainstorm Hypotheses",
          description: "Create multiple directions and test them ruthlessly against pain.",
        },
        {
          id: "sequence-stage-05",
          step: "05",
          title: "Select Technology",
          description: "Deploy resources entirely based on fit and execution efficiency.",
        },
      ],
      legends: [
        { id: "legend-human", label: "Human Discovery", tone: "red" },
        { id: "legend-product", label: "Product Engineering", tone: "emerald" },
        { id: "legend-tech", label: "Technical Fit", tone: "indigo" },
      ],
    },
    homework: {
      id: "slide-15",
      title: "Run This Conversation Five Times This Week",
      titleHighlight: "Five Times",
      subtitle: "YOUR HOMEWORK: The 5-Question Discovery Interview.",
      rules: [
        {
          id: "homework-rule-01",
          label: "NO PITCHING",
          description: "You are not here to sell or show how smart you are.",
        },
        {
          id: "homework-rule-02",
          label: "NO “WELL ACTUALLY”",
          description: "Do not correct their understanding. Their perception is reality.",
        },
        {
          id: "homework-rule-03",
          label: "ACTIVE LISTENING",
          description: "Let them vent. Pay deep attention to emotional spikes.",
        },
        {
          id: "homework-rule-04",
          label: "TAKE METICULOUS NOTES",
          description: "Write quotes verbatim and capture exact time and money numbers.",
        },
      ],
      quote:
        "\"Come back next week with patterns, not products. The user pain will dictate the exact features to build.\"",
      cardEyebrow: "THE TOOL",
      cardTitle: "5-Question Discovery Interview",
      questions: [
        {
          id: "question-01",
          text: "What is the most frustrating recurring task in your day or job?",
        },
        {
          id: "question-02",
          text: "How often does it happen and how long does it take?",
        },
        {
          id: "question-03",
          text: "What have you tried to fix it? What didn’t work?",
        },
        {
          id: "question-04",
          text: "What would a perfect solution look like to you?",
        },
        {
          id: "question-05",
          text: "If this problem disappeared tomorrow, what changes?",
        },
      ],
      footerLeft: "Jim Markunas · LLM Day Austin 2026",
      footerRight: "greatestpmever.com",
    },
  },
} satisfies DshHacks2026Content;
