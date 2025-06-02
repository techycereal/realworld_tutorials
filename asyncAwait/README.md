# Async JavaScript Examples: Promise.race, Promise.all, and Promise.allSettled

This project demonstrates how to work with JavaScript Promises in different real-world async scenarios, including racing promises, handling multiple parallel downloads, and sending multiple emails asynchronously.

---

## Table of Contents

- [Promise.race: Racing Multiple Servers](#promiserace-racing-multiple-servers)
- [Downloading Files with Promise.all](#downloading-files-with-promiseall)
- [Sending Emails with Promise.allSettled](#sending-emails-with-promiseallsettled)
- [Key Concepts](#key-concepts)
- [How to Run](#how-to-run)
- [Why It Matters](#why-it-matters)

---

## Promise.race: Racing Multiple Servers

This example simulates downloading a file from multiple servers with different response times.

```js
function downloadFromServer(serverName, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Downloaded from ${serverName}`);
        }, delay);
    });
}

async function raceDownloadExample() {
    const server1 = downloadFromServer("Server A", 3000);
    const server2 = downloadFromServer("Server B", 1500);
    const server3 = downloadFromServer("Server C", 2000);

    const result = await Promise.race([server1, server2, server3]);
    console.log(result); // Logs the fastest server response, e.g. "Downloaded from Server B"
}

raceDownloadExample();
```

## What’s Happening with `Promise.race`

`Promise.race` resolves as soon as the fastest promise resolves, ignoring slower ones.

---

## Downloading Files with `Promise.all`

This example simulates downloading multiple files in parallel and waits for all to finish before continuing.

```js
function downloadFile(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Downloaded file from ${url}`);
        }, 2000);
    });
}

async function downloadAllFiles() {
    const file1 = downloadFile('file1.zip');
    const file2 = downloadFile('file2.zip');
    const file3 = downloadFile('file3.zip');

    const results = await Promise.all([file1, file2, file3]);
    console.log(results); // Logs array of all download messages
}

downloadAllFiles();
```

## What’s Happening with `Promise.all`

`Promise.all` waits for all promises to resolve or rejects immediately if any fail.

---

## Sending Emails with `Promise.allSettled`

This example simulates sending multiple emails and reports the status of each, regardless of success or failure.

```js
function sendEmail(to, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Sent email to ${to} with the message ${message}`);
        }, 1500);
    });
}

async function sendAllEmails() {
    const email1 = sendEmail("alex@example.com", "Hello Alex");
    const email2 = sendEmail("jane@example.com", "Hi Jane");
    const email3 = sendEmail("bob@example.com", "Hey Bob");

    const results = await Promise.allSettled([email1, email2, email3]);
    console.log(results);
}

sendAllEmails();
```

## What’s Happening

`Promise.allSettled` waits for all promises to settle (resolve or reject) and returns their status.

---

## Key Concepts

- **Promise:** An object representing a future value.
- **Promise.race:** Resolves or rejects as soon as the first promise settles.
- **Promise.all:** Waits for all promises to resolve or rejects immediately on the first failure.
- **Promise.allSettled:** Waits for all promises to settle regardless of outcome.
- **Async/Await:** Syntax to write asynchronous code in a synchronous style.

---

## How to Run

1. Save the JavaScript code in a file (e.g., `async-examples.js`).

2. Run it using Node.js:

```bash
node async-examples.js
```

## Why It Matters

- Learn to handle multiple async operations efficiently.

- Understand the differences between `Promise.race`, `Promise.all`, and `Promise.allSettled`.

- Write cleaner, more robust asynchronous JavaScript code.
