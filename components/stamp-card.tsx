function StampDot({ filled }: { filled: boolean }) {
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
        filled ? "bg-mint" : "border border-border2 bg-border2/30"
      }`}
    >
      {filled && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1.5l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.41L4.31 9.8l.51-3L2.64 4.67l3.01-.44L7 1.5z"
            fill="#0A0F1E"
          />
        </svg>
      )}
    </div>
  )
}

export function StampCard({
  negocio,
  pessoa,
  filled,
  total,
  legenda,
}: {
  negocio: string
  pessoa: string
  filled: number
  total: number
  legenda: string
}) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 text-left">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="mb-0.5 text-xs text-muted">{negocio}</p>
          <p className="font-display text-lg font-bold text-off-white">{pessoa}</p>
        </div>
        <div className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1">
          <span className="text-xs font-medium text-mint">
            {filled}/{total} selos
          </span>
        </div>
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(total, 5)}, 1fr)` }}>
        {Array.from({ length: total }).map((_, i) => (
          <StampDot key={i} filled={i < filled} />
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">{legenda}</p>
    </div>
  )
}
