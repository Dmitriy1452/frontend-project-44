import { mainRules } from '../index.js'
import { ranNum } from '../math-operations.js'

const hasGcd = (num1, num2) => {
  const min = (num1 > num2) ? num2 : num1
  const max = (num1 > num2) ? num1 : num2

  let a = max
  let b = min

  if (min === 0) {
    return a
  }

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

const gameDescription = 'Find the greatest common divisor of given numbers.'

export const getGcd = () => {
  const firstNumber = ranNum(1, 100)
  const secondNumber = ranNum(1, 100)

  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = hasGcd(firstNumber, secondNumber).toString()

  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

mainRules(getGcd, gameDescription)
