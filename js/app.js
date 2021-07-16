'use strict';

// get the user's name so we can greet them
let username = prompt('What\'s your name?');
// greet the user
alert("Hello " + username);

// ask question 1
let answerOne = prompt('Do I like olives on my pizza?? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 1: ' + answerOne);

// create response to answers
if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are correct. I love olives on my pizza!.');
} else if (answerOne === 'no' || answerOne === 'n') {
    alert('Sorry, you are wrong.')
} else {
    alert('Sorry, answers need to be yes or no.')
}

// ask question 2
let answerTwo = prompt('Is my favorite color blue? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 2: ' + answerTwo);

// create response to answers
if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Nope! Red is my favorite color!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('You are correct. My favorite color is actually red.')
} else {
    alert('Sorry, answers need to be yes or no.') 
}

// ask question 3
let answerThree = prompt('Have I ever been to Paris? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 3: ' + answerThree);

// create response to answers
if (answerThree === 'yes' || answerThree === 'y') {
    alert('Nope, but I wish!');
} else if (answerThree === 'no' || answerThree === 'n') {
    alert('Correct. I would love to visit one day however!')
} else {
    alert('Sorry, answers need to be yes or no.')
}


// ask question 4
let answerFour = prompt('Do I have any tattoos? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 4: ' + answerFour);

// create response to answers
if (answerFour === 'yes' || answerFour=== 'y') {
    alert('Correct! I have 3 so far!');
} else if (answerFour === 'no' || answerFour === 'n') {
    alert('Incorrect, I actually have 3 at the moment.')
} else {
    alert('Sorry, answers need to be yes or no.')
}

// ask question 5
let answerFive = prompt('Am I muscian? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 5: ' + answerFive);

// create response to answers
if (answerFive === 'yes' || answerFive === 'y') {
    alert('You are correct. I play 5 different instruments!');
} else if (answerFive === 'no' || answerFive === 'n') {
    alert('Sorry, I\'m definitely a musician.')
} else {
    alert('Sorry, answers need to be yes or no.')
}

 alert('Thank you for playing, ' + username + '! Make sure to visit my webpage to learn more about me :)')