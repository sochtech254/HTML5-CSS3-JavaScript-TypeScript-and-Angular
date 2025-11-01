let myObject = {foo:"Dan", bar:2};

for (let x in myObject) {
    // displays the object keys
    console.log(x);

    // displays the values of the keys
    console.log(myObject[x]);    // Dan, 2
}