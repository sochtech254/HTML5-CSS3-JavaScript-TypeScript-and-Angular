/*
*  Fetch API:
*  The fetch API provides an easy way to make network requests in Javascript.
*  Fetch returns a promise.
* */

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json));*/

let a =fetch('https://jsonplaceholder.typicode.com/todos/1');
a.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});

// Getting data, async/await and error handling:
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error: ", error);
    }
}

// Posting data
async function postData() {
    const newPost = {
        title: 'New Post',
        body: 'Post Body',
        userId: 1
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
           headers: {
                'Content-Type': 'application/json'
           },
              body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error('Network Response was not ok');
        }
        const data = await response.json();
        console.log("Posted data:", data);
    } catch (error) {
        console.error("Error: ", error);
    }
}
postData();


