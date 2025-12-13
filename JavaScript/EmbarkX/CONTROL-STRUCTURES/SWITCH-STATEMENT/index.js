/*
*  Switch statement:
*  When dealing with multiple conditions for the same variable, `if...else` can become lengthy and hard to read.
*  The `switch` statement offers a cleaner, more readable alternative.
* */

const fruitType = "apple";

switch (fruitType) {
    case "apple":
        console.log("Apples are $2 per kg.");
        break;
    case "banana":
        console.log("Bananas are $1 per kg.");
        break;
    case "orange":
        console.log("Oranges are $1.5 per kg.");
        break;
    default:
        console.log("Sorry, we don't have that fruit type.");
        break;
}

// Switch with expressions
let number = 9;
switch (true) {
    case number < 5:
        console.log("Number is less than 5");
        break;
    case number >= 5 && number < 10:
        console.log("Number is between 5 and 10");
        break;
    default:
        break;
}
