//function designed to return true for for responses I want to be "yes," otherwise it should return false

export function isYes(someString) {
    const userInput = someString.toLowerCase().trim();

    if (userInput === 'yes' || userInput === 'y' || userInput === 'yeah') {
        return true;
    } else {
        return false;
    }
}
