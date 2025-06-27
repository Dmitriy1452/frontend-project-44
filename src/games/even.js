import { mainRules } from '../index.js'
import { ranNum } from '../math-operations.js'

const isEven = num => (num % 2 === 0) ? 'yes' : 'no'

const gameDescription = (`Answer "yes" if the number is even, otherwise answer "no".`)

export const checkIfEven = () => {
  const randomNumber = ranNum(1, 100)

  const question = randomNumber
  const correctAnswer = isEven(randomNumber)

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

mainRules(checkIfEven, gameDescription)
