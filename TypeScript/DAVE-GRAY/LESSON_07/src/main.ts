// Index Signatures
interface TransactionObj {
    [key: string]: number;
}

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}


console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        // @ts-ignore
        total += transactions[transaction];
    }

    return total;
}

console.log(todaysNet(todaysTransactions));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface student {
    // [key: string]: string | number | number[] | undefined;
    name: string,
        GPA: number,
        classes?: number[]
}

const Student: student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in Student) {
    console.log(`${key}: ${Student[key as keyof student]}`);
}

Object.keys(Student).map(key => {
    console.log(Student[key as keyof student]);
})

const logStudentKey = (Student: student, key: keyof student): void => {
    console.log(`student ${key}: ${Student[key]}`);
}

logStudentKey(Student, 'GPA');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// interface Incomes {
//     [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}

export {}