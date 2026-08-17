export function ReferenceSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={1672}
      height={941}
      draggable={false}
      className="absolute left-0 top-0 block h-[941px] w-[1672px] select-none"
    />
  );
}
