// interface definitions for book and game
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// Generic Class Collection
class Collection<T> {
    public data: T[] = [];

    // Method to add an item `T` to the collection
    add(item: T): void {
        this.data.push(item);
    }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({itemType: "Book", title: "Atomic Habits", isbn: 150510});
itemOne.add({itemType: "Book", title: "Follow Your Heart", isbn: 650650});
console.log(itemOne);
console.log(itemOne.data);

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
console.log(itemTwo.data)