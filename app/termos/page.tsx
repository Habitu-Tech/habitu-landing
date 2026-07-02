import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termos de Uso - Habbitu",
  description: "Termos e condições de uso da plataforma Habbitu.",
}

export default function TermsPage() {
  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#F5F5F0" }}>
      <div className="max-w-3xl mx-auto px-5 py-16">
        <Link href="/" style={{ color: "#00C16A", fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.25rem", marginBottom: "2.5rem" }}>
          ← Voltar ao início
        </Link>

        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem", color: "#F5F5F0", marginBottom: "0.5rem" }}>
          Termos de Uso
        </h1>
        <p style={{ color: "#6B7280", marginBottom: "3rem", fontSize: "0.875rem" }}>Última atualização: 29 de junho de 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              title: "1. Aceitação dos termos",
              body: `Ao usar a plataforma Habbitu, você concorda com estes Termos de Uso. Se não concordar com algum ponto, não utilize o serviço.`,
            },
            {
              title: "2. Descrição do serviço",
              body: `A Habbitu é uma plataforma SaaS de cartão fidelidade digital que permite a estabelecimentos comerciais criar e gerenciar programas de fidelidade para seus clientes. A plataforma inclui:\n\n• Painel de gestão para estabelecimentos\n• Cartão digital para clientes (acessível por link)\n• Notificações automáticas via WhatsApp\n• Scanner de QR code para atendentes`,
            },
            {
              title: "3. Cadastro e responsabilidades",
              body: `Ao se cadastrar, você se compromete a:\n\n• Fornecer informações verdadeiras e atualizadas\n• Manter a segurança de sua senha e conta\n• Usar a plataforma de acordo com a legislação brasileira\n• Não utilizar o serviço para fins ilícitos ou que violem direitos de terceiros\n\nVocê é responsável por todas as atividades realizadas com sua conta.`,
            },
            {
              title: "4. Planos e pagamento",
              body: `A Habbitu oferece planos gratuito e pago. O plano Pro é cobrado mensalmente. Cancelamentos podem ser feitos a qualquer momento, com efeito ao final do período já pago. Não há reembolso proporcional.`,
            },
            {
              title: "5. Dados dos clientes finais",
              body: `O estabelecimento é responsável por obter o consentimento adequado dos seus clientes para cadastrá-los na plataforma e enviar comunicações via WhatsApp, em conformidade com a LGPD e as políticas do WhatsApp.`,
            },
            {
              title: "6. Limitação de responsabilidade",
              body: `A Habbitu não se responsabiliza por:\n\n• Falhas na entrega de mensagens WhatsApp por terceiros\n• Perda de dados por eventos fora do nosso controle\n• Danos indiretos decorrentes do uso da plataforma`,
            },
            {
              title: "7. Modificações",
              body: `A Habbitu pode modificar estes termos a qualquer momento. Mudanças significativas serão comunicadas por e-mail com antecedência de 15 dias.`,
            },
            {
              title: "8. Contato",
              body: `Para questões sobre estes termos:\n\nE-mail: contato@habbitu.com`,
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
