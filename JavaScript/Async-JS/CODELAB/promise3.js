const promiseOne = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise One Resolved!');
    }, 2000);
});

const promiseTwo = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise Two Resolved!');
    }, 1500);
});

Promise.all([promiseOne, promiseTwo])
.then(data => {
    console.log(data[0], data[1]);
})
.catch(err => {
    console.log(err)
});