"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, ArrowRight, Shield, Cpu, Target, Users, Zap, Globe, Mail, Linkedin } from 'lucide-react';
import { interviewContent } from '@/content/interviewContent';
import Slide5HybridDiagram from './components/slides/Slide5HybridDiagram';
import Slide6JiraDiagram from './components/slides/Slide6JiraDiagram';
import Slide7RiskLandscape from './components/slides/Slide7RiskLandscape';
import Slide8StatusReport from './components/slides/Slide8StatusReport';
import Slide8ComposableStack from './components/slides/Slide8ComposableStack';

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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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

const whyJimIconMap = {
  Shield,
  Cpu,
  Target,
  Users,
  Zap,
  Globe,
} as const;

export default function InterviewsApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [contentBottomInset, setContentBottomInset] = useState(95);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const content = interviewContent;
  const navCopy = content.navigation;
  const slideContent = content.slides;
  const slideIdOrder = [
    slideContent.who.id,
    slideContent.outcomes.id,
    slideContent.services.id,
    slideContent.greatestPm.id,
    slideContent.hybridAgile.id,
    slideContent.jiraTickets.id,
    slideContent.riskLandscape.id,
    slideContent.statusReport.id,
    slideContent.cover.id,
    slideContent.composableStack.id,
    slideContent.modere.id,
    slideContent.engineers.id,
    slideContent.goal.id,
    slideContent.tools.id,
    slideContent.preSetup.id,
    slideContent.buildPart1.id,
    slideContent.buildPart2.id,
    slideContent.finalize.id,
    slideContent.whyJim.id,
    slideContent.rescuePlan.id,
    slideContent.thankYou.id,
  ];

  const slideTitles = content.slideTitles;

  const slides = [
    // Slide 1: Who is Jim Markunas?
    <div key={slideContent.who.id} className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h2 className="h2-display">{slideContent.who.title}</h2>
          <p className="text-finox-gray text-xl font-light">
            {slideContent.who.subtitle}
          </p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </motion.div>

      <div className="mt-12 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex items-center"
        >
          <div className="w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.18 }}
              className="relative"
            >
              <div className="h-px w-full bg-finox-slate/30"></div>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222222] px-4 text-[10px] uppercase tracking-[0.3em] text-finox-gray">
                {slideContent.who.companies.label}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.24 }}
              className="flex h-24 items-center justify-between gap-8 px-4"
            >
              {slideContent.who.companies.logos.map((logo, i) => (
                <motion.img
                  key={logo.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut", delay: 0.3 + (i * 0.04) }}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[220px] object-contain"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 pt-8">
          {slideContent.who.stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-white/5 border border-white/10 px-8 py-10 min-h-[220px] rounded-3xl flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl font-bold tracking-tight">{stat.label}</span>
                <span className="text-finox-gray text-xl uppercase tracking-widest leading-relaxed">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>,

    // Slide 2: Enterprise Outcomes
    <div key={slideContent.outcomes.id} className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h2 className="h2-display">{slideContent.outcomes.title}</h2>
          <p className="text-finox-gray text-xl font-light">
            {slideContent.outcomes.subtitle}
          </p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </motion.div>

      <div className="mt-12 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex items-center"
        >
          <div className="w-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.18 }}
              className="relative"
            >
              <div className="h-px w-full bg-finox-slate/30"></div>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222222] px-4 text-[10px] uppercase tracking-[0.3em] text-finox-gray">
                {slideContent.outcomes.projects.label}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.24 }}
                className="flex h-24 items-center justify-between gap-8 px-4"
            >
              {slideContent.outcomes.projects.logos.map((logo, i) => (
                <motion.img
                  key={logo.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut", delay: 0.3 + (i * 0.04) }}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[220px] object-contain"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-6 pt-4">
          {slideContent.outcomes.stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="bg-white/5 border border-white/10 px-8 py-10 min-h-[220px] rounded-3xl flex flex-col items-center justify-center text-center space-y-2 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl font-bold tracking-tight">{stat.label}</span>
                <span className="text-finox-gray text-xl uppercase tracking-widest leading-relaxed">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>,

    // Slide 3: What Can I Do For You?
    <div key={slideContent.services.id} className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h2 className="h2-display">{slideContent.services.title}</h2>
          <p className="text-finox-gray text-xl font-light">
            {slideContent.services.subtitle}
          </p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="mt-12 flex-1 flex items-stretch"
      >
        <div className="grid grid-cols-2 gap-6 w-full h-full auto-rows-fr">
          {slideContent.services.categories.map((category, i) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="h-full bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6"
            >
              <div className="flex items-center gap-4">
                {category.percent && (
                  <div className="bg-finox-slate text-white text-sm font-bold px-3 py-2 rounded">
                    {category.percent}
                  </div>
                )}
                <h3 className="text-4xl font-medium">{category.title}</h3>
              </div>
              <ul className="space-y-3 list-disc pl-7 marker:text-[#447ACB]">
                {category.items.map((item) => (
                  <li key={item.id} className="text-finox-gray text-xl font-light leading-tight">
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>,

    // Slide 4: Am I Really the Greatest PM Ever?
    <div key={slideContent.greatestPm.id} className="h-full flex flex-col">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">{slideContent.greatestPm.title}</h2>
          <p className="text-finox-gray text-xl font-light">
            {slideContent.greatestPm.subtitle}
          </p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-8 grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Left: PMP Score Card */}
        <div className="col-span-5 h-full min-h-0 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-finox-slate/20 rounded-lg">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <ChevronRight className="w-6 h-6 text-white rotate-[-90deg]" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-medium">{slideContent.greatestPm.pmpScoreCardTitle}</h3>
          </div>
          <div className="flex-1 min-h-0 bg-white/10 rounded-2xl overflow-hidden border border-white/5 relative group flex items-start justify-center">
            <img 
              src={slideContent.greatestPm.pmpImage.src}
              alt={slideContent.greatestPm.pmpImage.alt}
              className="h-full w-auto max-w-full object-contain object-top opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-mono tracking-widest uppercase">{slideContent.greatestPm.pmpOverlayText}</span>
            </div>
          </div>
        </div>

        {/* Right: Metrics & Awards */}
        <div className="col-span-7 h-full min-h-0 flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex-[0_0_50%] min-h-0 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-finox-gray">{slideContent.greatestPm.metricsTitle}</span>
            </div>
            <div className="flex-1 min-h-0 bg-white/10 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
              <img 
                src={slideContent.greatestPm.metricsImage.src}
                alt={slideContent.greatestPm.metricsImage.alt}
                className="w-full h-full object-contain object-center opacity-70"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 flex-1 min-h-0">
            {slideContent.greatestPm.awards.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="h-full flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl border border-finox-slate/30 flex items-center justify-center text-sm font-mono text-finox-gray">
                  {item.id}
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <p className="text-finox-gray text-sm leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Slide 5: Enterprise Agile: The Hybrid Reality
    <Slide5HybridDiagram key={slideContent.hybridAgile.id} slide={slideContent.hybridAgile} />,

    // Slide 6: JIRA Tickets Hierarchy
    <Slide6JiraDiagram key={slideContent.jiraTickets.id} slide={slideContent.jiraTickets} />,

    // Slide 7: Risk Register + Matrix
    <Slide7RiskLandscape key={slideContent.riskLandscape.id} slide={slideContent.riskLandscape} />,

    // Slide 8: The 'Perfect' Status Report
    <Slide8StatusReport
      key={slideContent.statusReport.id}
      slide={slideContent.statusReport}
    />,

    // Slide 9: What We’ll Cover
    <div key={slideContent.cover.id} className="space-y-12">
      <h2 className="h2-display">{slideContent.cover.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="p-large text-white">
            {slideContent.cover.description}
          </p>
        </div>
        <div className="space-y-6 border-l border-finox-slate pl-8">
          <p className="uppercase text-xs tracking-widest text-finox-gray">{slideContent.cover.reasonLabel}</p>
          <ul className="space-y-4">
            {slideContent.cover.reasons.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-finox-gray">
                <ArrowRight className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,

    // Slide 10: The Composable Stack
    <Slide8ComposableStack
      key={slideContent.composableStack.id}
      slide={slideContent.composableStack}
    />,

    // Slide 11: The Modere Game
    <div key={slideContent.modere.id} className="space-y-12">
      <div className="flex justify-between items-end">
        <h2 className="h2-display">{slideContent.modere.title}</h2>
        <div className="text-finox-gray font-mono text-sm mb-4">{slideContent.modere.caseStudyLabel}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {slideContent.modere.paragraphs.map((paragraph) => (
            <p key={paragraph.id} className="p-regular">
              {paragraph.text}
            </p>
          ))}
        </div>
        <div className="bg-finox-slate/20 p-8 rounded-2xl border border-finox-slate/30">
          <p className="uppercase text-xs tracking-widest text-finox-gray mb-4">{slideContent.modere.goalLabel}</p>
          <p className="text-xl leading-relaxed">
            {slideContent.modere.goalText}
          </p>
        </div>
      </div>
    </div>,

    // Slide 12: Engineers vs Executives
    <div key={slideContent.engineers.id} className="space-y-12">
      <h2 className="h2-display text-center">{slideContent.engineers.titleTop} <br/><span className="text-finox-gray italic">{slideContent.engineers.titleMiddle}</span><br/> {slideContent.engineers.titleBottom}</h2>
      <div className="flex justify-center gap-8 pt-8">
        {slideContent.engineers.circles.map((item) => (
          <div key={item.id} className="flex flex-col items-center p-8 border border-finox-slate rounded-full w-64 h-64 justify-center text-center space-y-2">
            <span className="uppercase text-[10px] tracking-[0.3em] text-finox-gray">{item.label}</span>
            <span className="text-xl font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>,

    // Slide 13: Goal
    <div key={slideContent.goal.id} className="flex flex-col items-center justify-center text-center space-y-8">
      <div className="w-24 h-px bg-finox-gray"></div>
      <h2 className="h1-display">{slideContent.goal.title}</h2>
      <p className="text-3xl font-light text-finox-gray max-w-2xl">
        {slideContent.goal.description}
      </p>
      <div className="w-24 h-px bg-finox-gray"></div>
    </div>,

    // Slide 14: Tools Needed
    <div key={slideContent.tools.id} className="space-y-8">
      <h2 className="h2-display">{slideContent.tools.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {slideContent.tools.items.map((tool) => (
          <div key={tool.id} className="p-6 border border-finox-slate/30 rounded-xl hover:border-white transition-colors group">
            <p className="text-finox-gray text-xs uppercase tracking-widest mb-2 group-hover:text-white transition-colors">{tool.cost}</p>
            <p className="text-lg font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>,

    // Slide 15: Pre-Setup
    <div key={slideContent.preSetup.id} className="space-y-12">
      <h2 className="h2-display">{slideContent.preSetup.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {slideContent.preSetup.steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-6 border-b border-finox-slate/20 pb-4">
            <span className="text-finox-gray font-mono text-sm">0{i + 1}</span>
            <span className="text-xl">{step.text}</span>
          </div>
        ))}
      </div>
    </div>,

    // Slide 16: How to Build Part 1
    <div key={slideContent.buildPart1.id} className="space-y-12">
      <h2 className="h2-display">{slideContent.buildPart1.titlePrefix}<span className="text-finox-gray italic">{slideContent.buildPart1.titleHighlight}</span></h2>
      <div className="space-y-6 max-w-3xl">
        {slideContent.buildPart1.steps.map((step, i) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-full border border-finox-gray flex items-center justify-center text-sm font-mono">
              {i + 1}
            </div>
            <span className="text-2xl font-light">{step.text}</span>
          </motion.div>
        ))}
      </div>
    </div>,

    // Slide 17: How to Build Part 2
    <div key={slideContent.buildPart2.id} className="space-y-12">
      <h2 className="h2-display">{slideContent.buildPart2.titlePrefix}<span className="text-finox-gray italic">{slideContent.buildPart2.titleHighlight}</span></h2>
      <div className="space-y-8">
        <p className="p-large text-white">{slideContent.buildPart2.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {slideContent.buildPart2.steps.map((step, i) => (
            <div key={step.id} className="p-8 border border-finox-slate rounded-3xl flex flex-col justify-between">
              <span className="text-finox-gray text-xs uppercase tracking-widest mb-4">{slideContent.buildPart2.stepPrefix} {i + 1}</span>
              <p className="text-xl leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Slide 18: Finalize the App
    <div key={slideContent.finalize.id} className="flex flex-col items-center justify-center h-full space-y-16">
      <h2 className="h2-display">{slideContent.finalize.title}</h2>
      <div className="flex gap-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-3xl font-mono">{slideContent.finalize.firstStepNumber}</span>
          </div>
          <p className="text-xl uppercase tracking-widest text-finox-gray">{slideContent.finalize.firstStepLabel}</p>
        </div>
        <div className="flex items-center">
          <div className="w-24 h-px bg-finox-slate"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
            <span className="text-3xl font-mono text-finox-dark">{slideContent.finalize.secondStepNumber}</span>
          </div>
          <p className="text-xl uppercase tracking-widest text-white">{slideContent.finalize.secondStepLabel}</p>
        </div>
      </div>
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="pt-12 text-finox-gray tracking-[0.5em] uppercase text-xs"
      >
        {slideContent.finalize.completionText}
      </motion.div>
    </div>,

    // Slide 19: Why Jim Markunas?
    <div key={slideContent.whyJim.id} className="flex h-full min-h-0 flex-col gap-8">
      <div className="shrink-0 space-y-2">
        <h2 className="h2-display">{slideContent.whyJim.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slideContent.whyJim.subtitle}</p>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-6">
        {slideContent.whyJim.points.map((item, i) => {
          const Icon = whyJimIconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="flex h-full flex-col rounded-3xl border border-finox-slate/30 bg-white/5 p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#447ACB]/10">
                <Icon className="h-7 w-7 text-[#447ACB]" />
              </div>
              <h4 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{item.title}</h4>
              <p className="text-finox-gray text-lg leading-relaxed md:text-xl">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>,

    // Slide 20: The 30-Day Rescue Plan
    <div key={slideContent.rescuePlan.id} className="flex h-full min-h-0 flex-col gap-10">
      <div className="shrink-0 space-y-2">
        <h2 className="h2-display">{slideContent.rescuePlan.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slideContent.rescuePlan.subtitle}</p>
      </div>

      <div className="relative shrink-0 px-2 pt-6">
        <div className="pointer-events-none absolute left-0 right-0 top-[2.25rem] h-px bg-white/15" />
        <div className="relative grid grid-cols-4 gap-6">
          {slideContent.rescuePlan.carouselPhases.map((phase, i) => (
            <div key={phase.id} className="flex flex-col items-center px-2 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#447ACB] text-2xl font-semibold text-white shadow-[0_8px_24px_rgba(68,122,203,0.35)]">
                {i + 1}
              </div>
              <h4 className="mb-2 text-4xl font-semibold leading-none text-white">{phase.title}</h4>
              <p className="max-w-[14rem] text-lg leading-snug text-finox-gray">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-8">
        {slideContent.rescuePlan.weeks.map((week) => (
          <div key={week.id} className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.04] p-8">
            <h4 className="mb-5 text-5xl font-semibold tracking-tight text-white">{week.title}</h4>
            <ul className="space-y-4">
              {week.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-finox-gray text-2xl leading-snug">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#447ACB]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>,

    // Slide 21: Thank You
    <div key={slideContent.thankYou.id} className="flex h-full flex-col items-center justify-center text-center space-y-12">
      <div className="space-y-2">
        <h2 className="h2-display">{slideContent.thankYou.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slideContent.thankYou.subtitle}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-5xl font-semibold tracking-tight">{slideContent.thankYou.name}</h3>
        <p className="text-xl font-semibold text-[#447ACB]">{slideContent.thankYou.role}</p>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-3 rounded-full border border-finox-slate/30 bg-white/5 px-6 py-3">
          <Mail className="h-5 w-5 text-[#447ACB]" />
          <span className="text-sm font-semibold">{slideContent.thankYou.email}</span>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-finox-slate/30 bg-white/5 px-6 py-3">
          <Linkedin className="h-5 w-5 text-[#447ACB]" />
          <span className="text-sm font-semibold">{slideContent.thankYou.linkedin}</span>
        </div>
      </div>

      <div className="pt-4">
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-finox-gray">{slideContent.thankYou.readyText}</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-white" />
        </motion.div>
      </div>
    </div>
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

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
      if (e.key === 'Escape' && isTocOpen) {
        setIsTocOpen(false);
        return;
      }

      if (isTocOpen) return;

      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateContentInset);
      return () => window.removeEventListener('resize', updateContentInset);
    }

    const observer = new ResizeObserver(updateContentInset);
    if (containerRef.current) observer.observe(containerRef.current);
    if (navRef.current) observer.observe(navRef.current);
    window.addEventListener('resize', updateContentInset);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateContentInset);
    };
  }, []);

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
        <div className="absolute inset-x-0 top-0" style={{ bottom: `${contentBottomInset}px` }}>
          <Slide isActive={true}>
            {slides[currentSlide]}
          </Slide>
        </div>

        {/* Navigation Controls */}
        <div ref={navRef} className="absolute bottom-8 left-0 w-full px-12 flex justify-between items-center z-50">
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
                                ? 'border-white/40 bg-white/10 text-white'
                                : 'border-finox-slate/30 text-finox-gray hover:border-white/40 hover:bg-white/5 hover:text-white'
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
