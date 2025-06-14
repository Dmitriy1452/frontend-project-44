import readlineSync from 'readline-sync';
import { name } from '../bin/brain-even.js';

export const getName = () => {
    const askForName = readlineSync.question('May i have your name? ');
    return askForName;
};

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no'

export const checkIfEven = () => {
    let i = 3

    while (i > 0) { 
        const randomNumber =  Math.round(Math.random() * 100);
        const correctAnswer = isEven(randomNumber);
        
        const question = readlineSync.question(
            `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}\nYour answer: `
        ).toLowerCase().trim();
    
    if (question !== correctAnswer) {
        return `'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`;
    }
    console.log('Correct!');
    i -= 1;
    }
    return `Congratulations, ${name}!`;
};