// Homework 10 - JQuary
$(document).ready(() => {
//Excercise 01
// Create a rectangle and make it move to all edges of the page after a button has been clicked.
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        $("#btn").animate({right: "0"}, 2000);
        $("#btn").animate({bottom: "0"}, 2000);
        $("#btn").animate({left: "0"}, 2000);
        $("#btn").animate({top: "0"}, 2000);
    });

//Excercise 02
// Create a functioning calculator using jQuary.
    let displayValue = "";
    let operatorStorage = "";
    let valueStorage = "";
    let result = "";

//Display
    const display = document.querySelector(".display");


// Numbers
    $(".numbers").click(function (e) { 
        e.preventDefault();
        const value = e.target.childNodes[0].nodeValue;
        if (value === "0" && displayValue === "") return (displayValue = "");
        displayValue += value;
        display.textContent = displayValue;
        console.log(displayValue)
    });

//Period
    $(".period").click(function (e) { 
        e.preventDefault();
        const period = e.target.childNodes[0].nodeValue;
        if (period === "." && displayValue.includes(".")) return
        if(period === "." && displayValue === "") return (displayValue = "0.")
        displayValue += period
        display.textContent = displayValue;
        console.log(displayValue)
    });

//Operators
    $(".operator").click(function (e) { 
        e.preventDefault();
        const operator = e.target.childNodes[0].nodeValue;
        if (operator === "*" && displayValue.includes("*") || operator === "+" && displayValue.includes("+") || operator === "-" && displayValue.includes("-") || operator === "/" && displayValue.includes("/")) return
        if(operator === operator && displayValue === "") return (operatorStorage = "")
        operatorStorage += operator;
        valueStorage += displayValue;
        displayValue = "";
        display.textContent = operatorStorage;
        console.log(operatorStorage)
    });

//Compute/Equals
    $(".equals").click(function (e) { 
        e.preventDefault();
        result += valueStorage + operatorStorage + displayValue;
        if (displayValue === "") return (displayValue = "");
        displayValue = eval(result);
        display.textContent = displayValue;
        console.log(displayValue);
    });

//All Clear
    $(".allclear").click(function (e) { 
        e.preventDefault();
        displayValue = "";
        operatorStorage = "";
        valueStorage = "";
        result = "";
        display.textContent = displayValue;
    });

//Excercise 03
// Create a simple to-do list page using jQuery. Allow users to add and remove tasks. Each task should have a checkbox to mark it as complete. Change style of row when task is marked as complete

//Add Task
    $(".add").click(function (e) { 
        e.preventDefault();
        const newTask = document.createElement("li");
        $(".list").append(newTask);
        newTask.classList.add("list-item");
        newTask.innerHTML = $(".task").val();
        newTask.classList.add("todo");
        const checkbox = document.createElement("input");
        newTask.appendChild(checkbox);
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("checkbox");
        const removeBtn = document.createElement("button");
        newTask.appendChild(removeBtn);
        removeBtn.innerHTML = "Remove";
        $(removeBtn).click(function (e) { 
            newTask.remove();
        });
        $(".checkbox").click(function (e) {
            if (checkbox.checked) {
                newTask.style.backgroundColor = "lightgreen";
            } else {
                newTask.style.backgroundColor = "lightblue";
            }
        });
    });


//Excercise 04
// Create a list of items (any topic) and on hover show details on each row.
    $(".specs").hide()
    $("img").hover(function () {
            // over
            $(".specs").slideDown("slow");
        }, function () {
            // out
            $(".specs").slideUp("slow");
        }
    );

})