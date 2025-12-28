enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

const today: Days = Days.Thursday;

console.log(`Today is ${Days[today]}`);