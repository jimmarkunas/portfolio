import { PdmaSlideCanvas } from "../../PdmaPresentationShell";
import { PdmaSlideBody } from "../PdmaSlideBody";
import { asset } from "./slideShared";
import { Img, MAGENTA, T } from "../pdmaSlidePrimitives";
import { pdmaGeometry } from "../../pdmaGeometry";

export function Slide05() {
  const g = pdmaGeometry.slide05;

  return (
    <PdmaSlideCanvas>
      <div className="pdma-slide-surface pdma-s05">
        <PdmaSlideBody className="pdma-slide-body-05">
          <Img
            geometry={g.wide}
            className="s05-wide"
            src={asset("slide-05", "51d1a.png")}
            alt=""
            opacity={1}
            style={{ maskImage: "none", WebkitMaskImage: "none" }}
          />
          <Img geometry={g.orb} className="s05-orb" src={asset("slide-05", "9f2f3.png")} alt="" />
          <T geometry={g.unclear} className="s05-unclear">
            UNCLEAR PROBLEM.<br />
            UNCLEAR OWNER.<br />
            UNCLEAR AUTHORITY.
          </T>
          <T geometry={g.equals} className="s05-equals" line={38}>
            =
          </T>
          <T geometry={g.confusion} className="s05-confusion" color={MAGENTA}>
            CONFUSION AT MACHINE SPEED.
          </T>
        </PdmaSlideBody>
      </div>
    </PdmaSlideCanvas>
  );
}
