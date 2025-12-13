function getSquare(number) {
    return number * number;
}

// function returning multiple values
function getUserInfo(name, age) {
    return {
        userName: name,
        userAge: age
    }
}

// function return array
function getDimension() {
    return [100, 200, 300];
}

// No return
function sayHello() {
    console.log("Hello");
}

// function with multiple return statements
function checkAge(age) {
    if (age > 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

let squareNum = getSquare(4);
console.log(squareNum);

let user = getUserInfo('John Doe', 33);
console.log(user);
// object destructuring
let {userName, userAge} = getUserInfo("Alice", 22);
console.log("User name: ", userName, "\n", "User age:", userAge);

console.log(getDimension());
// Array destructuring
let [width, height, depth] = getDimension();
console.log(width, height, depth);

sayHello();

console.log(checkAge(14));
console.log(checkAge(24));