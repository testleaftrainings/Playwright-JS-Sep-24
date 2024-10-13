📑 Agenda for Day 08: Dig deeper into Playwright

📌 Assertions using expect library
📌 Auto-waiting
📌 Alerts

## Table of Contents

- [Assertions](#assertions)
  - [Auto-Retrying Assertions](#auto-retrying-assertions)
  - [Non-Retrying Assertions](#non-retrying-assertions)
  - [Negating Matches](#negating-matches)
  - [Soft Assertions](#soft-assertions)
  - [Hard Assertions](#hard-assertions)
- [Auto-Waiting Mechanism](#auto-waiting-mechanism)
- [Modal Dialogs](#modal-dialogs)

## Assertions

Playwright's assertion library is designed to work seamlessly with its locators, supporting both auto-retrying and non-retrying assertions.

### Auto-Retrying Assertions

These assertions automatically retry until a certain condition is met or a timeout is reached. Ideal for dynamic content or elements that may take time to appear:

- `expect(locator).toHaveText('text', { timeout: 3000 })`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveCount(3)`

### Non-Retrying Assertions

Non-retrying assertions are those that execute and evaluate conditions at a point in time without any retries:

- `expect(await locator.textContent()).toBe('static text')`

### Negating Matches

To negate any matcher, prepend `not` before the assertion:

- `expect(locator).not.toHaveText('forbidden text')`
- `expect(locator).not.toBeVisible()`

### Soft Assertions

Soft assertions allow tests to continue after a failed assertion, collecting and reporting all failures at the end of the test.

### Hard Assertions

Hard assertions are the default behavior in Playwright, where a failed assertion immediately stops the test execution.

## Auto-Waiting Mechanism

Playwright performs a range of actionability checks on the elements before making actions 
to ensure these actions behave as expected. 

It auto-waits for all the relevant checks to pass and only then performs the requested action.

If the required checks do not pass within the given timeout, action fails with the TimeoutError.

### How Auto-Waiting Works Internally

1. *Actionability Checks*:
   - Before performing any action (e.g., click, type, navigate), Playwright checks if the element 
   is in an actionable state. This includes checks for visibility, enablement, stability, 
   and attached state.
   - *Visibility*: Ensures the element is visible and not hidden.
   - *Enablement*: Ensures the element is enabled and not disabled.
   - *Stability*: Ensures the element is not animating or moving.
   - *Attached State*: Ensures the element is attached to the DOM.

2. *Polling*:
   - Playwright continuously polls the condition at regular intervals until it is satisfied or a timeout is reached. This polling happens under the hood and is not something the user needs to manage.

3. *Timeouts*:
   - Each action or assertion has a default timeout (e.g., 30 seconds). If the condition is not met within this timeout, Playwright throws an error.
   - The timeout can be customized per action or globally in the Playwright configuration.

4. *Built-in Waits*:
   - *Navigation Waits*: Playwright waits for the page to navigate and load completely before proceeding with the next action.
   - *Locator Waits*: When using locators (e.g., page.locator), Playwright waits for the element to appear in the DOM and satisfy actionability checks.
   - *Assertion Waits*: Assertions automatically wait for the condition to be true within the specified timeout.

### Example of Auto-Waiting in Playwright

Here are examples demonstrating how auto-waiting works in Playwright:

#### Clicking an Element

```javascript
import { test, expect } from '@playwright/test';

test('auto-waiting example for click', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  
  // Playwright waits for the element to be visible, enabled, stable, and attached before clicking
  await page.click('text=More information...');
  
  // Playwright waits for the new URL to load
  await expect(page).toHaveURL('http://leaftaps.com/opentaps/control/main');
});
```

#### Typing into an Input Field

```javascript
import { test, expect } from '@playwright/test';

test('auto-waiting example for typing', async ({ page }) => {
  await page.goto('http://amazon.in/login');
  
  // Playwright waits for the input field to be visible and enabled before typing
  await page.fill('input[name="username"]', 'myusername');
  await page.fill('input[name="password"]', 'mypassword');
  
  // Click the login button
  await page.click('button[type="submit"]');
  
  // Playwright waits for the navigation to complete
  await expect(page).toHaveURL('https://amazon.in/dashboard');
});
```

### Configuring Timeouts

You can configure timeouts for actions and assertions to customize the auto-waiting behavior.

#### Per Action Timeout

```javascript
await page.click('text=More information...', { timeout: 10000 }); // 10 seconds timeout
```

#### Global Timeout Configuration

You can set a global timeout in the Playwright configuration file (playwright.config.ts or 
playwright.config.js).

```javascript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000, // 60 seconds for each test
  expect: {
    timeout: 10000, // 10 seconds for each assertion
  },
});
```

## Modal Dialogs

A modal dialog is a window overlay that requires users to interact with it before they can return to the main content. It captures the keyboard and mouse focus until it is closed, thus blocking the main window's functionality.

### Types of Dialogs

Playwright supports handling several types of dialogs that are commonly used in web applications:
- **Alert**: Provides a message and an OK button.
- **Confirm**: Provides a message along with OK and Cancel buttons.
- **Prompt**: Offers a text box for user input, alongside OK and Cancel buttons.
- **BeforeUnload**: Appears when the page tries to unload, asking the user to confirm leaving the page.

### Dialog Methods

Dialogs in Playwright are managed using the following methods:
- `dialog.accept([promptText])`: Accepts the dialog. For `prompt` dialogs, optional prompt text can be provided.
- `dialog.dismiss()`: Dismisses or cancels the dialog.
- `dialog.message()`: Returns the message text from the dialog.
- `dialog.type()`: Returns the type of the dialog (`alert`, `confirm`, `prompt`, `beforeunload`).

### Event Listeners for Dialogs

Playwright provides event listeners to handle dialogs when they appear during page interactions:

```javascript
// Handle any dialog that appears on the page
page.on('dialog', async dialog => {
  console.log(`Dialog type: ${dialog.type()}`);
  console.log(`Dialog message: ${dialog.message()}`);
  await dialog.accept();
});
```

### Handling Dialogs: `page.on` vs `page.once`

Playwright allows you to handle dialogs using either `page.on` or `page.once`. The key difference between these two methods is in how many times the event handler is invoked:

- `page.on`: Attaches an event handler that runs every time the specified event occurs. This is useful for handling dialogs that may appear multiple times throughout the session.
  
  ```javascript
  // Handle every dialog that appears during the session
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  ```

- `page.once`: Attaches a one-time event handler, which is invoked only the first time the specified event occurs. After the first invocation, the handler is removed automatically.

  ```javascript
  // Handle the first dialog that appears and ignore any subsequent ones
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  ```
