📑 Agenda for Day 16: CI Integration

📌 Network Interception 
📌 Jira Integration
📌 Github Actions
📌 Implement Exception Handlings
📌 Cross browser testing
📌 Global Setup/Tear downs


## 1. Network Interception

Network interception in Playwright allows us to monitor, modify, or mock network requests and responses. This is useful for testing API interactions, handling conditional requests, and simulating various network scenarios.

### Example: Network Interception
```javascript
const { test, expect } = require('@playwright/test');

test('Intercept network requests and mock responses', async ({ page }) => {
  await page.route('**/api/data', (route) => {
    const mockData = { data: 'Mocked Data' };
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });

  await page.goto('https://login.salesforce.com');
  // Verify if mocked data appears on the page or API call is intercepted
});
```

### Use Cases
- Mocking API responses for testing without relying on real server data.
- Testing scenarios where specific network conditions are required (e.g., timeouts or slow responses).
- Validating request payloads for specific API calls.

---

## 2. GitHub Actions for Continuous Integration

GitHub Actions can automate the testing process by running Playwright tests on each pull request or commit, ensuring that code changes do not introduce bugs.

### Sample GitHub Actions Workflow (`.github/workflows/playwright.yml`)
```yaml
name: Playwright Tests
on:
  push:
    branches: [ main ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
    - uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30

```

### Key Benefits
- **Automated Testing**: Ensures tests run on every push or pull request.
- **Consistent Environment**: Runs tests on a clean environment each time, ensuring consistent results.

---

## 3. Error Handling with `try-catch` Block

Using `try-catch` blocks in Playwright tests helps manage errors gracefully, especially for scenarios where specific actions may occasionally fail, but you want the test to proceed or handle failures without interrupting the workflow.

### Example: `try-catch` in Playwright
```javascript
const { test } = require('@playwright/test');

test('Example test with try-catch error handling', async ({ page }) => {
  try {
    await page.goto('https://login.salesforce.com');
    await page.click('#button'); // This might throw an error if the selector is not found
  } catch (error) {
    console.error('An error occurred:', error);
    // Optional: Take a screenshot or log the error
    await page.screenshot({ path: 'error-screenshot.png' });
  }
});
```

### Best Practices
- Use `try-catch` only where errors are expected.
- Capture screenshots or log errors for further investigation.
- Avoid wrapping the entire test in `try-catch` to keep error visibility.

---

## 4. Cross-Browser Testing

Playwright supports testing across multiple browsers like Chromium, Firefox, and WebKit. Cross-browser testing ensures your application behaves consistently across different environments.

### Example: Running Tests on Multiple Browsers
To run tests across multiple browsers, update the Playwright configuration file (`playwright.config.js`):
```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
```

### Command to Run Cross-Browser Tests
```bash
npx playwright test
```

### Benefits
- **Ensures Compatibility**: Validates that your application works on all major browsers.
- **Easily Configurable**: Specify each browser in `playwright.config.js` and run all tests with a single command.

---

## 5. Global Setup and Teardown

Global setup and teardown are used to configure and clean up resources before and after the test suite runs. This is helpful for initializing test data, authenticating users, or clearing caches.

### Example: Global Setup and Teardown (`global-setup.js`)
To implement, create a `global-setup.js` and `global-teardown.js` file, then reference them in `playwright.config.js`.

#### global-setup.js
```javascript
const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
};
```

#### playwright.config.js
```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
  use: {
    storageState: 'auth.json',
  },
});
```

### Benefits
- **Efficiency**: Reduces setup time by performing common initialization tasks once.
- **Persistence**: Preserves session data like login credentials across tests.

---
