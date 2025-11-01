// Function declarations
foo();    // 1

function foo() {
    console.log(1);
}

// Variable declarations
console.log(bar);    // undefined - but no error
var bar = 1;

// Functions are hoisted first, and then variables
// NOTE 1: Variables and constants declared with let or const are not hoisted
// NOTE 2: Function declarations are hoisted - but function expressions are not!