// HOMEWORK 01 - Introduction to Javascript

// Excercise 01.
// Request a user’s name and display the response “Hello, [name]”.

let fullName = prompt();

console.log('Hello ' + userName);

// Excercise 02.
// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.

let userBirthYear = prompt('Enter your year of birth');
const currentYear = 2023;

console.log(currentYear - userBirthYear + ' Years old');

// Excercise 03.
// Request a length of a side of a square from a user and display the perimeter of the square. 

let oneSideOfSquare = prompt('Enter one side of length of a square');
const SquarePerimeter = oneSideOfSquare * 4;

console.log(SquarePerimeter + ' Centimeters');

// Excercise 04.
// Request a radius of a circle and display the area of such a circle. 

let EnterRadius = prompt('Enter radius of circle');
const CircleArea = 3.14 * (EnterRadius ** 2);

console.log(CircleArea);

// Excercise 05.
// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

let kilometers = prompt('Enter how many kilometers');
let time = prompt('Enter how long time you want to spend traveling');
const speed = kilometers / time;

console.log(speed + 'km/h');

// Exercise 06.
// Request user’s name, age, country of birth and display them in the console in different lines with different colors to be easily visible.

let userName = prompt('Enter name');
let userAge = prompt('Enter age');
let userCountry = prompt('Enter country of birth');

console.error(userName);
console.info(userAge);
console.warn(userCountry);

// Excercise 07.
// Ask 10 questions and display the answers in a short text in an alert.

const satisfied = prompt('Overall, how satisfied are you with our product/service? (1-10)');
const influenced = prompt('What influenced your decision to choose us over competitors?');
const frequent = prompt('How frequently do you use our product/service?');
const easeOfNavigation = prompt('Rate the ease of navigating our website/app (1-5).');
const missingFeatures = prompt("Any specific features or improvements you'd like to see?");
const recommendUs = prompt("How likely are you to recommend us? (1-10)");
const issues = prompt("Have you encountered any issues? Please describe.");
const aspect = prompt("Most impressive aspect of our customer service?");
const aboutUs = prompt("How did you first hear about us?");
const userFeedBack = prompt("Would you participate in a user feedback session? (Yes/No)");

alert(satisfied + ' | ' + influenced + ' | ' + frequent + ' | ' + easeOfNavigation + ' | ' + missingFeatures + ' | ' + recommendUs + ' | ' + issues + ' | ' + aspect + ' | ' + aboutUs + ' | ' + userFeedBack);

// Excercise 08.
// Show in the console what is going to be your age in 2025, 2029 and 2050, using a single variable.

var birthYear = 1991;

console.log('Im gonna be ' + (2025 - birthYear) + ' Years old at 2025');
console.log('Im gonna be ' + (2029 - birthYear) + ' Years old at 2029');
console.log('Im gonna be ' + (2050 - birthYear) + ' Years old at 2050');
