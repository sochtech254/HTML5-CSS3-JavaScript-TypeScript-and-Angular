let stocks = {
    Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = false;

function time(ms) {
    return new Promise ((res, rej) => {
        if (is_shop_open) {
            setTimeout(res, ms);
        } else {
            rej(console.log("Shop is closed."));
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected.`);

        await time(0);
        console.log("Start production");

        await time(2000);
        console.log("The fruit has been chopped.");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added to the fruit.`);

        await time(1000);
        console.log("The machine was started.");

        await time(2000);
        console.log(`Ice cream was placed on ${stocks.holder[0]}.`);

        await time(3000);
        console.log(`${stocks.toppings[1]} was used as a flavour topping.`);

        await time(2000);
        console.log("Serve ice cream.");
    } catch (error) {
        console.log("Customer left.");
    } finally {
        console.log("See you again.")
    }
}

kitchen();