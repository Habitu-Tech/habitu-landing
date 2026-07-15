const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.habbitu.com"

/** URL de cadastro self-service no app, opcionalmente já com o plano escolhido. */
export function signupUrl(plano?: "lite" | "pro"): string {
  const url = new URL("/cadastro-org", APP_URL)
  if (plano) url.searchParams.set("plano", plano)
  return url.toString()
}
