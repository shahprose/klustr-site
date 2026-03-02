import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(__dirname, '../screenshots');

test.describe('Dark Mode Feature', () => {
  test('should load page in light mode by default', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Take screenshot of light mode
    await page.screenshot({
      path: `${screenshotDir}/01-light-mode.png`,
      fullPage: true,
    });

    // Verify light mode theme is set
    const htmlAttr = await page.getAttribute('html', 'data-theme');
    expect(htmlAttr).toBe('light');

    // Verify button shows moon icon
    const button = page.getByTestId('theme-toggle');
    await expect(button).toContainText('🌙');
  });

  test('should toggle to dark mode when button is clicked', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click the theme toggle button
    const button = page.getByTestId('theme-toggle');
    await button.click();

    // Take screenshot of dark mode
    await page.screenshot({
      path: `${screenshotDir}/02-dark-mode.png`,
      fullPage: true,
    });

    // Verify dark mode theme is set
    const htmlAttr = await page.getAttribute('html', 'data-theme');
    expect(htmlAttr).toBe('dark');

    // Verify button shows sun icon
    await expect(button).toContainText('☀️');
  });

  test('should persist theme preference in localStorage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Toggle to dark mode
    await page.getByTestId('theme-toggle').click();

    // Check localStorage
    const theme = await page.evaluate(() => localStorage.getItem('theme'));
    expect(theme).toBe('dark');

    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Verify theme persisted
    const htmlAttr = await page.getAttribute('html', 'data-theme');
    expect(htmlAttr).toBe('dark');

    // Take screenshot after reload
    await page.screenshot({
      path: `${screenshotDir}/03-dark-mode-persisted.png`,
      fullPage: true,
    });
  });

  test('should have proper CSS variables applied', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get computed styles for light mode (normalize to lowercase for comparison)
    const lightBgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color')
        .toLowerCase();
    });

    // Accept both #ffffff and #fff formats
    expect(['#ffffff', '#fff'].includes(lightBgColor.trim())).toBeTruthy();

    // Toggle to dark mode
    await page.getByTestId('theme-toggle').click();

    // Get computed styles for dark mode
    const darkBgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--bg-color')
        .toLowerCase();
    });

    expect(darkBgColor.trim()).toContain('111827');
  });

  test('theme toggle button should be visible and styled properly', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const button = page.getByTestId('theme-toggle');

    // Check button is visible
    await expect(button).toBeVisible();

    // Check button has expected styling
    const padding = await button.evaluate((el) => {
      return window.getComputedStyle(el).padding;
    });

    expect(padding).toBeTruthy();
  });
});
