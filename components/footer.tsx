import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-4 border-t border-border pb-24 sm:pb-0">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-10 md:flex-row md:justify-between">
        <Image src="/brand/logo-dark.png" alt="Habbitu" width={110} height={37} />
        <div className="flex items-center gap-6">
          <Link href="/privacidade" className="text-sm text-muted transition-colors hover:text-off-white">
            Privacidade
          </Link>
          <Link href="/termos" className="text-sm text-muted transition-colors hover:text-off-white">
            Termos
          </Link>
          <a
            href="mailto:contato@habbitu.com"
            className="text-sm text-muted transition-colors hover:text-off-white"
          >
            Contato
          </a>
        </div>
        <p className="text-sm text-muted/70">© 2026 Habbitu. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
