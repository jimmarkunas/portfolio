"use client";

import type { InterviewsContent } from "@/content/interviews";

interface SlideRescuePlanProps {
  slide: InterviewsContent["slides"]["rescuePlan"];
}

export default function SlideRescuePlan({ slide }: SlideRescuePlanProps) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-10">
      <div className="shrink-0 space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
      </div>

      <div className="relative shrink-0 px-2 pt-6">
        <div className="pointer-events-none absolute left-0 right-0 top-[2.25rem] h-px bg-white/15" />
        <div className="relative grid grid-cols-4 gap-6">
          {slide.carouselPhases.map((phase, i) => (
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
        {slide.weeks.map((week) => (
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
    </div>
  );
}
