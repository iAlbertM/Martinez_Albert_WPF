// Albert Martinez
// 08/23/14
// Functions_worksheet

// Circumference ---------- *

// Problem: Calculate the circumference of a circle
// Formula: Circumference (C) = 2π(PI)r(radius)

// Givens --
var radius = 2;		// Assigning the radius variable a value of 2
var circumference = calcCirc(radius);	// Declaring the result variable / Set the result variable to the result from passing the radius argument to the calcCirc function

console.log("The circumference of the circle is " + circumference);

function calcCirc(r){				// Defining the calcCirc() wand establishing a parameter called: radius
	return 2 * Math.PI * r;			// The code block that will execute when called/invoked. The output will be returned to the result variable: circumference
}
