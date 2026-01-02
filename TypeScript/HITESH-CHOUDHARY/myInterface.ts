interface User {
    readonly _id: number;
    name: string;
    email: string;
    userId: number;
    startTrial: () => string;
    endTrial(): string;
    getCoupon(couponname: string): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "intern";
}

const soch: Admin = {
    _id: 1,
    name: "soch",
    email: "soch@sochtech.dev",
    userId: 8888,
    getCoupon(name: string): number {
        name = "soch";
        return 10;
    },
    startTrial: () => {
        return " trial started"
    },

    endTrial(): string {
        return " trial end"
    },

    role: "admin",
    githubToken: "githubToken",
}