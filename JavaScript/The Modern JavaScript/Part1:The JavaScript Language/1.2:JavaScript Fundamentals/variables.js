let userName = 'John';
age = 25;
message = 'Hello!';
console.log(userName + " is " + age + " years old. He said " + message);

let hello = 'Hello world!';
let info;
info = hello;
alert(info);


// $ and _ allowed as variable names or may be used in variable names
let $ = 1;
let _ = 2;
alert($ + _);

// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an
// error.
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '22.07.1995';
console.log("I was born on " + myBirthday);

// Uppercase constants
// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before
// execution.
// Such constants are named using capital letters and underscores.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
alert(COLOR_ORANGE);     // #FF7F00
alert(COLOR_RED);
alert(COLOR_BLUE);
alert(COLOR_GREEN);

// Name things right
// A variable name should have a clean, obvious meaning, describing the data that it stores.
// Some good-to-follow rules are:
// 1. Use human-readable names like userName or shoppingCart.
// 2.Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.
// 3. Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.
//    It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the
//    variable is referencing.
// 4. Agree on terms within your team and in your mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
