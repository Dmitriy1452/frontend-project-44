import { getName, isGameWon, getExpression, greeting } from '../index.js'

const isEven = (num) => (num % 2 === 0) ? 'yes' : 'no'

export const checkIfEven = () => {
    const name = getName();
    console.log(greeting(name));

    let i = 3;
    let isWon = true;

    while (i > 0) { 
        const randomNumber =  Math.round((Math.random() * 100) + 1);
        const correctAnswer = isEven(randomNumber);
        
        const question = getExpression(randomNumber);
    
        if (question !== correctAnswer) {
            console.log(`'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            isWon = false;
            break; 
        }
        console.log('Correct!');
        i -= 1;
    }
    isGameWon(isWon, name);
};