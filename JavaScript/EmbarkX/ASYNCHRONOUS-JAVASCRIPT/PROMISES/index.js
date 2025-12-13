/*
*  Promises:
*  Provide a cleaner and more structured way to handle asynchronous operations.
*  then(): When promise is fulfilled.
*  catch(): When promise is rejected.
* */

// Using Callbacks
function getData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30};
        callback(data);
    }, 1000);
}

getData((data) => {
    console.log(data);
});

// With promises
function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30};
            resolve(data);
        }, 1000);
    });
}

getDataWithPromise()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})

// With Promises: Success and Failure
function getDataWithPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() < 0.5;
            if (success) {
                const data = { name: "John", age: 30};
                resolve(data);
            } else {
                reject("Error Occurred");
            }
        }, 1000);
    });
}

getDataWithPromise1()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
}).finally(() => {
    console.log("Executes whether there was error(success) or not.");
});

// Multiple promises
console.log("MULTIPLE...");
let promise1 = getDataWithPromise1();
let promise2 = getDataWithPromise1();
let promise3 = getDataWithPromise1();

Promise.all([promise1, promise2, promise3])
.then((data) => {
    console.log("All done", data);
})
.catch((error) => {
    console.error("At least 1 promise failed", error);
});

Promise.race([promise1, promise2, promise3])
.then((data) => {
    console.log("Race This done", data);
})
.catch((error) => {
    console.error("At least 1 promise failed", error);
});