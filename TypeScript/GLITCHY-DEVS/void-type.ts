function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined)
    greet("Alice");
}

noReturnValue();