// Stephanie Oldengarm, Sept. 18, 2013, Conditionals - Industry

//Frequent Diner program allows for a free small yogurt every time you reach $50 spent on your Frequent Diner account. $1 = 1 point.

var freeYogurtMin = 50;
//you need a minimum of 50 points to recieve a free small

var userName = prompt("To access your Frequent Diner information, please enter your first and last name:");
//prompt #1 collect user information

var freqDinerCredit = prompt("How many Frequent Diner Points do you have?");
//prompt #2 collect user information
//two prompts to collect user information

var leftOverPoints = freqDinerCredit - freeYogurtMin;
//tell user how many points they have left over.

//if you have 50 points or more
if(freqDinerCredit >= freeYogurtMin){ //if the freqDinerCredit is greater than or equal to freeYogurtMin, the user will recieve a free small yogurt. //relational operator
	console.log("Congratulations, " + userName + "! You have " + freqDinerCredit + " points and will recieve a FREE small yogurt! You now have " + leftOverPoints + " points. A free small yogurt is earned with every 50 points!") //Let user know how many points they have after earning their free small yogurt.
}else{
	console.log("Sorry, you're not quite there yet! You need 50 points to earn a free small!")
}
//if user has not reached 50 points, they will recieve a notification that they aren't there yet.