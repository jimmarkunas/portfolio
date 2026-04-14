import type { Metadata } from "next";

import { siteCanonicalPaths } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";

import LlmDay2026App from "./LlmDay2026App";

export const metadata: Metadata = buildPageMetadata({
  title: "LLM Day 2026",
  description:
    "LLM Day 2026 presentation by Jim Markunas covering workflow-first AI strategy, agent design patterns, and enterprise ROI.",
  canonicalPath: siteCanonicalPaths.llmday2026,
  robots: {
    index: false,
    follow: false,
  },
});

export default function LlmDay2026Page() {
  return (
    <div className="llmday2026-page">
      <LlmDay2026App />
    </div>
  );
}
