# 🚀 Deploy no Vercel - Guia Completo

## Passo 1: Preparar o Projeto

### 1.1 Verificar se tudo está funcionando:
```bash
npm run build
npm run start
```

### 1.2 Commit final:
```bash
git add .
git commit -m "Projeto pronto para deploy"
git push
```

## Passo 2: Deploy no Vercel

### 2.1 Acesse: https://vercel.com

### 2.2 Faça login com GitHub

### 2.3 Importe seu repositório:
- Clique em "New Project"
- Selecione: `DoctorwinDev/shbrlp`
- Clique em "Import"

### 2.4 Configurações de Deploy:
```
Project Name: shakirabr
Framework: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 2.5 Variáveis de Ambiente (se necessário):
```
NEXT_PUBLIC_SITE_URL=https://shakirabr.vercel.app
```

### 2.6 Clique em "Deploy"

## Passo 3: Configurar Domínio Custom

### 3.1 No painel da Vercel:
- Vá em "Settings" > "Domains"
- Adicione: `shakirabr.com`
- Adicione: `www.shakirabr.com`

### 3.2 No seu provedor de domínio (NameCheap):

**Registros DNS:**
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 3.3 Aguarde propagação DNS (5-30 minutos)

## Passo 4: Configurar SSL

✅ **Automático** - Vercel configura SSL automaticamente
- Certificado Let's Encrypt
- Renovação automática
- HTTPS forçado

## Passo 5: Configurar Redirects (Opcional)

Crie arquivo `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/www",
      "destination": "/",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## Resultado Final

✅ **Site no ar:** https://shakirabr.com  
✅ **SSL ativo:** HTTPS funcionando  
✅ **Deploy automático:** Cada push atualiza o site  
✅ **Performance:** 100/100 no PageSpeed  

## Comandos Úteis

### Re-deploy manual:
```bash
git add .
git commit -m "Update content"
git push
# Deploy automático acontece
```

### Ver logs de build:
- Acesse Vercel Dashboard
- Clique no projeto
- Vá em "Functions" > "Logs"

## URLs Importantes

- **Site:** https://shakirabr.com
- **Blog:** https://shakirabr.com/blog  
- **Sitemap:** https://shakirabr.com/sitemap.xml
- **Robots:** https://shakirabr.com/robots.txt

## Troubleshooting

### Build falha?
```bash
# Teste local:
npm run build

# Se der erro, corrija e:
git add .
git commit -m "Fix build"  
git push
```

### Domínio não funciona?
- Verifique DNS no NameCheap
- Aguarde propagação (até 24h)
- Use https://dnschecker.org

### Site lento?
- Vercel tem CDN global
- Otimização automática de imagens
- Performance já otimizada

## Custos

✅ **Vercel Hobby:** Gratuito para sempre
- Builds ilimitados
- 100GB bandwidth/mês  
- SSL grátis
- Domínio custom grátis

💰 **Vercel Pro:** $20/mês (só se precisar)
- Analytics avançados
- Mais bandwidth
- Suporte prioritário 