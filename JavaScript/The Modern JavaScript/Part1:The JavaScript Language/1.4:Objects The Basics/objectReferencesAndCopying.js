let message = "Hello!";
let phrase = message;

console.log(message);
console.log(phrase);

let user = {
    name: "John"
}
let admin = user;
admin.name = "Pete";    // changed by the "admin" reference
console.log(user.name);    // "Pete" changes are seen from the "user" reference

let a = {};
let b = a;
console.log(a == b);    // true, both variables reference the same object
console.log(a === b);    // true

let c = {};
let d = {};    // two independent objects
console.log(c == d);    // false

// An important side eﬀect of storing objects as references is that an object declared as const can be modiﬁed.
const user1 = {
    name: "John"
}
user1.name = "Pete";
console.log(user1.name);

let user2 = {
    name: "John",
    age: 30
};

let clone = {};    // the new empty object

// let's copy all user properties into it
for (let key in user2) {
    clone[key] = user2[key];
}

// now clone is a fully independent object with the same cotent
clone.name = "Pete";    // changed the data in it
console.log(user2.name);    // still John in the original object

let user3 = {
    name: "John",
};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user3 = {name: "John", canView: true, canEdit: true}
console.log(user3.name);    // John
console.log(user3.canView);    // true
console.log(user3.canEdit);    // true

// We also can use Object.assign to perform a simple object cloning:
let user4 = {
    name: "John",
    age: 30
};
let clone1 = Object.assign({}, user4);
console.log(clone1.name);
console.log(clone1.age);

// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
// Like this:
let user5 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log(user5.sizes.height);
let clone2 = Object.assign({}, user5);
console.log(user5.sizes === clone2.sizes);    // true, same object

// user5 and clone share sizes
user5.sizes.width = 60;    // change a property from one place
console.log(clone2.sizes.width);    // 60, get the result from the other one

// The call structuredClone(object) clones the object with all nested properties.
// Here’s how we can use it in our example:
let user6 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone3 = structuredClone(user6);
console.log(user6.sizes === clone3.sizes);   // false, different objects
// user and clone are totally unrelated now
user6.sizes.width = 60;    // change a property from one place
console.log(clone3.sizes.width);



















