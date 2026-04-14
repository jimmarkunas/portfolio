import { AnimatePresence, motion } from "motion/react";

import { presentationSlideMotion } from "@/lib/motion";

type GeekleSlideFrameProps = {
  children: React.ReactNode;
  isActive: boolean;
};

export function GeekleSlideFrame({ children, isActive }: GeekleSlideFrameProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive ? (
        <motion.div
          initial={presentationSlideMotion.initial}
          animate={presentationSlideMotion.animate}
          exit={presentationSlideMotion.exit}
          transition={presentationSlideMotion.transition}
          className="slide-content h-full w-full"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
