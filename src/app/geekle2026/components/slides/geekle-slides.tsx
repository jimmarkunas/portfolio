import { motion } from "motion/react";

import type { Geekle2026Content } from "@/content/presentations/geekle2026";

import {
  BuildStepCards,
  NumberedRows,
  SlideHeading,
  WhyCareList,
} from "./geekle-slide-primitives";

type Slides = Geekle2026Content["slides"];

export function SlideHero({ slide }: { slide: Slides["hero"] }) {
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-medium uppercase tracking-[0.2em] text-finox-gray"
      >
        {slide.eyebrow}
      </motion.div>
      <h1 className="h1-display max-w-4xl">
        {slide.title} <span className="text-finox-gray">{slide.highlight}</span> {slide.suffix}
      </h1>
      <div className="space-y-2 pt-8">
        <p className="text-xl font-light tracking-wide">{slide.presenter}</p>
        <p className="text-sm uppercase tracking-widest text-finox-gray">{slide.sponsor}</p>
      </div>
    </div>
  );
}

export function SlideAgenda({ slide }: { slide: Slides["agenda"] }) {
  return (
    <div className="space-y-12">
      <SlideHeading title={slide.title} />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="p-large text-white">{slide.summary}</p>
        </div>
        <div className="space-y-6 border-l border-finox-slate pl-8">
          <p className="text-xs uppercase tracking-widest text-finox-gray">{slide.whyCareLabel}</p>
          <WhyCareList items={slide.whyCareItems} />
        </div>
      </div>
    </div>
  );
}

export function SlideModereGame({ slide }: { slide: Slides["modereGame"] }) {
  return (
    <div className="space-y-12">
      <SlideHeading
        title={slide.title}
        rightSlot={<div className="mb-4 font-mono text-sm text-finox-gray">{slide.caseStudyLabel}</div>}
      />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-6">
          {slide.paragraphs.map((paragraph) => (
            <p key={paragraph} className="p-regular">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-2xl border border-finox-slate/30 bg-finox-slate/20 p-8">
          <p className="mb-4 text-xs uppercase tracking-widest text-finox-gray">{slide.goalLabel}</p>
          <p className="text-xl leading-relaxed">{slide.goalText}</p>
        </div>
      </div>
    </div>
  );
}

export function SlideAudienceContrast({ slide }: { slide: Slides["audienceContrast"] }) {
  return (
    <div className="space-y-12">
      <h2 className="h2-display text-center">
        {slide.titleStart}
        <br />
        <span className="italic text-finox-gray">{slide.titleMiddle}</span>
        <br />
        {slide.titleEnd}
      </h2>
      <div className="flex flex-col items-center gap-6 pt-8 md:flex-row md:justify-center md:gap-8">
        {slide.rings.map((item) => (
          <div
            key={item.id}
            className="flex h-52 w-52 flex-col items-center justify-center space-y-2 rounded-full border border-finox-slate p-6 text-center md:h-64 md:w-64 md:p-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-finox-gray">{item.label}</span>
            <span className="text-lg font-medium md:text-xl">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlideGoal({ slide }: { slide: Slides["goal"] }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="h-px w-24 bg-finox-gray" />
      <h2 className="h1-display">{slide.title}</h2>
      <p className="max-w-2xl text-3xl font-light text-finox-gray">{slide.line}</p>
      <div className="h-px w-24 bg-finox-gray" />
    </div>
  );
}

export function SlideToolsNeeded({ slide }: { slide: Slides["toolsNeeded"] }) {
  return (
    <div className="space-y-8">
      <SlideHeading title={slide.title} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {slide.tools.map((tool) => (
          <div
            key={tool.id}
            className="group rounded-xl border border-finox-slate/30 p-6 transition-colors hover:border-white"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-finox-gray transition-colors group-hover:text-white">
              {tool.cost}
            </p>
            <p className="text-lg font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlidePreSetup({ slide }: { slide: Slides["preSetup"] }) {
  return (
    <div className="space-y-12">
      <SlideHeading title={slide.title} />
      <NumberedRows items={slide.steps.map((step) => step.text)} />
    </div>
  );
}

export function SlideBuildPart1({ slide }: { slide: Slides["buildPart1"] }) {
  return (
    <div className="space-y-12">
      <h2 className="h2-display">
        {slide.titlePrefix} <span className="italic text-finox-gray">{slide.titleHighlight}</span>
      </h2>
      <div className="max-w-3xl space-y-6">
        {slide.steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-6 rounded-2xl bg-white/5 p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-finox-gray text-sm font-mono">
              {index + 1}
            </div>
            <span className="text-2xl font-light">{step.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SlideBuildPart2({ slide }: { slide: Slides["buildPart2"] }) {
  return (
    <div className="space-y-12">
      <h2 className="h2-display">
        {slide.titlePrefix} <span className="italic text-finox-gray">{slide.titleHighlight}</span>
      </h2>
      <div className="space-y-8">
        <p className="p-large text-white">{slide.intro}</p>
        <BuildStepCards items={slide.steps.map((step) => step.text)} />
      </div>
    </div>
  );
}

export function SlideFinalize({ slide }: { slide: Slides["finalize"] }) {
  const firstStep = slide.steps[0];
  const secondStep = slide.steps[1];

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-16">
      <h2 className="h2-display">{slide.title}</h2>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white md:h-32 md:w-32">
            <span className="text-3xl font-mono">{firstStep.number}</span>
          </div>
          <p className="text-center text-base uppercase tracking-widest text-finox-gray md:text-xl">
            {firstStep.label}
          </p>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-px bg-finox-slate md:h-px md:w-24" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white md:h-32 md:w-32">
            <span className="text-3xl font-mono text-finox-dark">{secondStep.number}</span>
          </div>
          <p className="text-center text-base uppercase tracking-widest text-white md:text-xl">
            {secondStep.label}
          </p>
        </div>
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="pt-12 text-xs uppercase tracking-[0.5em] text-finox-gray"
      >
        {slide.completionLabel}
      </motion.div>
    </div>
  );
}
