import { motion } from "motion/react";

import type { InterviewsContent } from "@/content/interviews";

interface SlideOutcomesProps {
  slide: InterviewsContent["slides"]["outcomes"];
}

export default function SlideOutcomes({ slide }: SlideOutcomesProps) {
  return (
    <div className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h2 className="h2-display">{slide.title}</h2>
          <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
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
              <div className="h-px w-full bg-finox-slate/30" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222222] px-4 text-[10px] uppercase tracking-[0.3em] text-finox-gray">
                {slide.projects.label}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.24 }}
              className="flex h-24 items-center justify-between gap-8 px-4"
            >
              {slide.projects.logos.map((logo, i) => (
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
          {slide.stats.map((stat, i) => (
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
    </div>
  );
}
