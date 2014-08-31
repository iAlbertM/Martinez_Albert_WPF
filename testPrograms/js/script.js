// Albert Martinez
// Attempt at a real industry function creation

// PPROBLEM: create a program that determines the differences in dimensions between two objects in pixels

// GIVENS:
// define the first elements dimensions
var width = 1920;
var height = 1080;

// prompt the user for the second elements dimensions
var testWidth = prompt("To find the differneces in sizes of the objects we need its dimensions\nPlease begin by entering the elements width:");
// Validate user prompts: check for blank fields and string values
while (testWidth === "" || isNaN(testWidth)) {
	// reprompt the user
	testWidth = prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements width:");
}


var testHeight = prompt("Enter its height value:");
// Validate user prompts: check for blank fields and string values
while (testHeight === "" || isNaN(testHeight)) {
	// reprompt the user
	testHeight = prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements height:");
}

// CREATE: a function that compares the values of the test dimensions with the desired dimensions and returns the test element with the new dimensions
// define the reshape function with the following parameters: width (desired testWidth), height (desired testHeight), testW (test element testWidth), testH (test element testHeight)
function reshape(testW, testH) {
	// declare the result variables to be returned outside of the function
	var w;
	var h;

	// determine the excess (-) or needed (+) value to convert the test dimensions into the user defined dimensions
	if(width < testW) {
		testW = testW - (testW - width);
	} else if (width > testW) {
		w = width + (width - testW);
	} else {
		console.log("I've got nothing in here");
	} return w + "px";

	if(height < testH) {
		h = testH - (testH - height);
	} else if (height > testH) {
		h = height + (height - testH);
	} else {
		h = testH;
	} return h + "px"
}


var redShape = reshape(testWidth, testHeight);
console.log(redShape);
document.write(redShape);

var redShape2 = reshape(24, 14);
console.log(redShape2);
document.write(redShape2)
