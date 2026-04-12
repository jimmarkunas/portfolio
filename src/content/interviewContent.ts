import type {
  Slide5AnimationThemePresetMap,
  Slide5AnimationThemeOverrides,
  Slide5DiagramLabels,
  Slide5DiagramTooltips,
  Slide5ThemePreset,
} from "@/app/interviews/components/slides/diagram/slide5Diagram.types";
import type { Slide6DiagramLabels } from "@/app/interviews/components/slides/diagram/slide6Diagram.types";

export interface ImageEntry {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface StatEntry {
  id: string;
  label: string;
  sub: string;
}

export interface TextListEntry {
  id: string;
  text: string;
}

export interface ServiceCategoryEntry {
  id: string;
  title: string;
  percent: string | null;
  items: TextListEntry[];
}

export interface DarkModeTextEntry {
  id: string;
  text: string;
  dark: boolean;
}

export interface AwardEntry {
  id: string;
  title: string;
  desc: string;
}

export interface ToolEntry {
  id: string;
  name: string;
  cost: string;
}

export interface CircleEntry {
  id: string;
  label: string;
  value: string;
}

export interface RiskColumnEntry {
  id: string;
  title: string;
  items: string[];
}

export interface RiskMatrixPointEntry {
  id: string;
  xPercent: number;
  yPercent: number;
  color: string;
}

export interface ComposableStackLayerEntry {
  id: string;
  title: string;
  items: string[];
}

export interface ComposableStackFeatureEntry {
  id: string;
  icon: "Layers" | "Server" | "Database" | "Cpu";
  title: string;
  desc: string;
}

export interface WhyJimPointEntry {
  id: string;
  icon: "Shield" | "Cpu" | "Target" | "Users" | "Zap" | "Globe";
  title: string;
  desc: string;
}

export interface RescuePlanPhaseEntry {
  id: string;
  title: string;
  desc: string;
}

export interface RescuePlanWeekEntry {
  id: string;
  title: string;
  points: string[];
}

export interface StatusReportEntry {
  programName: string;
  status: string;
  accomplishments: string[];
  inProgress: string[];
  upcoming: string[];
  blockers: string;
}

export interface StatusExecutiveViewEntry {
  title: string;
  desc: string;
  sla: string;
  blockersCount: string;
}

export interface InterviewsContent {
  brandLogo: ImageEntry;
  navigation: {
    previousAriaLabel: string;
    nextAriaLabel: string;
    openTocAriaLabel: string;
    toggleFullscreenAriaLabel: string;
    tocDialogAriaLabel: string;
    tocTitle: string;
    closeButtonLabel: string;
  };
  slideTitles: string[];
  slides: {
    who: {
      id: string;
      title: string;
      subtitle: string;
      companies: {
        label: string;
        logos: ImageEntry[];
      };
      stats: StatEntry[];
    };
    outcomes: {
      id: string;
      title: string;
      subtitle: string;
      projects: {
        label: string;
        logos: ImageEntry[];
      };
      stats: StatEntry[];
    };
    services: {
      id: string;
      title: string;
      subtitle: string;
      categories: ServiceCategoryEntry[];
    };
    greatestPm: {
      id: string;
      title: string;
      subtitle: string;
      pmpScoreCardTitle: string;
      pmpImage: ImageEntry;
      pmpOverlayText: string;
      metricsTitle: string;
      metricsImage: ImageEntry;
      awards: AwardEntry[];
    };
    hybridAgile: {
      id: string;
      title: string;
      subtitle: string;
      diagram: Slide5DiagramLabels;
      tooltips: Slide5DiagramTooltips;
      themePreset?: Slide5ThemePreset;
      themes?: Slide5AnimationThemePresetMap;
      theme?: Slide5AnimationThemeOverrides;
    };
    jiraTickets: {
      id: string;
      title: string;
      subtitle: string;
      diagram: Slide6DiagramLabels;
    };
    riskLandscape: {
      id: string;
      title: string;
      subtitle: string;
      columns: RiskColumnEntry[];
      matrix: {
        xAxisLabel: string;
        yAxisLabel: string;
        safeZoneLabel: string;
        criticalZoneLabel: string;
        points: RiskMatrixPointEntry[];
      };
    };
    statusReport: {
      id: string;
      title: string;
      subtitle: string;
      report: StatusReportEntry;
      execView: StatusExecutiveViewEntry;
    };
    composableStack: {
      id: string;
      title: string;
      subtitle: string;
      layers: ComposableStackLayerEntry[];
      features: ComposableStackFeatureEntry[];
    };
    titleSlide: {
      id: string;
      eyebrow: string;
      titlePrefix: string;
      titleHighlight: string;
      titleSuffix: string;
      byline: string;
      sponsor: string;
    };
    cover: {
      id: string;
      title: string;
      description: string;
      reasonLabel: string;
      reasons: TextListEntry[];
    };
    boehringer: {
      id: string;
      title: string;
      subtitle: string;
      silos: string[];
      unified: string;
      challenge: {
        title: string;
        desc: string;
      };
      result: {
        title: string;
        desc: string;
      };
    };
    modere: {
      id: string;
      title: string;
      caseStudyLabel: string;
      paragraphs: TextListEntry[];
      goalLabel: string;
      goalText: string;
    };
    engineers: {
      id: string;
      title: string;
      titleTop: string;
      titleMiddle: string;
      titleBottom: string;
      circles: CircleEntry[];
    };
    goal: {
      id: string;
      title: string;
      description: string;
    };
    tools: {
      id: string;
      title: string;
      items: ToolEntry[];
    };
    preSetup: {
      id: string;
      title: string;
      steps: TextListEntry[];
    };
    buildPart1: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      steps: TextListEntry[];
    };
    buildPart2: {
      id: string;
      titlePrefix: string;
      titleHighlight: string;
      subtitle: string;
      stepPrefix: string;
      steps: TextListEntry[];
    };
    finalize: {
      id: string;
      title: string;
      firstStepNumber: string;
      firstStepLabel: string;
      secondStepNumber: string;
      secondStepLabel: string;
      completionText: string;
    };
    whyJim: {
      id: string;
      title: string;
      subtitle: string;
      points: WhyJimPointEntry[];
    };
    rescuePlan: {
      id: string;
      title: string;
      subtitle: string;
      carouselPhases: RescuePlanPhaseEntry[];
      weeks: RescuePlanWeekEntry[];
    };
    thankYou: {
      id: string;
      title: string;
      subtitle: string;
      name: string;
      role: string;
      email: string;
      linkedin: string;
      readyText: string;
    };
  };
}

