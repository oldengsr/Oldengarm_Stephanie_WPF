// Stephanie Oldengarm, Sept. 19, 2013, Conditionals Worksheet - Movie Ticket Price

//$12 per ticket
//55 years and older $7
//movie between 3 pm and 5 pm $7

var movieTime = prompt("What time is your movie? Please enter whole number.");
var age = prompt("How old are you?");

if(movieTime >= 3 && movieTime <=5){
	console.log("The ticket price is $7.")
}else if(age >= 50 || age <= 10){
	console.log("The ticket price is $7.")
}else{
	console.log("The ticket price is $12.")
}