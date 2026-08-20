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
          className="flex justify-center"
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
