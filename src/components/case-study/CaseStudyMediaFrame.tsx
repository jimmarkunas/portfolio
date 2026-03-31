import type { CaseStudyMedia } from "@/components/case-study/types"
import { DeferredMediaReactDiagram } from "@/components/case-study/template/visuals/deferred/DeferredDiagramVisual"
import { DeferredNylVelocityChart } from "@/components/case-study/template/visuals/deferred/DeferredNylVelocityChart"

type CaseStudyMediaFrameProps = {
  media: CaseStudyMedia
  className?: string
  frameClassName?: string
}

export function CaseStudyMediaFrame({
  media,
  className = "",
  frameClassName = "",
}: CaseStudyMediaFrameProps) {
  if (media.kind === "react-diagram") {
    return (
      <div className={`w-full overflow-hidden ${className}`.trim()}>
        {media.component === "bi-data-silos" && (
          <DeferredMediaReactDiagram
            component="bi-data-silos"
            eager
            minHeightClassName="min-h-[320px] md:min-h-[360px]"
            loadingLabel="Loading diagram..."
          />
        )}
        {media.component === "nyl-velocity-chart" && (
          <DeferredNylVelocityChart />
        )}
      </div>
    )
  }

  const aspectClassName = media.aspectRatio === "9/16" ? "aspect-[9/16]" : "aspect-video"

  if (media.kind === "youtube") {
    return (
      <div className={`${aspectClassName} w-full overflow-hidden ${className}`.trim()}>
        <iframe
          src={`https://www.youtube.com/embed/${media.videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  if (media.kind === "video") {
    return (
      <div className={`${aspectClassName} w-full overflow-hidden ${className}`.trim()}>
        <video
          src={media.src}
          controls
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  if (media.kind === "image") {
    return (
      <div className={`${aspectClassName} w-full overflow-hidden ${className}`.trim()}>
        <img
          src={media.src}
          alt={media.alt}
          className="w-full h-full object-cover block"
        />
      </div>
    )
  }

  return (
    <div className={`${aspectClassName} w-full overflow-hidden ${className}`.trim()}>
      <div
        className={`relative flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(27,33,45,0.9)_0%,_rgba(18,18,18,0.98)_55%,_#141414_100%)] ${frameClassName}`.trim()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,122,203,0.22)_0,transparent_45%)]" />
        <div className="relative mx-auto flex max-w-[420px] flex-col items-center justify-center gap-4 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/14 backdrop-blur-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 6.5V17.5L17 12L8 6.5Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="type-p2 text-white">{media.title}</div>
            <div className="type-p4 mt-1 text-white/65">{media.subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
