"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var confirmQuestion = confirm("Would you like to enter a number?");

if (confirmQuestion) {
    var parsedNumber = prompt("What is your number?");
    if (isNaN(parsedNumber)) {
        alert("You did not enter a number.");
    } else {
        if (parsedNumber % 2 === 0 && parsedNumber > 0) {
            alert("Your number is even!");
            alert("Your number plus 100 is: " + ((1 * (parsedNumber)) + 100));
            alert("You number is positive!");
        } else if (parsedNumber % 2 === 0 && parsedNumber < 0) {
            alert("Your number is even!");
            alert("Your number plus 100 is: " + ((1 * (parsedNumber)) + 100));
            alert("Your number is negative!");
        } else if (parsedNumber % 2 === 1 && parsedNumber > 0) {
            alert("Your number is odd!");
            alert("Your number plus 100 is: " + ((1 * (parsedNumber)) + 100));
            alert("You number is positive!");
        } else {
            alert("Your number is odd!");
            alert("Your number plus 100 is: " + ((1 * (parsedNumber)) + 100));
            alert("You number is negative!");
        }
    }
}

// var userAge = 17;
// var hasPermit = true;
//
// if( userAge < 15 ) {
//     alert("You are not eligible for a permit.");
// } else {
//     // all other possibilities.
//     if( userAge === 15 ) {
//         alert("You are eligible for a learner's permit.");
//     } else if (userAge >= 16 && hasPermit) {
//         alert("You can get a driver's license.");
//     } else if ((userAge >= 16) && !hasPermit) {
//         alert("You are not eligible for a license. :(");
//     } else {
//         alert("We don't have enough information to determine your eligibility. :( :(");
//     }
// }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colorName) {
//     if ( colorName === "blue" ) {
//         return "Blue is the color of the sky.";
//     } else if ( colorName === "red" ) {
//         return "Strawberries are red."
//     } else {
//         return "I don't know anything about " + colorName;
//     }
// }

// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("black"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function colorName(randomColor) {
//     if (randomColor === "red") {
//         return "Apples are red.";
//     } else if (randomColor === "orange") {
//         return "Oranges are orange.";
//     } else if (randomColor === "yellow") {
//         return "Lemons are yellow."
//     } else if (randomColor === "green") {
//         return "Grass is green."
//     } else if (randomColor === "blue") {
//         return "The sky is blue."
//     } else if (randomColor === "indigo") {
//         return "I don't know what indigo is."
//     } else {
//         return "Violet is my favorite color!"
//     }
// }
//
// console.log(colorName(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (randomColor) {
//     case "red":
//         randomColor = "Apples are red.";
//         break;
//     case "orange":
//         randomColor = "Oranges are orange.";
//         break;
//     case "yellow":
//         randomColor = "Lemons are yellow.";
//         break;
//     case "green":
//         randomColor = "Grass is green.";
//         break;
//     case "blue":
//         randomColor = "Sky is blue.";
//         break;
//     case "indigo":
//         randomColor = "I don't know what indigo is.";
//         break;
//     case "violet":
//         randomColor = "Violet is my favorite color!";
//         break;
//
// }
//
// console.log(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorQuestion = prompt("What is your favorite color?").toLowerCase();
//
// function analyzeColor(colorQuestion) {
//     if (colorQuestion === "red") {
//         alert( "Apples are red.");
//     } else if (colorQuestion === "orange") {
//         alert( "Oranges are orange.");
//     } else if ( colorQuestion === "yellow") {
//         alert ("Lemons are yellow.");
//     } else if (colorQuestion === "green") {
//         alert( "Grass is green.");
//     } else if (colorQuestion === "blue") {
//         alert( "The sky is blue.");
//     } else if (colorQuestion === "indigo") {
//         alert ( "I don't know what indigo is.");
//     } else {
//         alert( "Violet is my favorite color!");
//     }
// }
//
// console.log(analyzeColor(colorQuestion));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     if  (luckyNumber === 0 || luckyNumber >= 6) {
//      return "You have no discount."
// }   else if (luckyNumber === 1) {
//         return "Your discounted total is " + (totalAmount - (totalAmount * .10));
//     } else if (luckyNumber === 2) {
//         return "Your discounted total is " + (totalAmount - (totalAmount * 0.25));
//     } else if (luckyNumber === 3) {
//         return "Your discounted total is " + (totalAmount- (totalAmount * 0.35));
//     } else if (luckyNumber === 4) {
//         return "Your discounted total is " + (totalAmount - (totalAmount * 0.50));
//     } else {
//         return "You will get it all for free!";
//     }
// }
// //
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));
// console.log(calculateTotal(6, 100));
// console.log(calculateTotal(10, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("What was your total bill?");
//
// function calculateTotal(luckyNumber, totalAmount) {
//     if  (luckyNumber === 0) {
//         alert("Your lucky number is zero. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount));
//     }   else if (luckyNumber === 1) {
//         alert("Your lucky number is one. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount - (totalAmount * 0.10)));
//     } else if (luckyNumber === 2) {
//         alert("Your lucky number is two. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount - (totalAmount * 0.25)));
//     } else if (luckyNumber === 3) {
//         alert("Your lucky number is three. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount - (totalAmount * 0.35)));
//     } else if (luckyNumber === 4) {
//         alert("Your lucky number is four. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount - (totalAmount * 0.50)));
//     } else if (luckynumber === 5) {
//         alert("Your lucky number is five. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount - (totalAmount * 1.00)));
//     } else {
//         alert("Your lucky number is six. " + "Your price before the discount was $" + (totalAmount) + ". "
//             + "And your price after the discount is $" + (totalAmount));
//     }
// }
//
// console.log(calculateTotal(luckyNumber, totalBill));
