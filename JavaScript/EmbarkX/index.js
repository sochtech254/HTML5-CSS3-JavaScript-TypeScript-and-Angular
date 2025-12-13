console.log("Hello World!");

// This is a single-line comment

/*
* This
* is
* a
* multi-line
* comment
*/

/**
 *  This is a documentation comment
 *
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers
 */

function add(a, b) {
    return a + b;
}


document.getElementById('name').innerText = 'Hello World!';

document.getElementById('changeTextButton').onclick = function () {
    document.getElementById('name').innerText = 'Hello World! Again';
    document.getElementById('name').style.backgroundColor = 'red';
    document.getElementById('name').style.color = 'white';
};