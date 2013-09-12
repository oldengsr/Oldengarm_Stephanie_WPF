//Stephanie Oldengarm, Sept. 11, 2013, Expressions Assignment - Wacky

//Inspired by RuPaul's Dragulator from the Logo show, Drag U, I am creating a literal calculator for a Drag Queen's weekly needs.

var dragShows = prompt("Welcome to the Drag Queen Essentials Calculator!" + "\n" + "\n" +  "Girl, how many fabulous shows do you perform each week?"); //A girl's got to work. Find out how many shows our performer stars in per week.
console.log(dragShows); //print to console

var falseLashes = prompt("Lashes are everything! How many pairs do you use to create the illusion?"); //Most drag queens use multiple pairs of lashes to create their look. Find out how many our girl uses each night.
console.log(falseLashes); //print to console

var pantyHose = prompt("How many pantyhose do you require for your ladyboy transformation each night?"); //Drag queens use multiple pairs of hosery when performing so they don't have to shave their legs! How many does ours need each night?
console.log(pantyHose); //print to console

var weeklyLashes = dragShows * falseLashes
//find out how many lashes are needed per week by multiplying the number of shows by the number of pairs used for each show.

var weeklyHose = pantyHose * dragShows
//find out how many pairs of hosery are needed by multiplying the number of pantyhose used each night and the number of shows per week.

alert("Based on your inputs, you'll need " + weeklyLashes + " pairs of false eyelashes and " + weeklyHose + " pairs of pantyhose a week, Hunty! Now put on those stilettos and WERK!");