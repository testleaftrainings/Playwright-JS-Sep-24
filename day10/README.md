📑 Agenda for Day 10: Playwright Features

📌 File Download
📌 Reading Data from (.env file, .json file, .csv files) 
📌 Shadow DOM
📌 Storage state (Skip Login)
📌 Trace Viewer & Video Capture

## Table of Contents
- [File Downloads with Playwright](#file-downloads-with-playwright)
- [JSON](#json)
- [CSV](#csv)
- [Environment Variables (ENV)](#environment-variables-env)
- [Storage State Using test.use()](#storage-state-using-testuse)
  - [Example](#example)
  - [Note](#note)
- [Video Capture](#video-capture)
- [Tracing](#tracing)  

## File Downloads with Playwright

Automating file downloads ensures the correct handling of files from web applications. This guide covers managing the download process and saving the downloaded files to a specific location using Playwright.

### Download Event and suggestedFilename

To manage the download process and retrieve the suggested filename, use the `download` event in combination with the `suggestedFilename()` method.

### Example

```javascript
const fileDownloadPromise = page.waitForEvent('download');
await page.getByRole('button', {name:'Download'}).click();
const fileDownloader = await fileDownloadPromise;
console.log('Suggested Filename:', download.suggestedFilename());
```

In this example, Playwright waits for the download event to be triggered by clicking on the download link. Once the download starts, it logs the suggested filename.

### Saving the Downloaded File

To save the downloaded file to a specific location, use the `download.path()` method along with the `saveAs()` method.

### Example

```javascript
const path = await download.path();
await download.saveAs('/path/to/save/file');
```

This example demonstrates how to retrieve the path of the downloaded file and save it to a specified location on your filesystem.

### Final Notes

- **Ensure Correct Paths**: Make sure the paths to save the files are correctly specified and that the application has the necessary permissions to write to those paths.
- **Handling Multiple Downloads**: For handling multiple downloads, ensure each download event and file save operation is correctly awaited to avoid conflicts.


## JSON

You can read data from a JSON file using the Node.js `fs` module or any other preferred library.

### Example

```javascript
import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Use jsonData in your tests
```

## CSV

To read data from a CSV file, you can utilize libraries like `csv-parse` combined with `fs`.

### Example

```javascript
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const loginData = parse(fs.readFileSync(path.join(__dirname, "testData.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
    test(`Learn to read data from CSV file for ${data.testId}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
    });
}
```

## Environment Variables (ENV)

Accessing environment variables in tests can be done using `process.env`.

### Example

```javascript
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Use username and password in your tests
```

## Storage State Using test.use()

Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

### Example

```javascript
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
```

### Note
Ensure to use the correct path to your storage state file.

## Video Capture

To enable video capture in your Playwright tests, you need to configure it in the `context` options.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    await browser.close();
})();
```

## Tracing

Tracing helps in debugging your tests by capturing screenshots, console logs, network activity, etc.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Start tracing before creating a page
    await context.tracing.start({ screenshots: true, snapshots: true });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    // Stop tracing and save it to a file
    await context.tracing.stop({ path: 'trace.zip' });

    await browser.close();
})();
```