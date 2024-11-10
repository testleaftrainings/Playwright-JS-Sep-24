📑 Agenda for Day 15: Page Object Model

📌 Encapsulation
📌 Introduction to Page Object Model
📌 Framework Best Practices
📌 Test Retry
📌 Custom Fixtures
📌 Visual Testing

## Table of Contents
1. [Design Patterns in Test Automation](#design-patterns-in-test-automation)
2. [Introduction to Page Object Model (POM)](#introduction-to-page-object-model-pom)
3. [Framework Best Practices](#framework-best-practices)
4. [Encapsulation](#encapsulation)
5. [Test Retry](#test-retry)
6. [Custom Fixtures](#custom-fixtures)
7. [Visual Testing](#visual-testing)
8. [Extending Playwright with a `.d.ts` File](#extending-playwright-with-a-dts-file)

---

## Encapsulation

Encapsulation is the concept of bundling data (properties) and methods that operate on the data within a single unit (class) and restricting access to some of the object's components.

### Example:

```typescript
class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(newUsername: string): void {
        this.username = newUsername;
    }

    private encryptPassword(password: string): string {
        // Encrypt the password
        return `encrypted-${password}`;
    }
}
```

## Test Retry

### Overview
Test retry allows failed tests to automatically re-run, which is helpful for handling **flaky tests** caused by network issues, timing inconsistencies, or other intermittent problems.

### Custom Retry Logic

You can create custom retry logic using the `testInfo.retry` property. This logic can be used to add delays on retry attempts to stabilize actions like filling input fields or clicking buttons. 

#### Logic for Custom Retry

- **`testInfo.retry`**: This property detects if the current test execution is a retry attempt. For actions that are more likely to fail intermittently, you can add a delay when `testInfo.retry` is `true` to give the page additional time to load or stabilize.
- **Adding Delays**: You can add custom methods (e.g., `delayedFill` and `clickAndDelay`) to wait a few seconds before retrying specific actions if they fail initially. This approach provides a more flexible retry mechanism within the test.

#### Custom Retry Code Snippet

```typescript
page.delayedFill = async (selector, value) => {
    if (testInfo.retry) {
        await page.waitForTimeout(3000); // Adds a 3-second delay on retry
    }
    await page.fill(selector, value);
};

page.clickAndDelay = async (selector) => {
    await page.click(selector);
    if (testInfo.retry) {
        await page.waitForTimeout(3000); // Adds a 3-second delay on retry
    }
};
```

#### Global Retry Configuration

In addition to custom retry logic, you can configure global retries in the `playwright.config.ts` file:

```typescript
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
    retries: 2, // Retries each failed test up to 2 times
    timeout: 10000, // Sets a maximum timeout of 10 seconds per test
});
```

## Custom Fixtures

### Overview
Custom fixtures allow you to set up reusable configurations or components, such as logging in or initializing database states, to avoid repeating setup steps in each test.

### Fixture Logic

1. **Define Custom Logic**: Define custom actions, such as login, in a fixture.
2. **Usage**: Use the fixture across multiple tests to start tests in a predefined state, like being logged in.

```typescript
pageWithLogin: async ({ page }, use) => {
    await page.goto("https://example.com/login");
    await page.fill("#username", "testuser");
    await page.fill("#password", "password123");
    await page.click("#loginButton");
    await use(page); // Makes this logged-in page available for tests
};
```

With this logic, any test using the `pageWithLogin` fixture will start with a logged-in session, reducing setup code repetition.

---

## Visual Testing

### Overview
Visual testing ensures the **appearance of the UI** remains consistent by comparing screenshots to baseline images. This approach helps detect unintended layout changes, color shifts, or other visual regressions.

### Visual Testing Logic

1. **Capture and Compare Screenshots**: Use `toMatchSnapshot` to capture a screenshot and compare it to a stored baseline.

   ```typescript
   const screenshot = await page.screenshot();
   expect(screenshot).toMatchSnapshot('testleaf.png');
   ```

2. **Custom Snapshot Directory**: To store snapshots in a specific folder, set `snapshotDir` in `playwright.config.ts`:

   ```typescript
   // playwright.config.ts
   export default defineConfig({
       expect: {
           snapshotDir: 'visual-snapshots', // Custom directory for snapshots
       },
   });
   ```

---

## Extending Playwright with a `.d.ts` File

### Purpose of a `.d.ts` File

A `.d.ts` file in TypeScript is used to define types for JavaScript code, especially useful for augmenting existing libraries or adding custom methods. In Playwright, you can use a `.d.ts` file to add custom methods to the `Page` interface, allowing TypeScript to recognize these methods throughout your tests.

### Custom Methods with `.d.ts`

When adding custom methods (like `delayedFill` or `clickAndDelay`) to Playwright’s `Page` object, a `.d.ts` file is used to declare these new methods on the `Page` interface. This approach ensures TypeScript knows about the custom methods, providing type safety and autocomplete.

### Example: Extending `Page` Interface with `.d.ts` File

Create a file named `playwright.d.ts`:

```typescript
// playwright.d.ts
import { Page } from "@playwright/test";

declare module '@playwright/test' {
    interface Page {
        delayedFill: (selector: string, value: string) => Promise<void>;
        clickAndDelay: (selector: string) => Promise<void>;
    }
}
```

- **Explanation**:
  - The `declare module` syntax tells TypeScript to add custom methods to the existing `Page` interface.
  - `delayedFill` and `clickAndDelay` are defined as methods that accept specific parameters and return a `Promise<void>`.
  - With this file in place, TypeScript will recognize `delayedFill` and `clickAndDelay` as valid methods on the `page` object, enabling autocomplete and error checking.

---

## Design Patterns in Test Automation

Design patterns are reusable solutions to common problems in test automation. They help in organizing code, making it maintainable, and improving readability. Below are some commonly used design patterns in test automation:

| Design Pattern           | Purpose                                        | Usage in Automation Frameworks                                      |
|--------------------------|------------------------------------------------|---------------------------------------------------------------------|
| **Page Object Model (POM)** | Separates page-specific logic from test cases, making tests easier to read and maintain. | Manages UI interactions through page classes.                       |
| **Factory Pattern**      | Creates objects dynamically without specifying the exact class. | Used for generating test data or page objects based on conditions.  |
| **Singleton Pattern**    | Ensures only one instance of a class exists.   | Manages a single instance of resources, like browser or database.   |
| **Command Pattern**      | Encapsulates actions as objects.               | Defines reusable test actions (e.g., login, logout).                |
| **Data-Driven Testing (DDT)** | Runs tests with multiple data sets.      | Allows testing multiple scenarios by using external data sources.   |
| **Adapter Pattern**      | Bridges incompatible interfaces.               | Integrates third-party tools or legacy code into the framework.     |
| **Decorator Pattern**    | Adds functionality to objects without altering their core behavior. | Adds features like logging and retries to test actions.             |

## Introduction to Page Object Model (POM)

The **Page Object Model (POM)** is a design pattern that structures test automation code by creating a separate class, called a “page object,” for each page or component of an application. POM simplifies code by centralizing element locators and actions in a single place, making test scripts cleaner, easier to maintain, and more readable.

#### Benefits of POM
- **Modularity**: Keeps UI locators and actions separate from test scripts, making them modular and reusable.
- **Maintainability**: Updates to locators and actions can be made in one place when the UI changes.
- **Readability**: Test cases are cleaner and focus on test logic rather than UI interaction details.

#### Example Structure of a Page Object (TypeScript)

```typescript
import { Page } from 'playwright';

class LoginPage {
    private page: Page;
    private usernameField = '#username';
    private passwordField = '#password';
    private loginButton = '#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    public async setUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameField, username);
    }

    public async setPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordField, password);
    }

    public async login(username: string, password: string): Promise<void> {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.page.click(this.loginButton);
    }
}
```

In this example, the `LoginPage` class encapsulates locators and actions for the login page. Test cases can use this class to interact with the login page without directly accessing locators.

## Framework Best Practices

A well-structured framework improves the efficiency and reliability of test automation. Below are best practices for building and maintaining a robust framework:

#### 1. **Follow Design Patterns**
   - Implement patterns like **POM**, **Singleton**, and **Data-Driven Testing** to keep code organized and reusable.

#### 2. **Organize Code by Modules**
   - Use folders to separate tests, page objects, utilities, and configurations.
   - Each folder should have a clear purpose, making the framework easy to navigate and manage.

#### 3. **Use Base Configuration**
   - Set up a global configuration file for browser settings, timeouts, retries, and environment-specific settings to centralize configurations.

#### 4. **Implement Logging and Reporting**
   - Integrate logging to capture details for each test run.
   - Use reporting tools (e.g., Playwright’s built-in reporters or Allure) to generate comprehensive test reports.

#### 5. **Manage Test Data**
   - Store test data in separate files, allowing easy updates without modifying test logic.
   - Use environment variables to securely store sensitive data like credentials.

#### 6. **Leverage Playwright’s Features**
   - **Auto-waiting**: Playwright automatically waits for elements, reducing the need for manual waits.
   - **Browser Contexts**: Isolate tests using browser contexts, making parallel execution efficient.
   - **Trace Viewer and Video Recording**: Enable for debugging and tracking tests.

#### 7. **Enable Parallel Test Execution**
   - Use Playwright’s native parallel execution to run multiple tests simultaneously. Design tests to avoid conflicts in shared data or resources.

#### 8. **Set Up Continuous Integration (CI)**
   - Integrate the framework with a CI/CD pipeline (e.g., GitHub Actions, Jenkins) to run tests automatically on code changes.

#### 9. **Isolate Test State**
   - Each test should reset the application state to remain independent. Use Playwright hooks (`beforeEach`, `afterEach`) to manage setup and cleanup.

#### 10. **Regularly Update and Refactor**
   - Periodically update locators, configurations, and libraries. Refactor code to remove redundancies and improve readability.

---

By following these design principles and best practices, your test automation framework will be scalable, maintainable, and efficient, helping to support high-quality test coverage as your application grows.