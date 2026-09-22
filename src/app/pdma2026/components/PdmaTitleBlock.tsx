import { motion, useReducedMotion } from "motion/react";
import { titleConfig, type PdmaTitleConfig } from "../pdmaTitleConfig";

export function PdmaTitleBlock({ slide }: { slide: number }) {
  const config = titleConfig[slide];
  const reduced = useReducedMotion();
  if (!config) return null;
  return <div className={`pdma-title-block pdma-title-${slide}`} style={{ "--title-size": `${config.size}px`, "--title-leading": `${config.leading ?? config.size}px`, "--title-tracking": `${config.tracking ?? 0}px`, "--subtitle-size": `${config.subtitleSize ?? 0}px`, "--subtitle-leading": `${config.subtitleLeading ?? 36}px`, "--magenta-x": `${config.magentaX ?? 0}px` } as React.CSSProperties}>
    <motion.h1 initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>{config.white && <span>{config.white}</span>}{config.sameRow && config.magenta && <em>{config.magenta}</em>}</motion.h1>
    {!config.sameRow && config.magenta && <motion.h1 className="pdma-title-magenta-row" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduced ? 0 : .08 }}><em>{config.magenta}</em></motion.h1>}
    {config.subtitle && <motion.p initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduced ? 0 : .16 }}>{config.subtitle}</motion.p>}
  </div>;
}
