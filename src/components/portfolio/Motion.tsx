'use client';

import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
  amount?: number;
  style?: CSSProperties;
};

export function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 28,
  scale = 1,
  amount = 0.2,
  style,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : y,
        scale: prefersReducedMotion ? 1 : scale,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.8,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className = '',
  delay = 0,
  amount = 0.18,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  style?: CSSProperties;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: {},
        visible: {
          transition: prefersReducedMotion
            ? { delayChildren: 0 }
            : {
                delayChildren: delay,
                staggerChildren: 0.1,
              },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  y = 24,
  scale = 1,
  style,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
  style?: CSSProperties;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : y,
          scale: prefersReducedMotion ? 1 : scale,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: prefersReducedMotion ? 0.01 : 0.72,
            ease,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionMedia({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 32,
        scale: prefersReducedMotion ? 1 : 0.97,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.9,
        delay,
        ease,
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
