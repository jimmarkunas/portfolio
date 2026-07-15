import type { CSSProperties } from "react"

export type HighlightArtVariant = "featuredTube" | "whiteCubes" | "blueCube" | "oliveSphere" | "redSphere" | "orangeDisk" | "mintColumn"

export function ArtBlock({
  variant,
  className = "",
}: {
  variant: HighlightArtVariant
  className?: string
}) {
  const styles: Record<HighlightArtVariant, CSSProperties> = {
    featuredTube: {
      background:
        "radial-gradient(circle at 12% 28%, rgba(245,244,234,0.95) 0 6%, transparent 7%), radial-gradient(circle at 85% 22%, rgba(206,191,166,0.55) 0 12%, transparent 13%), linear-gradient(135deg, #6a4d35 0%, #947457 38%, #b19375 64%, #8b6b50 100%)",
    },
    whiteCubes: {
      background:
        "linear-gradient(160deg, #ebe9e4 0%, #f8f6f1 46%, #d8d2c9 100%)",
    },
    blueCube: {
      background:
        "linear-gradient(145deg, #d5e0ea 0%, #b7c8d5 45%, #eff4f8 100%)",
    },
    oliveSphere: {
      background:
        "radial-gradient(circle at 38% 33%, #f7f3e8 0 9%, transparent 10%), linear-gradient(140deg, #81906e 0%, #91a07f 34%, #e3ecd8 35%, #ced7c4 55%, #a6b49a 100%)",
    },
    redSphere: {
      background:
        "radial-gradient(circle at 64% 56%, #e93023 0 7%, #d61912 8%, transparent 9%), linear-gradient(135deg, #e41613 0%, #ff4316 38%, #f3d7ef 39%, #c7b0e2 68%, #eed7f6 100%)",
    },
    orangeDisk: {
      background:
        "radial-gradient(circle at 55% 17%, #f4522d 0 10%, #ff784b 11%, transparent 12%), linear-gradient(135deg, #9fd7e4 0%, #afdce3 28%, #f0a068 29%, #f07f4d 52%, #f8d8c2 100%)",
    },
    mintColumn: {
      background:
        "radial-gradient(circle at 76% 28%, #b8eadc 0 9%, #8fd3c7 10%, transparent 11%), linear-gradient(135deg, #f3ebe0 0%, #e9e3d7 42%, #d7d7d7 43%, #faf3eb 100%)",
    },
  }

  return (
    <div className={`relative overflow-hidden rounded-[10px] ${className}`.trim()} style={styles[variant]}>
      {variant === "featuredTube" ? (
        <>
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[24%] -translate-x-1/2 rounded-t-[34px] rounded-b-[20px] bg-[linear-gradient(180deg,#d8d1bd_0%,#c0ba9f_55%,#d6cdb8_100%)] shadow-[inset_0_0_0_1px_rgba(90,72,52,0.08)]" />
          <div className="absolute bottom-[11%] left-1/2 h-[13%] w-[16%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,#33383f_0_35%,#24272c_36%,#222222_100%)]" />
          <div className="absolute bottom-0 left-[18%] h-[62%] w-[1px] rotate-[-12deg] bg-white/50" />
          <div className="absolute bottom-[8%] right-[14%] h-[58%] w-[1px] rotate-[20deg] bg-white/35" />
        </>
      ) : null}
      {variant === "whiteCubes" ? (
        <>
          <div className="absolute left-[10%] top-[16%] h-[40%] w-[28%] rotate-[24deg] bg-black shadow-[22px_28px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute left-[4%] top-[6%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
          <div className="absolute right-[14%] top-[22%] h-[42%] w-[28%] rotate-[22deg] bg-black shadow-[20px_26px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute right-[8%] top-[13%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
        </>
      ) : null}
      {variant === "blueCube" ? (
        <>
          <div className="absolute bottom-[12%] left-1/2 h-[24%] w-[32%] -translate-x-1/2 bg-[#dce8ef] shadow-[0_12px_28px_rgba(34,34,34,0.14)]" />
          <div className="absolute bottom-[36%] left-[28%] h-[14%] w-[44%] rotate-[8deg] bg-[#edf5fa]" />
        </>
      ) : null}
      {variant === "oliveSphere" ? (
        <>
          <div className="absolute bottom-0 left-[34%] h-[38%] w-[34%] bg-[#d8dcc8]" />
          <div className="absolute bottom-[30%] left-[31%] h-[32%] w-[32%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fffef3_0,#f0eddd_42%,#d6d2bb_100%)] shadow-[0_12px_26px_rgba(34,34,34,0.12)]" />
        </>
      ) : null}
      {variant === "redSphere" ? (
        <>
          <div className="absolute bottom-0 left-[46%] h-[36%] w-[34%] bg-[#a285d1]" />
          <div className="absolute bottom-[28%] left-[48%] h-[22%] w-[22%] rounded-full bg-[radial-gradient(circle_at_38%_32%,#ff6b46_0,#ff2e1e_40%,#d61113_100%)] shadow-[0_10px_22px_rgba(34,34,34,0.16)]" />
          <div className="absolute bottom-0 right-0 h-[18%] w-[28%] rounded-tl-full bg-[#f2d8ea]" />
        </>
      ) : null}
      {variant === "orangeDisk" ? (
        <>
          <div className="absolute bottom-0 left-[40%] h-[48%] w-[28%] bg-[#9ea49b] shadow-[0_12px_24px_rgba(34,34,34,0.14)]" />
          <div className="absolute left-[10%] top-[36%] h-[24%] w-[38%] rounded-full bg-[#273d5a] opacity-75" />
          <div className="absolute left-[52%] top-[10%] h-[26%] w-[22%] rotate-[20deg] rounded-full bg-[#f34f26]" />
        </>
      ) : null}
      {variant === "mintColumn" ? (
        <>
          <div className="absolute bottom-0 left-[14%] h-[28%] w-[34%] bg-[#f7f7f7]" />
          <div className="absolute bottom-0 right-[14%] h-[44%] w-[24%] bg-[#b48b98]" />
          <div className="absolute bottom-[30%] right-[12%] h-[26%] w-[28%] rounded-full bg-[radial-gradient(circle_at_38%_30%,#d5fff0_0,#a8e5d5_46%,#8bcdbf_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[14%] bg-[radial-gradient(circle,#ffffff_18%,transparent_19%)] [background-size:10px_10px] opacity-75" />
        </>
      ) : null}
    </div>
  )
}
