// Stephanie Oldengarm, Sept. 25, 2013, Functions Assignment - Personal

//Most vehicle manufacturers recommend changing the oil in your car ever 3000 miles.

var carMileage = Number(prompt("How many miles have you driven since your last oil change?"));
// prompt user for info

function oilChange(milesLeft){ //function and parameter
	var changeItMiles = milesLeft >= 3000;
	return changeItMiles; //return statement
}

var changeItMiles = oilChange(carMileage); //argument

if(changeItMiles === true){ //condition
	console.log("You are overdue for an oil change."); //code to be executed if miles are over 3000
}else if(changeItMiles === false){ //condition
	console.log("You are not due for an oil change yet."); //code to be executed if miles are under 3000
}
//else if statement
//result to console