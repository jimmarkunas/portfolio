import { ArrowDown, ArrowRight, ArrowRightCircle, Check, Cpu, HelpCircle, Lightbulb, User, X } from "lucide-react";
import { motion } from "motion/react";

import type { DshHacks2026Content } from "@/content/dshhacks2026";

import {
  DotGrid,
  HighlightedTitle,
  InsightBullets,
  SlideHeader,
} from "./dshhacks-slide-primitives";

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
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-red-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-start gap-16 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-6">
          <InsightBullets items={slide.bullets} toneClass="bg-red-400" />
        </div>

        <div className="relative flex min-h-0 self-stretch flex-col items-center justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 pt-20 lg:col-span-6">
          <div className="absolute inset-x-0 top-7 text-center text-[1.15rem] font-mono font-bold uppercase tracking-[0.28em] text-finox-gray">
            The Broken Loop Visual
          </div>

          <div className="relative z-10 flex w-full max-w-3xl items-start justify-between gap-6">
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
                <div key={step.id} className="relative flex min-w-0 flex-1 flex-col items-center text-center">
                  <div className="mb-3 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2">
                    {icon}
                    <span className="mt-1 text-xs font-bold tracking-wider text-white">{step.label}</span>
                  </div>
                  <p className="dshhacks-support-label whitespace-nowrap font-medium text-finox-gray">{step.description}</p>
                  {index < slide.loopSteps.length - 1 ? (
                    <div className="absolute top-10 -right-3 text-white/20">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="relative z-10 mt-8 w-full rounded-[3rem] border border-red-500/30 bg-[rgba(64,43,43,0.92)] px-10 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <div className="font-mono text-[1.15rem] font-bold uppercase tracking-[0.48em] text-red-400">
              {slide.loopOutcome}
            </div>
            <div className="mx-auto mt-5 h-px w-56 bg-red-400/40" />
            <p className="mx-auto mt-6 max-w-4xl text-[2rem] font-light leading-[1.35] text-white">
              {slide.loopCaption}
            </p>
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
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-blue-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 gap-12 lg:grid-cols-2">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-red-500/10 bg-white/5 p-10">
          <div className="absolute left-6 top-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-red-400/60">
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
          <div className="absolute left-6 top-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-emerald-400/60">
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
    </div>
  );
}

export function SlideFocusGroup({ slide }: { slide: Slides["focusGroup"] }) {
  return (
    <div className="flex h-full flex-col justify-between space-y-12">
      <SlideHeader
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-blue-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <InsightBullets items={slide.bullets} toneClass="bg-blue-400" />
        </div>

        <div className="flex h-[450px] items-center justify-center lg:col-span-6">
          <div className="relative h-full w-full max-w-[520px] scale-[1.16]">
            <div className="absolute left-1/2 top-[42%] h-[332px] w-[332px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

            <div className="absolute left-1/2 top-[42%] h-[248px] w-[248px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/[0.025]" />

            <div className="absolute left-1/2 top-[42%] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400 bg-[radial-gradient(circle,rgba(96,165,250,0.2)_0%,rgba(59,130,246,0.14)_100%)] shadow-[0_0_50px_rgba(59,130,246,0.15)]" />

            <div className="pointer-events-none absolute inset-0">
              <svg viewBox="0 0 520 450" className="h-full w-full overflow-visible">
                <path id="dshhacks-focus-outer-arc" d="M 115 189 A 145 145 0 0 1 405 189" fill="none" />
                <path id="dshhacks-focus-inner-arc" d="M 155 189 A 105 105 0 0 1 365 189" fill="none" />
                <path id="dshhacks-focus-outer-caption-arc" d="M 405 189 A 145 145 0 0 1 115 189" fill="none" />
                <path id="dshhacks-focus-inner-caption-arc" d="M 365 189 A 105 105 0 0 1 155 189" fill="none" />

                <text
                  fill="currentColor"
                  className="font-mono text-finox-gray"
                  style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  <textPath href="#dshhacks-focus-outer-arc" startOffset="50%" textAnchor="middle">
                    {slide.outerRingLabel.toUpperCase()}
                  </textPath>
                </text>

                <text
                  fill="currentColor"
                  className="font-mono text-white/80"
                  style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  <textPath href="#dshhacks-focus-inner-arc" startOffset="50%" textAnchor="middle">
                    {slide.middleRingLabel.toUpperCase()}
                  </textPath>
                </text>

                <text
                  fill="currentColor"
                  className="font-mono text-white/80"
                  style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  <textPath href="#dshhacks-focus-inner-caption-arc" startOffset="50%" textAnchor="middle">
                    {slide.middleRingCaption.toUpperCase()}
                  </textPath>
                </text>

                <text
                  fill="currentColor"
                  className="font-mono text-finox-gray"
                  style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  <textPath href="#dshhacks-focus-outer-caption-arc" startOffset="50%" textAnchor="middle">
                    {slide.outerRingCaption.toUpperCase()}
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute left-1/2 top-[42%] z-10 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center">
              <User className="mb-2 h-9 w-9 text-blue-400" />
              <span className="text-[2.15rem] font-extrabold tracking-tight text-white">{slide.centerLabel}</span>
              <span className="mt-2 text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-blue-400">
                {slide.centerCaption}
              </span>
            </div>

            <div className="absolute left-1/2 top-[80%] z-10 flex -translate-x-1/2 flex-col items-center">
              <ArrowDown className="h-4 w-4 rotate-180 text-blue-400/80" />
              <div className="h-10 w-px bg-gradient-to-b from-blue-400/70 to-blue-400/0" />
              <span className="mt-2 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-blue-400/80">
                {slide.arrowLabel}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function spectrumToneClasses(tone: Slides["painProduct"]["examples"][number]["tone"]) {
  if (tone === "amber") {
    return "border-blue-500/30 bg-blue-950/20 text-blue-300";
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
        title={<HighlightedTitle title={slide.title} highlight={slide.titleHighlight} highlightClass="text-blue-400" />}
        subtitle={slide.subtitle}
      />

      <div className="grid flex-1 items-start gap-16 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-5">
          <InsightBullets items={slide.bullets} toneClass="bg-blue-400" />
        </div>

        <div className="relative flex min-h-0 self-stretch flex-col justify-start space-y-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 pt-14 lg:col-span-7">
          <div className="absolute left-6 top-4 text-xs font-mono font-bold uppercase tracking-widest text-finox-gray">
            The Pain Spectrum Bar
          </div>

          <div className="relative">
            <div className="h-4 w-full rounded-full border border-white/10 bg-gradient-to-r from-red-500/25 via-blue-500/30 to-emerald-500/40" />
            <div className="flex items-center justify-between pt-3 text-xs font-mono uppercase tracking-widest text-finox-gray">
              <span className="font-bold text-red-400">{slide.lowSignalLabel}</span>
              <span className="font-bold text-emerald-400">{slide.highSignalLabel}</span>
            </div>
          </div>

          <div className="space-y-4">
            {slide.examples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex items-center justify-between gap-6 rounded-2xl border p-5 ${spectrumToneClasses(example.tone)}`}
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
              {slide.briefLabel}
            </div>
            <div className="space-y-3 pt-6">
              <span className="text-sm font-mono font-bold uppercase text-emerald-400">
                Structured Brief
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
          </div>
        </div>
      </div>
    </div>
  );
}
