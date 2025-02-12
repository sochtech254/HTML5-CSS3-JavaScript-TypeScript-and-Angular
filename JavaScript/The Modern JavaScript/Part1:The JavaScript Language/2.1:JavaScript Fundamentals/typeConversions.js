// String conversion
// String conversion happens when we need the string form of a value.
// For example, alert(value) does it to show the value.
// We can also call the String(value) function to convert a value to a string:
let value = true;
alert(typeof value);    // boolean
value = String(value);    // now value is a string "true"
alert(typeof value);    // string
// String conversion is mostly obvious. A false becomes "false", null becomes "null".

// Numeric conversion
// Numeric conversion in mathematical functions and expressions happens automatically.
// For example, when division / is applied to non-numbers:
alert( "6" / "2" );    // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
console.log(typeof str);    // string

let num = Number(str);    // becomes a number 123
console.log(typeof num);

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a
// number to be entered.
// If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");
alert(age);

console.log(Boolean(1));    // true
console.log(Boolean(0));    // false

console.log(Boolean("hello"));    // true
console.log(Boolean(""));


































