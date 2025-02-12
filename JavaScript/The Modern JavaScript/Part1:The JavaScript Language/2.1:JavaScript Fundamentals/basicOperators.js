// unary operator
let x = 1;
x = -x;
console.log(x);    // -1, unary negation was applied

// binary operator
let num1 = 1;
let num2 = 3;
console.log(num2 - num1);    // 2, binary minus subtracts values

// Remainder %
console.log(5 % 2);    // 1, the remainder of 5 divided by 2
console.log(8 % 3);    // 2, the remainder of 8 divided by 3
console.log(8 % 4);    // 0, the remainder of 8 divided by 4

// Exponentiation **
console.log(2 ** 2);    // 2^2 = 4
console.log(2 ** 3);    // 2^3 = 8
console.log(2 ** 4);    // 2^4 = 16
// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.
// For example, a square root is an exponentiation by ½:
console.log(4 ** (1/2));    // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1/3));    // 2 (power of 1/3 is the same as a cubic root)

let string = "my" + "String";
console.log(string);

console.log('1' + 2);    // "12"
console.log(2 + '1');    // "21"
console.log(2 + 2 + '1');    // "41" and not "221"
console.log('1' + 2 + 2);    // "122" and not "14"

console.log(6 - '2');    // 4, converts '2' to a number
console.log('6' / '2');    // 3, converts both operands to numbers

// No effect on numbers
let d = 1;
console.log(+d);    // 1
let f = -2;
console.log(+f);

// Converts non-numbers
console.log(+true);    // 1
console.log(+"");    // 0
// It actually does the same thing as Number(...), but is shorter.

let apples = "2";
let oranges = "3";
console.log(apples + oranges);    // "23", the binary plus concatenates strings

let apples1 = "2";
let oranges1 = "3";
console.log(+apples1 + +oranges1);
// the longer variant
// console.log(Number(apples) + Number(oranges));    // 5

let n = 2;
n += 5;    // now n = 7 (same as n = n + 5)
n *= 2;    // now n = 14 (same as n = n *2)

let counter = 2;
counter++;    // works the same as counter = counter + 1, but is shorter
console.log(counter);    // 3

let counter1 = 2;
counter1--;    // works the same as counter = counter - 1, but is shorter
console.log(counter1);    // 1

let m = (1 + 2, 3 + 4);
console.log(m);    // 7 (the result of 3 + 4)
// Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as
// the result.
