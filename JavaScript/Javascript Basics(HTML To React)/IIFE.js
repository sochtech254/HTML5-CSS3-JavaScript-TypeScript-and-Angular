// It is called as Immediately Invoked Function Expressions
// It is function expression
// It is moreover a self-executing function - an IIFE
// It wraps the inside members to the scope
// It prevents form polluting the global scope
// It is useful in closures

// sum is a Function expression whose value is an IIFE
// So, consequently, the sum is assigned the return value of a self-invoking function
let sum = (function () {
    let foo = 20;

    function bar() {
        foo = foo + 10;

        console.log(foo);
    }

    return bar;
})()

sum()    // 30
sum()    // 40
sum()    // 50

// What is happening inside IIFE?
// We have defined foo variable as the local variable inside the function
// We also have a function called bar()
// And, finally, we return the bar function
// So, the function bar is getting assigned to the variable sum

// The value of foo is enclosed inside the IIFE which is assigned to sum
// And, sum is actually the function bar
// Every time you call function sum() it updates and remembers the new value of variable foo
// Therefore, every call to the function displays the updated value of the foo.








