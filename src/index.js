import readlineSync from 'readline-sync';

export const getName = () => {
    const askForName = readlineSync.question('Welcome to the Brain Games!\nMay i have your name? ');
    return askForName;
};

export const greeting = (userName) => `Hello, ${userName}!`;

export const ranNum = () => Math.round((Math.random() * 100) + 1);

export const getExpression = (num) => readlineSync.question(`Question: ${num}\nYour answer: `).toLowerCase().trim();

export const isGameWon = (question, correctAnswer) => {
    if (question !== correctAnswer) {
        return {
            isCorrect: false,
            message: `'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
        };
    }
    return {
        isCorrect: true,
        message: 'Correct!',
    };
};

/* export const mainRules = (question, correctAnswer) => {   
    const name = getName();

    for (let i = 3; i > 0; i -= 1) {
        const userAnswer = getExpression(question);

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            return `'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
        }
    }
    console.log(`Congratulations, ${name}!`);


}; */
