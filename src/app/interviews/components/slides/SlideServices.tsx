import { motion } from "motion/react";

import type { InterviewsContent } from "@/content/interviews";

interface SlideServicesProps {
  slide: InterviewsContent["slides"]["services"];
}

export default function SlideServices({ slide }: SlideServicesProps) {
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="mt-12 flex-1 flex items-stretch"
      >
        <div className="grid grid-cols-2 gap-6 w-full h-full auto-rows-fr">
          {slide.categories.map((category, i) => (
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
    </div>
  );
}
