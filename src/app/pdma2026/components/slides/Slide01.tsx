import { motion, useReducedMotion } from "motion/react";
import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { pdmaAssets } from "../../pdmaAssets";
import { pdmaGeometry } from "../../pdmaGeometry";
import { Layer } from "./slideShared";

function AmbientImage({ src, geometry, className, duration, delay = 0, animate }: { src: string; geometry: { x: number; y: number; width: number; height: number }; className: string; duration: number; delay?: number; animate: Record<string, any> }) {
  const reduced = useReducedMotion();
  return <div className={className} style={{ position: "absolute", left: geometry.x, top: geometry.y, width: geometry.width, height: geometry.height, overflow: "visible" }}><motion.img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} initial={false} animate={reduced ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "brightness(1)" } : animate} transition={reduced ? { duration: 0 } : { duration, delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} /></div>;
}

export function Slide01() { const g = pdmaGeometry.slide01; return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s01">
  <AmbientImage src={pdmaAssets.slide01.particleOverlay} geometry={g.particleOverlay} className="s01-particles s01-particles-a" duration={7.5} animate={{ opacity: [.65, .82, .7], x: [0, 2, 0], y: [0, -2, 0] }} />
  <AmbientImage src={pdmaAssets.slide01.particleOverlay} geometry={g.particleOverlay} className="s01-particles s01-particles-b" duration={11.3} delay={2.1} animate={{ opacity: [.25, .42, .28], x: [0, -3, 0], y: [0, 2, 0] }} />
  <AmbientImage src={pdmaAssets.slide01.planetBack} geometry={g.planetBack} className="s01-planet-back" duration={15} animate={{ opacity: [1, 1, 1], x: [0, 2, 0], y: [0, -2, 0], scale: [1, 1.012, 1], filter: ["brightness(1)", "brightness(1.06)", "brightness(1)"] }} />
  <AmbientImage src={pdmaAssets.slide01.planetForeground} geometry={g.planetForeground} className="s01-planet-foreground" duration={17} animate={{ opacity: [.94, 1, .94], scale: [1, 1.006, 1] }} />
  <AmbientImage src={pdmaAssets.slide01.heroAsterisk} geometry={g.heroAsterisk} className="s01-hero-asterisk" duration={14} animate={{ y: [0, -4, 0], scale: [1, 1.004, 1] }} />
  <Layer className="s01-title-white"><h1>THE NEW PM</h1></Layer><Layer className="s01-title-magenta" delay={.08}><h1>OPERATING SYSTEM</h1></Layer><Layer className="s01-subtitle" delay={.16}><p>What stays uniquely human.<br/>What shifts to AI.</p></Layer><motion.i className="s01-speaker-rule" style={{ left: g.speakerRule.x, top: g.speakerRule.y, width: g.speakerRule.width, height: g.speakerRule.height }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .45, delay: .28 }} /><Layer geometry={g.speakerName} className="s01-speaker-name" delay={.3}><strong>Jim Markunas</strong></Layer><Layer geometry={g.speakerRole} className="s01-speaker-role" delay={.36}><span>Head of Product, Bytalos</span></Layer>
 </div></PdmaSlideCanvas>; }
