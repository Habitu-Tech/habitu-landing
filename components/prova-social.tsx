import Image from "next/image"
import { DiagonalSection } from "@/components/diagonal-section"

const CLIENTES = [
  {
    nome: "Oka Guaraná da Amazônia",
    logo: "/clients/oka-guarana.jpg",
    local: "Quiosques no Amazonas Shopping e no Parque Dez, em Manaus",
    programa: "10 guaranás = 1 grátis",
    instagram: "oka.guarana",
    fato: 'A Oka Guaraná da Amazônia foi um dos primeiros negócios a rodar o Habbitu no balcão. Com quiosques no Amazonas Shopping e no Parque Dez, o fluxo de clientes é grande, e antes o carimbo dependia do cartãozinho de papel, que se perdia com frequência. Hoje, cada guaraná vendido gera um selo direto no celular do cliente, sem fila e sem papel. Com o programa "10 guaranás = 1 grátis", a equipe sabe exatamente quantos selos cada cliente tem, e o cliente sabe exatamente quanto falta pra ganhar o próximo.',
    cor: "text-mint",
    borda: "border-mint/30",
  },
  {
    nome: "Geburger",
    logo: "/clients/geburger.png",
    local: "Parque Dez de Novembro, em Manaus",
    programa: "10 carimbos = 1 Geburger grátis",
    instagram: "geburgeroficial",
    fato: 'A Geburger, no Parque Dez de Novembro, é uma hamburgueria que entrega novidade a cada mordida desde 2020. No balcão, o cliente só mostra o QR code do celular e o selo entra na hora, sem carimbo de papel pra guardar na carteira. Com o programa "10 carimbos = 1 Geburger grátis", quem janta ali sabe exatamente o que está ganhando a cada visita, e a casa não perde o controle de quem é cliente frequente.',
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
            <div className="h-16 w-16 overflow-hidden rounded-lg">
              <Image
                src={c.logo}
                alt={`Logo da ${c.nome}`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>

            <p className={`mt-4 font-display text-lg font-extrabold ${c.cor}`}>{c.nome}</p>
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
