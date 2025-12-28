const promise = new Promise((resolve, reject) => {

    const allWentWell = true;
    if (allWentWell) {
             resolve('All things went well');
         } else {
             reject('Oops! Something went wrong!')
         }
})

console.log(promise);