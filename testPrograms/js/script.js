// Albert Martinez
// Auguest 31, 2014
// Attempt at a real industry function creation and a birthday promise kept that was made by me to me. To create a program before the end of August 2014 that was complex enough that it used much of what I learned in class. 


/* PPROBLEM: You have 2 vector shapes with a given width and height in px: the target element and the test element. Create a function that calculates the differences between the two widths and heights.
Then convert the dimensions of the objects dimensions into the targets dimensions. 
*/


// GIVENS:
// define the target elements dimensions
var width = 1920;
var height = 1080;
// show the user the target elements dimensions that he will be comparing his test element to
document.write("The target element width: " + width + "px and its height: " + height + "px </br>");
console.log("The target element width: " + width + "px and its height: " + height + "px </br>");

// prompt the user for the test  elements width
var testWidth = parseInt(prompt("To find the differneces in sizes of the objects we need its dimensions\nPlease begin by entering the elements width:"));
// Validate user prompts: check for blank fields and string values
while (testWidth === "" || isNaN(testWidth)) {
	// reprompt the user
	testWidth = parseInt(prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements width:"));
}

// prompt the user for the elements hight
var testHeight = parseInt(prompt("Enter its height value:"));
// Validate user prompts: check for blank fields and string values
while (testHeight === "" || isNaN(testHeight)) {
	// reprompt the user
	testHeight = parseInt(prompt("Please do not leave fields blank and only use numerical values.\nPlease enter a value for elements height:"));
}

// display to the user the test element dimensions he/she chose
document.write("The test element (your element) width: " + testWidth + "px and its height: " + height + "px </br>");
console.log("The test element (your element) width: " + testWidth + "px and its height: " + height + "px </br>");


// FUNCTION DEFINITION:
// Create a function that compares the values of the test dimensions with the desired dimensions and returns the test element with the new dimensions

// define the reshape function with the following parameters: width (desired testWidth), height (desired testHeight), testW (test element testWidth), testH (test element testHeight)
function reshape(testW, testH) {
	// declare the result variables to be returned outside of the function
	var w;
	var h;

	// Determine the excess (-) or needed (+) value to convert the test dimensions into the user defined dimensions
	// use comparison operators to compare the widths of the two elements and print the result to the user and the console
	if(width < testW) {
		console.log("Your elements width of " + testW + "px is greater than the targets width of " + width + "px by " + Number(testW - width) + "px </br>"); 
		document.write("Your elements width of " + testW + "px is greater than the targets width of " + width + "px by " + Number(testW - width) + "px </br>"); 
		w = Number(testW - width);
		// testW -= (testW - width); optional code to resize test element if conditional is true
	} else if (width > testW) {
		console.log("Your elements width of " + testW + "px is less than the targets width of " + width + "px by " + Number(width - testW) + "px </br>");
		document.write("Your elements width of " + testW + "px is less than the targets width of " + width + "px by " + Number(width - testW) + "px </br>");
		w = Number(width - testW);
		// testW += (width - testW); optional code to resize test element if conditional is true
	} else {
		console.log("Widths are equal!");
		document.write("Widths are equal!");
	}


	// use comparison operators to compare the heights of the two elements and print the result to the user and the console
	if(height < testH) {
		console.log("Your elements height of " + testH + "px is greater then the targets height of " + height + "px by " + Number(testH - height) + "px </br>");
		document.write("Your elements height of " + testH + "px is greater then the targets height of " + height + "px by " + Number(testH - height) + "px </br>");
		h = Number(testH - height);
		// testH -= (testH - height); optional code to resize the test element if conditional is true
	} else if (height > testH) {
		console.log("Your elements height of " + testH + "px is less then the targets height of " + height + "px by " + Number(height - testH) + "px </br>");
		document.write("Your elements height of " + testH + "px is less then the targets height of " + height + "px by " + Number(height - testH) + "px </br>");
		h = Number(height - testH);	
		// testH += (height - testH); optional code to resize test element if conditional is true
	} else {
		console.log("Heights are equal! </br>");
		document.write("Heights are equal! </br>");
	}
	
	// return the results of the comparisons from the code above in a console.log developer friendly and readable message
	return "The difference in their: \nwidth: " + Number(w) + "px and height: " + Number(h) + "px </br>";
}

// FUNCTION CALL():

// Catch the returning variable in the variable named redShape (redefined shape)
var redShape = reshape(testWidth, testHeight);
console.log(redShape + "</br>");
document.write(redShape + "</br>");


// RESULTS = "SUCCESS!""

// re-use the reshape function with an example to make sure code is reuseable and functional
var redShape2 = reshape(24, 14);
console.log(redShape2 + "</br>");
document.write(redShape2 + "</br>");