// Albert Martinez
// 08/18/2014
// Conditionals_worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

// Problem: Temperature Converter Create a program that can convert any given degree Celsius into Fahrenheit and viece versa depending ons a temperature entered by the user: Celsius ("C") or Fahrenheit ("F")

// Given:
// Ask the user to enter any temperature in eithre degrees Celcius or degrees Fahrenheit
var degrees = Number(prompt("Please enter any temperature in \xB0Celsius or \xB0Fahrenheit", " "));

// If unit variable  is equal to "F", then the input was in Degrees Celcius and will be converted 
unit = prompt("Enter the Unit of temperature to convert to: 'F' for Fahrenheit or 'C' for Celsius", "C");

// if the value of unit is equal to "F", Convert the unit value into degrees Celcius
if (toUpperCase(unit) == "F") {
	5 / 9 * degrees - 32;
}
// if the value of unit is equal to "C", Convert the unit value into degrees Fahrenheit
else if (toUpperCase(unit) == "C") {
		9 / 5 * degrees + 32;
}

document.write("The temperature is \xB0" + X + "degrees Celsius.” Or “The temperature is X degrees Fahrenheit.”")