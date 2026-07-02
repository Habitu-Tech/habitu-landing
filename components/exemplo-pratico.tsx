import { DiagonalSection } from "@/components/diagonal-section"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

const MENSAGENS = [
  "Oi Marina! Seu selo do Restaurante Vila Verde entrou 🍽️ Faltam 3 pra ganhar 1 sobremesa grátis.",
  "Você zerou o cartão! 🎉 Já pode resgatar sua sobremesa grátis com a gente.",
  "Faz 23 dias que você não aparece por aqui. Seus selos vencem em 7 dias 👀",
]

const FATOS = [
  { valor: "10 refeições", label: "= 1 sobremesa grátis, do jeito que o restaurante configurou (você define o seu)" },
  { valor: "30 dias", label: "pra usar os selos antes de zerar (também dá pra ajustar)" },
  { valor: "0", label: "apps que o cliente precisa baixar pra participar" },
]

export function ExemploPratico() {
  return (
    <DiagonalSection tone="surface">
      <div className="mb-12 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-wide text-amber">Na prática</p>
        <h2 className="mt-2 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold text-off-white">
          Assim funciona no Restaurante Vila Verde
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Você define quantos selos valem um prêmio, o cliente escaneia o QR na mesa ou no caixa,
          e o WhatsApp cuida do resto, do primeiro selo até o resgate.
        </p>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <dl className="flex flex-col gap-6">
            {FATOS.map((f) => (
              <div key={f.label}>
                <dt className="font-display text-2xl font-extrabold text-mint">{f.valor}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <WhatsAppBubble mensagens={MENSAGENS} titulo="WhatsApp do Restaurante Vila Verde" />
      </div>
    </DiagonalSection>
  )
}
