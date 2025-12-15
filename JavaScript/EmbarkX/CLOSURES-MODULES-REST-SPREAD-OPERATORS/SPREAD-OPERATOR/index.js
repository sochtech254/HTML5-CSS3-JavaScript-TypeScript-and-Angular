/*
*  Spread operators:
*  Spread Operator (...): Used to expand elements of an iterable (like arrays or strings) or properties of object into individual elements or properties.
* */

let originalArray = [1, 2, 3, 4, 5];
console.log(originalArray);
console.log(...originalArray);

let copiedArray = [...originalArray];
console.log(copiedArray);

console.log(Math.max(...copiedArray));

let myString = "Hello";
console.log(myString);
console.log(...myString);
let stringArray = [...myString];
console.log(stringArray);

let mergedArray = [originalArray, ...stringArray];
console.log(mergedArray);

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...originalArray));

let object1 = { name: "Alice", age: 25 };
let object2 = {job: "Engineer", city: "New York"};
let mergedObject = {...object1, object2};
console.log(mergedObject);