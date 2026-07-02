import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Comparacao } from "@/components/comparacao"
import { ComoFunciona } from "@/components/como-funciona"
import { Manifesto } from "@/components/manifesto"
import { ExemploPratico } from "@/components/exemplo-pratico"
import { ParaQuem } from "@/components/para-quem"
import { Faq } from "@/components/faq"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-night">
      <Nav />
      <Hero />
      <TrustBar />
      <Comparacao />
      <ComoFunciona />
      <Manifesto />
      <ExemploPratico />
      <ParaQuem />
      <Faq />
      <CtaFinal />
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
