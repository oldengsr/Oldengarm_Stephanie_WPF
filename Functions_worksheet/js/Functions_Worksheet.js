// Stephanie Oldengarm, Sept. 25, 2013, Functions Worksheet


//CIRCUMFERENCE
//Calculate the circumference of a circle.
//parameters - radius
//return - circumference
//print to console "The circumference of the circle is X"




//STUNG!
//Calculate how many bee stings are needed to kill an animal.
//parameters - victim weight in pounds
//return - no. bee stings
//print to console "It takes X bee stings to kill this animal"

var weight = prompt("How many pounds does the animal weigh?");
var stingsPerPound = 8.666666667;

var totalStings = function(weight, stingsPerPound){
  var deadlyBeeStings =  weight * stingsPerPound;	
  return deadlyBeeStings;
}

var a = totalStings(weight, stingsPerPound);
console.log("It takes " + a + " bee stings to kill this animal.");