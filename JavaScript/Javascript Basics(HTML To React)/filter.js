// This method returns a subset of the given array
// It executes the given function for each item in the array and depending on whether the function returns true or false,
// it keeps that element in or filters it out
// If true the element is kept in the result array
// If false the element is excluded from the result array
function isGreaterThanTwo(item) {
    return item > 2;
}

const numbers = [1, 2, 3, 4, 5];
let greaterThanTwoArray = numbers.filter(isGreaterThanTwo);
console.log(greaterThanTwoArray);    // [3, 4, 5]
// In the above example, isGreaterThanTwo method checks if the value of the given item is greater than two
// The result is a new array with only [3, 4, 5] items in it.