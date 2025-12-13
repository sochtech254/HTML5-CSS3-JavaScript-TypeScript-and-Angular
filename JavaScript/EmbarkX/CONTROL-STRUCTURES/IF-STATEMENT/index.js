/*
*  If statement:
*  It is used to execute a block of code if a specified condition is `true`
* */

let temperature = 22;
if (temperature > 0) {
    console.log("It's a hot day!");
}
console.log("Have a nice day!");

// if...else
let isRaining = false;
if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("No need for an umbrella");
}

// if...else if...else
let score = 75;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 75) {
    console.log("Good Job!");
} else if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("Try again next time.");
}

// nested if...else
// try changing values
let age = 20;
let hasPermission = true;

if (age >= 17) {
    if (hasPermission) {
        console.log("You are allowed to enter.");
    } else {
        console.log("You need permission to enter.");
    }
} else {
    console.log("You are not old enough to enter.")
}

// || &&
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax today.")
} else {
    console.log("It is working day!");
}

// ?:
let number = 7;
let result = number % 2 === 0 ? "Even number" : "Odd number";
console.log(result);

// Arrays
let fruits = ["Apple", "Mango", "Orange"];
let favoriteFruit = "Apple";
if (fruits.includes(favoriteFruit)) {
    console.log("Available");
} else {
    console.log("Unavailable");
}

// Objects
let user = {
    name: "Alice",
    isAdmin: false
}

if (user.isAdmin) {
    console.log("Welcome, Admin");
} else {
    console.log(`Welcome, ${user.name}!`);
}