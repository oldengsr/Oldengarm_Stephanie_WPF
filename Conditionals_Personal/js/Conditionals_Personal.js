// Stephanie Oldengarm, Sept. 18, 2013, Conditionals - Personal

//How quickly can I catch up on my favorite TV show?

var totalEpisodes = prompt("We are calculating how quickly you can catch up on a favorite TV show. How many episodes do you need to catch up on?");
//user prompt #1 how many episodes you have left.
var episodeTime = prompt("How many minutes are in each episode?");
//user prompt #2 how many minutes are in each episode.
var timeDedicated = prompt("How much time (in minutes) are you willing to dedicate towards watching your show per week?");
//user prompt #3 how many minutes you want to spend on your show each week.
var totalTime = totalEpisodes * episodeTime;
//take the episodes left and multiply them by the minutes in each episode to arrive at the total time needed to finish the show.

(timeDedicated >= totalTime) ? console.log("By dedicating " + timeDedicated + " minutes per week, with " + totalTime + " minutes to watch, you can catch up within a week!") : console.log("It will take you more than a week to catch up on your show. Try increasing the minutes you are willing to dedicate. You need to catch up on " + totalTime + " minutes total.")
//ternary - (condition) ? result1 : result2
