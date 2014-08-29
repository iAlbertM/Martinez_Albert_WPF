// Albert Martinez
// 08/28/2014
// Functions_Wacky

/*
 	Function for putting together a party guest list and 
	returning the newly added guests list names in a console.log("message");
*/

// prompt user for their name for the guest list
var guest = prompt("In order to join the party tonight, you must sign in\nPlease provide your full name: ");
// validate user prompts for blank input fields and check for invalid numerical entries
while (guest === "" || !(isNaN(guest)) ){
	guest = prompt("Pleae dont leave fields blank and please enter letters for your name. Please enter your name:");
}

//prompt user for their age to make sure they are at least 18+,check for empty fields, and ensure they enter a number
var age = prompt("For security purposes\nHow old are you?");
while (age === "" || isNaN(age) || Number(age) <= 17){
	// reprompt user
	age = prompt("Please do not leave fields blank and only enter your actual age, and this is an 18+ event\nFor security purposes please enter your age:");
}

// create a function that stores the names of the party guests
function partyGuest(guestName, guestAge){
	// store the names in a variable toat writes them to the console on who the new invite is
	var guestList = console.log("New Guest for your event: " + guestName + ", " + guestAge);

	// return the guestList name and age
	return guestList;
}

// need to catch the returned variable
var guestList1 = partyGuest(guest, age);