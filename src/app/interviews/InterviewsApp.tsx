"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

import { interviewContent } from "@/content/interviews";
import { InterviewSlideFrame } from "./components/InterviewSlideFrame";
import { InterviewTocDialog } from "./components/InterviewTocDialog";
import { useInterviewNavigation } from "./hooks/useInterviewNavigation";
import { useInterviewSlides } from "./hooks/useInterviewSlides";
import { usePmPopQuizCategories } from "./hooks/usePmPopQuizCategories";
import { usePresentationInsets } from "./hooks/usePresentationInsets";

export default function InterviewsApp() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
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

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const {
    currentSlide,
    isTocOpen,
    setIsTocOpen,
    nextSlide,
    prevSlide,
    jumpToSlide,
  } = useInterviewNavigation({
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
          <InterviewSlideFrame
            isActive={true}
            brandLogoSrc={content.brandLogo.src}
            brandLogoAlt={content.brandLogo.alt}
          >
            {slides[currentSlide]}
          </InterviewSlideFrame>
        </div>

        <div ref={navRef} className="absolute bottom-4 left-0 z-50 flex w-full items-center justify-between px-4 sm:px-6 md:bottom-8 md:px-12">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all group"
              aria-label={navCopy.previousAriaLabel}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all group"
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
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all"
              aria-label={navCopy.toggleFullscreenAriaLabel}
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <InterviewTocDialog
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
