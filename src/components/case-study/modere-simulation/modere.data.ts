import type {
  ArchitectureNode,
  Decision,
  ResultTab,
  ResultsView,
} from "./modere.types";
import { siteCta } from "@/content/site";

export const DEFAULT_CTA_HREF = siteCta.bookingUrls.caseStudyDefault;
export const STAGE_HEIGHT_CLASS = "lg:h-[760px] lg:min-h-[760px]";
export const CONSOLE_PREFIX = ">";

export const SIMULATION_STEPS: Decision[] = [
  {
    id: "architecture",
    title: "The $500M Plateau",
    scenario:
      "The business is stuck. The fractional CTO wants a fast 'Lift and Shift' to BigCommerce to save costs. The 'Old Timers' are watching for any sign of failure.",
    options: [
      {
        label: "Lift and Shift",
        description: "Move the existing mess to BigCommerce as-is.",
        outcome:
          "You save $1M in dev costs but the business remains stuck. Revenue stays at $500M.",
        revenueImpact: 0,
        isCorrect: false,
        politicsQuote:
          "We saved money, but we didn't solve the problem. The dumpster fire is just in a new building.",
      },
      {
        label: "Composable Architecture",
        description:
          "Insist on a thin commerce layer and Pimcore as the brain.",
        outcome:
          "Heavy political pressure from the 'Old Timers', but you protect the architecture. The foundation for $1B is laid.",
        revenueImpact: 250_000_000,
        isCorrect: true,
        politicsQuote:
          "I had to referee a vendor conflict and tell the CTO 'no' to a lift-and-shift. It was a war, but we won the vision.",
      },
    ],
  },
  {
    id: "checkout",
    title: "The Checkout Crisis",
    scenario:
      "BigCommerce doesn't support the MLM 'Shareable Cart' model natively. The IT Director wants a legacy iFrame checkout (HTML 4).",
    options: [
      {
        label: "Accept the iFrame",
        description: "Give the IT Director what he wants to keep the peace.",
        outcome:
          "The checkout is clunky, mobile performance tanks, and affiliates can't sell effectively.",
        revenueImpact: -50_000_000,
        isCorrect: false,
        politicsQuote:
          "We kept the peace, but we broke the customer experience. The affiliates are furious.",
      },
      {
        label: "The Shareable Cart Hack",
        description:
          "Leverage the BigCommerce SDK and React.js to build a bespoke headless checkout.",
        outcome:
          "A technical masterpiece. Affiliates can now share carts via link, driving massive conversion uplift.",
        revenueImpact: 200_000_000,
        isCorrect: true,
        politicsQuote:
          "I talked the IT Director out of his 1980s iFrame idea. We built something futuristic that actually works for the business model.",
      },
    ],
  },
  {
    id: "governance",
    title: "The Feature Creep",
    scenario:
      "Europe is 6 months behind. They want a custom 'pet feature' that would fork the architecture and delay the global launch.",
    options: [
      {
        label: "Allow the Fork",
        description:
          "Let Europe build their custom feature to avoid a political blowout.",
        outcome:
          "The global engine is compromised. Maintenance costs double. The $1B target slips.",
        revenueImpact: -100_000_000,
        isCorrect: false,
        politicsQuote:
          "We avoided a fight today, but we created a maintenance nightmare for tomorrow.",
      },
      {
        label: "Protect the Core",
        description:
          "Say 'no' to the fork. Insist on a unified global engine with Pimcore governance.",
        outcome:
          "Europe is mad, but the platform remains scalable. 10 markets launch on one engine.",
        revenueImpact: 100_000_000,
        isCorrect: true,
        politicsQuote:
          "I had to be the 'bad guy' to protect the $1B outcome. Governance isn't about saying yes; it's about protecting the architecture.",
      },
    ],
  },
];

export const RESULT_TABS: ResultTab[] = [
  { value: "outcome", label: "Outcome" },
  { value: "architecture", label: "Architecture" },
  { value: "analysis", label: "Analysis" },
];

export const RESULTS_VIEW_CONTENT: Record<
  ResultsView,
  {
    titlePrefix: string;
    titleEmphasis?: string;
    titleSuffix?: string;
    body: string;
  }
> = {
  outcome: {
    titlePrefix: "The ",
    titleEmphasis: "Outcome",
    body:
      "The business survived, but the plateau remains. Technical debt and political compromises limited the growth potential.",
  },
  architecture: {
    titlePrefix: "The Composable Console",
    body:
      "This is the engine that made the $1B path possible: Contentstack and Pimcore feed a custom Next.js layer, while BigCommerce powers transactions across web and mobile.",
  },
  analysis: {
    titlePrefix: "Managing the Dumpster Fire",
    body:
      "The technical wins were inseparable from the political calls. These are the decisions that protected the architecture under pressure.",
  },
};

export const OUTCOME_SUMMARY = {
  success:
    "You successfully engineered a $1B growth engine. The architecture held, the politics were managed, and the business scaled.",
  plateau:
    "The business survived, but the plateau remains. Technical debt and political compromises limited the growth potential.",
} as const;

export const OUTCOME_VIEW_ACTIONS: Array<{
  label: string;
  nextView: Extract<ResultsView, "architecture" | "analysis">;
}> = [
  { label: "View Architecture", nextView: "architecture" },
  { label: "View Analysis", nextView: "analysis" },
];

export const LEFT_ARCHITECTURE_NODES: ArchitectureNode[] = [
  { eyebrow: "The Voice", label: "Contentstack" },
  { eyebrow: "The Brain", label: "Pimcore" },
];

export const RIGHT_ARCHITECTURE_NODES: ArchitectureNode[] = [
  { eyebrow: "Node", label: "Web Storefront" },
  { eyebrow: "The Transaction", label: "BigCommerce" },
  { eyebrow: "Node", label: "Mobile App" },
];

export const CONSOLE_LINES = [
  "INITIALIZING COMPOSABLE CORE...",
  "PIMCORE BRAIN CONNECTED",
  "BIGCOMMERCE SDK WRAPPER ACTIVE",
  "SHAREABLE CART HACK DEPLOYED",
  "SYSTEM STATUS: $1B READY",
];
