// @ts-nocheck
export const slideContent = {
  slide01: {
    title: "Who I Am",
    jobTitle: "Senior Technical Project Manager",
    name: "Who is Jim Markunas?",
    subtitle: "Diagnose like an architect, prioritize like a product owner, and deliver like a PM.",
    stats: [
      { label: "Leading Digital Delivery", value: "20+ Years" },
      { label: "Projects Led", value: "75+" },
      { label: "PM Experience", value: "40k Hrs." },
      { label: "Budgets Managed", value: "$100m" },
    ],
    logos: [
      '/interviews/aa-logo.svg',
      '/interviews/bcg-logo.svg',
      '/interviews/bc-logo-icon.svg',
      '/interviews/dtv-logo.svg',
      '/interviews/disney-logo.svg',
      '/interviews/hbo-logo.svg',
      '/interviews/publicis-sapient-logo.svg',
      '/interviews/shopify-logo.svg',
    ],
    eyebrow: "Companies I've Helped",
    notes: [
      "Tell me about yourself / Walk me through your resume.",
      "Focus on the 'Rescue PM' brand: I inherit broken programs and ship them.",
      "Highlight the scale: 20+ years, $1.3B impact."
    ]
  },
  slide01a: {
    title: "What Do I Do?",
    jobTitle: "Senior Technical Project Manager",
    name: "Jim Markunas",
    subtitle: "I turn enterprise programs into measurable outcomes",
    logos: [
      '/interviews/bi-logo.svg',
      '/interviews/lego-logo.svg',
      '/interviews/method-logo.svg',
      '/interviews/modere-logo.svg',
      '/interviews/mm-logo.svg',
      '/interviews/nyl-logo.svg',
    ],
    eyebrow: "Select Projects",
    stats: [
      { label: "2 Ivy League Case Studies", value: "LEGO" },
      { label: "Awards", value: "2" },
      { label: "Stakeholders/People Managed", value: "397-48" },
      { label: "ROI Delivered", value: "$1.3B" },
    ],
    notes: [
      "Tell me about yourself / Walk me through your resume.",
      "Focus on the 'Rescue PM' brand: I inherit broken programs and ship them.",
      "Highlight the scale: 20+ years, $1.3B impact."
    ]
  },
  slide02: {
    title: "What Can I Do For You?",
    subhead: "A balanced approach to complex delivery.",
    quads: [
      { title: "10% Functional", color: "bg-text-muted", skills: ["UAT Management", "Training Materials", "Go-Live Support", "Post-Launch Audit"] },
      { title: "30% Technical", color: "bg-ink", skills: ["Architecture Review", "API Strategy", "Cloud Infrastructure", "DevOps Fluency"] },
      { title: "20% Scrum Master", color: "bg-accent/60", skills: ["Ceremony Facilitation", "Velocity Tracking", "Backlog Health", "Team Coaching"] },
      { title: "40% Business Analyst", color: "bg-accent", skills: ["Requirements Gathering", "Stakeholder Alignment", "Process Mapping", "Gap Analysis"] }
    ],
    notes: [
      "What makes you different? / How technical are you?",
      "Explain the mix: BA rigor + Tech depth + Scrum agility.",
      "Credibility with engineers comes from the 30% Technical quadrant."
    ]
  },
  slide03: {
    title: "Am I Really the Greatest PM Ever?",
    subhead: "Not Yet, But Like Avis, I Try Harder",
    metricsTitle: "Enterprise ROI & Metrics",
    awards: [
      { id: "01", title: "Smart 20 Award", desc: "Global recognition for utility innovation." },
      { id: "02", title: "MACH Impact Nomination", desc: "Shortlisted for best composable commerce launch." },
      { id: "03", title: "Harvard HBS & MIT Sloan Case Studies", desc: "Featured in 'BCG × LEGO' and referenced for agile delivery at scale." }
    ],
    notes: [
      "What certifications do you hold? / Are you overqualified?",
      "PMP 'Above Target' shows mastery of the fundamentals.",
      "Academic case studies (HBS/MIT) show strategic impact."
    ]
  },
  slide04: {
    title: "Enterprise Agile: The Hybrid Reality",
    subhead: "Waterfall for planning, Agile for execution.",
    notes: [
      "Agile vs. Waterfall? / How do you handle fixed delivery dates?",
      "Explain the 'Hybrid' model: Waterfall for planning/budget, Agile for execution.",
      "Release boundaries are where the two worlds meet."
    ]
  },
  slide05: {
    title: "The 4-Phase Delivery Model",
    subhead: "A repeatable framework for high-stakes programs.",
    phases: [
      { title: "Diagnose", desc: "Technical audit and risk identification.", artifacts: ["Risk Log", "Stakeholder Map", "Technical Audit"] },
      { title: "Strategize", desc: "Roadmap and architecture design.", artifacts: ["Roadmap", "Architecture Design", "Resource Plan"] },
      { title: "Execute", desc: "Agile delivery and continuous integration.", artifacts: ["Sprint Backlog", "CI/CD Pipeline", "Stakeholder Sync"] },
      { title: "Optimize", desc: "Performance tuning and value realization.", artifacts: ["Performance Report", "Feature Backlog", "Value Audit"] }
    ],
    footerInfo: "Hover over each phase to see the key artifacts delivered.",
    notes: [
      "Walk me through how you run a project.",
      "Phase 01 (Diagnose) is critical for inherited 'broken' projects.",
      "The goal is repeatable, predictable delivery."
    ]
  },
  slide06: {
    title: "Jira as the Source of Truth",
    subhead: "A hierarchical approach to clarity and execution.",
    treeData: {
      label: "Epic: Disney Mobile App v2.0",
      children: [
        {
          label: "User Story: Unified Login",
          children: [
            { label: "AC: OAuth 2.0 Support" },
            { label: "Sub-task: API Integration" }
          ]
        },
        {
          label: "User Story: Push Notifications",
          children: [
            { label: "AC: Real-time Alerts" },
            { label: "Sub-task: FCM Setup" }
          ]
        }
      ]
    },
    definitions: [
      { title: "Epic", desc: "High-level business goal or initiative." },
      { title: "User Story", desc: "Value-driven requirement from the user's perspective." },
      { title: "AC / Sub-tasks", desc: "Technical details and clear definition of done." }
    ],
    notes: [
      "How do you organize a Jira backlog? / How do you write user stories?",
      "Explain the hierarchy: Epic -> Story -> AC -> Sub-tasks.",
      "Use the Disney app as a concrete example of an Epic."
    ]
  },
  slide07: {
    title: "How I Think About Risk",
    subhead: "Proactive identification and systematic mitigation.",
    registerText: {
      title: "The Risk Register",
      desc: "Every program gets a live risk register. We categorize by Impact and Probability to focus on what matters most."
    },
    categories: [
      { title: "Critical", action: "Immediate Escalation" },
      { title: "Low", action: "Monitor & Resolve" }
    ],
    notes: [
      "How do you identify and mitigate risk?",
      "Technical, External, Organizational, and PM risks are tracked separately.",
      "The live risk register is reviewed every single sprint."
    ]
  },
  slide08: {
    title: "Managing Competing Priorities",
    subhead: "Navigating complex stakeholder demands with logic.",
    footerInfo: "Toggle between Business Value and LOE to see how prioritization shifts.",
    notes: [
      "How do you prioritize across a program?",
      "Use the RACI matrix and the Important/Urgent split.",
      "LOE (Level of Effort) is balanced against business value."
    ]
  },
  slide09: {
    title: "The 'Perfect' Status Report",
    subhead: "Clear, Consistent, Concise communications.",
    report: {
      programName: "Program Status: Digital Transformation",
      status: "On Track",
      accomplishments: ["API V2 Migration Complete", "UAT Sign-off for Checkout", "Security Audit Passed"],
      inProgress: ["Mobile App Refactor (80%)", "Multi-region AWS Deployment"],
      upcoming: ["Go-Live Weekend Plan", "Post-Launch Support Handover"],
      blockers: "Third-party API downtime scheduled for Friday. Mitigation plan active."
    },
    execView: {
      title: "The Executive View",
      desc: "I provide a high-level summary for executives while maintaining deep-dive data for technical leads.",
      sla: "98%",
      blockersCount: "0"
    },
    notes: [
      "How do you structure status reporting? / How do you keep execs informed?",
      "The report is clear, consistent, and concise.",
      "Focus on: Completed, In-Progress, Upcoming, and Critical Risks."
    ]
  },
  slide10: {
    title: "The Composable Stack",
    subhead: "Architecting modern, headless ecosystems.",
    layers: [
      { title: "Experience Layer", items: ["React / Next.js", "Mobile Apps", "Headless CMS"] },
      { title: "Commerce Layer", items: ["BigCommerce API", "Shopify Engine", "Custom Middleware"] },
      { title: "Systems Layer", items: ["ERP (Oracle/SAP)", "PIM / OMS", "Legacy Databases"] }
    ],
    features: [
      { icon: "Layers", title: "Headless", desc: "Decoupled front & back ends." },
      { icon: "Server", title: "API-First", desc: "Everything is a service." },
      { icon: "Database", title: "Cloud Native", desc: "AWS / Azure / GCP." },
      { icon: "Cpu", title: "Composable", desc: "Best-of-breed stack." }
    ],
    notes: [
      "How technical are you really? / What does a composable stack look like?",
      "Explain the 3-layer architecture: Experience, Commerce, and Systems.",
      "I speak the language of ERPs, OMS, PIMs, and CMSs."
    ]
  },
  slide11: {
    title: "Boehringer Ingelheim: Unifying Data",
    subhead: "Breaking down silos for a global pharmaceutical leader.",
    silos: ["Clinical Data", "Marketing Data", "Sales Data", "Supply Chain"],
    unified: "Unified Data Platform",
    challenge: {
      title: "The Challenge",
      desc: "Data was trapped in legacy silos across different departments, preventing a holistic view of the customer journey and slowing down decision-making."
    },
    result: {
      title: "The Result",
      desc: "Implemented a unified data platform that integrated disparate sources, enabling real-time analytics and a 30% increase in operational efficiency."
    },
    notes: [
      "Case Study: Breaking Data Silos.",
      "Inherited 12 disconnected data sources for clinical trials.",
      "Unified into a single source of truth, reducing reconciliation time by 60%."
    ]
  },
  slide12: {
    title: "Modere: Global Headless Migration",
    subhead: "Scaling a global e-commerce platform to 20+ markets.",
    stats: [
      { label: "Markets", value: "20+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Conversion", value: "+15%" },
      { label: "Load Time", value: "-40%" }
    ],
    simulation: [
      { question: "How do we handle multi-region inventory sync?", options: ["Real-time API calls", "Daily Batch Updates", "Event-driven Webhooks"] },
      { question: "Which frontend architecture supports 20+ locales?", options: ["Monolithic React App", "Micro-frontends", "Server-side Rendered Next.js"] }
    ],
    notes: [
      "Case Study: Global Scale & Expansion.",
      "Managed headless migration across 28 countries and 14 languages.",
      "Built a global platform that maintained brand standards while allowing local speed."
    ]
  },
  slide13: {
    title: "BCG / LEGO: Rescuing Legacy Programs",
    subhead: "Turning around a failing digital transformation initiative.",
    before: ["6 months behind schedule", "Low team morale and high turnover", "Unclear requirements and scope creep", "Technical debt blocking new features"],
    after: ["Delivered on revised timeline", "Implemented automated testing suite", "Clear RACI and ownership established", "Successful global rollout to 5 regions"],
    quote: {
      text: "Jim stepped into a chaotic situation and brought the structure and technical leadership we desperately needed to cross the finish line.",
      author: "Senior Partner",
      role: "Digital Transformation",
      company: "BCG"
    },
    notes: [
      "Case Study: Rescuing Legacy Programs.",
      "Inherited a stalled $50M project and shipped the MVP in 6 months.",
      "Focus on unblocking engineers and removing organizational noise."
    ]
  },
  slide14: {
    title: "DIRECTV: Process Automation",
    subhead: "Streamlining operations through intelligent automation.",
    transformation: {
      title: "The Transformation",
      points: [
        "Automated 40% of manual QA processes",
        "Reduced deployment time from days to hours",
        "Implemented real-time monitoring dashboard",
        "Standardized documentation across 12 teams"
      ]
    },
    savings: { amount: "$2.5M", label: "Annual Cost Savings", desc: "Efficiency gain through automated workflows." },
    notes: [
      "Case Study: Automation & Efficiency.",
      "Automated 40% of manual QA, reducing release cycles by 2 days.",
      "Upskilled the team and integrated automated gates into Jira."
    ]
  },
  slide15: {
    title: "Murad: Monolith to Composable",
    subhead: "Modernizing a legacy tech stack for high-growth e-commerce.",
    architecture: {
      nodes: [
        { label: "Legacy Monolith", type: "input" as const },
        { label: "API Gateway", type: "process" as const },
        { label: "Microservices", type: "process" as const },
        { label: "Headless Storefront", type: "output" as const }
      ],
      features: [
        { title: "Scalability", desc: "Independent scaling of services based on demand." },
        { title: "Agility", desc: "Faster feature releases without impacting the entire system." },
        { title: "Resilience", desc: "Fault isolation prevents system-wide outages." }
      ]
    },
    notes: [
      "Case Study: Architecture Overhaul.",
      "Moved from a legacy monolith to a performance-first composable stack.",
      "Resulted in a 30% increase in site speed and 15% better conversion."
    ]
  },
  slide16: {
    title: "American Apparel: Logistics Optimization",
    subhead: "Global inventory tracking and supply chain visibility.",
    layers: [
      { title: "Manufacturing", items: ["Factory ERP", "Quality Control", "Packing"] },
      { title: "Logistics", items: ["Freight Tracking", "Customs Clearing", "Warehouse Management"] },
      { title: "Retail", items: ["POS Systems", "Online Store", "Inventory Sync"] }
    ],
    resultText: "Reduced stock-outs by 25% through real-time inventory visibility.",
    notes: [
      "Case Study: Inventory & Logistics.",
      "Implemented real-time inventory tracking across global retail and e-commerce.",
      "Reduced stockouts by 20% through unified inventory management."
    ]
  },
  slide17: {
    title: "Shopify: App Ecosystem Strategy",
    subhead: "Building and scaling high-impact apps for the Shopify platform.",
    treeData: {
      label: "Shopify App Ecosystem",
      children: [
        {
          label: "Marketing Apps",
          children: [{ label: "Email Automation" }, { label: "Social Integration" }]
        },
        {
          label: "Operations Apps",
          children: [{ label: "Inventory Sync" }, { label: "Shipping Labels" }]
        },
        {
          label: "Customer Experience",
          children: [{ label: "Product Reviews" }, { label: "Loyalty Programs" }]
        }
      ]
    },
    stats: [
      { value: "500k+", label: "Active Installs" },
      { value: "4.8/5", label: "Average Rating" },
      { value: "30%", label: "MRR Growth" }
    ],
    notes: [
      "Case Study: The App Ecosystem.",
      "Built 5+ high-volume Shopify apps with over 100k installs.",
      "Focus on performance and scalability in the commerce ecosystem."
    ]
  },
  slide18: {
    title: "Adobe: Creative Cloud Integration",
    subhead: "Seamless workflows across the creative suite.",
    experience: {
      title: "Unified Creative Experience",
      desc: "Managed the integration of cloud-based assets across Photoshop, Illustrator, and InDesign, ensuring a consistent user experience and real-time collaboration.",
      tags: ["Cloud Assets", "Real-time Sync", "API V3"]
    },
    metrics: [
      { title: "Asset Sync Speed", value: "99.9% Success" },
      { title: "User Adoption", value: "85% Growth" }
    ],
    notes: [
      "Case Study: Creative Cloud Integration.",
      "Integrated Adobe Sign into enterprise workflows for Fortune 500 clients.",
      "Built custom Creative Cloud extensions to bridge the gap between tools and workflows."
    ]
  },
  slide19: {
    title: "Publicis Sapient: Agency Leadership",
    subhead: "Leading multi-disciplinary teams for Fortune 500 clients.",
    clients: ["Disney", "HBO", "DIRECTV", "American Apparel", "Modere", "Murad", "Adobe", "Shopify"],
    delivery: {
      title: "Strategic Delivery",
      desc: "Managed budgets exceeding $50M and led teams of 50+ engineers, designers, and product managers across global time zones."
    },
    management: {
      title: "Client Management",
      desc: "Acted as the primary technical point of contact for C-suite stakeholders, translating business vision into technical roadmaps."
    },
    notes: [
      "Case Study: Agency Leadership.",
      "Led cross-functional teams for digital transformations at Disney, HBO, and more.",
      "Expertise in managing expectations and delivering in high-stakes environments."
    ]
  },
  slide20: {
    title: "Why Jim Markunas?",
    subhead: "The right partner for your most complex programs.",
    points: [
      { icon: "Shield", title: "Program Rescuer", desc: "I inherit broken programs and ship them." },
      { icon: "Cpu", title: "Technical Depth", desc: "I speak the language of engineering and architecture." },
      { icon: "Target", title: "Outcome Focused", desc: "I prioritize business value over process for process sake." },
      { icon: "Users", title: "Team Leader", desc: "I build high-performing, psychologically safe teams." },
      { icon: "Zap", title: "Efficiency Expert", desc: "I automate the mundane to focus on the strategic." },
      { icon: "Globe", title: "Global Scale", desc: "I've managed multi-region rollouts for the world's biggest brands." }
    ],
    notes: [
      "Summary: The Strategic Advantage.",
      "20+ years of experience blending technical depth with business acumen.",
      "Execution-focused leader ready to inherit and ship complex programs."
    ]
  },
  slide21: {
    title: "The 30-Day Rescue Plan",
    subhead: "My blueprint for turning around inherited programs.",
    carouselPhases: [
      { title: "Audit", desc: "Technical and process audit." },
      { title: "Align", desc: "Stakeholder and team alignment." },
      { title: "Prioritize", desc: "Backlog grooming and RACI." },
      { title: "Execute", desc: "First sprint of the new era." }
    ],
    weeks: [
      { title: "Week 1-2: Diagnosis", points: ["Identify technical blockers", "Interview key stakeholders", "Audit the Jira backlog"] },
      { title: "Week 3-4: Stabilization", points: ["Establish clear definition of done", "Implement daily standup rigor", "Publish the revised roadmap"] }
    ],
    notes: [
      "My First 30 Days: Audit, Unblock, Stabilize, Scale.",
      "Focus on quick wins to build momentum and trust.",
      "Goal is to reach a predictable, high-velocity delivery state."
    ]
  },
  slide22: {
    title: "Thank You",
    subhead: "Let's build something great together.",
    name: "Jim Markunas",
    role: "Senior Technical Project Manager",
    email: "jimmarkunas@gmail.com",
    linkedin: "linkedin.com/in/jimmarkunas",
    readyText: "Ready for Questions",
    notes: [
      "Thank you for your time.",
      "Open for questions and deeper technical discussion.",
      "Ready to hit the ground running."
    ]
  }
};
