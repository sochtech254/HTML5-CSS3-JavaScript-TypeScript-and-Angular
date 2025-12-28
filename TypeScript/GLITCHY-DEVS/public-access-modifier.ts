class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John Doe");
console.log(instancePublic.name);    // Accessing the public property