import { Check, X } from "lucide-react";
import { motion } from "motion/react";

import type { DshHacks2026Content } from "@/content/dshhacks2026";

import {
  DotGrid,
  HighlightedTitle,
  InsightBullets,
  LegendRow,
  SequenceStages,
  SlideHeader,
} from "./dshhacks-slide-primitives";

type Slides = DshHacks2026Content["slides"];

export function SlideIdeasPlural({ slide }: { slide: Slides["ideasPlural"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-blue-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-start gap-16 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-5">
          <InsightBullets items={slide.bullets} toneClass="bg-blue-400" />
        </div>

        <div className="relative flex min-h-0 self-stretch flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 pt-12 lg:col-span-7">
          <div className="absolute left-6 top-4 text-xs font-mono font-bold uppercase tracking-widest text-finox-gray">
            The Hypothesis Tree Diagram
          </div>

          <div className="relative flex flex-1 flex-col justify-between">
            <div className="mx-auto w-full max-w-[360px]">
              <div className="rounded-[24px] border border-blue-400/25 bg-blue-500/8 px-8 py-4 text-center shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-400/80">
                  {slide.rootLabel}
                </div>
                <div className="text-[1.7rem] font-extrabold tracking-tight text-white">
                  {slide.rootTitle}
                </div>
              </div>
            </div>

            <div className="relative mt-4 flex-1">
              <svg className="absolute inset-x-0 top-0 h-16 w-full" viewBox="0 0 900 86" preserveAspectRatio="none">
                <path d="M 450 0 L 450 22" stroke="rgba(255,255,255,0.16)" strokeWidth="2.25" fill="none" />
                <path d="M 450 22 C 450 42, 160 32, 160 86" stroke="rgba(255,255,255,0.16)" strokeWidth="2.25" fill="none" />
                <path d="M 450 22 L 450 86" stroke="rgba(255,255,255,0.16)" strokeWidth="2.25" fill="none" />
                <path d="M 450 22 C 450 42, 740 32, 740 86" stroke="rgba(255,255,255,0.16)" strokeWidth="2.25" fill="none" />
              </svg>

              <div className="relative z-10 grid h-full grid-cols-3 gap-4 pt-12">
                {slide.hypotheses.map((hypothesis) => {
                  const pass = hypothesis.status === "PASS";
                  const pathLabel = `Path ${hypothesis.id.split("-").pop()?.toUpperCase()}`;

                  return (
                    <div
                      key={hypothesis.id}
                      className={`flex h-[174px] flex-col justify-between rounded-[22px] border px-4 py-4 text-center ${
                        pass
                          ? "border-emerald-500/35 bg-emerald-950/18 text-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.14)]"
                          : "border-red-500/20 bg-red-950/10 text-red-400"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-65">
                          {pathLabel}
                        </div>
                        <h4 className="text-[0.95rem] font-extrabold uppercase tracking-[0.08em] text-white">
                          {hypothesis.name}
                        </h4>
                        <p className={`text-[0.9rem] font-medium leading-[1.35] ${pass ? "text-emerald-300" : "text-red-300"}`}>
                          {hypothesis.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-45">
                          Filter Gate
                        </div>
                        <div
                          className={`mx-auto flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] ${
                            pass
                              ? "border border-emerald-500/35 bg-emerald-500/18 text-emerald-300"
                              : "border border-red-500/30 bg-red-500/14 text-red-300"
                          }`}
                        >
                          {pass ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                          {hypothesis.status}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4">
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 text-center font-mono text-[0.92rem] font-bold uppercase tracking-[0.18em] text-emerald-400">
                {slide.footerLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideTechnologyConstraint({
  slide,
}: {
  slide: Slides["technologyConstraint"];
}) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <HighlightedTitle
            title={slide.title}
            highlight={slide.titleHighlight}
            highlightClass="text-emerald-400"
          />
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <InsightBullets items={slide.bullets} toneClass="bg-emerald-400" />
        </div>

        <div className="grid h-[450px] items-center gap-8 rounded-[32px] border border-white/10 bg-white/5 p-10 lg:col-span-7 lg:grid-cols-2">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              {slide.correctLabel}
            </span>

            <div className="flex w-full flex-col items-center space-y-1">
              {slide.correctSteps.map((step, index) => (
                <div
                  key={step}
                  className={`rounded py-2.5 text-center text-[10px] font-mono font-extrabold tracking-wider text-white ${
                    index === 0
                      ? "w-full border border-emerald-500/30 bg-emerald-500/20"
                      : index === 1
                        ? "w-[85%] border border-blue-500/30 bg-blue-500/20"
                        : index === 2
                          ? "w-[70%] border border-indigo-500/30 bg-indigo-500/20"
                          : "w-[55%] border border-white bg-white text-finox-dark"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            <p className="max-w-[180px] text-center text-xs leading-relaxed text-finox-gray">
              {slide.correctCaption}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
              {slide.incorrectLabel}
            </span>

            <div className="flex w-full flex-col items-center space-y-1">
              {slide.incorrectSteps.map((step, index) => (
                <div
                  key={step}
                  className={`rounded py-2.5 text-center text-[10px] font-mono font-extrabold tracking-wider ${
                    index === 0
                      ? "w-[55%] border border-red-500/30 bg-red-500/20 text-white"
                      : index === 1
                        ? "w-[70%] border border-amber-500/30 bg-amber-500/20 text-white"
                        : index === 2
                          ? "w-[85%] border border-orange-500/30 bg-orange-500/20 text-white"
                          : "w-full border border-red-500/20 bg-red-950/30 text-red-400"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            <p className="max-w-[180px] text-center text-xs leading-relaxed text-finox-gray">
              {slide.incorrectCaption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideRealProductsSequence({
  slide,
}: {
  slide: Slides["realProductsSequence"];
}) {
  return (
    <div className="flex h-full flex-col justify-between space-y-16">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-blue-400" />}
        subtitle={slide.subtitle}
      />

      <div className="flex flex-1 items-center justify-center py-6">
        <SequenceStages stages={slide.stages} />
      </div>

      <div className="border-t border-white/5 pt-8">
        <LegendRow items={slide.legends} />
      </div>
    </div>
  );
}

export function SlideHomework({ slide }: { slide: Slides["homework"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-amber-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-4 rounded-[32px] border border-amber-500/20 bg-amber-500/10 p-8">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400">
              Strict Homework Rules
            </span>
            <ul className="space-y-4">
              {slide.rules.map((rule) => (
                <li key={rule.id} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <div className="space-y-1">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                      {rule.label}
                    </span>
                    <p className="text-sm text-finox-gray">{rule.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-lg italic leading-relaxed text-finox-gray">{slide.quote}</div>
        </div>

        <div className="flex justify-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-xl space-y-6 rounded-[40px] border-4 border-finox-slate bg-white p-10 text-finox-dark shadow-2xl"
          >
            <div className="absolute right-6 top-4 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-finox-slate opacity-75">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
              Take a Screenshot
            </div>

            <div className="space-y-2 border-b border-finox-dark/15 pb-4">
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-finox-slate">
                {slide.cardEyebrow}
              </span>
              <h3 className="text-3xl font-black leading-none tracking-tight text-finox-dark">
                {slide.cardTitle}
              </h3>
            </div>

            <ol className="space-y-5">
              {slide.questions.map((question, index) => (
                <li key={question.id} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-finox-dark font-mono text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="text-base font-semibold leading-relaxed text-finox-dark/90">
                    {question.text}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
