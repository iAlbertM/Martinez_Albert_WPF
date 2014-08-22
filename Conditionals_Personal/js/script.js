//Albert Martinez
//08/21/2014
//Conditionals_Personal

// Problem: People have a hard time thinking of recipes when starving. Create a program that could help by providing a recipe based on their pantry items and time constraints.

// Givens:
var myPantry = prompt("To Find Recipes that you can make with your ingredients\nEnter the ingredients you want to use or have to use"); // Prompting the user to provide his or her pantry ingredients
	if (myPantry == "") {
		prompt("I think you forgot to fill in the field. Please try again.");
}
var myTime = prompt("How much time do you have for cooking or baking? Use only minutes please, for example if you enter 120 which is 120 minutes or 2 hours") // This is to avoid frustration when seeing a really yummy recipe but takes 1 month to make and you only have 15 min
	if (myTime == "") {
		prompt("I think you forgot to fill in the field. Please try again.");
}
var RasChocMousse = [20, "raspberries", "chocolate bar", "half-n-half"]; // sample recipe - number stands for cooking time minutes
var ingCheck = myPantry == RasChocMousse;
var timCheck = myTime == RasChocMousse[0];

if (ingCheck && timCheck) {
	console.log("Your list of " + myPantry + "ingredients within your pantry and your " + myTime + " minutes contstraint returned the Recipe for Raspberry Chocolate Mousse is a match!");
} else {
	console.log("Sorry, maybe next time we go grocery shopping!");
}


