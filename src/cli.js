import readlineSync from 'readline-sync';

export const getName = () => {
    const askForName = readlineSync.question('May i have your name? ');
    return askForName;
};