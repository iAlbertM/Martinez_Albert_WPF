// Albert Martinez
// 08/21/2014
// Conditionals Industry

// Problem: Create an estimate to provide a rough estimate on the cost of a project based on a weekly average hours worked and multiplied by the rate of pay

// Givens:
var workHrs = prompt("To determine estimate for quote, How many hours did you work on the project this week (whole numbers please)?");
 if (workHrs == "") { // validation for the user input
 	prompt("You may have forgotten to fill that last field there. Happens to the best of us when we're excited! Try again.");
 }
 if (workHrs == 0) { //checking to see if user worked at all
 	console.log("No work equals no pay. Sorry! Try harder next time!")
 }
var ratePay = prompt("What is your rate of Pay with these types of projects?"); // Needed for formula for client quote
 if (ratePay == "") {// checking for empty string --validation
 	prompt("You may have forgotten to fill that last field there. Happens to the best of us when we're excited! Try again.");
 }
var wkProgress = workHrs * ratePay; // calculating the project quote

// Print to the console the results of the user input and the end rough estimate it equates to. 
console.log("Based on your " + workHrs + " hours worked this week at your current rate of pay, $" + ratePay + ", you can quote the client: $" + wkProgress + "!");
