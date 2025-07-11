import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade do site ShakiraBr. Saiba como protegemos seus dados pessoais.',
}

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        <div className="container-width section-padding py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
                <p className="text-gray-700 mb-4">
                  A ShakiraBr ("nós", "nosso" ou "nos") opera o site shakirabr.com (o "Serviço"). 
                  Esta página informa sobre nossas políticas de coleta, uso e divulgação de 
                  informações pessoais quando você usa nosso Serviço e as escolhas que você 
                  tem associadas a essas informações.
                </p>
                <p className="text-gray-700 mb-4">
                  Usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, 
                  você concorda com a coleta e uso de informações de acordo com esta política.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Informações Pessoais</h3>
                <p className="text-gray-700 mb-4">
                  Podemos solicitar que você nos forneça certas informações pessoalmente 
                  identificáveis que podem ser usadas para contatá-lo ou identificá-lo:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Endereço de email</li>
                  <li>Nome e sobrenome</li>
                  <li>Informações de pagamento</li>
                  <li>Data de nascimento (para verificação de idade)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Dados de Uso</h3>
                <p className="text-gray-700 mb-4">
                  Também coletamos informações sobre como o Serviço é acessado e usado:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Endereço IP do seu computador</li>
                  <li>Tipo e versão do navegador</li>
                  <li>Páginas do nosso Serviço que você visita</li>
                  <li>Data e hora de sua visita</li>
                  <li>Tempo gasto nessas páginas</li>
                  <li>Identificadores únicos de dispositivo</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies e Tecnologias de Rastreamento</h2>
                <p className="text-gray-700 mb-4">
                  Usamos cookies e tecnologias de rastreamento similares para rastrear 
                  atividades em nosso Serviço e manter certas informações:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Cookies:</strong> Pequenos arquivos de dados colocados no seu dispositivo</li>
                  <li><strong>Web Beacons:</strong> Pequenos gráficos eletrônicos que nos permitem contar visitantes</li>
                  <li><strong>Pixels de Rastreamento:</strong> Incluindo Facebook Pixel e Google Analytics</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Você pode instruir seu navegador a recusar todos os cookies ou a 
                  indicar quando um cookie está sendo enviado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Como Usamos Suas Informações</h2>
                <p className="text-gray-700 mb-4">
                  A ShakiraBr usa os dados coletados para vários propósitos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Fornecer e manter nosso Serviço</li>
                  <li>Notificá-lo sobre mudanças em nosso Serviço</li>
                  <li>Permitir que você participe de recursos interativos quando escolher fazê-lo</li>
                  <li>Fornecer suporte ao cliente</li>
                  <li>Coletar análises ou informações valiosas para melhorar o Serviço</li>
                  <li>Monitorar o uso do Serviço</li>
                  <li>Detectar, prevenir e resolver problemas técnicos</li>
                  <li>Processar transações e pagamentos</li>
                  <li>Enviar emails promocionais e de marketing (com seu consentimento)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Informações</h2>
                <p className="text-gray-700 mb-4">
                  Podemos compartilhar suas informações pessoais nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Provedores de Serviços:</strong> Para facilitar nosso Serviço, fornecer o Serviço em nosso nome, realizar serviços relacionados ao Serviço ou nos ajudar a analisar como nosso Serviço é usado</li>
                  <li><strong>Conformidade Legal:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
                  <li><strong>Transferências de Negócios:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
                  <li><strong>Com Seu Consentimento:</strong> Para qualquer outro propósito com seu consentimento explícito</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança dos Dados</h2>
                <p className="text-gray-700 mb-4">
                  A segurança de seus dados é importante para nós, mas lembre-se de que 
                  nenhum método de transmissão pela Internet ou método de armazenamento 
                  eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente 
                  aceitáveis para proteger suas informações pessoais, não podemos garantir 
                  sua segurança absoluta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retenção de Dados</h2>
                <p className="text-gray-700 mb-4">
                  A ShakiraBr reterá suas informações pessoais apenas pelo tempo necessário 
                  para os propósitos estabelecidos nesta Política de Privacidade. Reteremos 
                  e usaremos suas informações pessoais na medida necessária para cumprir 
                  nossas obrigações legais, resolver disputas e fazer cumprir nossos 
                  acordos legais e políticas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Seus Direitos de Proteção de Dados</h2>
                <p className="text-gray-700 mb-4">
                  Você tem certos direitos de proteção de dados. Se você estiver localizado 
                  dentro da União Europeia, você tem os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>O direito de acessar, atualizar ou excluir as informações que temos sobre você</li>
                  <li>O direito de retificação</li>
                  <li>O direito de se opor</li>
                  <li>O direito de restrição</li>
                  <li>O direito à portabilidade de dados</li>
                  <li>O direito de retirar o consentimento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Serviços de Terceiros</h2>
                <p className="text-gray-700 mb-4">
                  Nosso Serviço pode conter links para outros sites que não são operados por nós. 
                  Se você clicar em um link de terceiros, será direcionado para o site desse terceiro. 
                  Recomendamos fortemente que você revise a Política de Privacidade de cada site que visitar.
                </p>
                <p className="text-gray-700 mb-4">
                  Usamos os seguintes serviços de terceiros:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Google Analytics:</strong> Para análise de tráfego do site</li>
                  <li><strong>Facebook Pixel:</strong> Para rastreamento de conversões e publicidade direcionada</li>
                  <li><strong>Processadores de Pagamento:</strong> Para processar transações seguras</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacidade de Menores</h2>
                <p className="text-gray-700 mb-4">
                  Nosso Serviço não se dirige a menores de 18 anos. Não coletamos 
                  conscientemente informações pessoalmente identificáveis de menores de 18 anos. 
                  Se você é pai ou responsável e está ciente de que seu filho nos forneceu 
                  informações pessoais, entre em contato conosco.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Mudanças nesta Política de Privacidade</h2>
                <p className="text-gray-700 mb-4">
                  Podemos atualizar nossa Política de Privacidade de tempos em tempos. 
                  Notificaremos você sobre quaisquer mudanças publicando a nova Política 
                  de Privacidade nesta página. É aconselhável revisar esta Política de 
                  Privacidade periodicamente para quaisquer mudanças.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
                <p className="text-gray-700 mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em 
                  contato conosco:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Por email: contato@shakirabr.com</li>
                  <li>Nesta página: shakirabr.com/contato</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 