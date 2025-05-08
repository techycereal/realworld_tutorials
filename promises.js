// ------------------- FETCHING USERS ------------------
// This example is to simulate fetching data from a database
// When you fetch data from a database it will always be returned as a promise because fetching data takes time
function fetchUser(userId) {
    // create a new promise which will be put into that separate task area to run
    return new Promise(resolve => {
      // setTimeout is a countdown so that after 1 second this promise is put into the success state with an object of the user data
      setTimeout(() => {
        resolve({ id: userId, name: `User${userId}` });
      }, 1000);
    });
  }

// Each call creates a new promise
// When you run this code you will see this console.log before the user data
// KEY THING: Promises run in that separate area allowing the rest of our code (called the main thread) to continue running. When the promise is complete it then returns that data
// All of these will return at the same time because they take one second each
fetchUser(101).then((data) => {
    console.log(data)
})
fetchUser(103).then((data) => {
    console.log(data)
})
fetchUser(102).then((data) => {
    console.log(data)
})
console.log('This will finish first')
// Make sure you play around with these Promises to really understand them







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

// Each call returns a promise, which runs in the background
// Our main code (synchronous part) continues running immediately
downloadFile('file1.zip').then((data) => {
    console.log(data) // logs after 2 seconds
})
downloadFile('file2.zip').then((data) => {
    console.log(data) // logs after 2 seconds
})
downloadFile('file3.zip').then((data) => {
    console.log(data) // logs after 2 seconds
})
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

// Each call to sendEmail runs independently and returns a promise
// These will all run at the same time, not one after the other
sendEmail("alex@example.com", "Hello Alex").then((data) => {
    console.log(data) // logs after 1.5 seconds
})
sendEmail("jane@example.com", "Hi Jane").then((data) => {
    console.log(data) // logs after 1.5 seconds
})
sendEmail("bob@example.com", "Hey Bob").then((data) => {
    console.log(data) // logs after 1.5 seconds
})
// Main thread does not wait for the emails to finish sending
