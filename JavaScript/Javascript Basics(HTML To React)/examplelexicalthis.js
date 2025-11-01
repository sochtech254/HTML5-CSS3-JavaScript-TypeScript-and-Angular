let Person = {
    name: "John",
    printName: function(){
        console.log(this.name);    // John

        let getNameArrowFunction = () => {
            return this.name;
        }

        console.log(getNameArrowFunction());
    }
}

Person.printName();


