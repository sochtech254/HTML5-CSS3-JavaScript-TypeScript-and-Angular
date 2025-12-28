function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greetOptional("Alice");    // output: "Hello, Alice!"
greetOptional("Bob", 30);    // output: "Hello, Bob! You are 30 years old."