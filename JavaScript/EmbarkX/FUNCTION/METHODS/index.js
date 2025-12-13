// functions within objects

let personAlice = {
    name: "Alice",
    age:33,
    greet: function () {
        console.log(`Hi I am ${personAlice.name}!`);
    }
};

// Arrow function
let personJohn = {
    name: "John",
    age:40,
    greet: () => {
        console.log(`Hi I am ${personJohn.name}!`);
    }
};

// this keyword does not work in arrow function
let personBob = {
    name: "Bob",
    age:24,
    greet: function() {
        console.log(`Hi I am ${this.name}!`)
    }
};

// counter
let counter = {
    value: 0,
    increment: function() {
        this.value += 1;
        return this.value;
    },
    incrementBy: function(number) {
        this.value += number;
        return this.value;
    }
};

// Defining methods dynamically
let dynamicMethod = {
    value: 0
};

dynamicMethod.sayHi = function(){
    console.log("Hello Dynamic");
}

// Nested objects with methods
let car = {
    brand: "Toyota",
    specs: {
        speed: 120,
        displaySpecs: function() {
            console.log(`Speed `, this.speed);
        }
    }
};

// object definition Shorthand version
let personShortHand = {
    name: "Short Hand",
    age: 32,
    greet() {
        console.log(`Hi I am ${this.name}!`);
    }
};

personAlice.greet();
console.log(`${personAlice.age}`);

personJohn.greet();
console.log(`${personJohn.age}`);

personBob.greet();
console.log(`${personBob.age}`);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.incrementBy(10));

console.log(dynamicMethod.value);
dynamicMethod.sayHi();

car.specs.displaySpecs();

personShortHand.greet();