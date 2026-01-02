class User {
    name: string;
    email: string;
    private _courseCount = 1;

    // @ts-ignore
    constructor(public name: string, public email: string
    ) {
        this.name = name;
        this.email = email;
    }

    get getAppleEmail(): string {
        return `apple.${this.email}`;
    }

    set setAppleEmail(value: string) {

    }

    get courseCount() {
        return this._courseCount;
    }

    set courseCount(value: number) {
        if (this._courseCount < value) {
            throw new RangeError("Course count must be a positive integer");
        }

        this._courseCount = value;
    }


}

const soch = new User("Soch", "soch@sochtech.com");
console.log(soch.name);
console.log(soch.email);