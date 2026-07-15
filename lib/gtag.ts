export const GOOGLE_ADS_ID = "AW-17714606262"
export const GA4_ID = "G-9W26NGRZN1"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function sendGAEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", name, params)
}

export function trackCtaClick(origem: string) {
  sendGAEvent("cta_click", { origem })
}

export function trackSectionView(section: string) {
  sendGAEvent("section_view", { section })
}

export function trackFaqOpen(pergunta: string) {
  sendGAEvent("faq_open", { pergunta })
}
