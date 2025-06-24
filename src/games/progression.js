import { getName, isGameWon, getExpression, greeting, ranNum } from '../index.js';

const progression = (start, step, hiddenNum) => {
    const progrCount = 10;
    const result = [];

    for (let i = start; i < start + progrCount * step; i += step) {
        result.push(i);
    }
    
    const hiddenPos = result[hiddenNum];
    result[hiddenNum] = '..';   
    
    return {
        expression: result.join(' '),
        answer: hiddenPos
    };
};

export const getProgression = () => {
    const name = getName();
    console.log(greeting(name));
    console.log('What number is missing in the progression?');

    for (let i = 3; i > 0; i -= 1) {
        const start = ranNum();
        const step = Math.round((Math.random() * 10) + 1);
        const hiddenNumber = Math.round(Math.random() * 9);
        
        const result = progression(start, step, hiddenNumber);
        
        const question = getExpression(result.expression);
        const correctAnswer = result.answer.toString();

        const endGame = isGameWon(question, correctAnswer);
        console.log(endGame.message);

        if (!endGame.isCorrect) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};