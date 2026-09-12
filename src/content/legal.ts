export const legalRoutes = {
  privacy: "/legal/privacy/",
  terms: "/legal/terms/",
} as const

export type LegalSection = {
  heading: string
  paragraphs?: readonly string[]
  bullets?: readonly string[]
  link?: {
    href: string
    label: string
  }
}

export type LegalDocument = {
  title: string
  description: string
  effectiveDate: string
  sections: readonly LegalSection[]
}

export const legalDocuments = {
  privacy: {
    title: "Privacy Policy",
    description: "Privacy policy for LIFE OS Gmail and greatestpmever.com.",
    effectiveDate: "September 12, 2026",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "LIFE OS Gmail is a personal-use automation operated by Jim Markunas. It is used only by the account owner and is not offered as a public multi-user service.",
          "This policy explains how LIFE OS Gmail accesses, uses, stores, and protects Google account data when the account owner authorizes Gmail access.",
        ],
      },
      {
        heading: "Google data accessed",
        paragraphs: [
          "The Gmail acquisition process uses the Gmail API to enumerate messages within a bounded time window and retrieve message metadata. The current implementation requests the gmail.modify OAuth scope, but the acquisition workflow itself performs read/list requests only.",
        ],
        bullets: [
          "Immutable Gmail message ID",
          "Thread ID, when available",
          "Sender / From header",
          "Subject",
          "Received timestamp",
          "Mailbox search/list results needed to establish a complete bounded census",
        ],
      },
      {
        heading: "What LIFE OS Gmail does not do",
        bullets: [
          "It does not persist full Gmail message bodies as part of the Gmail acquisition process.",
          "It does not archive, delete, move, label, mark messages read or unread, or send mail through the Gmail acquisition workflow.",
          "It does not sell Google user data or use it for advertising.",
          "It does not make Google user data available to unrelated third parties.",
        ],
      },
      {
        heading: "How data is used",
        paragraphs: [
          "Authorized Gmail metadata is used only to operate the account owner's LIFE OS personal automation, including identifying, reconciling, and routing relevant inbound information for the account owner's own workflows.",
          "Data may be processed by infrastructure providers required to operate LIFE OS, such as Google, GitHub Actions, and AI services deliberately selected by the account owner. It is not used for advertising, resale, credit decisions, or unrelated profiling.",
        ],
      },
      {
        heading: "Storage and retention",
        paragraphs: [
          "OAuth credentials are stored as encrypted GitHub Actions secrets and are not committed to the public source repository.",
          "The current Gmail acquisition workflow writes metadata-only output to a GitHub Actions artifact configured with one-day retention. Raw Gmail message bodies are not persisted by this acquisition process.",
          "Derived records may be retained when the account owner intentionally promotes information into another LIFE OS system of record. Those derived records are governed by the relevant destination system and are not a substitute copy of the Gmail mailbox.",
        ],
      },
      {
        heading: "Security and access",
        paragraphs: [
          "Access is limited to the account owner and the automation infrastructure required to run LIFE OS. Credentials and refresh tokens are treated as secrets and should be rotated or revoked if exposure is suspected.",
          "The account owner can revoke the application's Google Account access at any time through Google Account security settings.",
        ],
      },
      {
        heading: "Google API Services User Data Policy",
        paragraphs: [
          "LIFE OS Gmail's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        link: {
          href: "https://developers.google.com/terms/api-services-user-data-policy",
          label: "Google API Services User Data Policy",
        },
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "This policy may be updated when the application's data access or processing behavior materially changes. The effective date above will be updated when substantive changes are made.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about this policy or LIFE OS Gmail may be sent to jim@jimmarkunas.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "Terms of service for LIFE OS Gmail and greatestpmever.com.",
    effectiveDate: "September 12, 2026",
    sections: [
      {
        heading: "Personal-use service",
        paragraphs: [
          "LIFE OS Gmail is a private, personal-use automation operated by Jim Markunas. It is not offered as a public software-as-a-service product, consumer application, or multi-user platform.",
        ],
      },
      {
        heading: "Authorization",
        paragraphs: [
          "By authorizing LIFE OS Gmail, the account owner grants the application permission to access the Google account data described in the Privacy Policy for the account owner's own automation workflows.",
          "Authorization may be revoked at any time through Google Account security settings. Revocation may prevent Gmail-dependent LIFE OS functions from operating.",
        ],
      },
      {
        heading: "Permitted use",
        bullets: [
          "Use the application only with accounts you own or are authorized to access.",
          "Do not use the application to violate law, Google policies, third-party rights, or security controls.",
          "Do not attempt to expose, publish, or distribute OAuth credentials, refresh tokens, or other secrets.",
        ],
      },
      {
        heading: "Service availability",
        paragraphs: [
          "The application is provided for personal automation and may change, pause, fail, or be discontinued at any time. No uptime, support, data-recovery, or service-level commitment is provided.",
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          "LIFE OS Gmail depends on third-party services including Google APIs and GitHub Actions. Their availability, terms, security controls, quotas, and policies are governed by those providers.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "The application is provided as-is and as-available, without warranties of any kind to the maximum extent permitted by law. The account owner remains responsible for reviewing consequential automated outputs before relying on them.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, the operator is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of or inability to use the application or from third-party service failures.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Access may be discontinued at any time. The account owner may terminate use by revoking Google authorization and removing the associated credentials from the automation environment.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the State of Illinois, United States, without regard to conflict-of-law principles.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about these terms may be sent to jim@jimmarkunas.com.",
        ],
      },
    ],
  },
} as const satisfies Record<"privacy" | "terms", LegalDocument>

export type LegalSlug = keyof typeof legalDocuments
export const legalSlugs = Object.keys(legalDocuments) as LegalSlug[]
