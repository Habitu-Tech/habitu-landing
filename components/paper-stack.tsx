export function PaperStack({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" fill="none" className={className} aria-hidden="true">
      <g opacity="0.5" transform="rotate(-8 60 96)">
        <rect x="14" y="60" width="140" height="88" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      </g>
      <g opacity="0.75" transform="rotate(-3 60 92)">
        <rect x="18" y="52" width="140" height="88" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      </g>
      <g transform="rotate(3 60 88)">
        <rect x="22" y="44" width="140" height="92" rx="10" fill="#111827" stroke="#4B5563" strokeWidth="1.5" />
        <line x1="38" y1="62" x2="98" y2="62" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="72" x2="76" y2="72" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
        {Array.from({ length: 10 }).map((_, i) => {
          const col = i % 5
          const row = Math.floor(i / 5)
          const filled = i < 6
          return (
            <circle
              key={i}
              cx={40 + col * 24}
              cy={98 + row * 24}
              r="8"
              fill={filled ? "#374151" : "none"}
              stroke="#4B5563"
              strokeWidth="1.5"
            />
          )
        })}
      </g>
    </svg>
  )
}
