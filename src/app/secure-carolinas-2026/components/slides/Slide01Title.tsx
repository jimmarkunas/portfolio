import React from "react";
import { motion } from "motion/react";

export const Slide01Title: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper relative py-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute left-0 top-0"
      >
        <img
          src="/images/logo/ujcg-logo-blue.png"
          alt="Jim Markunas logo"
          aria-hidden="true"
          className="h-32 w-32 shrink-0"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="flex h-full w-full flex-col justify-center space-y-3 text-center"
      >
        <h1 className="sc26-type-hero w-full max-w-none text-center text-[#18181B]">
          Is Your Enterprise Ready to Put AI Into Production?
        </h1>
        <p className="sc26-type-h2 w-full max-w-none text-center font-light text-[#52525B]">
          When Agentic AI Becomes an Attack Surface
        </p>
      </motion.div>
    </div>
  );
};
