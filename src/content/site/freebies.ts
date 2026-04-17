type FreebieAssetKind = "PDF" | "DOCX"

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
      "A growing library of practical resources. Starting with one PDF checklist you can download right now.",
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
  ],
} satisfies FreebiesContent
