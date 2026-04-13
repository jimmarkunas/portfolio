import { motion } from "framer-motion"

import type { StaggerItemProps } from "./types"

export function StaggerItem({ children, className, reduceMotion, itemY }: StaggerItemProps) {
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: itemY },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
