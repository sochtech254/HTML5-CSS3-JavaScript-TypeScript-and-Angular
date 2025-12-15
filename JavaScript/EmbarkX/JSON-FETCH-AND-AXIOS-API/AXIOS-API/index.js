/*
*  Axios:
*  This is a powerful HTTP client for making network requests in JavaScript.
*  `axios.get` is used to make a GET request.
*  `axios.post` is used to make a POST request.
* */

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log("GET: ", response.data);    // try  console.log("GET: ", response);
})
.catch(error => console.log("ERROR", error));

let postData = {
    title: 'Title Post',
    description: 'This is Description',
    body: 'Body Post'
};

axios.post('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log("POST: ", response.data);
})
.catch(error => console.log("ERROR", error));