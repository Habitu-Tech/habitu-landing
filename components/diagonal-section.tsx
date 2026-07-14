"use client"

import { useSectionView } from "@/lib/use-section-view"

const TONES = {
  night: "bg-night",
  surface: "bg-surface",
}

export function DiagonalSection({
  children,
  tone = "night",
  diagonal = true,
  id,
  maxWidth = "max-w-5xl",
  className = "",
  trackingName,
}: {
  children: React.ReactNode
  tone?: keyof typeof TONES
  diagonal?: boolean
  id?: string
  maxWidth?: string
  className?: string
  trackingName?: string
}) {
  const ref = useSectionView<HTMLDivElement>(trackingName ?? "")

  return (
    <div
      ref={trackingName ? ref : undefined}
      id={id}
      className={`relative scroll-mt-20 ${TONES[tone]}`}
      style={diagonal ? { clipPath: "polygon(0 40px, 100% 0, 100% 100%, 0 100%)" } : undefined}
    >
      <div className={`mx-auto ${maxWidth} px-5 ${diagonal ? "pt-20" : "pt-16"} pb-20 ${className}`}>
        {children}
      </div>
    </div>
  )
}
