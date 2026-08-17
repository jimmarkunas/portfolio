type FreebieAssetKind = "PDF" | "DOCX" | "ZIP"

type FreebieAsset = {
  title: string
  description: string
  href: `/${string}`
  fileName: string
  kind: FreebieAssetKind
}

type FreebieCollection = {
  id: string
  title: string
  description: string
  assets: FreebieAsset[]
}

type FreebiesContent = {
  meta: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    title: string
    intro: string
  }
  collections: FreebieCollection[]
}

export const siteContent = {
  meta: {
    title: "Freebies",
    description:
      "Downloadable resources from Jim Markunas.",
  },
  hero: {
    eyebrow: "Freebies",
    title: "Downloadable Assets",
    intro:
      "A growing library of practical resources you can download right now.",
  },
  collections: [
    {
      id: "product-management",
      title: "Product Management",
      description: "Actionable tools and templates for PM workflows.",
      assets: [
        {
          title: "PMF Checklist (Mind The Product)",
          description: "A practical checklist to evaluate product-market fit signal quality and next actions.",
          href: "/freebies/PMF_Checklist_MindTheProduct.pdf",
          fileName: "PMF_Checklist_MindTheProduct.pdf",
          kind: "PDF",
        },
      ],
    },
    {
      id: "usaii-agents",
      title: "USAII + Jim Markunas — A.G.E.N.T.S.",
      description: "The A.G.E.N.T.S. methodology and supporting typography files.",
      assets: [
        {
          title: "A.G.E.N.T.S. Methodology",
          description: "The USAII + Jim Markunas A.G.E.N.T.S. methodology guide.",
          href: "/freebies/USAII_AGENTS_by_Jim_Markunas_20260817.pdf",
          fileName: "USAII_AGENTS_by_Jim_Markunas_20260817.pdf",
          kind: "PDF",
        },
        {
          title: "A.G.E.N.T.S. Methodology (Editable)",
          description: "An editable DOCX version of the methodology guide.",
          href: "/freebies/USAII_AGENTS_by_Jim_Markunas_20260817.docx",
          fileName: "USAII_AGENTS_by_Jim_Markunas_20260817.docx",
          kind: "DOCX",
        },
        {
          title: "Typography Pack",
          description: "Inter, Montserrat, and Red Hat Display font files.",
          href: "/freebies/Inter,Montserrat,Red_Hat_Display.zip",
          fileName: "Inter,Montserrat,Red_Hat_Display.zip",
          kind: "ZIP",
        },
      ],
    },
  ],
} satisfies FreebiesContent
