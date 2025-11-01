// These are functions that are executed "later"
// Later can be any action that you'd want to be completed before calling the callback function.
// Callback functions are passed as arguments to the outer function.
// Callback functions are more often used in asynchronous programming

// Asynchronous programming
// This is the type of programming where actions do not take place in a predictable order.
// Example: network calls
// When you make an HTTP call you cannot predict when the call will return
// Therefore your program needs to consider this asynchronism to output the correct results

function printUser(name) {
    console.log(name);
}

function fetchAndPrintUser(printCallbackFunction) {
    // simulate fake network call
    setTimeout(() => {
        const fakeUserName = 'Sleepless Yogi';

        // We call the callback function here
        printCallbackFunction(fakeUserName);
    }, 500)
}

// Execute the function to fetch user and print the user's name
fetchAndPrintUser(printUser);








