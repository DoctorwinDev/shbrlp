# 🚀 Deploy ShakiraBr - DigitalOcean + Domínio Personalizado

## 📋 Checklist de Preparação

✅ **Projeto está pronto:**
- Next.js 13.5.6 configurado
- Plus Jakarta Sans implementada
- Todas as seções funcionais
- Imagens otimizadas
- SEO configurado

## 🛠️ Opções de Deploy na DigitalOcean

### **Opção 1: App Platform (Recomendada)**
- Mais fácil e rápida
- Deploy automático via GitHub
- SSL automático
- Escalabilidade automática

### **Opção 2: Droplet com Docker**
- Controle total do servidor
- Mais barata para sites pequenos
- Configuração manual necessária

---

## 🚀 OPÇÃO 1: App Platform (Recomendada)

### **Passo 1: Preparar o Código**

```bash
# 1. Adicionar script de build para produção
npm run build

# 2. Testar localmente
npm run start

# 3. Commit final
git add .
git commit -m "Ready for production deploy"
git push origin main
```

### **Passo 2: Configurar App Platform**

1. **Acessar DigitalOcean**
   - Login em digitalocean.com
   - Ir para "App Platform"
   - Clicar "Create App"

2. **Conectar Repositório**
   - Escolher GitHub
   - Selecionar repositório `shakirabr`
   - Branch: `main`
   - Autodeploy: ✅ Ativado

3. **Configurar Build**
   ```yaml
   # Configurações automáticas:
   Build Command: npm run build
   Run Command: npm start
   Environment: Node.js
   ```

4. **Configurar Variáveis de Ambiente**
   ```env
   NODE_ENV=production
   SITE_URL=https://seu-dominio.com
   ```

### **Passo 3: Configurar Domínio**

1. **No CheapDomain:**
   - Ir em DNS Management
   - Adicionar registro A:
     ```
     Type: A
     Name: @
     Value: [IP do App Platform]
     TTL: 300
     ```
   - Adicionar registro CNAME:
     ```
     Type: CNAME
     Name: www
     Value: seu-dominio.com
     TTL: 300
     ```

2. **No DigitalOcean App Platform:**
   - Settings → Domains
   - Add Domain: `seu-dominio.com`
   - Add Domain: `www.seu-dominio.com`
   - ✅ SSL automático ativado

### **Passo 4: Deploy Final**
- App Platform fará deploy automático
- SSL será configurado automaticamente
- Site estará live em ~5-10 minutos

---

## 🖥️ OPÇÃO 2: Droplet com Docker

### **Passo 1: Criar Droplet**

```bash
# Especificações mínimas:
- Ubuntu 22.04
- 1GB RAM (Regular Intel - $6/mês)
- 25GB SSD
- Região: New York 1
```

### **Passo 2: Configurar Servidor**

```bash
# 1. Conectar ao droplet
ssh root@your-droplet-ip

# 2. Atualizar sistema
apt update && apt upgrade -y

# 3. Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 4. Instalar Docker Compose
apt install docker-compose -y

# 5. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# 6. Instalar Nginx
apt install nginx -y

# 7. Instalar Certbot para SSL
apt install certbot python3-certbot-nginx -y
```

### **Passo 3: Fazer Deploy**

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/shakirabr.git
cd shakirabr

# 2. Instalar dependências
npm install

# 3. Build para produção
npm run build

# 4. Configurar PM2 para processo
npm install -g pm2
pm2 start npm --name "shakirabr" -- start
pm2 startup
pm2 save
```

### **Passo 4: Configurar Nginx**

```bash
# Criar configuração do site
nano /etc/nginx/sites-available/shakirabr
```

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Ativar site
ln -s /etc/nginx/sites-available/shakirabr /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# Configurar SSL
certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

---

## 🌐 Configuração do Domínio (CheapDomain)

### **DNS Records Necessários:**

**Para App Platform:**
```
A     @     [IP do App Platform]    300
CNAME www   seu-dominio.com         300
```

**Para Droplet:**
```
A     @     [IP do Droplet]         300
CNAME www   seu-dominio.com         300
```

---

## 🔧 Configurações de Produção

### **1. Atualizar next.config.js**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['picsum.photos'],
    unoptimized: false,
  },

  // Produção
  trailingSlash: false,
  output: 'standalone', // Para Docker
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### **2. Criar .env.production**

```env
NODE_ENV=production
SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

### **3. Otimizar package.json**

```json
{
  "scripts": {
    "dev": "next dev -p 3002",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint",
    "deploy": "npm run build && npm run start"
  }
}
```

---

## 🚦 Backend e APIs

### **Opções para Backend:**

1. **Sem Backend (Atual)**
   - Site estático/JAMstack
   - Forms usam serviços externos
   - Perfeito para landing pages

2. **Next.js API Routes**
   ```bash
   # Adicionar ao projeto:
   mkdir src/pages/api
   # Criar endpoints conforme necessário
   ```

3. **Backend Separado**
   - Node.js + Express
   - Deploy em droplet separado
   - Banco de dados PostgreSQL/MongoDB

### **Para Formulários de Contato:**

```bash
# Opções recomendadas:
1. Formspree.io - Grátis até 50 forms/mês
2. Netlify Forms - Se migrar para Netlify
3. EmailJS - JavaScript puro
4. API Routes do Next.js
```

---

## 💰 Custos Estimados

### **App Platform:**
- Starter: $5/mês
- Basic: $12/mês ✅ **Recomendado**
- Pro: $25/mês

### **Droplet:**
- 1GB RAM: $6/mês ✅ **Econômica**
- 2GB RAM: $12/mês
- 4GB RAM: $24/mês

### **Domínio:**
- CheapDomain: ~$10-15/ano

**Total mensal: $6-12 (+ domínio anual)**

---

## 🔥 Recomendação Final

**Para ShakiraBr, recomendo:**

1. **DigitalOcean App Platform ($12/mês)**
   - Setup mais rápido
   - SSL automático
   - Escalabilidade automática
   - Menos manutenção

2. **Domínio do CheapDomain**
   - Apontar DNS para App Platform
   - SSL gratuito via Let's Encrypt

3. **Monitoramento**
   - Google Analytics já configurado
   - DigitalOcean Monitoring incluído

**Tempo de setup: ~30 minutos**
**Site online: Em 1 hora**

---

## 🆘 Troubleshooting

### **Problemas Comuns:**

1. **Build falha:**
   ```bash
   npm run build --verbose
   # Verificar erros de TypeScript/ESLint
   ```

2. **Domínio não aponta:**
   - Aguardar propagação DNS (24-48h)
   - Verificar no whatsmydns.net

3. **SSL não funciona:**
   - Aguardar emissão do certificado
   - Verificar configuração do domínio

**Precisa de ajuda? Posso te guiar através de cada passo!** 🚀 