// Albert Martinez
// 08/18/2014
// Conditionals_worksheet

// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

// Problem: Temperature Converter. Create a program that can convert any given
// degree Celsius into Fahrenheit and vice versa depending on a temperature entered by the user:
// Celsius ("C") or Fahrenheit ("F")

// Givens:
// Ask the user to enter any temperature in eithre degrees Celcius or degrees Fahrenheit
var degrees = Number(prompt("Please enter any temperature in \xB0Celsius or \xB0Fahrenheit"));

// If unit variable  is equal to "F", then the input was in Degrees Celcius and will be converted 
var unit = prompt("Enter the Unit you want to convert too:\n'F' for Fahrenheit or 'C' for Celsius").toUpperCase();
var converted;
// if the value of unit is equal to "F", Convert the unit value into degrees Celcius
if(unit == "F") {
	convert = 5 / 9 * degrees - 32;
	console.log("The Temperature is " + converted + "\xB0F (Fahrenheit) | " + degrees + "\xB0C (Celsius)");
}
// Else if the value of unit is equal to "C", Convert the unit value into degrees Fahrenheit
else if(unit.toUpperCase() == "C") {
		9 / 5 * degrees + 32;
		document.write("The Temperature is " + converted + "\xB0C (Celsius) | " + degrees + "\xB0F (Fahrenheit)");
}