import { NextResponse } from "next/server"

export async function POST(request: Request) {
  let body: {
    nome?: unknown
    nomeNegocio?: unknown
    tipoNegocio?: unknown
    whatsapp?: unknown
    origem?: unknown
  }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }

  const nome = typeof body.nome === "string" ? body.nome.trim() : ""
  const nomeNegocio = typeof body.nomeNegocio === "string" ? body.nomeNegocio.trim() : ""
  const tipoNegocio = typeof body.tipoNegocio === "string" ? body.tipoNegocio.trim() : ""
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.replace(/\D/g, "") : ""
  const origem = typeof body.origem === "string" ? body.origem.trim() : null

  if (!nome || !nomeNegocio || !tipoNegocio || whatsapp.length < 12) {
    return NextResponse.json(
      { error: "Preencha nome, negócio, tipo de negócio e um WhatsApp válido." },
      { status: 400 }
    )
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase não configurado" }, { status: 500 })
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/leads_parceria`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      nome,
      nome_negocio: nomeNegocio,
      tipo_negocio: tipoNegocio,
      whatsapp,
      origem,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Não foi possível salvar o lead" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
