// This function simulates fetching a user from a server using their ID.
// It returns a Promise, which acts as a container that will eventually "hold" the result of the async operation.
function fetchUser(userId) {
    return new Promise(resolve => {
        // Simulate network delay using setTimeout (1 second)
        setTimeout(() => {
            // After delay, we "resolve" the Promise with user data.
            // At this moment, the Promise is fulfilled and contains the result.
            resolve({ id: userId, name: `User${userId}` });
        }, 1000);
    });
}

// Calling fetchUser returns a Promise immediately, before the result is ready.
// .then() tells JavaScript what to do *when* the Promise is resolved (i.e., when the async task completes).
fetchUser(101).then((data) => {
    console.log(data); // Logs: { id: 101, name: 'User101' } after 1 second
});
fetchUser(103).then((data) => {
    console.log(data); // Logs: { id: 103, name: 'User103' } after 1 second
});
fetchUser(102).then((data) => {
    console.log(data); // Logs: { id: 102, name: 'User102' } after 1 second
});

// This line runs immediately before any of the Promises resolve, because JavaScript continues running
// without waiting for the async tasks to finish. This shows how Promises are non-blocking.
console.log('This will finish first');

// This function simulates downloading a file from a URL.
// It returns a Promise that resolves after 2 seconds with a message.
function downloadFile(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Downloaded file from ${url}`);
        }, 2000);
    });
}

// Each call to downloadFile returns a Promise.
// .then() is used to specify what to do with the result once it becomes available.
downloadFile('file1.zip').then((data) => {
    console.log(data); // Logs after 2 seconds
});
downloadFile('file2.zip').then((data) => {
    console.log(data); // Logs after 2 seconds
});
downloadFile('file3.zip').then((data) => {
    console.log(data); // Logs after 2 seconds
});

// This function simulates sending an email and returns a Promise that resolves after 1.5 seconds.
function sendEmail(to, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Sent email to ${to} with the message ${message}`);
        }, 1500);
    });
}

// Like the previous examples, each call returns a Promise, and we handle the result using .then().
sendEmail("alex@example.com", "Hello Alex").then((data) => {
    console.log(data); // Logs after 1.5 seconds
});
sendEmail("jane@example.com", "Hi Jane").then((data) => {
    console.log(data); // Logs after 1.5 seconds
});
sendEmail("bob@example.com", "Hey Bob").then((data) => {
    console.log(data); // Logs after 1.5 seconds
});
