// Conditional Logic - With an Expression

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 40 inches in height
if(kidHeight > minHeight){
	//you can ride
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
	console.log("You can ride, but only with a parent present.");
	//you can ride with a parent present
}else{
	//sorry you have growing to do
	console.log("Sorry kidm you've got some growing to do first!");
}