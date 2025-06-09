import readlineSync from 'readline-sync';

export const getName = () => {
    const askForName = readlineSync.question('May i have your name? ');
    return askForName;
};

export const isEven = () => {
    const askForNumber = readlineSync.question('Answer "yes" if the number is even otherwise "no". ');
    const guessTheNumber = (askForNumber % 2 === 0) ? 'Correct!' : 'Incorrect';
    return guessTheNumber;
};