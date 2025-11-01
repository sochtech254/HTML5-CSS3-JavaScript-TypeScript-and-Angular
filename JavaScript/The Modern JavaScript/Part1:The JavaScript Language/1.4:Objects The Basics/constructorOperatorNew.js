// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:
// 1. They are named with capital letter ﬁrst.
// 2. They should be executed only with "new" operator.
// For instance:
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Jack');
console.log(user.name);    // Jack
console.log(user.isAdmin);    // false
// When a function is executed with new , it does the following steps:
// 1. A new empty object is created and assigned to this .
// 2. The function body executes. Usually it modifies this , adds new properties to it.
// 3. The value of this is returned.
// Now if we want to create other users, we can call new User("Ann") , new User("Alice") and so on.
// Much shorter than using literals every time, and also easy to read.
// That’s the main purpose of constructors – to implement reusable object creation code.
// The “capital letter first” is a common agreement, to make it clear that a function is to be run with new .

// new function() { … }
// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately
// called constructor function, like this:
    // create a function and immediately call it with new
let user1 = new function () {
    this.name = 'John';
    this.isAdmin = false;

    // ... other code for user creation
    // maybe complex logic and statements
    // local variables etc
};
// This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims
// to encapsulate the code that constructs the single object, without future reuse.


// Return from constructors
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this , and it
// automatically becomes the result.
// But if there is a return statement, then the rule is simple:
// ● If return is called with an object, then the object is returned instead of this .
// ● If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.
// For instance, here return overrides this by returning an object:
function BigUser() {
    this.name = 'John';
    return {name: 'Godzilla'};    // <-- returns this object
}

console.log(new BigUser().name);    // Godzilla, got that object

// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
function SmallUser() {
    this.name = 'John';
    return;    // <-- returns this
}
console.log(new SmallUser().name);


// Methods in Constructors
// Using constructor functions to create objects gives a great deal of ﬂexibility. The constructor function may have
// parameters that define how to construct the object, and what to put in it.
// Of course, we can add to this not only properties, but methods as well.
// For instance, new User(name) below creates an object with the given name and the method sayHi :

function User2(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("My name is " + this.name);
    };

}
let john = new User2("John");
john.sayHi();




