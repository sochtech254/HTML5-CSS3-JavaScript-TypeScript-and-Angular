// DOM Manipulation

// Traverse the DOM

// Parent Node Traversal
let ul = document.querySelector('ul');
console.log(ul);
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);


// Child Node Traversal
let uL = document.querySelector('ul');
console.log(uL.childNodes);
console.log(uL.firstChild);
console.log(uL.lastChild);
ul.childNodes[1].style.color = 'blue';
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


// Sibling Node Traversal
let unorderedList = document.querySelector('ul');
const div = document.querySelector('div');
console.log(div.childNodes);
console.log(unorderedList.previousElementSibling);
console.log(unorderedList.nextElementSibling);