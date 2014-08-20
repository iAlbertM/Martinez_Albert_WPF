// Conditional Logic - Relational Expressions

var kidHeight = 40;
var minHeight = 48;
var sneakerLift = 2;
var wParentHeight = 48; // the height of the kid with the parent

// if the kid is over 48 inches in height
if(kidHeight >= minHeight){
	// you can ride
	console.log("You can ride the coaster!");
} else if(wParentHeight > minHeight) {
	// you can ride only with a parent present
	console.log("You can ride, but only with a parent present.");
} else{
	// sorry you've got some growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}