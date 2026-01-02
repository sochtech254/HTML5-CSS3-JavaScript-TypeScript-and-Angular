var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var soch = new User("Soch", "soch@sochtech.com");
console.log(soch.name);
console.log(soch.email);
