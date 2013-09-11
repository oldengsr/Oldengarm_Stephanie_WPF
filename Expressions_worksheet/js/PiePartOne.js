// Stephanie Oldengarm, Sept. 11, 2013, Expressions Worksheet - Slice of Pie Part 1

var slicesPizza = 8; //number of slices per pizza.

var partyPeople = 20; //number of people at party.

var pizzaOrdered = 6; //number of pizzas ordered.

var totalSlices = pizzaOrdered * slicesPizza;
//multiply

var peopleSlices = totalSlices/partyPeople
//number of slices divided by the number of people at the party to determine how many slices each person gets.

console.log("Each person ate" + " " + peopleSlices + " " + "slices of pizza at the party.");