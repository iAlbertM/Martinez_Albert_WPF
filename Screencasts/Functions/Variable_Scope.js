// Albert Martinez
// web programming fundamentals
// Functions - Variable Scope

var width = 5; // this variable is scoped to the global scope

// Function Definition
function calcArea() {
	var width = 20; // this width is scoped to calcArea()
	var height = 30;
	var area = width * height;
	console.log(area); // prefers code within the scope they are called in
}
calcArea();

