📑 Agenda for Day 03: Get Started with Playwright

📌 Recap on JavaScript Fundamentals
📌 Looping Statements
📌 String Methods
📌 Understanding Playwright Architecture 

## Looping Statements

Execute a block of code a number of times.

- *for loop*: Loops through a block of code a number of times.
- *while loop*: Loops through a block of code as long as a specified condition is true.
- *do...while loop*: Also loops through a block of code as long as a specified condition is true, but executes the code block once before checking the condition.
- *for...in loop*: Loops through the properties of an object.
- *for...of loop*: Loops over iterable objects (like Arrays, Strings).

## String and Its Methods

Represents a sequence of characters.

- Methods include `.length`, `.charAt()`, `.indexOf()`, `.toUpperCase()`, `.toLowerCase()`, `.substring()`, `.slice()`, `.split()`, `.replace()`, and more.

# Playwright Architecture

Playwright is a node library that provides a high-level API to control web browsers. It facilitates real-time interaction and automation by communicating with browser instances through WebSocket connections and the Chrome DevTools Protocol (CDP).

## Internal Working with WebSockets

Playwright establishes a WebSocket connection to browser instances, enabling it to send commands and receive events in a non-blocking, asynchronous manner. This WebSocket-based communication is crucial for efficiently automating browser operations such as navigation, input, and rendering.