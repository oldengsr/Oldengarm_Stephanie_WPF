//Stephanie Oldengarm, Sept. 11, 2013, Expressions Worksheet, Average Shopping Bill

//Must calculate weekly grocery shopping spending over the past 5 weeks.

var GrocerySpending = new Array(5);
GrocerySpending[0] = 80;
GrocerySpending[1] = 120;
GrocerySpending[2] = 65;
GrocerySpending[3] = 90;
GrocerySpending[4] = 75;

totalSpent = GrocerySpending[0] + GrocerySpending[1] + GrocerySpending[2] + GrocerySpending[3] + GrocerySpending[4]

averageSpent = totalSpent / 5
//average = total amount spent/number of weeks

console.log("You have spent a total of $" + totalSpent + " " + "on groceries over 5 weeks. That is an average of $" + averageSpent + " " + "per week");