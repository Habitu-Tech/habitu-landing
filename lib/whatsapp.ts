export const WHATSAPP_NUMBER = "5592986435595"

export const BUSINESS_TYPES = [
  "Bar ou restaurante",
  "Quiosque ou food truck",
  "Salão ou barbearia",
  "Cafeteria ou padaria",
  "Loja de bairro",
  "Outro",
] as const

export type BusinessType = (typeof BUSINESS_TYPES)[number]

export function buildWhatsAppMessage(nome: string, nomeNegocio: string, tipoNegocio: string) {
  const primeiroNome = nome.trim().split(" ")[0]
  return `Olá! Sou ${primeiroNome}, do ${nomeNegocio} (${tipoNegocio}). Vi a página do Habbitu e quero entender como funciona a parceria para o meu negócio.`
}

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_LINK = buildWhatsAppLink(
  "Olá! Vi a página do Habbitu e quero entender como funciona a parceria para o meu negócio."
)

export function formatBrazilPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  const ddd = digits.slice(0, 2)
  const rest = digits.slice(2)

  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${ddd}`
  if (rest.length <= 5) return `(${ddd}) ${rest}`
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`
}

export function normalizeBrazilPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  return digits.startsWith("55") ? digits : `55${digits}`
}

export function isValidBrazilPhone(value: string) {
  return value.replace(/\D/g, "").length === 11
}
