import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import SecureCarolinas2026App from "../secure-carolinas-2026/SecureCarolinas2026App";

export const metadata: Metadata = buildPageMetadata({
  title: "Is Your Enterprise Ready to Put AI Into Production?",
  description:
    "Secure Carolinas 2026 presentation by Jim Markunas on agentic AI attack surfaces and the A.G.E.N.T.S. Enterprise Agent Operating Model.",
  canonicalPath: "/securecarolinas2026",
  robots: {
    index: false,
    follow: false,
  },
});

export default function SecureCarolinas2026Page() {
  return (
    <div className="secure-carolinas-2026-page">
      <SecureCarolinas2026App />
    </div>
  );
}
