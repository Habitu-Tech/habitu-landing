import { DiagonalSection } from "@/components/diagonal-section"

const NEGOCIOS = [
  { emoji: "🍽️", nome: "Restaurantes" },
  { emoji: "🍺", nome: "Bares e lanchonetes" },
  { emoji: "☕", nome: "Cafeterias e padarias" },
  { emoji: "🥤", nome: "Quiosques e food trucks" },
  { emoji: "💈", nome: "Salões e barbearias" },
  { emoji: "🛍️", nome: "Lojas de bairro" },
]

export function ParaQuem() {
  return (
    <DiagonalSection tone="night" id="para-quem">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Se o seu cliente pode voltar, o Habbitu faz sentido
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Feito pra quem atende no salão ou no balcão, sem tempo pra configurar sistema
          complicado.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {NEGOCIOS.map((n) => (
          <div
            key={n.nome}
            className="flex items-center gap-3 rounded-xl border border-border2 bg-surface px-4 py-3.5"
          >
            <span className="text-xl" aria-hidden="true">
              {n.emoji}
            </span>
            <span className="text-sm text-off-white">{n.nome}</span>
          </div>
        ))}
      </div>
    </DiagonalSection>
  )
}
