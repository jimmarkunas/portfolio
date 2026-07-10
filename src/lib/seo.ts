import type { Metadata } from "next"

export const SEO_PERSON_NAME = "Jim Markunas"
export const SEO_SITE_URL = "https://greatestpmever.com"
export const SEO_DEFAULT_OG_IMAGE = "/jim/hero-jim-01-cutout.png"
export const SEO_DEFAULT_DESCRIPTION =
  "Digital product and program leadership portfolio: commerce transformation, platform modernization, and measurable business outcomes."

type SeoImage = {
  url: string
  width?: number
  height?: number
  alt?: string
}

type BuildPageMetadataInput = {
  title: string
  description: string
  canonicalPath: string
  socialTitle?: string
  image?: SeoImage
  useDefaultImage?: boolean
  robots?: Metadata["robots"]
}

export function withSeoName(pageTitle: string): string {
  const trimmed = pageTitle.trim()
  if (trimmed.length === 0) return SEO_PERSON_NAME
  return `${trimmed} | ${SEO_PERSON_NAME}`
}

export function buildPageMetadata({
  title,
  description,
  canonicalPath,
  socialTitle,
  image,
  useDefaultImage = true,
  robots,
}: BuildPageMetadataInput): Metadata {
  const resolvedImage = image ?? (useDefaultImage
    ? {
        url: SEO_DEFAULT_OG_IMAGE,
        width: 3779,
        height: 3024,
        alt: `${SEO_PERSON_NAME} portfolio preview`,
      }
    : null)

  const resolvedSocialTitle = withSeoName(socialTitle ?? title)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: resolvedSocialTitle,
      description,
      url: canonicalPath,
      ...(resolvedImage
        ? {
            images: [
              {
                url: resolvedImage.url,
                width: resolvedImage.width,
                height: resolvedImage.height,
                alt: resolvedImage.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSocialTitle,
      description,
      ...(resolvedImage ? { images: [resolvedImage.url] } : {}),
    },
    ...(robots ? { robots } : {}),
  }
}
