// Homework 05

// Excercise 01.
// Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

// 1. A method that displays the car info 
// 2. A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

const car = {
    manufacturer: "Polestar",
    model: "Polestar 3",
    "year of release": 2023,
    "average speed": "100km/h",
    details: function () {
        for (let key in car) {
            console.log(`${key}:${car[key]}`);
        }
    },
    time: () => {
        let kilometers = prompt('Enter how many kilometers');
        let time = prompt('Enter how many hours you want to spend traveling');

        if (time % 4 === 0) {
            time--;
        };

        const speed = kilometers / time;

        console.log(`You'll have to drive about ${Math.round(speed)} km/h for estimated ${time} hours to reach your destination`);
    },
}

car.details();
car.time();

// // Excercise 02.
// // Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

// // 1. A function for adding two fraction objects.
// // 2. A function for subtracting two fraction objects.
// // 3. A function for multiplying two fraction objects.
// // 4. A function for dividing two fraction objects.
// // 5. A function for simplifying a fraction object. 

const letsDoMath = {
    numerator: 0,
    denominator: 0,
    addition (paramOne, paramTwo) {
        if (this.denominator === paramTwo) {
           let biggerNumerator = this.numerator + paramOne;
           return `Numerator: ${biggerNumerator}, Denominator: ${this.denominator}`;
        } else if (this.denominator !== paramTwo) {
            return `Numerator: ${this.numerator * paramTwo + paramOne * this.denominator}, Denominator: ${this.denominator * paramTwo}`;
        } else {
            return "Invalid input";
        };
    },
    subtract (paramOne, paramTwo) {
        if (this.denominator === paramTwo) {
            let biggerNumerator = this.numerator - paramOne;
            return biggerNumerator / this.denominator;
         } else if (this.denominator !== paramTwo) {
             return `Numerator: ${this.numerator * paramTwo - paramOne * this.denominator}, Denominator: ${this.denominator * paramTwo}`;
         } else {
             return "Invalid input";
         }
    },
    multiply (paramOne, ParamTwo) {
        return `Numerator: ${this.numerator * paramOne}, Denominator: ${this.denominator * ParamTwo}`;
    },
    dividing (paramOne, paramTwo) {
        return `Numerator: ${this.numerator * paramTwo}, Denominator: ${this.denominator * paramOne}`;
    },
    simplifying (paramOne, paramTwo) {
        let wholeNumber = 0;
        for (let i = 1; i < paramOne; i++) {
            if (i % paramTwo === 0) {
                wholeNumber++;
            }
        }
        return `Whole number: ${wholeNumber}, Numerator: ${this.numerator = paramOne - wholeNumber * paramTwo}, Denominator: ${paramTwo}`;
    }
};

// Excercise 03.
// Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

// 1. A method for displaying the time. 
// 2. A method for changing the time by a given amount of seconds. 
// 3. A method for changing the time by a given amount of minutes.  
// 4. A method for changing the time by a given amount of hours.

// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».


const time = {
    hours: 13,
    minutes: 35,
    seconds: 23,

    displayTime () {
        let timeFormat = `${this.hours}:${this.minutes}:${this.seconds}`;
        return timeFormat;
    },

    addSeconds (seconds) {
        const timeTotal = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
        this.hours = Math.floor(timeTotal / 3600);
        this.minutes = Math.floor((timeTotal % 3600) / 60);
        this.seconds = timeTotal % 60;
    },
    addMinutes (minutes) {
        this.addSeconds(minutes * 60);
    },
    addHours (hours) {
        this.addSeconds(hours * 3600);
    }
};

// time.displayTime(); // Output: 13:35:23

// time.addSeconds(80);
// time.displayTime(); // Output: 13:36:43

// time.addMinutes(65);
// time.displayTime(); // Output: 14:40:23

// time.addHours(2);
// time.displayTime(); // Output: 15:35:23


// Excercise 04.
// Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. 
// All of them should have unique ids, ages and addresses. Show which is the oldest and which is the youngest.


const dog = {
    id: 0,
    dogName: "",
    age: 0,
    address: "",
};

const dog1 = Object.assign({}, dog);
    dog1.id = 4827;
    dog1.dogName = "John";
    dog1.age = 2;
    dog1.address = "Dogville st. 34th ave.";

const dog2 = Object.assign({}, dog);
    dog2.id = 9587;
    dog2.dogName = "Ivan";
    dog2.age = 4;
    dog2.address = "Dogville st. 20th ave.";

const dog3 = Object.assign({}, dog);
    dog3.id = 3827;
    dog3.dogName = "Teddy";
    dog3.age = 3;
    dog3.address = "Dogville st. 19th ave.";


const dog4 = Object.assign({}, dog);
    dog4.id = 1195;
    dog4.dogName = "Rocco";
    dog4.age = 1;
    dog4.address = "Dogville st. 88th ave.";

const dog5 =  Object.assign({}, dog);
    dog5.id = 2214;
    dog5.dogName = "Sparky";
    dog5.age = 5;
    dog5.address = "Dogville st. 23th ave.";

console.log(`${dog4.dogName} is ${dog4.age} years old, therefore the youngest`); // Youngest dog
console.log(`${dog5.dogName} is ${dog5.age} years old, therefore the oldest`); // Oldest dog

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);
console.log(dog5);

function list (dog1, dog2, dog3, dog4, dog5) {
    console.log("Name: " + dog1.dogName + " Age: " + dog1.age);
    console.log("Name: " + dog2.dogName + " Age: " + dog2.age);
    console.log("Name: " + dog3.dogName + " Age: " + dog3.age);
    console.log("Name: " + dog4.dogName + " Age: " + dog4.age);
    console.log("Name: " + dog5.dogName + " Age: " + dog5.age);
}

list(dog1, dog2, dog3, dog4, dog5);

// Excercise 05.
// Create 2 people - Joye and Rachel. They have to have age and a greeting which will say “Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!”

const greeting = {
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} old. Nice to meet you!`
    },
};

function person(name, age) {
    this.name = name;
    this.age = age;
}

Object.assign(person.prototype, greeting);

const joyce = new person("Joyce", 27);
const rachel = new person("Rachel", 32)

console.log(joyce.greet());
console.log(rachel.greet());


// Excercise 06.
// Create an object circle with a property radius and a method calculateArea. The calculateArea method should calculate and return the area of the circle using the formula: area = π * radius^2. 
// Now, create another object smallCircle with its own radius, and use the bind method to bind the calculateArea method from circle to smallCircle. Call the calculateArea method on smallCircle and print the area.

let circle = {
    radius: 7,
    calculateArea () {
        area = 3.14 * (this.radius * this.radius);
        return area;
    },
};

let smallCircle = {
    radius: 3,
}

let calculate = circle.calculateArea.bind(smallCircle);
console.log(calculate()) // 28.26


// Excercise 07.
// Create an object with properties. These properties cannot be deleted.

const bank = {
    money: 320000000,
    interest: 3.5
}

Object.seal(bank);

// Excercise 08.
// Create an object with properties. These properties cannot be changed.

const journal = {
    disease: "Diabetes",
    medication: "Insulin",
    dosage: "1 unit (12-15 gram)"
}

Object.freeze(journal);