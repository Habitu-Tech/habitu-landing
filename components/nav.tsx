import Image from "next/image"
import { WhatsAppCtaButton } from "@/components/whatsapp-cta-button"

const LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Dúvidas", href: "#duvidas" },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-night/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Image src="/brand/logo-dark.png" alt="Habbitu" width={130} height={43} priority />
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-off-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <WhatsAppCtaButton origem="nav" className="!px-3 !py-2 !text-xs sm:!px-4 sm:!text-sm">
          Falar com especialista
        </WhatsAppCtaButton>
      </div>
    </nav>
  )
}
