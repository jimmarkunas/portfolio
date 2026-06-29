"use client";

import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { llmDay2026Content } from "@/content/llmday2026";
import { useLlmDay2026Slides } from "./hooks/useLlmDay2026Slides";

export default function LlmDay2026App() {
  const content = llmDay2026Content;

  const { slides, slideTitles, slideIdOrder } = useLlmDay2026Slides({
    content,
  });

  return (
    <PresentationDeck
      dialogId="llmday2026-slide-toc"
      slides={slides}
      slideTitles={slideTitles}
      slideIdOrder={slideIdOrder}
      navigation={content.navigation}
      brandLogo={content.brandLogo}
    />
  );
}
