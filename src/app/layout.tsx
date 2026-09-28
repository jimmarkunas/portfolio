import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { PageViewTracker } from "@/components/analytics/PageViewTracker"
import { StructuredData } from "@/components/seo/StructuredData"
import {
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_OG_IMAGE,
  SEO_PERSON_NAME,
  SEO_SITE_URL,
} from "@/lib/seo"
import { createSiteStructuredData } from "@/lib/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#F3F3F3]`}>
      <body className="bg-[#F3F3F3]">
        <StructuredData data={createSiteStructuredData()} />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
