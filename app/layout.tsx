import type { Metadata } from "next"
import { Syne, Inter } from "next/font/google"
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
  title: "Habbitu — Cartão Fidelidade Digital",
  description: "Crie seu programa de fidelidade digital em minutos. Seus clientes acumulam carimbos pelo WhatsApp, sem app para baixar.",
  metadataBase: new URL("https://habbitu.com"),
  openGraph: {
    title: "Habbitu — Cartão Fidelidade Digital",
    description: "Crie seu programa de fidelidade digital em minutos.",
    url: "https://habbitu.com",
    siteName: "Habbitu",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
