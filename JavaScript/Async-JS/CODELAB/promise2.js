const promise = new Promise((resolve) => {
    resolve('Well Done! Promise One is Resolved');
});

const promiseTwo = new Promise((resolve) => {
    resolve('Well Done! Promise Two is Resolved');
})

const promiseThree = new Promise((resolve, reject) => {
    reject('Promise Three is Rejected. Unlucky!')
});

promise
    .then((value) => {
    console.log(value);
    return promiseTwo;
    })
    .then((value) => {
        console.log(value);
        return promiseThree;
    })
    .catch((error) => {
        console.log(error);
    })