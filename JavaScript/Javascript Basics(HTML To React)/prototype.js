// Prototype property allows you to add properties and methods to any object dynamically
function Animal(name)
{
    this.name = name;
}

Animal.prototype.age = 10;

// When object Cat is inherited from object Animal
// --> Then Animal is the prototype object or the constructor of the Cat
let Cat = new Animal('cat');
console.log(Cat);    // constructor: "Animal"
console.log(Cat.name);    // cat
console.log(Cat.age);    // 10








