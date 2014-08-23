// Albert Martinez
// web programming fundamentals
// Loops


// While Loops
console.log("---------- while loops ----------");
var a = 50; // Sets up the index

while (a > 0){ // Checks the condition
	console.log(a + "bottles of butter beer on the wall");
	b--; // Increments or Decrements the index
}


// Loops - Do While Loops
console.log("---------- do...while loops ----------");


var c = 10;

do{ // Code block will always run once before the loops first iteration
	console.log(c + " bottles of butter beer on the wall")
	c--;
}
while(c > 0); 


// Loops - For Loops
console.log("---------- for loops ----------");

for (var i = 10; i > 0; i--){
	console.log(i + " bottles of butter beer on the wall")
}
