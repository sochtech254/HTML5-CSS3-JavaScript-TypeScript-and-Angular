"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // @ts-ignore
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in Student) {
    console.log(`${key}: ${Student[key]}`);
}
Object.keys(Student).map(key => {
    console.log(Student[key]);
});
const logStudentKey = (Student, key) => {
    console.log(`student ${key}: ${Student[key]}`);
};
logStudentKey(Student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
//# sourceMappingURL=main.js.map