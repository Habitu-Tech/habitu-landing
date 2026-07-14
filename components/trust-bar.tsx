import { DiagonalSection } from "@/components/diagonal-section"
import { IconLock, IconBolt, IconChat, IconPhone } from "@/components/icons"

const ITENS = [
  { Icon: IconPhone, label: "Funciona em qualquer celular, sem app pra baixar" },
  { Icon: IconBolt, label: "Programa configurado em minutos" },
  { Icon: IconChat, label: "Notificação automática pelo WhatsApp" },
  { Icon: IconLock, label: "Dados do seu cliente ficam só com você" },
]

export function TrustBar() {
  return (
    <DiagonalSection tone="surface" trackingName="trust_bar">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {ITENS.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/10 text-mint">
              <Icon className="h-5 w-5" />
            </span>
            <p className="text-sm leading-snug text-off-white">{label}</p>
          </div>
        ))}
      </div>
    </DiagonalSection>
  )
}
