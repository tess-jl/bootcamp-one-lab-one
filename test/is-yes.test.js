// IMPORT MODULES under test here:
import { isYes } from '../src/is-yes.js';
const test = QUnit.test;

test('isYes should return true if the user says yes, y, or yeah no matter the caps or spacing', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsYes = isYes(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsYes, true);
});




test('isCorrect should return false if the user says no', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'no';
    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsYes = isYes(userAnswer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsYes, false);
});