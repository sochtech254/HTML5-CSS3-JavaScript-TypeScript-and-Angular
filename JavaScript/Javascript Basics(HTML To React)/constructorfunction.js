// Functions used to create new objects are known as constructor functions.
// Below function Person is a standard function
// But the functions is used to create a new object called john
// Therefore, the Person function by convention is called a constructor function
function Person() {
    this.name = 'John';
    this.age = 5;
}

let john = new Person();

console.log(john.name);
console.log(john.age);