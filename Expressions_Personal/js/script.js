//Albert Martinez
//08/14/2014
//Expressions_Personal

// Problem: Create a Plan to achieve daily goals
var startTime;
var endTime;
var tasks;
startTime = prompt("In order to accurately create a schedule that fits your schedule,\nPlease state what time you generally start your day?");
endTime = prompt("What is your planned end time?\nPlease include am/pm in your goal time");
tasks = prompt("How many tasks do you plan on generally completing on a daily basis?");

// formula for dividing up time evenly according to number of daily tasks: start time - end time / # of tasks
var schedule;