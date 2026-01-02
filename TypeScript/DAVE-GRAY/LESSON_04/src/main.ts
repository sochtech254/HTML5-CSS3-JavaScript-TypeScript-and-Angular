// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber;

// Literal types
let myName: 'Dave'

// Union type with literal assignment
let userName : 'Dave' | 'Soch' | 'Amy';

// functions
const add = (a: number, b: number) => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello World!');
logMsg(add(2, 3));

let subtract = function (a: number, b: number): number {
    return a - b;
}

// type mathFunction = (a: number, b: number) => number;
// An interface works the same way as above
interface mathFunction {
    (a: number, b: number): number
}

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(2, 3));

// optional parameters
const addAll = (a: number, b: number, c?: number) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (...nums: number[]) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
}

logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// infinite loop returns never try commenting the if statement
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('This should never happen!');
}