// Albert Martinez
// 08/28/2014
// Functions_Personal

// Create a program that returns the status of your blood pressure reading = Normal, High Normal, High, Very High, Seek Medical Attention
// prompt user for top/ first/ larger(normally) number also called the systolic blood pressure number
var sysNum = prompt("Time to check your blood pressure status\nPlease provide your systolic blood pressure number");

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (sysNum === "" || isNaN(sysNum)) {
	// re prompt user for information if invalid or no input was recieved
	sysNum = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your systolic blood pressure number");
}

// prompt user for bottom/ second/ smaller(normally) number also called the diastolic blood pressure number
var diaNum = prompt("Please provide your diastolic blood pressure number");

//validate user prompts for both blank fields and invalid input types-- in this case, check for non numbers
while (diaNum === "" || isNaN(diaNum)) {
	// re prompt user for information if invalid or no input was recieved
	diaNum = prompt("Do not leave any fields blank and enter numbers only!\nPlease provide your diastolic blood pressure number");	
}
var normal = "Your blood pressure is Normal";
var highNormal = "You should take caution with your blood pressure and see a doctor about changing into healthier life habits and choices, you may have prehypertension";
var highBP1 = "You should speak with your doctor because you have symptons of High Blood Pressure stage 1";
var highBP2 = "Seek Medical attention promptly, you are having symptons of Very High Blood Pressure stage 2"
// create categories for the "if...then" statements for the varying 5 levels of blood pressure results
if( sysNum <= 120 && diaNum <= 80) {
	console.log(normal);
}
if ( sysNum > 120 && sysNum < 139 || diaNum > 80 && diaNum < 89){
	console.log(highNormal);
}
if ( sysNum > 140 && sysNum < 159 || diaNum > 90 && diaNum < 99){
	console.log(highBP1);
}
if ( sysNum >= 160 || diaNum >= 100){
	console.log(highBP2);
}