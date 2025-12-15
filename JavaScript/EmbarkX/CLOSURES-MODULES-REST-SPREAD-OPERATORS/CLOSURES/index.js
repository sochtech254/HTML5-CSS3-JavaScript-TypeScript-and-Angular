/*
*  CLOSURES:
*  Allow a function to access variables from its outer(enclosing) function scope.
* */

/*
Without closure:

function incrementCount() {
    let count = 0;
    count++;
    console.log(count);
}

incrementCount();
incrementCount();
incrementCount();
*/

// CLOSURE EXAMPLE:
function createCounter() {
    let count = 0;

    function incrementCount() {
        count++;
        console.log(count);
    }

    return incrementCount;
}

// multiple independent counters:
let counter = createCounter();
counter();
counter();
counter();


let counter1 = createCounter();
counter1();
counter1();
counter1();

// RETURNING MULTIPLE FUNCTIONS:
function createCounter1() {
    let count = 0;

    function incrementCount() {
        count++;
        console.log(count);
    }

    function getCount() {
        return count;
    }

    return {incrementCount, getCount};
}

let counter2 = createCounter1();
counter2.incrementCount();
console.log(counter2.getCount());
counter2.incrementCount();
counter2.incrementCount();
console.log(counter2.getCount());

// FUNCTION FACTORIES
function createGreeting(greeting) {
    return function (name) {
        console.log(greeting + ', ' + name + '!');
    }
}

let sayHello = createGreeting('Hello');
sayHello("Alice");
sayHello("John");

let sayGoodbye = createGreeting('Goodbye');
sayGoodbye("Alice");
sayGoodbye("John");