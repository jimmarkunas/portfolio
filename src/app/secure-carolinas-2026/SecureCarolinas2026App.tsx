"use client";

import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { secureCarolinas2026Content } from "@/content/secure-carolinas-2026";
import { useSecureCarolinas2026Slides } from "./hooks/useSecureCarolinas2026Slides";

export default function SecureCarolinas2026App() {
  const content = secureCarolinas2026Content;
  const { slides, slideTitles, slideIdOrder } = useSecureCarolinas2026Slides({ content });

  return (
    <PresentationDeck
      dialogId="secure-carolinas-2026-slide-toc"
      slides={slides}
      slideTitles={slideTitles}
      slideIdOrder={slideIdOrder}
      navigation={content.navigation}
    />
  );
}
