import type { Metadata } from "next"

import "./globals.css"

const SITE_URL = "https://greatestpmever.com"
const DEFAULT_OG_IMAGE = "/jim/hero-jim-01-cutout.png"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "James Markunas | Digital Product & Program Leader",
    template: "%s | James Markunas",
  },
  description:
    "Digital product and program leadership portfolio: commerce transformation, platform modernization, and measurable business outcomes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "James Markunas",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3779,
        height: 3024,
        alt: "James Markunas portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
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
        {children}
      </body>
    </html>
  )
}
