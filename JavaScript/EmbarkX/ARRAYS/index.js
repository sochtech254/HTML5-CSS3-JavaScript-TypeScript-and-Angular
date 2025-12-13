/*
*  Arrays are used to store multiple values in a single variable
*
*  Creating Arrays:
*  You can create an array by enclosing its elements within square brackets ([])
* */

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[1]);
console.log(typeof numbers);

let fruits = ["Apple", "Mango", "Passion", "Pineapple", "Watermelon"];
console.log(fruits);
console.log(fruits[2]);
console.log(fruits.length);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0]);
console.log(matrix[1][2]);

/*
*  ARRAY METHODS:
*  push(): Adds an element to the end.
*  pop(): Removes the last element.
*  shift(): Removes the first element.
*  unshift(): Adds an element to the beginning.
*  slice(): Copies a portion of an array.
*  splice: Adds or removes elements at a specific index.
* */

// push()
fruits.push("orange");
console.log(fruits);

// pop()
let lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

// shift()
let firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);

// unshift
fruits.unshift("Apple");
console.log(fruits);

// slice()
let slicedArray = fruits.slice(1,3);
console.log(slicedArray);

// splice
fruits.splice(1,2, "Cherry", "Strawberry");
// let deletedItems = fruits.slice(1, 2, "Cherry", "Strawberry");
// console.log(deletedItems);
console.log(fruits);