let personExOne: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
        street: string;
        city: string;
    };
} = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
}

/*
personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
*/

console.log(personExOne);