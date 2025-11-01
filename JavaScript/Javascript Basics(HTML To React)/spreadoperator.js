// Spread Operator
// It looks the same as the Rest parameter operator
// But it has a different use case
// In fact, it performs almost the opposite function to Rest operator
// NOTE: Spread operator turns an array to comma-separated values
// Below example spread array1 to a comma-separated list of values into the array2
let array1 = [2, 3];
let array2 = [1, ...array1, 4, 5];    // spread
// array2 = [1, 2, 3, 4, 5]

// Spread tricks
// Concat array
const arr1 = ['coffee', 'tea', 'milk']
const arr2 = ['juice', 'smoothie'];
// Without spread
let beverages = arr1.concat(arr2);
// With spread
let beverages1 = [...arr1, ...arr2];
// result
// ['coffee', 'tea', 'milk', 'juice', 'smoothie']


// Make copy of array
const arr3 = ['coffee', 'tea', 'milk'];
// Without spread
let arr3Copy = arr3.slice();
// With spread
const arr4Copy = [...arr3];


// Remove duplicate entries from Array
const arr4 = ['coffee', 'tea', 'milk', "coffee", "milk"];
// Without spread
// Iterate over the array add it to object as property
// If value present in the object skip it
// Else push it to another array
// With spread
const arr5Copy = [...new Set(arr4)];
// result
// ['coffee', 'tea', 'milk']


// Convert string to array
const myBeverage = 'tea';
// Without spread
let bevArr = myBeverage.split('');
// With spread
let bevArr1 = [myBeverage];
// result
// ['t', 'e', 'a']


// Find min max
// Without spread
let max = Math.max(3, 2, 1, 5, -10);
// With spread
let myNums = [3, 2, 1, 5, -10];
let max1 = Math.max(...myNums);
// result
// 5