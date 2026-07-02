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
