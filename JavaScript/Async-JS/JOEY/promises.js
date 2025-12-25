let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if (is_shop_open) {
           setTimeout( ()=> {
               resolve( work() );
           }, time);
        } else {
            reject(console.log("Our shop is closed."));
        }

    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
    .then(() => {
        return order(0, () => console.log("Production has started."));
    })
    .then(() => {
        return order(2000, () => console.log("The fruit has been chopped."));
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added to the fruit.`));
    })
    .then(() => {
        return order(1000, () => console.log("The machine was started."));
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream was placed on ${stocks.holder[0]}.`));
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[1]} was used as a flavour topping.`));
    })
    .then(() => {
        return order(2000, () => console.log("Serve ice cream."));
    })
    .catch(() => {
        console.log("customer left.")
    })
    .finally(() => {
        console.log("See you again.");
    });