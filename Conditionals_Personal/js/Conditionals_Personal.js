// Stephanie Oldengarm, Sept. 18, 2013, Conditionals - Personal

//How quickly can I catch up on my favorite TV show?

var totalEpisodes = prompt("We are calculating how quickly you can catch up on a favorite TV show. How many episodes do you need to catch up on?");
//user prompt #1 how many episodes you have left.
var episodeTime = prompt("How many minutes are in each episode?");
//user prompt #2 how many minutes are in each episode.
var timeDedicated = prompt("How much time (in minutes) are you willing to dedicate towards watching your show per week?");
//user prompt #3 how many minutes you want to spend on your show each week.
var totalTime = totalEpisodes * episodeTime;
//calculation of total time (in minutes) required to finish your favorite TV show.

//ternary - (condition) ? result1 : result2