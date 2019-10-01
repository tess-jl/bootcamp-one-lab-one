// import isYes function to use
import { isYes } from './is-yes.js';

const myButton = document.getElementById('action-button');
let correctAnswers = 0;
const hiddenMessage = document.querySelector('.hidden');


//button-click handler function, inputs string user name, answers 3 y/n Qs, returns string about score
myButton.addEventListener = ('click', () => {
    alert('welcome to my quiz!');

    const userName = prompt('What is your name?'); //asks user's name
    const myConfirmation = prompt('do you want to take my quiz? (yes/no)');
    console.log(myConfirmation);

    if (isYes(myConfirmation) === true) { // do want to take quiz
        const question1Answer = prompt('Hi ' + userName + ', is Acadia National Park in Downeast Maine?'); // answer is yes
        if (isYes(question1Answer)) {
            correctAnswers += 1;
        }
        console.log(correctAnswers);

        const question2Answer = prompt('Hi ' + userName + ', is my neighbor a blueberry farmer?'); // answer is no
        if (!isYes(question2Answer)) {
            correctAnswers += 1;
        }
        console.log(correctAnswers);

        const question3Answer = prompt('Hi' + userName + ', since moving to Portland, have I worked as a babysitter?'); // answer is yes
        if (isYes(question3Answer)) {
            correctAnswers += 1;
        }
        console.log(correctAnswers);

        //dock the user name and the score for the results to be revealed
        const nameForQuizResult = document.getElementById('name');
        nameForQuizResult.textContent = userName;

        const quizResult = document.getElementById('quizResult');
        quizResult.textContent = correctAnswers;

        //remove the hidden class to show the user the quiz result after they finish the quiz
        hiddenMessage.classList.remove('hidden');

    } else {
        return ('not taking the quiz'); //ends the button-click handler function since user is not taking the quiz
    }
});

