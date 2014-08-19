// Albert Martinez
// 08/18/2014
// Conditionals_worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

// Problem: Create a program that can convert any given degree Celsius into Fahrenheit and viece versa depending ons a temperature entered by the user: Celsius ("C") or Fahrenheit ("F")

// Given:
var degrees = Number(prompt("Please enter any temperature in \xB0Celsius or \xB0Fahrenheit",));
var unit;
unit = prompt("Enter the Unit of temperature to convert to: 'F' for Fahrenheit or 'C' for Celsius", "C");
	if(toUpperCase(unit) == "F") {
		5 / 9 * degrees - 32;
	} else
	if(toUpperCase(unit) == "C") {
		9 / 5 * degrees + 32;
	}

// if unit  