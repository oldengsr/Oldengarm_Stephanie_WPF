// Stephanie Oldengarm, Sept. 25, 2013, Functions Worksheet

//CIRCUMFERENCE
//Calculate the circumference of a circle.

var radius = prompt("Please enter the radius of the circle."); //user prompt
var pi = 3.14;
var diameter = radius * 2;

function calcCircum(diameter, pi){ //parameters
	var circum = diameter * pi;
	return circum; //return
}

var circumference = calcCircum(diameter, pi); //argument

console.log("The circumference of the circle is " + circumference);
//print to console "The circumference of the circle is X"

//STUNG!
//Calculate how many bee stings are needed to kill an animal.

var victimWeight = prompt("Please enter the weight of the animal."); //user prompt
//parameters - victim weight in pounds
var deadlyBeeStings = 8.666666667;

function deadlyStingsFunction(stings, weight){ //parameters
	var ouch = stings * weight;
	return ouch; //return
}

var dead = deadlyStingsFunction(deadlyBeeStings, victimWeight); //argument

console.log("It takes " + dead + " bee stings to kill this animal.");
//print to console "It takes X bee stings to kill this animal"