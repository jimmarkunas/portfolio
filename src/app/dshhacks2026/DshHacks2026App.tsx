"use client";

import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { dshHacks2026Content } from "@/content/dshhacks2026";

import { useDshHacks2026Slides } from "./hooks/useDshHacks2026Slides";

export default function DshHacks2026App() {
  const content = dshHacks2026Content;
  const { slides, slideTitles, slideIdOrder } = useDshHacks2026Slides({
    content,
  });

  return (
    <PresentationDeck
      dialogId="dshhacks2026-slide-toc"
      slides={slides}
      slideTitles={slideTitles}
      slideIdOrder={slideIdOrder}
      navigation={content.navigation}
      brandLogo={content.brandLogo}
    />
  );
}
