import type { InterviewsContent } from "@/content/interviews/types";

export const enterpriseSlides = {
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
} satisfies Pick<
  InterviewsContent["slides"],
  | "who"
  | "outcomes"
  | "services"
  | "greatestPm"
  | "hybridAgile"
  | "jiraTickets"
  | "riskLandscape"
  | "statusReport"
  | "composableStack"
>;
