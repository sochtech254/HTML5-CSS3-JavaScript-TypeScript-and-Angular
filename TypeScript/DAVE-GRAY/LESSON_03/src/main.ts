// Arrays
let strArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

strArr[0] = 'John';
strArr.push('hello');

guitars[0] = 1984
guitars.unshift('Jim');

let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Soch', 42, true];
// compare with:
let mixed = ['John', 1, false];

// object
let myObj: object = {};
myObj = [];
console.log(typeof myObj);
myObj = bands

const exampleObj = {
    prop1: 'Soch',
    prop2: true,
}

type Guitarist = {
    name: string,
    active?: boolean,    // Optional property
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OUB12']
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello, ${guitarist.name}!`
}

console.log(greetGuitarist(jp));

// Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime."
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);