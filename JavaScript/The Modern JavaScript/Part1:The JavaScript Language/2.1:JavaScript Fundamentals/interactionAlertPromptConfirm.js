alert("Hello, World!");

// prompt
// The function prompt accepts two arguments:
// result = prompt(title, [default]);
let age = prompt('How old are you?', 100);
console.log(`You are ${age} years old!`);

// confirm
// The syntax:
// result = confirm(question);
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.
// For example:
let isBoss = confirm("Are you the boss?");
console.log(isBoss);