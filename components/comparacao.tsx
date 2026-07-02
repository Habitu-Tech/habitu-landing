import { DiagonalSection } from "@/components/diagonal-section"
import { PaperStack } from "@/components/paper-stack"
import { PhoneStampMock } from "@/components/phone-stamp-mock"
import { ArrowConnector } from "@/components/arrow-connector"

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 3l8 8M11 3l-8 8" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M2.5 7.2l3 3 6-6.4" stroke="#00C16A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const PAPEL = [
  "Perde, rasga ou fica esquecido em casa",
  "Não guarda nome nem WhatsApp de ninguém",
  "Zero dado sobre quem voltou e quem sumiu",
]

const HABBITU = [
  "Vive no celular do cliente, não tem como esquecer",
  "Guarda nome e WhatsApp de cada visita",
  "Mostra quem é fiel e quem parou de vir",
]

export function Comparacao() {
  return (
    <DiagonalSection tone="night">
      <div className="mb-14 max-w-xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Fidelidade de papel, reinventada pro celular
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          O cartãozinho furado continua funcionando. O problema é que ele some da carteira do
          cliente antes de virar hábito.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <PaperStack className="h-36 w-44 sm:h-40 sm:w-52" />
        <ArrowConnector className="h-10 w-20 rotate-90 sm:h-14 sm:w-28 sm:rotate-0" />
        <PhoneStampMock />
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-danger">Cartão de papel</p>
          <ul className="mt-4 flex flex-col gap-3">
            {PAPEL.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1">
                  <XIcon />
                </span>
                <span className="text-sm leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-mint/30 bg-surface p-6 shadow-mint">
          <p className="text-xs font-medium uppercase tracking-wide text-mint">Habbitu</p>
          <ul className="mt-4 flex flex-col gap-3">
            {HABBITU.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1">
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed text-off-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DiagonalSection>
  )
}
