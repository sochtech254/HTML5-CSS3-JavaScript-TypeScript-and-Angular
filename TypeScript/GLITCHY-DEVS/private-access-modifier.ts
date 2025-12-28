class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret);    // Accessing the private property from within the class
    }
}

const instancePrivate = new MyClassPrivate("My secret");
// console.log(instancePrivate.secret);    // This would result in an error because secret is private
instancePrivate.revealSecret();    // This is a valid way to access the private property