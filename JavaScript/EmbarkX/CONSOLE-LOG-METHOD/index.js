// Multiple values
console.log("Name:", "Alice", "Age:", 25);
console.log("Name:", "Alice", " Age:" + 25);

// Use variables
let x = 10;
let y = 20;
console.log("The value of x and y is ", x, y);
console.log("Sum is ", x+y);

console.log(`Sum is ${x+y}`);

// Logging objects
let person = {
    name: "Charlie",
    age: 28,
    profession: "Developer"
}
console.log(person.name);

// Formatted Output
console.log("The value of x is %d");
console.log("Hello %s, you are %d years old", "Alice", 25);

// Console methods
console.error("This is an error message");
console.warn("This is a warning message");
console.info("This is an informational message");

// console table
console.log(person);
console.table(person);