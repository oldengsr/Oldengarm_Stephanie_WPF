// Stephanie Oldengarm, Sept. 25, 2013, Functions Assignment - Wacky

//Determine vampire feeding skills. As long as the vampire requires less than 30% of human blood supply, they are safe.

var bloodTotal = 5; //Adult human contains approx. 5 litres of blood
var shock = bloodTotal * (30/100);
//blood loss resulting in shock / alerting humans to vampire presence
var bloodNeeds = prompt("How much blood do you require each night?"); //prompt

function bloodSucker(desires, humanNeeds, panic){ //function with parameters
	var safety = desires < humanNeeds && desires < panic;
	return safety; //return statement
}