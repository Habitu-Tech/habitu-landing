export const GOOGLE_ADS_ID = "AW-17714606262"
export const GA4_ID = "G-9W26NGRZN1"
const LEAD_FORM_CONVERSION_LABEL = "AW-17714606262/ywUVCKbOhskcELbh_f5B"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function reportLeadFormConversion() {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", "conversion", { send_to: LEAD_FORM_CONVERSION_LABEL })
}

function sendGAEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", name, params)
}

export function trackCtaClick(origem: string) {
  sendGAEvent("cta_click", { origem })
}

export function trackLeadFormClose(origem: string) {
  sendGAEvent("lead_form_close", { origem })
}

export function trackGenerateLead(origem: string, tipoNegocio: string) {
  sendGAEvent("generate_lead", { origem, tipo_negocio: tipoNegocio })
}

export function trackWhatsAppOpen(origem: string) {
  sendGAEvent("whatsapp_open", { origem })
}

export function trackSectionView(section: string) {
  sendGAEvent("section_view", { section })
}

export function trackFaqOpen(pergunta: string) {
  sendGAEvent("faq_open", { pergunta })
}
