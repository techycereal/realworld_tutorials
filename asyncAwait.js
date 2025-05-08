// ------------------- PROMISE.RACE ------------------
// This example simulates downloading a file from multiple servers
// Promise.race is used when you only care about the first response that comes back (fastest one wins)

function downloadFromServer(serverName, delay) {
    // This function returns a promise that resolves after the delay time
    return new Promise(resolve => {
        // setTimeout simulates different network speeds for each server
        setTimeout(() => {
            resolve(`Downloaded from ${serverName}`); // Resolves with the server name that finished first
        }, delay); // Each server has a different delay time
    });
}

async function raceDownloadExample() {
    // Start download requests to 3 different servers
    const server1 = downloadFromServer("Server A", 3000); // takes 3 seconds
    const server2 = downloadFromServer("Server B", 1500); // takes 1.5 seconds
    const server3 = downloadFromServer("Server C", 2000); // takes 2 seconds

    // Await the first one that resolves - the fastest one wins the race
    const result = await Promise.race([server1, server2, server3]);
    console.log(result); // This will log "Downloaded from Server B" because it’s the fastest
}

raceDownloadExample(); // run the async function

// The other promises still run, but their results are ignored by Promise.race












// ------------------- DOWNLOADING FILES ------------------
// This example simulates downloading files like images or documents from a server
// Downloading files takes time, so it's returned as a promise
function downloadFile(url) {
    // create a new promise which is handled in a separate area to run
    return new Promise(resolve => {
        // setTimeout is used to simulate a delay, like a file downloading over a network
        setTimeout(() => {
            // after 2 seconds, the promise resolves with a message that the file is downloaded
            resolve(`Downloaded file from ${url}`);
        }, 2000); // 2-second delay
    });
}

async function downloadAllFiles() {
    // Each call to downloadFile returns a new promise that starts right away
    const file1 = downloadFile('file1.zip');
    const file2 = downloadFile('file2.zip');
    const file3 = downloadFile('file3.zip');

    // Await all of them to finish - if one fails, it will throw an error
    const results = await Promise.all([file1, file2, file3]);
    console.log(results); // Prints an array of all successful download messages
}

downloadAllFiles(); // run the async function

// These downloads happen at the same time, not one after the other


















// ------------------- SENDING EMAILS ------------------
// This example simulates sending emails, which takes time and is handled asynchronously
function sendEmail(to, message) {
    // create a new promise to handle sending the email in a separate async process
    return new Promise(resolve => {
        // setTimeout simulates the delay of contacting an email server
        setTimeout(() => {
            // after 1.5 seconds, the promise resolves with a message that the email was sent
            resolve(`Sent email to ${to} with the message ${message}`);
        }, 1500); // 1.5-second delay
    });
}

async function sendAllEmails() {
    // Each call to sendEmail runs independently and returns a promise
    const email1 = sendEmail("alex@example.com", "Hello Alex");
    const email2 = sendEmail("jane@example.com", "Hi Jane");
    const email3 = sendEmail("bob@example.com", "Hey Bob");

    // Promise.allSettled waits for all promises to settle (resolve or reject)
    const results = await Promise.allSettled([email1, email2, email3]);
    console.log(results); // Each result includes a status and either a value or a reason (if it failed)
}

sendAllEmails(); // run the async function

// These will all run at the same time, not one after the other
