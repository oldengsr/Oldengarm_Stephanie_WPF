//Stephanie Oldengarm, Sept. 11, 2013, Expressions Assignment - Industry

//related to current job, managing a frozen yogurt shop

var yogurtUse = new Array(4); //use over one particular month
yogurtUse[0] = (a);
console.log(yogurtUse[0]);
yogurtUse[1] = (b);
console.log(yogurtUse[1]);
yogurtUse[2] = (c);
console.log(yogurtUse[2]);
yogurtUse[3] = (d);
console.log(yogurtUse[3]);

var a = prompt("How many cartons were used in Week 1?");
console.log("" + a + " cartons used in Week 1."); //print to console
var b = prompt("How many cartons were used in Week 2?");
console.log("" + b + " cartons used in Week 2."); //print to console
var c = prompt("How many cartons were used in Week 3?");
console.log("" + c + " cartons used in Week 3."); //print to console
var d = prompt("How many cartons were used in Week 4?");
console.log("" + d + " cartons used in Week 4."); //print to console


var totalUsed = +a + +b + +c + +d //add together user input for each week for month's use

var averageWeek = totalUsed / 4
//find average used per week by dividing the total used by 4 weeks.

var yogurtCase = 6; //6 cartons per case

var casesNeeded = totalUsed / yogurtCase
//divide the total used for the month by the 6 cartons in each case to find how many cases are needed.

console.log("You have used " + totalUsed + " cartons of yogurt for this month, with a weekly average of " + averageWeek + ". Based on this information, you should order at least " + casesNeeded + " cases.");