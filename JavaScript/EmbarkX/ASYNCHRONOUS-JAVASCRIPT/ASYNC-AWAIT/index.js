/*
*  ASYNC/AWAIT:
*  async/await - simplifies asynchronous code by making it look like synchronous code.
*  It improves readability and makes error handling straightforward with `try...catch`.
*  You can use `async/await` with multiple asynchronous operations, HTTP requests
* */

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() < 0.5;
            if (success) {
                const data = { name: "John", age: 30};
                resolve(data);
            } else {
                reject("Error getting data.");
            }
        }, 1000);
    });
}

async function getDataAsync() {
    try {
        let data = await getData();
        console.log(data);
    } catch (error) {
        console.log('ERROR',error);
    }
}

getDataAsync();


