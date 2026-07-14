"use client"

import { useState } from "react"
import { LeadFormModal } from "@/components/lead-form-modal"
import { trackCtaClick } from "@/lib/gtag"

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.03.28-3.46-.72-2.9-1.2-4.77-4.15-4.92-4.34-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.28.58-.35.77-.35.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.83 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.28.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  )
}

export function WhatsAppCtaButton({
  origem,
  children,
  variant = "primary",
  className = "",
}: {
  origem: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}) {
  const [open, setOpen] = useState(false)

  function handleOpen() {
    trackCtaClick(origem)
    setOpen(true)
  }

  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-base font-semibold transition-transform active:scale-95"
  const styles =
    variant === "primary"
      ? "bg-mint text-night hover:bg-mint-dark shadow-mint"
      : "border border-border2 text-off-white hover:border-mint"

  return (
    <>
      <button type="button" onClick={handleOpen} className={`${base} ${styles} ${className}`}>
        <WhatsAppIcon />
        {children}
      </button>
      <LeadFormModal open={open} origem={origem} onClose={() => setOpen(false)} />
    </>
  )
}
