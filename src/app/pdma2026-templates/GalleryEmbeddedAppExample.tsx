"use client";

import { useState, type KeyboardEvent } from "react";
import "../pdma2026/exercise/pdmaScenarioExercise.css";

/** Gallery-owned harmless slot fixture. Its opening frame is the accepted frozen exemplar. */
export function GalleryEmbeddedAppExample() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(false);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => { event.stopPropagation(); event.nativeEvent.stopImmediatePropagation(); };
  if (step === 0) return <section onKeyDown={onKeyDown} className="pdmax pdmax--intro" aria-labelledby="pdmax-title" data-frame="intro">
    <header className="pdmax__intro-head"><div>
      <p className="pdmax__eyebrow">Audience challenge</p>
      <h2 id="pdmax-title" className="pdmax__intro-title">Can You Get This Agent Into Production?</h2>
      <p className="pdmax__intro-name">Customer Order Exception Agent</p>
      <p className="pdmax__subtitle">Redesign the Customer Order Exception Agent and see whether it passes the A.G.E.N.T.S. gate.</p>
    </div><div className="pdmax__badge"><span>Assessment</span><strong>9 steps · guided challenge</strong></div></header>
    <div className="pdmax__intro-body"><p className="pdmax__intro-kicker">The Challenge</p>
      <p className="pdmax__intro-lead">Test your agent’s controls + the foundation beneath them.</p>
      <button type="button" className="pdmax__button is-primary pdmax__start" onClick={() => setStep(1)}>Start Challenge <span aria-hidden="true">→</span></button>
    </div>
  </section>;

  if (step <= 9) return <section onKeyDown={onKeyDown} className="pdmax" data-frame={`step-${step}`}>
    <header className="pdmax__header"><div className="pdmax__scenario"><p className="pdmax__eyebrow">Gallery interaction example</p><h2 className="pdmax__title">A Harmless Registered Slot</h2><p className="pdmax__subtitle">Choose an option to move through the sample workflow.</p></div><div className="pdmax__identity"><span className="pdmax__step">{step} / 9</span></div></header>
    <div className="pdmax__stage"><p className="pdmax__question">{step <= 2 ? "Is the foundation ready?" : step === 3 ? "Choose a sample value." : `Sample control ${step - 3}`}</p>
      <div className="pdmax__choices pdmax__choices--2">{["YES", "NO"].map((choice) => <button key={choice} type="button" aria-label={choice} className="pdmax__choice pdmax__choice--answer" aria-pressed={selected && choice === "YES"} onClick={() => setSelected(true)}><strong>{choice}</strong><span>Sample response</span></button>)}</div>
    </div><footer className="pdmax__footer"><span className="pdmax__label">DEMO DATA ONLY</span><button type="button" className="pdmax__button is-primary" onClick={() => { setSelected(false); setStep(step + 1); }}>Next Step</button></footer>
  </section>;

  if (step === 10) return <section onKeyDown={onKeyDown} className="pdmax pdmax--result" data-frame="decision" data-decision="GO WITH CONDITIONS"><header className="pdmax__header"><div className="pdmax__scenario"><p className="pdmax__eyebrow">Gallery interaction example</p><h2 className="pdmax__title">Sample Decision</h2></div></header><div className="pdmax__stage"><p className="pdmax__question">The example workflow is complete.</p></div><footer className="pdmax__footer"><button type="button" className="pdmax__button" onClick={() => setStep(0)}>Reset</button><button type="button" className="pdmax__button is-primary" onClick={() => setStep(11)}>BUILD MY PRODUCTIZATION BRIEF</button></footer></section>;

  return <section onKeyDown={onKeyDown} className="pdmax pdmax--brief" data-frame="brief"><header className="pdmax__brief-head"><h2 className="pdmax__title">Sample Productization Brief</h2></header><div className="pdmax__brief-body"><p>This gallery-only fixture demonstrates a registered interactive slot. No production exercise data is used.</p></div><footer className="pdmax__footer"><button type="button" className="pdmax__button is-primary" onClick={() => setStep(10)}>Back to Sample Decision</button></footer></section>;
}
