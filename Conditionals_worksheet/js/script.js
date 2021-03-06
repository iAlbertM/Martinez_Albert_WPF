// Albert Martinez
// 08/18/2014
// Conditionals_worksheet


// Group 1: Expressions with Conditionals
// Celsius to Fahrenheit converter

	// Problem: Create a Temperature Converter that converts any given temperature into degrees Fahrenheit or Celsius, which ever the User chooses.
	// Givens:
	var degrees = Number(prompt("To convert a given temperature\nPlease enter a temperature (e. 75, 97, 98")); // Prompt user for temperature. Store in a variable: degrees
	var unit = prompt("What temperature unit would you like to convert to?\nEnter:\n 'F' for Fahrenheit - or - 'C' for Celsius"); // Prompt user for temperature unit, store in variable: unit
	var converted;

	// If the value of unit is equal to "F"
	if (unit.toUpperCase() == "F") {
		converted = degrees * 9 / 5 + 32; // Convert unit into degrees Fahrenheit and store in variable: converted
		console.log("Your initial " + degrees + "\xB0 temperature is " + converted + "\xB0F"); // Print to the console: first the converted temperature | the originating temperature
	}
	// If the value of unit is equal to "C"
	else if (unit.toUpperCase() == "C") {
		converted = 5 / 9 * (degrees - 32); // Convert unit into degrees Celsius and store in variable: converted
		console.log("Your initial " + degrees + "\xB0F temperature is " + converted + "\xB0C"); // Print to the console the results of the conversion
	} 
	else {
		console.log("Invalid entry. Try again by refreshing the page with: Ctrl + R (Windows) or Cmd + R (Mac)"); // Otherwise print to the console: "No valid input was found"
	}


// Group 2: Multiple Results
// Check the Login

	// Problem: Provide user login and password validation. Including pop-up error messages when incorrect or invalid entries are submitted.
	// Givens:
	var userName = prompt("To create a login:\nPlease enter a username"); // Prompt user for a username. Store in variable: userName
	var userPass = prompt("For your security,\nPlease enter a password"); // Prompt user for a password. Store in variable: userPass
	var logName = prompt("To Login\nPlease enter your username"); // Prompt user for existing userName and store in variable: loginName
	var logPass = prompt("Please enter your password"); // Prompt user for existing userPass and store in variable: loginPass
	var corUser = logName == userName; // Check if logName matches userName. Store results in corUser
	var corPass = logPass == userPass; // Check if logPass matches userPass. Store results in corUser

	// Check if corUser & corPass equate to true
	if (corUser && corPass) {
		console.log("Welcome, " + userName + "!"); // Print output to the console: e.g., "Welcome, AlbertM!"
	}
	// If corUser is NOT true and corPass is true	
	else if (!(corUser) && corPass) {
		console.log("User not found. Try again."); // Print the output to the console: "User not found. Try again."
	}
	// If corUser is true and corPass is NOT true
	else if (corUser && !(corPass)) {
		console.log("Password does not match our records"); // Print to the console: “Password does not match our records.”
	}
	// otherwise, for all other conditions
	else {
		console.log("Invalid Credentials."); // Print to the console: “Password does not match our records.”
	}



// Group 3: Multiple Conditions
// Tire Pressure 1

	// Problem: Create a single conditional statement that checks if a cars given tire pressures pass spec. Front tires must have equal tire pressure, same for the rear tires. The front and rear pressures do not need to match each other.

	// Givens:
	var tirePSI = Number(prompt("What is the PSI for the Front-Left Tire?")); // Ask for the tire's PSI
		if(this == "") {prompt("What is the PSI for the Front-Left Tire?")}
	var tireFR = Number(prompt("What is the PSI for the Front-Right Tire?"));;
		if(tireFR == "") {prompt("What is the PSI for the Front-Right Tire?")}
	var tireRL = Number(prompt("What is the PSI for the Rear-Left Tire?"));;
		if(tireRL == "") {prompt("What is the PSI for the Rear-Left Tire?")}
	var tireRR = Number(prompt("What is the PSI for the Rear-Right Tire?"));;
		if(tireRR == "") {prompt("What is the PSI for the Rear-Right Tire?")}
	var tiresPSI = [tireFL, tireFR, tireRL, tireRR] //store all tire psi into an array
	var froTires = tiresPSI[0] == tiresPSI[1]; // front two tire pressures need to match in order to pass spec
	var reaTires = tiresPSI[2] == tiresPSI[3]; // rear two tire pressures need to match in order to pass spec
	var tireSpec;
	
	
	// Refactored code from line 76 - 82 and consolidated it into a single conditional
		// if (froTires && reaTires) {
		// 	console.log("The tire's pass spec!"); // print to the console: "Tires passed spec"
		// 	document.write("The tire's pass spec!") // so the user sees if their tires passed spec
		// } else {
		// 	console.log("Get your tires checked out!"); // Otherwise print to the console "Check your tires!"
		// 	document.write("Get your tires checked out!"); // print output to the user "Check your tires!"
		// }

	tireSpec = (froTires && reaTires) ? "The tire's pass spec!" : "Get your tires checked out!";