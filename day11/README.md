📑 Agenda for Day11: REST API Fundamentals

📌 Persistent Context
📌 Introduction to REST API
📌 Headers
📌 Verbs (POST, PUT, GET, DELETE, PATCH)
📌 Request Body, Response Body
📌 Authorization Types
📌 Implementation in Postman - POST & GET Lead Without Global Variable [Salesforce]

## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();
```