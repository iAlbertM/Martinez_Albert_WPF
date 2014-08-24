// Albert Martinez
// 08/23/14
// Functions_worksheet

// CIRCUMFERENCE ---------- *

// Problem: Calculate the circumference of a circle
// Formula: Circumference (C) = 2π(PI)r(radius)

// Givens --
var radius = 2;		// Assigning the radius variable a value of 2
var circumference = calcCirc(radius);	// Declaring the result variable / Set the result variable to the result from passing the radius argument to the calcCirc function

console.log("The circumference of the circle is " + circumference);

function calcCirc(r){				// Defining the calcCirc() wand establishing a parameter called: radius
	return 2 * Math.PI * r;			// The code block that will execute when called/invoked. The output will be returned to the result variable: circumference
}


// STUNG ---------- *

// Problem: Calculate how many bee stings it takes to kill an animal in a function

// Givens
// To kill an animal =  8.666666667 bee stings for each 1lb gives the formula = fatal stings = 8.666666667 * victim weight lbs.
var victimWt = 150; // Victims wight in lbs.
var fatalStings = beeSting(victimWt);

console.log("It takes " + fatalStings + " to kill this " + victimWT + ".lb animal.");

function beeSting(wt){
	return 8.666666667 * wt;
}