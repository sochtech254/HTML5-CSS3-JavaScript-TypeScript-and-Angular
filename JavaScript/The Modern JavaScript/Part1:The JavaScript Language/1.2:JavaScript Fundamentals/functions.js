let userName = "John";

function showMessage() {
    userName = "Bob";
    let message = "Hello, " + userName;
    console.log(message);
}
showMessage();

function addNumbers(num1, num2) {
    return num1 + num2;
}
let  result = addNumbers(1, 2);
console.log(result);

// default values
function loadMessages(from , text = "no text given") {
    console.log(from + ": " + text);
}
loadMessages("Ann");    // Ann: no text given

let accessGranted;
function checkAge(age){
    if (age >= 18) {
        console.log("Access granted");
        accessGranted = true;
    } else {
        console.log("Access denied");
        accessGranted = false;
    }
}
checkAge(30);

function showPrimes(n){
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i) return false;
    }
    return true;
}