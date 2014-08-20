// Albert Martinez
// 08/18/2014
// Conditionals_worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

// Problem: Temperature Converter. Create a program that converts a temperature in degrees Fahrenheit or Celsius entered by the user, which will then convert it into the other (i.e., F to C or C to F) Celsius ("C") or Fahrenheit ("F")
// Givens:
var degrees = Number(prompt("Please enter any temperature in \xB0Celsius or \xB0Fahrenheit")); // Prompt user for initial temperature and store in a variable named: degrees
var unit = prompt("Enter the Unit you want to convert too:\n'F' for Fahrenheit or 'C' for Celsius"); // Prompt user for the output unit and store in a variable named: unit
var converted;

// If the value of unit is equal to "F"
if(unit.toUpperCase() == "F") {
	// Then convert unit into degrees Fahrenheit and store in a variable named: converted
	converted = degrees * 9 / 5 + 32;
	// Print to the console: first the converted temperature | the originating temperature
	console.log("The Temperature is " + converted + "\xB0F | " + degrees + "\xB0C");
}

// If the value of unit is equal to "C"
else if(unit.toUpperCase() == "C") {
	// Convert unit into degrees Celsius and store in a variable named: converted
	converted = 5 / 9 * (degrees - 32);
	// Print to the console: first the converted temperature | the originating temperature
	console.log("The Temperature is " + converted + "\xB0C | " + degrees + "\xB0F");
} else {
	// Otherwise print to the console: "No valin input was found"
	console.log("I'm sorry but that wasn't a valid input. You need to enter a letter 'C' for Celsius or 'F' for Fahrenheit");
}


// Group 2: Multiple Results
// Check the Login

// Problem: Provide user login and password validation. Including pop-up error messages when incorrect or invalid entries are submitted.
// Givens:
var goodName = prompt("To create a login:\nPlease enter a username"); // Prompt user for sername. Store in variable: userName
var goodPass = prompt("For your security,\nPlease enter a password"); // Prompt user for a password. Store in variable: userPass
// Prompt user for existing userName and userPass
var userName = prompt("Please enter your username");
var userPass = prompt("Please enter your password");

// Check if input matches userName and userPass



// Print to the console: "User not found. Try again." if userName incorrect

// Print to the console: “Password does not match our records.”  if userName matches but userPass does not