// Using Function - ES5 Style
/*
let Person = function (name) {
    this.name = name;
}

let Man = function (name) {
    Person.call(this, name);
    this.gender = "Male";
}

Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;

let John = new Man("John");

console.log(John.name);    // John
console.log(John.gender);    // Male*/

// Using Classes - ES6+ Style
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Person {
    constructor(name) {
        super(name);
        this.gender = "Male";
    }
}

let John = new Man("John");
console.log(John.name);
console.log(John.gender);




