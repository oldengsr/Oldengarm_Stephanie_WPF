//Stephanie Oldengarm, Sept. 11, 2013, Expressions Worksheet - Slice of Pie Part 2

var slicesPizza = 8; //number of slices per pizza.

var partyPeople = 5; //number of people at party.

var pizzaOrdered = 6; //number of pizzas ordered.

var totalSlices = pizzaOrdered * slicesPizza;
//multiply slices of pizza by how many pizzas there are for the total number of slices.

var leftOvers = totalSlices%partyPeople;
//remainder of leftovers

console.log("Sparky got" + " " + leftOvers + " " + "slices of pizza.");