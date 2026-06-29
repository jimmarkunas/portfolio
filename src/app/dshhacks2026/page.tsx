import type { Metadata } from "next";

import { siteCanonicalPaths } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

import DshHacks2026App from "./DshHacks2026App";

export const metadata: Metadata = buildPageMetadata({
  title: "DSH Hacks 2026",
  description:
    "DSH Hacks 2026 presentation by Jim Markunas on product thinking for engineers, discovery-first workflows, and case-study-driven product strategy.",
  canonicalPath: siteCanonicalPaths.dshhacks2026,
  robots: {
    index: false,
    follow: false,
  },
});

export default function DshHacks2026Page() {
  return (
    <div className="dshhacks2026-page">
      <DshHacks2026App />
    </div>
  );
}
