//Albert Martinez
//08/13/2014
//Expressions_worksheet

// 		Dog Years
// Problem: Calculate how old Sparky the pit bull is in dog years based on his actual age.
// Givens:
var humanAge = 5;

// Result Varable:
var dogAge = humanAge * 7;

// Result to Print:
console.log("Sparky is " + humanAge + " human years old which is " + dogAge + " in dog years.");


//		Slice of Pie part 1
// Problem:Create an expression that calculates how much pizza each partygoer will get at the party. (All pizzas have same # of slices)
// Given:
var slices;
var people;
var pies;
var piePerPerson;

// Result Variables: Divide the product of slices and people by pies and assign it to piePerPerson variable 
slices = 8;
people = 30;
pies = 15;
piePerPerson = slices * pies / people;

// Print out the number of slices of pizza pie each person at the party ate
console.log("Each person ate " + piePerPerson + " slices of pizza at the party.");


//		Slice of Pie part II
// Problem: Assume guests get whole slices, how many whole slices will Sparky feast on?
// Given:
// slices = 8;
// people = 30;
// pies = 15;
// piePerPerson = slices * pies / people;

// Result Variables: find the remainder from the product of slices and pies which are divided by people
var sparkySlices = slices * pies % people;

// Print output remainder of whole slices Sparky gets to eat
console.log("Sparky got " + sparkySlices + " slices of pizza");


//		Average shopping bill
// Problem: Create an expression that will use the items in the array to calculate the average amount spent on groceries.
// Givens:
var groceryCost = [135.50, 235.76, 250.00, 157.85, 207.46]

// Total amount spent on groceries: Sum of all the items in the grocerySpending array and store it in the groceryTotal variable
var groceryTotal = groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4];

// Average weekly grocery spending: Divide the groceryTotal by the number of items in the array and store the value in the groceryAvg variable
var groceryAvg = groceryTotal / groceryCost.length;
// check to see if formula above is correct:
// console.log(groceryAvg); 

// Print output average weekly cost of groceries based on last 5 weeks of grovery shopping
console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAvg + " per week");

//		Discounts
// Problem: Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.
// Givens:
var origPrice = 100.00;//original price
var discPerc = 20;//discount percentage
var itemDesc = "Pair of Denim Jeans";
var salesTax = 9 / 100;

// Result Variables:
var noTax = origPrice - origPrice * discPerc / 100;// Discounted origPrice of itemDesc without salesTax
console.log("this is the original price with the discount applied: $" + noTax);
var withTax =  noTax + noTax * salesTax; // Discounted origPrice of itemDesc with salesTax


// Result to Print:
console.log("Your " + itemDesc + " was originally $" + origPrice + ", but after a " + discPerc + "% discount, it is now $" + noTax + " without tax, and $" + withTax + " with tax.");