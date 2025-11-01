let year = prompt('In which year was ECMAScript-2015 specification published?');
if (year < 2015)
{
    console.log("Too early");
} else if(year > 2015)
{
    console.log("Too late");
} else
{
    console.log("Exactly!");
}

let accessAllowed;
let age = prompt('How old are you?', '');
accessAllowed = age > 18;
console.log(accessAllowed);

let car = prompt('Which car do you like?');
let message = (car == 'Mercedes') ? console.log("That's correct") : console.log("Try again");

let javaScript = prompt("What is the official name of JavaScript Language?");
javaScript = (javaScript == "ECMAScript") ? alert('Right!') : alert("You don't know? ECMAScript!");