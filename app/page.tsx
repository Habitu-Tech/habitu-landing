import Link from "next/link"

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#00C16A" fillOpacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="#00C16A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StampDot({ filled }: { filled: boolean }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center"
      style={{
        background: filled ? "#00C16A" : "#1F2937",
        border: filled ? "none" : "1.5px solid #374151",
      }}
    >
      {filled && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1.5l1.35 2.73 3.01.44-2.18 2.12.51 3-2.69-1.41L4.31 9.8l.51-3L2.64 4.67l3.01-.44L7 1.5z" fill="#0A0F1E" />
        </svg>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #1F2937", position: "sticky", top: 0, zIndex: 50 }}>
        <div
          className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between"
          style={{ background: "rgba(10,15,30,0.92)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#00C16A" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l1.8 3.6L14 6.2l-3 2.9.7 4.1L8 11.3 5.3 13.2l.7-4.1L3 6.2l4.2-.6L8 2z" fill="#0A0F1E" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F5F5F0", fontSize: "1.1rem" }}>
              habbitu
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[["Como funciona", "#como-funciona"], ["Recursos", "#recursos"], ["Preços", "#precos"]].map(([label, href]) => (
              <a key={href} href={href} style={{ color: "#6B7280", fontSize: "0.875rem" }} className="hover:text-[#F5F5F0] transition-colors">{label}</a>
            ))}
          </div>
          <a
            href="https://app.habbitu.com"
            style={{ background: "#00C16A", color: "#0A0F1E", fontWeight: 600, fontSize: "0.875rem", padding: "0.5rem 1.25rem", borderRadius: "8px" }}
            className="hover:opacity-90 transition-opacity"
          >
            Começar grátis
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-5 pt-20 pb-24 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{ background: "#00C16A14", border: "1px solid #00C16A30" }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00C16A" }} />
          <span style={{ color: "#00C16A", fontSize: "0.8rem", fontWeight: 500 }}>Programa de fidelidade digital</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 6vw, 3.75rem)",
            lineHeight: 1.1,
            color: "#F5F5F0",
            marginBottom: "1.5rem",
          }}
        >
          O cartão fidelidade que{" "}
          <span style={{ color: "#00C16A" }}>seus clientes usam</span>
          {" "}de verdade
        </h1>

        <p style={{ color: "#6B7280", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Crie seu programa de fidelidade digital em minutos. Seus clientes acumulam carimbos e acompanham o cartão pelo celular — sem precisar baixar nenhum app.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://app.habbitu.com"
            style={{ background: "#00C16A", color: "#0A0F1E", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "10px" }}
            className="hover:opacity-90 transition-opacity"
          >
            Criar meu programa grátis
          </a>
          <a
            href="#como-funciona"
            style={{ border: "1px solid #1F2937", color: "#F5F5F0", fontWeight: 500, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "10px" }}
            className="hover:border-[#374151] transition-colors"
          >
            Ver como funciona
          </a>
        </div>

        {/* Cartão demo */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl p-6 text-left" style={{ background: "#111827", border: "1px solid #1F2937" }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p style={{ color: "#6B7280", fontSize: "0.75rem", marginBottom: "2px" }}>Café da Praça</p>
                <p style={{ color: "#F5F5F0", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem" }}>Ana Silva</p>
              </div>
              <div className="px-2.5 py-1 rounded-full" style={{ background: "#00C16A14", border: "1px solid #00C16A30" }}>
                <span style={{ color: "#00C16A", fontSize: "0.72rem", fontWeight: 500 }}>6/10 carimbos</span>
              </div>
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <StampDot key={i} filled={i < 6} />
              ))}
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.78rem", marginTop: "1rem" }}>
              Faltam <span style={{ color: "#F5F5F0", fontWeight: 600 }}>4 carimbos</span> para ganhar um café grátis ☕
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#F5F5F0", marginBottom: "0.75rem" }}>
            Simples para você, incrível para o cliente
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Configure em minutos e comece a fidelizar seus clientes hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Crie seu programa", desc: "Configure o número de carimbos, o prêmio e personalize com as cores do seu negócio." },
            { step: "02", title: "Cadastre seus clientes", desc: "Escaneie o QR code, cadastre pelo WhatsApp ou deixe o cliente se cadastrar sozinho." },
            { step: "03", title: "Carimbe e fidelize", desc: "A cada visita, adicione carimbos em segundos. O cliente recebe notificação no WhatsApp." },
          ].map((item) => (
            <div key={item.step} className="rounded-xl p-6" style={{ background: "#111827", border: "1px solid #1F2937" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#00C16A14", border: "1px solid #00C16A30" }}>
                <span style={{ color: "#00C16A", fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "0.85rem" }}>{item.step}</span>
              </div>
              <h3 style={{ color: "#F5F5F0", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#F5F5F0", marginBottom: "0.75rem" }}>
            Tudo que você precisa para fidelizar
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cartão digital no celular",
              desc: "Cada cliente tem seu cartão acessível por link — sem app para baixar, funciona em qualquer celular.",
              features: ["PWA instalável na tela inicial", "QR code único por cliente", "Atualiza em tempo real"],
            },
            {
              title: "WhatsApp automático",
              desc: "Seus clientes recebem notificações automáticas a cada carimbo, prêmio conquistado e muito mais.",
              features: ["Boas-vindas automático", "Aviso de carimbo adicionado", "Lembrete de carimbos expirando"],
            },
            {
              title: "Painel do atendente",
              desc: "Interface simples e rápida para usar no balcão. Escaneie, carimbe e registre resgates em segundos.",
              features: ["Scanner de QR code nativo", "Histórico de visitas", "Múltiplos atendentes"],
            },
            {
              title: "Personalização completa",
              desc: "Personalize o cartão com as cores e logo do seu negócio. Cada cliente vê a sua marca.",
              features: ["Cores e ícones customizados", "Logo própria no cartão", "Domínio personalizado"],
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl p-6" style={{ background: "#111827", border: "1px solid #1F2937" }}>
              <h3 style={{ color: "#F5F5F0", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>{item.desc}</p>
              <ul className="flex flex-col gap-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon />
                    <span style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PRECOS */}
      <section id="precos" className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#F5F5F0", marginBottom: "0.75rem" }}>
            Preço justo, sem surpresas
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            Comece grátis e cresça no seu ritmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="rounded-xl p-7" style={{ background: "#111827", border: "1px solid #1F2937" }}>
            <p style={{ color: "#6B7280", fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Grátis</p>
            <p style={{ color: "#F5F5F0", fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem", marginBottom: "1.5rem" }}>R$ 0</p>
            <ul className="flex flex-col gap-3 mb-7">
              {["Até 50 clientes", "1 programa de fidelidade", "Cartão digital", "Painel do atendente"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.habbitu.com"
              style={{ display: "block", textAlign: "center", border: "1px solid #1F2937", color: "#F5F5F0", fontWeight: 600, padding: "0.75rem", borderRadius: "8px", fontSize: "0.9rem" }}
              className="hover:border-[#374151] transition-colors"
            >
              Criar conta grátis
            </a>
          </div>

          <div className="rounded-xl p-7 relative" style={{ background: "#111827", border: "1px solid #00C16A", boxShadow: "0 0 24px rgba(0,193,106,0.12)" }}>
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#00C16A", color: "#0A0F1E" }}>
              Mais popular
            </div>
            <p style={{ color: "#00C16A", fontSize: "0.8rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Pro</p>
            <div className="flex items-baseline gap-1 mb-1.5">
              <p style={{ color: "#F5F5F0", fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem" }}>R$ 79</p>
              <span style={{ color: "#6B7280", fontSize: "0.85rem" }}>/mês</span>
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.78rem", marginBottom: "1.5rem" }}>por estabelecimento</p>
            <ul className="flex flex-col gap-3 mb-7">
              {["Clientes ilimitados", "WhatsApp automático", "Personalização completa", "Múltiplos atendentes", "Domínio personalizado", "Suporte prioritário"].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckIcon />
                  <span style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.habbitu.com"
              style={{ display: "block", textAlign: "center", background: "#00C16A", color: "#0A0F1E", fontWeight: 700, padding: "0.75rem", borderRadius: "8px", fontSize: "0.9rem" }}
              className="hover:opacity-90 transition-opacity"
            >
              Assinar agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <div className="rounded-2xl p-10 text-center" style={{ background: "#111827", border: "1px solid #00C16A30" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#F5F5F0", marginBottom: "1rem" }}>
            Pronto para fidelizar mais clientes?
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "400px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Crie seu programa de fidelidade agora e comece a engajar seus clientes hoje mesmo.
          </p>
          <a
            href="https://app.habbitu.com"
            style={{ display: "inline-block", background: "#00C16A", color: "#0A0F1E", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2.5rem", borderRadius: "10px" }}
            className="hover:opacity-90 transition-opacity"
          >
            Começar grátis agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1F2937" }} className="mt-4">
        <div className="max-w-5xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#00C16A" }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l1.8 3.6L14 6.2l-3 2.9.7 4.1L8 11.3 5.3 13.2l.7-4.1L3 6.2l4.2-.6L8 2z" fill="#0A0F1E" />
              </svg>
            </div>
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F5F5F0", fontSize: "0.95rem" }}>habbitu</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" style={{ color: "#6B7280", fontSize: "0.85rem" }} className="hover:text-[#F5F5F0] transition-colors">Privacidade</Link>
            <Link href="/termos" style={{ color: "#6B7280", fontSize: "0.85rem" }} className="hover:text-[#F5F5F0] transition-colors">Termos</Link>
            <a href="mailto:contato@habbitu.com" style={{ color: "#6B7280", fontSize: "0.85rem" }} className="hover:text-[#F5F5F0] transition-colors">Contato</a>
          </div>
          <p style={{ color: "#4B5563", fontSize: "0.8rem" }}>© 2026 Habbitu. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
