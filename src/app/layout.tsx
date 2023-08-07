import "./globals.css"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "blaketarter.com | TypeScript Developer based in Kansas City, MO",
  description:
    "I'm a TypeScript developer with over nine years of experience planning, creating, and maintaining various types of apps and websites.",
  keywords:
    "typescript, javascript, developer, dev, web, font-end, website, kansas city, react, nextjs, node, programmer",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-icon.png",
  },
  themeColor: "#164BB3",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
