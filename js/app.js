'use strict';

// get the user's name so we can greet them
let username = prompt('What\'s your name?');
// greet the user
alert("Hello " + username);

// ask question 1
let answerOne = prompt('Do I like Strawberries? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user ntered to question 1: ' + answerOne);

// ask 
if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are correct. I like Strawberries.');
} else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, you are wrong.')
} else {
    alert('Sorry, answers need to be yes or no.')
}