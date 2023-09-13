// HOMEWORK 04 - Functions

// Excercise 01
// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

const smallerOrBigger = (param1, param2) => {
    if (param1 < param2) {
        return -1;
    } else if (param1 > param2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(smallerOrBigger(2,5));
console.log(smallerOrBigger(5,2));
console.log(smallerOrBigger(5,5));

// Excercise 02
// Write a function that counts the factorial of a given number.

const requestNumber = prompt('Enter a number');

const factorial = (param) => {
    if (param === 0 || param === 1)
        return 1;
    for (let i = param -1; i >= 1; i--) {
        param *= i;
    }
    return param;
}

console.log(factorial(requestNumber)); 

// Excercise 03
// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

let result = "";

const concatenate = (param1, param2, param3) => {
    result += param1;
    result += param2;
    result += param3;
}

concatenate(3,6,9);
console.log(result);

// Excercise 04.
// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 

const area = (param1, param2) => {
    if (param1, param2) {
        return param1 * param2;
    } else {
        return param1 * param1;
    }
}

console.log(area(30,25));
console.log(area(10));

// Excercise 05.
// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

const isPerfect = (number) => {
    let storage = 0;
    for (let i = 0; i <= number/2; i++) {
        if (number % i === 0) {
            storage += i;
        }
    }
    if (storage === number && storage !== 0) {
        console.log(`wow! ${number} is a perfect number`)
    } else {
        console.log(`Nope, ${number} is not a perfect number`)
    }
}
isPerfect(6); // Perfect Number.
isPerfect(8); // Not a perfect Number.

// Excercise 06.
// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 

const perfectRange = (min, max) => {
    for (let i = min; i <= max; i++) {
        isPerfect(i);
    }
}

// Excercise 07.
// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

const requestTime = (hh, mm, ss) => {
    if (hh > 23 || mm > 59 || ss > 59) {
        return "Enter a valid hour within a 24 hour spann";
    } else if (hh <= 23 && mm < 60 && ss < 60) {
        return `${hh}:${mm}:${ss}`
    } else {
        return `${hh}:${mm}:00`
    }
}

// Excercise 08.
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

const convertToSeconds = (hh, mm, ss) => {
    let converter = (hh * 3600 + mm * 60 + ss * 1);
    return converter;
}

// Excercise 09.
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

const convertToHours = (ss) => {
    let hours = Math.floor(ss / 3600);
    let minutes = Math.floor(ss / 60) % 60;
    let seconds = ss % 60;

    return [hours, minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":")
}

// Excercise 10.
// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

const calcTimeDifference = (hh1, mm1, ss1, hh2, mm2, ss2) => {
    const timeInSeconds1 = convertToSeconds(hh1, mm1, ss1);
    const timeInSeconds2 = convertToSeconds(hh2, mm2, ss2);

    const timeDifference = Math.abs(timeInSeconds1 - timeInSeconds2);

    return "The time difference is " + convertToHours(timeDifference);
}

console.log(calcTimeDifference(72, 45, 15, 48, 10, 5));