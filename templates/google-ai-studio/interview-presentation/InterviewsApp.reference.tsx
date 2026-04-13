// Reference copy derived from src/app/interviews/InterviewsApp.tsx
// Use this as context for Google AI Studio when generating new presentations.

"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

import { interviewContent } from "@/content/interviews";
import { presentationSlideMotion } from "@/lib/motion";

import Slide5HybridDiagram from "./components/slides/Slide5HybridDiagram";
import Slide6JiraDiagram from "./components/slides/Slide6JiraDiagram";
import Slide7RiskLandscape from "./components/slides/Slide7RiskLandscape";
import Slide8StatusReport from "./components/slides/Slide8StatusReport";
import Slide8ComposableStack from "./components/slides/Slide8ComposableStack";
import SlideGreatestPm from "./components/slides/SlideGreatestPm";
import SlideOutcomes from "./components/slides/SlideOutcomes";
import SlidePmPopQuiz from "./components/slides/SlidePmPopQuiz";
import SlideRescuePlan from "./components/slides/SlideRescuePlan";
import SlideServices from "./components/slides/SlideServices";
import SlideThankYou from "./components/slides/SlideThankYou";
import SlideWho from "./components/slides/SlideWho";
import SlideWhyJim from "./components/slides/SlideWhyJim";
import {
  buildInterviewSlideRegistry,
  PM_POP_QUIZ_SLIDE_ID,
} from "./interviewSlideRegistry";

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Slide = ({ children, isActive }: SlideProps) => {
  const brandLogo = interviewContent.brandLogo;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={presentationSlideMotion.initial}
          animate={presentationSlideMotion.animate}
          exit={presentationSlideMotion.exit}
          transition={presentationSlideMotion.transition}
          className="slide-content relative h-full w-full"
        >
          <img
            src={brandLogo.src}
            alt={brandLogo.alt}
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-16 h-[65px] w-[65px]"
          />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function InterviewsApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [revealedPmPopQuizCategories, setRevealedPmPopQuizCategories] = useState<string[]>([]);
  const [contentBottomInset, setContentBottomInset] = useState(95);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const content = interviewContent;
  const navCopy = content.navigation;
  const slideContent = content.slides;
  const slideRegistry = useMemo(() => buildInterviewSlideRegistry(slideContent), [slideContent]);
  const slideIdOrder = slideRegistry.map((slide) => slide.id);
  const slideTitles = slideRegistry.map((slide) => slide.title);

  const pmPopQuizCategories = useMemo(() => {
    const categories = [...slideContent.services.categories];

    for (let i = categories.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [categories[i], categories[j]] = [categories[j], categories[i]];
    }

    return categories;
  }, [slideContent.services.categories]);

  const togglePmPopQuizCategoryReveal = useCallback((categoryId: string) => {
    setRevealedPmPopQuizCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      }

      return [...prev, categoryId];
    });
  }, []);

  const slideElements = [
    <SlideWho key={slideContent.who.id} slide={slideContent.who} />,
    <SlideOutcomes key={slideContent.outcomes.id} slide={slideContent.outcomes} />,
    <SlideServices key={slideContent.services.id} slide={slideContent.services} />,
    <SlideGreatestPm key={slideContent.greatestPm.id} slide={slideContent.greatestPm} />,
    <Slide5HybridDiagram key={slideContent.hybridAgile.id} slide={slideContent.hybridAgile} />,
    <Slide6JiraDiagram key={slideContent.jiraTickets.id} slide={slideContent.jiraTickets} />,
    <Slide7RiskLandscape key={slideContent.riskLandscape.id} slide={slideContent.riskLandscape} />,
    <Slide8StatusReport key={slideContent.statusReport.id} slide={slideContent.statusReport} />,
    <Slide8ComposableStack key={slideContent.composableStack.id} slide={slideContent.composableStack} />,
    <SlideWhyJim key={slideContent.whyJim.id} slide={slideContent.whyJim} />,
    <SlideRescuePlan key={slideContent.rescuePlan.id} slide={slideContent.rescuePlan} />,
    <SlideThankYou key={slideContent.thankYou.id} slide={slideContent.thankYou} />,
    <SlidePmPopQuiz
      key={PM_POP_QUIZ_SLIDE_ID}
      categories={pmPopQuizCategories}
      revealedCategoryIds={revealedPmPopQuizCategories}
      onToggleCategoryReveal={togglePmPopQuizCategoryReveal}
    />,
  ];

  const slideElementsById = slideElements.reduce<Record<string, React.ReactNode>>((acc, slide) => {
    if (!React.isValidElement(slide) || slide.key === null) {
      return acc;
    }

    acc[String(slide.key)] = slide;
    return acc;
  }, {});

  const slides = slideRegistry.map((slide) => {
    const element = slideElementsById[slide.id];

    if (!element) {
      throw new Error(`Missing slide renderer for slide id "${slide.id}"`);
    }

    return element;
  });

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide < slides.length) return;
    setCurrentSlide(Math.max(0, slides.length - 1));
  }, [currentSlide, slides.length]);

  const jumpToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsTocOpen(false);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTocOpen) {
        setIsTocOpen(false);
        return;
      }

      if (isTocOpen) return;

      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "f") toggleFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTocOpen, nextSlide, prevSlide]);

  useEffect(() => {
    const updateContentInset = () => {
      const containerEl = containerRef.current;
      const navEl = navRef.current;
      if (!containerEl || !navEl) return;

      const containerRect = containerEl.getBoundingClientRect();
      const navRect = navEl.getBoundingClientRect();
      const navTop = navRect.top - containerRect.top;
      const nextInset = Math.max(0, containerRect.height - navTop + 15);

      setContentBottomInset((currentInset) => {
        if (Math.abs(currentInset - nextInset) < 0.5) return currentInset;
        return nextInset;
      });
    };

    updateContentInset();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateContentInset);
      return () => window.removeEventListener("resize", updateContentInset);
    }

    const observer = new ResizeObserver(updateContentInset);
    if (containerRef.current) observer.observe(containerRef.current);
    if (navRef.current) observer.observe(navRef.current);
    window.addEventListener("resize", updateContentInset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateContentInset);
    };
  }, []);

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
          <Slide isActive={true}>{slides[currentSlide]}</Slide>
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

        <AnimatePresence>
          {isTocOpen && (
            <motion.div
              className="absolute inset-0 z-[60] flex items-center justify-center bg-black/75 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTocOpen(false)}
            >
              <motion.div
                id="interviews-slide-toc"
                role="dialog"
                aria-modal="true"
                aria-label={navCopy.tocDialogAriaLabel}
                className="w-full max-w-3xl max-h-[82vh] overflow-hidden rounded-2xl border border-finox-slate/50 bg-[#222222] shadow-2xl"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-finox-slate/30 px-6 py-4">
                  <h3 className="text-lg font-medium">{navCopy.tocTitle}</h3>
                  <button
                    type="button"
                    onClick={() => setIsTocOpen(false)}
                    className="rounded border border-finox-slate/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-finox-gray transition-colors hover:border-white/40 hover:text-white"
                  >
                    {navCopy.closeButtonLabel}
                  </button>
                </div>

                <div className="max-h-[70vh] overflow-y-auto px-3 py-3">
                  <ul className="space-y-2">
                    {slideTitles.map((title, index) => {
                      const isActive = currentSlide === index;

                      return (
                        <li key={slideIdOrder[index]}>
                          <button
                            type="button"
                            onClick={() => jumpToSlide(index)}
                            className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                              isActive
                                ? "border-white/40 bg-white/10 text-white"
                                : "border-finox-slate/30 text-finox-gray hover:border-white/40 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span className="w-16 shrink-0 font-mono text-xs uppercase tracking-[0.15em]">
                              {index + 1} / {slides.length}
                            </span>
                            <span className="text-base font-light leading-tight">{title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
