### Agenda for Day 9: Interaction with frames / Multiple windows & File Upload

📌 Iframes
📌 Handling multiple windows / tabs 
📌 File Upload

## 1. Interacting with Frames

Handling frames is essential for working with web pages that contain multiple embedded documents.

### By Index

```javascript
// Accessing the first frame on the page by its index
const frameByIndex = page.frame({ index: 0 });
console.log(await frameByIndex.title());
```

### By Name

```javascript
// Accessing a frame by its name attribute
const frameByName = page.frame({ name: 'frameName' });
console.log(await frameByName.title());
```

### By URL

```javascript
// Finding a frame by its source URL
const frameByUrl = page.frame({ url: /leaftaps.com/path/ });
console.log(await frameByUrl.title());
```

### By ID using frameLocator

```javascript
// Utilizing frameLocator to access a frame by the ID of the iframe element
const frameById = page.frameLocator('#frameID').frame();
console.log(await frameById.title());
```

### Main Frame

```javascript
// Focusing on the main frame
const mainFrame = page.mainFrame();
console.log(await mainFrame.title());
```

## Handling Multiple Windows (Pop-ups)

Managing multiple windows is vital for comprehensive testing, particularly for applications that open new tabs or windows.

### Sequential Approach

```javascript
// Sequentially handling new windows
    const windowPromise = context.waitForEvent('page');
    await page.getByText("Open",{exact:true}).click();
    const window = await windowPromise;
```

### Promise.all for Multiple Windows

```javascript
// Coordinating the opening of several windows simultaneously
const [window1, window2] = await Promise.all([
    context.waitForEvent('page'),
    context.waitForEvent('page'),
    page.click('#open-first-window'),
    page.click('#open-second-window')
]);
```

### waitForEvent('page')

```javascript
// Detecting a new page following an action
const newPage = await context.waitForEvent('page');
page.click('#open-new-window');
```

## File Upload

Automating file uploads through web forms is crucial for testing upload functionalities.

### setInputFiles

```javascript
// Setting files on input elements to simulate file selection
await page.setInputFiles('#upload-selector', 'path/to/file.txt');
```

### setFiles

```javascript
// Interacting with file chooser dialogs
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('#upload-btn')
]);
await fileChooser.setFiles('path/to/file.txt');