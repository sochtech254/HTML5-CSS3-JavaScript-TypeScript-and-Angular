/*
let One = (callback) => {
    callback();
    console.log(" One ");
}

let Two = () => {
    console.log(" Two");
}

One(Two);
*/

let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["Chocolate", "Peanuts"],
};

let order = (Fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
        call_production();
    }, 2000)

};

let production = () => {
    setTimeout(() => {
        console.log("Production has started.");

        setTimeout(() => {
            console.log("The fruit has been chopped.");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added to the fruit.`);

                setTimeout(() => {
                    console.log("The machine was started.");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}.`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} was used as a flavour topping.`);

                            setTimeout(() => {
                                console.log("Serve ice cream.");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};

order(0, production);

