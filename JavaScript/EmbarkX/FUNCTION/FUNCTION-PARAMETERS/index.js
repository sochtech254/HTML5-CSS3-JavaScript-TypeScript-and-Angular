function greet(name, age) {
    console.log(`Hello, ${name}!`);
    console.log(`You are ${age} years old!`);
    console.log(`You are now logged in.`);
}

// function with default parameter value
function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

// function with rest parameter
function calculateSum(...numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });

    console.log(`Sum: ${sum}`);
}

// Boolean parameters
function checkEligibility(isMember) {
    console.log((isMember) ?  "Eligible" : "Not eligible");
}

// functions with objects as parameters
function printAddress({street, city, zip}) {
    console.log(`Address: ${street}, ${city}, ${zip}`);
}

// function with arrays as parameters
function printNumbers(numbers) {
    console.log(`Numbers: ${numbers}`);
}

greet('Alice', 22);
greet('John', 21);
greet('Lucy', 29 );

greetPerson("Ron");

calculateSum(10, 20);
calculateSum(5, 20, 10);
calculateSum(5, 20, 10, 15);

checkEligibility(true);

let address = {
    street: "Luthuli Avenue",
    city: "Nairobi",
    zip: "052754"
};

printAddress(address);

printNumbers([1, 2, 3, 4, 5]);