import type { CSSProperties } from "react";
import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { PdmaSlideBody } from "../PdmaSlideBody";
import { pdmaCssGeometry } from "../../pdmaCssGeometry";
import { ImageLayer, Layer, asset } from "./slideShared";

export function Slide04() {
  const { wide, diagram, cards, takeaway } = pdmaCssGeometry.slide04;
  const style = {
    "--pdma-s04-wide-left": `${wide.left}px`, "--pdma-s04-wide-top": `${wide.top}px`, "--pdma-s04-wide-width": `${wide.width}px`, "--pdma-s04-wide-height": `${wide.height}px`, "--pdma-s04-wide-opacity": wide.opacity,
    "--pdma-s04-diagram-left": `${diagram.left}px`, "--pdma-s04-diagram-top": `${diagram.top}px`, "--pdma-s04-diagram-width": `${diagram.width}px`, "--pdma-s04-diagram-height": `${diagram.height}px`,
    "--pdma-s04-cards-left": `${cards.left}px`, "--pdma-s04-cards-top": `${cards.top}px`, "--pdma-s04-cards-width": `${cards.width}px`, "--pdma-s04-cards-gap": `${cards.gap}px`, "--pdma-s04-card-width": `${cards.articleWidth}px`, "--pdma-s04-card-height": `${cards.articleHeight}px`, "--pdma-s04-card-padding-left": `${cards.articlePaddingLeft}px`, "--pdma-s04-card-padding-bottom": `${cards.articlePaddingBottom}px`, "--pdma-s04-card-copy-max-height": `${cards.copyMaxHeight}px`, "--pdma-s04-card-label-left": `${cards.labelLeft}px`, "--pdma-s04-card-label-top": `${cards.labelTop}px`,
    "--pdma-s04-takeaway-left": `${takeaway.left}px`, "--pdma-s04-takeaway-top": `${takeaway.top}px`, "--pdma-s04-takeaway-width": `${takeaway.width}px`, "--pdma-s04-takeaway-height": `${takeaway.height}px`, "--pdma-s04-takeaway-padding-top": `${takeaway.paddingTop}px`,
  } as CSSProperties;
  return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s04" style={style}><PdmaSlideBody className="pdma-slide-body-04"><ImageLayer className="s04-wide" src={asset("slide-04", "0c14e.png")} /><ImageLayer className="s04-diagram" src={asset("slide-04", "bd2f1.png")} delay={.22} /><div className="s04-cards">{[["01","AUTOMATE","AI owns execution of bounded, repeatable work."],["02","AUGMENT","AI improves speed, synthesis, or quality while a human still decides."],["03","HUMAN-OWNED","Judgment, accountability, and authority stays human."]].map(([n,t,d],i)=><Layer key={n} delay={i*.1}><article><small>{n}</small><h2>{t}</h2><p>{d}</p><b>{i===0?"EXECUTION":i===1?"DECISION":"ACCOUNTABILITY"}</b></article></Layer>)}</div><div className="s04-takeaway"><i/>THE GOAL: BUILD THE RIGHT OPERATING MODEL FOR THE WORK.</div></PdmaSlideBody></div></PdmaSlideCanvas>;
}
