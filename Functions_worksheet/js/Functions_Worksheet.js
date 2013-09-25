// Stephanie Oldengarm, Sept. 25, 2013, Functions Worksheet


//CIRCUMFERENCE
//Calculate the circumference of a circle.
//parameters - radius
//return - circumference
//print to console "The circumference of the circle is X"

var pi = 3.14;
var radius = prompt("Please enter the radius of the circle.");
var diameter = radius * 2;
var circumference = calcCircum(diameter, pi);

console.log("The circumference of the circle is " + circumference);

function calcCircum(diameter, pi)
{
	return diameter * pi
}


//STUNG!
//Calculate how many bee stings are needed to kill an animal.
//parameters - victim weight in pounds
//return - no. bee stings
//print to console "It takes X bee stings to kill this animal"