import { motion, useReducedMotion } from "motion/react";
import type { PdmaTitleConfig } from "../pdma2026SlideManifest";

export function PdmaTitleBlock({ slide, config }: { slide: number; config: PdmaTitleConfig }) {
  const reduced = useReducedMotion();

  const titleColor = config.titleColor ?? "#f2f2f5";
  const subtitleContent = config.subtitle?.split("\n").map((line, index) => <span key={`${line}-${index}`}>{index > 0 && <br />}{line}</span>);
  const subtitle = config.exactSubtitleSize ? (
    <span
      style={{
        display: "inline-block",
        color: config.subtitleColor ?? "#f2f2f5",
        fontSize: `${config.subtitleSize ?? 0}px`,
        lineHeight: `${config.subtitleLeading ?? 36}px`,
        letterSpacing: `${config.subtitleTracking ?? -0.4}px`,
      }}
    >
      {subtitleContent}
    </span>
  ) : config.subtitle;

  return <div
    className={`pdma-title-block pdma-title-${slide}`}
    style={{
      "--title-size": `${config.size}px`,
      "--title-leading": `${config.leading ?? config.size}px`,
      "--title-tracking": `${config.tracking ?? 0}px`,
      "--subtitle-size": `${config.subtitleSize ?? 0}px`,
      "--subtitle-leading": `${config.subtitleLeading ?? 36}px`,
      "--subtitle-offset": `${config.subtitleOffset ?? 18}px`,
      "--magenta-x": `${config.magentaX ?? 0}px`,
    } as React.CSSProperties}
  >
    <motion.h1
      style={{ color: titleColor }}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {config.white && <span>{config.white}</span>}
      {config.sameRow && config.magenta && <em>{config.magenta}</em>}
    </motion.h1>
    {!config.sameRow && config.magenta && <motion.h1
      className="pdma-title-magenta-row"
      style={{ position: "relative", top: config.magentaRowShift ?? 0 }}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduced ? 0 : .08 }}
    >
      <em>{config.magenta}</em>
    </motion.h1>}
    {config.subtitle && <motion.p
      style={{ marginLeft: config.subtitleX ?? 0 }}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduced ? 0 : .16 }}
    >
      {subtitle}
    </motion.p>}
  </div>;
}
