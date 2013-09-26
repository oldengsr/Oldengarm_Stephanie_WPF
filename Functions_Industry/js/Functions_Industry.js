// Stephanie Oldengarm, Sept. 25, 2013, Functions Assignment - Industry

//Can you meet your calorie requirements and enjoy a cup of frozen yogurt?

var ouncesWant = prompt("How many ounces of yogurt do you want?"); //prompt
var calsPerOunce = prompt("How many calories per ounce?"); //prompt
var calLimit = prompt("What is your calorie limit for your yogurt?"); //prompt

function calsPerCup(cupSize, calCup, limitCal){ //function and parameters
	var totalCals = (cupSize * calCup) <= limitCal;
	return totalCals; //return statement
}
var totalCals = calsPerCup(ouncesWant, calsPerOunce, calLimit); //arguement

//if statement, true
if(totalCals === true){ //if the total calories of the cup are less than or equal to the calorie limit, they can have the yogurt.
	console.log("Looks like your choice fits your needs! Enjoy!");
}else{ //if the total calories in the cup are not less than or equal to the calorie limit, they cannot have the yogurt size that they chose.
	console.log("Oops, looks like you need to downgrade your size to meet your limit!");
}
//result to console