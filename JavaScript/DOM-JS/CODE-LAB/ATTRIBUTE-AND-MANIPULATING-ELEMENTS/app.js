// GetElementById()
const title = document.getElementById('main-heading');
console.log(title);

// GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

// getElementsByTagName()
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// querySelector()
const container = document.querySelector('div');
console.log(container);

// querySelectorAll()
const cont = document.querySelectorAll('li');
console.log(cont);

// DOM Manipulation:
// Styling Elements

const title1 = document.querySelector('#main-heading');
title1.style.color = 'red';
console.log(title1);

const list_items = document.querySelectorAll('.list-items');
for (let item of list_items) {
    item.style.fontSize = '2rem';
}

// Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText = 'X-men';
li.setAttribute('class', 'list-items');
li.style.fontSize = '2rem';
li.removeAttribute('class');
li.classList.add('list-items');
li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));
// Remove Elements
li.remove();

const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

const title2 = document.querySelector('#main-heading');
console.log(title2.getAttribute('id'));