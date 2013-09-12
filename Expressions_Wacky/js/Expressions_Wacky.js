//Stephanie Oldengarm, Sept. 11, 2013, Expressions Assignment - Wacky

//Inspired by RuPaul's Dragulator from the Logo show, Drag U, I am creating a literal calculator for a Drag Queen's weekly needs.

var dragShows = prompt("Girl, how many fabulous shows do you perform each week?");
console.log(dragShows); //A girl's got to work. Find out how many shows our performer stars in per week.

var falseLashes = prompt("Lashes are everything! How many pairs do you use to create the illusion?");
console.log(falseLashes); //Most drag queens use multiple pairs of lashes to create their look. Find out how many our girl uses each night.

var pantyHose = prompt("How many pantyhose do you require for your ladyboy transformation each night?");
console.log(pantyHose);

var weeklyLashes = dragShows * falseLashes

var weeklyHose = pantyHose * dragShows

alert("Based on your inputs, you'll need " + weeklyLashes + " pairs of false eyelashes and " + weeklyHose + " pairs of pantyhose a week, Hunty!");