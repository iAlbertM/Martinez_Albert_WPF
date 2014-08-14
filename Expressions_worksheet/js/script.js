//Albert Martinez
//08/13/2014
//Expressions_worksheet

// Dog Years
	// Problem: Calculate how old Sparky the pit bull is in dog years based on his actual age.
	// Givens: Sparkys age in human years stored in a variable humanAge
	var humanAge = 1;

	// Result Variables:
	var dogAge = humanAge * 7;

	// Result to Print:
	console.log("Sparky is " + humanAge + " human years old which is " + dogAge + " in dog years.");


// Slice of Pie part 1
	// Problem:Create an expression that calculates how much pizza each partygoer will get at the party. (All pizzas have same # of slices)
	// Given:
	var slices;
	var people;
	var pies;
	var piePerPerson;

	// Result Variables: Formula for slices per person: The product of slices and people divided by number of pizze pies and assign it to piePerPerson variable 
	slices = 8;
	people = 10;
	pies = 4;
	piePerPerson = slices * pies / people;

	// Print out the number of slices of pizza pie each person at the party ate
	console.log("Each person ate " + piePerPerson + " slices of pizza at the party.");


// Slice of Pie part II
	// Problem: Assume guests get whole slices, how many whole slices will Sparky feast on?
	// Givens used from Slice of Pie Part 1:

	// Result Variables: find the remainder from the product of slices and pies which are divided by people
	var sparkySlices = slices * pies % people;

	// Print output remainder of whole slices Sparky gets to eat
	console.log("Sparky got " + sparkySlices + " slices of pizza");


// Average shopping bill
	// Problem: Create an expression that will use the items in the array to calculate the average amount spent on groceries.
	// Givens:
	var weeklyCost = [135.50, 235.76, 250.00, 157.85, 207.46]

	// Result Variables:
	var groceryTotal = weeklyCost[0] + weeklyCost[1] + weeklyCost[2] + weeklyCost[3] + weeklyCost[4];	// Total amount spent on groceries: Sum of all the items in the grocerySpending array and store it in the groceryTotal variable
	var groceryAvg = groceryTotal / weeklyCost.length;	// Average weekly grocery spending: Divide the groceryTotal by the number of items in the array and store the value in the groceryAvg variable

	// Print output average weekly cost of groceries based on last 5 weeks of grovery shopping
	console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAvg + " per week");

// Discounts
	// Problem: Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.
	// Givens:
	var origPrice = 100.00;	//original price
	var discPerc = 20;	//discount percentage
	var itemDesc = "Pair of Denim Jeans";
	var salesTax = 9;

	// Result Variables: Discounted price with and without sales tax
	var noTax = origPrice - origPrice * discPerc / 100;		// Convert discount to decimal form by dividing by 100. Apply discount by subtracting it from original price and store in a variable: noTax
	var withTax =  noTax + noTax * salesTax / 100;	// Concert salesTax to decimal by dividing by 100. Add the sales tax amount to noTax and store in the variable withTax


	// Result to Print: the original price of itemDesc, its discount percentage, and its discounted price withTax and with noTax
	console.log("Your " + itemDesc + " was originally $" + origPrice + ", but after a " + discPerc + "% discount, it is now $" + noTax + " without tax, and $" + withTax + " with tax.");