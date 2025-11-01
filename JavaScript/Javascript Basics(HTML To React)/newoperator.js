// It will create a new instance of an object
// It can be user-defined or a builtin type

// built-in type object
let cars = new Array('Honda', 'Audi', 'BMW');

// user-defined object
class Car {
    constructor(name) {
        this.name = name;
    }
}

let car1 = new Car('Honda');

// It links the newly created object to another object
// --> It does it by setting its constructor to another object
// --> The object type is set to its constructor function
// It makes this variable point to the newly created object
// it invokes the constructor function

// Car is a constructor function because it is invoked using new keyword
// Car function has a field called name
// myCar object is created from the Car function using new keyword
// When that is done:
// --> It makes Car the prototype/constructor of myCar
// --> It sets the name field to Honda
// --> The value of myCar becomes {name: 'Honda'}

function Car1(name) {
    console.log(this);    // this points to myCar
    this.name = name;
}

let myCar = new Car1('Honda');
console.log(myCar);    // {name: "Honda", constructor: "Car1"}