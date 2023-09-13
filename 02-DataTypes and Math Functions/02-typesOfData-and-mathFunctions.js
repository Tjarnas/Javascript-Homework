
// HOMEWORK 02 - Types of data and math functions

// Excercise 01.
// Request a username and show a greeting using string template .

let userName = prompt('Enter username').toString();

console.log(userName);

// Excercise 02.
// Request names and ages for two children. Check if child 1 is older and if its name is Tim.

const childOneName = prompt('Enter name for child one');
const childOneAge = prompt('Enter age for child one');
const childTwoName = prompt('Enter name for child two');
const childTwoAge = prompt('Enter age for child two');

console.log(childOneAge > childTwoAge && childOneName === "Tim");

// Excercise 03.
// Request a color and check if the color is on the flag of the Republic of South Africa.

const requestColor = prompt('Enter a color');

console.log(requestColor === "Black" || requestColor === "Yellow" || requestColor === "Green" || requestColor === "White" || requestColor === "Red" || requestColor === "Blue");

// Excercise 04.
// Request a number and check if it is an odd number.

let isNumber = prompt("Enter a number to see if it's a odd number");
const ifOddNumber = isNumber % 2 != 0;

console.log(ifOddNumber);

// Excercise 05.
// Request two numbers, divide them and the result must be an integer(whole number).

let firstInteger = prompt("Enter a number");
let secondInteger = prompt("Enter a second number");
const divideIntegers = Math.ceil(firstInteger / secondInteger);

console.log(divideIntegers);

// Excercise 06.
// Request date of birth, calculate age and show if the person is over 18.

const userBirthYear = prompt("Enter your birthyear");
const date = new Date();
const currentYear = date.getFullYear();
const isYearsOld = currentYear - userBirthYear;
const isAdult = isYearsOld >= 18;

console.log(isAdult);

// Excercise 07.
// Declare a variable without initializing it and check if it is of type null or undefined.

let whatType;
const checkType = typeof(whatType);

console.log(checkType);

// Exercise 08.
// Request a number, check if it is a number and if it is between 10 and 50.

const requestNumber = prompt("Enter Number");
const number = parseFloat(requestNumber);
const isValid = !isNaN(number) && number <= 50 && number >= 10;

console.log(isValid);