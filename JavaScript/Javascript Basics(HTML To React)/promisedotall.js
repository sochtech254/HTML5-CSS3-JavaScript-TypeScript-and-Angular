// Let's see how to handle if you want to fetch via multiple APIs and then perform some operation on the entire dataset
// This naive way would be to declare multiple promises and then perform operations when all promises are resolved
// Like below
// We create two different promises
// One for user data
// Another for order data
/*const userPromise = new Promise();
const orderPromise = new Promise();

// Wait for user data
userPromise.then((userData) => {

    // wait for order data
    orderPromise.then((orderData) => {

        // after you get user and order data both
        // then perform some operation on both dataset
        console.log(userData, orderData);
    })
})*/
// Did you see how messy the code is
// If you had 3 or 10 or 100 promises - can you imagine how much nesting you would have to do?
// That is clearly bad!
// Enter promise.all!!!
// You can simplify the above code using promise.all
// Basically using this you can wait for all the promises to resolved and then only perform the next operations
// The above example can be written like below
// Please read the inline comments
const orderPromise = new Promise()

Promise.all([userPromise, orderPromise])
.then(data => {

    // here we are confident that we have both
    // user data as well as the order data
    console.log(data);
})
.catch(error => {

    // we fall in this code block
    // if either one or all the promises are rejected
    console.log(error);
})



