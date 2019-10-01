// import isYes function to use
import { isYes } from './is-yes.js';

const myButton = document.getElementById('action-button');

//button-click handler function, inputs string user name, answers 3 y/n Qs, returns string about score
myButton.onclick = () => {
    alert('welcome to my quiz!');

    const userName = prompt('What is your name?'); //asks user's name
    //const sanitizedUserAnswer = userAnswer.toLowerCase().trim();
    const myConfirmation = ('do you want to take my quiz? (yes/no)');
    console.log(myConfirmation);

    if (isYes(myConfirmation) === false) {
        return ('not taking the quiz'); //ends the button-click handler function 
    } else {
        const myPark = prompt('Hi'+ userName + ', is Acadia National Park in Downeast Maine?');
        console.log(myPark);

        const myNeighbor = prompt('Hi'+ userName + ', is my neighbor a blueberry farmer?');
        console.log(myNeighbor);

        const myJob = prompt('Hi'+ userName + ', since moving to Portland, have I worked as a babysitter?');
        console.log(myJob);
    }
        


    //const userEntersYes = isYes(sanitizedUserAnswer);

};

