"use client"

import { StampCard } from "@/components/stamp-card"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { QrPattern } from "@/components/qr-pattern"
import { useSectionView } from "@/lib/use-section-view"

function WhatsAppToast() {
  return (
    <div className="absolute -right-4 -top-6 hidden w-56 rotate-3 rounded-xl border border-border bg-surface p-3.5 shadow-2xl sm:block">
      <div className="flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A0F1E" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold text-off-white">Seu Restaurante</p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted">
            +1 selo pra você 🍽️ Faltam 4 pra sobremesa grátis!
          </p>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const ref = useSectionView<HTMLElement>("hero")

  return (
    <section ref={ref} className="relative overflow-hidden px-5 pb-16 pt-16 sm:pt-24">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-mint/[0.06] sm:h-80 sm:w-80"
        aria-hidden="true"
      >
        <QrPattern />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          <span className="text-xs font-medium text-mint">Fidelidade digital pra negócio físico</span>
        </div>

        <h1 className="mx-auto max-w-3xl font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.1] text-off-white">
          O cartãozinho de papel se perde. O Habbitu não.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Seu cliente junta selo escaneando um QR code, sem baixar nenhum app. Você fica com o
          WhatsApp de cada cliente e o poder de chamar ele de volta quando quiser.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppCtaButton origem="hero">Falar com especialista agora</WhatsAppCtaButton>
          <a
            href="#como-funciona"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border2 px-6 py-3 text-base font-medium text-off-white transition-colors hover:border-mint"
          >
            Ver como funciona
          </a>
        </div>

        <div className="relative mt-16 flex flex-col items-center">
          <div className="relative">
            <StampCard
              negocio="Seu Restaurante"
              pessoa="Marina Costa"
              filled={6}
              total={10}
              legenda="Faltam 4 refeições para ganhar 1 sobremesa grátis"
            />
            <WhatsAppToast />
          </div>
          <p className="mt-3 text-xs text-muted">
            Com as cores, o nome e o prêmio do seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}
