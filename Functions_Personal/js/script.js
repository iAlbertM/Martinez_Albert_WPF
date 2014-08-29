// Albert Martinez
// 08/28/2014
// Functions_Personal

// Create a function that returns the status of your blood pressure reading = Normal, High Normal, High, Very High, Seek Medical Attention
// prompt user for top/ first/ larger(normally) number also called the systolic blood pressure number
var sys = prompt("Time to check your blood pressure status and check your heart status\nPlease provide your systolic blood pressure number (the top/first/higher number of the two--generally speaking))";

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (sys === "" || isNaN(sys)) {
	// re prompt user for information if invalid or no input was recieved
	sys = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your systolic blood pressure number");
}

// prompt user for bottom/ second/ smaller(normally) number also called the dyastolic blood pressure number
var dya = prompt("Please provide your dyastolic blood pressure number (the bottom/second/lower number of the two--generally speaking))";

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (dya === "" || isNaN(dya)) {
	// re prompt user for information if invalid or no input was recieved
	dya = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your dyastolic blood pressure number");

	
}