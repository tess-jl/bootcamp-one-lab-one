//function designed to return true for for responses I want to be "yes," otherwise it should return false

export function isYes = (someString) => {
    if(somesString === "yes" && someString === 'y') {
        return true
    } else {
        return false
    }
};