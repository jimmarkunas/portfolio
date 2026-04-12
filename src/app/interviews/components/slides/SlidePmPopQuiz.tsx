"use client";

import { motion } from "motion/react";

import type { InterviewsContent } from "@/content/interviews";

import {
  PM_POP_QUIZ_SLIDE_ID,
  PM_POP_QUIZ_SUBTITLE,
  PM_POP_QUIZ_TITLE,
} from "../../interviewSlideRegistry";

interface SlidePmPopQuizProps {
  categories: InterviewsContent["slides"]["services"]["categories"];
  revealedCategoryIds: string[];
  onToggleCategoryReveal: (categoryId: string) => void;
}

export default function SlidePmPopQuiz({
  categories,
  revealedCategoryIds,
  onToggleCategoryReveal,
}: SlidePmPopQuizProps) {
  return (
    <div key={PM_POP_QUIZ_SLIDE_ID} className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex justify-between items-start"
      >
        <div className="space-y-2">
          <h2 className="h2-display">{PM_POP_QUIZ_TITLE}</h2>
          <p className="text-finox-gray text-xl font-light">{PM_POP_QUIZ_SUBTITLE}</p>
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
          {categories.map((category, i) => {
            const isRevealed = revealedCategoryIds.includes(category.id);

            return (
              <motion.button
                type="button"
                key={`pm-pop-quiz-${category.id}`}
                onClick={() => onToggleCategoryReveal(category.id)}
                aria-pressed={isRevealed}
                aria-label={`${isRevealed ? "Hide" : "Reveal"} answer for ${category.title}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="h-full text-left bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#447ACB]/70"
              >
                <div className="min-h-[72px]">
                  {isRevealed ? (
                    <div className="flex items-center gap-4">
                      {category.percent && (
                        <div className="bg-finox-slate text-white text-sm font-bold px-3 py-2 rounded">
                          {category.percent}
                        </div>
                      )}
                      <h3 className="text-4xl font-medium">{category.title}</h3>
                    </div>
                  ) : (
                    <div className="flex h-full items-center">
                      <p className="text-finox-gray text-sm uppercase tracking-[0.18em]">
                        Guess the job title, then click to reveal
                      </p>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 list-disc pl-7 marker:text-[#447ACB]">
                  {category.items.map((item) => (
                    <li key={`pm-pop-quiz-${item.id}`} className="text-finox-gray text-xl font-light leading-tight">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
