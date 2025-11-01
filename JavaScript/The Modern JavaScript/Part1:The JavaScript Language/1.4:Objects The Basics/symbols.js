// A “symbol” represents a unique identifier.
// A value of this type can be created using Symbol() :
let id = Symbol();
// Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:
    // id is a symbol with the description "id"
id = Symbol("id");
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are
// different values. The description is just a label that doesn’t affect anything.
// For instance, here are two symbols with the same description – they are not equal:
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2);   // false

// If we want to show a symbol, we need to explicitly call .toString() on it, like here:
let id3 = Symbol("id");
console.log(id3.toString());    // Symbol(id), now it works
// Or get symbol.description property to show the description only:
console.log(id3.description);
