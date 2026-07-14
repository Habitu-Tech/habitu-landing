import { DiagonalSection } from "@/components/diagonal-section"
import { IconScan, IconStamp, IconChat, IconGift } from "@/components/icons"

const PASSOS = [
  {
    numero: "01",
    Icon: IconScan,
    titulo: "Cliente compra e escaneia o QR code",
    desc: "O QR fica no balcão ou no quiosque. Sem app pra baixar, abre direto no celular.",
  },
  {
    numero: "02",
    Icon: IconStamp,
    titulo: "Ganha o primeiro selo na hora",
    desc: "Cadastro rápido: nome e WhatsApp. Em segundos o cliente já tem o cartão dele.",
  },
  {
    numero: "03",
    Icon: IconChat,
    titulo: "Junta selo a cada visita",
    desc: "Você escaneia, o selo entra e o cliente recebe um aviso no WhatsApp comemorando.",
  },
  {
    numero: "04",
    Icon: IconGift,
    titulo: "Completa e resgata o prêmio",
    desc: "Ao bater a meta, ele resgata com você e um novo ciclo de fidelidade começa sozinho.",
  },
]

export function ComoFunciona() {
  return (
    <DiagonalSection tone="surface" id="como-funciona" trackingName="como_funciona">
      <div className="mb-14 max-w-xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Simples pra você, direto pro cliente
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Nada de treinar equipe ou explicar app. É escanear, carimbar e deixar o WhatsApp fazer o
          resto.
        </p>
      </div>

      <ol className="relative flex flex-col gap-6">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-border2" aria-hidden="true" />
        {PASSOS.map(({ numero, Icon, titulo, desc }, i) => (
          <li
            key={numero}
            className="relative flex gap-5 rounded-xl border border-border bg-night p-5 shadow-lg shadow-black/20 sm:items-center sm:gap-6 sm:p-6"
          >
            <span
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                i % 2 === 0 ? "border-mint/40 text-mint" : "border-amber/40 text-amber"
              } bg-surface`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <span className="font-display text-xs font-extrabold text-muted">{numero}</span>
              <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-off-white sm:text-lg">
                {titulo}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </DiagonalSection>
  )
}
