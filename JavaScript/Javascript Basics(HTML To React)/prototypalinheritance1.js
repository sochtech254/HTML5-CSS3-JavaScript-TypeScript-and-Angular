function Building(address) {
    this.address = address;
}

Building.prototype.getAddress = function () {
    return this.address;
}

function Home(owner, address) {
    Building.call(this, address);
    this.owner = owner;
}

Home.prototype.getOwner = function () {
    return this.owner;
}

let myHome = new Home("Joe", "1 Baker Street");

console.log(myHome);    // Home {address: "1 Baker Street", owner: "Joe", constructor: Object}

console.log(myHome.owner);    // Joe
console.log(myHome.address);    // 1 Baker Street

Home.prototype = Object.create(Building.prototype);
console.log(myHome.getOwner());    // Joe
console.log(myHome.getAddress);