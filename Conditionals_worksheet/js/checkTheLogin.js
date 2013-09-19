// Stephanie Oldengarm, Sept. 18, 2013, Conditionals Worksheet - Check the Login

//make sure user has correct username AND password.

var userName = prompt("Please enter your username:");
var password = prompt("Please enter your password:");

var correctName = "user";
var correctPass = "password";

if(userName == correctName && password == correctPass){
	console.log("Welcome, " + userName + "!")
}else if(userName != correctName && password == correctPass){
	console.log("User name does not match our records.")
}else{
	console.log("Password does not match our records.")
}