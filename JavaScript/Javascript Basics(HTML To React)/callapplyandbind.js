// They all are used to attach a correct this to the function and invoke it.
// The difference is the way of function invocation

// bind
// it returns a function
// This returned function can later be called with a certain context set for calling the original function
// The returned function needs to be invoked separately

// Example using bind()
// person object has a method called hello()
// ngNinja object does not have it
// You can bind hello() method to ngNinja object and call it later in the code
let person = {
    hello: function (message) {
        console.log(this.name + " says hello "+ message);
    }
}

let ngNinja = {
    name: "ngNinja Academy"
}

let sayHello = person.hello.bind(ngNinja);
sayHello("world");    // output: "ngNinja Academy says hello world"


// call()
// call() attaches this to function and invokes the function immediately
// The owner object is sent as an argument
// With call(), an object can use a method belonging to another object
// In the below example this is set to the ngNinja object
// You can send arguments to the function as a comma-separated list following the owner object
person.hello.call(ngNinja, "world");    // output: "ngNinja Academy says hello world"


// apply()
// apply also attaches this to a function and invokes the function immediately
// apply is similar to call() except it takes an array of arguments instead of the comma-separated list
// In the below example this is set to the ngNinja object
// You can send arguments to the function as a comma-separated list following the owner object
person.hello.apply(ngNinja, ["world"]);    // output: "ngNinja Academy says hello world"











