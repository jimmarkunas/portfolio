import { useMemo, type ReactNode } from "react";
import type { Pdma2026Content, Pdma2026SlideKey } from "@/content/pdma2026";
import { buildPdma2026SlideRegistry } from "../pdma2026SlideRegistry";
import { Slide02 } from "../components/Slide02";
import { Slide01, Slide03, Slide04, Slide05 } from "../components/Batch01Slides";
import { Slide06, Slide07, Slide08, Slide09 } from "../components/Batch02Slides";
import { Slide10, Slide11, Slide12 } from "../components/Batch03Slides";
import { Slide13, Slide14, Slide15 } from "../components/Batch04Slides";
function renderSlide(key: Pdma2026SlideKey): ReactNode { switch (key) { case "slide-01": return <Slide01 />; case "slide-02": return <Slide02 />; case "slide-03": return <Slide03 />; case "slide-04": return <Slide04 />; case "slide-05": return <Slide05 />; case "slide-06": return <Slide06 />; case "slide-07": return <Slide07 />; case "slide-08": return <Slide08 />; case "slide-09": return <Slide09 />; case "slide-10": return <Slide10 />; case "slide-11": return <Slide11 />; case "slide-12": return <Slide12 />; case "slide-13": return <Slide13 />; case "slide-14": return <Slide14 />; case "slide-15": return <Slide15 />; default: return <div aria-hidden="true" />; } }
export function usePdma2026Slides({ content }: { content: Pdma2026Content }) { const registry = useMemo(() => buildPdma2026SlideRegistry(content), [content]); const slides = useMemo(() => registry.map(({ key }) => renderSlide(key)), [registry]); return { slides, slideTitles: registry.map(({ title }) => title), slideIdOrder: registry.map(({ id }) => id) }; }
