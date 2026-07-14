import { DiagonalSection } from "@/components/diagonal-section"
import { QrPattern } from "@/components/qr-pattern"

export function Manifesto() {
  return (
    <DiagonalSection tone="night" trackingName="manifesto">
      <div
        className="relative overflow-hidden rounded-2xl border border-mint/20 bg-surface px-6 py-14 text-center shadow-mint sm:px-10"
      >
        <div
          className="pointer-events-none absolute -left-14 -bottom-14 h-56 w-56 text-mint/[0.05]"
          aria-hidden="true"
        >
          <QrPattern />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide text-mint">
            Como a gente pensa fidelidade
          </p>
          <p className="mt-5 font-display text-[clamp(1.5rem,4.5vw,2.6rem)] font-extrabold leading-tight text-off-white">
            Fidelidade não é papelada nem sistema de pontos complicado. É o cliente voltando
            porque lembrou de você.
          </p>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
            Por isso o Habbitu foi feito pra ser simples de configurar e fácil de usar no balcão,
            sem curso e sem manual.
          </p>
        </div>
      </div>
    </DiagonalSection>
  )
}
