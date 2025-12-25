// The DOMContentLoaded eventListener works irregardless of where the script scr="index.js" has been placed in the index.html
document.addEventListener('DOMContentLoaded', () => {
    let titles = document.getElementsByClassName('title');

// Testing if titles is an array
    console.log(Array.isArray(titles));

// Converting titles to an array and using the array for-each method on it
    Array.from(titles).forEach((title) => {
        console.log(title);
    })

// const wmf = document.querySelector('#book-list ul li:nth-child(2) .name');
// console.log(wmf);

    let books = document.querySelector('#book-list li .name');
    console.log(books);

    books = document.querySelectorAll('#book-list li .name');
    console.log(books);

    Array.from(books).forEach((book) => {
        console.log(book);
    });

    Array.from(books).forEach((book) => {
        console.log(book.textContent);
    });

    Array.from(books).forEach((book) => {
        book.textContent += ' (book title)';
    });

    const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';
    console.log('book-list next sibling is:', bookList.nextSibling);
    console.log('book-list next element sibling is:', bookList.nextElementSibling);

    console.log('book-list previous sibling is:', bookList.previousSibling);
    console.log('book-list previous element sibling is:', bookList.previousElementSibling);

    bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyone else!';

    const banner = document.querySelector('#page-banner');
    console.log('#page-banner node type is: ', banner.nodeType);
    console.log('#page-banner node namee is: ', banner.nodeName);
    console.log('#page-banner has child nodes: ', banner.hasChildNodes());
    console.log('#page-banner parent node is: ', banner.parentNode);
    const clonedBanner = banner.cloneNode(true);
    console.log(clonedBanner);

    let btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

// delete book
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

// add books
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        // create elements
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        // add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })

// hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', (e) => {
        if (hideBox.checked) {
            list.style.display = 'none';
        } else {
            list.style.display = 'initial';
        }
    });

// filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');

        Array.from(books).forEach((book) => {
            const title = book.firstElementChild.textContent;

            if (title.toLowerCase().indexOf(term) !== -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        })
    });

// tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);

            panels.forEach((panel) => {
                if (panel === targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            })
        }
    })
})