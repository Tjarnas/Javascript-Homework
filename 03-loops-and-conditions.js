
// Homework 03 - Loops and conditions

// Excercise 01.
// Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

let requestNumb = prompt("Enter a number");
let sum = 0;

for (var i = 1; i <= requestNumb; i++) {
    sum += i;
    console.log(sum);
};

// Excercise 02.
// Request two numbers and find only their largest common divisor.

const requestNumberOne = prompt("Enter first number");
const requestNumberTwo = prompt("Enter second number");
let gcd = 1;

for (let i = 1; i <= requestNumberOne && i <= requestNumberTwo; i++) {
    if (requestNumberOne % i === 0 && requestNumberTwo % i === 0) {
        gcd = i;
    };
};

console.log(gcd);

// Excercise 03.
// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

const requestNum = prompt("Enter Number");

for (let i = requestNum; i > 1; --i) {
    if (requestNum / i && requestNum % i === 0) {
        console.log(i);
    }
}

// Excercise 04.
// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

const requestNumber = prompt("Enter a Number");
let a = 0;

for (var i = 1; i <= requestNumber.length; ++i) {
    a = i;
}

console.log(a);

// Excercise 05.
// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

let negative = 0;
let positive = 0;
let zeroes = 0;
let oddCount = 0;
let evenCount = 0;

const requestNumSeries = prompt("Enter 10 numbers separated by commas");
const numbers = requestNumSeries.split(",");

for (let i = 0; i < numbers.length; i++) {
    const number = parseInt(numbers[i]);

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    } else {
        zeroes++;
    }

    if (number !== 0 && number % 2 === 0) {
        evenCount++
    } else if (number !== 0) {
        oddCount++
    }
};

console.log(negative);
console.log(positive);
console.log(zeroes);
console.log(oddCount);
console.log(evenCount);

// Excercise 06.
// Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food, if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit

const favouriteFruit = prompt("Enter your favourite fruit");

if (favouriteFruit === "Peach" || favouriteFruit === "Apple" || favouriteFruit === "Banana") {
    console.log("This is one of my favourite fruits! yum!");
} else if (favouriteFruit === "Pear" || favouriteFruit === "Grapefruit") {
    console.log("I hate this fruit, yuck!");
} else {
    console.log("I haven't tried this fruit.. are you sure it's a fruit?");
};

// Excercise 07.
// Request a number and check if the number is odd, even or zero. Use switch.

const userInput = parseInt(prompt("Enter a number"));
let message = "";

if (userInput % 2 === 0 && userInput !== 0) {
    message = "This number is even";
} else if (userInput !== 0) {
    message = "This is a odd number"
} else if (userInput === 0) {
    message = "This number is a Zero";
} else {
    message = "You must enter a number"
}

switch (message) {
    case "This number is even":
    console.log(message);
    break;
    case "This is a odd number":
    console.log(message);
    break;
    case "This number is a Zero":
    console.log(message);
    break;
    default:
    console.log("You must enter a number");
};