"use client"

import Link from "next/link"
import { signupUrl } from "@/lib/app-url"
import { trackCtaClick } from "@/lib/gtag"

export function SignupCtaButton({
  origem,
  plano,
  children,
  variant = "primary",
  className = "",
}: {
  origem: string
  plano?: "lite" | "pro"
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}) {
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-base font-semibold transition-transform active:scale-95"
  const styles =
    variant === "primary"
      ? "bg-mint text-night hover:bg-mint-dark shadow-mint"
      : "border border-border2 text-off-white hover:border-mint"

  return (
    <Link
      href={signupUrl(plano)}
      onClick={() => trackCtaClick(origem)}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  )
}