const buildSlideTitles = (slides: InterviewsContent["slides"]): string[] => [
  slides.who.title,
  slides.outcomes.title,
  slides.services.title,
  slides.greatestPm.title,
  slides.hybridAgile.title,
  slides.jiraTickets.title,
  slides.riskLandscape.title,
  slides.statusReport.title,
  slides.cover.title,
  slides.composableStack.title,
  slides.modere.title,
  slides.engineers.title,
  slides.goal.title,
  slides.tools.title,
  slides.preSetup.title,
  `${slides.buildPart1.titlePrefix}${slides.buildPart1.titleHighlight}`.trim(),
  `${slides.buildPart2.titlePrefix}${slides.buildPart2.titleHighlight}`.trim(),
  slides.finalize.title,
  slides.whyJim.title,
  slides.rescuePlan.title,
  slides.thankYou.title,
];

export const interviewContent: InterviewsContent = {
  brandLogo: {
    id: "ujcg-logo",
    src: "/panels/01-global/ujcg-logo-f3f3f3-65.svg",
    alt: "",
    width: 65,
    height: 65,
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
  slideTitles: [],
  slides: {
    who: {
      id: "slide-who",
      title: "Who I Am",
      subtitle: "Diagnose like an architect, prioritize like a product owner, and deliver like a PM.",
      companies: {
        label: "Companies I've Helped",
        logos: [
          { id: "aa", src: "/panels/02-interview/aa-logo-int.svg", alt: "American Apparel" },
          { id: "bcg", src: "/panels/02-interview/bcg-logo-int.svg", alt: "BCG" },
          { id: "burton", src: "/panels/02-interview/bc-logo-int.svg", alt: "Burton" },
          { id: "directv", src: "/panels/02-interview/dtv-logo-int.svg", alt: "DIRECTV" },
          { id: "disney", src: "/panels/02-interview/disney-logo-int.svg", alt: "Disney" },
          { id: "hbo", src: "/panels/02-interview/hbo-logo-int.svg", alt: "HBO" },
          { id: "publicis-sapient", src: "/panels/02-interview/publicis-sapient-logo-int.svg", alt: "Publicis Sapient" },
          { id: "shopify", src: "/panels/02-interview/shopify-logo-int.svg", alt: "Shopify" },
        ],
      },
      stats: [
        { id: "years", label: "20+ Years", sub: "Leading Digital Delivery" },
        { id: "projects", label: "75+", sub: "Projects Led" },
        { id: "hours", label: "40k Hrs.", sub: "PM Experience" },
        { id: "budget", label: "$100m", sub: "Budgets Managed" },
      ],
    },
    outcomes: {
      id: "slide-outcomes",
      title: "What I Do",
      subtitle: "I turn enterprise programs into measurable outcomes",
      projects: {
        label: "Select Projects",
        logos: [
          { id: "bi", src: "/panels/02-interview/bi-logo-int.svg", alt: "Boehringer Ingelheim" },
          { id: "lego", src: "/panels/02-interview/lego-logo-int.svg", alt: "LEGO" },
          { id: "method", src: "/panels/02-interview/method-logo-int.svg", alt: "method" },
          { id: "mm", src: "/panels/02-interview/mm-logo-int.svg", alt: "Mrs. MEYER'S" },
          { id: "modere", src: "/panels/02-interview/modere-logo-int.svg", alt: "MODERE" },
          { id: "nyl", src: "/panels/02-interview/nyl-logo-int.svg", alt: "New York Life" },
        ],
      },
      stats: [
        { id: "case-studies", label: "LEGO", sub: "2 Ivy League Case Studies" },
        { id: "awards", label: "2", sub: "Awards" },
        { id: "stakeholders", label: "397-48", sub: "Stakeholders/People Managed" },
        { id: "roi", label: "$1.3B", sub: "ROI Delivered" },
      ],
    },
    services: {
      id: "slide-services",
      title: "What I Can Do For You",
      subtitle: "A balanced approach to complex delivery.",
      categories: [
        {
          id: "functional",
          title: "Program & Project Management",
          percent: "40%",
          items: [
            { id: "functional-uat", text: "Keep ENG, product & the business moving in one direction" },
            { id: "functional-training", text: "Program & Project Management: scope, timeline, budget, risk" },
            { id: "functional-go-live", text: "Manage vendors, requirements, and chaos" },
          ],
        },
        {
          id: "technical",
          title: "Product Management",
          percent: "20%",
          items: [
            { id: "technical-api", text: "Define what gets built, in what order, and why" },
            { id: "technical-cloud", text: "Write requirements that engineers + business actually understands" },
            { id: "technical-devops", text: "Push back on scope creep + protect the roadmap" },
          ],
        },
        {
          id: "scrum-master",
          title: "Scrum Master",
          percent: "20%",
          items: [
            { id: "scrum-ceremony", text: "Run high-value ceremonies" },
            { id: "scrum-velocity", text: "Proactively remove functional + technical blockers" },
            { id: "scrum-backlog", text: "Coach teams & nurture talent" },
          ],
        },
        {
          id: "business-analyst",
          title: "Solutioning & Business Analysis",
          percent: "20%",
          items: [
            { id: "ba-requirements", text: "Translate business needs into specs engineers can build" },
            { id: "ba-alignment", text: "Find the problem nobody named yet + fix it" },
            { id: "ba-mapping", text: "Understand the architecture & spot the gaps" },
          ],
        },
      ],
    },
    greatestPm: {
      id: "slide-greatest-pm",
      title: "Greatest PM Ever",
      subtitle: "Their words, not mine, but I'll take it",
      pmpScoreCardTitle: "PMP Score Card",
      pmpImage: {
        id: "pmp-report",
        src: "/panels/02-interview/pmi-score.png",
        alt: "PMP Exam Result Report",
      },
      pmpOverlayText: "Above Target Performance",
      metricsTitle: "Enterprise ROI & Metrics",
      metricsImage: {
        id: "metrics-chart",
        src: "/panels/02-interview/bc-metrics.png",
        alt: "ROI Metrics Chart",
      },
      awards: [
        { id: "01", title: "Smart 20 Award", desc: "Global recognition for utility innovation." },
        { id: "02", title: "MACH Impact Nomination", desc: "Shortlisted for best composable commerce launch." },
        { id: "03", title: "Harvard HBS & MIT Sloan Case Studies", desc: "Featured in 'BCG x LEGO' and referenced for agile delivery at scale." },
      ],
    },
    hybridAgile: {
      id: "slide-hybrid-agile",
      title: "Enterprise Agile: The Hybrid Reality",
      subtitle: "Waterfall where it works, Agile for where it works.",
      diagram: {
        zones: {
          planning: "Planning",
          execution: "Execution",
          delivery: "Delivery",
        },
        nodes: {
          planningDiscovery: "Discovery & Scoping",
          planningJira: "Write & Estimate JIRA Tickets",
          planningSchedule: "Project Schedule & Release Plan",
          planningReview: "Design Review & Go/No-Go",
          planningKickoff: "Project Kick-Off",
          executionGrooming: "Backlog Grooming",
          executionVersioning: "Software Versioning",
          executionStandups: "Daily Stand-Ups",
          executionSprint: "Sprint Planning",
          deliveryQa: "QA/Deployment",
          deliveryRelease: "Feature Release",
        },
        legend: {
          waterfall: "Waterfall",
          agile: "Agile",
        },
      },
      tooltips: {
        "planning-discovery": {
          label: "PLANNING",
          title: "Discovery & Scoping",
          body: "Define business goals, stakeholders, requirements, risks, and success criteria before delivery begins.",
        },
        "planning-jira": {
          label: "PLANNING",
          title: "Write & Estimate JIRA Tickets",
          body: "Break work into actionable tickets, size effort, and clarify dependencies so engineering can execute cleanly.",
        },
        "planning-schedule": {
          label: "PLANNING",
          title: "Project Schedule & Release Plan",
          body: "Map milestones, sequencing, and release targets to create a realistic path from kickoff to launch.",
        },
        "planning-review": {
          label: "PLANNING",
          title: "Design Review & Go/No-Go",
          body: "Validate UX, technical readiness, and business alignment before committing the team to build.",
        },
        "planning-kickoff": {
          label: "PLANNING",
          title: "Project Kick-Off",
          body: "Align the full team on scope, roles, timeline, communication cadence, and immediate next steps.",
        },
        "execution-grooming": {
          label: "EXECUTION",
          title: "Backlog Grooming",
          body: "Refine upcoming work, remove ambiguity, and keep priorities aligned with delivery goals.",
        },
        "execution-versioning": {
          label: "EXECUTION",
          title: "Software Versioning",
          body: "Control release branches, code versions, and deployment readiness to reduce risk during delivery.",
        },
        "execution-standups": {
          label: "EXECUTION",
          title: "Daily Stand-Ups",
          body: "Surface blockers quickly, track progress, and keep the team moving against sprint goals.",
        },
        "execution-sprint": {
          label: "EXECUTION",
          title: "Sprint Planning",
          body: "Select and commit the work for the next sprint based on priorities, capacity, and dependencies.",
        },
        "delivery-qa": {
          label: "DELIVERY",
          title: "QA/Deployment",
          body: "Validate quality, resolve defects, and prepare the release package for production deployment.",
        },
        "delivery-release": {
          label: "DELIVERY",
          title: "Feature Release",
          body: "Launch approved functionality to users and complete the handoff from build to live operation.",
        },
      },
      themePreset: "laptop",
      themes: {
        laptop: {
          particleColor: "243,243,243",
          particleSpeedMultiplier: 0.9,
          particlesPerPath: 2,
          dashedBorderColor: "#F3F3F3",
          dashedBorderWidth: 1.5,
          dashedBorderDasharray: "7 5",
          dashedBorderOpacity: 0.86,
          dashedBorderRadius: 16,
          dashedBorderInset: 6,
          dashedBorderDurationSeconds: 180,
        },
        projector: {
          particleColor: "243,243,243",
          particleSpeedMultiplier: 0.8,
          particlesPerPath: 3,
          dashedBorderColor: "#F3F3F3",
          dashedBorderWidth: 2,
          dashedBorderDasharray: "9 6",
          dashedBorderOpacity: 0.95,
          dashedBorderRadius: 18,
          dashedBorderInset: 7,
          dashedBorderDurationSeconds: 220,
          tooltip: {
            overlayColor: "rgba(0,0,0,0.26)",
            borderColor: "#DCDCDC",
            labelColor: "#7E7E7E",
            titleColor: "#202020",
            bodyColor: "#4F4F4F",
          },
        },
      },
    },
    jiraTickets: {
      id: "slide-jira-tickets",
      title: "JIRA Backlog",
      subtitle: "From epic to stories, acceptance criteria, and bugs.",
      diagram: {
        nodeTypes: {
          epic: "EPIC",
          story: "STORY",
          ac: "AC",
          bug: "Bug",
        },
        nodes: {
          epicBody:
            "As Disney, I want to revamp the Disneyland App, so that I can improve theme park CS",
          storyLeftBody:
            "As a Parent, I want to track my child through DL App, so we can split up and find each other later",
          storyMiddleBody:
            "As Marketing, I want to push DL App notifications by demographic, so I can offer targeted promos",
          storyRightBody:
            "As Security, I want to decrypt geolocation data, so that I can find a lost kid",
          acLeftBody: "Geolocation Activates",
          bugLeftBody: "Error Message on Load",
          acMiddleBody: "User presented w/ notification on Home",
          bugMiddleBody: "iOS Autorization Error",
          acRightBody: "Geolocation vauling & decryption",
          bugRightBody: "Database logic error on API hash",
        },
      },
    },
    riskLandscape: {
      id: "slide-risk-landscape",
      title: "How I Manage Risk",
      subtitle: "Proactive identification and systematic mitigation.",
      columns: [
        {
          id: "technical",
          title: "Technical",
          items: ["Requirements", "Technology", "System Complexity"],
        },
        {
          id: "organizational",
          title: "Organizational",
          items: ["Dependencies", "Resourcing", "Prioritization", "Funding"],
        },
        {
          id: "external",
          title: "External",
          items: ["Vendors", "Customers", "Market", "Regulatory"],
        },
        {
          id: "project-mgmt",
          title: "Project Mgmt.",
          items: ["Estimating", "Planning", "Controlling"],
        },
      ],
      matrix: {
        xAxisLabel: "Probability",
        yAxisLabel: "Impact",
        safeZoneLabel: "Safe",
        criticalZoneLabel: "Critical",
        points: [
          { id: "risk-resource-gap", xPercent: 40, yPercent: 76, color: "#F87171" },
          { id: "risk-api-latency", xPercent: 72, yPercent: 66, color: "#EF4444" },
          { id: "risk-vendor-delay", xPercent: 51, yPercent: 37, color: "#EAB308" },
          { id: "risk-scope-creep", xPercent: 82, yPercent: 27, color: "#F97316" },
        ],
      },
    },
    statusReport: {
      id: "slide-status-report",
      title: "Status Reporting",
      subtitle: "Clear, Consistent, Concise communications.",
      report: {
        programName: "Program Status: Digital Transformation",
        status: "On Track",
        accomplishments: [
          "API V2 Migration Complete",
          "UAT Sign-off for Checkout",
          "Security Audit Passed",
        ],
        inProgress: ["Mobile App Refactor (80%)", "Multi-region AWS Deployment"],
        upcoming: ["Go-Live Weekend Plan", "Post-Launch Support Handover"],
        blockers:
          "Third-party API downtime scheduled for Friday. Mitigation plan active.",
      },
      execView: {
        title: "The Executive View",
        desc: "I provide a high-level summary for executives while maintaining deep-dive data for technical leads.",
        sla: "98%",
        blockersCount: "0",
      },
    },
    composableStack: {
      id: "slide-composable-stack",
      title: "The Composable Stack",
      subtitle: "Architecting modern, headless ecosystems.",
      layers: [
        {
          id: "experience-layer",
          title: "Experience Layer",
          items: ["React / Next.js", "Mobile Apps", "Headless CMS"],
        },
        {
          id: "commerce-layer",
          title: "Commerce Layer",
          items: ["BigCommerce API", "Shopify Engine", "Custom Middleware"],
        },
        {
          id: "systems-layer",
          title: "Systems Layer",
          items: ["ERP (Oracle/SAP)", "PIM / OMS", "Legacy Databases"],
        },
      ],
      features: [
        {
          id: "feature-headless",
          icon: "Layers",
          title: "Headless",
          desc: "Decoupled front and back ends.",
        },
        {
          id: "feature-api-first",
          icon: "Server",
          title: "API-First",
          desc: "Everything is a service.",
        },
        {
          id: "feature-cloud-native",
          icon: "Database",
          title: "Cloud Native",
          desc: "AWS, Azure, and GCP ready.",
        },
        {
          id: "feature-composable",
          icon: "Cpu",
          title: "Composable",
          desc: "Best-of-breed stack composition.",
        },
      ],
    },
    titleSlide: {
      id: "slide-title",
      eyebrow: "Panel Discussion",
      titlePrefix: "Talk your client out of a ",
      titleHighlight: "bad decision",
      titleSuffix: " with a gamified decision tree",
      byline: "By: Jim Markunas",
      sponsor: "Sponsored by: Geekle",
    },
    cover: {
      id: "slide-cover",
      title: "What We’ll Cover in This Talk",
      description: "Use free(ish) Tools to make a gamified, interactive app in under 20 minutes to drive executive decision-making.",
      reasonLabel: "Why the Geekle audience would care:",
      reasons: [
        { id: "cover-reason-design", text: "It's design-oriented & uses (mostly) free tools" },
        { id: "cover-reason-fun", text: "It's fun! It turns hard conversations into a game" },
        { id: "cover-reason-proof", text: "It's provable - Modere scaled to $1b using this system" },
      ],
    },
    boehringer: {
      id: "slide-boehringer",
      title: "Boehringer Ingelheim: Unifying Data",
      subtitle: "Breaking down silos for a global pharmaceutical leader.",
      silos: ["Clinical Data", "Marketing Data", "Sales Data", "Supply Chain"],
      unified: "Unified Data Platform",
      challenge: {
        title: "The Challenge",
        desc: "Data was trapped in legacy silos across different departments, preventing a holistic view of the customer journey and slowing down decision-making.",
      },
      result: {
        title: "The Result",
        desc: "Implemented a unified data platform that integrated disparate sources, enabling real-time analytics and a 30% increase in operational efficiency.",
      },
    },
    modere: {
      id: "slide-modere",
      title: "The Modere Game",
      caseStudyLabel: "CASE STUDY",
      paragraphs: [
        { id: "modere-paragraph-1", text: "Modere was a technologically complex MLM that wanted to scale from $500m GMV to $1B GMV." },
        { id: "modere-paragraph-2", text: "The C-Suite was frugal, and the ‘old guard’ didn’t want any technological change at all." },
      ],
      goalLabel: "The Goal",
      goalText: "Drive key technology decisions to get them to $1B + illustrate financial consequences of not changing.",
    },
    engineers: {
      id: "slide-engineers",
      title: "Engineers vs Executives",
      titleTop: "Engineers, Designers & Artists",
      titleMiddle: "vs.",
      titleBottom: "Managers & Executives",
      circles: [
        { id: "attention", label: "Attention", value: "Shorter Spans" },
        { id: "focus", label: "Focus", value: "ROI & Value Prop" },
        { id: "stance", label: "Stance", value: "Risk-Averse" },
      ],
    },
    goal: {
      id: "slide-goal",
      title: "Goal",
      description: "Drive a key decision using visual gamification of data",
    },
    tools: {
      id: "slide-tools",
      title: "Tools Needed",
      items: [
        { id: "tool-google", name: "Google Account", cost: "Free" },
        { id: "tool-github", name: "Github", cost: "Free" },
        { id: "tool-box", name: "Box account", cost: "Free" },
        { id: "tool-notion", name: "Notion", cost: "Free-ish" },
        { id: "tool-design-system", name: "Design System", cost: "Free(ish)" },
        { id: "tool-code-editor", name: "Code Editor (AI)", cost: "Free(ish)" },
        { id: "tool-design-studio", name: "Google AI Design Studio", cost: "Free" },
        { id: "tool-chatgpt", name: "ChatGPT", cost: "Free(ish)" },
        { id: "tool-hosting", name: "Web Hosting", cost: "Not Free" },
      ],
    },
    preSetup: {
      id: "slide-setup",
      title: "Pre-Setup",
      steps: [
        { id: "pre-setup-hosting", text: "Hostinger (or comparable hosting)" },
        { id: "pre-setup-github", text: "Github Pages Project & Code Repo" },
        { id: "pre-setup-vscode", text: "VS Code with CI/CD Pipeline" },
        { id: "pre-setup-agent", text: "Preferred coding agent (Co-Pilot, Claude Code, etc)" },
        { id: "pre-setup-chatgpt", text: "Chat GPT Interview" },
        { id: "pre-setup-notion", text: "Notion - Write a case study" },
      ],
    },
    buildPart1: {
      id: "slide-build-1",
      titlePrefix: "How to Build ",
      titleHighlight: "Part 1",
      steps: [
        { id: "build-1-upload-design-system", text: "Upload Design System" },
        { id: "build-1-upload-case-study", text: "Upload case study" },
        { id: "build-1-ask-build", text: "Ask for the app build" },
        { id: "build-1-tweak", text: "Tweak build" },
        { id: "build-1-download", text: "Download codebase" },
      ],
    },
    buildPart2: {
      id: "slide-build-2",
      titlePrefix: "How to Build ",
      titleHighlight: "Part 2",
      subtitle: "ChatGPT refinement for streamlined app:",
      stepPrefix: "Step",
      steps: [
        { id: "build-2-streamline", text: "Prompt it to streamline the code for a light weight react/tailwind JSX app" },
        { id: "build-2-ui-tweaks", text: "Make UI tweaks" },
        { id: "build-2-export", text: "Export for VS code + Codex Prompt" },
        { id: "build-2-zip", text: "Make .zip file" },
      ],
    },
    finalize: {
      id: "slide-finalize",
      title: "Finalize the App",
      firstStepNumber: "01",
      firstStepLabel: "Code or UI tweaks",
      secondStepNumber: "02",
      secondStepLabel: "Github Commit",
      completionText: "Presentation Complete",
    },
    whyJim: {
      id: "slide-why-jim",
      title: "Why Jim Markunas?",
      subtitle: "The right partner for your most complex programs.",
      points: [
        { id: "why-jim-rescuer", icon: "Shield", title: "Program Rescuer", desc: "I inherit broken programs and ship them." },
        { id: "why-jim-depth", icon: "Cpu", title: "Technical Depth", desc: "I speak the language of engineering and architecture." },
        { id: "why-jim-outcome", icon: "Target", title: "Outcome Focused", desc: "I prioritize business value over process for process sake." },
        { id: "why-jim-team", icon: "Users", title: "Team Leader", desc: "I build high-performing, psychologically safe teams." },
        { id: "why-jim-efficiency", icon: "Zap", title: "Efficiency Expert", desc: "I automate the mundane to focus on the strategic." },
        { id: "why-jim-global", icon: "Globe", title: "Global Scale", desc: "I've managed multi-region rollouts for the world's biggest brands." },
      ],
    },
    rescuePlan: {
      id: "slide-rescue-plan",
      title: "The 30-Day Rescue Plan",
      subtitle: "My blueprint for turning around inherited programs.",
      carouselPhases: [
        { id: "rescue-audit", title: "Audit", desc: "Technical and process audit." },
        { id: "rescue-align", title: "Align", desc: "Stakeholder and team alignment." },
        { id: "rescue-prioritize", title: "Prioritize", desc: "Backlog grooming and RACI." },
        { id: "rescue-execute", title: "Execute", desc: "First sprint of the new era." },
      ],
      weeks: [
        {
          id: "rescue-week-1-2",
          title: "Week 1-2: Diagnosis",
          points: [
            "Identify technical blockers",
            "Interview key stakeholders",
            "Audit the Jira backlog",
          ],
        },
        {
          id: "rescue-week-3-4",
          title: "Week 3-4: Stabilization",
          points: [
            "Establish clear definition of done",
            "Implement daily standup rigor",
            "Publish the revised roadmap",
          ],
        },
      ],
    },
    thankYou: {
      id: "slide-thank-you",
      title: "Thank You",
      subtitle: "Let's build something great together.",
      name: "Jim Markunas",
      role: "Senior Technical Project Manager",
      email: "jim@greatestpmever.com",
      linkedin: "linkedin.com/in/jimmarkunas",
      readyText: "Ready for Questions",
    },
  },
};

interviewContent.slideTitles = buildSlideTitles(interviewContent.slides);
