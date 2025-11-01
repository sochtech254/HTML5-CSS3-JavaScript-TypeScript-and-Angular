// JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide
// methods to call as such.
// Let’s look at the key distinctions between primitives and objects.
// A primitive
// ● Is a value of a primitive type.
// ● There are 7 primitive types: string , number , bigint , boolean , symbol , null and undefined .
// An object
// ● Is capable of storing multiple values as properties.
// ● Can be created with {} , for instance: {name: "John", age: 30} . There are other kinds of objects in
// JavaScript: functions, for example, are objects.
// One of the best things about objects is that we can store a function as one of its properties.
let john = {
    name: "John",
    sayHi: function() {
        alert("Hi buddy!");
    }
};
john.sayHi();    // Hi buddy!

// The “object wrappers” are diﬀerent for each primitive type and are called: String , Number , Boolean , Symbol and
// BigInt . Thus, they provide diﬀerent sets of methods.
// For instance, there exists a string method str.toUpperCase() that returns a capitalized str . Here’s how it works:
let str = "Hello";
console.log(str.toUpperCase());    // HELLO

// A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:
let n = 1.23456;
console.log(n.toFixed(2));    // 1.23

// Objects are always truthy in if , so here the alert will show up:
let zero = new Number(0);
if (zero) {    // zero is true, because it's an object
    console.log("zero is truthy!?!");
}

// Using the same functions String/Number/Boolean without new is totally ﬁne and useful thing. They convert a value to
// the corresponding type: to a string, a number, or a boolean (primitive).
// For example, this is entirely valid:
let num = Number("123");    // convert a string to number






























