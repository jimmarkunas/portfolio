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

export type CvFounderExperience = {
  company: string
  summary: string
}

export const cvContent = {
  meta: {
    title: "CV | James Markunas",
    description:
      "Senior Technical Project Manager focused on rescuing complex programs and shipping measurable outcomes.",
  },
  sectionPills: {
    delivery: "Result",
    experience: "Experience",
    awards: "Achievements",
  },
  deliverySection: {
    title: "My Resume",
    description:
      "Senior Technical Project Manager who specializes in inheriting broken programs and shipping them across complex, multi-vendor ecommerce and digital transformation programs.",
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
    founderExperienceTitle: "Founder Experience",
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
    name: "James Markunas",
    role: "Senior Technical Project Manager",
    summary:
      "Brought in to rescue distressed engagements at Boehringer Ingelheim, BigCommerce, and Fusion92 after prior PMs failed. 20+ years and 45+ enterprise projects delivering $1.3B+ in verified business impact.",
    links: [
      { label: "jimmarkunas@gmail.com", href: "mailto:jimmarkunas@gmail.com" },
      { label: "linkedin.com/in/jimmarkunas", href: "https://linkedin.com/in/jimmarkunas", external: true },
      { label: "greatestpmever.com", href: "https://greatestpmever.com", external: true },
    ] satisfies CvLink[],
  },
  downloads: [
    {
      label: "Download Resume (DOCX)",
      href: "/cv/Jim_Markunas_Resume_General_TPM_v3.docx",
      fileName: "Jim_Markunas_Resume_General_TPM_v3.docx",
    },
  ] satisfies CvDownloadAsset[],
  impactStats: [
    {
      value: "20+ Years",
      label: "Leading digital delivery",
      displayLabel: "Leading digital delivery",
    },
    {
      value: "$1.3B+",
      label: "Verified business impact delivered",
      displayLabel: "Verified business impact delivered",
      href: "/work/modere",
    },
    {
      value: "$120m",
      label: "YoY Revenue Impact at DIRECTV",
      displayLabel: "YoY Revenue Impact at DIRECTV",
      href: "/work/dtv01",
    },
    {
      value: "45+",
      label: "Enterprise projects delivered",
      displayLabel: "Enterprise projects delivered",
    },
  ] satisfies CvImpactStat[],
  experienceIntro:
    "I bridge business strategy and engineering execution across distressed and high-pressure programs, turning unclear objectives into delivery plans and measurable outcomes.",
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
  founderExperience: [
    {
      company: "Chicks With Guns (CWG)",
      summary:
        "Founded and scaled a digital music media brand from zero to national recognition; launched an early native iOS app and built a publishing operation covering major labels and indie artists.",
    },
    {
      company: "ZEVO (IPTV)",
      summary:
        "Defined product vision and architecture for an IPTV network; pitched tier-1 Silicon Valley VCs on go-to-market strategy and platform design.",
    },
  ] satisfies CvFounderExperience[],
  awards: [
    {
      rank: "[1]",
      year: "2025",
      title: "Smart 20 Award",
      source: "Global smart-grid and sustainability program delivery at CPS Energy",
      href: "/work/cps",
    },
    {
      rank: "[2]",
      year: "2025",
      title: "MACH Impact Award Nomination",
      source: "Composable commerce platform transformation at Modere",
      href: "/work/modere",
    },
    {
      rank: "[3]",
      year: "2016",
      title: "Harvard and MIT Case Studies",
      source: "BCG/LEGO program work referenced in digital reinvention case studies",
      href: "/work/lego",
    },
  ] satisfies CvAward[],
  skills: [
    {
      title: "Leadership & Delivery",
      items: [
        "Technical program management",
        "Technical project management",
        "Product ownership",
        "Backlog management",
        "Agile / Scrum / SAFe",
        "Cross-functional stakeholder alignment",
        "Risk, dependency, and release management",
        "SOW governance and executive communication",
      ],
    },
    {
      title: "Platforms & Ecosystems",
      items: [
        "Adobe Commerce (Magento)",
        "BigCommerce",
        "Shopify Plus",
        "Platform migrations",
        "Multi-vendor delivery",
        "Pimcore (PIM/DAM)",
        "Salsify (PIM/PXM)",
        "Enterprise ecommerce operations",
      ],
    },
    {
      title: "Enterprise Systems & Tooling",
      items: [
        "Systems integration (REST APIs, ERP, OMS, FinTech)",
        "SAP and Oracle migration programs",
        "KPI/OKR definition",
        "UAT coordination",
        "Azure cloud services",
        "SQL",
        "Jira and Confluence",
        "Figma",
      ],
    },
  ] satisfies CvSkillGroup[],
  education: [
    "B.A., Integrated Marketing Communications — Roosevelt University (Chicago, IL)",
  ],
  certifications: [
    "PMP (Project Management Professional)",
    "CSM (Certified Scrum Master)",
    "CSPO (Certified Scrum Product Owner)",
  ],
  cta: {
    heading: "Need someone who can lead complex delivery under pressure?",
    body:
      "If your roadmap is blocked by cross-team complexity, platform risk, or execution drift, I can help you turn it into a shipped, measurable program.",
    primary: { label: "Book a Call", href: "https://calendar.app.google/TkZumQx7Bfyou7G26", external: true },
    secondary: { label: "See Case Studies", href: "/work" },
  },
}
