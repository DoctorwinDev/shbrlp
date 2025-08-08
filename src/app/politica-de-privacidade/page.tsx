import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - ShakiraBr',
  description: 'Política de Privacidade completa do ShakiraBr em conformidade com a LGPD. Saiba como protegemos seus dados pessoais.',
  alternates: {
    canonical: 'https://shakirabr.com/politica-de-privacidade',
  },
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="pt-16">
      <div className="container-width section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-800">
                <strong>⚠️ Importante:</strong> Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e regulamentações internacionais de privacidade.
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução e Base Legal</h2>
              <p className="text-gray-700 mb-4">
                A ShakiraBr ("nós", "nosso" ou "nos") opera o site shakirabr.com (o "Serviço"). 
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                e regulamentações internacionais de privacidade, incluindo GDPR para usuários da UE.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Base Legal para Processamento:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Consentimento:</strong> Para cookies e marketing direto</li>
                <li><strong>Execução de Contrato:</strong> Para prestação de serviços</li>
                <li><strong>Interesse Legítimo:</strong> Para análise e segurança</li>
                <li><strong>Obrigação Legal:</strong> Para conformidade regulatória</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Dados Pessoais</h3>
              <p className="text-gray-700 mb-4">
                Coletamos apenas os dados necessários para prestar nossos serviços:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Endereço de email (para comunicação)</li>
                <li>Nome e sobrenome (para identificação)</li>
                <li>Data de nascimento (verificação de idade +18)</li>
                <li>Informações de pagamento (processadas por terceiros seguros)</li>
                <li>Endereço IP (para segurança e conformidade)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Dados de Uso e Analytics</h3>
              <p className="text-gray-700 mb-4">
                Coletamos dados anonimizados para melhorar nossos serviços:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Tipo de dispositivo e navegador</li>
                <li>Localização geográfica (apenas país/região)</li>
                <li>Dados de performance e erros técnicos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies e Consentimento</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>🍪 Gerenciamento de Cookies:</strong> Você pode controlar cookies através do banner de consentimento ou configurações do navegador.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Tipos de Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies Essenciais:</strong> Necessários para funcionamento do site</li>
                <li><strong>Cookies de Performance:</strong> Google Analytics (anônimo)</li>
                <li><strong>Cookies de Marketing:</strong> Facebook Pixel (com consentimento)</li>
                <li><strong>Cookies de Preferências:</strong> Configurações do usuário</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Consentimento</h3>
              <p className="text-gray-700 mb-4">
                Implementamos um sistema de consentimento granular que permite:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Aceitar/rejeitar cookies por categoria</li>
                <li>Retirar consentimento a qualquer momento</li>
                <li>Configurações detalhadas de privacidade</li>
                <li>Histórico de consentimentos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Finalidades do Processamento</h2>
              <p className="text-gray-700 mb-4">
                Processamos seus dados apenas para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Prestação de Serviços:</strong> Acesso ao conteúdo premium</li>
                <li><strong>Verificação de Idade:</strong> Conformidade com regulamentações +18</li>
                <li><strong>Segurança:</strong> Prevenção de fraudes e abusos</li>
                <li><strong>Comunicação:</strong> Suporte e atualizações importantes</li>
                <li><strong>Análise:</strong> Melhoria de serviços (dados anônimos)</li>
                <li><strong>Conformidade:</strong> Cumprimento de obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento e Transferências</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Provedores de Serviços</h3>
              <p className="text-gray-700 mb-4">
                Utilizamos apenas provedores que garantem adequado nível de proteção:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Análise de tráfego (dados anônimos)</li>
                <li><strong>Facebook Pixel:</strong> Marketing (apenas com consentimento)</li>
                <li><strong>Processadores de Pagamento:</strong> Stripe, PayPal (PCI DSS)</li>
                <li><strong>Hospedagem:</strong> Vercel, AWS (certificações de segurança)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Transferências Internacionais</h3>
              <p className="text-gray-700 mb-4">
                Dados podem ser transferidos para países com adequado nível de proteção ou 
                mediante garantias contratuais específicas (Standard Contractual Clauses).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança e Retenção</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Medidas de Segurança</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Armazenamento seguro com criptografia em repouso</li>
                <li>Controle de acesso baseado em função (RBAC)</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Testes de penetração periódicos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Retenção de Dados</h3>
              <p className="text-gray-700 mb-4">
                <strong>Períodos de Retenção:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Dados de conta: Até 2 anos após inatividade</li>
                <li>Logs de acesso: 12 meses</li>
                <li>Dados de pagamento: Conforme exigência legal</li>
                <li>Cookies: Conforme configuração do usuário</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Seus Direitos LGPD/GDPR</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800">
                  <strong>🔒 Seus Direitos:</strong> Você tem controle total sobre seus dados pessoais.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Você possui os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Acesso:</strong> Solicitar informações sobre seus dados</li>
                <li><strong>Correção:</strong> Retificar dados imprecisos</li>
                <li><strong>Exclusão:</strong> Solicitar remoção de dados ("direito ao esquecimento")</li>
                <li><strong>Portabilidade:</strong> Receber dados em formato estruturado</li>
                <li><strong>Oposição:</strong> Opor-se ao processamento</li>
                <li><strong>Restrição:</strong> Limitar o processamento</li>
                <li><strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
              </ul>

              <p className="text-gray-700 mb-4">
                <strong>Como Exercer Seus Direitos:</strong><br/>
                Email: privacy@shakirabr.com<br/>
                Prazo de resposta: 15 dias úteis
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Geo-Blocking e Restrições</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800">
                  <strong>🌍 Restrições Geográficas:</strong> Este serviço não está disponível em todas as jurisdições.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Jurisdições Restritas</h3>
              <p className="text-gray-700 mb-4">
                O acesso pode ser restrito em jurisdições onde:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Conteúdo adulto é ilegal</li>
                <li>Há restrições de idade específicas</li>
                <li>Existem bloqueios governamentais</li>
                <li>Regulamentações locais impedem o serviço</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Verificação de Localização</h3>
              <p className="text-gray-700 mb-4">
                Utilizamos verificação de IP para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Determinar elegibilidade de acesso</li>
                <li>Aplicar restrições geográficas</li>
                <li>Cumprir regulamentações locais</li>
                <li>Prevenir acesso não autorizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacidade de Menores</h2>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <p className="text-orange-800">
                  <strong>🚫 Conteúdo Adulto:</strong> Este site é estritamente para maiores de 18 anos.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>Medidas de Proteção:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Verificação obrigatória de idade (+18)</li>
                <li>Verificação de cartão de crédito (método adicional)</li>
                <li>Monitoramento de tentativas de acesso por menores</li>
                <li>Remoção imediata de dados de menores detectados</li>
                <li>Cooperação com autoridades quando necessário</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Incidentes de Segurança</h2>
              <p className="text-gray-700 mb-4">
                Em caso de violação de dados pessoais, notificaremos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Autoridade Nacional de Proteção de Dados (ANPD)</li>
                <li>Usuários afetados (quando aplicável)</li>
                <li>Autoridades competentes (conforme exigido)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Prazo de Notificação:</strong> 72 horas após conhecimento do incidente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Alterações e Contato</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Alterações na Política</h3>
              <p className="text-gray-700 mb-4">
                Notificaremos alterações significativas através de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Banner no site por 30 dias</li>
                <li>Email para usuários ativos</li>
                <li>Atualização da data de "última modificação"</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Contato</h3>
              <p className="text-gray-700 mb-4">
                <strong>Encarregado de Proteção de Dados (DPO):</strong><br/>
                Email: dpo@shakirabr.com<br/>
                <strong>Suporte Geral:</strong><br/>
                Email: privacy@shakirabr.com<br/>
                <strong>Denúncias:</strong><br/>
                Email: compliance@shakirabr.com
              </p>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Resumo de Compliance</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>✅ Conformidade com LGPD (Brasil)</li>
                <li>✅ Conformidade com GDPR (UE)</li>
                <li>✅ Consentimento granular de cookies</li>
                <li>✅ Direitos do titular implementados</li>
                <li>✅ Segurança e criptografia</li>
                <li>✅ Geo-blocking e restrições</li>
                <li>✅ Proteção de menores</li>
                <li>✅ Notificação de incidentes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 