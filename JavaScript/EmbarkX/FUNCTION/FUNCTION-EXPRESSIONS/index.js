sayHello();

// function declaration
function sayHello() {
    console.log("Hello");
}

let multiply = function(a, b) {
    return a * b;
}

// The greet  function and the sayHello are called differently.
// If you try calling greet same as sayHello it will result into an error.

// function expression
let greet = function() {
    console.log("Hello");
}

// functions are objects
function greeting() {
    console.log("Hello Again!");
}

greet();
console.log(multiply(10, 20));

greeting();
let a = greeting;
a();