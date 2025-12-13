/*
*  ARRAY METHODS:
*  slice(): Returns a portion of an array.
*  splice(): Modifies the array by removing or replacing elements at a specific index.
*  map(): Transforms each element and returns a new array.
*  filter(): Returns a new array with elements that pass a condition.
*  reduce(): Reduces the array to a single value.
*  forEach(): Executes a function for each array element.
*  find(): Returns the first element that satisfies a particular condition.
*  some(): Checks if at least one element  passes a test.
*  every(): Checks if all elements pass a test.
*  concat(): Merges arrays into a new array.
*  join(): Joins all elements into a string.
*  reverse(): Reverses the order of the elements.
*  sort(): Sorts the elements of an array.
* */

// map()
// re-usable function
function double(num) {
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

// Using anonymous function - recommended if the function is not to be re-used
let doubleAnonymous = numbers.map(function (number) {
    return number * 2;
});
console.log(doubleAnonymous);

// Using arrow function
let doubleArrow = numbers.map((number) => {
    return number * 2;
});
console.log(doubleArrow);


// filter()
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// reduce()
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

let factorial = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(factorial);

// forEach()
numbers.forEach(number => console.log(number));

// find()
let firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven);

// some() - returns a boolean
let hasNegative = [-1, 2, 3, 4, 5].some(number => number < 0);
console.log(hasNegative);

// every() - returns a boolean
let hasEvery = [-1, 2, 3, 4].every(number => number < 0);
console.log(hasEvery);

// concat()
let moreNumbers = [6, 7, 8, 9];
let newArray = numbers.concat(moreNumbers);
console.log(newArray);

// slice()
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);

// splice()
let fruits = ["Apple", "Pineapple", "Passion", "Orange", "Mango", "Watermelon", "Pears"];
fruits.splice(1, 2, "Cherry", "Strawberry");
console.log(fruits);

// join()
let allFruits = fruits.join(", ");
console.log(allFruits);

// reverse()
let reverseNumbers = numbers.reverse();
console.log(reverseNumbers);

// sort()
let sortedFruits = fruits.sort();
console.log(sortedFruits);

numbers = [3, 1, 10, 2]
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);


