import { test, expect } from '@playwright/test';

test.describe('SEO Validation - Camera Prive Gratis Article', () => {
  const articleUrl = 'http://localhost:3002/blog/camera-prive-gratis';

  test.beforeEach(async ({ page }) => {
    await page.goto(articleUrl, { waitUntil: 'domcontentloaded' });
  });

  test('H1 principal está presente e otimizado', async ({ page }) => {
    const h1 = page.locator('article header h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText(/Camera Prive Gratis: Vale a Pena\? Guia Completo 2025/);
  });

  test('meta tags essenciais estão configuradas', async ({ page }) => {
    // Title
    await expect(page).toHaveTitle(/Camera Prive Gratis: Vale a Pena\?/);
    
    // Description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Camera Prive GRATIS vale a pena/);
    
    // Keywords
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /camera prive gratis/);
    
    // Canonical
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://www.shakirabr.com/blog/camera-prive-gratis');
  });

  test('Open Graph tags estão otimizados', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Camera Prive Gratis/);
    
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /Camera Prive GRATIS vale a pena/);
    
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /camera-prive-gratis-2025.*header-gratis-vale-pena/);
    
    const ogType = page.locator('meta[property="og:type"]').first();
    await expect(ogType).toHaveAttribute('content', 'article');
  });

  test('estrutura de headings H2 está correta', async ({ page }) => {
    const h2Elements = page.locator('article h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(4);
    
    // Verifica headings específicos esperados
    await expect(page.locator('h2:has-text("O que Está Disponível na Versão Gratuita")')).toBeVisible();
    await expect(page.locator('h2:has-text("Limitações da Conta Gratuita")')).toBeVisible();
    await expect(page.locator('h2:has-text("Como Maximizar a Experiência Grátis")')).toBeVisible();
    await expect(page.locator('h2:has-text("Quando Vale Investir na Versão Premium")')).toBeVisible();
  });

  test('imagens têm alt text e estão otimizadas', async ({ page }) => {
    const images = page.locator('article img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(5);
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(5); // Flexível para badges curtos
      expect(src).toMatch(/(\/_next\/image|shields\.io)/);
      
      // Verifica se contém palavras-chave relevantes (mais flexível para badges)
      expect(alt?.toLowerCase()).toMatch(/(camera|prive|gratis|shakirabr|2025|instagram|twitter|telegram)/);
    }
  });

  test('internal links estão presentes', async ({ page }) => {
    const internalLinks = page.locator('article a[href^="/blog/"]');
    const linkCount = await internalLinks.count();
    expect(linkCount).toBeGreaterThan(2);
    
    // Verifica link para post principal
    await expect(page.locator('a[href="/blog/camera-prive-guia-definitivo-2025"]').first()).toBeVisible();
    await expect(page.locator('a[href="/blog/camera-prive-diferenca"]').first()).toBeVisible();
  });

  test('social media badges estão presentes', async ({ page }) => {
    const socialBadges = page.locator('article img[src*="shields.io"]');
    const badgeCount = await socialBadges.count();
    expect(badgeCount).toBe(3); // Instagram, Twitter, Telegram
    
    // Verifica se badges estão funcionando
    for (let i = 0; i < badgeCount; i++) {
      const badge = socialBadges.nth(i);
      await expect(badge).toBeVisible();
    }
  });

  test('structured data está presente e correto', async ({ page }) => {
    const structuredDataScripts = page.locator('script[type="application/ld+json"]');
    const count = await structuredDataScripts.count();
    expect(count).toBeGreaterThan(2);
    
    // Busca o script do artigo (BlogPosting)
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
    expect(blogPostingData['@type']).toBe('BlogPosting');
    expect(blogPostingData.headline).toMatch(/Camera Prive Gratis/);
    expect(blogPostingData.author.name).toBe('ShakiraBR');
  });

  test('keywords density está adequada', async ({ page }) => {
    const content = await page.locator('article').textContent();
    const lowerContent = content?.toLowerCase() || '';
    
    const keywordMatches = lowerContent.match(/camera prive gratis|camera prive free|versão gratuita/g);
    const keywordCount = keywordMatches?.length || 0;
    const totalWords = lowerContent.split(/\s+/).length;
    const density = (keywordCount / totalWords) * 100;
    
    expect(density).toBeLessThan(5); // Máximo 5% densidade
    expect(density).toBeGreaterThan(0.5); // Mínimo 0.5% densidade
  });

  test('responsividade mobile está funcionando', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const article = page.locator('article');
    await expect(article).toBeVisible();
    
    const images = page.locator('article img');
    const imageCount = await images.count();
    
    for (let i = 0; i < Math.min(imageCount, 3); i++) {
      const img = images.nth(i);
      const imageBox = await img.boundingBox();
      if (imageBox) {
        expect(imageBox.width).toBeLessThanOrEqual(375);
      }
    }
  });

  test('categorias e tags estão visíveis', async ({ page }) => {
    // Verifica se categoria "Guias" está presente
    await expect(page.locator('span:has-text("Guias")').first()).toBeVisible();
    
    // Verifica read time
    await expect(page.locator(':text("6 min")')).toBeVisible();
    
    // Verifica author no header do artigo
    await expect(page.locator('article header').locator(':text("ShakiraBR")').first()).toBeVisible();
  });

  test('performance da página está adequada', async ({ page }) => {
    const startTime = Date.now();
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(8000); // 8 segundos máximo
    
    // Verifica se não há erros de console críticos
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleLogs.push(msg.text());
      }
    });
    
    await page.reload();
    await page.waitForLoadState('domcontentloaded');
    
    const criticalErrors = consoleLogs.filter(log => 
      !log.includes('hydration') && 
      !log.includes('useLayoutEffect') &&
      !log.includes('Elementos com problemas')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('links externos abrem em nova aba', async ({ page }) => {
    const externalLinks = page.locator('article a[href^="http"]:not([href*="shakirabr.com"])');
    const linkCount = await externalLinks.count();
    
    for (let i = 0; i < Math.min(linkCount, 3); i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');
    }
  });
});
