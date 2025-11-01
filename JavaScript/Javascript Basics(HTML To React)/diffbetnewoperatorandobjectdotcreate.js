function Car() {
    console.log(this);    // this points to myCar
    this.name = "Honda";
}

let myCar = new Car();
console.log(myCar);    // Car {name: "Honda", constructor: Object}
console.log(myCar.name);    // Honda
console.log(myCar instanceof Car);    // true
console.log(myCar.constructor);    // function Car() {}
console.log(myCar.constructor === Car);    // true
console.log(typeof myCar);

console.log("\n");

// You can also use Object.create to create a new object
// But, it does not execute the constructor function
// Object.create is used to create an object from another object
let Car1 = {
    name: 'Honda'
}

let myCar1 = Object.create(Car1);
console.log(myCar1);    // Object {}
console.log(myCar1.name);    // Honda
// console.log(myCar1 instanceof Car1);    // ERROR
console.log(myCar1.constructor);    // Anonymous function object
console.log(myCar1.constructor === Car1);    // false
console.log(typeof myCar1);    // object