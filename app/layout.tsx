import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Oswald, Roboto } from "next/font/google"

// Initialize the fonts
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HepatoBurn - Support Liver Health & Optimize Metabolism | Natural Supplement",
  description:
    "HepatoBurn is a revolutionary dietary supplement designed to support liver health and optimize your body's natural fat-burning processes. Made with 100% natural ingredients.",
  keywords: "HepatoBurn, liver health, metabolism booster, weight management, natural supplement, fat burning, detox",
  authors: [{ name: "HepatoBurn" }],
  creator: "HepatoBurn",
  publisher: "HepatoBurn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hepatoburn.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "HepatoBurn - Support Liver Health & Optimize Metabolism",
    description:
      "HepatoBurn is a revolutionary dietary supplement designed to support liver health and optimize your body's natural fat-burning processes.",
    url: "https://hepatoburn.com",
    siteName: "HepatoBurn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hepatoburn.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "HepatoBurn Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HepatoBurn - Support Liver Health & Optimize Metabolism",
    description:
      "HepatoBurn is a revolutionary dietary supplement designed to support liver health and optimize your body's natural fat-burning processes.",
    images: ["https://hepatoburn.com/twitter-image.png"],
    creator: "@hepatoburn",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
