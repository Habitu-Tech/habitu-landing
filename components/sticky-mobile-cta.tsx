import { SignupCtaButton } from "@/components/signup-cta-button"

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-night/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-sm sm:hidden">
      <SignupCtaButton origem="sticky_mobile" className="w-full">
        Criar conta grátis
      </SignupCtaButton>
    </div>
  )
}
