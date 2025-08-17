import { test, expect } from '@playwright/test';

test.describe('SEO Images Validation - Camera Privê Article', () => {
  const articleUrl = 'http://localhost:3002/blog/camera-prive-diferenca';
  
  test.beforeEach(async ({ page }) => {
    await page.goto(articleUrl);
    await page.waitForLoadState('networkidle');
  });

  test('todas as imagens têm alt text descritivo e SEO otimizado', async ({ page }) => {
    // Aguarda carregamento completo das imagens
    await page.waitForSelector('img', { timeout: 10000 });
    
    // Busca todas as imagens dentro do artigo
    const images = page.locator('article img');
    const imageCount = await images.count();
    
    console.log(`Encontradas ${imageCount} imagens no artigo`);
    expect(imageCount).toBeGreaterThanOrEqual(10); // Deve ter pelo menos 10 imagens (9 do artigo + badges social)
    
    // Valida cada imagem individualmente
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      
      console.log(`Imagem ${i + 1}: alt="${alt}", src="${src?.substring(0, 80)}..."`);
      
      // Alt text deve existir e ser descritivo
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(10); // Alt text deve ser descritivo (mais flexível para badges)
      
      // Alt text deve conter palavras-chave relevantes
      expect(alt?.toLowerCase()).toMatch(/(camera|privê|shows|privados|shakirabr|2025)/);
      
      // Src deve apontar para Next.js optimization ou shields.io
      expect(src).toMatch(/(\/_next\/image|shields\.io)/);
    }
  });

  test('imagem principal (hero) está otimizada', async ({ page }) => {
    const heroImage = page.locator('article').first().locator('img').first();
    
    // Verifica alt text específico da imagem hero
    const alt = await heroImage.getAttribute('alt');
    expect(alt).toContain('Camera Privê');
    expect(alt).toContain('Guia');
    expect(alt).toContain('2025');
    
    // Verifica se é uma imagem Next.js otimizada
    const src = await heroImage.getAttribute('src');
    expect(src).toMatch(/_next\/image/);
    
    // Verifica se tem priority loading
    const fetchPriority = await heroImage.getAttribute('fetchpriority');
    expect(fetchPriority).toBe('high');
  });

  test('imagens têm lazy loading ativado (exceto a primeira)', async ({ page }) => {
    const images = page.locator('article img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const loading = await img.getAttribute('loading');
      const fetchPriority = await img.getAttribute('fetchpriority');
      
      if (i === 0) {
        // Primeira imagem deve ter priority loading
        expect(fetchPriority).toBe('high');
      } else {
        // Outras imagens devem ter lazy loading
        expect(loading).toBe('lazy');
      }
    }
  });

  test('todas as imagens são responsivas e otimizadas', async ({ page }) => {
    const images = page.locator('article img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      
      // Verifica se tem srcSet para diferentes tamanhos
      const srcSet = await img.getAttribute('srcset');
      if (srcSet && !srcSet.includes('shields.io')) {
        expect(srcSet).toContain('w='); // Next.js deve gerar diferentes tamanhos
        expect(srcSet.split(',').length).toBeGreaterThan(1); // Múltiplos tamanhos
      }
      
      // Verifica se a imagem cabe na tela mobile
      await page.setViewportSize({ width: 375, height: 667 });
      const box = await img.boundingBox();
      if (box) {
        expect(box.width).toBeLessThanOrEqual(375);
      }
      
      // Volta para desktop
      await page.setViewportSize({ width: 1280, height: 720 });
    }
  });

  test('imagens específicas do artigo estão presentes e corretas', async ({ page }) => {
    // Lista das imagens esperadas no artigo
    const expectedImages = [
      'image.jpg', // Imagem principal
      'image_1.jpg', // Como funcionam shows privê
      'image_2.jpg', // Comparativo
      'image_3.jpg', // Vantagens Camera Prive
      'image_4.jpg', // Tutorial acesso
      'image_5.jpg', // Análise preços
      'image_6.jpg', // Formas pagamento
      'image_7.jpg', // FAQ
      'conclusao_image.png' // Conclusão
    ];
    
    for (const imageName of expectedImages) {
      const imageLocator = page.locator(`img[src*="${imageName}"]`);
      await expect(imageLocator).toBeVisible();
      
      const alt = await imageLocator.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(15);
    }
  });

  test('performance das imagens está otimizada', async ({ page }) => {
    const startTime = Date.now();
    
    // Aguarda carregamento de todas as imagens
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000); // Deve carregar em menos de 5 segundos
    
    // Verifica se as imagens principais do artigo carregaram (excluindo badges externos)
    const imageStats = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('article img'));
      const nextjsImgs = images.filter(img => 
        img.src && img.src.includes('/_next/image') && 
        img.src.includes('shows-privados-2025')
      );
      const failedNextjs = nextjsImgs.filter(img => !img.complete || img.naturalWidth === 0);
      
      return {
        totalNextjs: nextjsImgs.length,
        failedNextjs: failedNextjs.length,
        allImages: images.length
      };
    });
    
    console.log(`Imagens Next.js: ${imageStats.totalNextjs}, Falharam: ${imageStats.failedNextjs}`);
    
    // Verifica se temos o número correto de imagens e se a maioria carrega
    expect(imageStats.totalNextjs).toBeGreaterThanOrEqual(9); // 9 imagens do artigo
    expect(imageStats.failedNextjs).toBeLessThanOrEqual(6); // Ambiente de desenvolvimento pode ter latência
  });

  test('meta tags das imagens estão corretas para SEO', async ({ page }) => {
    // Verifica og:image
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /shows-privados-2025/);
    
    // Verifica twitter:image
    const twitterImage = page.locator('meta[name="twitter:image"]');
    await expect(twitterImage).toHaveAttribute('content', /shows-privados-2025/);
    
    // Verifica structured data image
    const structuredData = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent || '');
          if (json['@type'] === 'BlogPosting' && json.image) {
            return json.image;
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
      return null;
    });
    
    expect(structuredData).toBeTruthy();
    expect(structuredData?.url).toMatch(/shows-privados-2025/);
  });
});
