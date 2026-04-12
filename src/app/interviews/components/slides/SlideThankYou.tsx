import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

import type { InterviewsContent } from "@/content/interviews";

interface SlideThankYouProps {
  slide: InterviewsContent["slides"]["thankYou"];
}

export default function SlideThankYou({ slide }: SlideThankYouProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center space-y-12">
      <div className="space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-5xl font-semibold tracking-tight">{slide.name}</h3>
        <p className="text-xl font-semibold text-[#447ACB]">{slide.role}</p>
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-3 rounded-full border border-finox-slate/30 bg-white/5 px-6 py-3">
          <Mail className="h-5 w-5 text-[#447ACB]" />
          <span className="text-sm font-semibold">{slide.email}</span>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-finox-slate/30 bg-white/5 px-6 py-3">
          <Linkedin className="h-5 w-5 text-[#447ACB]" />
          <span className="text-sm font-semibold">{slide.linkedin}</span>
        </div>
      </div>

      <div className="pt-4">
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-finox-gray">{slide.readyText}</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
