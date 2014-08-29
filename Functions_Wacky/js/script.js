// Albert Martinez
// 08/28/2014
// Functions_Wacky

// Function for putting together a party guest list
// promt user for their name for the guest list
var guest = prompt("In order to join the party tonight, you must sign in\nPlease provide your full name: ");
while (guest === "" || !(isNaN(guest)) ){
	guest = prompt("Pleae dont leave fields blank and please enter letters for your name. Please enter your name:");
}
//prompt user for their age to make sure they are at least 21 +
var age = prompt("For security purposes\nHow old are you?");
while (age === "" || isNaN(age)){
	// reprompt user
	age = prompt("Please do not leave fields blank and only enter your actual age.\nFor security purposes please enter your age:");
} 
if (age < 18) {
	// tell user they are too young to party
	console.log("I'm sorry but you're not the right age for this event. Try again soon!");
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