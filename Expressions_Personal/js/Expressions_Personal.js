// Stephanie Oldengarm, Sept. 11, 2013, Expressions Assignment - Personal

//This is going to determine how many pounds of dog food are required per year, and how many bags you will need to purchase based on pounds, and how much you will spend on dog food per year based on chosen bag.

var Year = 365; //set up days per year to calculate pounds needed based on pounds eaten per day.

var poundsPerDay = prompt("We are calculating the pounds, number of bags, and cost of food required by your dog each year. Results will be rounded to the nearest whole number." + "\n" + "\n" + "How many pounds of food does your dog eat per day?");
console.log(poundsPerDay + " lbs. per day."); //print to console.

var poundsPerBag = prompt("How many pounds are in a bag of your chosen dog food?");
console.log(poundsPerBag + " lbs. per bag."); //print to console.

var bagPrice = prompt("How much does this bag of chosen dog food cost?");
console.log("$" + bagPrice + " per bag."); //print to console.

var poundsYear = Math.round(poundsPerDay * Year); //calculates how many pounds of dog food are required per year based on how many pounds eaten per day. I chose to round the resulting numbers in order to make it more user friendly.

var bagsYear = Math.round(poundsYear / poundsPerBag);
//calculates the number of bags to be used based on pounds per bag.

var costYear = Math.round(bagsYear * bagPrice);
//calculates the cost of dog food per year based on number of bags and price per bag.

console.log("Based on your input, you will require " + poundsYear + " lbs. of dog food, " + bagsYear + " bag(s) of your chosen dog food, and will spend $" + costYear + " per year.");