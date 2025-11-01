// AND returns the ﬁrst falsy value while OR returns the ﬁrst truthy one.

console.log(true || true);    // true
console.log(false || true);    // true
console.log(true || false);    // true
console.log(false || false);    // false

if (1 || 0)
    console.log('truthy!');

let hour = 9;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed.');
}

console.log(1 || 0);    // 1  (1 is truthy)
console.log(null || 1);    // 1  (1 is the first truthy value)
console.log(null || 0 || 1);    // 1  (the first truthy value)
console.log(undefined || null || 0);    // 0  (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

console.log(true && true);    // true
console.log(false && true);    // false
console.log(true && false);    // false
console.log(false && false);    // false

let minute = 12;
let second = 30;
if (hour == 9 && minute == 12 && second == 30) {
    console.log("The time is 09:12:30");
}

if (1 && 0)
{
    console.log("Won't work, because the result is falsy");
}

console.log(!true);    // false
console.log(!0);    // true
// A double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!"non-empty string");    // true
console.log(!!null);    // false
alert( Boolean("non-empty string") );    // true
alert( Boolean(null) );    // false


