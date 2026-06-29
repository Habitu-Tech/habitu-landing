import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidade — Habbitu",
  description: "Como a Habbitu coleta, usa e protege seus dados pessoais.",
}

export default function PrivacyPage() {
  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#F5F5F0" }}>
      <div className="max-w-3xl mx-auto px-5 py-16">
        <Link href="/" style={{ color: "#00C16A", fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.25rem", marginBottom: "2.5rem" }}>
          ← Voltar ao início
        </Link>

        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem", color: "#F5F5F0", marginBottom: "0.5rem" }}>
          Política de Privacidade
        </h1>
        <p style={{ color: "#6B7280", marginBottom: "3rem", fontSize: "0.875rem" }}>Última atualização: 29 de junho de 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              title: "1. Quem somos",
              body: `A Habbitu é uma plataforma de cartão fidelidade digital que conecta estabelecimentos comerciais aos seus clientes. Nosso site é habbitu.com e nossa plataforma pode ser acessada em app.habbitu.com.\n\nPara dúvidas sobre privacidade, entre em contato pelo e-mail: privacidade@habbitu.com`,
            },
            {
              title: "2. Dados que coletamos",
              body: `Coletamos os seguintes dados pessoais:\n\n• Nome completo\n• Número de WhatsApp\n• E-mail (quando fornecido)\n• Histórico de carimbos e resgates\n• Data e hora das visitas ao estabelecimento\n\nEsses dados são fornecidos diretamente pelo estabelecimento ou pelo próprio cliente no momento do cadastro.`,
            },
            {
              title: "3. Como usamos seus dados",
              body: `Usamos seus dados para:\n\n• Gerenciar seu programa de fidelidade digital\n• Enviar notificações pelo WhatsApp sobre carimbos, prêmios e lembretes\n• Permitir que o estabelecimento gerencie o relacionamento com seus clientes\n• Melhorar nossa plataforma e serviços`,
            },
            {
              title: "4. Compartilhamento de dados",
              body: `Não vendemos seus dados pessoais. Compartilhamos dados apenas com:\n\n• O estabelecimento ao qual você está cadastrado (seu cliente)\n• Provedores de infraestrutura (Supabase, Vercel) para operação da plataforma\n• Provedores de comunicação (para envio de mensagens WhatsApp)\n\nTodos os fornecedores são contratualmente obrigados a proteger seus dados.`,
            },
            {
              title: "5. Seus direitos (LGPD)",
              body: `Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:\n\n• Confirmar a existência de tratamento de seus dados\n• Acessar seus dados\n• Corrigir dados incompletos ou inexatos\n• Solicitar a exclusão dos seus dados\n• Revogar o consentimento a qualquer momento\n\nPara exercer seus direitos, entre em contato: privacidade@habbitu.com`,
            },
            {
              title: "6. Segurança",
              body: `Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia em trânsito (HTTPS), controle de acesso restrito e armazenamento seguro em servidores certificados.`,
            },
            {
              title: "7. Retenção de dados",
              body: `Mantemos seus dados enquanto você for cliente ativo de um estabelecimento cadastrado na Habbitu. Após a exclusão da conta ou solicitação, seus dados são anonimizados ou eliminados em até 30 dias.`,
            },
            {
              title: "8. Contato",
              body: `Dúvidas, solicitações ou reclamações sobre privacidade:\n\nE-mail: privacidade@habbitu.com\nResponderemos em até 5 dias úteis.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F0", marginBottom: "0.75rem" }}>
                {section.title}
              </h2>
              <div style={{ color: "#9CA3AF", lineHeight: 1.8, fontSize: "0.9rem", whiteSpace: "pre-line" }}>
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
