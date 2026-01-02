"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arrays
let strArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
strArr[0] = 'John';
strArr.push('hello');
guitars[0] = 1984;
guitars.unshift('Jim');
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Soch', 42, true];
// compare with:
let mixed = ['John', 1, false];
// object
let myObj = {};
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exampleObj = {
    prop1: 'Soch',
    prop2: true,
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OUB12']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarist) => {
    return `Hello, ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
//# sourceMappingURL=main.js.map