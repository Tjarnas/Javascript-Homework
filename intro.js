// // HOMEWORK 01 - Introduction to Javascript

// // Excercise 01.
// let fullName = prompt();

// console.log('Hello ' + userName);

// // Excercise 02.
// let userBirthYear = prompt('Enter your year of birth');
// const currentYear = 2023;

// console.log(currentYear - userBirthYear + ' Years old');

// // Excercise 03.
// let oneSideOfSquare = prompt('Enter one side of length of a square');
// const SquarePerimeter = oneSideOfSquare * 4;

// console.log(SquarePerimeter + ' Centimeters');

// // Excercise 04.
// let EnterRadius = prompt('Enter radius of circle');
// const CircleArea = 3.14 * (EnterRadius ** 2);

// console.log(CircleArea);

// // Excercise 05.
// let kilometers = prompt('Enter how many kilometers');
// let time = prompt('Enter how long time you want to spend traveling');
// const speed = kilometers / time;

// console.log(speed + 'km/h');

// // Exercise 06.
// let userName = prompt('Enter name');
// let userAge = prompt('Enter age');
// let userCountry = prompt('Enter country of birth');

// console.error(userName);
// console.info(userAge);
// console.warn(userCountry);

// // Excercise 07.
// const satisfied = prompt('Overall, how satisfied are you with our product/service? (1-10)');
// const influenced = prompt('What influenced your decision to choose us over competitors?');
// const frequent = prompt('How frequently do you use our product/service?');
// const easeOfNavigation = prompt('Rate the ease of navigating our website/app (1-5).');
// const missingFeatures = prompt("Any specific features or improvements you'd like to see?");
// const recommendUs = prompt("How likely are you to recommend us? (1-10)");
// const issues = prompt("Have you encountered any issues? Please describe.");
// const aspect = prompt("Most impressive aspect of our customer service?");
// const aboutUs = prompt("How did you first hear about us?");
// const userFeedBack = prompt("Would you participate in a user feedback session? (Yes/No)");

// alert(satisfied + ' | ' + influenced + ' | ' + frequent + ' | ' + easeOfNavigation + ' | ' + missingFeatures + ' | ' + recommendUs + ' | ' + issues + ' | ' + aspect + ' | ' + aboutUs + ' | ' + userFeedBack);

// // Excercise 08.
// var birthYear = 1991;

// console.log('Im gonna be ' + (2025 - birthYear) + ' Years old at 2025');
// console.log('Im gonna be ' + (2029 - birthYear) + ' Years old at 2029');
// console.log('Im gonna be ' + (2050 - birthYear) + ' Years old at 2050');

/* 
// HOMEWORK 02 - Types of data and math functions

// Excercise 01.
let userName = prompt('Enter username').toString();

console.log(userName);

// Excercise 02.
const childOneName = prompt('Enter name for child one');
const childOneAge = prompt('Enter age for child one');
const childTwoName = prompt('Enter name for child two');
const childTwoAge = prompt('Enter age for child two');

console.log(childOneAge > childTwoAge && childOneName === "Tim");

// Excercise 03.
const requestColor = prompt('Enter a color');

console.log(requestColor === "Black" || requestColor === "Yellow" || requestColor === "Green" || requestColor === "White" || requestColor === "Red" || requestColor === "Blue");

// Excercise 04.
let isNumber = prompt("Enter a number to see if it's a odd number");
const ifOddNumber = isNumber % 2 != 0;

console.log(ifOddNumber);

// Excercise 05.
let firstInteger = prompt("Enter a number");
let secondInteger = prompt("Enter a second number");
const divideIntegers = Math.ceil(firstInteger / secondInteger);

console.log(divideIntegers);

// Excercise 06.
const userBirthYear = prompt("Enter your birthyear");
const date = new Date();
const currentYear = date.getFullYear();
const isYearsOld = currentYear - userBirthYear;
const isAdult = isYearsOld >= 18;

console.log(isAdult);

// Excercise 07.
let whatType;
const checkType = typeof(whatType);

console.log(checkType);

// Exercise 08.
const requestNumber = prompt("Enter Number");
const number = parseFloat(requestNumber);
const isValid = !isNaN(number) && number <= 50 && number >= 10;

console.log(isValid);

 */

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