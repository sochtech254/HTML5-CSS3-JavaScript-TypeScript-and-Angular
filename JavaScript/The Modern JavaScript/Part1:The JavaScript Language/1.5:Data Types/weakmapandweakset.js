// WeakMap and WeakSet
// JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.
// For instance:
let john = { name: "John" };
// the object can be obsessed, john is the reference to it
// overwrite the reference
john = null;
// the object will be removed from memory
// Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.
// For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
// Like this:
let james = {name: "james"};
let array = [james];
james = null;    // overwrite the reference
// the object previously referenced by james is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
// Similar to that, if we use an object as the key in a regular Map , then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.
// For instance:
let jane = {name: "jane"};
let map = new Map();
map.set(jane, "...");
jane = null;    // overwrite the reference
// jane is stored inside the map,
// we can get it by using map.keys()
// WeakMap is fundamentally diﬀerent in this aspect. It doesn’t prevent garbage-collection of key objects. Let’s see what it means on examples.

// WeakMap
// The ﬁrst diﬀerence between Map and WeakMap is that keys must be objects, not primitive values:
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");    // works fine (object key)
// can't use a string as the key
// weakMap.set("test", "whoops");    // Error, because "test" is not an object
// Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
let johndoe = {name: "John"};
let weakmap = new WeakMap();
weakmap.set(johndoe, "...");
johndoe = null;    // overwrite the reference
// john is removed from memory!
// Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).
// WeakMap does not support iteration and methods keys() , values() , entries() , so there’s no way to get all keys or values from it.
// WeakMap has only the following methods:












