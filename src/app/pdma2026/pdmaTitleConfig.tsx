import type { ReactNode } from "react";
export type PdmaTitleConfig = {
  white?: string;
  magenta?: ReactNode;
  subtitle?: ReactNode;
  size: number;
  leading?: number;
  tracking?: number;
  subtitleSize?: number;
  subtitleLeading?: number;
  subtitleOffset?: number;
  subtitleX?: number;
  subtitleTracking?: number;
  exactSubtitleSize?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  magentaRowShift?: number;
  magentaX?: number;
  sameRow?: boolean;
};
const standard = { size: 82, leading: 88, tracking: -2.4 };
export const titleConfig: Record<number, PdmaTitleConfig> = {
1:{white:"THE NEW PM",magenta:"OPERATING SYSTEM",subtitle:<>What stays uniquely human.<br/>What shifts to AI.</>,size:82,leading:88,tracking:-2.4,subtitleSize:30,subtitleLeading:36},
2:{...standard,white:"WHAT SHIFTS.",magenta:"WHAT STAYS.",subtitle:<>AI automates the grunt work.<br/>It does not change who owns the product outcome.</>,subtitleSize:38},
3:{...standard,white:"COPILOTS GENERATE OUTPUTS.",magenta:"AGENTS TAKE ACTION.",subtitle:<>When AI can act in enterprise systems, product design must account for<br/>authority, consequence, and control.</>,subtitleSize:29,subtitleLeading:42},
4:{...standard,white:"DON'T AUTOMATE",magenta:"EVERYTHING.",subtitle:<>Decide what problem deserves automation,<br/>what outcome matters, and what tradeoffs you’re willing to accept.</>,subtitleSize:31,subtitleLeading:40},
5:{...standard,white:"DON'T AUTOMATE",magenta:"AMBIGUITY",tracking:-5},
6:{white:"UNDERSTAND THE ENVIRONMENT.",magenta:"NAME THE OWNERS.",subtitle:<>AI inherits systems, data, permissions, dependencies, and failure modes —<br/>while autonomous actions still cross human ownership boundaries.</>,size:64,leading:70,tracking:0,subtitleSize:29,subtitleLeading:36,subtitleOffset:17,subtitleX:50,subtitleTracking:0,exactSubtitleSize:true,titleColor:"#f2f2f2",subtitleColor:"#f2f2f2",magentaRowShift:-2},
7:{...standard,white:"BEFORE YOU BUILD IT,",magenta:"PROVE THE VALUE.",subtitle:"Every Agentic Product should have a clear economic reason to exist. Pick one primary value driver.",subtitleSize:27,subtitleLeading:36},8:{...standard,white:"HOW MUCH AUTHORITY",magenta:"SHOULD THE ROBOTS HAVE?",subtitle:<>The farther AI moves from observing to acting, the more deliberately<br/>the Product Manager has to design the boundary.</>,subtitleSize:26},
9:{...standard,white:"LIVE SCENARIO:",magenta:"RETENTION AGENT.",subtitle:"A real enterprise business case: detect churn risk across CRM, product-usage, and support data before it is too late to act.",subtitleSize:29},10:{...standard,white:"DESIGN PRODUCTION READINESS",magenta:"INTO THE FEATURE.",subtitle:<>Guardrails, human intervention, and success measures belong in the product<br/>requirements before development begins.</>,subtitleSize:24},
11:{...standard,magenta:"A.G.E.N.T.S.",subtitle:"Six product questions that turn an Agentic AI idea into something a team can safely build, test, and operate.",subtitleSize:29},12:{...standard,white:"TURN THE FRAMEWORK",magenta:"INTO PRODUCT.",subtitle:"A.G.E.N.T.S. changes how you write your backlog.",subtitleSize:24},
13:{...standard,white:"AN IDEA + AI",magenta:"≠ PRODUCT SPEC.",subtitle:"Same starting point. Different outcomes.",subtitleSize:30,sameRow:true,magentaX:659},14:{...standard,white:"NOW YOU",magenta:"DO IT.",subtitle:"Turn an AI idea into a mini productization brief you can take back to work.",subtitleSize:30,sameRow:true,magentaX:700},15:{...standard,white:"TURN AI CAPABILITY",magenta:"INTO PRODUCT VALUE.",subtitle:"Start with the business case. Define the authority. Productize the controls. Measure the outcome.",subtitleSize:30}};
