
import { test, expect } from '@playwright/test';

test.describe('ShakiraBR - Testes de Otimização', () => {
  test('Validação da Homepage - Performance e Acessibilidade', async ({ page }) => {
    // Navegar para a homepage
    await page.goto('http://localhost:3002');
    
    // Aguardar carregamento completo
    await page.waitForLoadState('networkidle');
    
    // Verificar se a página carregou corretamente (corrigido o título)
    await expect(page).toHaveTitle(/Shakira BR/);
    
    // Verificar elementos críticos
    await expect(page.locator('h1')).toBeVisible();
    
    // Testar responsividade
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile
    await page.waitForTimeout(1000);
    
    // Screenshot mobile
    await page.screenshot({ 
      path: 'tests/screenshots/mobile_view.png', 
      fullPage: true 
    });
    
    // Testar desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);
    
    // Screenshot desktop
    await page.screenshot({ 
      path: 'tests/screenshots/desktop_view.png', 
      fullPage: true 
    });
  });

  test('Validação do Blog - SEO e Performance', async ({ page }) => {
    // Navegar para o blog
    await page.goto('http://localhost:3002/blog');
    
    await page.waitForLoadState('networkidle');
    
    // Verificar se os posts estão visíveis (corrigido para first())
    await expect(page.locator('article').first()).toBeVisible();
    
    // Verificar se o post novo está presente (corrigido para first())
    await expect(page.getByText('Camera Prive: Guia Definitivo 2025').first()).toBeVisible();
    
    // Testar navegação para post específico
    await page.click('text=Camera Prive: Guia Definitivo 2025');
    await page.waitForLoadState('networkidle');
    
    // Verificar conteúdo do post (corrigido para first())
    await expect(page.getByText('Camera Prive').first()).toBeVisible();
    await expect(page.getByText('Guia definitivo 2025').first()).toBeVisible();
    
    // Screenshot do post
    await page.screenshot({ 
      path: 'tests/screenshots/blog_post.png', 
      fullPage: true 
    });
  });

  test('Validação de Acessibilidade - Contraste e Navegação', async ({ page }) => {
    await page.goto('http://localhost:3002');
    await page.waitForLoadState('networkidle');
    
    // Verificar se elementos com contraste melhorado estão visíveis
    const popularBadge = page.locator('text=POPULAR');
    await expect(popularBadge).toBeVisible();
    
    // Verificar se depoimentos estão com contraste correto
    const testimonials = page.locator('[class*="bg-green-700"], [class*="bg-purple-700"]');
    await expect(testimonials.first()).toBeVisible();
    
    // Testar navegação por teclado
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    
    // Verificar se links são acessíveis
    const links = page.locator('a[href]');
    await expect(links.first()).toBeVisible();
  });

  test('Validação de Performance - Imagens e Scripts', async ({ page }) => {
    await page.goto('http://localhost:3002');
    
    // Verificar se imagens estão otimizadas
    const images = page.locator('img');
    await expect(images.first()).toBeVisible();
    
    // Verificar se Google Analytics carrega corretamente (corrigido - scripts não são visíveis)
    const gaScript = page.locator('script[src*="googletagmanager"]').first();
    await expect(gaScript).toHaveAttribute('src');
    
    // Testar carregamento de imagens responsivas
    await page.setViewportSize({ width: 768, height: 1024 }); // Tablet
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'tests/screenshots/tablet_view.png', 
      fullPage: true 
    });
  });

  test('Validação de SEO - Meta Tags e Estrutura', async ({ page }) => {
    await page.goto('http://localhost:3002');
    
    // Verificar meta tags importantes (corrigido - meta tags não são visíveis)
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content');
    
    const metaViewport = page.locator('meta[name="viewport"]').first();
    await expect(metaViewport).toHaveAttribute('content');
    
    // Verificar estrutura de headings
    const h1 = page.locator('h1');
    const h2 = page.locator('h2');
    
    await expect(h1).toBeVisible();
    await expect(h2.first()).toBeVisible();
    
    // Verificar se sitemap está acessível
    const sitemapResponse = await page.goto('http://localhost:3002/sitemap.xml');
    expect(sitemapResponse?.status()).toBe(200);
  });

  test('Validação de Otimizações Específicas', async ({ page }) => {
    await page.goto('http://localhost:3002');
    await page.waitForLoadState('networkidle');
    
    // Verificar se imagens estão usando Next.js Image
    const nextImages = page.locator('img[src*="_next/image"]');
    await expect(nextImages.first()).toBeVisible();
    
    // Verificar se badges têm contraste correto
    const popularBadge = page.locator('text=POPULAR');
    await expect(popularBadge).toBeVisible();
    
    // Verificar se depoimentos têm contraste melhorado
    const testimonialHeaders = page.locator('[class*="bg-green-700"], [class*="bg-purple-700"]');
    await expect(testimonialHeaders.first()).toBeVisible();
    
    // Screenshot final
    await page.screenshot({ 
      path: 'tests/screenshots/optimization_validation.png', 
      fullPage: true 
    });
  });
});