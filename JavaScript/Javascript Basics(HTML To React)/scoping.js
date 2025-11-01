// global scope
let a = 1;

function one() {
    console.log(a);    // 1
}

// local scope - parameter
function two(a) {
    console.log(a);    // parameter value
}

// local scope variable
function three() {
    let a = 3;
    console.log(a);    // 3
}

one();    // 1
two(2);    // 2
three();    // 3