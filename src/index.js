import readlineSync from 'readline-sync';

export const getName = () => {
    const askForName = readlineSync.question('Welcome to the Brain Games!\nMay i have your name? ');
    return askForName;
};

export const greeting = (userName) => `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`;

export const isGameWon = (flag, name) => {
    if (flag === true) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
}; 

export const getExpression = (num) => readlineSync.question(`Question: ${num}\nYour answer: `).toLowerCase().trim();