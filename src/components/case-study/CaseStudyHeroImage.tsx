type CaseStudyHeroImageProps = {
  src: string
  alt: string
}

export function CaseStudyHeroImage({ src, alt }: CaseStudyHeroImageProps) {
  return (
    <div className="relative left-1/2 mt-2 h-[582px] w-screen -translate-x-1/2 md:mt-6 lg:left-0 lg:mt-[44px] lg:w-full lg:translate-x-0">
      <div className="relative h-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 grayscale"
        />
      </div>
    </div>
  )
}
