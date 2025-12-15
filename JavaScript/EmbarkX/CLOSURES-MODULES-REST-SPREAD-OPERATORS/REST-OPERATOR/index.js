/*
*  Rest operator:
*  The rest operator (`...`) is used to collect multiple values into a single variable.
*  It is especially useful when working with an unknown or variable number of arguments.
* */

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(3, 2, 4));
console.log(sum(3, 2, 4, 1, 5, 9, 6, 8, 7));


let arr = [1, 2, 3, 4, 5];
console.log(sum(...arr));


// Arrays
let fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];
let [first, second, ...restOfFruits] = fruits;
console.log(first);
console.log(second);
console.log(restOfFruits);

// Objects
let person = {
    name: "John",
    age: 30,
    city: "New York"
}

let {name, ...restOfPerson} = person;
console.log(name);
console.log(restOfPerson);

// Rest with Spread
function showNames(first, second, ...others) {    // rest operator
    console.log(first);
    console.log(second);
    console.log(others);
}

let names = ["Apple", "Banana", "Cherry", "Date", "Fig"];
showNames(...names);    // spread operator

