// Prompt and Alert

var userInput = prompt("Enter your year of birth:");
console.log(userInput);

var width = prompt("We are calculating the area of a rectabgle.\nPlease enter the width");
var height = prompt("Please enter the height");
var area = width * height; // calculates with that info
console.log(area); //prints it out to the console

alert("The area of a rectabgle is " + area + " sq feet.");
 
var result = "The area of your rectangle is " + area + " sq feet";

alert(result);