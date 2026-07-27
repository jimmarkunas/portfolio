"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

import { interviewContent } from "@/content/interviews";
import { PresentationSlideFrame } from "@/components/presentation/PresentationSlideFrame";
import { PresentationTocDialog } from "@/components/presentation/PresentationTocDialog";
import { usePresentationFullscreen } from "@/hooks/usePresentationFullscreen";
import { usePresentationNavigation } from "@/hooks/usePresentationNavigation";
import { useInterviewSlides } from "./hooks/useInterviewSlides";
import { usePmPopQuizCategories } from "./hooks/usePmPopQuizCategories";
import { usePresentationInsets } from "./hooks/usePresentationInsets";

export default function InterviewsApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = usePresentationFullscreen({
    containerRef,
  });
  const content = interviewContent;
  const navCopy = content.navigation;
  const slideContent = content.slides;

  const {
    pmPopQuizCategories,
    revealedPmPopQuizCategories,
    togglePmPopQuizCategoryReveal,
  } = usePmPopQuizCategories(slideContent.services.categories);

  const { slides, slideTitles, slideIdOrder } = useInterviewSlides({
    slideContent,
    pmPopQuizCategories,
    revealedPmPopQuizCategories,
    onTogglePmPopQuizCategoryReveal: togglePmPopQuizCategoryReveal,
  });

  const {
    currentSlide,
    isTocOpen,
    setIsTocOpen,
    nextSlide,
    prevSlide,
    jumpToSlide,
  } = usePresentationNavigation({
    slideCount: slides.length,
    onToggleFullscreen: toggleFullscreen,
  });

  const contentBottomInset = usePresentationInsets({
    containerRef,
    navRef,
    initialInset: 95,
  });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <div
        ref={containerRef}
        className="presentation-container shadow-2xl rounded-lg overflow-hidden border border-finox-slate/20"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-finox-slate/20 z-50">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="absolute inset-x-0 top-0" style={{ bottom: `${contentBottomInset}px` }}>
          <PresentationSlideFrame isActive brandLogoSrc={content.brandLogo.src} brandLogoAlt={content.brandLogo.alt}>
            {slides[currentSlide]}
          </PresentationSlideFrame>
        </div>

        <div ref={navRef} className="absolute bottom-4 left-0 z-50 flex w-full items-center justify-between px-4 sm:px-6 md:bottom-8 md:px-12">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="group rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={navCopy.previousAriaLabel}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="group rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={navCopy.nextAriaLabel}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="rounded px-2 py-1 text-finox-gray font-mono text-sm tracking-widest transition-colors hover:text-white hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={navCopy.openTocAriaLabel}
              aria-haspopup="dialog"
              aria-expanded={isTocOpen}
              aria-controls="interviews-slide-toc"
            >
              {currentSlide + 1} / {slides.length}
            </button>
            <button
              onClick={toggleFullscreen}
              className="rounded-full border border-finox-slate/50 p-3 transition-colors hover:bg-white hover:text-finox-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={navCopy.toggleFullscreenAriaLabel}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <PresentationTocDialog
          dialogId="interviews-slide-toc"
          isOpen={isTocOpen}
          currentSlide={currentSlide}
          slideTitles={slideTitles}
          slideIdOrder={slideIdOrder}
          totalSlides={slides.length}
          navCopy={navCopy}
          onClose={() => setIsTocOpen(false)}
          onJumpToSlide={jumpToSlide}
        />
      </div>
    </div>
  );
}
