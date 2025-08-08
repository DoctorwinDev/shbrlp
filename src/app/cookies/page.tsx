import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies - ShakiraBr',
  description: 'Informações detalhadas sobre cookies e tecnologias de rastreamento utilizadas no ShakiraBr.',
  alternates: {
    canonical: 'https://shakirabr.com/cookies',
  },
}

export default function CookiesPage() {
  return (
    <main className="pt-16">
      <div className="container-width section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-blue-800">
                <strong>🍪 Gerenciamento de Cookies:</strong> Você pode controlar cookies através do banner de consentimento ou configurações do navegador.
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">O que são Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. 
                Eles nos ajudam a melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                    Cookies Essenciais
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Função:</strong> Necessários para o funcionamento básico do site
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-3">
                    <li>Manter sua sessão ativa</li>
                    <li>Lembrar suas preferências de idioma</li>
                    <li>Garantir a segurança do site</li>
                    <li>Prevenir fraudes e abusos</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> Sempre ativos - não podem ser desativados
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">📊</span>
                    Cookies de Analytics
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Função:</strong> Nos ajudam a entender como você usa o site
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-3">
                    <li>Analisar páginas mais visitadas</li>
                    <li>Identificar problemas técnicos</li>
                    <li>Melhorar a experiência do usuário</li>
                    <li>Otimizar performance do site</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> Opcional - você pode aceitar ou rejeitar
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">🎯</span>
                    Cookies de Marketing
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Função:</strong> Personalizar anúncios e conteúdo baseado em seus interesses
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-3">
                    <li>Mostrar conteúdo relevante</li>
                    <li>Personalizar anúncios</li>
                    <li>Medir eficácia de campanhas</li>
                    <li>Melhorar targeting</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> Opcional - você pode aceitar ou rejeitar
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Controlar Cookies</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800">
                  <strong>🔒 Seu Controle:</strong> Você tem controle total sobre quais cookies aceitar.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Banner de Consentimento</h3>
              <p className="text-gray-700 mb-4">
                Quando você visita nosso site pela primeira vez, um banner aparece permitindo que você:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Aceite todos os cookies</li>
                <li>Rejeite cookies opcionais</li>
                <li>Configure preferências detalhadas</li>
                <li>Acesse nossa política de privacidade</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Configurações do Navegador</h3>
              <p className="text-gray-700 mb-4">
                Você também pode controlar cookies através das configurações do seu navegador:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                <li><strong>Edge:</strong> Configurações → Cookies e permissões do site</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Alterar Preferências</h3>
              <p className="text-gray-700 mb-4">
                Você pode alterar suas preferências de cookies a qualquer momento:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Através do banner de consentimento</li>
                <li>Nas configurações do navegador</li>
                <li>Entrando em contato conosco</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies de Terceiros</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos serviços de terceiros que podem definir cookies:
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Nos ajuda a entender como você usa o site. Dados são anonimizados.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h4>
                  <p className="text-sm text-gray-600">
                    Usado para marketing e publicidade direcionada (apenas com consentimento).
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Processadores de Pagamento</h4>
                  <p className="text-sm text-gray-600">
                    Stripe, PayPal e outros para processar pagamentos seguros.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retenção de Cookies</h2>
              <p className="text-gray-700 mb-4">
                <strong>Períodos de Retenção:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Cookies de Sessão:</strong> Excluídos quando você fecha o navegador</li>
                <li><strong>Cookies Persistentes:</strong> Até 2 anos ou conforme configuração</li>
                <li><strong>Cookies de Analytics:</strong> Até 26 meses (Google Analytics)</li>
                <li><strong>Cookies de Marketing:</strong> Até 90 dias ou conforme consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conformidade Legal</h2>
              <p className="text-gray-700 mb-4">
                Nossa política de cookies está em conformidade com:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Lei Geral de Proteção de Dados (LGPD)</li>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>Marco Civil da Internet</li>
                <li>Diretrizes do Google para cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contato</h2>
              <p className="text-gray-700 mb-4">
                Para questões sobre cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Email:</strong> privacy@shakirabr.com</li>
                <li><strong>DPO:</strong> dpo@shakirabr.com</li>
                <li><strong>Política de Privacidade:</strong> <a href="/politica-de-privacidade" className="text-blue-600 hover:underline">Ver aqui</a></li>
              </ul>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Resumo de Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>✅ Consentimento granular implementado</li>
                <li>✅ Controle total do usuário</li>
                <li>✅ Conformidade com LGPD/GDPR</li>
                <li>✅ Retenção limitada e transparente</li>
                <li>✅ Dados anonimizados quando possível</li>
                <li>✅ Contatos especializados disponíveis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
