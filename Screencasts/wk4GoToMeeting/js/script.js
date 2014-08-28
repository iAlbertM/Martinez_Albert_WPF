// Albert Martinez
// WK 4 Video Lecture Notes

// Create a function that takes a min and max number and returns a random number between them

// PROMPT USER FOR MIN NUM
var min = prompt("Let's get a random number between two numbers\nPlease enter a min number:");

// validate the user prompts
// check if user leaves prompts blank or if input isNaN()
while (min === "" || isNaN(min)) {
	// re-prompt user while either condition is true
	min = prompt("Do not leave fields empty and enter only numbers!\nPlease enter a min number:")
}

// PROMPT USER FOR MAX NUM
var max = prompt("Please enter a max number:");

// validate user prompts 
// check for empty fields and non numbers
while (max === "" || isNaN(max)) {
	// re-prompt the use if either condition returns true
	max = prompt("Please enter a max number:");
}

// CREATE A FUNCTION TO RETURN RANDOM NUMBER
function randomizer(minNum, maxNum){

}