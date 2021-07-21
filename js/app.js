'use strict';
 let score = 0;
// get the user's name so we can greet them
let username = prompt('What\'s your name?');
// greet the user
function firstGreet(){

alert("Hello " + username);

}
firstGreet();

// ask question 1
let answerOne = prompt('Do I like olives on my pizza?? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 1: ' + answerOne);

// create response to answers
if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are correct. I love olives on my pizza!.');
    score++;
 
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
    score++;

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
   score++;

} else {
    alert('Sorry, answers need to be yes or no.')
}


// ask question 4
let answerFour = prompt('Do I have any tattoos? Answer \'yes\' or \'no\'').toLowerCase();

//console.log('user entered to question 4: ' + answerFour);

// create response to answers
if (answerFour === 'yes' || answerFour=== 'y') {
    alert('Correct! I have 3 so far!');
    score++;
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
    score++;

} else if (answerFive === 'no' || answerFive === 'n') {
    alert('Sorry, I\'m definitely a musician.')
} else {
    alert('Sorry, answers need to be yes or no.')
}

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

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
        score++;

        break;
    }

    if (userResponse < myAge) {
        alert(`Too low! you have ${attemptsRemaining} attempts remaining.`);
    }

    if (userResponse > myAge) {
        alert(`Too high! you have ${attemptsRemaining} attempts remaining.`);
    }
    attemptsRemaining--;
    if(attemptsRemaining === 0 && userResponse !== myAge) {
    alert('Sorry, the correct answer is ' + myAge);
    break;
    }
    console.log('Attempts remaining', attemptsRemaining);

}


let myFavoriteAnimals = ['wolf', 'tiger', 'gorilla', 'eagle', 'bear' ]
let userInput = prompt ('what is my favorite animal?');
let attempts = 5;
let guessedCorrectly = false;

while (attempts) {
    for (let i = 0; i < myFavoriteAnimals.length; i++) {
        if (userInput === myFavoriteAnimals[i]) {
            alert('Nice! You got it!');
            guessedCorrectly = true;
            score++;
            break;
        } if (!attempts) {
            alert('You are out of attempts');
            break;

        }
    }
if (guessedCorrectly) {
     attempts = 0;
    break;
}
alert(`Please try again, you have ${attempts} remaining`);
userInput = prompt('What is my favorite animal?');
attempts--;
}
alert(`Your possible answers were ${myFavoriteAnimals}`)
alert(`Good job, you got ${score} out of 7!`) 