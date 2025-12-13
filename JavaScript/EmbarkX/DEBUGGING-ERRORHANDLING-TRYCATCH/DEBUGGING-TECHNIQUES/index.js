// Logging options
// Debugging in browsers
// Breakpoints

console.log("Hello, World!");
// General log message
console.warn("This is a warning!");
// Warning message
console.error("This is an error!");
// Error message

console.table([{ name: "Alice", age: 25},
                          {name: "Bob", age: 30}]);
// Display data in a table

// After executing this code in browser, set breakpoints at different points
function calculateSum(a, b) {
    let sum = a + b;
    console.log("Sum:", sum);
    return sum;
}

calculateSum(5, 10);

// try setting i === 3 in the watch window in setting breakpoints in Chrome dev tools.
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

function outerFunction() {
    console.log("Inside outer function");
    innerFunction();
}

function innerFunction() {
    console.log("Inside inner function");
}

outerFunction();

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();


// nested function call
// After executing this code in browser, set breakpoints at different function calls
function a() {
    console.log("Function A");
    b();
}

function b() {
    console.log("Function B");
    c();
}

function c() {
    console.log("Function C");
}

a();