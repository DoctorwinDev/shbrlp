import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso do site ShakiraBr. Leia nossos termos e condições de uso.',
}

export default function TermosDeUso() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        <div className="container-width section-padding py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
              Termos de Uso
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 mb-4">
                  Ao acessar e usar o site ShakiraBr ("Serviço"), você concorda em ficar vinculado 
                  a estes Termos de Uso ("Termos"). Se você não concordar com alguma parte destes 
                  termos, então não poderá acessar o Serviço.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço</h2>
                <p className="text-gray-700 mb-4">
                  O ShakiraBr é uma plataforma digital que oferece conteúdo exclusivo da modelo 
                  ShakiraBr, incluindo fotos, vídeos e outros materiais digitais. O serviço é 
                  destinado exclusivamente para adultos maiores de 18 anos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Elegibilidade</h2>
                <p className="text-gray-700 mb-4">
                  Para usar este serviço, você deve:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Ter capacidade legal para concordar com estes termos</li>
                  <li>Não estar localizado em jurisdições onde o conteúdo adulto é proibido</li>
                  <li>Usar o serviço apenas para fins pessoais e não comerciais</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceitável</h2>
                <p className="text-gray-700 mb-4">
                  Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. 
                  Você não pode:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Reproduzir, distribuir ou modificar qualquer conteúdo sem autorização</li>
                  <li>Usar o serviço para fins comerciais sem permissão prévia</li>
                  <li>Compartilhar suas credenciais de acesso com terceiros</li>
                  <li>Tentar contornar medidas de segurança ou restrições técnicas</li>
                  <li>Fazer engenharia reversa ou descompilar qualquer parte do serviço</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
                <p className="text-gray-700 mb-4">
                  Todo o conteúdo disponível no ShakiraBr, incluindo mas não limitado a textos, 
                  gráficos, logos, imagens, vídeos e software, é propriedade da ShakiraBr ou de 
                  seus licenciadores e é protegido por leis de direitos autorais, marcas registradas 
                  e outras leis de propriedade intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Pagamentos e Reembolsos</h2>
                <p className="text-gray-700 mb-4">
                  Os pagamentos para acesso premium são processados por terceiros seguros. 
                  Todos os pagamentos são finais e não reembolsáveis, exceto quando exigido 
                  por lei ou conforme especificado em nossa política de reembolso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacidade</h2>
                <p className="text-gray-700 mb-4">
                  Sua privacidade é importante para nós. Nossa coleta e uso de informações 
                  pessoais são governados por nossa Política de Privacidade, que é incorporada 
                  a estes Termos por referência.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
                <p className="text-gray-700 mb-4">
                  Em nenhuma circunstância a ShakiraBr será responsável por danos indiretos, 
                  incidentais, especiais, consequenciais ou punitivos, incluindo mas não limitado 
                  a perda de lucros, dados ou uso, resultantes do uso ou impossibilidade de uso 
                  do serviço.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificações dos Termos</h2>
                <p className="text-gray-700 mb-4">
                  Reservamos o direito de modificar estes Termos a qualquer momento. 
                  As modificações entrarão em vigor imediatamente após a publicação. 
                  Seu uso continuado do serviço após tais modificações constitui sua 
                  aceitação dos novos Termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Lei Aplicável</h2>
                <p className="text-gray-700 mb-4">
                  Estes Termos são regidos pelas leis do Brasil. Qualquer disputa 
                  relacionada a estes Termos será resolvida nos tribunais competentes 
                  do Brasil.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
                <p className="text-gray-700 mb-4">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato 
                  conosco através do email: contato@shakirabr.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 