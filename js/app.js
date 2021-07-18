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


// SUDO CODE
// comments that describe what I need to do.
// step by step

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//Indicates through an alert if the guess is “too high” or “too low”.
//It should give the user exactly four opportunities to get the correct answer.
//After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// Add 6th question
// respond if too high
// respond if too low
// respond if correct and guesses remaining
// respsond if no correct and no guesses remaining



let myAge = 23
let attemptsRemaining = 4;
let userResponse = null
while (userResponse !== myAge) {
    userResponse = +prompt('How old am I? Please enter a numerical value only');
    console.log(`Guess of my age: ${userResponse}`);
    if (userResponse === myAge) {
        alert('You are correct. Nice job.');
        // break;
    }

    if (userResponse < myAge) {
        alert(`Too low! you have ${attemptsRemaining} attempts remaining.`);
    }

    if (userResponse > myAge) {
        alert(`Too high! you have ${attemptsRemaining} attempts remaining.`);
    }
    attemptsRemaining--;
    // if(attemptsRemaining === 0 && !myAge) {
    // alert('Sorry, the correct answer is ' + myAge)
    // } else if(userResponse === myAge)
    // console.log('You are right!')
    console.log('Attempts remaining', attemptsRemaining)
}


