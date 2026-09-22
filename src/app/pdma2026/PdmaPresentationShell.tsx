"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePresentationFullscreen } from "@/hooks/usePresentationFullscreen";
import { usePresentationNavigation } from "@/hooks/usePresentationNavigation";
import { PresentationTocDialog } from "@/components/presentation/PresentationTocDialog";
import type { PresentationNavigationCopy } from "@/lib/presentation";
import { PdmaTitleBlock } from "./components/PdmaTitleBlock";

const footerLabels = ["HUMAN JUDGMENT COMPOUNDS", "THE NEW PM OPERATING SYSTEM", "AUTHORITY IS A PRODUCT DECISION", "BUILD THE RIGHT OPERATING MODEL"];

export function PdmaSlideCanvas({ children }: { children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState({ scale: 1, left: 0, top: 0 });
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const update = () => {
      const scale = Math.min(stage.clientWidth / 1920, stage.clientHeight / 1080);
      setFrame({ scale, left: (stage.clientWidth - 1920 * scale) / 2, top: (stage.clientHeight - 1080 * scale) / 2 });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  return <div ref={stageRef} className="pdma-canvas-stage"><div className="pdma-logical-canvas" style={{ left: frame.left, top: frame.top, transform: `scale(${frame.scale})` }}>{children}</div></div>;
}

function PdmaHeader({ current, total }: { current: number; total: number }) {
  const reduced = useReducedMotion();
  return <motion.header className="pdma-global-header" initial={reduced ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
    <div className="pdma-global-row"><span className="pdma-global-label">PDMA 2026</span><span className="pdma-global-rail"><motion.i initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: (current + 1) / total }} /></span><span className="pdma-global-right"><b>HUMAN</b><em>•</em><b>MACHINE</b><em>•</em><b>OUTCOME</b></span></div>
  </motion.header>;
}

function PdmaBottomBar({ current, total, footer, navigation, onPrev, onNext, onToc, onFullscreen, isFullscreen }: { current:number; total:number; footer:string; navigation:PresentationNavigationCopy; onPrev:()=>void; onNext:()=>void; onToc:()=>void; onFullscreen:()=>void; isFullscreen:boolean }) {
  const reduced = useReducedMotion();
  return <motion.footer className="pdma-bottom-bar" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
    <div className="pdma-bottom-identity"><img src="/pdma2026/slide-01/canonical-asterisk.svg" alt="" /><i /><span>{footer}</span></div>
    <div className="pdma-bottom-controls"><button onClick={onPrev} aria-label={navigation.previousAriaLabel}><ChevronLeft /></button><button onClick={onNext} aria-label={navigation.nextAriaLabel}><ChevronRight /></button></div>
    <div className="pdma-bottom-right"><button className="pdma-count" onClick={onToc} aria-label={navigation.openTocAriaLabel} aria-haspopup="dialog">{current + 1} / {total}</button><button onClick={onFullscreen} aria-label={navigation.toggleFullscreenAriaLabel}>{isFullscreen ? <Minimize /> : <Maximize />}</button></div>
  </motion.footer>;
}

export function PdmaPresentationShell({ slides, slideTitles, slideIdOrder, navigation }: { slides: React.ReactNode[]; slideTitles:string[]; slideIdOrder:string[]; navigation:PresentationNavigationCopy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = usePresentationFullscreen({ containerRef });
  const { currentSlide, isTocOpen, setIsTocOpen, nextSlide, prevSlide, jumpToSlide } = usePresentationNavigation({ slideCount: slides.length, onToggleFullscreen: toggleFullscreen });
  const reduced = useReducedMotion();
  const footer = footerLabels[Math.min(3, currentSlide)] ?? footerLabels[0];
  return <main ref={containerRef} className="pdma-presentation">
    <div className="pdma-stage"><AnimatePresence mode="wait" initial={false}><motion.div key={currentSlide} className="pdma-slide-layer" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : 0.45, ease: "easeOut" }}>{slides[currentSlide]}</motion.div></AnimatePresence><PdmaTitleBlock slide={currentSlide + 1} /></div>
    <PdmaHeader current={currentSlide} total={slides.length} />
    <PdmaBottomBar current={currentSlide} total={slides.length} footer={footer} navigation={navigation} onPrev={prevSlide} onNext={nextSlide} onToc={() => setIsTocOpen(true)} onFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />
    <PresentationTocDialog dialogId="pdma2026-slide-toc" isOpen={isTocOpen} currentSlide={currentSlide} slideTitles={slideTitles} slideIdOrder={slideIdOrder} totalSlides={slides.length} navCopy={navigation} onClose={() => setIsTocOpen(false)} onJumpToSlide={jumpToSlide} />
  </main>;
}
