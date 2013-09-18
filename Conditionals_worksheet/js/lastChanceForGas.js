// Stephanie Oldengarm, Sept. 18, 2013, Conditionals Worksheet - Last Chance for Gas!

//determine if driver can make it across desert with current fuel. They are about to pass last gas station for 200 miles.

var gasMPG = 30;
var percentGas = 60;
var tankCapacity = 12;
var nextStation = 200;

var currentTank = (percentGas / 100) * tankCapacity
//what percentage of the tank the driver currently has.
var milesInTank = currentTank * gasMPG
//how many miles the current tank can take the driver.

if(milesInTank > nextStation){
		//if the miles the driver can go with the current tank in more than 200, they can continue on without getting gas.
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + currentTank + " gallons of gar in your tank, better get gas now while you can!");
		//if the miles the driver can go with the current tank is not more than 200, they will have to stop now for gas.
}