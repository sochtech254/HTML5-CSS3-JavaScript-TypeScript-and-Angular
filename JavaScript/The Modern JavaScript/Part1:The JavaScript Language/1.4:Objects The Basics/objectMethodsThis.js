let user = {
    name: "John",
    age: 30,
};

user.sayHi = function () {
    console.log("Hello!");
};

user.sayHi();
// Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the
// object.
// A function that is a property of an object is called its method.

// There exists a shorter syntax for methods in an object literal:
user1 = {
    sayHi() {    // same as "sayHi: function() {}"
        console.log("Hello!");
    }
}

let user2 = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        console.log(this.name);
    }
};
user2.sayHi();

// “this” is not bound
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if
// it’s not a method of an object.
// The value of this is evaluated during the run-time, depending on the context.
// For instance, here the same function is assigned to two diﬀerent objects and has diﬀerent “this” in the calls:
let user3 = {
    name: "John"
};
let admin = {name: "Admin"};
function sayHi() {
    console.log(this.name);
}
// use the same function in two objects
user3.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user3.f();   // John (this == user3)
admin.f();    // Admin (this == admin)

// Arrow functions have no “this”
// Arrow functions are special: they don’t have their “own” this . If we reference this from such a function, it’s taken
// from the outer “normal” function.
// For instance, here arrow() uses this from the outer user.sayHi() method:
let user4 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user4.sayHi();









