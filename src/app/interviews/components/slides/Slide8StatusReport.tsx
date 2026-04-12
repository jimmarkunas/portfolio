"use client";

import { CheckCircle2, Clock } from "lucide-react";

import type { InterviewsContent } from "@/content/interviewContent";

interface Slide8StatusReportProps {
  slide: InterviewsContent["slides"]["statusReport"];
}

export default function Slide8StatusReport({ slide }: Slide8StatusReportProps) {
  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="shrink-0 flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">
            {slide.title}
          </h2>
          <p className="text-finox-gray text-xl font-light">
            {slide.subtitle}
          </p>
        </div>

        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-8 flex flex-1 gap-8">
        <div className="w-2/3 bg-white border border-[#E5E9F0] rounded-[18px] shadow-[0_24px_44px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col">
          <div className="bg-[#222222] p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#447ACB] rounded flex items-center justify-center text-white font-bold text-xs">
                AD
              </div>
              <div className="type-p2 text-white font-medium">
                {slide.report.programName}
              </div>
            </div>

            <div className="px-3 py-1 bg-green-500/20 text-green-400 type-p5 font-semibold uppercase tracking-[0.14em] rounded border border-green-500/30 leading-none">
              {slide.report.status}
            </div>
          </div>

          <div className="px-6 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8FAFD] border border-[#E5E9F0] rounded-xl text-center">
                <div className="type-h4 font-medium text-[#447ACB] leading-none">
                  {slide.execView.sla}
                </div>
                <div className="type-p5 font-semibold text-finox-gray uppercase tracking-[0.1em]">
                  SLA Met
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFD] border border-[#E5E9F0] rounded-xl text-center">
                <div className="type-h4 font-medium text-[#447ACB] leading-none">
                  {slide.execView.blockersCount}
                </div>
                <div className="type-p5 font-semibold text-finox-gray uppercase tracking-[0.1em]">
                  Blockers
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h5 className="type-p5 font-semibold text-finox-gray tracking-[0.14em] mb-2 uppercase">
                  Key Accomplishments
                </h5>
                <div className="space-y-2">
                  {slide.report.accomplishments.map((item) => (
                    <div key={item} className="flex items-center gap-2 type-p2 text-[#222222] font-medium leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="type-p5 font-semibold text-finox-gray tracking-[0.14em] mb-2 uppercase">
                  In-Progress
                </h5>
                <div className="space-y-2">
                  {slide.report.inProgress.map((item) => (
                    <div key={item} className="flex items-center gap-2 type-p2 text-[#222222] font-medium leading-tight">
                      <Clock className="w-4 h-4 text-[#447ACB]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="type-p5 font-semibold text-finox-gray tracking-[0.14em] mb-2 uppercase">
                  Upcoming Milestones
                </h5>
                <div className="space-y-2">
                  {slide.report.upcoming.map((item) => (
                    <div key={item} className="flex items-center gap-2 type-p2 text-finox-gray font-medium leading-tight">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6DCE4]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <h5 className="type-p5 font-semibold text-red-500 tracking-[0.14em] mb-2 uppercase">
                  Blockers / Risks
                </h5>
                <p className="type-p4 text-red-700 font-medium leading-tight">
                  {slide.report.blockers}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="type-h4 text-white mb-2 font-medium">
              {slide.execView.title}
            </h4>
            <p className="type-p3 text-finox-gray leading-relaxed">
              {slide.execView.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
