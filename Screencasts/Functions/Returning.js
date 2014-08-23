// Albert Martinez
// web programming fundamentals
// Functions - Variable Scope

// funcName(argument1, argument2);
// function funcName(parameter1, parameter2) {
	//code to run}

// calcArea(30, 20); // arguments - info stored in our parameters

// function calcArea(w, h) { // storage bin the info gets stored in w=30, h=20
// 	var area = w * h;
// 	console.log(area);}

function dogYears(){
	var age = 4;
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.")
}
console.log(dogYears());

function dogYears(age){ // parameters: "()" act as the storage container for the information such as the value of the age variable
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.")
}
dogYears(4); // passing the value 4 to age

var age1 = 4;
dogYears(age1); // arguments will always be found in the function call or the function invocation

