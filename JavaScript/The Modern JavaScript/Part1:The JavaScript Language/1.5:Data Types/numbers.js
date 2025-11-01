// In modern JavaScript, there are two types of numbers:
// 1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point
//    numbers”. These are numbers that we’re using most of the time.
// 2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number
//    can’t safely exceed (253-1) or be less than -(253-1)

// More ways to write a number:
// Imagine we need to write 1 billion. The obvious way is:
let billion = 1000000000;
// We also can use underscore _ as the separator:
let billion1 = 1_000_000_000;
// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable.
// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:
let billion2 = 1e9;    // 1 billion, literally: 1 and 9 zeroes
alert(7.3e9);    // 7.3 billions (same as 7300000000 or 7_300_000_000)
// In other words, e multiplies te number by 1 with te given zeroes count.
alert(1e3 === 1000);    // e3 means *1000
alert(1.23e6 === 1.23 * 1000000);    // e6 means *1000000
// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):
let mcs = 0.000001;
// Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:
let mcs1 = 1e-6;    // five zeroes to the left from 1

// Hex, binary and octal numbers
// Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things.
// So naturally, there exists a shorter way to write them: 0x and then the number.
// For instance:
alert(0xff);    // 255
alert(0xFF);    // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
let a = 0b11111111;    // binary form of 255
let b = 0o377;    // octal form of 255
alert(a == b);    // true, the same number 255 at both sides

// toString(base)
// The method num.toString(base) returns a string representation of num in the numeral system with the given base.
// For example:
let num = 255;
alert(num.toString(16));    // ff
alert(num.toString(2));    // 11111111
// The base can vary from 2 to 36. By default, it's 10.
// Common use cases for this are:
// ● base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F .
// ● base=2 is mostly for debugging bitwise operations, digits can be 0 or 1 .
// ● base=36 is the maximum, digits can be 0..9 or A..Z . The whole latin alphabet is used to represent a number. A
//   funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for
//   example to make a short url. Can simply represent it in the numeral system with base 36 :
alert( 123456..toString(36) );    // 2n9c
// Two dots to call a method
// Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number,
// like toString in the example above, then we need to place two dots .. after it.

// Consider this (falsy!) equality test:
alert( 0.1 + 0.2 == 0.3 );    // false
// That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3 , we get false .
// Strange! What is it then if not 0.3 ?
alert( 0.1 + 0.2 );    // 0.30000000000000004
// Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order
// total will be $0.30000000000000004 . That would surprise anyone.
// Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method
// toFixed(n):
let sum = 0.1 + 0.2;
alert(sum.toFixed(2));    // "0.30"
// Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s
// actually convenient if we have an e-shopping and need to show $0.30 . For other cases, we can use the unary plus to
// coerce it into a number:
alert(+sum.toFixed(2));    // 0.3

// Tests: isFinite and isNaN
// Remember these two special numeric values?
// ● Infinity (and -Infinity ) is a special numeric value that is greater (less) than anything.
// ● NaN represents an error.
// They belong to the type number , but are not “normal” numbers, so there are special functions to check for them:
// ● isNaN(value) converts its argument to a number and then tests it for being NaN :
// alert( isNaN(NaN) );    // true
// alert( isNaN("str") );    // true
// But do we need this function? Can’t we just use the comparison === NaN ? Unfortunately not. The value NaN is unique
// in that it does not equal anything, including itself:
// alert( NaN === NaN );    // false
// ● isFinite(value) converts its argument to a number and returns true if it’s a regular number, not
// NaN/Infinity/-Infinity :
alert( isFinite("15") );    // true
alert( isFinite("str") );    // false, because a special value: NaN
alert( isFinite(Infinity) );    // false, because a special value: Infinity
// Sometimes isFinite is used to validate whether a string value is a regular number:
let num1 = +prompt("Enter a number", '');
// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num1) );
// Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite .

// Comparison with Object.is
// There is a special built-in method Object.is that compares values like === , but is more reliable for two edge cases:
// 1. It works with NaN : Object.is(NaN, NaN) === true , that’s a good thing.
// 2. Values 0 and -0 are diﬀerent: Object.is(0, -0) === false , technically that’s correct, because internally the
//    number has a sign bit that may be different even if all other bits are zeroes.
// In all other cases, Object.is(a, b) is the same as a === b .
// We mention Object.is here, because it’s often used in JavaScript specification. When an internal algorithm needs to
// compare two values for being exactly the same, it uses Object.is (internally called SameValue).

// parseInt and parseFloat
// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
alert( +"100px" );    // NaN
// The sole exception is spaces at the beginning or at the end of the string, as they are ignored.
// But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the
// currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.
// That’s what parseInt and parseFloat are for.
// They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The
// function parseInt returns an integer, whilst parseFloat will return a floating-point number:
alert( parseInt('100px' ) );    // 100
alert( parseFloat('12.5em') );    // 12.5
alert( parseInt('12.3') );    // 12, only the integer part is returned
alert( parseFloat('12.3.4') );    // 12.3, the second point stops the reading

// There are situations when parseInt/parseFloat will return NaN . It happens when no digits could be read:
alert( parseInt('a123') );    // NaN, the first symbol stops the process

// The second argument of parseInt(str, radix)
// The parseInt() function has an optional second parameter. It specifies the base of the numeral system,
// so parseInt can also parse strings of hex numbers, binary numbers and so on:
alert( parseInt('0xff', 16) );    // 255
alert( parseInt('ff', 16) );    // 255, without 0x also works
alert( parseInt('2n9c', 36) );    // 123456

// Other math functions
// JavaScript has a built-in Math object which contains a small library of mathematical functions and constants.
// A few examples:
// Math.random()
// Returns a random number from 0 to 1 (not including 1).
alert( Math.random() );
alert( Math.random() );
alert( Math.random() );

// Math.max(a, b, c...) and Math.min(a, b, c...)
// Returns the greatest and smallest from the arbitrary number of arguments.
alert( Math.max(3, 5, -10, 0, 1) );    // 5
alert( Math.min(3, 5, -10, 0, 1) );    // -10

// Math.pow(n, power)
// Returns n raised to the given power.
alert( Math.pow(2, 10) );    // 2 in power 10 = 1024
