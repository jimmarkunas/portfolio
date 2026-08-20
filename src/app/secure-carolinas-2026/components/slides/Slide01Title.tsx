import React from "react";
import { motion } from "motion/react";

export const Slide01Title: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper justify-center py-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center space-y-6 lg:space-y-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-start justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <img
              src="/images/logo/ujcg-logo-blue.png"
              alt="Jim Markunas logo"
              aria-hidden="true"
              className="h-16 w-16 shrink-0"
            />
            <div className="space-y-1.5 pt-0.5">
              <div className="type-p5 tracking-[0.22em] uppercase text-[#71717A]">
                Secure Carolinas 2026 // Keynote
              </div>
              <div className="h-px w-20 bg-[#E4E4E7]" aria-hidden="true" />
            </div>
          </div>
          <span className="type-p5 text-[#71717A] tracking-[0.2em] uppercase hidden sm:inline">
            A.G.E.N.T.S. OPERATING MODEL
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="space-y-3"
        >
          <h1 className="sc26-type-hero max-w-4xl text-[#18181B]">
            Is Your Enterprise Ready to Put AI Into Production?
          </h1>
          <p className="sc26-type-h2 text-[#52525B] font-light max-w-3xl">
            When Agentic AI Becomes an Attack Surface
          </p>
        </motion.div>
      </div>
    </div>
  );
};
