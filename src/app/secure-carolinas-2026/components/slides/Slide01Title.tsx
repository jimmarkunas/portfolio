import React from "react";
import { motion } from "motion/react";

export const Slide01Title: React.FC = () => {
  return (
    <div className="sc26-slide-wrapper relative">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="absolute left-5 top-5 h-[6.667rem] w-[6.667rem] overflow-hidden"
      >
        <img
          src="/images/logo/ujcg-logo-blue.png"
          alt="Jim Markunas logo"
          aria-hidden="true"
          className="h-32 w-32 max-w-none shrink-0"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <div className="w-full space-y-3">
          <h1 className="sc26-type-hero w-full max-w-none text-center text-[#18181B]">
            Is Your Enterprise Ready to Put AI Into Production?
          </h1>
          <p className="sc26-type-h2 w-full max-w-none text-center font-light text-[#52525B]">
            When Agentic AI Becomes an Attack Surface
          </p>
        </div>
      </motion.div>
    </div>
  );
};
