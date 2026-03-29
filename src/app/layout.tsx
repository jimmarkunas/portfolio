import type { Metadata } from "next"

import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/SiteHeader"

import "./globals.css"

export const metadata: Metadata = {
  title: "Jim Markunas Portfolio",
  description: "Portfolio rebuild",
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
        <div className="flex min-h-screen w-full flex-col bg-[#F3F3F3]">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
