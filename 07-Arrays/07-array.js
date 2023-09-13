// HOMEWORK 07 - Array

// Excercise 01

// Create a “groceries list” array. 
// Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. 
// Write a few functions for working with this array. 

const groceriesList = [
    {
        product: "cheese",
        quantity: 1,
        price: 149,
        purchased: true
    },
    {
        product: "eggs",
        quantity: 1,
        price: 59,
        purchased: false
    },
    {
        product: "battery",
        quantity: 1,
        price: 99,
        purchased: true
    },
    {
        product: "entrecoté",
        quantity: 1,
        price: 249,
        purchased: false
    }
];


function reArrangeList (param) {
    let notBought = [];
    let bought = [];
    for (let i = 0; i < param.length; i++) {
        if (param[i].purchased === false) {
            notBought.push(param[i]);
        } else if (param[i].purchased === true) {
            bought.push(param[i]);
        }
    }
    let newList = notBought.concat(bought);
    console.log(newList);
}

reArrangeList(groceriesList);


// Excercise 02.

// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
// Purchasing a product. The function accepts the name of a product and marks it as bought.

const battery = {
    product: "battery",
    quantity: 2,
    price: 99,
    purchased: true
}

const cheese = {
    product: "cheese",
    quantity: 1,
    price: 149,
    purchased: true
}

const eggs = {
    product: "eggs",
    quantity: 3,
    price: 59,
    purchased: false,
}

const entrecoté = {
    product: "entrecoté",
    quantity: 1,
    price: 249,
    purchased: false
}
// Candle does not exist in list -> adds candle to list
const candle = {
    product: "candle",
    quantity: 2,
    price: 99,
    purchased: false
}

function addToList (parameter) {
    for (let i = 0; i < groceriesList.length; i++) {
        if (groceriesList[i].product === parameter.product) {
            alert(`Another ${parameter.quantity} ${parameter.product} has been added to your basket`);
            groceriesList[i].price += (groceriesList[i].price * parameter.quantity);
            groceriesList[i].quantity += parameter.quantity;
            return;
        };
    };
    groceriesList.push(parameter);
    reArrangeList(groceriesList);
};

addToList(eggs);
addToList(battery);
addToList(candle);

function bought (productName) {
    for (let i = 0; i < groceriesList.length; i++){
        if (groceriesList[i].product === productName.product) {
            groceriesList[i].purchased = true;
            return;
        };
    }
    console.log(groceriesList)
}

bought(entrecoté);

// Excercise 03.
// Create an array that describes a shop receipt. 
// Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions.

const printReceipt = () => {
  groceriesList.forEach(element => {
    console.log(`${element.quantity}x ${element.product} ${element.price / element.quantity} sek -> ${element.price}`);
 });

 const sum = () => {
    const register = [];
    groceriesList.forEach(element => {
        register.push(element.price);
     });
     const intitialValue = 0;
     const summerize = register.reduce((accumulator, currentValue) => accumulator + currentValue, intitialValue)
     console.log(`Total: ${summerize} sek`);
 }

 const mostExpensive = () => {
    const register = [];
    groceriesList.forEach(element => {
        register.unshift(element.price); 
    });
    register.sort((a,b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } return 0;
    }).reverse();

    console.log(`Your most expensive item was ${register.splice(0,1)} sek`);
 }

 const averageCost = () => {
    const total = [];
    const divide = [];
    groceriesList.forEach(element => {
        total.push(element.price);
        divide.push(element.quantity);
    });
    const intitialValue = 0;
    const numerator = total.reduce((accumulator, currentValue) => accumulator + currentValue, intitialValue)
    const denominator = divide.reduce((accumulator, currentValue) => accumulator + currentValue, intitialValue)
    console.log(`Avererage cost per item is ${Math.round(numerator / denominator)} sek`)
 }

 sum()
 mostExpensive();
 averageCost()
 return;
}

printReceipt();