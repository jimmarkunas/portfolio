import type { Metadata } from "next";

import USAIIPresentationApp from "./USAIIPresentationApp";

export const metadata: Metadata = {
  title: "USAII AI Expert Talks | Jim Markunas",
  description: "How to Turn AI Agents Into Governed Digital Products — Enterprise Agent Operating Model.",
};

export default function USAIIPage() {
  return (
    <main className="bg-black text-white">
      <div className="interviews-page">
        <USAIIPresentationApp />
      </div>
    </main>
  );
}
