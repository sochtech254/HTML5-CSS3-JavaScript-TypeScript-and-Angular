// The this represents the object (or function) that "owns" the currently executing code
// this keyword references current execution context
// When a Javascript function is invoked, a new execution context is created.
// this in js is different from other languages because of how functions are handled
// --> Functions are objects in Javascript
// --> So we can change the value of this keyword for every function call
// The value of this depends on the object that te function is attached to
// In the below example:
// --> getMyAge function belongs to person object
// --> So, this.age represents the person object's age property

const person = {
    name: "foo",
    age: 21,
    getMyAge: function() {
        return this.age;
    }
}

let myObject = {foo: 20};
let foo = 10;

function print() {
    console.log(this.foo);
}

// This will log window.foo - 10
print();

// This will alert myObject.foo which is 20
print.apply(myObject);






