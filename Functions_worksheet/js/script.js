// Albert Martinez
// 08/23/14
// Functions_worksheet

// Circumference ---------- *

// Problem: Calculate the circumference of a circle
// Formula: C = 2πr
// cirumference = 2 * π * radius
var radius = 2;
var circumference = calcCirc(radius);

console.log("The circumference of the circle is " + circumference);
function calcCirc(r) {
	return 2 * π * r;
}
