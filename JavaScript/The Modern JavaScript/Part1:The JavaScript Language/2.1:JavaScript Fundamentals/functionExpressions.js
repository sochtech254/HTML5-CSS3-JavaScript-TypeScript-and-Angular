let sayHi = function () {
    console.log("Hello");
}
let func = sayHi;
func();
sayHi();

// Callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk(){
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled te execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
// The arguments showOk and showCancel of ask are called callback functions or just callbacks.
// showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

function ask1(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask1(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);
// Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such
// functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we
// want here.

// Function expression vs function declaration
// 1. -> Function Declaration: a function, declared as a separate statement, in the main code flow
//    -> Function Expression: a function, created inside an expression or inside another syntax construct.
// The more subtle difference is when a function is created by the JavaScript engine.
// 2. -> A Function Expression is created when the execution reaches it and is usable only from that moment.
//       Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the
//       function is created and can be used (assigned, called, etc. ) from now on.
//       Function Declarations are different.
//    -> A Function Declaration can be called earlier than it is defined.
//       For example, a global Function Declaration is visible in the whole script, no matter where it is.
//       That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global
//       Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
//       And after all Function Declarations are processed, the code is executed. So it has access to these functions.

sayHi1("John");    // Hello John

function sayHi1(name){
    console.log(`Hello, ${name}!`);
}
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere
// in it.

// If it were a Function Expression, then it wouldn’t work:
// sayHi("John"); // error!
// let sayHi = function(name) {  // (*) no magic any more
//     alert( `Hello, ${name}` );
// };

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But
// not outside of it.
let age = 16;    // take 16 as an example

if (age < 18) {
    welcome();                     // \   (runs)
                                   //  |
    function welcome() {     //  |
        alert("Hello!");           //  |  Function Declaration is available
    }                              //  |  everywhere in the block where it's declared
                                   //  |
    welcome();                     // /   (runs)

} else {

    function welcome() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?
// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared
// outside of if and has the proper visibility.
// This code works as intended:
let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
    welcome = function() {
        alert("Hello!");
    };

} else {
    welcome = function() {
        alert("Greetings!");
    };
}
welcome();    // ok now

// Or we could simplify it even further using a question mark operator ?:
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };
welcome();    // ok now