import { getName, greeting, getExpression, isGameWon, ranNum } from '../index.js';

const expression = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        }
};

export const calculating = () => {
    const name = getName();
    console.log(greeting(name));
    console.log('What is result of the expression?');

    const operators = ['+', '-', '*'];

    for (let i = 3; i > 0; i -= 1) {
        const index = Math.floor(Math.random() * operators.length);
        const ranOperator = operators[index];
        const firstNumber = ranNum();
        const secondNumber = ranNum();
        const randomExp = `${firstNumber} ${ranOperator} ${secondNumber}`;
        
        const question = (getExpression(randomExp));
        const correctAnswer = expression(ranOperator, firstNumber, secondNumber).toString();

        const result = isGameWon(question, correctAnswer);
        console.log(result.message);

        if (!result.isCorrect) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations ${name}!`);
};