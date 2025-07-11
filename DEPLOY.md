# 🚀 Guia de Deploy - ShakiraBr Website

Este documento contém as instruções completas para fazer o deploy do site da ShakiraBr na Vercel.

## 📋 Pré-requisitos

- Conta na Vercel (vercel.com)
- Repositório GitHub com o código
- IDs do Google Analytics e Facebook Pixel

## 🔧 Configuração Inicial

### 1. Preparar o Repositório

```bash
# 1. Inicializar Git (se ainda não foi feito)
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Initial commit: ShakiraBr website"

# 4. Conectar com GitHub
git remote add origin https://github.com/seu-usuario/shakirabr-website.git
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Importe o repositório do GitHub
4. Configure as seguintes opções:

**Framework Preset:** Next.js
**Root Directory:** ./
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

## 🔐 Variáveis de Ambiente

Configure as seguintes variáveis no painel da Vercel:

### Obrigatórias

```env
SITE_URL=https://shakirabr.vercel.app  # ou seu domínio personalizado
SITE_NAME=ShakiraBr
```

### Analytics (Recomendadas)

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics 4
NEXT_PUBLIC_FB_PIXEL_ID=123456789       # Facebook Pixel
```

### Como Configurar:

1. No painel da Vercel, vá para **Settings > Environment Variables**
2. Adicione cada variável:
   - **Name:** Nome da variável (ex: `SITE_URL`)
   - **Value:** Valor da variável (ex: `https://shakirabr.com`)
   - **Environment:** Selecione `Production`, `Preview` e `Development`

## 📊 Configuração do Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com)
2. Crie uma nova propriedade
3. Configure para **GA4** (Google Analytics 4)
4. Copie o **Measurement ID** (formato: G-XXXXXXXXXX)
5. Adicione como variável `NEXT_PUBLIC_GA_ID` na Vercel

## 📘 Configuração do Facebook Pixel

1. Acesse [Facebook Business Manager](https://business.facebook.com)
2. Vá para **Events Manager**
3. Crie um novo Pixel
4. Copie o **Pixel ID** (número)
5. Adicione como variável `NEXT_PUBLIC_FB_PIXEL_ID` na Vercel

## 🌐 Domínio Personalizado

### Para usar shakirabr.com:

1. No painel da Vercel, vá para **Settings > Domains**
2. Clique em **Add Domain**
3. Digite `shakirabr.com`
4. Configure os DNS records no seu provedor de domínio:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Aguarde a propagação (até 48h)

## ✅ Checklist de Deploy

- [ ] Código commitado no GitHub
- [ ] Projeto importado na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Google Analytics configurado
- [ ] Facebook Pixel configurado
- [ ] Domínio personalizado configurado (opcional)
- [ ] SSL automático ativado
- [ ] Build executado com sucesso
- [ ] Site acessível publicamente

## 🔄 Deploy Automático

Após a configuração inicial, o deploy é automático:

1. **Push para `main`** → Deploy em produção
2. **Push para outras branches** → Deploy de preview
3. **Pull Requests** → Deploy de preview automático

## 📈 Monitoramento

### Analytics e Performance

- **Vercel Analytics:** Automático após deploy
- **Google Analytics:** Configure com o ID fornecido
- **Core Web Vitals:** Monitorado automaticamente

### Logs e Debugging

- **Build Logs:** Disponíveis no painel da Vercel
- **Function Logs:** Para APIs (se houver)
- **Edge Network:** Distribuição global automática

## 🆘 Troubleshooting

### Build Falhando

```bash
# Teste local primeiro
npm run build

# Verifique se todas as dependências estão instaladas
npm install

# Verifique erros de TypeScript
npm run type-check
```

### Imagens Não Carregando

1. Verifique se as imagens estão na pasta `public/`
2. Confirme os caminhos nos componentes
3. Verifique configuração do `next.config.js`

### Analytics Não Funcionando

1. Confirme se as variáveis de ambiente estão corretas
2. Verifique se os IDs estão no formato correto
3. Aguarde até 24h para dados aparecerem

## 🔒 Segurança

### Headers de Segurança (Já Configurados)

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

### HTTPS

- SSL automático pela Vercel
- Redirect HTTP → HTTPS automático
- Certificados gerenciados automaticamente

## 📞 Suporte

Se encontrar problemas:

1. Consulte os logs no painel da Vercel
2. Verifique a documentação do Next.js
3. Entre em contato: contato@shakirabr.com

---

**Última atualização:** Janeiro 2024
**Status:** ✅ Pronto para deploy 