/*
*  Arrow functions:
*  Provide a more concise way of writing functions.
* */

let greet = function () {
    console.log("Hello!");
}

let greetArrow = () => console.log("Hello Again!");

let greetArrowMultiple = () => {
    console.log("Hello World!");
    console.log("Hello World Again!");
}

// Arrow function parameters
let greetArrowParam1 = (name) => {
    console.log(`Hello ${name}`);
    console.log(`Hello`);
}

// Return values
let sum = (a, b) => a + b;

greet();
greetArrow();
greetArrowMultiple();
greetArrowParam1("Bob");
console.log(sum(11, 22));

