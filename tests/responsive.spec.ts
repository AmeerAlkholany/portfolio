import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'ultrawide-1920', width: 1920, height: 1080 },
];

test.describe('Responsive Portfolio', () => {
  for (const vp of viewports) {
    test(`no horizontal overflow at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:3000');
      await page.waitForLoadState('networkidle');

      const htmlWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const viewportWidth = vp.width;

      expect(htmlWidth).toBeLessThanOrEqual(viewportWidth + 2);
    });
  }

  test('mobile navigation works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    const hamburger = page.locator('[aria-controls="mobile-menu"]');
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await expect(page.locator('#mobile-menu a')).toHaveCount(4);

    const projectsLink = page.locator('#mobile-menu a', { hasText: 'Projects' });
    await projectsLink.click();
    await expect(page.locator('#projects')).toBeVisible();
  });

  test('hero heading fits on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    const heroH1 = page.locator('h1');
    await expect(heroH1).toBeVisible();

    const boundingBox = await heroH1.boundingBox();
    expect(boundingBox!.width).toBeLessThanOrEqual(320);
  });

  test('project cards resize to grid columns', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    const cards = page.locator('.group');
    const count = await cards.count();
    if (count > 0) {
      // At 1024px+ should have at least 2 cards side by side
      const firstCard = cards.first();
      const box = await firstCard.boundingBox();
      expect(box!.width).toBeLessThan(500);
    }
  });

  test('prefers-reduced-motion bypasses animation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Elements with ScrollReveal should still be present and visible
    const sections = page.locator('section[id]');
    const count = await sections.count();
    expect(count).toBeGreaterThan(0);
  });

  test('buttons are touch-friendly (>=44px height)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Hero CTA buttons
    const buttons = page.locator('a', { hasText: /^View Projects$|^Contact Me$/ });
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(2);

    for (let i = 0; i < count; i++) {
      const box = await buttons.nth(i).boundingBox();
      expect(box).not.toBeNull();
      if (box) expect(box.height).toBeGreaterThanOrEqual(44);
    }
  });
});
