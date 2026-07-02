function WhatsAppGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F5F5F0" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Z" />
    </svg>
  )
}

export function WhatsAppBubble({ mensagens, titulo }: { mensagens: string[]; titulo: string }) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]">
          <WhatsAppGlyph />
        </div>
        <span className="text-xs font-medium text-muted">{titulo}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {mensagens.map((m, i) => (
          <div
            key={i}
            className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-mint/15 px-3.5 py-2.5 text-sm leading-snug text-off-white"
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  )
}
