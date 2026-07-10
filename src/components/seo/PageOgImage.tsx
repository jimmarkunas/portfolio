import { ImageResponse } from "next/og"

type PageOgImageOptions = {
  eyebrow: string
  title: string
  subtitle: string
  accent?: string
}

export const pageOgImageSize = {
  width: 1200,
  height: 630,
} as const

export const pageOgImageContentType = "image/png"

export function createPageOgImage({
  eyebrow,
  title,
  subtitle,
  accent = "#447ACB",
}: PageOgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F3F3",
          color: "#222222",
          padding: "56px 64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#4B5154",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: accent,
            }}
          />
          <span>{eyebrow}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
              fontWeight: 500,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#4B5154",
              maxWidth: "920px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid rgba(34, 34, 34, 0.08)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#4B5154",
              }}
            >
              Jim Markunas
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                letterSpacing: "-0.03em",
                color: "#222222",
              }}
            >
              Digital Product & Program Leader
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 160,
              height: 160,
              borderRadius: 999,
              border: "4px solid rgba(34, 34, 34, 0.06)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #E8EEF8 100%)",
              alignItems: "center",
              justifyContent: "center",
              color: accent,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            JM
          </div>
        </div>
      </div>
    ),
    pageOgImageSize
  )
}
