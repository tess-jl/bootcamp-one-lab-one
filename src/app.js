// import isYes function to use
import { isYes } from './is-yes.js';

const myButton = document.getElementById('action-button');
let correctAnswers = 0;

//button-click handler function, inputs string user name, answers 3 y/n Qs, returns string about score
myButton.onclick = () => {
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

        const quizResult = document.getElementById('quizResult');
        quizResult.textContent = correctAnswers;




    } else {
        return ('not taking the quiz'); //ends the button-click handler function 
    }
};

