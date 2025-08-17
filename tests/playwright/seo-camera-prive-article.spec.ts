import { test, expect } from '@playwright/test';

test.describe('Camera Privê Article - SEO Tests', () => {
  const articleUrl = 'http://localhost:3002/blog/camera-prive-diferenca';
  
  test.beforeEach(async ({ page }) => {
    await page.goto(articleUrl);
  });

  test('should have correct page title and meta description', async ({ page }) => {
    // Verifica título da página
    await expect(page).toHaveTitle(/Camera Privê: O Guia Definitivo dos Shows Privados nas Principais Plataformas 2025/);
    
    // Verifica meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Camera privê: guia completo sobre shows privados em Camera Prive, Chaturbate e Stripchat/);
  });

  test('should have proper heading structure (H1, H2, H3)', async ({ page }) => {
    // Verifica presença de H1 principal no header do artigo
    const mainH1 = page.locator('article header h1').first();
    await expect(mainH1).toContainText('Camera Privê: O Guia Definitivo dos Shows Privados');
    
    // Verifica presença de H2s
    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(3);
    
    // Verifica estrutura hierárquica adequada
    const firstH2 = h2Elements.first();
    await expect(firstH2).toContainText('O que Significa');
  });

  test('should have optimized meta tags for SEO', async ({ page }) => {
    // Verifica meta keywords
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /camera privê/);
    
    // Verifica meta author
    const metaAuthor = page.locator('meta[name="author"]');
    await expect(metaAuthor).toHaveAttribute('content', 'ShakiraBR');
    
    // Verifica canonical URL
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /www\.shakirabr\.com\/blog\/camera-prive-diferenca/);
  });

  test('should have proper Open Graph tags', async ({ page }) => {
    // Verifica OG title
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Camera Privê: O Guia Definitivo dos Shows Privados/);
    
    // Verifica OG description
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /Camera privê: guia completo sobre shows privados/);
    
    // Verifica OG image
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /blog\/images\/shows-privados-2025/);
    
    // Verifica OG type (primeiro elemento)
    const ogType = page.locator('meta[property="og:type"]').first();
    await expect(ogType).toHaveAttribute('content', 'article');
  });

  test('should have proper structured data (JSON-LD)', async ({ page }) => {
    // Verifica presença de structured data
    const structuredData = page.locator('script[type="application/ld+json"]');
    const structuredDataCount = await structuredData.count();
    expect(structuredDataCount).toBeGreaterThan(0);
    
    // Verifica BlogPosting schema
    const blogPostingSchema = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@type'] === 'BlogPosting') {
          return data;
        }
      }
      return null;
    });
    
            expect(blogPostingSchema).toBeTruthy();
        expect(blogPostingSchema?.headline).toContain('Camera Privê');
        expect(blogPostingSchema?.author?.name).toBe('ShakiraBR');
  });

  test('should have optimized images with alt text and titles', async ({ page }) => {
    // Aguarda carregamento das imagens
    await page.waitForLoadState('networkidle');
    
    // Verifica imagem principal do artigo na seção hero
    const heroImage = page.locator('img[alt*="Camera Privê"]').first();
    await expect(heroImage).toBeVisible();
    await expect(heroImage).toHaveAttribute('alt', /Camera Privê.*2025/);
    
    // Verifica se há imagens carregadas
    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);
  });

  test('should have proper internal and external links', async ({ page }) => {
    // Verifica links internos para shakirabr.com (sem www)
    const internalLinks = page.locator('a[href*="shakirabr.com"]');
    const linksCount = await internalLinks.count();
    expect(linksCount).toBeGreaterThan(2);
    
    // Verifica texto ShakiraBR está presente na página
    const shakiraBRText = page.locator('text=ShakiraBR');
    const shakiraBRTextCount = await shakiraBRText.count();
    expect(shakiraBRTextCount).toBeGreaterThan(0);
    
    // Verifica breadcrumb navigation
    const breadcrumbSchema = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@type'] === 'BreadcrumbList') {
          return data;
        }
      }
      return null;
    });
    
    expect(breadcrumbSchema).toBeTruthy();
    expect(breadcrumbSchema?.itemListElement?.length).toBeGreaterThan(2);
  });

  test('should have optimal content structure for SEO', async ({ page }) => {
    // Aguarda carregamento do conteúdo
    await page.waitForLoadState('networkidle');
    
    // Verifica presença de palavras-chave no conteúdo usando locators
    await expect(page.locator('text=camera privê')).toBeVisible();
    await expect(page.locator('text=shows privados')).toBeVisible();
    await expect(page.locator('text=ShakiraBR')).toBeVisible();
    
    // Verifica se o artigo tem conteúdo substancial
    const articleContent = page.locator('article');
    await expect(articleContent).toBeVisible();
    
    const content = await articleContent.textContent();
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(1000); // Artigo deve ter pelo menos 1000 caracteres
  });

  test('should have proper article metadata', async ({ page }) => {
    // Verifica categoria do artigo
    const categoryTag = page.locator('span:has-text("Guias")').first();
    await expect(categoryTag).toBeVisible();
    
    // Verifica autor do artigo
    const authorInfo = page.locator(':text("ShakiraBR")').first();
    await expect(authorInfo).toBeVisible();
    
    // Verifica data de publicação
    const publishDate = page.locator(':text("13/01/2025")');
    await expect(publishDate).toBeVisible();
    
    // Verifica tempo de leitura
    const readTime = page.locator(':text("8 min de leitura")');
    await expect(readTime).toBeVisible();
  });

  test('should have mobile-friendly responsive design', async ({ page }) => {
    // Testa em mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Verifica se o conteúdo está visível
    const mainContent = page.locator('article');
    await expect(mainContent).toBeVisible();
    
    // Verifica se imagens são responsivas
    const images = page.locator('article img');
    const firstImage = images.first();
    
    const imageBox = await firstImage.boundingBox();
    if (imageBox) {
      expect(imageBox.width).toBeLessThanOrEqual(375); // Não ultrapassa viewport
    }
  });

  test('should have fast loading performance', async ({ page }) => {
    const startTime = Date.now();
    
    // Aguarda carregamento completo
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Verifica se carregou em menos de 3 segundos
    expect(loadTime).toBeLessThan(3000);
    
    // Verifica se carregou adequadamente
    const mainContent = page.locator('article');
    await expect(mainContent).toBeVisible();
  });

  test('should have proper social sharing tags', async ({ page }) => {
    // Verifica Twitter Card
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    
    const twitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute('content', /Camera Privê.*2025/);
    
    const twitterImage = page.locator('meta[name="twitter:image"]');
    await expect(twitterImage).toHaveAttribute('content', /blog\/images\/shows-privados-2025/);
  });

  test('should have table with comparative data', async ({ page }) => {
    // Aguarda carregamento completo
    await page.waitForLoadState('networkidle');
    
    // Verifica presença de dados comparativos (pode ser em tabela ou lista)
    await expect(page.locator('text=Camera Prive')).toBeVisible();
    await expect(page.locator('text=Chaturbate')).toBeVisible();
    await expect(page.locator('text=PIX')).toBeVisible();
    
    // Verifica se há dados de preços comparativos
    await expect(page.locator('text=R$')).toBeVisible();
  });
});
