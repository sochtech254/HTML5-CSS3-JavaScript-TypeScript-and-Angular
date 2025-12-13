/*
*  TEMPLATE LITERALS
*  Allows you to work with strings in a more
*  flexible and readable way
* */

let name = 'Alice'
console.log('Hello', name);

let studentName = 'Bob';
let age = 25;
let greeting = `Hello ${studentName}, you are ${age} years old`;
console.log(greeting);

// Multiline String
let multilineString = `This
is
a
multiline
string`;
console.log(multilineString);

// Expressions
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result);

// Objects
let user = {
    firstName: 'John',
    lastName: 'Doe',
    age:33
};

let userInfo = `User Info:
Name: ${user.firstName} ${user.lastName}
Age: ${user.age}`;
console.log(userInfo);

// escape backtick character
let e = `This is a backtick \``;
console.log(e);