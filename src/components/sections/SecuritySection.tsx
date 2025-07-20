import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Totalmente Seguro',
      description: 'Seus dados protegidos com criptografia SSL'
    },
    {
      icon: Lock,
      title: 'Privacidade Total',
      description: 'Navegação anônima e discreta'
    },
    {
      icon: Eye,
      title: 'Acesso Discreto',
      description: 'Sem rastros na sua fatura'
    },
    {
      icon: UserCheck,
      title: 'Modelo Verificada',
      description: 'Perfil 100% real e autenticado'
    }
  ];

  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Sua Privacidade é Nossa Prioridade
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Acesso completamente seguro e discreto ao meu conteúdo exclusivo
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-pink-500/30"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-6 border-t border-gray-800">
          <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">SSL Seguro</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">LGPD Compliant</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
            <UserCheck className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium">Verificado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection; 