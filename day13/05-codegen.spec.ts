import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in').fill('bags for girls');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Boys And Girls Multi-Print' })).toBeVisible();
  await page.getByRole('heading', { name: 'Boys And Girls Multi-Print' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Boys And Girls Multi-Print' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Chris-Kate-School-Casual-college-Everyday-stationery-Backpack-3034/dp/B0C2D5B1N9/ref=sr_1_1_sspa?crid=T44C61SRMXP0&dib=eyJ2IjoiMSJ9.91DGtRSZX8ULXvlwjg79LhyhUj7vdPLYpM7FUckatOQtGbYVeYjhNSiC4BzWXavoO1tblx30jMLt4U1nVapPgNTv8n2FTsAHnmdhOAYXXlxyu4bQ2LG67Ai-jDjQuB-23kGKirLN8KgXwu_uP7jP0x4dOtaDBHceFIxaUNpfl973QYLBr9ILL6d0oYaQgNb6V1GDQGQQew0Vu01JbwLHxsk9_qsc4Fzy0E5Pm-Qj2Lnz4tDTu5hqIqAvaYCa-r_hv3lVNKSEbchD29EBns3ASkLvO7wzhhHk4rUN7rvcCK8.BVUJNeO043QB2NhwTeE8-5dvLUYvfT5KqjE3twZ66tU&dib_tag=se&keywords=bags%2Bfor%2Bgirls&qid=1730550499&sprefix=bags%2Bfor%2Bgirls%2Caps%2C232&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&smid=A2BC6RFUADAE94&th=1');
  await page1.getByLabel('Add to Cart', { exact: true }).click();
  
});