import type { Metadata } from "next";
import dynamic from "next/dynamic";

const USAIIPresentationApp = dynamic(() => import("./USAIIPresentationApp"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "USAII AI Expert Talks | Jim Markunas",
  description: "How to Turn AI Agents Into Governed Digital Products — Enterprise Agent Operating Model.",
  robots: { index: false, follow: false },
};

export default function USAIIPage() {
  return <div className="usaii-page"><USAIIPresentationApp /></div>;
}
