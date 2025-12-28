type Employee = {
    id: number;
    name: string;
    age: number;
    email?: string;
};

// objects below
const alice: Employee = {
    id: 100,
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const bob: Employee = {
    id:101,
    name: "Bob",
    age: 35,
};

console.log(alice);
console.log(bob);