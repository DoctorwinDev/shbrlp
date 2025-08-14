#!/bin/bash

echo "🧹 INICIANDO LIMPEZA DO PROJETO SHAKIRABR"

# Remover pasta de backup (8MB+)
echo "📁 Removendo pasta backup..."
rm -rf backup/

# Remover arquivos de documentação antiga
echo "📄 Removendo documentação antiga..."
rm -f *.md
rm -f GUIA-NOVOS-ARTIGOS.md
rm -f BLOG-SEO-STRUCTURE.md
rm -f RESPONSIVE-FIXES.md
rm -f SEO-FIXES.md
rm -f SEO-GOOGLE.md
rm -f DEPLOY-VERCEL.md
rm -f GOOGLE_SCRIPT_CODE.js
rm -f PUSH-MANUAL.md
rm -f INSTRUCOES-NOVO-REPO.md
rm -f BLOG-SEO-STRATEGY.md
rm -f DEPLOY-DIGITALOCEAN.md
rm -f BIBLIOTECAS.md
rm -f PROJETO-FINALIZADO.md
rm -f REDESIGN-PREMIUM.md
rm -f IMAGENS.md
rm -f DEPLOY.md
rm -f DEPLOY-INSTRUCTIONS.md

# Remover arquivos do sistema
echo "🗑️ Removendo arquivos do sistema..."
rm -f .DS_Store
rm -f tsconfig.tsbuildinfo
rm -f build-manual.js

# Limpar cache do Next.js
echo "🧹 Limpando cache..."
rm -rf .next/
rm -rf node_modules/.cache/

# Verificar tamanho do projeto
echo "📊 Tamanho do projeto após limpeza:"
du -sh .

echo "✅ LIMPEZA CONCLUÍDA!"
echo "💡 Próximos passos:"
echo "   1. npm install"
echo "   2. npm run build"
echo "   3. git add ."
echo "   4. git commit -m 'chore: limpeza de arquivos não utilizados'"
echo "   5. git push"
