import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso - ShakiraBr',
  description: 'Termos de Uso completos do ShakiraBr em conformidade com LGPD e regulamentações internacionais.',
  alternates: {
    canonical: 'https://shakirabr.com/termos-de-uso',
  },
}

export default function TermosDeUso() {
  return (
    <main className="pt-16">
      <div className="container-width section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-800">
                <strong>⚠️ Importante:</strong> Estes termos estão em conformidade com a LGPD e regulamentações internacionais.
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos e Elegibilidade</h2>
              <p className="text-gray-700 mb-4">
                Ao acessar e usar o site ShakiraBr ("Serviço"), você concorda em ficar vinculado 
                a estes Termos de Uso ("Termos"). Se você não concordar com alguma parte destes 
                termos, então não poderá acessar o Serviço.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800">
                  <strong>🚫 Restrição de Idade:</strong> Este serviço é estritamente para maiores de 18 anos.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Requisitos de Elegibilidade</h3>
              <p className="text-gray-700 mb-4">
                Para usar este serviço, você deve:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ter pelo menos 18 anos de idade (verificação obrigatória)</li>
                <li>Ter capacidade legal para concordar com estes termos</li>
                <li>Não estar localizado em jurisdições onde o conteúdo adulto é proibido</li>
                <li>Usar o serviço apenas para fins pessoais e não comerciais</li>
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Não usar VPNs ou proxies para contornar restrições geográficas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço e Restrições</h2>
              <p className="text-gray-700 mb-4">
                O ShakiraBr é uma plataforma digital que oferece conteúdo exclusivo da modelo 
                ShakiraBr, incluindo fotos, vídeos e outros materiais digitais. O serviço é 
                destinado exclusivamente para adultos maiores de 18 anos.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>🌍 Restrições Geográficas:</strong> Este serviço pode não estar disponível em todas as jurisdições.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Jurisdições Restritas</h3>
              <p className="text-gray-700 mb-4">
                O acesso pode ser restrito ou bloqueado em:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Países onde conteúdo adulto é ilegal</li>
                <li>Jurisdições com restrições específicas de idade</li>
                <li>Regiões com bloqueios governamentais</li>
                <li>Locais com regulamentações que impedem o serviço</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso Aceitável e Proibições</h2>
              <p className="text-gray-700 mb-4">
                Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. 
                Você NÃO pode:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Reproduzir, distribuir ou modificar qualquer conteúdo sem autorização</li>
                <li>Usar o serviço para fins comerciais sem permissão prévia</li>
                <li>Compartilhar suas credenciais de acesso com terceiros</li>
                <li>Tentar contornar medidas de segurança ou restrições técnicas</li>
                <li>Fazer engenharia reversa ou descompilar qualquer parte do serviço</li>
                <li>Usar VPNs ou proxies para contornar restrições geográficas</li>
                <li>Fazer upload de conteúdo malicioso ou spam</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Assediar ou ameaçar outros usuários</li>
                <li>Usar o serviço para atividades ilegais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriedade Intelectual e Direitos Autorais</h2>
              <p className="text-gray-700 mb-4">
                Todo o conteúdo disponível no ShakiraBr, incluindo mas não limitado a textos, 
                gráficos, logos, imagens, vídeos e software, é propriedade da ShakiraBr ou de 
                seus licenciadores e é protegido por leis de direitos autorais, marcas registradas 
                e outras leis de propriedade intelectual.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Licença de Uso</h3>
              <p className="text-gray-700 mb-4">
                Concedemos uma licença limitada, não exclusiva, não transferível e revogável 
                para acessar e usar o serviço, sujeita a estes Termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagamentos, Reembolsos e Taxas</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800">
                  <strong>💳 Pagamentos Seguros:</strong> Utilizamos processadores certificados PCI DSS.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Processamento de Pagamentos</h3>
              <p className="text-gray-700 mb-4">
                Os pagamentos para acesso premium são processados por terceiros seguros e certificados:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Stripe (certificação PCI DSS)</li>
                <li>PayPal (certificação PCI DSS)</li>
                <li>Outros processadores aprovados</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Política de Reembolso</h3>
              <p className="text-gray-700 mb-4">
                Todos os pagamentos são finais e não reembolsáveis, exceto quando:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Exigido por lei local</li>
                <li>Erro técnico do nosso lado</li>
                <li>Falha na prestação do serviço</li>
                <li>Conformidade com regulamentações de proteção ao consumidor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 mb-4">
                Sua privacidade é fundamental para nós. Nossa coleta e uso de informações 
                pessoais são governados por nossa Política de Privacidade, que está em 
                conformidade com a LGPD e regulamentações internacionais.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Consentimento e Controle</h3>
              <p className="text-gray-700 mb-4">
                Você tem controle total sobre seus dados:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Consentimento granular para cookies</li>
                <li>Direito de retirar consentimento a qualquer momento</li>
                <li>Acesso, correção e exclusão de dados</li>
                <li>Portabilidade de dados</li>
                <li>Oposição ao processamento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Segurança e Proteção</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>🔒 Segurança:</strong> Implementamos medidas robustas de proteção de dados.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Medidas de Segurança</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Armazenamento seguro com criptografia em repouso</li>
                <li>Controle de acesso baseado em função (RBAC)</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Testes de penetração periódicos</li>
                <li>Conformidade com padrões de segurança internacionais</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Verificação de Idade</h3>
              <p className="text-gray-700 mb-4">
                Implementamos múltiplas camadas de verificação de idade:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Declaração de idade obrigatória</li>
                <li>Verificação de cartão de crédito (método adicional)</li>
                <li>Monitoramento de padrões de uso</li>
                <li>Cooperação com autoridades quando necessário</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 mb-4">
                Em nenhuma circunstância a ShakiraBr será responsável por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Danos indiretos, incidentais, especiais, consequenciais ou punitivos</li>
                <li>Perda de lucros, dados ou uso</li>
                <li>Interrupções temporárias do serviço</li>
                <li>Danos causados por terceiros</li>
                <li>Uso inadequado do serviço</li>
                <li>Violations de leis locais pelo usuário</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificações e Rescisão</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Modificações dos Termos</h3>
              <p className="text-gray-700 mb-4">
                Reservamos o direito de modificar estes Termos a qualquer momento. 
                Notificaremos alterações significativas através de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Banner no site por 30 dias</li>
                <li>Email para usuários ativos</li>
                <li>Atualização da data de "última modificação"</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Rescisão de Conta</h3>
              <p className="text-gray-700 mb-4">
                Podemos suspender ou encerrar sua conta imediatamente se:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Você violar estes Termos</li>
                <li>Fornecer informações falsas</li>
                <li>Usar o serviço de forma inadequada</li>
                <li>Ser menor de 18 anos</li>
                <li>Estar em jurisdição restrita</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Lei Aplicável e Jurisdição</h2>
              <p className="text-gray-700 mb-4">
                Estes Termos são regidos pelas leis do Brasil e estão em conformidade com:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Lei Geral de Proteção de Dados (LGPD)</li>
                <li>Marco Civil da Internet</li>
                <li>Código de Defesa do Consumidor</li>
                <li>Regulamentações internacionais aplicáveis</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Qualquer disputa será resolvida nos tribunais competentes do Brasil, 
                sujeita às leis brasileiras.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato e Suporte</h2>
              <p className="text-gray-700 mb-4">
                Para questões relacionadas a estes Termos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Suporte Geral:</strong> contato@shakirabr.com</li>
                <li><strong>Questões Legais:</strong> legal@shakirabr.com</li>
                <li><strong>Privacidade:</strong> privacy@shakirabr.com</li>
                <li><strong>Compliance:</strong> compliance@shakirabr.com</li>
                <li><strong>DPO:</strong> dpo@shakirabr.com</li>
              </ul>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Resumo de Compliance</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>✅ Conformidade com LGPD (Brasil)</li>
                <li>✅ Verificação obrigatória de idade (+18)</li>
                <li>✅ Geo-blocking e restrições geográficas</li>
                <li>✅ Proteção de propriedade intelectual</li>
                <li>✅ Processamento seguro de pagamentos</li>
                <li>✅ Direitos do consumidor respeitados</li>
                <li>✅ Medidas de segurança implementadas</li>
                <li>✅ Contatos especializados disponíveis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 