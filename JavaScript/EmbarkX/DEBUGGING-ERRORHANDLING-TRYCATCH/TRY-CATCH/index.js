// try...catch:
// `try..catch` statement in JavaScript allows you to handle errors gracefully.

// a();

try {
    console.log("Hi");    // should be before the a() otherwise this won't print
    a();
} catch (error) {
    console.error(error.message);
} finally {
    console.log("I am in Finally block");
}
