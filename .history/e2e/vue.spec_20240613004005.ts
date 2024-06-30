/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
 */
import { expect, test } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  // await expect(page.locator('div.greetings > h1')).toHaveText('You did it!')
});
