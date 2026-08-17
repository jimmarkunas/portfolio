"use client";
import { usaiiPresentationContent } from "@/content/usaii";
import { PresentationDeck } from "@/components/presentation/PresentationDeck";
import { useUsaiiSlides } from "./hooks/useUsaiiSlides";

export default function USAIIPresentationApp() {
  const content = usaiiPresentationContent;
  const { slides, slideTitles, slideIdOrder } = useUsaiiSlides({ content });
  return <PresentationDeck dialogId="usaii-slide-toc" slides={slides} slideTitles={slideTitles} slideIdOrder={slideIdOrder} navigation={content.navigation} reserveNavigationInset={false} />;
}
