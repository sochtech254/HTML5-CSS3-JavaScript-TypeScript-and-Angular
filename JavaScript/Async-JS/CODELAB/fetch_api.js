// GET method
fetch('https://dummyjson.com/products/1', {})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

// POST method
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        description: 'Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

// PUT method
fetch('https://dummyjson.com/products/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Iphone 19',
        description: 'Changed to Iphone 19',
        price: '1000',
        rating: '9/10'
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

// DELETE method
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE'
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));








