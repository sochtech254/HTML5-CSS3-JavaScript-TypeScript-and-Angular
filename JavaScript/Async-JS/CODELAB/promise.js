const promise = new Promise((resolve, reject) => {
    // const allWentWell = true;
    //
    // if (allWentWell) {
    //     resolve('All things went well');
    // } else {
    //     reject('Oops! Something went wrong!')
    // }

    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve('Well Done! You Guessed Right!');
        } else {
            reject('Oops! You Guessed Wrong! Unlucky.')
        }
    }, 2000);
});

// console.log(promise);

promise.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})