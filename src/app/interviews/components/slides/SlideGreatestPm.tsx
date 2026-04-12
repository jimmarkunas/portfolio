"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

import type { InterviewsContent } from "@/content/interviews";

interface SlideGreatestPmProps {
  slide: InterviewsContent["slides"]["greatestPm"];
}

export default function SlideGreatestPm({ slide }: SlideGreatestPmProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
        </div>
        <div className="w-[65px] h-[65px] shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-8 grid grid-cols-12 gap-6 flex-1 min-h-0">
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
            <h3 className="text-2xl font-medium">{slide.pmpScoreCardTitle}</h3>
          </div>
          <div className="flex-1 min-h-0 bg-white/10 rounded-2xl overflow-hidden border border-white/5 relative group flex items-start justify-center">
            <img
              src={slide.pmpImage.src}
              alt={slide.pmpImage.alt}
              className="h-full w-auto max-w-full object-contain object-top opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-mono tracking-widest uppercase">{slide.pmpOverlayText}</span>
            </div>
          </div>
        </div>

        <div className="col-span-7 h-full min-h-0 flex flex-col gap-4">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex-[0_0_50%] min-h-0 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-finox-gray">{slide.metricsTitle}</span>
            </div>
            <div className="flex-1 min-h-0 bg-white/10 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center">
              <img
                src={slide.metricsImage.src}
                alt={slide.metricsImage.alt}
                className="w-full h-full object-contain object-center opacity-70"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 flex-1 min-h-0">
            {slide.awards.map((item, i) => (
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
    </div>
  );
}
