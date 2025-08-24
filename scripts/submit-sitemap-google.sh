#!/bin/bash

# Script para submeter sitemap diretamente ao Google
# Baseado na documentação oficial: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

SITEMAP_URL="https://www.shakirabr.com/sitemap.xml"
ENCODED_URL=$(echo "$SITEMAP_URL" | sed 's/:/%3A/g; s/\//%2F/g; s/\./%2E/g')

echo "🚀 Submetendo sitemap ao Google..."
echo "URL: $SITEMAP_URL"
echo "URL Encoded: $ENCODED_URL"
echo ""

# Submeter ao Google
GOOGLE_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" "https://www.google.com/ping?sitemap=$ENCODED_URL")
HTTP_STATUS=$(echo "$GOOGLE_RESPONSE" | grep -o "HTTP_STATUS:[0-9]*" | cut -d: -f2)

echo "📊 Resposta do Google:"
echo "Status HTTP: $HTTP_STATUS"

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Sitemap submetido com sucesso!"
    echo "⏰ O Google processará em 24-48 horas"
else
    echo "❌ Erro na submissão (Status: $HTTP_STATUS)"
fi

echo ""
echo "📋 Próximos passos:"
echo "1. Aguardar 24-48h para processamento"
echo "2. Verificar Google Search Console"
echo "3. Solicitar indexação individual se necessário"
