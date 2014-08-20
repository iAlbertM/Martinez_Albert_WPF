// Albert Martinez
// 08/18/2014
// Conditionals_worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

// Problem: Temperature Converter. Create a program that converts a temperature in degrees Fahrenheit or Celsius entered by the user, which will then convert it into the other (i.e., F to C or C to F) Celsius ("C") or Fahrenheit ("F")
// Givens:
// Store the initial temperature, entered by the user, in a variable named: degrees
var degrees = Number(prompt("Please enter any temperature in \xB0Celsius or \xB0Fahrenheit"));

// Determine the output unit and store the value of the prompt() in a variable named: unit
var unit = prompt("Enter the Unit you want to convert too:\n'F' for Fahrenheit or 'C' for Celsius");
var converted;

// If the value of unit is equal to "F"
if(unit.toUpperCase() == "F") {
	// Convert unit into degrees Fahrenheit and store in a variable named: converted
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
