function addMe(a) {
    let b = 4;
    return a + b;    // The function returns the sum of a and b
}

let sum = addMe(1);
console.log(sum);    // 3

// function expression
let add = function (a, b) {
    return a + b;
}
sum = add(2, 3);
console.log(sum);    // 5
