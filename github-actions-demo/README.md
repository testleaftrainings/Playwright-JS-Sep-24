# Playwright Test Automation Framework

This repository contains a robust, scalable, and maintainable test automation framework built using [Playwright](https://playwright.dev/), designed for end-to-end testing of web applications. The framework supports multi-browser testing, cross-platform execution, and CI/CD integration, adhering to modern testing best practices.

---

## **Features**

- Supports multiple browsers: Chromium, Firefox, and WebKit.
- Cross-platform execution (Windows, macOS, Linux).
- Parallel test execution for faster feedback.
- Automated reporting with HTML and JSON formats.
- Configurable test environments using `playwright.config.ts`.
- Built-in test retry mechanism for flaky tests.
- Network interception and mocking for controlled testing scenarios.
- Page Object Model (POM) implementation for scalable test design.
- Integration with CI/CD pipelines.

---

## **Project Structure**

```plaintext
📦 project-root
├── 📂 tests              # Test files grouped by feature or module
│   ├── home.spec.ts      # Example test case
│   ├── login.spec.ts
│   └── ...
├── 📂 pages              # Page Object Models (POM)
│   ├── HomePage.ts       # Example POM for the homepage
│   ├── LoginPage.ts
│   └── ...
├── 📂 utils              # Utility functions and helper methods
│   ├── apiHelper.ts
│   ├── testData.ts
│   └── ...
├── 📂 config             # Environment-specific configurations
│   ├── staging.json
│   ├── production.json
│   └── ...
├── playwright.config.ts  # Playwright configuration file
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── README.md             # Project documentation
└── .github               # CI/CD workflows
    └── workflows
        └── playwright.yml
```

---

## **Getting Started**

### **Prerequisites**

- Node.js >= 14.x
- npm or yarn installed
- A supported browser (Chromium, Firefox, WebKit)

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd project-root
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### **Running Tests**

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests in a specific file:
  ```bash
  npx playwright test tests/login.spec.ts
  ```

- Run tests with debugging:
  ```bash
  npx playwright test --debug
  ```

- Generate a detailed report:
  ```bash
  npx playwright show-report
  ```

### **Configuration**

All configurations are managed via `playwright.config.ts`. Key configurations include:
- **Test timeout**
- **Retry count**
- **Browsers to run**
- **Base URL**

Edit the file to match your environment or use environment-specific JSON files in the `config` folder.

---

## **Best Practices**

1. **Use Page Object Model (POM):**
   - Centralize page locators and actions to improve code reusability and maintainability.
   - Example:
     ```typescript
     class LoginPage {
         private usernameInput = page.locator('#username');
         private passwordInput = page.locator('#password');
         private loginButton = page.locator('#login');

         async login(username: string, password: string) {
             await this.usernameInput.fill(username);
             await this.passwordInput.fill(password);
             await this.loginButton.click();
         }
     }
     ```

2. **Use Test Hooks:**
   - Leverage `beforeEach` and `afterEach` hooks for test setup and teardown.
     ```typescript
     test.beforeEach(async ({ page }) => {
         await page.goto('https://login.salesforce.com');
     });
     ```

3. **Parallel Execution:**
   - Enable parallel execution in `playwright.config.ts` for faster feedback.
     ```typescript
     workers: 4, // Adjust based on your machine
     ```

4. **Network Interception:**
   - Mock API responses for consistent test results.
     ```typescript
     page.route('**/api/data', route => route.fulfill({ body: JSON.stringify(mockData) }));
     ```

5. **Retry Mechanism:**
   - Configure retries for flaky tests in `playwright.config.ts`.
     ```typescript
     retries: 2,
     ```

6. **Assertions:**
   - Use Playwright's built-in assertions for robust validations.
     ```typescript
     await expect(page.locator('#success-message')).toBeVisible();
     ```

7. **Environment Variables:**
   - Use `.env` files or environment-specific JSON files for sensitive data like URLs or credentials.

---

## **Reporting**

The framework generates HTML reports for test results. Reports can be found in the `playwright-report` folder. Use the following command to view reports:
```bash
npx playwright show-report
```

---

## **Continuous Integration**

A sample GitHub Actions workflow (`playwright.yml`) is provided under `.github/workflows`. Modify it to integrate with your CI/CD pipeline.

---

## **Troubleshooting**

- **Playwright installation issues:**
  Ensure all dependencies are installed and run:
  ```bash
  npx playwright install
  ```

- **Flaky tests:**
  Use retries and network mocking to stabilize tests.

- **Debugging:**
  Use `--debug` or `pw:browser` for interactive debugging.

---

