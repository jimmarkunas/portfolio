"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { usePresentationFullscreen } from "@/hooks/usePresentationFullscreen";
import { usePresentationNavigation } from "@/hooks/usePresentationNavigation";
import { PresentationTocDialog } from "./PresentationTocDialog";
import { PresentationCanvasOverlayProvider } from "./PresentationCanvas";
import { PresentationFooter, PresentationHeader, PresentationTitleBlock } from "./PresentationChrome";
import { PresentationDecorationRecipesProvider, type DecorativeRecipeMap } from "./templates/DecorativeLayer";
import type { PresentationSlideSpec, PresentationSpec } from "./presentationTypes";
import type { PresentationNavigationCopy } from "@/lib/presentation";

export type PresentationRuntimeContextValue = { spec: PresentationSpec; currentSlide: number };
const RuntimeContext = createContext<PresentationRuntimeContextValue | null>(null);
export function usePresentationRuntime() {
  const value = useContext(RuntimeContext);
  if (!value) throw new Error("usePresentationRuntime must be used inside PresentationRuntime");
  return value;
}

export type PresentationRuntimeProps = {
  spec: PresentationSpec;
  navigation: PresentationNavigationCopy;
  brandAsset: string;
  tocDialogId?: string;
  renderSlide: (slide: PresentationSlideSpec, index: number) => ReactNode;
  decorationRecipes: DecorativeRecipeMap;
};

/** Shared PBDS presentation mechanics. Decks supply data, chrome copy, and registered renderers. */
export function PresentationRuntime({ spec, navigation, brandAsset, tocDialogId, renderSlide, decorationRecipes }: PresentationRuntimeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = usePresentationFullscreen({ containerRef });
  const { currentSlide, isTocOpen, setIsTocOpen, nextSlide, prevSlide, jumpToSlide } = usePresentationNavigation({ slideCount: spec.slides.length, onToggleFullscreen: toggleFullscreen });
  const reduced = useReducedMotion();
  const current = spec.slides[currentSlide];
  const overlay = <PresentationTitleBlock slide={currentSlide + 1} config={current.title} />;
  return <RuntimeContext.Provider value={{ spec, currentSlide }}>
    <PresentationDecorationRecipesProvider recipes={decorationRecipes}>
      <main ref={containerRef} className="pdma-presentation">
        <PresentationCanvasOverlayProvider overlay={overlay}>
          <div className="pdma-stage"><AnimatePresence mode="wait" initial={false}><motion.div key={currentSlide} className="pdma-slide-layer" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : 0.45, ease: "easeOut" }}>{renderSlide(current, currentSlide)}</motion.div></AnimatePresence></div>
        </PresentationCanvasOverlayProvider>
        <PresentationHeader brandLabel={spec.metadata.brandLabel} current={currentSlide} total={spec.slides.length} labels={current.headerLabels} />
        <PresentationFooter current={currentSlide} total={spec.slides.length} footer={current.footerLabel} brandAsset={brandAsset} navigation={navigation} onPrev={prevSlide} onNext={nextSlide} onToc={() => setIsTocOpen(true)} onFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />
        <PresentationTocDialog dialogId={tocDialogId ?? `${spec.id}-slide-toc`} isOpen={isTocOpen} currentSlide={currentSlide} slideTitles={spec.slides.map(({ tocTitle }) => tocTitle)} slideIdOrder={spec.slides.map(({ id }) => id)} totalSlides={spec.slides.length} navCopy={navigation} onClose={() => setIsTocOpen(false)} onJumpToSlide={jumpToSlide} />
      </main>
    </PresentationDecorationRecipesProvider>
  </RuntimeContext.Provider>;
}
