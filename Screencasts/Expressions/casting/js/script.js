//Expressions - Casting

var stringVar = "6";
var result = 7 + stringVar;
console.log(result);//adds values like strings: 76

//encase the target in ().
//give the type to treat target as (i.e., String, Number, Array, etc.)
var result = 7 + Number(stringVar);//casting stringVar as number
console.log(result);

//(407) 203-4529
var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
var phoneNo = "(" + String(areaCode) + ") " + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);