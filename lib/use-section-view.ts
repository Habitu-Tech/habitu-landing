"use client"

import { useEffect, useRef } from "react"
import { trackSectionView } from "@/lib/gtag"

export function useSectionView<T extends HTMLElement>(name: string) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let fired = false
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired) {
            fired = true
            trackSectionView(name)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [name])

  return ref
}
