// return type
function addTwo(num) {
    return num + 2;
}
var number = addTwo(5);
console.log(number);
function getUpper(val) {
    return val.toUpperCase();
}
var str1 = getUpper("sochtech");
console.log(str1);
// arrow functions and default parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var user = loginUser("Soch", "sochtech@gmail.com");
console.log(user);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var val = getValue(3);
console.log(val);
