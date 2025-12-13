/*
*  Type Conversion:
*  Javascript is a loosely typed language.
*  Javascript supports implicit and explicit conversion.
* */

let w = 5 + 1;
console.log(w);
console.log(typeof w);

// Implicit Conversion
let x = '5' + 1;    // '5' is a string and 1 being a number is implicitly converted to string and then concatenated to 5
console.log(x);
console.log(typeof x);

let y = '5' - 1;
console.log(y);
console.log(typeof y);

let z = '5' * 1;
console.log(z);
console.log(typeof z);

let a = true + 1;
let b = false + 1;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

// Explicit Conversion
// toString(), String()
let num = 123;
let bool = true;

let numToString = String(num);
console.log(numToString, typeof numToString);

let boolToString = bool.toString();
console.log(boolToString, typeof boolToString);

// Number(), parseInt(), parseFloat()
let strNum = "456";
let strFloat = "12.55";

let strToNum = Number(strNum);
console.log(strToNum, typeof strToNum);

let strToInt = parseInt(strNum);
let strToInt1 = parseInt(strFloat);
console.log(strToInt, typeof strToInt);
console.log(strToInt1, typeof strToInt1);

let strToFloat = parseFloat(strFloat);
console.log(strToFloat, typeof strToFloat);

let invalidNum = Number("hello");
console.log(invalidNum, typeof invalidNum);

// Boolean()
let zero = 0;
let nonEmptyString = "Hello";

let zeroToBoolean = Boolean(zero);
console.log(zeroToBoolean, typeof zeroToBoolean);

let strToBoolean = Boolean(nonEmptyString);
console.log(strToBoolean, typeof strToBoolean);

let emptyString = "";
let emptyStringToBoolean = Boolean(emptyString);
console.log(emptyStringToBoolean, typeof emptyStringToBoolean);

let boolNull = null;
let boolNullToBoolean = Boolean(boolNull);
console.log(boolNullToBoolean, typeof boolNullToBoolean);

let boolUndefined = undefined;
let boolUndefinedToBoolean = Boolean(boolUndefined);
console.log(boolUndefinedToBoolean, typeof boolUndefinedToBoolean);

let boolNaN = NaN;
let boolNaNToBoolean = Boolean(boolNaN);
console.log(boolNaNToBoolean, typeof boolNaNToBoolean);

let boolFalse = false;
let boolFalseToBoolean = Boolean(boolFalse);
console.log(boolFalseToBoolean, typeof boolFalseToBoolean);

