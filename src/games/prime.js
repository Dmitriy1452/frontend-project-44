import { getName, isGameWon, getExpression, greeting, ranNum } from '../index.js';

const isPrime = (num) => {
    if (num < 2) {
        return 'no';
    }

    if (num === 2) {
        return 'yes';
    }

    if (num % 2 === 0) {
        return 'no';
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

export const getPrimeNumber = () => {
    const name = getName();
    console.log(greeting(name));
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

    for (let i = 3; i > 0; i -= 1) {
        const getRandomNum = Math.round((Math.random() * 25) + 1);
        const question = getExpression(getRandomNum);
        const correctAnswer = isPrime(getRandomNum);

        const result = isGameWon(question, correctAnswer);
        console.log(result.message);

        if (!result.isCorrect) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log(`Congratulations, ${name}!`);
    }
};