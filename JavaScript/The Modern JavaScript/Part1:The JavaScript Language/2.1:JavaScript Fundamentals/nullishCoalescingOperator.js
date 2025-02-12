// The nullish coalescing operator is written as two question marks ??.
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined”
// value of the two.
// We can rewrite result = a ?? b using the operators that we already know, like this:
// result = (a !== null && a !== undefined) ? a : b;
// The common use case for ?? is to provide a default value.
// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
let user;
console.log(user ?? "Anonymous");    // Anonymous (user is undefined)

let userName = "John";
console.log(userName ?? "Anonymous");    // John (user is not null/undefined)

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
// Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the
// user decided not to fill in the corresponding values.
// We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.
// Let’s use the ?? operator for that:

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

















