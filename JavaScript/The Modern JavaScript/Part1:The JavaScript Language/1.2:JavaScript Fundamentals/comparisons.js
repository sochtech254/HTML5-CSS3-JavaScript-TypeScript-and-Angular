console.log(2 > 1);    // true (correct)
console.log(2 === 1);    // false (wrong)
console.log(2 !== 1);    // true (correct)

let result = 5 > 4;    // assign the result of the comparison
console.log(result);

// String comparison
console.log('Z' > 'A');    // true
console.log('Glow' > 'Glee');    // true
console.log('Bee' > 'Be');    // true

console.log('2' > 1);    // true, string '2' becomes a number 2
console.log('01' == 1);    // true, string '01' becomes a number 1

console.log(true == 1);    // true
console.log(false == 0);    // true

console.log(0 == false);    // true
console.log('' == false);    // true

console.log(0 === false);    // false, because the types are different

console.log(null === undefined);    // false
console.log(null == undefined);    // true

console.log(null > 0);    // false
console.log(null == 0);    // false
console.log(null >= 0);    // true

console.log(undefined > 0);    // false
console.log(undefined < 0);    // false
console.log(undefined == 0);    // false