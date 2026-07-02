"use client"

import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  BUSINESS_TYPES,
  buildWhatsAppLink,
  buildWhatsAppMessage,
  formatBrazilPhone,
  isValidBrazilPhone,
  normalizeBrazilPhone,
} from "@/lib/whatsapp"

function CheckCircle() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/15 text-mint">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4.5 12.5l4.5 4.5L19.5 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function LeadFormModal({
  open,
  origem,
  onClose,
}: {
  open: boolean
  origem: string
  onClose: () => void
}) {
  const [nome, setNome] = useState("")
  const [nomeNegocio, setNomeNegocio] = useState("")
  const [tipoNegocio, setTipoNegocio] = useState<string>(BUSINESS_TYPES[0])
  const [whatsapp, setWhatsapp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    dialogRef.current?.querySelector<HTMLElement>("input, select")?.focus()
    document.body.style.overflow = "hidden"

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
      previouslyFocused?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  function handleClose() {
    onClose()
    setNome("")
    setNomeNegocio("")
    setTipoNegocio(BUSINESS_TYPES[0])
    setWhatsapp("")
    setEnviado(false)
    setErro(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return

    if (!isValidBrazilPhone(whatsapp)) {
      setErro("Confere o número, falta dígito.")
      return
    }

    setErro(null)
    setSubmitting(true)

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          nomeNegocio,
          tipoNegocio,
          whatsapp: normalizeBrazilPhone(whatsapp),
          origem,
        }),
      })
      if (!response.ok) throw new Error("save-failed")
      setEnviado(true)
    } catch {
      setErro("Não rolou salvar agora. Tenta de novo em alguns segundos.")
    } finally {
      setSubmitting(false)
    }
  }

  function handleWhatsAppAgora() {
    const message = buildWhatsAppMessage(nome, nomeNegocio, tipoNegocio)
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer")
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <button
        aria-label="Fechar"
        onClick={handleClose}
        className="absolute inset-0 bg-night/80 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md rounded-t-3xl border border-border bg-surface p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:rounded-3xl sm:p-8"
      >
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border2 sm:hidden" />

        {enviado ? (
          <div className="flex flex-col items-center py-4 text-center">
            <CheckCircle />
            <h2 id={titleId} className="mt-4 font-display text-xl font-extrabold text-off-white">
              Recebemos seu contato!
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Um representante do Habbitu vai te chamar no WhatsApp{" "}
              <span className="text-off-white">{whatsapp}</span> em breve pra entender seu
              negócio.
            </p>
            <button
              type="button"
              onClick={handleWhatsAppAgora}
              className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-mint px-6 py-3 text-base font-semibold text-night transition-transform active:scale-95"
            >
              Prefiro chamar agora
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 text-sm font-medium text-muted hover:text-off-white"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="font-display text-xl font-extrabold text-off-white">
              Vamos conversar no WhatsApp
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Deixa seu contato que um representante do Habbitu te chama por lá.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="text-xs font-medium text-muted">
                  Seu nome
                </label>
                <input
                  id="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ana Silva"
                  className="rounded-md border border-border2 bg-night px-4 py-3 text-base text-off-white placeholder:text-muted focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="whatsapp" className="text-xs font-medium text-muted">
                  Seu WhatsApp
                </label>
                <input
                  id="whatsapp"
                  required
                  type="tel"
                  inputMode="numeric"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatBrazilPhone(e.target.value))}
                  placeholder="(92) 98888-7777"
                  className="rounded-md border border-border2 bg-night px-4 py-3 text-base text-off-white placeholder:text-muted focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="nomeNegocio" className="text-xs font-medium text-muted">
                  Nome do seu negócio
                </label>
                <input
                  id="nomeNegocio"
                  required
                  value={nomeNegocio}
                  onChange={(e) => setNomeNegocio(e.target.value)}
                  placeholder="Restaurante Vila Verde"
                  className="rounded-md border border-border2 bg-night px-4 py-3 text-base text-off-white placeholder:text-muted focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="tipoNegocio" className="text-xs font-medium text-muted">
                  Tipo de negócio
                </label>
                <select
                  id="tipoNegocio"
                  required
                  value={tipoNegocio}
                  onChange={(e) => setTipoNegocio(e.target.value)}
                  className="rounded-md border border-border2 bg-night px-4 py-3 text-base text-off-white focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20"
                >
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {erro && <p className="text-sm text-danger">{erro}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-mint px-6 py-3 text-base font-semibold text-night transition-transform active:scale-95 disabled:opacity-70"
              >
                {submitting ? "Enviando..." : "Quero que me chamem"}
              </button>
              <p className="text-center text-xs text-muted">
                Sem spam. É só pra gente te chamar e conversar.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
