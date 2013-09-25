// Functions - Anonymous Functions

//also called closures
//are functions created as the code is run
//must be declared before they are called

var calcArea = function(width, height){ //defining
	var area = width * height;
	return area;
}

var a = calcArea(20, 30) //invoking

console.log(a);