import type { Metadata } from "next"
import { Suspense } from "react"

import "./globals.css"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { PageViewTracker } from "@/components/analytics/PageViewTracker"
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_OG_IMAGE,
  SEO_PERSON_NAME,
  SEO_SITE_URL,
} from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(SEO_SITE_URL),
  title: {
    default: `${SEO_PERSON_NAME} | Digital Product & Program Leader`,
    template: `%s | ${SEO_PERSON_NAME}`,
  },
  description: SEO_DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SEO_PERSON_NAME,
    images: [
      {
        url: SEO_DEFAULT_OG_IMAGE,
        width: 3779,
        height: 3024,
        alt: `${SEO_PERSON_NAME} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [SEO_DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#F3F3F3]">
      <body className="bg-[#F3F3F3]">
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
