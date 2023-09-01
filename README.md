**Homework Javascript 01 - Introduction**
*July 25th - 2023*

- Request a user’s name and display the response “Hello, [name]”.
- Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
- Request a length of a side of a square from a user and display the perimeter of the square. 
- Request a radius of a circle and display the area of such a circle. 
- Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
- Request user’s name, age, country of birth and display them in the console in different lines with different colors to be easily visible
- Ask 10 questions and display the answers in a short text in an alert
- Show in the console what is going to be your age in 2025, 2029 and 2050, using a single variable 


**Homework Javascript 02 - Data Types & Math Functions**
*July 27th - 2023*

- Request a username and show a greeting using string template 
- Request names and ages for two children. Check if child 1 is older and if its name is Tim
- Request a color and check if the color is on the flag of the Republic of South Africa
- Request a number and check if it is an odd number
- Request two numbers, divide them and the result must be an integer(whole number)
- Request date of birth, calculate age and show if the person is over 18
- Declare a variable without initializing it and check if it is of type null or undefined
- Request a number, check if it is a number and if it is between 10 and 50

**Homework JavaScript 03 - Loops and Conditions**
*July 29th - 2023*

- Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
- Request two numbers and find only their largest common divisor.
- Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
- Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
- Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 
- Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food, if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit
- Request a number and check if the number is odd, even or zero. Use switch.

**Homework JavaScript 04 - Functions**
*August 1st - 2023*

- Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
- Write a function that counts the factorial of a given number. 
- Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
- Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
- Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
- Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
- Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
- Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
- Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
- Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

**Homework Javascript 05 - Objects**
*August 3rd - 2023*

- Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

* A method that displays the car info 
* A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

- Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

* A function for adding two fraction objects.
* A function for subtracting two fraction objects.
* A function for multiplying two fraction objects.
* A function for dividing two fraction objects.
* A function for simplifying a fraction object. 

- Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

* A method for displaying the time. 
* A method for changing the time by a given amount of seconds. 
* A method for changing the time by a given amount of minutes.  
* A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

- Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. All of them should have unique ids, ages and addresses. Show which is the oldest and which is the youngest.

- Use the previous objects and show a list with their names and ages.

- Create 2 people - Joye and Rachel. They have to have age and a greeting which will say “Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!”

- Create an object circle with a property radius and a method calculateArea. The calculateArea method should calculate and return the area of the circle using the formula: area = π * radius^2. Now, create another object smallCircle with its own radius, and use the bind method to bind the calculateArea method from circle to smallCircle. Call the calculateArea method on smallCircle and print the area.

- Create an object with properties. These properties cannot be deleted.

- Create an object with properties. These properties cannot be changed.

**Homework JavaScript 06 - DOM (Document Object Model)**
*August 5th - 2023*

- Ask user for age, if user is below 18, display a warning message that he is underaged, if he is over show him alcohol page
- Add this list to your page:

    <div class="container">
        <ul class="list">
            <li class="item">Dave</li>
            <li class="item">John</li>
            <li class="item">Ivan</li>
            <li class="item">Sam</li>
            <li class="item">Mel</li>
            <li class="item">Diana</li>
        </ul>
    </div>

- Add background color to each odd row
- Add Smith, Jeff and Larry in the top, middle and end of the list
- Remove Mel
- Add a row that says that Mel has been removed form the list

**Homework JavaScript 07 - Array**
*August 8th - 2023*

- Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 

Display the entire list, so that the not yet purchased items go before the bought ones. 

- Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. Purchasing a product. The function accepts the name of a product and marks it as bought.

- Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

01. Print the receipt out on the screen.
02. Counting the sum of the purchase.
03. Extracting the most expensive item on the receipt.
04. Counting an average item price on the receipt.

**Homework JavaScript 08 - Events**
*August 10th - 2023*

- Create a functional calculator; it should be able to subtract, sum, divide and multiple numbers. Also every symbol must be shown on the screen

- Create a song list generator; User should be able to input song name, artist and runtime. Also should be able to delete song from list and see runtime in details below song name and artist when clicking on the row. See example below:
