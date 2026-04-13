import { AnimatePresence, motion } from "motion/react";

import type { InterviewsContent } from "@/content/interviews";

type InterviewTocDialogProps = {
  isOpen: boolean;
  currentSlide: number;
  slideTitles: string[];
  slideIdOrder: string[];
  totalSlides: number;
  navCopy: InterviewsContent["navigation"];
  onClose: () => void;
  onJumpToSlide: (slideIndex: number) => void;
};

export function InterviewTocDialog({
  isOpen,
  currentSlide,
  slideTitles,
  slideIdOrder,
  totalSlides,
  navCopy,
  onClose,
  onJumpToSlide,
}: InterviewTocDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-[60] flex items-center justify-center bg-black/75 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            id="interviews-slide-toc"
            role="dialog"
            aria-modal="true"
            aria-label={navCopy.tocDialogAriaLabel}
            className="w-full max-w-3xl max-h-[82vh] overflow-hidden rounded-2xl border border-finox-slate/50 bg-[#222222] shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-finox-slate/30 px-6 py-4">
              <h3 className="text-lg font-medium">{navCopy.tocTitle}</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded border border-finox-slate/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-finox-gray transition-colors hover:border-white/40 hover:text-white"
              >
                {navCopy.closeButtonLabel}
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-3 py-3">
              <ul className="space-y-2">
                {slideTitles.map((title, index) => {
                  const isActive = currentSlide === index;

                  return (
                    <li key={slideIdOrder[index]}>
                      <button
                        type="button"
                        onClick={() => onJumpToSlide(index)}
                        className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                          isActive
                            ? "border-white/40 bg-white/10 text-white"
                            : "border-finox-slate/30 text-finox-gray hover:border-white/40 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="w-16 shrink-0 font-mono text-xs uppercase tracking-[0.15em]">
                          {index + 1} / {totalSlides}
                        </span>
                        <span className="text-base font-light leading-tight">{title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
