import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { PdmaSlideBody } from "../PdmaSlideBody";
import { asset } from "./slideShared";

export function Slide05() { return <PdmaSlideCanvas><div className="pdma-slide-surface pdma-s05"><PdmaSlideBody className="pdma-slide-body-05"><img className="s05-wide" src={asset("slide-05", "51d1a.png")} alt=""/><img className="s05-orb" src={asset("slide-05", "9f2f3.png")} alt=""/><div className="s05-unclear">UNCLEAR PROBLEM.<br/>UNCLEAR OWNER.<br/>UNCLEAR AUTHORITY.</div><b className="s05-equals">=</b><strong className="s05-confusion">CONFUSION AT MACHINE SPEED.</strong></PdmaSlideBody></div></PdmaSlideCanvas>; }
