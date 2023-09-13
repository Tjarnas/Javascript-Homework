// Homework 08 - Events

// Excercise 01
// Create a functional calculator; it should be able to subtract, sum, divide and multiple numbers. Also every symbol must be shown on the screen

let displayValue = "";
let operatorStorage = "";
let valueStorage = "";
let result = "";

// Constructor function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

// Display
const display = document.querySelector(".display");
display.textContent = result;

// Numbers
addGlobalEventListener("click", ".numbers", e => {
  const value = e.target.childNodes[0].nodeValue;
  if (value === "0" && displayValue === "") return (displayValue = "");
  displayValue += value;
  display.textContent = displayValue;
  console.log(displayValue)
})

// Period
addGlobalEventListener("click", ".period", e => {
  const period = e.target.childNodes[0].nodeValue;
  if (period === "." && displayValue.includes(".")) return
  if(period === "." && displayValue === "") return (displayValue = "0.")
  displayValue += period
  display.textContent = displayValue;
  console.log(displayValue)
})

// Operators
addGlobalEventListener("click", ".operator", e => {
  const operator = e.target.childNodes[0].nodeValue;
  if (operator === "*" && displayValue.includes("*") || operator === "+" && displayValue.includes("+") || operator === "-" && displayValue.includes("-") || operator === "/" && displayValue.includes("/")) return
  if(operator === operator && displayValue === "") return (operatorStorage = "")
  operatorStorage += operator;
  valueStorage += displayValue;
  displayValue = "";
  display.textContent = operatorStorage;
  console.log(operatorStorage)
})

// Compute/Equals
addGlobalEventListener("click", ".equals", e => {
  result += valueStorage + operatorStorage + displayValue;
  if (displayValue === "") return (displayValue = "");
  displayValue = eval(result);
  display.textContent = displayValue;
  console.log(displayValue);
})

// All clear/Delete
addGlobalEventListener("click", ".allclear", e => {
  displayValue = "";
  operatorStorage = "";
  valueStorage = "";
  result = "";
  display.textContent = displayValue;
})
