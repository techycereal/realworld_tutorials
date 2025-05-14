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







// ------------------- LOADING IMAGES CONCURRENTLY ------------------
// This example simulates loading image files from the internet
// Loading images takes time, so it's handled with promises
function loadImage(url) {
    // create a new promise which is handled in a separate area to run
    return new Promise(resolve => {
        const img = new Image(); // create a new image element
        img.onload = () => {
            // when the image successfully loads, resolve the promise with a success message
            resolve(`Loaded image from ${url}`);
        };
        img.onerror = () => {
            // if loading fails, still resolve with an error message for simplicity
            resolve(`Failed to load image from ${url}`);
        };
        img.src = url; // start loading the image
    });
}

// Each call returns a promise, which runs in the background
// Our main code (synchronous part) continues running immediately
loadImage('https://via.placeholder.com/150').then((message) => {
    console.log(message); // logs when image is loaded or fails
});
loadImage('https://via.placeholder.com/200').then((message) => {
    console.log(message); // logs when image is loaded or fails
});
loadImage('https://via.placeholder.com/250').then((message) => {
    console.log(message); // logs when image is loaded or fails
});
// These image loads happen at the same time, not one after the other









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
