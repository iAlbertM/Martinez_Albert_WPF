// Albert Martinez
// 08/21/2014
// Conditionals Industry

// Problem: Create an program to quickly provide a rough estimate of your weekly pay as a Desiner and/or Developer

// Givens
var workHrs = prompt("Weekly Hours\nHow many hours did you work on the project this week?");
 if (workHrs == "") { // validation for the user input
 	prompt("You may have forgotten to fill that last field there.\nHappens to the best of us when we're excited! Try again.");
 }
 if (workHrs == 0) { //checking to see if user worked at all
 	console.log("No work equals no pay.\nSorry! Try harder next time!")
 }
var hourlyRate = prompt("What is your base rate on these project?"); // Needed for formula for client quote
 if (hourlyRate == "") {// checking for empty string --validation 
	prompt("You may have forgotten to fill that last field there.\nHappens to the best of us when we're excited! Try again.");
 }
var duration = prompt("In terms of weeks,\nHow long will it take you to finish this type of project?");
 if (duration == "") {// checking for empty string --validation
 	prompt("You may have forgotten to fill that last field there.\nHappens to the best of us when we're excited! Try again.");
 }
var wkProgress = workHrs * hourlyRate / duration; // calculating the project weekly prie rate for the client's project

// Print to the console the results of the user input and the end rough estimate it equates to.
console.log("Based on your " + workHrs + " hours worked this week\nat your current rate of pay, $" + hourlyRate + ",\n you can quote the client: $" + wkProgress + "!");
