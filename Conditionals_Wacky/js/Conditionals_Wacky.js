//Stephanie Oldengarm, Sept. 18, 2013, Conditionals - Wacky

//I recently finished reading The Hunger Games trilogy by Suzanne Collins, and wanted to use a Victory Odds as my Wacky Conditional example.

var districtNumber = prompt("Welcome to the Hunger Games. Enter your District (1-12):"); //Prompt for District number 1-12.

var specialTalent = prompt("Do you have a special talent? Please answer yes or no."); //Tributes with a special talent (archery, sword throwing, etc.) have a higher chance of winning than those without.

//The Districts 1 thru 4 usually stand a higher chance of winning the Games, and are called Careers, because they often enjoy and train specifically to be Tributes.

if (districtNumber <= 4 && specialTalent){
//If you are from 1 thru 4, and possess a special talent, your odds of winning are very high.
	console.log("The odds seem to be in your favor, Tribute.");  
//If you are from 1, 2 or 4, and do not possess a special talent, while it can make the Games harder, you are still in a position to win.
}else if (districtNumber == 12 && specialTalent){
        console.log("The odds do not look to be in your favor. Good luck.");
}
//District 12 is at a disadvantage to the other Districts. Regardless of talent, the Tributes from Districts 1 thru 4 train for the Games and usually win.
else {
        console.log("It seems you may have a fighting chance. May the odds be ever in your favor.");
}