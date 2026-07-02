import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"
import { QrPattern } from "@/components/qr-pattern"
import { DiagonalSection } from "@/components/diagonal-section"

export function CtaFinal() {
  return (
    <DiagonalSection tone="night">
      <div className="relative overflow-hidden rounded-2xl border border-mint/30 bg-surface p-10 text-center sm:p-14">
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 text-mint/[0.07]"
          aria-hidden="true"
        >
          <QrPattern />
        </div>
        <div className="relative">
          <h2 className="mx-auto max-w-md font-display text-[clamp(1.5rem,4vw,2.2rem)] font-extrabold text-off-white">
            Vamos ver se faz sentido pro seu negócio?
          </h2>
          <p className="mx-auto mt-3 max-w-sm leading-relaxed text-muted">
            Sem formulário longo, sem contrato na hora. É uma conversa no WhatsApp pra entender
            como o Habbitu se encaixa no seu dia a dia.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCtaButton origem="cta_final">Falar com especialista</WhatsAppCtaButton>
          </div>
        </div>
      </div>
    </DiagonalSection>
  )
}
