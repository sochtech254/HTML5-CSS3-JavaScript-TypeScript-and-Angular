/*
*  Callback functions:
*  This is a function that is passed as an argument to another function and is executed after a particular event or operation completes.
* */

console.log("Immediate");

// Use of anonymous function as a callback function
setTimeout(function(){
    console.log("Delay");
}, 1000);

function fetchData() {
    setTimeout(() => {
        console.log("Fetching data from server.");
    }, 2000);
}

function processData() {
    fetchData();
}

processData();


// Above example with callback
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 25};
        callback(data);
    }, 3000);
}

function processDataWithCallback(data) {
    console.log('With callback:', data);
}

fetchDataWithCallback(processDataWithCallback);


// Anonymous callback functions
function fetchDataWithAnonymousFUnction(callback) {
    setTimeout(() => {
        const data = { name: "Bob", age: 29};
        callback(data);
    }, 4000);
}

fetchDataWithAnonymousFUnction(function (data) {
    console.log('With anon:', data);
});

// Callbacks for success / errors
function fetchDataWithSuccessError(successCallback, errorCallback) {
    setTimeout(() => {
        let errorOccurred = Math.random() < 0.5;

        if (errorOccurred) {
            errorCallback("Error Occurred");
        } else {
            const data = { name: "Doe", age: 28};
            successCallback(data);
        }
    }, 5000)
}

function onSuccess(data) {
    console.log("Success " ,data);
}

function onError(data) {
    console.log("Error " ,data);
}

fetchDataWithSuccessError(onSuccess, onError);

// Chained Callbacks aka Callbacks Hell
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 DONE");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 DONE");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 DONE");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

// Use callbacks with Array Methods
let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = numbers.map(number => {
    return number*2;
});

console.log(doubledNumbers);