📑 Agenda for Day 13: Playwright Test Runner & Features

📌 Explicit Waits
📌 Test suite Structure
📌 Reporters
📌 Geolocation
📌 Console Logs
📌 Device Emulation
📌 Codegen Basics

## Table of Contents
    - [Hooks](#hooks)
    - [Device Emulation](#device-emulation)
    - [Geolocation](#geolocation)
    - [Console Logs](#console-logs)
    - [Explicit Waits](#explicit-waits)
    - [Test Reporters](#test-reporters)

## Hooks

### Overview
- Hooks are special methods in Playwright that are used to set up and tear down test environments.

### Types of Hooks
- **`beforeAll`**: Runs once before all tests in a file.
- **`afterAll`**: Runs once after all tests in a file.
- **`beforeEach`**: Runs before each test.
- **`afterEach`**: Runs after each test.

### Use Cases
- **Setup/Teardown**: Use hooks to initialize and clean up resources (e.g., launching browsers, closing databases).
- **Data Preparation**: Use hooks to prepare test data or reset application state before each test.

## Device Emulation

### Overview
- Playwright allows testing on different devices by emulating their characteristics (e.g., screen size, user agent).

### Use Cases
- **Responsive Testing**: Test how the application behaves on mobile, tablet, and desktop devices.
- **Cross-Browser Compatibility**: Verify that the application works across different browsers and devices.

### Example
  ```javascript
  const { devices } = require('playwright');
  const iPhone = devices['iPhone 12'];
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
      ...iPhone,
      locale: 'en-US',
      geolocation: { longitude: 12.4924, latitude: 41.8902 },
      permissions: ['geolocation']
  });
  const page = await context.newPage();
  ```

## Geolocation

### Overview
- Playwright supports geolocation, allowing tests to simulate different geographic locations.

### Use Cases
- **Location-Based Testing**: Test applications that provide location-specific content or services.
- **Geofencing**: Verify the behavior of applications that restrict access based on user location.

### Example
  ```javascript
  await context.setGeolocation({ longitude: 12.4924, latitude: 41.8902 });
  await page.goto('https://example.com');
  ```

## Console Logs

### Overview
- Playwright can capture and analyze console logs from the browser during test execution.

### Use Cases
- **Debugging**: Identify errors or warnings in the browser console during tests.
- **Logging**: Track and record important events that occur during test execution.

### Example
  ```javascript
  page.on('console', msg => console.log(msg.text()));
  await page.goto('https://example.com');
  ```
## Explicit Waits

Explicit waits in Playwright allow you to wait for a certain condition to be met before proceeding with the next step in your script. This is essential in scenarios where actions or events take time to complete, such as loading elements or waiting for animations to finish.

### Types of Explicit Waits

1. **`page.waitForSelector()`**: Waits for a specific DOM element to appear or meet a condition.

   - **Use Case**: Useful when waiting for elements to be present in the DOM before interacting with them.
   - **Example**:
     ```javascript
     await page.waitForSelector('#username');
     ```

2. **`page.waitForTimeout()`**: Pauses the execution for a specified number of milliseconds.

   - **Use Case**: This is a hard wait and should be used sparingly, typically for debugging purposes or when you have no other choice.
   - **Example**:
     ```javascript
     await page.waitForTimeout(2000); // Wait for 2 seconds
     ```

3. **`page.waitForLoadState()`**: Waits for the page to reach a particular state, such as `load`, `domcontentloaded`, or `networkidle`.

   - **Use Case**: Ideal when waiting for the entire page to load or when the DOM content is fully loaded.
   - **Example**:
     ```javascript
     await page.waitForLoadState('load');
     ```

4. **`page.waitForEvent()`**: Waits for a specific event to be fired.

   - **Use Case**: Useful when you want to wait for specific events like `response`, `console`, `request`, etc.
   - **Example**:
     ```javascript
     await page.waitForEvent('response');
     ```

### Best Practices

- **Avoid Hard Waits**: Prefer using `waitForSelector`, `waitForFunction`, or other dynamic waits over `waitForTimeout`.
- **Use Load States**: When navigating or interacting with pages, use `waitForLoadState` to ensure the page is ready.
- **Combine Waits**: Sometimes combining different waits (e.g., `waitForSelector` with `waitForLoadState`) can provide more robust solutions.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://www.leaftaps.com/opentaps');
    
    // Wait for username input to appear
    await page.waitForSelector('#username');
    await page.fill('#username', 'admin');
    
    // Wait for login button to be visible
    await page.waitForSelector('#login', { state: 'visible' });
    await page.click('#login');
    
    // Wait for the page to load completely
    await page.waitForLoadState('load');

    await browser.close();
})();
```

## Test Reporters

Test reporters in Playwright are tools that help you understand the outcome of your tests. Different reporters offer various ways to view and analyze test results, from simple console outputs to detailed HTML reports.

### Built-in Reporters

1. **List Reporter**: Prints each test result on a new line. It's useful for quickly reviewing test outcomes.

   - **Use Case**: Ideal for local development where you want a quick overview of test results.
   - **Configuration**:
     ```javascript
     ['list']
     ```

2. **Dot Reporter**: Produces a minimalist output, printing a dot for each test. Useful for continuous integration environments.

   - **Use Case**: Best for CI/CD pipelines where output verbosity should be minimized.
   - **Configuration**:
     ```javascript
     ['dot']
     ```

3. **HTML Reporter**: Generates a detailed HTML report with interactive features, including the ability to view traces, videos, and screenshots.

   - **Use Case**: Perfect for in-depth analysis after test execution, especially for large test suites.
   - **Configuration**:
     ```javascript
     ['html', { open: 'never' }] // 'always' to open automatically, 'never' to disable auto-open
     ```

4. **JSON Reporter**: Outputs the test results in JSON format, which can be useful for custom processing or integration with other tools.

   - **Use Case**: Suitable when you need to parse results programmatically or integrate with other systems.
   - **Configuration**:
     ```javascript
     ['json', { outputFile: 'reports/test-results.json' }]
     ```

5. **JUnit Reporter**: Produces reports in JUnit XML format, which is commonly used for integration with CI/CD tools like Jenkins.

   - **Use Case**: Ideal for teams using Jenkins or similar CI tools that require JUnit XML reports.
   - **Configuration**:
     ```javascript
     ['junit', { outputFile: 'reports/test-results.xml' }]
     ```

6. **Line Reporter**: Provides a concise output, displaying test results as a single line.

   - **Use Case**: Useful in environments where space in the console is limited or you need a very high-level summary.
   - **Configuration**:
     ```javascript
     ['line']
     ```

7. **Blob Reporter**: Captures and stores test output, which can then be viewed using the Playwright Trace Viewer.

   - **Use Case**: Useful for debugging complex test issues by combining logs, screenshots, and traces in one file.
   - **Configuration**:
     ```javascript
     ['blob']
     ```

### Choosing the Right Reporter

- **For Development**: Use **List** or **HTML** reporters to get detailed feedback while writing and debugging tests.
- **For CI/CD**: Use **Dot** or **JUnit** reporters for minimal output that integrates well with CI systems.
- **For Debugging**: Use **Blob** or **HTML** reporters when deep analysis is needed to investigate test failures.
- **For Custom Integration**: Use **JSON** to generate structured output that can be fed into other tools or systems.

### Example Configuration

```javascript
// playwright.config.js
module.exports = {
    reporter: [
        ['list'], // For console output during development
        ['json', { outputFile: 'reports/test-results.json' }], // For structured output
        ['html', { open: 'never' }], // For detailed reports
        ['junit', { outputFile: 'reports/test-results.xml' }] // For CI integration
    ],
    use: {
        // Additional settings can go here
    },
};
```

### Running Tests with Specific Reporters

You can specify the reporters to use when running tests via the command line:

```bash
npx playwright test --reporter=list,json
```

This command will run tests and generate reports in both List and JSON formats.

```