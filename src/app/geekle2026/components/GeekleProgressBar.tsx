import { motion } from "motion/react";

type GeekleProgressBarProps = {
  currentSlide: number;
  slideCount: number;
};

export function GeekleProgressBar({ currentSlide, slideCount }: GeekleProgressBarProps) {
  return (
    <div className="absolute left-0 top-0 z-50 h-1 w-full bg-finox-slate/20">
      <motion.div
        className="h-full bg-white"
        initial={{ width: 0 }}
        animate={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
