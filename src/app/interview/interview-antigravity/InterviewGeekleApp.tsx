"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  List,
  Maximize,
  Minimize,
  X,
} from "lucide-react";

import { cn } from "./lib/utils";
import { interviewSlides } from "./InterviewPresentationApp";

export default function InterviewGeekleApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [scale, setScale] = useState(1);

  const presentationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        if (width > 0 && height > 0) {
          // Keep the original interview slide canvas behavior.
          setScale(Math.min(width / 1280, height / 720));
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setShowTOC(false);
      }
    };

    if (showTOC) {
      setTimeout(() => {
        window.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("touchstart", handleClickOutside);
      }, 0);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showTOC]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % interviewSlides.length);
    setShowNotes(false);
    setShowTOC(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + interviewSlides.length) % interviewSlides.length);
    setShowNotes(false);
    setShowTOC(false);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowTOC(false);
    setShowNotes(false);
  };

  const toggleFullscreen = useCallback(async () => {
    const target = presentationRef.current;
    if (!target) return;

    try {
      if (!document.fullscreenElement) {
        await target.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Keep controls responsive if the browser denies fullscreen.
    }
  }, []);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    syncFullscreenState();

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "arrowright" || key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (key === "arrowleft") {
        e.preventDefault();
        prevSlide();
      }
      if (key === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
      if (key === "escape" && document.fullscreenElement) {
        e.preventDefault();
        document.exitFullscreen();
      }
      if (key === "n") {
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen]);

  return (
    <div className="h-full w-full bg-black flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div
        ref={presentationRef}
        className={cn(
          "presentation-container relative h-full w-full overflow-hidden border shadow-2xl transition-all duration-300",
          isFullscreen ? "rounded-none border-transparent" : "rounded-lg border-white/20"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-50">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / interviewSlides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div ref={containerRef} className="relative h-full w-full bg-white">
          <div className="scale-container bg-white">
            <div
              className="scale-wrapper"
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {interviewSlides[currentSlide].component()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showNotes && (
            <motion.div
              key="interview-notes-overlay"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-24 left-4 right-4 z-50 w-auto max-h-[55vh] overflow-y-auto bg-black/90 text-white p-6 rounded-2xl shadow-2xl border border-white/20 custom-scrollbar md:bottom-28 md:left-10 md:right-auto md:w-full md:max-h-[60vh] md:max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-[10px] font-bold tracking-[0.2em] text-white/80">Presenter Notes</div>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-xs text-white/60 hover:text-white transition-colors font-medium"
                >
                  Close
                </button>
              </div>
              <ul className="space-y-3">
                {(interviewSlides[currentSlide]?.notes || []).map((note: string, index: number) => (
                  <li key={index} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-6 left-0 w-full px-4 md:px-10 flex justify-between items-center z-50">
          <div className="flex gap-3 md:gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <button
                onClick={() => setShowTOC((prev) => !prev)}
                className={cn(
                  "p-3 rounded-full border transition-all",
                  showTOC
                    ? "bg-white text-black border-white"
                    : "border-white/30 text-white hover:bg-white hover:text-black"
                )}
                aria-label="Table of contents"
              >
                <List className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {showTOC && (
                  <motion.div
                    ref={tocRef}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full right-0 mb-3 w-[min(480px,calc(100vw-2rem))] bg-white border border-black/10 rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col max-h-[60vh]"
                  >
                    <div className="px-4 py-2 flex justify-between items-center border-b border-black/10 mb-2">
                      <span className="text-[10px] font-bold text-black/60 tracking-widest">Table of Contents</span>
                      <button
                        onClick={() => setShowTOC(false)}
                        className="p-1 hover:bg-black/5 rounded-lg text-black/60 hover:text-black transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 overflow-y-auto px-1 custom-scrollbar">
                      {interviewSlides.map((slide: { id: string; title: string }, index: number) => (
                        <button
                          key={slide.id}
                          onClick={() => goToSlide(index)}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group",
                            currentSlide === index
                              ? "bg-black text-white"
                              : "text-black/70 hover:bg-black/5 hover:text-black"
                          )}
                        >
                          <span
                            className={cn(
                              "w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-bold border shrink-0",
                              currentSlide === index
                                ? "bg-white text-black border-white"
                                : "bg-white border-black/10 group-hover:border-black/20"
                            )}
                          >
                            {index + 1}
                          </span>
                          <span className="text-[11px] font-bold truncate leading-tight">{slide.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setShowNotes((prev) => !prev)}
              className={cn(
                "p-3 rounded-full border transition-all",
                showNotes
                  ? "bg-white text-black border-white"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              )}
              aria-label="Presenter notes"
            >
              <FileText className="w-5 h-5" />
            </button>

            <div className="text-white/80 font-mono text-sm tracking-widest px-2">
              {currentSlide + 1} / {interviewSlides.length}
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}