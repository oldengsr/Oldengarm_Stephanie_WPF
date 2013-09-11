//Stephanie Oldengarm, Sept. 11, 2013, Expressions Assignment - Industry

//related to current job, managing a frozen yogurt shop

var yogurtCase = 6; //6 cartons per case

var yogurtUse = new Array(4); //use over one particular month
yogurtUse[0] = a
console.log(yogurtUse[0]);
yogurtUse[1] = b
console.log(yogurtUse[1]);
yogurtUse[2] = c
console.log(yogurtUse[2]);
yogurtUse[3] = d
console.log(yogurtUse[3]);

var a = prompt("How many cartons were used in Week 1?");
var b = prompt("How many cartons were used in Week 2?");
var c = prompt("How many cartons were used in Week 3?");
var d = prompt("How many cartons were used in Week 4?");

var totalUsed = +a + +b + +c + +d //add together user input for each week for month's use

var averageWeek = totalUsed / 4

var casesNeeded = totalUsed / 6
//divide the total used for the month by the 6 cartons in each case to find how many cases are needed.

alert("You have used " + totalUsed + " cartons of yogurt for this month, with a weekly average of " + averageWeek + " Based on this information, you should order at least " + casesNeeded + " cases.");