"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, ArrowRight } from 'lucide-react';
import { presentationSlideMotion } from '@/lib/motion';

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Slide = ({ children, isActive }: SlideProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={presentationSlideMotion.initial}
          animate={presentationSlideMotion.animate}
          exit={presentationSlideMotion.exit}
          transition={presentationSlideMotion.transition}
          className="slide-content h-full w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Geekle2026App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    // Slide 1: Title Slide
    <div key="slide-1" className="flex flex-col items-center text-center space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="uppercase text-finox-gray tracking-[0.2em] text-sm font-medium"
      >
        Panel Discussion
      </motion.div>
      <h1 className="h1-display max-w-4xl">
        Talk your client out of a <span className="text-finox-gray">bad decision</span> with a gamified decision tree
      </h1>
      <div className="space-y-2 pt-8">
        <p className="text-xl font-light tracking-wide">By: Jim Markunas</p>
        <p className="text-finox-gray text-sm tracking-widest uppercase">Sponsored by: Geekle</p>
      </div>
    </div>,

    // Slide 2: What We’ll Cover
    <div key="slide-2" className="space-y-12">
      <h2 className="h2-display">What We’ll Cover in This Talk</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="p-large text-white">
            Use free(ish) Tools to make a gamified, interactive app in under 20 minutes to drive executive decision-making.
          </p>
        </div>
        <div className="space-y-6 border-l border-finox-slate pl-8">
          <p className="uppercase text-xs tracking-widest text-finox-gray">Why the Geekle audience would care:</p>
          <ul className="space-y-4">
            {[
              "It's design-oriented & uses (mostly) free tools",
              "It's fun! It turns hard conversations into a game",
              "It's provable - Modere scaled to $1b using this system"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-finox-gray">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Slide 3: The Modere Game
    <div key="slide-3" className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="h2-display">The Modere Game</h2>
        <div className="text-finox-gray font-mono text-sm mb-4">CASE STUDY</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="p-regular">
            Modere was a technologically complex MLM that wanted to scale from $500m GMV to $1B GMV.
          </p>
          <p className="p-regular">
            The C-Suite was frugal, and the ‘old guard’ didn’t want any technological change at all.
          </p>
        </div>
        <div className="bg-finox-slate/20 p-8 rounded-2xl border border-finox-slate/30">
          <p className="uppercase text-xs tracking-widest text-finox-gray mb-4">The Goal</p>
          <p className="text-xl leading-relaxed">
            Drive key technology decisions to get them to $1B + illustrate financial consequences of not changing.
          </p>
        </div>
      </div>
    </div>,

    // Slide 4: Engineers vs Executives
    <div key="slide-4" className="space-y-12">
      <h2 className="h2-display text-center">Engineers, Designers & Artists <br/><span className="text-finox-gray italic">vs.</span><br/> Managers & Executives</h2>
      <div className="flex justify-center gap-8 pt-8">
        {[
          { label: "Attention", value: "Shorter Spans" },
          { label: "Focus", value: "ROI & Value Prop" },
          { label: "Stance", value: "Risk-Averse" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center p-8 border border-finox-slate rounded-full w-64 h-64 justify-center text-center space-y-2">
            <span className="uppercase text-[10px] tracking-[0.3em] text-finox-gray">{item.label}</span>
            <span className="text-xl font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>,

    // Slide 5: Goal
    <div key="slide-5" className="flex flex-col items-center justify-center text-center space-y-8">
      <div className="w-24 h-px bg-finox-gray"></div>
      <h2 className="h1-display">Goal</h2>
      <p className="text-3xl font-light text-finox-gray max-w-2xl">
        Drive a key decision using visual gamification of data
      </p>
      <div className="w-24 h-px bg-finox-gray"></div>
    </div>,

    // Slide 6: Tools Needed
    <div key="slide-6" className="space-y-8">
      <h2 className="h2-display">Tools Needed</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: "Google Account", cost: "Free" },
          { name: "Github", cost: "Free" },
          { name: "Box account", cost: "Free" },
          { name: "Notion", cost: "Free-ish" },
          { name: "Design System", cost: "Free(ish)" },
          { name: "Code Editor (AI)", cost: "Free(ish)" },
          { name: "Google AI Design Studio", cost: "Free" },
          { name: "ChatGPT", cost: "Free(ish)" },
          { name: "Web Hosting", cost: "Not Free" }
        ].map((tool, i) => (
          <div key={i} className="p-6 border border-finox-slate/30 rounded-xl hover:border-white transition-colors group">
            <p className="text-finox-gray text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors">{tool.cost}</p>
            <p className="text-lg font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 7: Pre-Setup
    <div key="slide-7" className="space-y-12">
      <h2 className="h2-display">Pre-Setup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {[
          "Hostinger (or comparable hosting)",
          "Github Pages Project & Code Repo",
          "VS Code with CI/CD Pipeline",
          "Preferred coding agent (Co-Pilot, Claude Code, etc)",
          "Chat GPT Interview",
          "Notion - Write a case study"
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-6 border-b border-finox-slate/20 pb-4">
            <span className="text-finox-gray font-mono text-sm">0{i + 1}</span>
            <span className="text-xl">{step}</span>
          </div>
        ))}
      </div>
    </div>,

    // Slide 8: How to Build Part 1
    <div key="slide-8" className="space-y-12">
      <h2 className="h2-display">How to Build <span className="text-finox-gray italic">Part 1</span></h2>
      <div className="space-y-6 max-w-3xl">
        {[
          "Upload Design System",
          "Upload case study",
          "Ask for the app build",
          "Tweak build",
          "Download codebase"
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-full border border-finox-gray flex items-center justify-center text-sm font-mono">
              {i + 1}
            </div>
            <span className="text-2xl font-light">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>,

    // Slide 9: How to Build Part 2
    <div key="slide-9" className="space-y-12">
      <h2 className="h2-display">How to Build <span className="text-finox-gray italic">Part 2</span></h2>
      <div className="space-y-8">
        <p className="p-large text-white">ChatGPT refinement for streamlined app:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Prompt it to streamline the code for a light weight react/tailwind JSX app",
            "Make UI tweaks",
            "Export for VS code + Codex Prompt",
            "Make .zip file"
          ].map((step, i) => (
            <div key={i} className="p-8 border border-finox-slate rounded-3xl flex flex-col justify-between">
              <span className="text-finox-gray text-xs uppercase tracking-widest mb-4">Step {i + 1}</span>
              <p className="text-xl leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Slide 10: Finalize the App
    <div key="slide-10" className="flex flex-col items-center justify-center h-full space-y-16">
      <h2 className="h2-display">Finalize the App</h2>
      <div className="flex gap-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-3xl font-mono">01</span>
          </div>
          <p className="text-xl uppercase tracking-widest text-finox-gray">Code or UI tweaks</p>
        </div>
        <div className="flex items-center">
          <div className="w-24 h-px bg-finox-slate"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
            <span className="text-3xl font-mono text-finox-dark">02</span>
          </div>
          <p className="text-xl uppercase tracking-widest text-white">Github Commit</p>
        </div>
      </div>
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="pt-12 text-finox-gray tracking-[0.5em] uppercase text-xs"
      >
        Presentation Complete
      </motion.div>
    </div>
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

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
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <div 
        ref={containerRef}
        className="presentation-container shadow-2xl rounded-lg overflow-hidden border border-finox-slate/20"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-finox-slate/20 z-50">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Slides */}
        <div className="relative flex-1">
          <Slide isActive={true}>
            {slides[currentSlide]}
          </Slide>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 w-full px-12 flex justify-between items-center z-50">
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-finox-gray font-mono text-sm tracking-widest">
              {currentSlide + 1} / {slides.length}
            </div>
            <button 
              onClick={toggleFullscreen}
              className="p-3 rounded-full border border-finox-slate/50 hover:bg-white hover:text-finox-dark transition-all"
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