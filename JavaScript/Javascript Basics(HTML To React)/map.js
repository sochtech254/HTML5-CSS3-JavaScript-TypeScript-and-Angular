// It is used for creating a new array from an existing one
// It applies the given function to each item in that array
function getSquare(item) {
    return item * item;
}

const numbers = [1, 2, 3, 4, 5];
const squareOfNumbers = numbers.map(getSquare);
console.log(squareOfNumbers);
// In the above example getSquare method is called for each item in the numbers array
// The method returns the square of each number
// The result of the .map is a new array with square of each number
