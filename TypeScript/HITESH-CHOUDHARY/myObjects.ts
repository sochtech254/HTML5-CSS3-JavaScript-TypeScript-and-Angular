type User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true,
}

// function createUser ({name: string, isPaid: boolean}) {}
// createUser({name: "hitesh", isPaid: false});
function createUser(user: User): User {
    return {name: "hitesh", email: "hitesh@lco.dev", isActive: true};
}

// returning an object
function createCourse(): {name: string, price: number} {
    return {name: "React", price: 99};
}

