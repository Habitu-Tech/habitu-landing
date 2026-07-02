import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
import Script from "next/script"
import { GOOGLE_ADS_ID } from "@/lib/gtag"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Habbitu: o cartão fidelidade que não se perde",
  description:
    "Cartão fidelidade digital pra bar, restaurante, quiosque e salão. Cliente escaneia um QR code, junta selo e ganha prêmio sem baixar app. Fale com a gente no WhatsApp.",
  metadataBase: new URL("https://habbitu.com"),
  openGraph: {
    title: "Habbitu: o cartão fidelidade que não se perde",
    description:
      "Cliente escaneia um QR code, junta selo e ganha prêmio sem baixar app. Fale com a gente no WhatsApp.",
    url: "https://habbitu.com",
    siteName: "Habbitu",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habbitu: o cartão fidelidade que não se perde",
    description: "Cliente escaneia um QR code, junta selo e ganha prêmio sem baixar app.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </html>
  )
}
