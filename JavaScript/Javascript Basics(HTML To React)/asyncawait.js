// Similar to callback and promises, we have another paradigm for handling async programming
// It is called Async-await
// This method is less verbose and much more readable
// If you are comfortable with synchronous programming this method will be much easy to understand
// Because it does not include callbacks

// Explanation via Example
// For this to work we need two things
// One - async function
// Two - await on some promise
// If your function is awaiting on some asynchronous data you have to define your function as async
// And you have to use await keyword for the function call that is making the network API call
// Please see the example below
// We have defined fetchAndPrintUser function which fetches the username and prints it
// Your function fetchAndPrintUser is defined as async
// Because internally it is calling await fetchUserData()
// fetchUserData is the function that is making network call to the API to fetch the user data

// Your async function
/*async function fetchAndPrintUser() {

    // await on the API call to return the data
    const name = await fetchUserData();

    // Your data is now available
    console.log(name);
}*/

// Handle errors using async-await
// To handle errors using async-await you have to wrap the code inside try-catch block
// Like below
/*
async function fetchAndPrintUser() {
    try {
        const name = await fetchUserData()

        // we have the data successfully
        console.log(name);
    } catch (error) {

        // there was some error
        console.log(error);
    }
}
*/


