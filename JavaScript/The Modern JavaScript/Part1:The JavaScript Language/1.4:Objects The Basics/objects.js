// Objects are used to store keyed collections of various data and more complex entities.
// An object can be created with ﬁgure brackets {…} with an optional list of properties. A property is a “key: value”
// pair, where key is a string (also called a “property name”), and value can be anything.
// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object();    // "object constructor" syntax
let user1 = {};    // "object literal" syntax
// Usually, the ﬁgure brackets {...} are used. That declaration is called an object literal.
let user2 = {    // an object
    name: "John",                       // by key "name" store value "John"
    age: 30                             // by key "age" store value 30
};
console.log(user2);
console.log(user2.name);    // John
console.log(user2.age);    // 30
user2.isAdmin = true;
delete user2.isAdmin;

// We can also use multiword property names, but then they must be quoted:
let user3 = {
    name: "John",
    age: 30,
    "likes birds": true    // multiword property name must be quoted
};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]);    // true

// delete
delete user["likes birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to
// a literal string – like from a variable as follows:
let key1 = "likes birds";
// same as user["likes birds"] = true;
user[key1] = true;

let user4 = {
  name: "John",
  age: 30,
};

let key =prompt("What do you want to know about the user?", "name");
console.log(user4[key]);    // John (if enter "name")

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// For instance:
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
console.log(bag.apple);    // 5 if fruit="apple"

function makeUser(name, age) {
    return {
        name,    // same as name: name
        age:age
    };
}

let user5 = makeUser("John", 30);
console.log(user5.name);    // John

// A variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:
    // these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let + obj.return);    // 6

// Reading a non-existing property just returns undefined . So we can easily test whether the property exists:
let user6 = {};
console.log(user6.noSuchProperty === undefined);    // true means "no such property"

// There’s also a special operator "in" for that.
let user7 = {name: "John", age: 30};
console.log("age" in user7);    // true, user.age exists
console.log("blabla" in user7);

let user8 = {name: "John", age: 30, isAdmin: true};

for (let key in user8) {
    // keys
    console.log(key);    // name, age, isAdmin
    // values for the keys
    console.log(user8[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
for (let code in codes) {
    console.log(code);
}

let codes1 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};
for (let code in codes1) {
    console.log(+code);    // 49, 41, 44, 1
}







