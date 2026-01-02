// return type
function addTwo(num: number): number {
    return num + 2;
}

let number = addTwo(5);
console.log(number);

function getUpper(val: string) {
    return val.toUpperCase();
}

let str1 = getUpper("sochtech");
console.log(str1);

// arrow functions and default parameters
let loginUser = (name: string, email: string, isPaid:boolean = false) => {}
let user = loginUser("Soch", "sochtech@gmail.com");
console.log(user);

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true
    }

        return "200 OK"
}
 let val = getValue(3);
console.log(val);

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
});

// The best way to handle errors
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

