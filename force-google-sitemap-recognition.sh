#!/bin/bash

# Script para forçar reconhecimento do sitemap pelo Google Search Console
# Autor: ShakiraBR Technical Team
# Data: $(date +%Y-%m-%d)

echo "🚀 INICIANDO PROCESSO DE SUBMISSÃO FORÇADA DO SITEMAP"
echo "=================================================="

# URLs dos sitemaps
MAIN_SITEMAP="https://www.shakirabr.com/sitemap.xml"
BLOG_SITEMAP="https://www.shakirabr.com/blog-sitemap.xml"

echo ""
echo "✅ 1. VERIFICANDO ACESSIBILIDADE DOS SITEMAPS"
echo "----------------------------------------------"

# Verificar sitemap principal
echo "📄 Verificando sitemap principal..."
curl -s -o /dev/null -w "Status: %{http_code} | Tempo: %{time_total}s" "$MAIN_SITEMAP"
echo ""

# Verificar sitemap do blog  
echo "📄 Verificando sitemap do blog..."
curl -s -o /dev/null -w "Status: %{http_code} | Tempo: %{time_total}s" "$BLOG_SITEMAP"
echo ""

echo ""
echo "✅ 2. PING DIRETO AO GOOGLE"
echo "----------------------------"

# Fazer ping dos sitemaps para o Google
echo "🔄 Enviando ping do sitemap principal para Google..."
curl -s "https://www.google.com/ping?sitemap=${MAIN_SITEMAP}" | head -3
echo ""

echo "🔄 Enviando ping do sitemap do blog para Google..."
curl -s "https://www.google.com/ping?sitemap=${BLOG_SITEMAP}" | head -3
echo ""

echo ""
echo "✅ 3. SUBMISSÃO VIA INDEXING API (SIMULAÇÃO)"
echo "---------------------------------------------"

# URLs específicas dos artigos para submissão individual
ARTICLES=(
    "https://www.shakirabr.com/blog/fotos-famosas-brasileiras-galerias-premium-legais-2025"
    "https://www.shakirabr.com/blog/famosas-brasileiras-nuas-guia-completo-alternativas-premium-2025"
    "https://www.shakirabr.com/blog/camera-prive-gratis"
    "https://www.shakirabr.com/blog/ensaio-sensual-dicas-fotos-casa-guia-2025"
    "https://www.shakirabr.com/blog/camera-prive-diferenca"
    "https://www.shakirabr.com/blog/camera-prive-guia-definitivo-2025"
)

echo "📝 URLs para submissão individual no Google Search Console:"
echo ""
for url in "${ARTICLES[@]}"; do
    echo "   → $url"
    # Verificar se a URL está acessível
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
        echo "     ✅ Status: $status (OK)"
    else
        echo "     ❌ Status: $status (ERRO)"
    fi
done

echo ""
echo "✅ 4. VERIFICAÇÃO DE ROBOTS.TXT"
echo "--------------------------------"
echo "🔍 Verificando se robots.txt permite acesso ao sitemap..."
curl -s "https://www.shakirabr.com/robots.txt" | grep -i "sitemap\|user-agent\|disallow"

echo ""
echo "✅ 5. AÇÕES MANUAIS RECOMENDADAS NO GOOGLE SEARCH CONSOLE"
echo "==========================================================="
echo ""
echo "🎯 EXECUTE ESTAS AÇÕES IMEDIATAMENTE:"
echo ""
echo "1️⃣ RESUBMETER SITEMAP:"
echo "   • Vá para: Google Search Console → Sitemaps"
echo "   • REMOVA o sitemap atual: $MAIN_SITEMAP"
echo "   • AGUARDE 5 minutos"
echo "   • ADICIONE novamente: $MAIN_SITEMAP"
echo ""
echo "2️⃣ SUBMETER SITEMAP DO BLOG SEPARADAMENTE:"
echo "   • Adicione também: $BLOG_SITEMAP"
echo ""
echo "3️⃣ FORÇAR INDEXAÇÃO INDIVIDUAL:"
echo "   • Vá para: URL Inspection"
echo "   • Teste CADA artigo individualmente"
echo "   • Clique em 'Request Indexing' para cada um"
echo ""
echo "4️⃣ VERIFICAR EM 24-48H:"
echo "   • Retornar ao URL Inspection"
echo "   • Verificar se 'Referring sitemaps' aparece"
echo ""
echo "🚨 DICA AVANÇADA:"
echo "Se o problema persistir após 48h, pode ser necessário:"
echo "• Gerar sitemap com timestamps mais recentes"
echo "• Adicionar priority tags no sitemap"
echo "• Usar Google's URL Removal Tool temporariamente"
echo ""
echo "✅ PROCESSO CONCLUÍDO - $(date)"
echo "============================================"
