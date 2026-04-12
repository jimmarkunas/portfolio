import { motion } from "motion/react";
import { Cpu, Globe, Shield, Target, Users, Zap } from "lucide-react";

import type { InterviewsContent } from "@/content/interviews";

interface SlideWhyJimProps {
  slide: InterviewsContent["slides"]["whyJim"];
}

const whyJimIconMap = {
  Shield,
  Cpu,
  Target,
  Users,
  Zap,
  Globe,
} as const;

export default function SlideWhyJim({ slide }: SlideWhyJimProps) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-8">
      <div className="shrink-0 space-y-2">
        <h2 className="h2-display">{slide.title}</h2>
        <p className="text-finox-gray text-xl font-light">{slide.subtitle}</p>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-6">
        {slide.points.map((item, i) => {
          const Icon = whyJimIconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
              className="flex h-full flex-col rounded-3xl border border-finox-slate/30 bg-white/5 p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#447ACB]/10">
                <Icon className="h-7 w-7 text-[#447ACB]" />
              </div>
              <h4 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{item.title}</h4>
              <p className="text-finox-gray text-lg leading-relaxed md:text-xl">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
