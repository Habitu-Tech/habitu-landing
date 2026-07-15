import { DiagonalSection } from "@/components/diagonal-section"
import { SignupCtaButton } from "@/components/signup-cta-button"

const PLANOS = [
  {
    nome: "Gratuito",
    plano: undefined,
    preco: "0",
    cta: "Começar grátis",
    beneficios: [
      "Uma campanha de teste",
      "Emita até 10 cartões por mês",
      "Mensagens ilimitadas",
      "Não precisa de cartão de crédito",
    ],
    destaque: false,
  },
  {
    nome: "Lite",
    plano: "lite" as const,
    preco: "24",
    cta: "Assinar Lite",
    beneficios: [
      "Uma campanha",
      "Emita até 500 cartões por mês",
      "Mensagens ilimitadas",
      "Cancele quando quiser, sem multas",
    ],
    destaque: false,
  },
  {
    nome: "Pro",
    plano: "pro" as const,
    preco: "49",
    cta: "Assinar Pro",
    beneficios: [
      "Uma campanha",
      "Emita até 3000 cartões por mês",
      "Mensagens ilimitadas",
      "Cancele quando quiser, sem multas",
    ],
    destaque: true,
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M2.5 7.2l3 3 6-6.4"
        stroke="#00C16A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Planos() {
  return (
    <DiagonalSection tone="surface" id="planos" trackingName="planos">
      <div className="mb-12 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-wide text-mint">Planos</p>
        <h2 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Escolha o tamanho do seu negócio
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Preço fixo por quantidade de cartões, sem letra pequena.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANOS.map((p) => (
          <div
            key={p.nome}
            className={`relative flex flex-col rounded-xl border p-7 ${
              p.destaque ? "border-mint bg-night shadow-mint" : "border-border bg-night"
            }`}
          >
            {p.destaque && (
              <span className="absolute -top-3 left-6 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-night">
                Mais popular
              </span>
            )}
            <p className={`text-sm font-medium uppercase tracking-wide ${p.destaque ? "text-mint" : "text-muted"}`}>
              {p.nome}
            </p>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-3xl font-extrabold text-off-white">R$ {p.preco}</span>
              <span className="text-sm text-muted">/mês</span>
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {p.beneficios.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-1">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <SignupCtaButton origem={`planos_${p.nome.toLowerCase()}`} plano={p.plano} className="w-full">
                {p.cta}
              </SignupCtaButton>
            </div>
          </div>
        ))}
      </div>
    </DiagonalSection>
  )
}
