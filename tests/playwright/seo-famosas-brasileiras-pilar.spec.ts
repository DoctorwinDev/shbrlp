import { test, expect } from '@playwright/test';

test.describe('SEO Validation - ARTIGO PILAR Famosas Brasileiras', () => {
  const articleUrl = 'http://localhost:3002/blog/famosas-brasileiras-nuas-guia-completo-alternativas-premium-2025';

  test.beforeEach(async ({ page }) => {
    await page.goto(articleUrl, { waitUntil: 'domcontentloaded' });
  });

  test('H1 principal está otimizado para keywords', async ({ page }) => {
    const h1 = page.locator('article header h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText(/Famosas Brasileiras Nuas: Guia Completo.*Alternativas Premium 2025/);
  });

  test('meta tags essenciais com CTR otimizado', async ({ page }) => {
    // Title com CTR alto
    await expect(page).toHaveTitle(/Famosas Brasileiras Nuas: Guia Completo.*Alternativas Premium 2025/);
    
    // Meta description com emoji e gatilhos
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /🔥.*ALTERNATIVAS LEGAIS.*ShakiraBR.*4K.*R\$ 29\/mês/);
    
    // Keywords principais
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /famosas brasileiras nuas/);
    
    // Canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://www.shakirabr.com/blog/famosas-brasileiras-nuas-guia-completo-alternativas-premium-2025');
  });

  test('structured data BlogPosting está correto', async ({ page }) => {
    const structuredDataScripts = page.locator('script[type="application/ld+json"]');
    const count = await structuredDataScripts.count();
    expect(count).toBeGreaterThan(2);
    
    // Busca BlogPosting
    let blogPostingData = null;
    for (let i = 0; i < count; i++) {
      const script = structuredDataScripts.nth(i);
      const jsonData = await script.textContent();
      if (jsonData) {
        const data = JSON.parse(jsonData);
        if (data['@type'] === 'BlogPosting') {
          blogPostingData = data;
          break;
        }
      }
    }
    
    expect(blogPostingData).toBeTruthy();
    expect(blogPostingData.headline).toMatch(/Famosas Brasileiras/);
    expect(blogPostingData.author.name).toBe('ShakiraBR');
    expect(blogPostingData.wordCount).toBeGreaterThan(3000); // Artigo longo
  });

  test('imagens com alt text persuasivo estão otimizadas', async ({ page }) => {
    const images = page.locator('article img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(10); // 11 imagens + badges
    
    // Verificar imagem principal (header)
    const headerImg = page.locator('img[src*="header-famosas-brasileiras-2025"]');
    await expect(headerImg).toBeVisible();
    await expect(headerImg).toHaveAttribute('alt', /REVELADO.*ShakiraBR.*superam.*famosa/);
    
    // Verificar algumas imagens específicas com alt persuasivo
    const comparativoImg = page.locator('img[src*="famosas-vs-premium-comparativo"]');
    await expect(comparativoImg).toHaveAttribute('alt', /DIFERENÇA BRUTAL.*ShakiraBR.*superam.*aspectos/);
    
    const rankingImg = page.locator('img[src*="ranking-famosas-brasileiras-2025"]');
    await expect(rankingImg).toHaveAttribute('alt', /RANKING OFICIAL.*ShakiraBR.*TODAS/);
    
    // Verificar se todas imagens têm Next.js optimization
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i);
      const src = await img.getAttribute('src');
      expect(src).toMatch(/(\/_next\/image|shields\.io)/);
    }
  });

  test('estrutura H2 completa para artigo PILAR', async ({ page }) => {
    const h2Elements = page.locator('article h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(8); // Artigo pilar extenso
    
    // Verifica seções principais
    await expect(page.locator('h2:has-text("O Que São Famosas Brasileiras")')).toBeVisible();
    await expect(page.locator('h2:has-text("Top 15 Famosas Brasileiras")')).toBeVisible();
    await expect(page.locator('h2:has-text("Alternativas Legais e Seguras")')).toBeVisible();
    await expect(page.locator('h2:has-text("ShakiraBR: A Brasileira Mais Famosa")')).toBeVisible();
    await expect(page.locator('h2:has-text("Melhores Plataformas")')).toBeVisible();
    await expect(page.locator('h2:has-text("Segurança e Privacidade")')).toBeVisible();
  });

  test('internal linking estratégico está presente', async ({ page }) => {
    const internalLinks = page.locator('article a[href^="/blog/"]');
    const linkCount = await internalLinks.count();
    expect(linkCount).toBeGreaterThan(3);
    
    // Links para outros artigos do cluster
    await expect(page.locator('a[href="/blog/camera-prive-guia-definitivo-2025"]').first()).toBeVisible();
    await expect(page.locator('a[href="/blog/camera-prive-gratis"]').first()).toBeVisible();
    await expect(page.locator('a[href="/blog/camera-prive-diferenca"]').first()).toBeVisible();
  });

  test('keywords density adequada para artigo PILAR', async ({ page }) => {
    const content = await page.locator('article').textContent();
    const lowerContent = content?.toLowerCase() || '';
    
    // Verificar densidade da keyword principal
    const mainKeywordMatches = lowerContent.match(/famosas brasileiras nuas|famosas brasileiras/g);
    const mainKeywordCount = mainKeywordMatches?.length || 0;
    
    // Verificar densidade da marca
    const brandMatches = lowerContent.match(/shakirabr/g);
    const brandCount = brandMatches?.length || 0;
    
    const totalWords = lowerContent.split(/\s+/).length;
    const mainKeywordDensity = (mainKeywordCount / totalWords) * 100;
    const brandDensity = (brandCount / totalWords) * 100;
    
    expect(mainKeywordDensity).toBeLessThan(3); // Não over-optimization
    expect(mainKeywordDensity).toBeGreaterThan(0.5); // Presença suficiente
    expect(brandCount).toBeGreaterThan(30); // Brand authority
    
    console.log(`Keyword density: ${mainKeywordDensity.toFixed(2)}%, Brand mentions: ${brandCount}`);
  });

  test('tabelas comparativas estão formatadas', async ({ page }) => {
    const tables = page.locator('article table');
    const tableCount = await tables.count();
    expect(tableCount).toBeGreaterThan(3); // Múltiplas tabelas
    
    // Verificar se tabelas têm headers
    for (let i = 0; i < tableCount; i++) {
      const table = tables.nth(i);
      const headers = table.locator('th');
      const headerCount = await headers.count();
      expect(headerCount).toBeGreaterThan(2);
    }
  });

  test('social media badges funcionando', async ({ page }) => {
    const socialBadges = page.locator('article img[src*="shields.io"]');
    const badgeCount = await socialBadges.count();
    expect(badgeCount).toBe(3); // Instagram, Twitter, Telegram
    
    // Verificar se badges estão carregando
    for (let i = 0; i < badgeCount; i++) {
      const badge = socialBadges.nth(i);
      await expect(badge).toBeVisible();
    }
  });

  test('categorias e tags do artigo PILAR', async ({ page }) => {
    // Verifica categoria "Guias Premium"
    await expect(page.locator('span:has-text("Guias Premium")').first()).toBeVisible();
    
    // Verifica read time (18 min para artigo pilar)
    await expect(page.locator(':text("18 min")')).toBeVisible();
    
    // Verifica author
    await expect(page.locator('article header').locator(':text("ShakiraBR")').first()).toBeVisible();
    
    // Verifica featured article
    const featuredIndicator = page.locator('.featured, [data-featured="true"], :text("Destaque")');
    // Não obrigatório ter indicador visual, mas artigo está marcado como featured: true
  });

  test('responsividade mobile completa', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    
    const article = page.locator('article');
    await expect(article).toBeVisible();
    
    // Verificar se imagens não quebram layout
    const images = page.locator('article img');
    const imageCount = await images.count();
    
    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i);
      const imageBox = await img.boundingBox();
      if (imageBox) {
        expect(imageBox.width).toBeLessThanOrEqual(375);
        expect(imageBox.height).toBeGreaterThan(0);
      }
    }
    
    // Verificar se tabelas são scrollable em mobile
    const tables = page.locator('article table');
    const tableCount = await tables.count();
    if (tableCount > 0) {
      const firstTable = tables.first();
      await expect(firstTable).toBeVisible();
    }
  });

  test('performance adequada para artigo longo', async ({ page }) => {
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(10000); // 10 segundos para artigo longo
    
    // Verificar se conteúdo principal carregou
    const mainContent = page.locator('article');
    await expect(mainContent).toBeVisible();
    
    // Verificar word count (artigo PILAR deve ser extenso)
    const content = await page.locator('article').textContent();
    const wordCount = content?.split(/\s+/).length || 0;
    expect(wordCount).toBeGreaterThan(3000); // Artigo pilar longo
    
    console.log(`Artigo pilar: ${wordCount} palavras, carregado em ${loadTime}ms`);
  });

  test('CTAs e call-to-action estão presentes', async ({ page }) => {
    // Verificar se há botões/links para ShakiraBR
    const ctaLinks = page.locator('article').locator(':text("ACESSAR"), :text("ACESSO"), :text("www.shakirabr.com")');
    const ctaCount = await ctaLinks.count();
    expect(ctaCount).toBeGreaterThan(5); // Múltiplos CTAs no artigo pilar
    
    // Verificar se há códigos promocionais
    await expect(page.locator(':text("PREMIUM2025")')).toBeVisible();
  });
});
