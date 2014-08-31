// Albert Martinez
// Attempt at a real industry function creation

/* PPROBLEM: You have 2 vector shapes with a given width and height in px: the target element and the test element. Create a function that calculates the differences between the two widths and heights.
Then convert the dimensions of the objects dimensions into the targets dimensions. 
*/

// GIVENS:
// define the first elements dimensions
var width = 1920;
var height = 1080;

// prompt the user for the second elements dimensions
var testWidth = parseInt(prompt("To find the differneces in sizes of the objects we need its dimensions\nPlease begin by entering the elements width:"));
// Validate user prompts: check for blank fields and string values
while (testWidth === "" || isNaN(testWidth)) {
	// reprompt the user
	testWidth = parseInt(prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements width:"));
}


var testHeight = parseInt(prompt("Enter its height value:"));
// Validate user prompts: check for blank fields and string values
while (testHeight === "" || isNaN(testHeight)) {
	// reprompt the user
	testHeight = parseInt(prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements height:"));
}

// CREATE: a function that compares the values of the test dimensions with the desired dimensions and returns the test element with the new dimensions
// define the reshape function with the following parameters: width (desired testWidth), height (desired testHeight), testW (test element testWidth), testH (test element testHeight)
function reshape(testW, testH) {
	// declare the result variables to be returned outside of the function
	var w;
	var h;

	// determine the excess (-) or needed (+) value to convert the test dimensions into the user defined dimensions
	if(width < testW) {
		console.log("Your elements width is greater than the target width by " + Number(testW - width) + "px"); 
		testW -= (testW - width);
	} else if (width > testW) {
		console.log("Your elements width is less than the target width.\nThe difference is " + Number(width - testW) + "px");
		testW += (width - testW);
	} else {
		console.log("I've got no changes in here");
	} w = Number(testW);


	if(height < testH) {
		console.log("the height difference is " + Number(testH - height) + "px");
		testH -= (testH - height);
	} else if (height > testH) {
		console.log("the height difference is " + Number(height - testH) + "px");
		testH += (height - testH);
	} else {
		console.log("what! I'm done!");
	} h = Number(testH);
	return Number(w) + "px x " + Number(h) + "px";
}

// FUNCTION CALL:
// Catch the returning variable in the variable named redShape (redefined shape)
var redShape = reshape(testWidth, testHeight);
console.log(redShape);
document.write(redShape + "</br>");

// re-use the reshape function with an example
var redShape2 = reshape(24, 14);
console.log(redShape2);
document.write(redShape2)
