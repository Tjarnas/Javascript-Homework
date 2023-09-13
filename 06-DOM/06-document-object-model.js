// HOMEWORK 06 - DOM

// Excercise 01.
// Ask user for age, if user is below 18, display a warning message that he is underaged, if he is over show him alcohol page
const body = document.body;
const div = body.querySelector("div")

const userAge = window.prompt("Enter your age");
if (userAge < 18) {
    window.alert("Warning! You are too young to view this page");
    const denied = document.createElement("h1");
    body.appendChild(denied);
    body.insertBefore(denied, div);
    denied.innerText = "You've been redirected to Disney";
    denied.style.color = "red";
} else {
    const access = document.createElement("h1");
    body.appendChild(access)
    body.insertBefore(access, div);
    access.innerText = "Welcome To Alcohol Page"
    access.style.color = "green"
}

// Excercise 02
// Add this list to your page:

/* <div class="container">
<ul class="list">
    <li class="item">Dave</li>
    <li class="item">John</li>
    <li class="item">Ivan</li>
    <li class="item">Sam</li>
    <li class="item">Mel</li>
    <li class="item">Diana</li>
</ul>
</div> */

// Excercise 03.
// Add background color to each odd row

const list = body.querySelector("ul");
const listItem = body.getElementsByClassName("item");

const coloring = () => {
    for (let i = 0; i < listItem.length; i++) {
        if (i % 2 === 0) {
           listItem[i].style.backgroundColor = "yellow";
        };
    }
};

coloring(); // Disable excercise 04 to confirm it works. Dont know why it doesnt work WITH below code.. ¯\_(ツ)_/¯

// Excercise 04
// Add Smith to the top, Jeff to the middle and Larry to the end of the list.

const smith = document.createElement("li");
list.appendChild(smith);
smith.innerText = "Smith";
smith.setAttribute("class", "item");
list.insertBefore(smith, listItem[0]);

const jeff = document.createElement("li");
list.appendChild(jeff);
jeff.innerText = "Jeff";
jeff.setAttribute("class", "item");
list.insertBefore(jeff, listItem[3]);

const larry = document.createElement("li");
list.appendChild(larry);
larry.setAttribute("class", "item");
larry.innerText = "Larry";

// Excercise 05
// Remove Mel

const mel = listItem[6];
mel.remove();

// Exercise 06
// Add a row that says that Mel has been removed from the list

const message = document.createElement("span");
body.appendChild(message);
message.innerText = "Mel has been removed";