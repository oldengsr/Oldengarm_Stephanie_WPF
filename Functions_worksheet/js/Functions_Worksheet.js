// Stephanie Oldengarm, Sept. 25, 2013, Functions Worksheet


//CIRCUMFERENCE
//Calculate the circumference of a circle.

var pi = 3.14;
var radius = prompt("Please enter the radius of the circle."); //parameters - radius
var diameter = radius * 2;
var circumference = calcCircum(diameter, pi);

console.log("The circumference of the circle is " + circumference);
//print to console "The circumference of the circle is X"

function calcCircum(diameter, pi)
{
	return diameter * pi //return - circumference
}

//STUNG!
//Calculate how many bee stings are needed to kill an animal.
//parameters - victim weight in pounds
//return - no. bee stings
//print to console "It takes X bee stings to kill this animal"

var victimWeight = prompt("Please enter the weight of the animal.");
var deadlyBeeStings = 8.666666667 * victimWeight;

console.log("It takes " + deadlyBeeStings + " bee stings to kill this animal.");

function deadlyStingsFunction(deadlyBeeStings)
{
	return deadlyBeeStings
}