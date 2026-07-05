"use client"

import { useState } from "react"
import { DiagonalSection } from "@/components/diagonal-section"

const PERGUNTAS = [
  {
    pergunta: "Preciso saber mexer em sistema pra usar?",
    resposta:
      "Não. Você configura o programa uma vez e no dia a dia é só escanear o QR do cliente e confirmar o selo.",
  },
  {
    pergunta: "O cliente precisa baixar algum app?",
    resposta:
      "Não. O cartão abre direto no navegador do celular. Quem quiser pode salvar na tela inicial, mas não é obrigatório.",
  },
  {
    pergunta: "Funciona pra delivery, não só presencial?",
    resposta:
      "Funciona. Dá pra registrar o selo pelo número do pedido, mesmo sem o cliente estar no balcão.",
  },
  {
    pergunta: "Os selos vencem?",
    resposta:
      "Por padrão, 30 dias sem visita zera os selos. Esse prazo é configurável pro seu negócio.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Tem dois planos, Lite e Pro, com preço fixo por quantidade de cartões. Dá uma olhada na seção de planos aqui em cima da página.",
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <DiagonalSection tone="surface" maxWidth="max-w-3xl" id="duvidas">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Ainda com dúvida?
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Se não responder aqui, é só perguntar direto no WhatsApp.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-surface">
        {PERGUNTAS.map((item, i) => {
          const open = openIndex === i
          return (
            <div key={item.pergunta}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-sm font-bold text-off-white sm:text-base">
                  {item.pergunta}
                </span>
                <ChevronIcon open={open} />
              </button>
              {open && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.resposta}</p>
              )}
            </div>
          )
        })}
      </div>
    </DiagonalSection>
  )
}
