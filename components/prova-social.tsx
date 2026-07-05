import { DiagonalSection } from "@/components/diagonal-section"

const CLIENTES = [
  {
    nome: "Oka Guaraná da Amazônia",
    local: "Quiosques no Amazonas Shopping e no Parque Dez, em Manaus",
    programa: "10 guaranás = 1 grátis",
    instagram: "oka.guarana",
    fato: "Desde que trocou o cartão de papel, a Oka sabe exatamente quantos carimbos cada cliente tem, sem depender de anotação no balcão.",
    cor: "text-mint",
    borda: "border-mint/30",
  },
  {
    nome: "Geburger",
    local: "Parque Dez de Novembro, em Manaus",
    programa: "10 carimbos = 1 Geburger grátis",
    instagram: "geburgeroficial",
    fato: "No balcão da Geburger, o cliente só mostra o QR code. Ninguém mais perde o cartãozinho de papel.",
    cor: "text-amber",
    borda: "border-amber/30",
  },
]

export function ProvaSocial() {
  return (
    <DiagonalSection tone="night">
      <div className="mb-12 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-wide text-mint">Quem já usa</p>
        <h2 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Negócios reais em Manaus que trocaram o papel pelo Habbitu
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {CLIENTES.map((c) => (
          <div key={c.nome} className={`rounded-xl border ${c.borda} bg-surface p-6`}>
            <p className={`font-display text-lg font-extrabold ${c.cor}`}>{c.nome}</p>
            <p className="mt-1 text-sm text-muted">{c.local}</p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border2 px-3 py-1">
              <span className="text-xs font-medium text-off-white">{c.programa}</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-off-white">{c.fato}</p>

            <a
              href={`https://instagram.com/${c.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${c.cor} hover:opacity-80`}
            >
              @{c.instagram}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </DiagonalSection>
  )
}
