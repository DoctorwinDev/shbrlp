
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('UXUIAnalysis_2025-07-19', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('http://localhost:3002');

    // Take screenshot
    await page.screenshot({ path: 'homepage_initial_view.png', { fullPage: true } });

    // Take screenshot
    await page.screenshot({ path: 'mobile_view_simulation.png', { fullPage: true } });
});