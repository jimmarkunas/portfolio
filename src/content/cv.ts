export type CvLink = {
  label: string
  href: string
  external?: boolean
}

export type CvDownloadAsset = {
  label: string
  href: string
  fileName: string
}

export type CvImpactStat = {
  value: string
  label: string
  displayLabel?: string
  href?: string
}

export type CvClientSpotlight = {
  client: string
  focus: string
  outcome: string
  href?: string
}

export type CvExperienceEntry = {
  company: string
  role: string
  period: string
  summary: string
  tags: string[]
  highlights: string[]
  spotlights?: CvClientSpotlight[]
  relatedWork?: CvLink[]
}

export type CvAward = {
  rank: string
  year: string
  title: string
  source: string
  href?: string
}

export type CvSkillGroup = {
  title: string
  items: string[]
}

export const cvContent = {
  meta: {
    title: "CV | Jim Markunas",
    description: "Jim Markunas resume, experience, and delivery highlights.",
  },
  sectionPills: {
    delivery: "Result",
    experience: "Experience",
    awards: "Achievements",
  },
  deliverySection: {
    title: "My Resume",
    description:
      "By aligning business goals, technical constraints, and delivery execution, I help organizations modernize platforms, accelerate time-to-value, and improve results across critical digital channels.",
  },
  experienceSection: {
    title: "Explore My Delivery Journey",
  },
  awardsSection: {
    title: "My Achievements & Awards",
    description:
      "My love of solving complex problems has evolved into a career dedicated to leading impactful digital transformation, platform modernization, and enterprise delivery across business and technology.",
  },
  detailsSection: {
    title: "Resume Details",
    description: "Additional roles, credentials, and platform/tool fluency across my career.",
    additionalExperienceTitle: "Additional Work Experience",
    credentialsTitle: "Education, Certifications & Tools",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    toolsTitle: "Tools & Platforms",
  },
  uiText: {
    openCaseStudyAriaLabel: "Open case study",
  },
  hero: {
    pill: "Curriculum Vitae",
    name: "Jim Markunas",
    role: "Channel Product & Program Leader for regulated digital transformation and platform modernization",
    summary:
      "I bridge IT and business to drive roadmaps, delivery, and measurable outcomes across customer channels, commerce platforms, and Martech/PXM. I specialize in high-stakes programs where delivery complexity, compliance risk, and commercial pressure all hit at once.",
    links: [
      { label: "jimmarkunas@gmail.com", href: "mailto:jimmarkunas@gmail.com" },
      { label: "linkedin.com/in/jimmarkunas", href: "https://linkedin.com/in/jimmarkunas", external: true },
      { label: "jimmarkunas.com", href: "https://jimmarkunas.com", external: true },
    ] satisfies CvLink[],
  },
  downloads: [
    {
      label: "Download Resume (PDF)",
      href: "/cv/Jim Markunas Resume_TPM_20260213.pdf",
      fileName: "Jim Markunas Resume_TPM_20260213.pdf",
    },
    {
      label: "Download Resume (DOCX)",
      href: "/cv/Jim Markunas Resume_TPM_20260213.docx",
      fileName: "Jim Markunas Resume_TPM_20260213.docx",
    },
  ] satisfies CvDownloadAsset[],
  impactStats: [
    {
      value: "20+ Years",
      label: "Leading digital delivery",
      displayLabel: "Leading digital delivery",
    },
    {
      value: "$1B",
      label: "Revenue uplift delivered at Modere (up from $500m)",
      displayLabel: "Revenue uplift delivered at Modere (up from $500m)",
      href: "/work/modere",
    },
    {
      value: "$120m",
      label: "YoY Revenue Impact at DIRECTV",
      displayLabel: "YoY Revenue Impact at DIRECTV",
      href: "/work/dtv01",
    },
    {
      value: "40k",
      label: "Hours leading projects",
      displayLabel: "Hours leading projects",
    },
  ] satisfies CvImpactStat[],
  experienceIntro:
    "I lead end-to-end delivery across product, engineering, compliance, operations, and executive stakeholders. The work ranges from customer channel modernization to enterprise migration and composable commerce programs.",
  experiences: [
    {
      company: "The Austin Consulting Group",
      role: "Senior Technical Project Manager (Consultant)",
      period: "03/2023 – Present",
      summary:
        "I run cross-functional technical programs for regulated customer channels and commerce modernization, from roadmap through release readiness and post-launch stabilization.",
      tags: ["Customer Channels", "Martech/CXM", "PIM/DAM", "Program Leadership"],
      highlights: [
        "Turn executive goals into delivery-ready plans with clear milestones, dependencies, and risk controls.",
        "Own sprint execution and stakeholder reporting to keep delivery pressure from derailing outcomes.",
        "Standardize intake, story quality, acceptance criteria, and test-readiness so launches are faster with less rework.",
      ],
      spotlights: [
        {
          client: "DIRECTV",
          focus: "Customer Channels / Martech",
          outcome:
            "Drove end-to-end delivery of a cross-functional product and engineering program that supported roughly $120M YoY uplift.",
          href: "/work/dtv01",
        },
        {
          client: "CPS Energy",
          focus: "Service Channels / Smart Grid",
          outcome:
            "Owned prioritized backlog, releases, and KPI/OKR reporting to drive +18% engagement and -12% support calls; program recognized with the global Smart 20 Award.",
          href: "/work/cps",
        },
        {
          client: "New York Life",
          focus: "CXM / Content Operations",
          outcome:
            "Led delivery of a compliance-driven CMS and site builder for 12k+ agents; achieved around 40% faster time-to-value and 30% fewer defects.",
          href: "/work/newyorklife",
        },
        {
          client: "Modere",
          focus: "Composable Commerce / PIM-DAM",
          outcome:
            "Delivered a multi-vendor BigCommerce + Pimcore + Azure program, reducing infrastructure costs by 35% and accelerating GTM by 65%+ (MACH Impact Award nomination).",
          href: "/work/modere",
        },
      ],
      relatedWork: [
        { label: "DIRECTV Case Study", href: "/work/dtv01" },
        { label: "CPS Energy Case Study", href: "/work/cps" },
        { label: "New York Life Case Study", href: "/work/newyorklife" },
        { label: "Modere Case Study", href: "/work/modere" },
      ],
    },
    {
      company: "Boehringer Ingelheim (via Corra / Publicis Sapient)",
      role: "Senior Technical Project Manager",
      period: "09/2020 – 03/2023",
      summary:
        "I led multi-vendor portfolio delivery for global channel migrations across the U.S. and EU, balancing business continuity with platform modernization and SAP migration workstreams.",
      tags: ["Global Delivery", "Adobe Commerce", "SAP Migration", "Release Management"],
      highlights: [
        "Aligned roadmaps to business priorities and kept phased cutovers stable under high operational risk.",
        "Owned release planning and sprint delivery for Adobe Commerce Cloud programs with measurable channel performance improvements.",
        "Led requirements and acceptance criteria for Oracle-to-SAP finance, supply-chain, and digital workflows, reducing defects by about 30%.",
      ],
      relatedWork: [{ label: "Boehringer Ingelheim Case Study", href: "/work/bi" }],
    },
    {
      company: "BigCommerce",
      role: "Senior Technical Project Manager",
      period: "10/2018 – 08/2020",
      summary:
        "I ran discovery and requirements workshops for enterprise B2B and DTC merchants in North America and EMEA, translating channel needs into high-confidence delivery plans.",
      tags: ["Enterprise B2B/DTC", "API Integrations", "PIM/PXM", "Go-to-Market"],
      highlights: [
        "Translated catalog, PDP, promotions, and product-data requirements into clear stories and acceptance criteria with engineering.",
        "Managed dependencies across FinTech, ERP, OMS, and logistics integrations through REST APIs.",
        "Delivered recurring checkout and catalog improvements that reduced time-to-value by around 25% while supporting 50-75% higher MRR for scaling merchants.",
      ],
      relatedWork: [
        { label: "K2 Case Study", href: "/work/k2" },
        { label: "Murad Case Study", href: "/work/murad" },
      ],
    },
    {
      company: "Shopify",
      role: "Senior Technical Project Manager",
      period: "06/2016 – 09/2018",
      summary:
        "I led Shopify Plus launch delivery and cross-functional execution for enterprise retail programs, translating executive goals into milestone-based plans and measurable business outcomes.",
      tags: ["Shopify Plus", "Retail Commerce", "Cross-Functional Execution"],
      highlights: [
        "Defined owners, milestones, and success metrics for complex launch workstreams.",
        "Coordinated business, product, and engineering execution to protect launch quality.",
        "Delivered measurable impact including 25% lower total cost of ownership and faster time-to-value.",
      ],
      relatedWork: [{ label: "Frederick's of Hollywood Case Study", href: "/work/foh" }],
    },
    {
      company: "The Boston Consulting Group (Client: LEGO)",
      role: "Program Manager",
      period: "06/2015 – 06/2016",
      summary:
        "I defined system interactions and requirements for LEGO's omni-channel stack while partnering across architecture and business teams on cross-product dependencies.",
      tags: ["Omni-Channel", "Requirements", "Enterprise Transformation"],
      highlights: [
        "Helped shape a delivery model that supported retail, ecommerce, and digital-platform growth.",
        "Translated system-level complexity into roadmap-ready program scope.",
        "Work from this transformation was later profiled by Harvard and MIT.",
      ],
      relatedWork: [{ label: "LEGO Case Study", href: "/work/lego" }],
    },
  ] satisfies CvExperienceEntry[],
  additionalExperience: [
    "American Apparel | Program Manager | 2013 – 2015",
    "DIRECTV | Product Manager | 2012 – 2013",
    "Warner Bros. / HBO | Product Manager | 2010 – 2012",
  ],
  awards: [
    {
      rank: "[1]",
      year: "2025",
      title: "Global Smart 20 Award (Won)",
      source: "Smart Cities Connect",
      href: "/work/cps",
    },
    {
      rank: "[2]",
      year: "2025",
      title: "MACH Impact Award (Nominated)",
      source: "MACH Alliance",
      href: "/work/modere",
    },
    {
      rank: "[3]",
      year: "2016",
      title: "Digital Transformation Profile",
      source: "Harvard Business Review",
      href: "/work/lego",
    },
    {
      rank: "[4]",
      year: "2016",
      title: "Digital Transformation Profile",
      source: "MIT Sloan CISR",
      href: "/work/lego",
    },
  ] satisfies CvAward[],
  skills: [
    {
      title: "Leadership & Delivery",
      items: [
        "Program and portfolio management",
        "Product and channel roadmap leadership",
        "Cross-functional stakeholder alignment",
        "Risk, dependency, and release management",
        "Agile/Scrum/SAFe execution",
      ],
    },
    {
      title: "Platforms & Ecosystems",
      items: [
        "Adobe Commerce (Magento)",
        "BigCommerce",
        "Shopify Plus",
        "Pimcore (PIM/DAM)",
        "Salsify (PIM/CXM)",
        "Salesforce and CXM workflows",
      ],
    },
    {
      title: "Enterprise Systems & Tooling",
      items: [
        "SAP and Oracle migration programs",
        "Azure cloud services",
        "REST APIs and integration planning",
        "SQL",
        "Jira and Confluence",
        "Figma",
      ],
    },
  ] satisfies CvSkillGroup[],
  education: [
    "B.A., Integrated Marketing Communications — Roosevelt University (Chicago, IL)",
  ],
  certifications: ["PMP (Project Management Professional)", "CSM (Certified Scrum Master)"],
  cta: {
    heading: "Need someone who can lead complex delivery under pressure?",
    body:
      "If your roadmap is blocked by cross-team complexity, platform risk, or execution drift, I can help you turn it into a shipped, measurable program.",
    primary: { label: "Book a Call", href: "https://calendar.app.google/TkZumQx7Bfyou7G26", external: true },
    secondary: { label: "See Case Studies", href: "/work" },
  },
}
