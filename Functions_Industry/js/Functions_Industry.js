// Stephanie Oldengarm, Sept. 25, 2013, Functions Assignment - Industry

//Can you meet your calorie requirements and enjoy a cup of frozen yogurt?

var ouncesWant = prompt("How many ounces of yogurt do you want?"); //prompt
var calsPerOunce = prompt("How many calories per ounce?"); //prompt
var calLimit = prompt("What is your calorie limit for your yogurt?"); //prompt

function calsPerCup(cupSize, calCup, limitCal){ //function and parameters
	var totalCals = (cupSize * calCup) <= limitCal;
	return totalCals; //return statement
}