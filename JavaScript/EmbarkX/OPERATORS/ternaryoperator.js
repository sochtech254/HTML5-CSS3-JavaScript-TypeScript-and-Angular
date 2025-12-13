/*
*  Ternary Operator:
*      - Conditional operator
*      (condition ? expression1 : expression2)
* */

let x = 10;
let message = x > 5 ? "x is greater than 5" : "x is less than 5";
console.log(message);

let number = 5;
let result = number % 2 === 0 ? "Number is even" : "Number is odd";
console.log(result);

// Nested Ternary Operator
// age < 13 -> Child
// age 13-20 -> Teenager
// age > 20 -> Adult

let age = 16;
let category = (age < 13) ? "Child" :
                      (age > 20) ? "Teenager" : "Adult";
console.log(category);

