function task1(callback) {
    setTimeout(() => {
        console.log("1. Preheat the oven to 350F (180 deg celsius).");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("2. Chop half the chocolate into chunks & melt in microwave.");
        callback();
    }, 2000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("3. Mix butter & sugar");
        callback();
    }, 1500);
}

function task4(callback) {
    setTimeout(() => {
        console.log("4. Beat in the eggs and vanilla for 1.2 minutes.");
        callback();
    }, 3000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("5. Whisk in the melted chocolate.");
        callback();
    }, 4000);
}

function task6(callback) {
    setTimeout(() => {
        console.log("6. Fold in the other half of chocolate chunks, then transfer the butter to baking dish.");
        callback();
    }, 3500);
}

function task7(callback) {
    setTimeout(() => {
        console.log("7. Bake for 20-25 minutes, then let it cool completely.");
        callback();
    }, 1000);
}

function task8(callback) {
    setTimeout(() => {
        console.log("8. Slice, serve & enjoy!");
        callback();
    }, 500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            task8(() => {

                            })
                        })
                    })
                })
            })
        })
    })
})