// Generic Class Collection
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item `T` to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// Creating an instance of `Collection` with type parameter `Book`
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
console.log(itemOne.data);
// Creating an instance of `Collection` with type parameter `Game`
var itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
console.log(itemTwo.data);
