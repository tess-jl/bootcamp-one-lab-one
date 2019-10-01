// import isYes function to use
import { isYes } from './is-yes.js';

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = ('do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('What National Park is closest to my hometown?');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

    const userEntersYes = isYes(sanitizedUserAnswer);

};

