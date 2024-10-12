import { Browser, BrowserContext, chromium, Page } from "playwright";

type PerformBothActions = {
  screenshot: true;
  title: true;
};

async function performAction(url: string, action: PerformBothActions): Promise<string> {
  const browser: Browser = await chromium.launch({ headless: false });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto(url);

  let result = '';

  if (action.screenshot) {
    const screenshotPath = 'screenshot.png';
    await page.screenshot({ path: screenshotPath });
    result += `Screenshot saved as ${screenshotPath}\n`;
  }

  if (action.title) {
    const title = await page.title();
    result += `The title of the page is "${title}"`;
  }

  await browser.close();
  return result;
}

async function runTest() {
  // Pass both actions using the intersection-like object.
  const result = await performAction('https://www.amazon.in', { screenshot: true, title: true });
  console.log(result);
}

runTest();
