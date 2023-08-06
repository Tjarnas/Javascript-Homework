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
