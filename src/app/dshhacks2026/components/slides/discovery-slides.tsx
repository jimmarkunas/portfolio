import { ArrowDown, ArrowRight, ArrowRightCircle, Check, Cpu, HelpCircle, Lightbulb, User, X } from "lucide-react";
import { motion } from "motion/react";

import type { DshHacks2026Content } from "@/content/dshhacks2026";

import { DotGrid, InsightBullets, SlideHeader } from "./dshhacks-slide-primitives";

type Slides = DshHacks2026Content["slides"];

export function SlideHero({ slide }: { slide: Slides["hero"] }) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-12 py-12 text-center">
      <div className="max-w-5xl space-y-6">
        <h1 className="text-6xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl">
          <span className="mb-4 block text-4xl font-extrabold uppercase tracking-tight text-red-500 md:text-5xl lg:text-6xl">
            {slide.titleLead}
          </span>
          <span className="text-white">{slide.titleMain}</span>
        </h1>
        <p className="mx-auto max-w-4xl pt-4 text-4xl font-light tracking-wide text-finox-gray md:text-5xl">
          {slide.subtitle}
        </p>
      </div>
    </div>
  );
}

export function SlideWrongThing({ slide }: { slide: Slides["wrongThing"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <>
            You&apos;ve Built the Wrong Thing. <span className="text-red-400">{slide.titleHighlight}</span>
          </>
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <InsightBullets items={slide.bullets} toneClass="bg-red-400" />
        </div>

        <div className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 lg:col-span-6">
          <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center text-[1.35rem] font-mono font-bold uppercase tracking-[0.32em] text-finox-gray">
            The Broken Loop Visual
          </div>

          <div className="relative z-10 grid w-full max-w-lg grid-cols-4 items-center gap-4">
            {slide.loopSteps.map((step, index) => {
              const icon =
                index === 0 ? (
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                ) : index === 1 ? (
                  <Cpu className="h-8 w-8 text-blue-400" />
                ) : index === 2 ? (
                  <ArrowRightCircle className="h-8 w-8 text-indigo-400" />
                ) : (
                  <HelpCircle className="h-8 w-8 text-red-400" />
                );

              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className="mb-3 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2">
                    {icon}
                    <span className="mt-1 text-xs font-bold tracking-wider text-white">{step.label}</span>
                  </div>
                  <p className="dshhacks-support-label font-medium text-finox-gray">{step.description}</p>
                  {index < slide.loopSteps.length - 1 ? (
                    <div className="absolute top-10 -right-4 translate-x-1/2 text-white/20">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mt-8 space-y-2 text-center">
            <div className="animate-pulse rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 font-mono text-sm font-bold uppercase tracking-widest text-red-400">
              {slide.loopOutcome}
            </div>
            <p className="dshhacks-support-label max-w-xs text-finox-gray">{slide.loopCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideIdeaLast({ slide }: { slide: Slides["ideaLast"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <>
            The Idea is the <span className="text-blue-400">{slide.titleHighlight}</span>, Not the First
          </>
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 gap-12 lg:grid-cols-2">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-red-500/10 bg-white/5 p-10">
          <div className="absolute right-6 top-4 text-xs font-mono font-bold uppercase tracking-widest text-red-400/60">
            Wrong Sequence
          </div>
          <div className="mb-8 space-y-4">
            <h3 className="text-3xl font-bold text-red-400">{slide.wrongSequenceTitle}</h3>
            <p className="text-lg text-finox-gray">{slide.wrongSequenceSubtitle}</p>
          </div>

          <div className="flex flex-col items-center space-y-4 py-4">
            {slide.wrongSteps.map((step, index) => (
              <div key={step.id} className="contents">
                <div className="flex w-full max-w-sm items-center justify-between rounded-2xl border border-red-500/20 bg-red-950/20 px-6 py-3">
                  <span className="font-mono font-bold text-red-400/60">{step.step}</span>
                  <span className="text-lg font-extrabold tracking-wider text-white">{step.title}</span>
                  <span className="max-w-[150px] text-right text-xs text-finox-gray">{step.description}</span>
                </div>
                {index < slide.wrongSteps.length - 1 ? (
                  <ArrowDown className="h-5 w-5 text-red-500/30" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-500/10 bg-red-500/5 p-4 text-center font-mono text-sm font-bold uppercase tracking-wide text-red-400">
            {slide.wrongFooter}
          </div>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-emerald-500/20 bg-white/5 p-10">
          <div className="absolute right-6 top-4 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400/60">
            Correct Sequence
          </div>
          <div className="mb-8 space-y-4">
            <h3 className="text-3xl font-bold text-emerald-400">{slide.rightSequenceTitle}</h3>
            <p className="text-lg font-medium text-white/90">{slide.rightSequenceSubtitle}</p>
          </div>

          <div className="grid gap-4 py-2 md:grid-cols-2">
            {slide.rightSteps.map((step, index) => {
              const cardTone =
                index < 2
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : index < 4
                    ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                    : index === 4
                      ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400"
                      : "border-white bg-white text-finox-dark";

              return (
                <div
                  key={step.id}
                  className={`flex flex-col justify-between rounded-2xl border p-4 ${cardTone}`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <span className="text-lg font-extrabold tracking-tight">{step.title}</span>
                  </div>
                  <p className="text-xs font-medium leading-relaxed opacity-80">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center font-mono text-sm font-bold uppercase tracking-wide text-emerald-400">
            {slide.rightFooter}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 border-t border-white/5 py-4 text-center text-sm font-mono uppercase tracking-widest text-finox-gray">
        <span>{slide.closingPrefix}</span>
        <span className="rounded border border-red-500/30 bg-red-500/20 px-3 py-1 font-bold text-red-400">
          {slide.closingBadge}
        </span>
      </div>
    </div>
  );
}

export function SlideFocusGroup({ slide }: { slide: Slides["focusGroup"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <>
            Your Network Is a Focus Group. <span className="text-blue-400">{slide.titleHighlight}</span>
          </>
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <InsightBullets items={slide.bullets} toneClass="bg-blue-400" />
        </div>

        <div className="flex h-[450px] items-center justify-center p-8 lg:col-span-6">
          <div className="relative flex h-[380px] w-[380px] items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center rounded-full border border-white/10">
              <span className="absolute top-3 text-[10px] font-mono font-bold uppercase tracking-widest text-finox-gray">
                {slide.outerRingLabel}
              </span>
              <span className="absolute bottom-4 max-w-[140px] text-center text-xs font-medium text-finox-gray/80">
                {slide.outerRingCaption}
              </span>
            </div>

            <div className="absolute inset-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5">
              <span className="absolute top-3 text-[10px] font-mono font-bold uppercase tracking-widest text-white/55">
                {slide.middleRingLabel}
              </span>
              <span className="absolute bottom-4 max-w-[110px] text-center text-xs font-medium text-white/60">
                {slide.middleRingCaption}
              </span>
            </div>

            <div className="absolute inset-28 z-10 flex flex-col items-center justify-center rounded-full border-2 border-blue-400 bg-blue-500/20 p-4 text-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <User className="mb-1 h-8 w-8 text-blue-400" />
              <span className="text-xl font-extrabold tracking-tight text-white">{slide.centerLabel}</span>
              <span className="mt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                {slide.centerCaption}
              </span>
            </div>

            {[
              "top-12 left-12 -translate-x-1/2 -translate-y-1/2 rotate-[135deg]",
              "top-12 right-12 translate-x-1/2 -translate-y-1/2 -rotate-[135deg]",
              "bottom-12 left-12 -translate-x-1/2 translate-y-1/2 rotate-45",
              "bottom-12 right-12 translate-x-1/2 translate-y-1/2 -rotate-45",
            ].map((position) => (
              <div
                key={position}
                className={`absolute flex items-center gap-1 text-xs font-mono text-blue-400/80 ${position}`}
              >
                <span>{slide.arrowLabel}</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function spectrumToneClasses(tone: Slides["painProduct"]["examples"][number]["tone"]) {
  if (tone === "amber") {
    return "border-amber-500/30 bg-amber-950/20 text-amber-300";
  }

  if (tone === "emerald") {
    return "border-emerald-500/30 bg-emerald-950/20 text-emerald-300";
  }

  return "border-red-500/30 bg-red-950/20 text-red-300";
}

export function SlidePainProduct({ slide }: { slide: Slides["painProduct"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <>
            Pain Is the Product. <span className="text-amber-400">{slide.titleHighlight}</span>
          </>
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <InsightBullets items={slide.bullets} toneClass="bg-amber-400" />
        </div>

        <div className="relative flex h-[450px] flex-col justify-center space-y-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 lg:col-span-7">
          <div className="absolute left-6 top-4 text-xs font-mono font-bold uppercase tracking-widest text-finox-gray">
            The Pain Spectrum Bar
          </div>

          <div className="relative">
            <div className="h-4 w-full rounded-full border border-white/10 bg-gradient-to-r from-red-500/20 via-amber-500/30 to-emerald-500/40" />
            <div className="flex items-center justify-between pt-3 text-xs font-mono uppercase tracking-widest text-finox-gray">
              <span className="font-bold text-red-400">{slide.lowSignalLabel}</span>
              <span className="font-bold text-emerald-400">{slide.highSignalLabel}</span>
            </div>
          </div>

          <div className="space-y-6">
            {slide.examples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex items-center justify-between gap-6 rounded-2xl border p-4 ${spectrumToneClasses(example.tone)}`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest opacity-70">
                    {example.level}
                  </span>
                  <p className="text-lg font-medium italic leading-relaxed">{example.quote}</p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {example.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function formulaToneClass(tone: Slides["designBrief"]["briefParts"][number]["tone"]) {
  if (tone === "blue") return "text-blue-400 bg-blue-500/10";
  if (tone === "indigo") return "text-indigo-400 bg-indigo-500/10";
  if (tone === "amber") return "text-amber-400 bg-amber-500/10";
  return "text-emerald-400 bg-emerald-500/10";
}

export function SlideDesignBrief({ slide }: { slide: Slides["designBrief"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={
          <>
            From Complaint to <span className="text-emerald-400">{slide.titleHighlight}</span>
          </>
        }
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <InsightBullets items={slide.bullets} toneClass="bg-emerald-400" />
        </div>

        <div className="grid items-center gap-4 lg:col-span-7 md:grid-cols-11">
          <div className="relative flex h-[350px] flex-col justify-between overflow-hidden rounded-[24px] border border-red-500/10 bg-red-500/5 p-8 md:col-span-5">
            <div className="absolute left-6 top-4 text-[10px] font-mono font-bold uppercase tracking-widest text-red-400">
              Raw Pain Quote
            </div>
            <div className="space-y-3 pt-6">
              <span className="text-sm font-mono font-bold uppercase text-finox-gray">
                {slide.complaintLabel}
              </span>
              <p className="font-serif text-xl italic leading-relaxed text-red-300">
                {slide.complaintQuote}
              </p>
            </div>
            <div className="text-xs font-mono text-finox-gray">{slide.complaintStatus}</div>
          </div>

          <div className="flex items-center justify-center md:col-span-1">
            <div className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-lg md:rotate-0">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <div className="relative flex h-[350px] flex-col justify-between overflow-hidden rounded-[24px] border border-emerald-500/20 bg-emerald-500/5 p-8 md:col-span-5">
            <div className="absolute left-6 top-4 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              Structured Brief
            </div>
            <div className="space-y-3 pt-6">
              <span className="text-sm font-mono font-bold uppercase text-emerald-400">
                {slide.briefLabel}
              </span>
              <div className="space-y-2 text-lg leading-relaxed text-white">
                {slide.briefParts.map((part) => (
                  <div key={part.id}>
                    <span
                      className={`rounded px-1.5 py-0.5 text-xs font-extrabold uppercase tracking-wider ${formulaToneClass(part.tone)}`}
                    >
                      {part.label}
                    </span>{" "}
                    <span className={part.tone === "amber" ? "font-bold text-amber-400" : undefined}>
                      {part.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              {slide.briefStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
