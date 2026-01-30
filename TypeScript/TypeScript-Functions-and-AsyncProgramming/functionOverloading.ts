// function overloading
// function oneYearAgo(date: string):string;
// function oneYearAgo(date: Date):Date;
// function oneYearAgo(date: Date | string) {
//     const oneYearAgo = new Date(date);
//     oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

//     if (typeof date === 'string') {
//         return oneYearAgo.toLocaleDateString();
//     } else {
//         return oneYearAgo;
//     }
// }

// const lastYearDate = oneYearAgo(new Date());
// const lastYearString = oneYearAgo('01/16/2025');

// function paySalary(montlySalary:number):void;
// function paySalary(montlySalary:number, hoursOvertime:number, payPerHour:number):void;
// not recommended especially when the function has many parameters
function paySalary(montlySalary:number, hoursOvertime?:number, payPerHour?:number) {
    let overtimePay = 0;

    if (hoursOvertime && payPerHour) {
        overtimePay = hoursOvertime * payPerHour;
    }
    const totalPayment = montlySalary + overtimePay;
    console.log(`For this month, you received ${totalPayment} $`);
}

paySalary(5000);
paySalary(5000, 10, 10);
// paySalary(5000, 10); produces an error

// better solution for the above problem is to use an object for hoursOvertime and payPerHour rather than function overloading
function paySalaryWithOptionsObject(montlySalary: number, overtime?:{ hoursOvertime:number, payPerHour:number }) {
    let overtimePay = 0;
    if (overtime?.hoursOvertime && overtime.payPerHour) {
        overtimePay = overtime.hoursOvertime * overtime.payPerHour;
    }

    const totalPayment = montlySalary + overtimePay;
    console.log(`For this month, you received ${totalPayment} $`);
} 

paySalaryWithOptionsObject(12345);
paySalaryWithOptionsObject(12345, {hoursOvertime:10, payPerHour:10});