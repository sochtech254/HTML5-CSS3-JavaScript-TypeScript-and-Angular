// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property
// doesn’t exist.
// The best way to do it would be to check the value using if or the conditional operator ? , before accessing its
// property, like this:
let user = {};    // a user without "address" property
console.log(user.address.street);    // Error!
// That’s the expected result. JavaScript works like this. As user.address is undefined , an attempt to get
// user.address.street fails with an error.
// The obvious solution would be to check the value using if or the conditional operator ? , before accessing its
// property, like this:
let user1 = {};
console.log(user1.address ? user1.address.street : undefined);

// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined .
// Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined .
// In other words, value?.prop :
// ● works as value.prop , if value exists,
// ● otherwise (when value is undefined/null ) it returns undefined .
// Here’s the safe way to access user.address.street using ?. :
let user2 = {};    // user has no address
console.log(user2?.address?.street);    // undefined (no error)

// Reading the address with user?.address works even if user object doesn’t exist:
let user3 = null;
console.log(user3?.address);    // undefined
console.log(user3?.address.street);
// Please note: the ?. syntax makes optional the value before it, but not any further.
// E.g. in user?.address.street.name the ?. allows user to safely be null/undefined (and returns undefined in that case),
// but that’s only for user . Further properties are accessed in a regular way. If we want some of them to be optional,
// then we’ll need to replace more . with ?. .

// Don’t overuse the optional chaining
// We should use ?. only where it’s ok that something doesn’t exist.
// For example, if according to our code logic user object must exist, but address is optional, then we
// should write user.address?.street , but not user?.address?.street .
// Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we
// overuse ?. , coding errors can be silenced where not appropriate, and become more diﬃcult to debug.

// Other variants: ?.(), ?.[]
// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and
// square brackets.
// For example, ?.() is used to call a function that may not exist. In the code below, some of our users have admin
// method, and some don’t:
let userAdmin = {
    admin() {
        console.log('I am admin');
    }
};
let userGuest = {};
userAdmin.admin?.();    // I am admin
userGuest.admin?.();    // nothing happens (no such method)
// Here, in both lines we first use the dot ( userAdmin.admin ) to get admin property, because we assume that the user
// object exists, so it’s safe read from it.
// Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin ).
// Otherwise (for userGuest ) the evaluation stops without errors.
// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot . . Similar to
// previous cases, it allows to safely read a property from an object that may not exist.
let key = "firstName";
let user4 = {
    firstName: "John"
};
let user5 = null;
console.log(user4?.[key]);    // John
console.log(user5?.[key]);    // undefined

// Also we can use ?. with delete :
delete user5?.name;    // delete user.name if user exists


