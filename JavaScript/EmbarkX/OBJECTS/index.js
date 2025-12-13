/*
*  Objects:
*  Objects allow you to group related data and functions together.
*  An object is created using curly braces '{}' and contains key-value pairs, where each key (also called a property) is associated with a value.
* */

let person = {
    name: "Alice",
    age: 25,
    isStudent: true
}

console.log(person);

// Accessing Object Properties
console.log(person.isStudent);
console.log(person["isStudent"]);    // rarely used

// Adding or Updating Properties
person.job = "Engineer";
console.log(person);
person.age = 30;
console.log(person.age);

delete person.isStudent;
console.log(person);

// Check if property exists
console.log('name' in person);
console.log(person.hasOwnProperty("age"));

// Nested Objects
let student = {
    name: "Bob",
    courses: {
        math: true,
        science: false
    }
}

console.log(student);
console.log(student.courses);
console.log(student.courses.math);

// Object Destructuring
let {name, courses} = student;
console.log("Name: ",name, "Courses:",courses);
console.log(name);
console.log(courses);
