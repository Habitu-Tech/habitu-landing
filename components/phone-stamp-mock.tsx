export function PhoneStampMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[190px] rounded-[2rem] border-[5px] border-border2 bg-night p-1.5 shadow-2xl ${className}`}
    >
      <div className="absolute left-1/2 top-3 h-1 w-10 -translate-x-1/2 rounded-full bg-border2" />
      <div className="rounded-[1.5rem] bg-surface px-4 pb-5 pt-7">
        <p className="text-center text-[10px] font-medium text-muted">Seu cartão</p>
        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                i < 6 ? "bg-mint" : "border border-border2 bg-border2/30"
              }`}
            >
              {i < 6 && (
                <svg width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 1.5l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.41L4.31 9.8l.51-3L2.64 4.67l3.01-.44L7 1.5z"
                    fill="#0A0F1E"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[9px] leading-snug text-muted">Faltam 4 pra ganhar o prêmio</p>
      </div>
    </div>
  )
}
