// Whenever you see a function keyword within another function, the inner function has access to variables in the outer
// function. That is a closure.

// Simply accessing variables outside your immediate lexical scope creates a closure. Below example is a closure.
// Because a is outside the scope of function foo.
let a = 42;

function foo() { return a; }
// Closures are just using variables that came from a higher scope.

// Closure remembers the environment
// Closure happens when an inner function is defined in outer function and is made accessible to be called later.

function sayHello() {
    let hello = 'Hello, world!';

    let log = function () {
        console.log(hello);
    }

    return log;
}

let myClosure = sayHello();
myClosure();




