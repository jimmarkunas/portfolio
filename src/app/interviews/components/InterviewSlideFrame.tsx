import { AnimatePresence, motion } from "motion/react";

import { presentationSlideMotion } from "@/lib/motion";

type InterviewSlideFrameProps = {
  children: React.ReactNode;
  isActive: boolean;
  brandLogoSrc: string;
  brandLogoAlt: string;
};

export function InterviewSlideFrame({
  children,
  isActive,
  brandLogoSrc,
  brandLogoAlt,
}: InterviewSlideFrameProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={presentationSlideMotion.initial}
          animate={presentationSlideMotion.animate}
          exit={presentationSlideMotion.exit}
          transition={presentationSlideMotion.transition}
          className="slide-content relative h-full w-full"
        >
          <img
            src={brandLogoSrc}
            alt={brandLogoAlt}
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-16 h-[65px] w-[65px]"
          />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
