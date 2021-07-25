'use strict';
 let score = 0;
let username = prompt('What\'s your name?');

function firstGreet(){
alert("Hello " + username);
}
firstGreet();


function questionOne(){
let answerOne = prompt('Do I like olives on my pizza?? Answer \'yes\' or \'no\'').toLowerCase();
    if (answerOne === 'yes' || answerOne === 'y') {
        alert('You are correct. I love olives on my pizza!.');
        score++;
    
    } else if (answerOne === 'no' || answerOne === 'n') {
        alert('Sorry, you are wrong.')
    } else {
        alert('Sorry, answers need to be yes or no.')
    }
}
questionOne();


function questionTwo(){
let answerTwo = prompt('Is my favorite color blue? Answer \'yes\' or \'no\'').toLowerCase();
    if (answerTwo === 'yes' || answerTwo === 'y') {
        alert('Nope! Red is my favorite color!');
    } else if (answerTwo === 'no' || answerTwo === 'n') {
        alert('You are correct. My favorite color is actually red.')
        score++;

    } else {
        alert('Sorry, answers need to be yes or no.') 
    }

}
questionTwo ();


function questionThree(){

let answerThree = prompt('Have I ever been to Paris? Answer \'yes\' or \'no\'').toLowerCase();
    if (answerThree === 'yes' || answerThree === 'y') {
        alert('Nope, but I wish!');
    } else if (answerThree === 'no' || answerThree === 'n') {
        alert('Correct. I would love to visit one day however!')
    score++;

    } else {
        alert('Sorry, answers need to be yes or no.')
    }
}
questionThree();


function questionFour(){
let answerFour = prompt('Do I have any tattoos? Answer \'yes\' or \'no\'').toLowerCase();
    if (answerFour === 'yes' || answerFour=== 'y') {
        alert('Correct! I have 3 so far!');
        score++;
    } else if (answerFour === 'no' || answerFour === 'n') {
        alert('Incorrect, I actually have 3 at the moment.')
    } else {
        alert('Sorry, answers need to be yes or no.')
    }
}
questionFour();


function questionFive(){
let answerFive = prompt('Am I muscian? Answer \'yes\' or \'no\'').toLowerCase();

    if (answerFive === 'yes' || answerFive === 'y') {
        alert('You are correct. I play 5 different instruments!');
        score++;

    } else if (answerFive === 'no' || answerFive === 'n') {
        alert('Sorry, I\'m definitely a musician.')
    } else {
        alert('Sorry, answers need to be yes or no.')
    }
}
questionFive();

function questionSix(){
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
}
questionSix();


function questionSeven(){
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
}
questionSeven();