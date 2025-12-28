class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("John Doe");
const childEx = new Child("Jane Doe");

// console.log(parent.familyName);    // This would result in an error because familyName is protected
childEx.introduceFamily();    // This is a valid way to access the protected property