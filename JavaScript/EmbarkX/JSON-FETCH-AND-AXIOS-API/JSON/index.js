/*
*  JSON:
*  JSON is a lightweight data format commonly used for data exchange between the client and server.
* */

let jsonString = '{"name": "Alice", "age": 42, "city": "New York"}'
console.log(jsonString);

let userObject = JSON.parse(jsonString);
console.log(userObject);
console.log(userObject.name);

let person = {
    name: 'Alice',
    age: 42,
    city: 'New York'
};

console.log(JSON.stringify(person));
