// Homework 09 - Ajax

// Excercise 01.
// Create a promise that resolves to the string "Hello, Promises!"
const greeting = new Promise((resolve, reject) => {
    const extrovert = true;
    if (extrovert === true) {
        resolve("Hello, Promises!");
    } else {
        reject("Stay quiet, because now im a introvert");
    }
});

greeting.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Excercise 02.
// Create a function that returns a promise. 
// The promise should resolve after a random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".
function download() {
    let time = Math.ceil(Math.random() * 5);
    let timeToSeconds = time * 1000;
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${time} seconds`);
        }, timeToSeconds)
    });
};

download().then((message) => {
    console.log(message);
});

// Excercise 03.
// Ask a user to submit an artist name and song and after 2 seconds add it to the screen.
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const songName = document.querySelector(".songname")
const artist = document.querySelector(".artist")

btn.addEventListener("click", function (event) {
    return setTimeout(() => {
        const newSong = document.createElement("li");
        list.appendChild(newSong);
        newSong.innerHTML = `${songName.value} by ${artist.value}`;
        const removeBtn = document.createElement("button");
        newSong.appendChild(removeBtn);
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click", function (event) {
            newSong.remove();
        });
    }, 2000);
});

// Excercise 04.
// Ask a user for age, if the input is not a number or a number over 120 or below 0, show error in console, else print in on the page with a welcome message.

const promise = new Promise ((resolve, reject) => {
    const askAge = prompt("How old are you?");
    const userAge = eval(askAge);
    if (userAge < 0 || userAge > 120 && userAge !== Number) {
        reject(`Input value of "${userAge}" is not accepted`);
    } else {
        const body = document.querySelector("body");
        const welcome = document.createElement("h2");
        body.appendChild(welcome);
        welcome.innerHTML = "Welcome user";
        resolve(`User age of ${userAge} is accepted`);
    }
});

promise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});